import React from 'react';

import AddKandangForm from '../components/AddKandangForm';
import KandangList from '../components/KandangList';

class Kandang extends React.Component {

  render() {
    return(
      <div>
        <h2>Kandang</h2>
        <KandangList />
        <AddKandangForm/>
      </div>
    );
  }
}

export default Kandang