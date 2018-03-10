/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {activityList} from "./activity/activityList";

class ErpApp extends Component {

    render() {
        console.log(this.props.activity);
        const Activity =  activityList[this.props.activity];
        return (
           <Activity/>
        );
    }
}

export default connect(
    store=>({activity:store.ui.activity||"default"})
)(ErpApp);