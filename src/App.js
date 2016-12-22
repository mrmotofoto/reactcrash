import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }//END CONSTRUCTOR

  componentWillMount() {
    this.setState({projects: [
      {
        title: "Business",
        category: "Web"
      },
      {
        title: "Shopping",
        category: "Ecom"
      },
      {
        title: "Video",
        category: "Edit Videos"
      }
    ]});
  } //componentWillMount

  render() {
    return (
      <div className="App">
        <h1>Project Manager</h1>
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
