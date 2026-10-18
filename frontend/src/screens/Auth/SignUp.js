import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('')
  const a = useContext(context)
  const register = a.register;

  const handlesubmit = (e) => {
    e.preventDefault()
    if (password !== cpassword) {
      alert("Confirm Password does not match")
    } 
    else if (password.length<8) {
      alert("password must be greater than 8 characters")
    } 
    else {
      register({name,email,password})
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
              Create an account
            </h4>
            <p className="text-base text-white text-center mt-3">
              Start your 30-day free trial.
            </p>

            <form className="mt-8" onSubmit={handlesubmit}>
              <div>
                <label className="text-base text-white">
                  Full Name<span>*</span>
                </label>
                <input
                  type={"text"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  required
                  placeholder={"Enter your full name here"}
                />
              </div>

              <div className="mt-5">
                <label className="text-base text-white">Email</label>
                <input
                  type={"email"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required

                  placeholder={"Enter your email"}
                />
              </div>

              <div className="mt-5">
                <label className="text-base text-white">
                  Password<span>*</span>
                </label>
                <input
                  type={"password"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  required
                  onChange={(e) => setpassword(e.target.value)}
                   minLength={8}
                  placeholder={"Create a password"}
                />
                <p className="text-white text-[14px] mt-[6px]">
                  Must be at least 8 characters.
                </p>
              </div>

              <div className="mt-5">
                <label className="text-base text-white">
                  Confirm Password<span>*</span>
                </label>
                <input
                  type={"password"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  value={cpassword}
                  onChange={(e) => setcpassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder={"Write your password again"}
                />
              </div>

              <div className="mt-5">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type={"checkbox"}
                    className={"w-4 h-4 outline-none rounded-2xl"}
                    required

                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-[14px] text-white"
                  >
                    
                    Accept   <Link to={"/terms-and-conditions"} className="font-semibold text-signin_signup_text_color"> terms and conditions </Link>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="bg-secondary w-full h-11 rounded-lg text-base text-white font-semibold border-1 border-secondary">
                  Get Started
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-[14px] text-white">
                  Already have an account?{" "}
                  <Link
                    to={"/signin"}
                    className="font-semibold text-signin_signup_text_color"
                  >
                    Sign in
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
