
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADD_FEATURE';
export const UPDATE_CARS = 'UPDATE_CARS';
export const UPDATE_ZIP ='UPDATE_ZIP';

export function addFeature(feature){
    console.log(feature);
    console.log('ADD')
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export function removeFeature(feature){
    console.log(feature);
    console.log('REMOVE')
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export function updateCars(car){
    console.log(car);
    console.log('UPDATE_CARS');
    return {
        type: UPDATE_CARS,
        payload: car
    }
}

export function updateZip(zip){
    console.log(zip);
    console.log('UPDATE_ZIP');
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}