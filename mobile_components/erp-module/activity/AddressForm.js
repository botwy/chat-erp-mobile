class AddressForm extends Component {
    constructor(props) {
        super(props);

        this.createForm = false;

        this.getInpHandler = getInpHandler;
        this.getInp = getInp;
        this.getSwitch = getSwitch;
        this.getTouchRow = getTouchRow;
    }


    componentWillMount() {
        const {detail:{index}={}} = this.props;
        if(index === null) this.createForm = true;
    }


    getUi = () => {
        const vl = validateText;
        const vlNum = validateNumber;


        //console.log(this.state);
        return    ({
            uiElems:
                [
                    !this.createForm && this.getSwitch("Действующий", 'active'),
                    this.getTouchRow("Тип", "Юридический", true),
                    this.getTouchRow("Страна", "Россия", true),
                    this.getInp("индекс", "postIndex", vlNum),
                    this.getInp("город", "city", vl),
                    this.getInp("регион", "province", vl),
                    this.getInp("# дома", "houseNum", vlNum),
                    this.getInp("улица", "street", vl),
                    this.getInp("кв.", "office", vlNum)
                ],
            pageHeaders: {left: 'Отмена',
                center: this.createForm ? 'Создать новый адрес' : 'Редактировать адрес',
                right: 'Сохранить',
                rightHandler: () => {
                    const {selectModel:{modelName, detail}={}, data} = this.props;
                    if(!detail) return;
                    let newData = data[modelName].slice(0);
                    if (this.createForm) {
                        newData.push({...detail.data, active: true,
                            addressType:{code:'Фактический адрес'},
                            primaryFlg: false,});
                        this.props.saveHandler({...data, [modelName]:newData});
                        return;
                    }
                    newData[detail.index] = detail.data;
                    this.props.saveHandler({...data, [modelName]:newData})
                }
            },
            back: this.props.back
        })
    }

    render() {
        return <FormConstructor {...this.getUi()}/>}
}

export default connect(
    store => ({
        data: store.user.representative.data,
     //   modelName: store.user.representative.selectModel.modelName,
        selectModel: store.user.representative.selectModel.addresses,
    }),
    (dispatch, props) => ({
        initSelectDetail: (modelName, index, initData) => dispatch({type: 'INIT_DETAIL', modelName, index, initData}),
        changeSelectDetail: (newDetailData) => dispatch({type: 'CHANGE_DETAIL', newDetailData}),
        saveHandler: (data) => {
            dispatch(
                updateContact(data,true)

            ).then(props.back)
        }
    }))(AddressForm);