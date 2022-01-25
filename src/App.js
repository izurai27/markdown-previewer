// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      h1:'Welcome to my React Markdown Previewer!',
      h2:'This is a sub-heading...',

    }    

    this.handleChange = this.handleChange.bind('this');
  }

  handleChange(e){
    this.setState({
      h1:e.target.value,
      h2:e.target.value
    })
    
  }

 
  
  render(){
    
    return (
      <div className='container'>
         <textarea id="editor">
           
         </textarea>
         <div id="preview">
           <h1>{this.state.h1}</h1>
           <h2>{this.state.h2}</h2>
           
         </div>
      </div>
     
    )

    
  }
}


export default App;
