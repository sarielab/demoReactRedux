import React from 'react'
import { connect } from 'react-redux'

import { fetchTernak } from '../actions'

class TernakList extends React.Component {
  componentDidMount() {
    this.props.fetchTernak()
  }

  render() {
    return (
      <div className="App-intro">
        { this.props.ternaks.length === 0 && <h4>Loading Ternaks....</h4>}
        { this.props.ternaks.map((ternak, index) => <p key={index}>{ternak.jenis}</p>)}
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