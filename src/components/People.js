import React from 'react'
import Axios from 'axios'

const URL = 'https://swapi.co/api'
const styles = {
  card: {
    width: '30%',
    margin: '1.5em',
    padding: '1em'
  }
}

class People extends React.Component{
  constructor() {
    super()
    this.state = {
      people: [],
      sort: 'asc',
      search: ''
    }
  }
  componentDidMount() {
    Axios.get(`${URL}/people/?format=json`)
    .then((res) => {

      if (res.status === 200 && typeof res.data.results !== 'undefined') {
        this.setState({
          people: res.data.results
        })
      }

    })
    .catch((err) => {console.log(err)})
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div className="container-fluid">
          <label>Sort</label>
          <select name="sort" onChange={this.handleChange}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
          <br/>
          <input name="search" placeholder="search" onKeyUp={this.handleChange}/>
          <div className="row">
            {
              this.state.people
              .filter( person => person.name.toLowerCase().startsWith(this.state.search))
              .sort((a, b) => {
                if (this.state.sort === 'asc') {
                  if (a.name > b.name) return 1
                  if (a.name < b.name) return -1
                } else {
                  if (a.name < b.name) return 1
                  if (a.name > b.name) return -1
                }
                return 0;
              })
              .map(person => (
                <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title">{person.name.toUpperCase()}</h5>
                    <p className="card-text">
                      tinggi : {person.height}<br/>
                      mata: {person.eye_color}<br/>
                      rambut: {person.hair_color}<br/>
                      gender: {person.gender}<br/>
                    </p>
                    <a href="#" className="btn btn-primary">Detail</a>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    );
  }
}

export default People