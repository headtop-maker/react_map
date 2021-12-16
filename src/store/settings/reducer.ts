import {ISettings} from './types';
import {ActionType} from './action';
import {AnyAction} from 'redux';

const initialState: ISettings = {
  settingsForm: {
    sendingTime: 1000,
  },
};

const settingsFormReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.changeTime:
      return {
        ...state,
        sendingTime: action.payload,
      };

    default:
      return state;
  }
};

export default settingsFormReducer;
