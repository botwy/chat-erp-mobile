/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import style from "../StyleMobile";

const ProductsListActivity = (props) => (
    <ScrollView style={style.column}>
        {props.prodsList.allIds.map(
            (value) =>  (
                <View  key={value} style={style.row}><TouchableOpacity><Text>{props.prodsList.byId[value]["title"]}</Text></TouchableOpacity></View>
            )
        )}
    </ScrollView>
);

export default connect (
    store => ({
        prodsList:store.entities.products,
        uiOptions: store.ui.elemOptions
    }),
    {}
)(ProductsListActivity);