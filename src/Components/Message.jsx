import React from 'react'
import './message.css'
import {Card,CardContent,Typography} from '@mui/material'
function Message({ message, user }) {
    let isUser = user === message.username;
    console.log('user->',user,message.username)
  return (
      <Card className={`message__card ${isUser && 'message__user'}`}>
          <CardContent>
              <Typography 
                  variant='h5'
                  
                  component='h2'>
                  {message.username}:{message.message}
                  </Typography>
          </CardContent>
      </Card>
  )
}

export default Message