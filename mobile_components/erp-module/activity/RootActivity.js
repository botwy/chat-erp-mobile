import React, {Component} from 'react';
import {View} from 'react-native';
import {FormConstructor} from './ui-elements/FormConstructor';
import {inputTextElem} from './ui-elements/inputTextElem';
import {getInp, getInpHandler, validateNumber, validateText} from './ui-elements/Helpers';
import {FORM_MODE} from './ui-elements/formMode';

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
        this.getInp = getInp;
        this.getInpHandler = getInpHandler;
    }

componentWillMount() {

}


    getUi = () => {
        const {formMode} = this.props;
     const vl = validateText;
     const vlNum = validateNumber;
        return    ({
            uiElems:
                [
                    formMode===FORM_MODE.CREATE &&  this.getInp("form mode", "postIndex"),
                    this.getInp("индекс", "postIndex"),
                    this.getInp("город", "city"),
                    this.getInp("регион", "province"),
                    this.getInp("# дома", "house"),
                    this.getInp("улица", "street"),
                    this.getInp("кв.", "office")
                ]
        })
    }


render() {
        return <FormConstructor {...this.getUi()}/>}
}

export default RootActivity;