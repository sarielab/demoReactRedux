import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import FormItem from './FormItem'
import { addTernak } from '../actions'

const defaultState = {
  jenis: '',
  jumlah: 1,
  isSubmitted: false
}

class AddTernakForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTernak(this.state)
    this.setState({...defaultState, isSubmitted: true})
  }

  render() {
    return (
      <div>
        <h1>Tambah jenis ternak</h1>
        { this.state.isSubmitted && this.props.isError && <h1>{this.props.updateErrorMsg}</h1>}
        { this.state.isSubmitted && this.props.isUpdating && <h1>Loading....</h1>}
        {
          ( this.state.isSubmitted && this.props.isUpdated) && <Redirect to='/people'/>
        }
        {
          !this.state.isSubmitted &&
          <form onSubmit={this.handleSubmit}>
            <FormItem
              type="text"
              name="jenis"
              placeholder="masukan jenis"
              value={this.state.jenis}
              handleChange={this.handleChange}
            />
            <FormItem
              type="number"
              name="jumlah"
              placeholder="masukan jumlah"
              value={this.state.jumlah}
              handleChange={this.handleChange}
            />
            <input type="submit" value="Add Jenis"/>
          </form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const ternaks = state.ternaks
  const {isUpdating, isUpdated, isUpdateError, updateErrorMsg} = ternaks
  return {
    isUpdating, isUpdated, isUpdateError, updateErrorMsg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTernak: newTernak => dispatch(addTernak(newTernak)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTernakForm)