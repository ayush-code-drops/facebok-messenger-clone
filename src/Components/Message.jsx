import React,{forwardRef} from 'react'
import './message.css'
import {Card,CardContent,Typography} from '@mui/material'
const Message=forwardRef(({ message, user },ref)=> {
    let isUser = user === message.username;
  //  console.log('user->',user,message.username)
  return (
      <Card ref={ref} className={`message__card ${isUser && 'message__user'}`}>
          <CardContent>
              <Typography 
                  variant='h5'
                  
                  component='h3'>
                  {!isUser && `${message.username}:`} {message.message}
                  </Typography>
          </CardContent>
      </Card>
  )
})

export default Message