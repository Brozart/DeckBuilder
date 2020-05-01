import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer, { AppState } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];
middlewares.push(thunk);

// redux logger should be last middleware
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: true
    });
    middlewares.push(logger);
}

export const store: Store<AppState, AnyAction> = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
);
