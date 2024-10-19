import React from 'react';
import RootNavigation from './src/navigator/Navigation';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
