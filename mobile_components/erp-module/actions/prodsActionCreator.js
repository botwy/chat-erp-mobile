import axios from "axios";

export const createProdsAction = (idProd) => {
    if (idProd) return {type:"GET_PROD_DETAIL", payload:{idProd}};

/*    let promise = new Promise(resolve =>
      {setTimeout( () => resolve({data:{byId:{1:{title:"async"},},allIds:[1]}})
        ,3000)
    });

   return dispatch => {

       // axios.get("http://192.168.1.4:8080/products/allprods")
       promise
           .then((response) => {
               dispatch({...{type: "TO_PRODUCTS_LIST"}, ...{payload: {entities: {products: response.data}}}});
           })
           .catch((errror) => console.error(errror));
   }*/

    return {type: "TO_PRODUCTS_LIST"};
};