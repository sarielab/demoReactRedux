import React from 'react'
import { connect } from 'react-redux'

import { fetchKandang } from '../actions'
import KandangItem from './KandangItem'

class KandangList extends React.Component {
  componentDidMount() {
    this.props.fetchKandang()
  }

  render() {
    return (
      <div className="App-intro">
        { this.props.isLoading && <h4>Loading Kandangs....</h4>}
        { this.props.isFetchError && <h4>{this.props.fetchErrorMsg}</h4>}
        { this.props.data.map((kandang, index) => <KandangItem key={index} {...kandang}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const kandangs = state.kandangs
  const {data, isLoading, isFetching, isFetchError, fetchErrorMsg} = kandangs
  return {
    data, isLoading, isFetching, isFetchError, fetchErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKandang: () => dispatch(fetchKandang()),
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (KandangList)