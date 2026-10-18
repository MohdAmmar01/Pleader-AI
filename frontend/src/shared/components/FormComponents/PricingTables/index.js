import Images from "assets/images";
import React from "react";

export default function PricingTables({ type, amount, custompoints, icon }) {
  return (
    <>
      <div>
        <div className="bg-chats_side_bar rounded-2xl">
          <div className="px-8 pt-8 flex justify-center flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
              <img src={icon} alt="chat icon" />
            </div>
            <h6 className="text-signin_signup_text_color text-xl mt-5">
              {type}
            </h6>

            <h2 className="font-semibold lg:text-5xl text-4xl text-white mt-2">
              ${amount}/month
            </h2>
            <p className="text-chat_default_preview_example_text_color text-base mt-2">
              Billed annually.
            </p>
          </div>

          <div className="py-8 px-8">
            {custompoints.map((point, index) => {
              return (
                <div
                  className="flex items-center gap-3 mt-4"
                  key={`custom-point-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                    <img src={Images.CheckIcon} alt="chat icon" />
                  </div>
                  <p className="text-chat_default_preview_example_text_color text-base">
                    {point.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="py-8 px-8">
            <button className="py-3 px-5 bg-secondary rounded-lg text-base text-white w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
