/**
 * Created by ZhaoBoWen on 2017/5/29.
 */
import React from 'react'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}/>
        </label>
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'grapefruit'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <textarea value={this.state.value} onChange={this.handleChange}/>
    )
  }

}

export class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Reservation/>
        <form onSubmit={this.handleSubmit}>
          <EssayForm/>
          <br/>
          <FlavorForm/>
          <br/>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

// export function Forms(props) {
//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }