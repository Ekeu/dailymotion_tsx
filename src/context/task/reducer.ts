import { ITaskState } from '.';
import { types } from './constants';

interface ITaskAction {
  type: string;
  payload: any;
}

const taskReducer = (
  state: ITaskState | null,
  action: ITaskAction
): ITaskState | null => {
  switch (actiontype) {
    case types.SETTASK:
      if (action.payload) {
        return action.payload;
      }
      return null;
    default:
      return state;
  }
};

export default taskReducer;
