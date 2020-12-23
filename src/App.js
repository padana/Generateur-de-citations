import React from 'react';
import citations from './citations'
class App extends React.Component{
    state ={
    citations: [],
    
  }
  componentWillMount(){
    this.generatorCitation()
  }

  generatorCitation = e =>{
    const keyArray = Object.keys(citations) 
    // Object.keys cela nous permet de mettre notre objet en array
    const mathKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    this.setState(citations[mathKey])
  };
   render(){
     return(
       <div>
      <p>{this.state.citation}</p>
          
       <span>{this.state.auteur}</span>
         <button onClick ={this.generatorCitation}>Une autre citation</button>
       </div>
     )
   }
}

export default App;

//{this.state.citations.citation1.citation}
//{this.state.citations.citation1.auteur}


