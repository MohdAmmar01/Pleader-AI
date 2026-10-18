import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./chat.css"
import { useEffect } from "react";

export default function Chat() {
    const a = useContext(context);
    const loggedin = a.loggedin;
    const loading = a.loading;
    const sendmsg = a.sendmsg
    const messages = a.messages
    const setmessages = a.setmessages
    const getallmsgs = a.getallmsgs
    const { id } = useParams();
    const messagesRef = useRef(null);
    const [content, setcontent] = useState("")
    const handlesend = () => {
        if (content.trim() !== "") {
            setcontent("");
            sendmsg({ chatId: id, content });
        }
        
    }
    useEffect(() => {
        getallmsgs({ chatId: id })
    }, [])



    useEffect(() => {
        // Scroll to the bottom of the messages div after rendering
        scrollToBottom();
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the messages div when new messages are added
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    };
    return (
        <>
            <div style={{ position: "relative" }} className="container chatpage flex flex-col justify-between h-[calc(100vh-80px)]">
                <div ref={messagesRef} className="messages">
                    {
                        messages?.map((msg) => {
                            return <div className="message-container">
                                <div className="user-img">
                                    <img width={40} src={msg.from === "user" ? "../profiledefault.jpg" : "../chatbot.png"} alt="" />
                                </div>
                                <div className="message">
                                    {msg.content}
                                </div>
                            </div>
                        })}
                </div>

                <div style={{
                    bottom: "0",
                    position: "absolute",
                    width: "98%",
                    marginBottom: "2rem"
                }}
                    className="flex justify-center">
                    <div className="w-full lg:w-5/6 relative">
                        <textarea
                            value={content}
                            onChange={(e) => { setcontent(e.target.value) }}
                            disabled={loggedin !== "yes"}
                            type="text"
                            placeholder={loggedin !== "yes" ? "Login to send a message" : "Send a message"}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey &&!loading) {
                                    handlesend();
                                }
                            }}
                            
                            className="bg-chat_message_field_bg_color text-chat_message_field_placeholder_color h-[72px] rounded-lg outline-none flex items-center px-4 w-full text-base"
                        />
                        <div
                            className="absolute right-[80px] h-full flex items-center top-0"
                            
                        >
                            {!loading ? (
                                <button onClick={handlesend} className="bg-transparent border-none">
                                    <img src={Images.Send} className="w-5" alt="send" />
                                </button>
                            ) : (
                                <span style={{ color: "white", fontWeight: "bold" }}>Loading...</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
