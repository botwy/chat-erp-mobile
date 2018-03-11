import React, {Component} from 'react';
import {View, Text} from "react-native";
import ProductsListActivity from "./ProductsListActivity";
import ProductDetailActivity from "./ProductDetailActivity";
import MainActivity from "./MainActivity";

export const activityList = {
    default: () => (<View><Text>Activity is not defined</Text></View>),

    main: () => <MainActivity/>,

    productsList: () => <ProductsListActivity/>,
    productDetail: () => <ProductDetailActivity/>,

}

