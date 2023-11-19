import React, { FC } from 'react';
import Button from '../Button/Button';
import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';

interface IErrorProps {
  onReload: LazyQueryExecFunction<any, OperationVariables>;
}

const Error: FC<IErrorProps> = ({ onReload }) => {
  return (
    <div className='mt-12 relative bg-white'>
      <div className='px-5 py-10'>
        <div className='mx-auto max-w-2xl text-center font-satoshi'>
          <h2 className='text-3xl font-bold tracking-tight text-slate-800'>
            Error loading your video!
          </h2>
          <p className='mx-auto mt-3 max-w-xl text-lg leading-8 text-slate-600'>
            Please try again by reloading the video.
          </p>
          <div className='mt-5 flex items-center justify-center'>
            <Button onClick={() => onReload()} className=' w-32'>
              Reload{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
