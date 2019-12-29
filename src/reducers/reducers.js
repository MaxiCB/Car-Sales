import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_CARS, UPDATE_ZIP } from '../actions/actions';

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
    ],
    zip: 38016
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
            newState.car.features = newState.car.features.filter((item) => item.name !== action.payload.name)
            return {
                ...newState,
                additionalPrice: newState.additionalPrice -= action.payload.price
            }
        case UPDATE_CARS:
            const price = action.payload.price;
            const make = action.payload.make;
            const model = action.payload.model;
            const year = action.payload.year;
            const image = action.payload.image;
            const newCar = {
                price: price,
                name: year + ' ' + make + ' ' + model,
                image:
                    image,
                features: []
            }
            return { 
                ...newState,
                car: newCar
                
            }
        case UPDATE_ZIP: 
            return {
                ...newState,
                zip: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;