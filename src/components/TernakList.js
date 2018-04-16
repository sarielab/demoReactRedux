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
        { this.props.ternaks.isLoading && <h4>Loading Ternaks....</h4>}
        { this.props.ternaks.data.map((ternak, index) => <TernakItem key={index} {...ternak}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ternaks: state.ternaks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTernak: () => dispatch(fetchTernak()),
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (TernakList)