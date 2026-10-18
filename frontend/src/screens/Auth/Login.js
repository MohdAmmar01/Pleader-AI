import Images from "assets/images";
import context from "context/context";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "shared/components/FormComponents/TextField";

export default function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const a = useContext(context)
  const login = a.login;

  const handlesubmit = (e) => {
    e.preventDefault()
    login({email,password})
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
              Log in to your account
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

              <div className="mt-5">
                <label className="text-base text-white">Password</label>
                <input
                  type={"password"}
                  className={
                    "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                  }
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  placeholder={"Password"}
                />
              </div>

              <div className="mt-6">
                <button type="submit" className="bg-secondary w-full h-11 rounded-lg text-base text-white font-semibold border-1 border-secondary">
                  Log in
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-[14px] text-white">
                  Don’t have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-semibold text-signin_signup_text_color"
                  >
                    Sign up
                  </Link>
                </p>
               
                <Link
                    to={"/forgetpassword"}
                    className="font-semibold text-signin_signup_text_color"
                  >
                  forget password
                  </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
