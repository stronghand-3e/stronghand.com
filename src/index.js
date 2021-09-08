import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { LangProvider } from './context/LangContext';
import Theme from './styles/theme';

render(
  <LangProvider>
    <Theme>
      <App />
    </Theme>
  </LangProvider>,
  document.getElementById('root')
);
