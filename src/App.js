import Ninjas from "./Ninjas";
import "./App.css";
import AddNinja from "./AddNinja";
import React, { Component } from 'react';

class App extends Component {
  state={
  ninjas:[
    {name:'viktor',age:22,belt:"black",id:1},
    {name:'jessica',age:20,belt:"blue", id:2},
    {name:'silas',age:23,belt:"green",id:3},
  ]
  }

  addNinja = (ninja) =>{
ninja.id= Math.random();
let ninjas = [...this.state.ninjas,ninja]
this.setState({
  ninjas:ninjas
})
  }
  deleteNinja= (id)=>{

  }

  render() {
    return (
      <div className="App">
        <h1>this is good</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }

}

export default App;
