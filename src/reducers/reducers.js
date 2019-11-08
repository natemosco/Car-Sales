import { createStore } from "redux";


function reducer() {
    return {
        additionalPrice: 0,
        car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        additionalFeatures: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    };
}


const store = createStore(reducer);

export { reducer, store }



// switch (action.type) {
//     case "ADD":
//         return {
//             ...state,
//             addedFeatures: [state.addedFeatures, action.payload]
//         };
//     case "REMOVE":
//         return {
//             ...state,
//             addedFeatures: state.addedFeatures.filter(item => item.id !== action.payload)
//         };
//         break;

//     default:
//         break;
// }
// return {
//     title: "Hi from the Redux store!"
// }