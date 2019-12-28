import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

import { addFeature, removeFeature } from './actions/actions';

const App = (props) => {

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
        {/* <button onClick={buyItem}>Testing</button> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
