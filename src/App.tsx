import React, { useCallback, useContext, useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import { useLazyQuery } from '@apollo/client';
import { GET_NEXT_MODERATION_TASK } from './apollo/queries';
import Content from './components/Layout/Content/Content';
import TaskContext from './context/task';
import Loader from './components/App/Loader/Loader';
import Error from './components/App/Error/Error';
import { ToastContainer } from 'react-toastify';
import { types } from './context/task/constants';

function App() {
  const [taskID, setTaskID] = useState<string>('#no_id');

  const [getNextTask, { loading, data, error }] = useLazyQuery(
    GET_NEXT_MODERATION_TASK,
    {
      fetchPolicy: 'network-only',
    }
  );

  const memoizedGetNextTask = useCallback(() => {
    getNextTask();
  }, [getNextTask]);

  const { state, dispatch } = useContext(TaskContext);

  useEffect(() => {
    if (taskID !== state?.moderation?.nextTask?.media?.id) {
      memoizedGetNextTask();
    }
  }, [
    data?.moderation?.nextTask?.media?.id,
    memoizedGetNextTask,
    state?.moderation?.nextTask?.media?.id,
    taskID,
  ]);

  useEffect(() => {
    if (data && !error && !loading) {
      dispatch({
        type: types.SET_TASK,
        payload: data,
      });
      setTaskID(data.moderation.nextTask.media.id);
    }
  }, [loading, error, data, dispatch]);

  return (
    <Layout>
      <Header />
      {loading && <Loader className='mt-12' />}
      {!loading && !error && data && <Content getNextTask={getNextTask} />}
      {!loading && error && <Error onReload={getNextTask} />}
      <ToastContainer
        limit={3}
        autoClose={3000}
        hideProgressBar
        toastClassName={'!font-satoshi text-slack-900 font-medium'}
      />
    </Layout>
  );
}

export default App;
