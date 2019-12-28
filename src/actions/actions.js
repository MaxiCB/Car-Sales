
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADD_FEATURE';

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