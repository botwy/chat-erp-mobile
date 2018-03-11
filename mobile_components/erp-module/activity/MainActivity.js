/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import style from "../StyleMobile";
import {createProdsAction} from "../actions/prodsActionCreator";

const MainActivity = (props) => (
    <View style={style.column}>
        <View style={style.row}><TouchableOpacity onPress={props.toProdsList}><Text> Список товаров </Text></TouchableOpacity></View>
    </View>

);

export default connect (
    undefined,
    dispatch => ({
        toProdsList: ()=>dispatch(createProdsAction())
    })
)(MainActivity);