/**
 * Created by botwy 09.03.18
 */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {activityList} from "./activity/activityList";
import RootActivity from "./activity/RootActivity";

class ErpApp extends Component {

    render() {
        const Activity =  activityList[this.props.activity.type];
        return <RootActivity/>;

        return (
           <Activity/>
        );
    }
}

ErpApp.propTypes = {
    activity: PropTypes.shape({
        type: PropTypes.string.isRequired,
        entity: PropTypes.object.isRequired,
        }
    ).isRequired
};

export default connect(
    store=>({activity:store.ui.activity||{type:"default"}})
)(ErpApp);