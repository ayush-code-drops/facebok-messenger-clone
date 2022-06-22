import { useEffect, useState } from "react";
import "./App.css";
import {Button, FormControl, InputLabel, Input} from '@mui/material'
import Message from "./Components/Message";
import db from "./firebase";
import { collection, getDocs,
  setDoc, doc, addDoc, serverTimestamp, query, orderBy
} from "firebase/firestore/lite";
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
 const [username,setUsername]=useState("username")
  let messagesRef=collection(db,'messages')
  async function getData() {
    const q = query(messagesRef, orderBy("timestamp"),);
    const querySnapshot = await getDocs(q);
    let arr = []

    
    console.log('q',q)
    querySnapshot?.forEach((doc) => {
     arr.push(doc.data())
    });
   // console.log('messageData =>',messagesData);
    setMessages(arr)

  }

  useEffect( () => { 
    getData()
   
  },[])

  console.log('mdata',messages);
  useEffect(() => {
    setUsername(prompt('Enter your Name'));
    console.log('in setname', username);
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
   
    const docRef = await addDoc(collection(db, "messages"), {
      message: input,
      username: username,
      timestamp:serverTimestamp()
    });

    getData()

    //setMessages([...messages, payload])
  };
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/768px-Facebook_Messenger_logo_2020.svg.png?20220118041828" alt="logo" width="80px" height="80px"/>
      <h1>Welcome {username ? username : 'guest'} 🖐</h1>
      <form className="app__form">
        
      <FormControl className="app__formcontrol">
          
         
          <Input className="app__input" type="text"
            placeholder="Type a Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)} />
            
            <Button className="app__button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon /></Button> 
       
       
          
</FormControl>  
      </form>

      <FlipMove>
        <div className="app__messages">
             {
        messages.map((message) => <Message key={message.timestamp}  message={message} user = { username } />)
      } 
        </div>
       
</FlipMove>
   
    </div>
  );
}

export default App;
