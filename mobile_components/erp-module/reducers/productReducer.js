

export default productReducer = (state, action) =>
{
    switch (action.type) {
        case "GET_PROD_DETAIL":
            return {...state, ...{ui:
                                   {activity:
                                      {type:"productDetail", entity:
                                              {type:"products",id:action.payload.idProd}
                                      }}}
            }
        case "TO_PRODUCTS_LIST":
           if (!action.payload) return {...state, ...{ui:{activity:{type:"productsList"}}}};
            return {...state, ...{ui:{activity:{type:"productsList"}}}, ...action.payload};

        case "TO_MAIN":
            return {...state, ...{ui:{activity:{type:"main"}}}};

        default :
            return state;
    }
}