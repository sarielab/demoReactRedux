import React from 'react'
import { connect } from 'react-redux'

import { fetchTernak } from '../redux/actions'

class TernakList extends React.Component{
  componentDidMount() {
    this.props.ambilData()
  }
  render() {
    return(
      <div>
        { this.props.isLoading && <h1>Is Loading</h1>}
        { this.props.fetchError && <h1>{this.props.fetchErrorMessage}</h1>}
        { this.props.ternaks.map(ternak => <h4 key={ternak.id}>{ternak.jenis} jumlahnya {ternak.jumlah}</h4>)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ambilData: () => dispatch(fetchTernak())
  }
}
const mapStateToProps = state => {
  // ambil dari reducers> indexjs> ternakReducer
  return {
    ternaks: state.ternaks.data,
    isLoading: state.ternaks.isLoading,
    isUpdating: state.ternaks.isUpdating,
    fetchError: state.ternaks.fetchError,
    fetchErrorMessage: state.ternaks.fetchErrorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TernakList)