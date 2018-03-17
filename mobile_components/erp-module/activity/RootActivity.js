import React, {Component} from 'react';
import {View} from 'react-native';
import {Form} from './Form';
import {inputTextElem} from './ui-elements/inputTextElem';

class RootActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postIndex: '111111',
            city: 'Москва',
            province: 'Rostoskaya',
            street: 'Vavilova',
            house: '54',
            office: '215'
        }
    }

    getElem =(label,value,onChange) =>(
        {elem:inputTextElem, options: {label, value, onChange}}
    )

    getUi = () => {
        const {postIndex, city, province, street, house, office} = this.state;

        return    ({
            uiElems:
                [
                    this.getElem("индекс", postIndex, postIndex => this.setState({postIndex})),
                    this.getElem("город", city, city => this.setState({city})),
                    this.getElem("ростовская", province, province => this.setState({province})),
                    this.getElem("# дома", house, house => this.setState({house})),
                    this.getElem("улица", street, street => this.setState({street})),
                    this.getElem("кв.", office, office => this.setState({office}))
                ]
        })
    }


render() {
        return <Form {...this.getUi()}/>}
}

export default RootActivity;