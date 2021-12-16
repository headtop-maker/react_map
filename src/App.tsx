import React from 'react';
import MainContainer from './container/mainContainer';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
