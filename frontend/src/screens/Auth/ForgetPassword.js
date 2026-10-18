import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "shared/components/FormComponents/TextField";

export default function ForgetPassword() {
  const [email, setemail] = useState('')
  const a = useContext(context)
  const login = a.login;

  const handlesubmit = async (e) => {
    e.preventDefault()

    const host = "http://localhost:5000"
    // const host = "http://localhost:5000"

    const response = await fetch(`${host}/api/user/forgetPassword`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(
        {
          "email": email
        }
      )
    })
    const json = await response.json();
    if (!json.success) {

  alert('invalid email provided !')

    }else{
  alert(json.message)
  window.location.href = `/signin`

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
            <h4 className="text-3xl font-semibold text-white mt-6 text-center">
             Recover Your Account
            </h4>
            <p className="text-base text-white text-center mt-3">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={handlesubmit} className="mt-8">
              <div>
                <label className="text-base text-white">Email</label>
                <input
                  type={"email"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder={"Enter your email"}
                />
              </div>

          

              <div className="mt-6">
                <button type="submit" className="bg-secondary w-full h-11 rounded-lg text-base text-white font-semibold border-1 border-secondary">
                 Send Verification
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
