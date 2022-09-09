import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../redux/configureStore';
import App from '../../App';

test('snapshot for App', () => {
  const tree = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  expect(tree).toMatchSnapshot();
});
