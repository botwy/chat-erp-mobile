import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

export const inputTextElem = ({label, value, onChange}) => (
    <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
      <View >
        <Text style={{fontSize: 18, color: 'grey'}}>{label}</Text>
      </View>
        <View >
       <TextInput value={value} onChange={onChange} style={{fontSize: 23}}>
        </TextInput>
        </View>
    </View>
);