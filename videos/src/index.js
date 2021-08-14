import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// auto reload
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
