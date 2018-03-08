import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NativeExample from './mobile_components/chat-module/App';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import EventSystem from "./mobile_components/chat-module/EventSystem";
import reducer from "./mobile_components/chat-module/reducer";



const store = createStore(reducer
    , {login:false, loginName: '', senderName: '', msgForSend:'', messages: null, exitFromChat: false}
);

//const store = createStore(reducer, {login:false, loginName: '', senderName: '', msgForSend:'', messages: null, exitFromChat: false});
EventSystem.store = store;

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <NativeExample />
            </Provider>
        );
    }
}