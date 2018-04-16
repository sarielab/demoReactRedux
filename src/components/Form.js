import React from 'react'

import FormItem from './FormItem';

class Form extends React.Component{
  constructor() {
    super()
    this.state = {
      nama: '',
      kelas: '',
      tanggal: '',
      gender: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    const genderOpt = [
      {value: 'm', label: 'Male'},
      {value: 'f', label: 'Female'},
    ]
    return(
      <div>
        <form>
            <FormItem
              type="text"
              name="nama"
              placeholder="masukan nama"
              value={this.state.nama}
              handleChange={this.handleChange}
            />
            <FormItem
              type="number"
              name="kelas"
              placeholder="masukan kelas"
              value={this.state.kelas}
              handleChange={this.handleChange}
            />
            <FormItem
              type="date"
              name="tanggal"
              placeholder="masukan tanggal"
              value={this.state.tanggal}
              handleChange={this.handleChange}
            />
            <FormItem
              type="select"
              name="gender"
              handleChange={this.handleChange}
              options={genderOpt}
            />
        </form>
      </div>
    )
  }
}

export default Form