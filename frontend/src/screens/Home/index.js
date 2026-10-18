import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState, useRef, useEffect } from "react";
import Quotations from "shared/components/Home/Quotations";

export default function Home() {
  const a = useContext(context);
  const loggedin = a.loggedin;
  const createchat = a.createchat;
  const loading = a.loading
  const creategeneralchat = a.creategeneralchat
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [document, setdocument] = useState(null);
  const [content, setcontent] = useState("")
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    if (file && file.size > 800 * 1024) {
      alert('Please select a file up to 800KB in size.');
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setdocument(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlesend = () => {
    
    if (content.trim() !== "") {
      setcontent("");
      creategeneralchat({ content, documentname: "General Chat" })
  }
  
  }
  useEffect(() => {
    if (selectedFile !== null) {
      createchat({ selectedFile, document, documentname: selectedFile.name })
      fileInputRef.current.value = null;
      setSelectedFile(null);
      setdocument(null);
    }
  }, [document])

  // ... previous code ...

  const handleButtonClick = () => {
    if (loggedin !== "yes") {
      console.log("Login First!");
      window.location.href = "/signin";
    } else {
      if (selectedFile !== null) {
        // Reset the file input field
        fileInputRef.current.value = null;
        setSelectedFile(null);
        setdocument(null);
      } else {
        fileInputRef.current.click();
      }
      localStorage.clear()
    }
  };

  return (
    <>
      <div className="container flex flex-col justify-between h-[calc(100vh-80px)]">
        <div className="flex justify-center lg:mt-24 mt-16">
          <div className="lg:w-4/6 text-center">
          <h1 className="text-3xl lg:text-4xl m-6 text-white font-mono">
          India's AI powered Legal Assistance.
            </h1>
            <h1 className="text-1xl lg:text-3xl  text-white  font-mono">
              Ask Your Pleader Now
            </h1>
            <div style={{justifyContent:"center"}} className="bg-chat_message_field_bg_color lg:h-16 rounded-[4px] flex items-center py-2 lg:py-0 px-4 mt-16">
              <p className="text-base text-center text-white">
                "<Quotations /> "
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[84px] mb-12">
          <div style={{ display: "flex" }} className="w-full lg:w-5/6 relative">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"

              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <textarea
              type="text"
              value={content}
              onChange={(e) => { setcontent(e.target.value) }}
              placeholder={
                loggedin !== "yes"
                  ? "Login to Send a Message"
                  : "Send a Message or upload a document to ask questions about it."
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey &&!loading) {
                  e.preventDefault();
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

            <button className="bg-transparent border-none mx-3" onClick={handleButtonClick}>
              {
                loading ? "" : <img width={40} style={{ filter: "invert(1)" }} src="../upload.png" alt="send" />
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
