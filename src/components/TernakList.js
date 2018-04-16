import React from 'react'
import { connect } from 'react-redux'

const TernakList = props => (
  <div>
    {props.ternaks.map( (ternak, idx) => <p key={idx}>{ternak.jenis}</p>)}
  </div>
)

const mapStateToProps = state => {
  return {
    ternaks: state.ternaks
  }
}

export default connect (mapStateToProps, null) (TernakList)