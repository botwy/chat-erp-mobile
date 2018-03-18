import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

export const FormConstructor = ({uiElems=[]}) => (
    <ScrollView style={{flexDirection: 'column', marginTop: 30}}>
        {uiElems.map((value) => {
            if (!value) return;
            const Elem = value.elem;
            return (<Elem {...value.options}/>)
        }
        )}
    </ScrollView>
);