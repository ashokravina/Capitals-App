import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {CapitalItem: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({
      CapitalItem: event.target.value,
    })
  }

  getCountry = () => {
    const {CapitalItem} = this.state
    const Activecountryandcapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === CapitalItem,
    )
    return Activecountryandcapital.country
  }

  render() {
    const {CapitalItem} = this.state
    const country = this.getCountry(CapitalItem)
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="card">
            <select
              className="select"
              value={CapitalItem}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="paragraph">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
