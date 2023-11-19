import React, { FC, useContext, useEffect, useState } from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import {
  LazyQueryExecFunction,
  MutationFunction,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { CENSOR_MEDIA, VALID_MEDIA } from '../../../../apollo/mutations';
import TaskContext from '../../../../context/task';
import {
  IToastPromiseMessages,
  NotifcationContext,
} from '../../../../context/notification';
import { MODERATE_STATUS_TYPES } from '../../../../constants';

const TOAST_VALID_PROMISE_MESSAGES = {
  pending: 'Validating...',
  success: 'Media validated',
  error: 'Error validating media',
};

const TOAST_CENSOR_PROMISE_MESSAGES = {
  pending: 'Censoring...',
  success: 'Media censored',
  error: 'Error censoring media',
};

interface IModerate {
  getNextTask: LazyQueryExecFunction<any, OperationVariables>;
}

const Moderate: FC<IModerate> = ({ getNextTask }) => {
  const { state } = useContext(TaskContext);
  const [reason, setReason] = useState('');

  const [validMedia, { data, loading }] = useMutation(VALID_MEDIA);
  const [censorMedia, { data: cendorData, loading: censorLoading }] =
    useMutation(CENSOR_MEDIA);
  const { showPromiseNotification, showNotification } =
    useContext(NotifcationContext);

  const actionHandler = (
    cb: MutationFunction,
    toastPromiseMessages: IToastPromiseMessages
  ) => {
    if (!reason) {
      showNotification('Please provide a reason', 'info');
      return;
    }
    const validPromise = cb({
      variables: {
        input: {
          reason,
          id: state?.moderation?.nextTask?.media?.id,
        },
      },
    });

    showPromiseNotification(validPromise, toastPromiseMessages, {
      onRemove: () => {
        setReason('');
      },
    });
  };

  useEffect(() => {
    if (
      data?.mediaValid?.status === MODERATE_STATUS_TYPES.SUCCESS ||
      cendorData?.mediaCensor?.status === MODERATE_STATUS_TYPES.SUCCESS
    ) {
      getNextTask();
    }
  }, [data, cendorData, getNextTask]);

  return (
    <div className='col-span-3 flex flex-col'>
      <div className='flex flex-col space-y-5 flex-1'>
        <Input
          value={reason}
          disabled={loading || censorLoading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReason(e.target.value)
          }
        />
        <div className='flex items-center space-x-4 justify-between'>
          <Button
            className='w-full'
            kind='secondary'
            disabled={loading || censorLoading}
            onClick={() =>
              actionHandler(censorMedia, TOAST_CENSOR_PROMISE_MESSAGES)
            }
          >
            Censor
          </Button>
          <Button
            onClick={() =>
              actionHandler(validMedia, TOAST_VALID_PROMISE_MESSAGES)
            }
            className='w-full'
          >
            Valid
          </Button>
        </div>
      </div>
      <Button
        className='w-full'
        disabled={loading || censorLoading}
        kind='outline'
        onClick={() => {
          getNextTask();
        }}
      >
        Skip
      </Button>
    </div>
  );
};

export default Moderate;
