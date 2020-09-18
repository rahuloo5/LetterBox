import React,{forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'

const Message =forwardRef(({username, message},ref) =>{
    console.log(username)
    const isUser = username===message.username;
    console.log(isUser)
    return (
        <div ref={ref} className={`messagee ${isUser && 'message_user'}`}>
        <Card className={isUser ? "message_userCard":"message_guestCard"}>
        <CardContent>
            <Typography  
            color= "white"
            variant="h5"
            component="h2">
            {message.username}:{message.text}

            </Typography>
        </CardContent>

        </Card>
            
        </div>
    )
})

export default Message;
