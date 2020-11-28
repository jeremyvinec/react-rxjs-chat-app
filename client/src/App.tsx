import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import store from "./store";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

function App() {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Routes/>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;