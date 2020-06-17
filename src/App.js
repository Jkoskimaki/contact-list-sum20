import React, {Component} from 'react';
import {Header } from 'semantic-ui-react';
import Contacts from './components/contacts/Contacts';
import ContactForm from './components/contacts/ContactForm';

// Clean up to be higher order (which is usually a logical) component

class App extends Component {
  //Simulates database, when not built out
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1244'},
    { id: 2, firstName: 'Sally', phone: '133-123-1244'},
    { id: 3, firstName: 'Monty', phone: '323-123-1244'}

  ]}

  addContact = (incomingContact) => {
    const {contacts} = this.state
    const newContact = {id: this.getId(), ...incomingContact}
    this.setState({ contacts: [newContact, ...contacts ]})
  }

  render() {
    const { contacts} = this.state 
    return(
     <div>
       <ContactForm addContact={this.addContact} />
       <Header size = "Huge" color = "blue" textAlign = 'center'>
        Contact List
       </Header>
       <Contacts contacts={contacts} />
     </div> 
    )
  }
}

export default App;
