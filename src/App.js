import React, { useState,useEffect, forwardRef } from 'react';
import Message from './Message'
import {Button, InputLabel, FormControl,Input } from '@material-ui/core'
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move'

import './App.css';

function App() {

  const [input , setInput] =useState('')
  const [messages , setMessage] = useState([
    
    ]);
  const [userName , setUserName] = useState('')
 


 const sendMessage=(event)=>{

  event.preventDefault();
  db.collection('messages').add({
    text: input,
    username :userName,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()
  })
  

  setInput('')

  }

  useEffect(()=>{
      db.collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot) => {
        setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
      });

  },[])
  useEffect(() => {

  
    setUserName(prompt('Please enter your name'));
  
  },[])
 

  return (
    <div className="App">
    <img src ={require("./letter.png")} alt="letter" />
      <h1>letter box</h1>

      <form>
        <FormControl>
          <InputLabel>Enter your message.....</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            disabled={!input}
            type="submit"
          >
            Send
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id,message}) => (
          <Message key ={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
