import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

let rootElement = document.getElementById('root');

if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

function render(Component) {
  ReactDOM.render(<Component />, rootElement);
}

render(App);

if (module.hot) {
  module.hot.accept(() => {
    const NextApp = require('./containers/app').default;
    renderWidget(NextApp);
  });
}
