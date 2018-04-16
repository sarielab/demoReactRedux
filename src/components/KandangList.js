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
        { this.props.kandangs.isLoading && <h4>Loading Kandangs....</h4>}
        { this.props.kandangs.data.map((kandang, index) => <KandangItem key={index} {...kandang}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    kandangs: state.kandangs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKandang: () => dispatch(fetchKandang()),
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (KandangList)