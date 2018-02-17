import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        margin: 5,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default style;