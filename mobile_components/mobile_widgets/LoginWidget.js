import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import style from '../StyleMobile';
import PropTypes from 'prop-types';
import axios from "axios";
import {connect} from 'react-redux';
import EventSystem from '../EventSystem';
import {changeLoginNameAction} from '../actions';

const LoginWidget = (props) => (
    <View style={style.column}>
        <View style={style.row}><Text>Введите ваше имя: </Text></View>
        <View style={style.row}>
            <TextInput style={style.inputMessage} value={props.loginName} onChangeText={props.onchangeLoginName}></TextInput>
            <TouchableOpacity style={style.buttons} onPress={EventSystem.events.loginTry}><Text>Войти в чат</Text></TouchableOpacity>

        </View>
    </View>
);

LoginWidget.propTypes = {
    loginName: PropTypes.string.isRequired,
    onchangeLoginName: PropTypes.func.isRequired,
};

export default connect(
    store => ({loginName: store.loginName}),
    (dispatch, props) => ({
        onchangeLoginName: value => dispatch(changeLoginNameAction(value)),
    })
)(LoginWidget);
