import React, {Component} from 'react';
import {View} from 'react-native';

export const Form = ({uiElems=[]}) => (
    <View>
        {uiElems.map((value) => {
            const Elem = value.elem;
            return (<Elem {...value.options}/>)
        }
        )}
    </View>
);