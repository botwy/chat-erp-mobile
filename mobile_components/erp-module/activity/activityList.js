import React, {Component} from 'react';
import {View, Text} from "react-native";
import ProductsListActivity from "./ProductsListActivity"

export const activityList = {
    default: () => (<View><Text>Activity is not defined</Text></View>),
    productsList: () => (<ProductsListActivity/>)
}

