import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckList } from './containers/CheckList';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <CheckList />
  </I18nextProvider>
);

window.onload = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.render(<App />, rootElement);
  }
};
