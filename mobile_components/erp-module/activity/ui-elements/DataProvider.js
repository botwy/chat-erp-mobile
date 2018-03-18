export const listProvider = function() {
    const {list, formMode} = this.props;
    const {labelSeparator, valueSeparator, checked, label=[],value=[]} = this.itemDataStructure;
    switch (formMode) {
        case FORM_MODE.RADIO_LIST:

            break;
        case FORM_MODE.DELETE_LIST:

            break;
        case FORM_MODE.READ_LIST:
            let newList = [];
            newList = list.map(v => ({
                checked:v[checked],
                label:label.map(vL => {
                    const fields = vL.split('.');
                    if (fields.length===1) return v[fields[0]];
                    return v[fields[0]][fields[1]];
                }).join(labelSeparator),
                value: value.map(vV => v[vV]).join(valueSeparator),
            }))
            return newList;
    }
}