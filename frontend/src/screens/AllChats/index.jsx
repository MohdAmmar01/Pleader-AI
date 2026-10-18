import context from 'context/context';
import React, { useContext, useEffect } from 'react'
import "./chats.css"
const Allchats = () => {
  const a = useContext(context);
  const chats = a.chats;
  const getallchats = a.getallchats;
  useEffect(() => {
    getallchats()
  }, [])
  function formatDate(givendate) {
    const date = new Date(givendate)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  function formatTime(givendate) {
    const date = new Date(givendate)
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  }
  
  return (
    <div className='allchats'>
      {
        chats?.map((chat) => {
          return <div onClick={() => window.location.href = `/chat/${chat._id}`} className="chat">
            <div className="img">
              <img style={{ filter: "invert(1)" }} width={40} src="../chats.png" alt="" />
            </div>
            <div className="info">
              {chat.documentname}
            </div>
            <div className="date">
              {formatTime(chat.createdAt)} &nbsp;&nbsp;
              {formatDate(chat.createdAt)}
            </div>
          </div>
        })
      }

    </div>
  )
}

export default Allchats