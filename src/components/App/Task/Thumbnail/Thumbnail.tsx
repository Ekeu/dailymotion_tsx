import React, { useContext } from 'react';
import TaskContext from '../../../../context/task';

const Thumbnail = () => {
  const { state } = useContext(TaskContext);
  return (
    <div className='col-span-3 w-full'>
      <img
        alt={'thumbnail'}
        src={state?.moderation?.nextTask?.media?.thumbnailURL}
        className='aspect-[3/2] w-full rounded-2xl object-cover'
      />
    </div>
  );
};

export default Thumbnail;
