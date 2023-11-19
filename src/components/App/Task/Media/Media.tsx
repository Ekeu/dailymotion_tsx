import React, { useContext } from 'react';
import TaskContext from '../../../../context/task';

const Media = () => {
  const { state } = useContext(TaskContext);
  return (
    <div className='col-span-6 w-full flex flex-col'>
      <iframe
        width='100%'
        height='100%'
        allowFullScreen
        className='rounded-2xl'
        title='Dailymotion video'
        src={`${state?.moderation.nextTask.media.embedURL}?autoplay=1`}
      ></iframe>
    </div>
  );
};

export default Media;
