import React from 'react'
import { connect } from 'react-redux'

import FormItem from './FormItem'
import { addTernak } from '../redux/actions'

const initialForm = {
  jenis: '',
  jumlah: 1,
}

class AddTernakForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialForm
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.tambahTernak(this.state)
    this.setState({ ...initialForm })
  }
  render() {
    return(
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ternaks: state.ternaks
  }
}
// fungsi
const mapDispatchToProps = dispatch => {
  return {
    // tambahTernak: function(ternak) {
    //   return dispatch(addTernak(ternak))
    // }
    tambahTernak: (ternak) => dispatch(addTernak(ternak))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTernakForm)