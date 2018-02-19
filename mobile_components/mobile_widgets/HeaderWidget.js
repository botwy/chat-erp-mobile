import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import style from "../StyleMobile";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import EventSystem from "../EventSystem";
import {changeMsgAction, chatsActionFunction, getChatsAction} from '../actions';
import axios from "axios";

const HeaderWidget = (props)=>
    (<View style={style.formSendMsg}>
            <View style={style.row}><Text>Ваше имя: {props.senderName}</Text></View>
            <View style={style.row}>
                <TextInput style={style.inputMessage} value={props.msgForSend} onChangeText={props.onchangeMsg}></TextInput>
                <TouchableOpacity style={style.TouchableOpacitys} onPress={EventSystem.events.sendMsg}><Text>Отправить сообщение</Text></TouchableOpacity>
                <TouchableOpacity style={style.TouchableOpacitys} onPress={EventSystem.events.exitChat}><Text>Покинуть чат</Text></TouchableOpacity>
            </View>

        </View>
    );

HeaderWidget.propTypes = {
    senderName: PropTypes.string.isRequired,
    msgForSend: PropTypes.string.isRequired,
    onchangeMsg: PropTypes.func.isRequired
};

export default connect(
    store => ({senderName: store.senderName, msgForSend: store.msgForSend}),
    (dispatch, props) => ({
        onchangeMsg: value => dispatch(changeMsgAction(value))
    })
)(HeaderWidget);

