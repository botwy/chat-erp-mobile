/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import style from "../StyleMobile";
import {createProdsAction} from "../actions/prodsActionCreator";

const ProductDetailActivity = (props) => {
    const prod = props.prods.byId[props.entityId];
    return (<View style={style.column}>
        <TouchableOpacity onPress={props.backToProdsList}><Text> {"<"} </Text></TouchableOpacity>
        <View><Text>Наименование: {prod["title"]}</Text></View>
        <View><Text>Цена: {prod["quantity"]}</Text></View>
        <View><Text>Остаток: {prod["buyPrice"]}</Text></View>
    </View>);

};

ProductDetailActivity.propTypes = {
    uiElemOptions: PropTypes.object.isRequired,
    entityId: PropTypes.string.isRequired,
    prods: PropTypes.shape ({
        byId: PropTypes.object.isRequired,
        allIds: PropTypes.array.isRequired
    }).isRequired
};

export default connect (
    store => ({
        uiElemOptions: store.ui.elemOptions,
        entityId: store.ui.activity.entity.id,
        prods:store.entities.products,
    }),
    dispatch => ({
        backToProdsList: ()=>dispatch(createProdsAction())
    })
)(ProductDetailActivity);