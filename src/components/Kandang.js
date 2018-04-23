/* components>Kandang.js */
import React from 'react'

import KandangList from '../components/KandangList'

class Kandang extends React.Component{
  render() {
    return(
      <div>
        <h1>Kandang</h1>
        <KandangList />
      </div>
    )
  }

}

export default Kandang