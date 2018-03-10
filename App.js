import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ErpApp from './mobile_components/erp-module/App';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {initialStore} from "./mobile_components/erp-module/StoreTree";

const reducer =(state)=>(state);

const store = createStore(reducer
    , initialStore
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <ErpApp />
            </Provider>
        );
    }
}