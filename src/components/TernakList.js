import React from 'react'

const TernakList = props => (
  <div>
    {props.ternaks.map( (ternak, idx) => <p key={idx}>{ternak.jenis}</p>)}
  </div>
)

export default TernakList