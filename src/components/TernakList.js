import React from 'react'
import { connect } from 'react-redux'

import { fetchTernak } from '../actions'
import TernakItem from './TernakItem'

class TernakList extends React.Component {
  componentDidMount() {
    this.props.fetchTernak()
  }

  render() {
    return (
      <div className="App-intro">
        { this.props.isLoading && <h4>Loading Ternaks....</h4>}
        { this.props.isFetchError && <h4>{this.props.fetchErrorMsg}</h4>}
        { this.props.data.map((ternak, index) => <TernakItem key={index} {...ternak}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const ternaks = state.ternaks
  const {data, isLoading, isFetching, isFetchError, fetchErrorMsg} = ternaks
  return {
    data, isLoading, isFetching, isFetchError, fetchErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTernak: () => dispatch(fetchTernak()),
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (TernakList)