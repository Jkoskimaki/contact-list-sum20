import React, {Component} from 'react';
import {Header } from 'semantic-ui-react';

// Clean up to be higher order (which is usually a logical) component

class App extends Component {
  //Simulates database, when not built out
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1244'},
    { id: 2, firstName: 'Sally', phone: '133-123-1244'},
    { id: 3, firstName: 'Monty', phone: '323-123-1244'}

  ]}

  render() {
    return(
     <div>
       <Header size = "Huge" color = "blue" textAlign = 'center'>
        Contact List
       </Header>
     </div> 
    )
  }
}

export default App;
