/**
 * Created by botwy 03.01.18
 */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import LoginWidget from './mobile_widgets/LoginWidget';
import style from './StyleMobile';
import PropTypes from 'prop-types';
import {connect} from "react-redux";


class App extends Component {

    render() {

        return (
            <ScrollView style={style.column}>
                <LoginWidget/>
            </ScrollView>
        );
    }
}

export default connect(
    store => ({login: store.login, exitFromChat: store.exitFromChat})
)(App);