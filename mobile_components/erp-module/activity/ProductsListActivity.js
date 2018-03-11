/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import style from "../StyleMobile";
import {createProdsAction} from "../actions/prodsActionCreator";

const ProductsListActivity = (props) => (
    <ScrollView style={style.column}>
        <TouchableOpacity onPress={props.backToMain}><Text>{"<"}</Text></TouchableOpacity>
        {props.prodsList.allIds.map(
            (value) =>  (
                <View key={value} style={style.row}>
                    <TouchableOpacity onPress={()=>props.getProdDetail(value)}>
                        <Text>{props.prodsList.byId[value]["title"]}</Text>
                    </TouchableOpacity>
                </View>
            )
        )}
    </ScrollView>
);

ProductsListActivity.propTypes = {
    ui: PropTypes.object.isRequired,
    prodsList: PropTypes.shape ({
        byId: PropTypes.object.isRequired,
        allIds: PropTypes.array.isRequired
    }).isRequired
};

export default connect (
    store => ({
        ui: store.ui,
        prodsList:store.entities.products,
    }),
    dispatch => ({
        getProdDetail: (idProd)=>dispatch(createProdsAction(idProd)),
        backToMain: ()=>dispatch({type: "TO_MAIN"})
    })
)(ProductsListActivity);