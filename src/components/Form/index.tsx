import React, { BaseSyntheticEvent, Component } from 'react';

type myProps = {};

type myState = {
  name: string;
  isStudent: boolean;
  essay: string;
};

export class Form extends Component<myProps, myState> {
  addressInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: myProps) {
    super(props);

    this.state = { name: '', essay: '', isStudent: false };

    this.addressInputRef = React.createRef<HTMLInputElement>();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleTextAreaChange(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ essay: e.currentTarget.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`A name was submitted ${this.state.name}`);
    console.log(`A essay was submitted ${this.state.essay}`);
    console.log(
      `A address with using ref ${this.addressInputRef.current?.value}`
    );
    this.setState({
      name: '',
      essay: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Is student:
          <input
            type='checkbox'
            name='isStudent'
            checked={this.state.isStudent}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Address with Ref:
          <input
            defaultValue='HauNguyen'
            type='text'
            ref={this.addressInputRef}
          />
        </label>
        <br />
        <label>
          Essay:
          <textarea
            value={this.state.essay}
            onChange={this.handleTextAreaChange}
          />
        </label>
        <br />
        <input type='submit' value='Submit' />

        <h2>You entered: {this.state.name}</h2>
      </form>
    );
  }
}

export default Form;
