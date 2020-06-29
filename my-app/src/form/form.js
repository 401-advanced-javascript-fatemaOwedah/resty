import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method : 'method' ,
      url : 'url'
    };
  }
  handleUrl = (e) => {
    e.preventDefault();
    const url = e.target.value;
    this.url = url
  };
  handleMethod = (e) => {
    e.preventDefault();
    const method = e.target.value;
    this.method = method;
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({method : this.method , url : this.url})
  };
  render() {
    return (
      <main>
        <div class="url">
          <label>URL:</label>
          <input type="text" onChange={this.handleUrl} />
          <button onClick={this.handleClick}>GO!</button>
        </div>
        <div class="method">
          <button onClick={this.handleMethod} value="GET" >GET</button>
          <button onClick={this.handleMethod} value="POST">POST</button>
          <button onClick={this.handleMethod} value="PUT">PUT</button>
          <button onClick={this.handleMethod} value="DELETE">DELETE</button>
        </div>
        <div class ='result'>
          <h3>
          {this.state.method} {this.state.url}
          </h3>
        </div>
      </main>
    );
  }
}

export default Form;