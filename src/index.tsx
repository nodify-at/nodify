import * as React                                      from 'react';
import {render}                                        from 'react-dom';
import {AppContainer}                                  from 'react-hot-loader';
import App                                             from './components/app/App';
import {Provider}                                      from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {axMiddleware}                                  from './store/middleware/axios-middleware';
import {formChangeReducer}                             from './store/reducers/formChangeReducer';
import {navigationReducer}                             from './store/reducers/navigationReducer';

import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bubbletree/dist/bubbletree.css';
import './base.scss';

declare let window: any;

const rootReducer = combineReducers({navigation: navigationReducer, form: formChangeReducer, formSend: formChangeReducer});
const store       = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(axMiddleware));

const rootEl = document.getElementById('root');

render(
    <Provider store={store}>
        <AppContainer><App/></AppContainer>
    </Provider>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./components/app/App', () => {
        const NewApp = require('./components/app/App').default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
