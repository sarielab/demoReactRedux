import React from 'react'
import { connect } from 'react-redux'

const TernakList = props => {
  return(
    <div>
      { props.ternaks.map(ternak => <h4 key={ternak.id}>{ternak.jenis} jumlahnya {ternak.jumlah}</h4>)}
    </div>
  )
}

const mapStateToProps = state => {
  // ambil dari reducers> indexjs> ternakReducer
  return {
    ternaks: state.ternaks.data,
    isLoading: state.ternaks.isLoading,
    isUpdating: state.ternaks.isUpdating
  }
}

export default connect(mapStateToProps, null) (TernakList)