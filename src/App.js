import React, { useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

import { addFeature, removeFeature, updateCars, updateZip } from './actions/actions';

const App = (props) => {

  useEffect(() => {
    axios.get('https://marketcheck-prod.apigee.net/v1/search?api_key=k1zZsvtp4RnuMLp0oL0nm1fOYrzbj965&zip='+ props.zip +'&seller_type=dealer')
      .then(res => updateCar(res.data.listings[0]))
      .catch(err => console.log(err))
  }, [props.zip])

  // THIS IS NOT DYNAMIC. THIS WILL FAIL WHEN THE API RETURN A EMPTY ARRAY. 
  // IF THE RETURNED DATA IS EMPTY THE FALLBACK IS THE INITIAL STATE.
  const updateCar = car => {
    const newCar = props.updateCars;

    newCar({price: car.price,
      make: car.build.make,
      model: car.build.model,
      year: car.build.year,
      image: car.media.photo_links[0]});
  }

  const updateZip = zip => {
    const update = props.updateZip;
    update(zip);
  }

  const removeFeature = item => {
    const remove = props.removeFeature;
    remove(item);
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    const add = props.addFeature;
    add(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures car={props.car} additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
      {/* This updates the ZipCode correctly and fires the API call again. */}
      <button onClick={() => updateZip(38016)}>Testing</button>
      <button onClick={() => updateCar}>Testing</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    zip: state.zip
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature, updateZip, updateCars })(App);
