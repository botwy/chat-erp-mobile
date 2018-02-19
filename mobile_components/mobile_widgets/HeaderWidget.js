import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import style from "../StyleMobile";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import EventSystem from "../EventSystem";
import {changeMsgAction, chatsActionFunction, getChatsAction} from '../actions';
import axios from "axios";

const HeaderWidget = (props)=>
    (<View style={style.row}>
            <View style={style.row}><Text>Ваше имя: {props.senderName}</Text></View>
            <View style={style.row}>
                <TextInput value={props.msgForSend} onChangeText={props.onchangeMsg}></TextInput>
                <Button onPress={EventSystem.events.sendMsg} title="Отправить сообщение"/>
                <Button onPress={EventSystem.events.exitChat} title = "Покинуть чат"/>
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

