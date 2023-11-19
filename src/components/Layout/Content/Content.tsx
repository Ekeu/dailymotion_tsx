import React, { FC, useContext } from 'react';
import Thumbnail from '../../App/Task/Thumbnail/Thumbnail';
import Media from '../../App/Task/Media/Media';
import Moderate from '../../App/Task/Moderate/Moderate';
import TaskContext from '../../../context/task';
import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import HeaderLabel from '../../App/HeaderLabel/HeaderLabel';

interface IContentProps {
  getNextTask: LazyQueryExecFunction<any, OperationVariables>;
}

const Content: FC<IContentProps> = ({ getNextTask }) => {
  const { state } = useContext(TaskContext);

  return (
    <div className='mt-12 grid max-w-full grid-cols-12 gap-4 grid-flow-row-dense'>
      <Thumbnail />
      <Media />
      <Moderate getNextTask={getNextTask} />
      <div className='flex flex-col col-span-3 space-y-2'>
        <HeaderLabel
          header={'Channel name'}
          label={state?.moderation?.nextTask?.media?.channel.name || 'No Name'}
        />
        <HeaderLabel
          header={'Description'}
          label={
            state?.moderation?.nextTask?.media.channel.description ||
            'No Description'
          }
        />
      </div>
      <div className='col-span-6'>
        <HeaderLabel
          header={state?.moderation.nextTask.media.category || 'No Category'}
          label={
            state?.moderation?.nextTask?.media.description || 'No Description'
          }
        />
      </div>
    </div>
  );
};

export default Content;
