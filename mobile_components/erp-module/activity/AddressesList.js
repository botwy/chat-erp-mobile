import React, {Component} from 'react';
import { connect } from 'react-redux';
import {FormConstructor} from './ui-elements/FormConstructor';
import {updateContact} from "../representativeActions";
import {getList,getRadioList, getDeleteList} from '../helpers/UiHelpers';
import {getListProvider} from '../helpers/DataProviders';
import {onExecuteRadio, deleteHandlerCreator} from '../helpers/EventHandlers';
import {FORM_MODE} from '../constants/formMode'


class AddressesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {address: '',
                type: '',},
            menuOpened: false,
        }
        this.itemDataStructure = {
            checked: 'primaryFlg',
            labelArr: ['addressType.code'],
            labelSeparator: ' - ',
            valueArr: ['postIndex', 'city', 'street', 'houseNum', 'office'],
            valueSeparator: ', ',
        };

        this.getListProvider = getListProvider;
        this.onExecuteRadio = onExecuteRadio;
        this.deleteHandlerCreator = deleteHandlerCreator;
    }

    componentWillMount() {
        this.props.initSelectModel('addresses');
    }

    popoverMenuToggle = () => this.setState({ menuOpened:   !this.state.menuOpened    })

    getUi = () => {
        console.log(this.props);
        const { changePrimaryFlg, formMode, gotoEditDetail, gotoEditList, gotoDeleteList } = this.props;


        //  let listType = FORM_MODE.READ_LIST;
        let listPayload = {};
        let pageHeaders = {};
        let dataProvider = [];

        /*  let {addressesActiveFilter, addressesDisactiveFilter } = this.props;

          this.state.data = this.props.data;
          let renderData = this.state.data.addresses;
  */
        /*renderData = renderData.map(v => {
            let goTo = {};
            goTo = formMode === FORM_MODE.RADIO_READ && gotoEditAddress && gotoEditAddress ({data:'addresses', idField: 'addressId', id: v.addressId});
            goTo = formMode === FORM_MODE.DELETE_LIST && (v => {
                console.log(this.state);
                let newList = this.state.data.addresses.filter(v2 => v2.addressId !== v.addressesId );
                this.setState({ data:{addresses:newList} });
                console.log(newList);
                console.log(v.addressId);
                console.log(this.state);
            });
           return (
            {active: v.active,
                checked: false,
                label: v.addressType && v.addressType.code,
                value: [v.postIndex, v.city, v.street, v.houseNum, v.office].join(','),
                goTo,
            }
        ) } );
*/
        switch (formMode) {
            case FORM_MODE.RADIO_LIST:
                dataProvider = this.getListProvider();
                listPayload = getRadioList('label', 'value', dataProvider.renderData, dataProvider.payload.checked, this.onExecuteRadio());
                pageHeaders = {
                    left: 'Отменить', center: 'Изменить признак "Основной"', right: 'Сохранить',
                    rightHandler: () => {}
                }
                break;
            case FORM_MODE.DELETE_LIST:
                dataProvider = this.getListProvider(this.deleteHandlerCreator.bind(this));
                listPayload = getDeleteList('label', 'value', dataProvider.renderData,);
                pageHeaders = {
                    left: 'Отменить', center: 'Удалить адрес', right: 'Сохранить',
                    rightHandler: () => {}
                }
                break;
            case FORM_MODE.READ_LIST:
                dataProvider = this.getListProvider();
                listPayload = getList('label', 'value', dataProvider.renderData, true);
                //console.log(listPayload);
                const rightHeaderMenu = {
                    opened: this.state.menuOpened,
                    doElemOptions: {
                        menuItems: [
                            { label: 'Добавить новый адрес', goTo: gotoEditDetail (null) },
                            //gotoEditAddress ({data:'addresses',idField: 'addressId', id: null}) },
                            { label: "Изменить признак 'Основной'", goTo: gotoEditList },
                        ],
                        deleteMenuItem: {label: 'Удалить адрес', goTo: gotoDeleteList},
                        menuToggle: this.popoverMenuToggle,
                    }
                };

                pageHeaders = {
                    left: 'Назад', center: 'Адреса', right: 'Действие',
                    rightHandler: this.popoverMenuToggle,
                    rightHeaderMenu,
                }
                break;
        }

        return    ({
            pageHeaders,
            listData: {listType: formMode, listPayload},
            back: this.props.back
        })
    }


    render() {
        return <FormConstructor {...this.getUi()}/>}
}

export default connect(
    store => ({
        // data: store.user.representative.data,
        modelName: store.user.representative.selectModel.modelName,
        list: store.user.representative.selectModel.list,
        addressesActiveFilter: store.user.representative.addressesActiveFilter,
        addressesDisactiveFilter: store.user.representative.addressesDisactiveFilter,
    }),
    dispatch => ({
        initSelectModel: (modelName) => dispatch({type: 'INIT_LIST', modelName}),
        changeList: (newList) => dispatch({type: 'LIST_CHANGE', newList}),
    })
)(AddressesList);

