// src > pages > Ternak.js
import React from 'react'

import AddTernakForm from '../components/AddTernakForm'
import TernakList from '../components/TernakList'

class Ternak extends React.Component {
  // addTernak cut ke ternakReducer
  render() {
    return(
      <div>
        <h2>Ternak</h2>
        <TernakList />
        <AddTernakForm/>
      </div>
    )
  }
}

export default Ternak