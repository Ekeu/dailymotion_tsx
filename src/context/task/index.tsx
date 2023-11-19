import { FC, createContext, useReducer } from 'react';
import taskReducer from './reducer';

export interface ITaskState {
  moderation: {
    nextTask: {
      media: {
        id: string;
        category: string;
        embedURL: string;
        description: string;
        thumbnailURL: string;
        channel: {
          description: string;
          name: string;
        };
      };
    };
  };
}

interface ITaskContext {
  state: ITaskState | null;
  dispatch: React.Dispatch<any>;
}

interface ITaskProvider {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContext>({
  state: null,
  dispatch: () => null,
});

export const TaskProvider: FC<ITaskProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, null);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
