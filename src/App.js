import React, {useState} from 'react';
import './App.css';
import Contact from './components/Contact.jsx';
import contactData from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactData)

  const handleRandom = (elem) => {
    const newContact = [...contacts]
    const indexRandom = Math.floor(Math.random()*(contactData.length-5)+5)
    const random = contactData[indexRandom]
    newContact.push(random)
    setContacts(newContact)
  }
  const handleSortPopularity = () => {
    const orderedPopularity= [...contacts].sort((a,b) => a.popularity - b.popularity)
    setContacts(orderedPopularity)
  }
  
  const handleSortName = () => {
    const orderedName = [...contacts].sort((a,b) => a.name.localeCompare (b.name))
    setContacts(orderedName)
  }

  const handleDelete = (_id) => {
     const deleted = contacts.filter(elem => elem._id !== _id)
     setContacts(deleted)
   }

  

  

  return (
    <div className="App">
      <h1> IRONCONTACTS</h1>
      <button onClick={handleRandom}> Get random contact</button>
      <button onClick={handleSortName}> Order by name</button>
      <button onClick={handleSortPopularity}> Order by popularity</button>
      <button onClick={handleDelete}> Delete</button>
     <Contact contact = {contacts[0]} />
     <Contact contact = {contacts[1]} />
     <Contact contact = {contacts[2]} />
     <Contact contact = {contacts[3]} />
     <Contact contact = {contacts[4]} />
    </div>
  );
}

export default App;
