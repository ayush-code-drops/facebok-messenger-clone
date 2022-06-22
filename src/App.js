import { useEffect, useState } from "react";
import "./App.css";
import {Button, FormControl, InputLabel, Input} from '@mui/material'
import Message from "./Components/Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{username:'ayush',message:'Hi'},{username:'manu',message:'Whatsup bro'},{username:'tanu',message:'Lets go'}]);
 const [username,setUsername]=useState("")
  

  useEffect(() => {
    setUsername(prompt('Enter your Name'));
    console.log('in setname', username);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    let payload = {
      message: input,
      username:username
    }
    setMessages([...messages, payload])
  };
  return (
    <div className="App">

      <h1>Messenger Clone by {username?username:'guest'}</h1>
<FormControl>
  <InputLabel>Type a Message</InputLabel>
        <Input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
            
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>  
          
</FormControl>

      {
        messages.map((message) => <Message message={message} user = { username } />)
      }
    </div>
  );
}

export default App;
