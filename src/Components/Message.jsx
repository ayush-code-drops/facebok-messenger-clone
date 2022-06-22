import React from 'react'
import './message.css'
import {Card,CardContent,Typography} from '@mui/material'
function Message({text,user}) {
  return (
      <Card className='message__card'>
          <CardContent>
              <Typography 
                  variant='h5'
                  
                  component='h2'>
                  {user}:{text}
                  </Typography>
          </CardContent>
      </Card>
  )
}

export default Message