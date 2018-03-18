import InputTextElem from "../ui/ui-elements/inputTextElem";
//import {Switch} from "ufs-mobile-platform/ios/build/UFSLibrary.framework/JSHeaders/UFSLibrary";
import TouchRow from 'ermkm-mobile-common/component/TouchRow';
import {Switch} from 'ufs-mobile-platform';
import ListElem from "../ui/ui-elements/listElem";
import ListRadioElem from "../ui/ui-elements/listRadioElem";
import ListDeleteElem from "../ui/ui-elements/listDeleteElem";

export const validateText = (v) => (!/^[\s]+|[^a-zA-Zа-яёА-ЯЁ\s\-]+|[\s]{2,}|\-{2,}|\s\-|\-\s/g.test(v))

export const validateNumber = (v) => (!/[^0-9]+/g.test(v))

export const getInpHandler = function (field, validator) {
    const {changeSelectDetail, selectModel:{ detail}={}} = this.props;
    return (v) => {
        if (validator && validator(v))
        { changeSelectDetail({ ...detail.data,[field]:v} ) }
        //validator(v) ?
        /*  this.setState((prevState) => ({
          ...prevState,
          data: {...prevState.data, [field]: v}
      })) */

        //     : null;
        // else this.setState((prevState) => ({...prevState, data: {...prevState.data, [field]: v}}))
    }
}

export const getInp = function (label,field,validator, type = InputTextElem) {
    console.log(this.props);

    const {selectModel:{ detail}={} } = this.props;
    console.log(field);
    console.log(detail.data);
    // return { elem: type, options: {label, value: this.state.data[field], onChange: this.getInpHandler(field, validator)} }
    return { elem: type, options: {label, value: detail.data && detail.data[field], onChange: this.getInpHandler(field, validator)} }
}

export const getTouchRow = function (title,body,isChevron) {
    return {elem: TouchRow, options: {title, body, chevron: isChevron}}
}

export const getSwitch = function (label, field) {
    const {changeSelectDetail, selectModel:{detail}={}} = this.props;
    //   return {elem: Switch, options: {label, checked: this.state.uiOptions.checkedSwitch, onChange}}
    return {elem: Switch, options: { label, checked: detail.data && detail.data[field], onChange: (v) => {
        changeSelectDetail({ ...detail.data, [field]:v }) }} }
}

export const getList = function (labelField, valueField, list=[], isChevron) {
    return ({elem: ListElem, labelField, valueField, list, isChevron})
}

export const getRadioList = function (labelField, valueField, list=[], checked, onExecute) {
    return ({elem: ListRadioElem, labelField, valueField, list, checked, onExecute})
}

export const getDeleteList = function (labelField, valueField, list=[]) {
    return ({elem: ListDeleteElem, labelField, valueField, list})
}
