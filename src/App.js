// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {marked} from 'marked';
import initialvalue from './initialvalue';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: initialvalue
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
  
    return (
      <div className='container'>
        <textarea id="editor" value={this.state.value} onChange={this.handleChange} enabled />
        
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.value)}}></div>
         
      </div>
     
    )

    
  }
}


export default App;
