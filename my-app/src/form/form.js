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
  handleChangeUrl = (e) => {
    e.preventDefault();
    const url = e.target.value;
    this.url = url
  };
  handleChangeMethod = (e) => {
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
      < main className="main">
        <div className="url">
          <label>URL:</label>
          <input type="text" onChange={this.handleChangeUrl} />
          <button onClick={this.handleClick}>GO!</button>
        </div>
        <div className="method">
          <label>GET</label>
          <input onChange={this.handleChangeMethod} type="radio" id="get" name="method" value="GET"/>
          <label>POST</label>
          <input onChange={this.handleChangeMethod} type="radio" id="post" name="method" value="POST"/>
          <label>PUT</label>
          <input onChange={this.handleChangeMethod} type="radio" id="put" name="method" value="PUT"/>
          <label>DELETE</label>
          <input onChange={this.handleChangeMethod} type="radio" id="delete" name="method" value="DELETE"/>
        </div>
        <div className ='result'>
          <h3>
          {this.state.method} {this.state.url}
          </h3>
        </div>
      </main>
    );
  }
}

export default Form;