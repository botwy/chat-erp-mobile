import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },
    row: {
        margin: 5,
        height: 30,
        display: 'flex',
      //  flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default style;