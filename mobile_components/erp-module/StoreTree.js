export const initialStore = {
    entities: {
        products: {
            byId: {
                1:{
                    title: "1230 черн",
                    buyPrice: 700,
                    quantity: 3,
                },
                2:{
                    title: "1221 черн",
                    buyPrice: 300,
                    quantity: 2,
                },
                3:{
                    title: "1628 красн",
                    buyPrice: 350,
                    quantity: 5,
                },
                4:{
                    title: "1943 беж",
                    buyPrice: 650,
                    quantity: 3,
                },
                5:{
                    title: "1235 белый",
                    buyPrice: 450,
                    quantity: 1,
                }
            },
            allIds:[1,2,3,4,5]
        }
    },
    ui: {
        activity: "productsList",
        elemOptions:{
            byId:{
               elemList:{
                   link: true,
               }
            }
        }
    }
};