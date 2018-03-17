import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

export const inputTextElem = ({label, value, onChange}) => (
    <View>
      <View>
        <Text>{label}</Text>
      </View>
       <TextInput value={value} onChange={onChange}>
        </TextInput>
    </View>
);