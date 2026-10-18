import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TextField from "shared/components/FormComponents/TextField";

export default function ResetPassword() {
  const [password, setpassword] = useState('');
  const { id } = useParams();


  const a = useContext(context)
  const login = a.login;

  const handlesubmit = async (e) => {

    e.preventDefault()
     if(password.length<8){
        alert("password must be greater than 8 characters")
     }else{

         const host = "http://localhost:5000"
        //  const host = "http://localhost:5000"
         
         const response = await fetch(`${host}/api/user/resetPassword`, {
             method: "POST",
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("pleader-login-token"),
        },
        body: JSON.stringify(
            {
                "Newpassword": password,
                "code":id
            }
      )
    })
    const json = await response.json();
    if (!json.success) {
        
        alert(json.message)
        
    }else{
        alert(json.message)
        window.location.href = `/signin`

    }
}
}

  return (
    <>
      <div className="container mb-24">
        <div className="lg:mt-24 mt-16 flex justify-center">
          <img src={Images.LogoMark} alt="LogoMark" className="w-12" />
        </div>

        <div className="w-full flex justify-center">
          <div className="lg:w-2/6">
            <h4 className="text-4xl font-semibold text-white mt-6 text-center">
              Reset your password
            </h4>
            <p className="text-base text-white text-center mt-2">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={handlesubmit} className="mt-8">
              <div>
                <label className="text-base text-white">New Password</label>
                <input
                  type={"text"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder={"Enter your new password"}
                />
              </div>

           

              <div className="mt-6">
                <button type="submit" className="bg-secondary w-full h-11 rounded-lg text-base text-white font-semibold border-1 border-secondary">
                 Change Password
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-[14px] text-white">
                  Already  have an account?{" "} 
                  <Link
                    to={"/signin"}
                    className="font-semibold text-signin_signup_text_color"
                  >
                    Login
                  </Link>
                </p>
         
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
