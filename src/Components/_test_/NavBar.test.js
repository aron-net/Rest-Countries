import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import React from 'react';
import NavBar from '../NavBar/NavBar';

test('snapshot for App', () => {
    const tree = render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
    expect(tree).toMatchSnapshot();
});