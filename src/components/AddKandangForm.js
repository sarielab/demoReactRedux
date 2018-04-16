import React from 'react';
import { connect } from 'react-redux'

import FormItem from './FormItem'
import { addKandang } from '../actions'

const defaultState = {
  lokasi: ''
}

class AddKandangForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addKandang(this.state)
    this.setState({...defaultState})
  }

  render() {
    return (
      <div>
        <h1>Tambah lokasi kandang</h1>
        <form onSubmit={this.handleSubmit}>
          <FormItem
            type="text"
            name="lokasi"
            placeholder="masukan lokasi"
            value={this.state.lokasi}
            handleChange={this.handleChange}
          />
          <input type="submit" value="Add Kandang"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addKandang: newKandang => dispatch(addKandang(newKandang)),
  }
}

export default connect(null, mapDispatchToProps)(AddKandangForm)