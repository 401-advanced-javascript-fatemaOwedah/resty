import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method : 'method' ,
        url : 'Initial url'
        };
    }
    handleClick = (e) => {
      e.preventDefault();
      this.setState({method : this.method , url : this.url});
    };
    handleUrl = (e) => {
        const url = e.target.value;
        this.setState({url : url});
       };
    handleMethod = (e) => {
        const method = e.target.value;
        this.setState({method : method});
    };
    
    render() {
      return (
        < main >
        <form>
            <div className="url">
          <label>URL:</label>
          <input type="text" onChange={this.handleUrl} />
          <button onClick={this.handleClick}>GO!</button>
          <br/>
            </div>
            <div className="method">
            <label>GET</label>
          <input onChange={this.handleMethod} type="radio" id="get" name="method" value="GET"/>
          
          <label>POST</label> 
          <input onChange={this.handleMethod} type="radio" id="post" name="method" value="POST"/>
          <label>PUT</label>
          <input onChange={this.handleMethod} type="radio" id="put" name="method" value="PUT"/>
          
          <label>DELETE</label>
          <input onChange={this.handleMethod} type="radio" id="delete" name="method" value="DELETE"/>
          
            </div>

          <div className ='result'>
            {this.state.method}   {this.state.url}
          </div>
          </form>
        </main>
      );
    }
  }

export default Form;