import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App';
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    createNetworkInterface,
} from 'react-apollo';
import CustomersReduser from './components/reducers/customers';


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
})

export const client = new ApolloClient({
    networkInterface: networkInterface,
})

const store = createStore(
    combineReducers({
        CustomersReduser: CustomersReduser,
        apollo: client.reducer()
    }),
    {}, // initial state
    compose(
        applyMiddleware(client.middleware(), thunk)
    )
);
ReactDOM.render(<ApolloProvider client={client} store={store}>
    <App />
</ApolloProvider>, document.getElementById('root')
);