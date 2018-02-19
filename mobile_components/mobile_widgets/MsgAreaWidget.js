import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import style from "../StyleMobile";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class MsgAreaWidget extends Component {
    render() {
        console.log(this.props.messages);
        if (!this.props.messages)
            return (
                <View style={style.messagesArea}>
                    <View><Text>Loading...</Text></View>
                </View>);

        return (
            <View style={style.messagesArea}>
                {this.props.messages.map(({id, senderName, msgText}) => (
                    <View key={id} style={style.row}>
                        <View>
                            <View style={style.sender}><Text>{senderName}</Text></View>
                        </View>
                        <View>
                            <View style={style.message}><Text>{msgText}</Text></View>
                        </View>
                    </View>
                ))}
            </View>
        );

    }
}

MsgAreaWidget.propTypes = {
    messages: PropTypes.array
};
export default connect(
    store => ({messages: store.messages})
)(MsgAreaWidget);