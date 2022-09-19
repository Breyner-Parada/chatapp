import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom';
import { Message } from './Message/Message';
import './Messages.css';

export const Messages = ({messages, name}) => {
  return (
    <ScrolltoBottom className='messages'>
        {messages.map((msg, i) => <div key={i}><Message message={msg} name={name} /></div>)}
    </ScrolltoBottom>
  )
}
