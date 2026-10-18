import React, { useState } from 'react'
import context from './context.js';
const host = "http://localhost:5000"

// const host ="http://localhost:5000"

const State = (props) => {
  //states
  const [user, setuser] = useState()
  const [loggedin, setloggedin] = useState("loading...")
  const [loading, setloading] = useState(false)
  const [chats, setchats] = useState([])
  const [messages, setmessages] = useState([])

  //Authentication
  const login = async (data) => {
    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(
        data
      )
    })
    const json = await response.json();
    if (!json.success) {
      alert(json.message)
    } else {
      localStorage.setItem("pleader-login-token", json.token)
      window.location.href = "/"
    }
  }
  const register = async (data) => {
    const response = await fetch(`${host}/api/user/register`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(
        data
      )
    })
    const json = await response.json();
    if (!json.success) {
      alert(json.message)
    } else {
      alert(json.message)
      window.location.href = "/signin"
    }
  }
  //  Islogged In
  const isloggedin = async (data) => {
    if (localStorage.getItem("pleader-login-token")) {
      const response = await fetch(`${host}/api/user/isloggedin`, {
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("pleader-login-token"),
        }
      })
      const json = await response.json();
      if (json.success) {
        setuser(json.user)
        setloggedin("yes")
      } else if (json.message === "wrong_token") {
        setloggedin("no")
        localStorage.clear()
      } else {
        setloggedin("no")
      }
    } else {
      setloggedin("no")
    }
  }
  //  remove a session
  const removesession = async () => {
    if (localStorage.getItem("pleader-login-token")) {
      const response = await fetch(`${host}/api/user/removeasession`, {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("pleader-login-token"),
        },
        body: JSON.stringify({
          "token":`${localStorage.getItem("pleader-login-token")}`
        }
        )
      })
    
    }
  }
  // Chat
  const createchat = async (data) => {
    setloading(true)

    try {
      const response = await fetch(`${host}/api/chat/startchat`, {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("pleader-login-token"),
        },
        body: JSON.stringify(data)
      })
      const json = await response.json();
      if (json.success) {
        const formData = new FormData()
        formData.append('user_id', json.createdChat._id);
        formData.append('files[]', data.selectedFile);
  
        const response = await fetch(`https://pythonapisecret.pleader.ai/upload`, {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
          },
          body: formData
        })
        const json2 = await response.json();
        if (response.ok) {
          window.location.href = `/chat/${json.createdChat._id}`
        }
      }else if(json.message==="not authenticated"){
        localStorage.clear()
        window.location.href="/signin"
        setloggedin("no")
      }
    } catch (error) {
      alert("Something went wrong please try again")
    }
   
    setloading(false)
  }
  const creategeneralchat = async (data) => {
    if(loggedin!=="yes"){
      window.location.href="/signin"
    }else{
    setloading(true)
    const response = await fetch(`${host}/api/chat/startchat`, {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
  if(json.message==="not authenticated"){
      alert("Something went wrong")
      localStorage.clear()
      window.location.href="/signin"
      setloggedin("no")
    } 
    else{
      sendmsg({ chatId: json.createdChat._id, content: data.content, redirect:true })
    }

  }
  }

  const sendmsg = async (data) => {
    if(loggedin!=="yes"){
      window.location.href="/signin"
    }else{
    setmessages((prevMessages) => [
      ...prevMessages,
      { content: data.content, from: 'user' },
    ]);
    setloading(true);
    try {
      const response = await fetch(`${host}/api/message/sendmsg`, {
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'application/json',
          authentication: localStorage.getItem('pleader-login-token'),
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.success) {
        if (data.redirect) {
          window.location.href = `/chat/${data.chatId}`
        } else {
          setmessages((prevMessages) => [...prevMessages, json.botresponse]);
        }
      }else if(json.message==="not authenticated"){
        localStorage.clear()
        window.location.href="/signin"
        setloggedin("no")
      }
       else {
        alert('Something went wrong! Try again later');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Something went wrong! catch Try again later');
    }
    setloading(false);
  }
  };

  const getallmsgs = async (data) => {
    const response = await fetch(`${host}/api/message/allmsgs`, {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      setmessages(json.messages);
    }else if(json.message==="not authenticated"){
      localStorage.clear()
      window.location.href="/signin"
      setloggedin("no")
    }
     else {
      alert("Something went wrong! Try again later")
    }
  }
  const getallchats = async (data) => {
    const response = await fetch(`${host}/api/chat/allchats`, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    if (json.success) {
      setchats(json.chats);
    }
    else if(json.message==="not authenticated"){
      localStorage.clear()
      window.location.href="/signin"
      setloggedin("no")
    }
     else {
      alert("Something went wrong! Try again later")
    }
  }
  return (
    <context.Provider value={{ creategeneralchat, getallchats, chats, login, register,removesession, isloggedin, loading, user, loggedin, createchat, sendmsg, getallmsgs, messages, setmessages }}>
      {props.children}
    </context.Provider>
  )
}

export default State