import React from 'react';

import FormItem from './FormItem';

const defaultState = {
  jenis: ''
}

class AddTernakForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleChange = e => {
    this.setState({jenis: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const jenis = this.state.jenis
    this.props.addTernak(jenis)
    this.setState({...defaultState})
  }

  render() {
    return (
      <div>
        <h1>Tambah jenis ternak</h1>
        <form onSubmit={this.handleSubmit}>
          <FormItem
            type="text"
            name="jenis"
            placeholder="masukan jenis"
            value={this.state.jenis}
            handleChange={this.handleChange}
          />
          <input type="submit" value="Add Jenis"/>
        </form>
      </div>
    )
  }
}

export default AddTernakForm