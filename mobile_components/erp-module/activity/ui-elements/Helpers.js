import {inputTextElem} from "./inputTextElem";

export const validateText = (str) => (/^[\s]+|[^a-zA-Zа-яёА-ЯЁ\s\-]+|[\s]{2,}|\-{2,}|\s\-|\-\s|[\s]+$/g.test(str))

export const validateNumber = (num) => (/[^0-9]+/g.test(num))

export const getInpHandler = function (field, validator) {
    return (v) => {
        if (validator) !validator(v) ? this.setState({[field]: v}) : null;
        else this.setState({[field]: v});
    }
}
export const getInp = function (label,field,validator) {
    return {
        elem: inputTextElem,
        options: {label, value: this.state[field],
            onChange: this.getInpHandler(field, validator)}
    }
}
