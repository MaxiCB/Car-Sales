import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions';

const initialState = {
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
}

function reducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case ADD_FEATURE:
            newState.car.features.push({...action.payload})
            return {
                ...newState,
                additionalPrice: action.payload.price,
            }
        case REMOVE_FEATURE:
            let newCar = newState.car;
            newCar.features.filter((item) => item.name !== action.payload.name)
            console.log(action.payload.name)
            console.log(newCar.features[0].name)
            // newCar.features.filter(item => console.log(item.name))
            return {
                ...newState,
                car: newCar,
                additionalPrice: newState.additionalPrice -= action.payload.price
            }
        default: 
            return state;
    }
}

export default reducer;