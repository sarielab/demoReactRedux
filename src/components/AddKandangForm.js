import React from 'react';
import { connect } from 'react-redux'

import FormItem from './FormItem'
import { addKandang } from '../actions'

const defaultState = {
  lokasi: '',
  submited: false
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
    this.setState({...defaultState, isSubmited: true})
  }

  render() {
    return (
      <div>
        <h1>Tambah lokasi kandang</h1>
        { this.state.isSubmited && this.props.isError && <h1>{this.props.updateErrorMsg}</h1>}
        { this.state.isSubmited && this.props.isUpdating && <h1>Loading....</h1>}
        { this.state.isSubmited && this.props.isUpdated && <h1>Sukses update</h1>}
        {
          !this.state.isSubmited &&
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
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  const kandangs = state.kandangs
  const {isUpdating, isUpdateError, updateErrorMsg, isUpdated} = kandangs
  return {
    isUpdating, isUpdateError, updateErrorMsg, isUpdated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addKandang: newKandang => dispatch(addKandang(newKandang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKandangForm)