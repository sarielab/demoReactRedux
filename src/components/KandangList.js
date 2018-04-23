/* components>KandangList.js */
import React from 'react'
import { connect } from 'react-redux'

import { fetchKandang } from '../redux/actions/kandangAction'

class KandangList extends React.Component{
  componentDidMount() {
    this.props.ambilData()
  }
  render() {
    return(
      <div>
        { this.props.data.map(kandang => <h4 key={kandang.id}>{kandang.nama} lokasinya {kandang.lokasi}</h4>)}
      </div>
    )
  }
}
// action
const mapDispatchToProps = dispatch => {
  return {
    ambilData: () => dispatch(fetchKandang())
  }
}
// reducer
const mapStateToProps = state => {
  return {
    data: state.kandangs.data,
    isLoading: state.kandangs.isLoading,
    isUpdating: state.kandangs.isUpdating,
    fetchError: state.kandangs.fetchError,
    fetchErrorMessage: state.kandangs.fetchErrorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (KandangList)