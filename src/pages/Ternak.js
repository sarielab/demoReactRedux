import React from 'react';

import AddTernakForm from '../components/AddTernakForm';
import TernakList from '../components/TernakList';

class Ternak extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     ternaks: [
  //       { jenis: 'Ayam', id: 1 },
  //       { jenis: 'Bebek', id: 2},
  //       { jenis: 'Cacing', id: 3}
  //     ]
  //   }
  // }

  // addTernak = jenis => {
  //   let newId = this.state.ternaks.length;
  //   const newTernak = { jenis: jenis, id: newId}
  //   const newTernaks = [...this.state.ternaks, newTernak];
  //   this.setState({
  //     ternaks: newTernaks
  //   })
  // }

  render() {
    return(
      <div>
        <h2>Ternak</h2>
        <TernakList />
        <AddTernakForm/>
      </div>
    );
  }
}

export default Ternak