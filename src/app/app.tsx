import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckList } from './containers/CheckList';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';

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

  // Render emoji as favicon: https://koddsson.com/posts/emoji-favicon/
  const favicon: HTMLLinkElement = document.querySelector('link[rel=icon]');
  if (favicon) {
    const emoji = favicon.getAttribute('data-emoji');

    if (emoji) {
      const canvas = document.createElement('canvas');
      canvas.height = 64;
      canvas.width = 64;

      const ctx = canvas.getContext('2d');
      ctx.font = '64px serif';
      ctx.fillText(emoji, 0, 64);

      favicon.href = canvas.toDataURL();
    }
  }
};
