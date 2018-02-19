/**
 * Created by botwy 03.01.18
 */
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import LoginWidget from './mobile_widgets/LoginWidget';
import HeaderWidget from './mobile_widgets/HeaderWidget';
import MsgAreaWidget from './mobile_widgets/MsgAreaWidget';
import style from './StyleMobile';
import PropTypes from 'prop-types';
import {connect} from "react-redux";


class App extends Component {

    render() {
        if (!this.props.login) return <LoginWidget/>;

        return (
            <ScrollView style={style.column}>
                <HeaderWidget/>
                <MsgAreaWidget/>
            </ScrollView>
        );
    }
}

export default connect(
    store => ({login: store.login, exitFromChat: store.exitFromChat})
)(App);