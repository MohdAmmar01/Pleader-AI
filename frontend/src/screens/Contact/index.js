import Images from "assets/images";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "shared/components/FormComponents/TextField";

export default function contact() {
  return (
    <>
      <div className="container">
        <div className="py-16 lg:px-12">
          <div className="grid items-center gap-16  mt-12">
            <div>
              <h2 className="lg:text-4xl text-3xl font-semibold text-white">
               Contact Us
              </h2>

              <p className="text-xl text-white mt-5">
              "We would love to hear from you. For any queries, suggestions and comments, Please contact <span  className=" text-secondary ">support@pleader.ai</span> . "
              </p>

              <div className="flex items-center gap-6 mt-5">
                <img src={Images.Facebook} className="w-6" alt="Facebook" />
                <img src={Images.Twitter} className="w-6" alt="Twitter" />
                <img src={Images.Instagram} className="w-6" alt="Instagram" />
              </div>




              <h2 className="lg:text-4xl mt-20 mb-10 text-3xl font-semibold text-white">
              Disclaimer
              </h2>

              <p className="text-xl text-white ">
              The information provided by this Website (pleader.ai) is intended to offer general information to the public and is not designed to provide legal, financial, or other professional advice. Your use of this Website is subject to the following disclaimer.
              </p>
              <p className="text-xl text-white mt-5">
              The content provided on this Website, including any artificial intelligence ("AI") generated responses, is intended for informational purposes only. It is not and should not be construed as legal advice. The AI functionality does not have the ability to provide legal advice tailored to your specific circumstances or under your specific jurisdiction's laws. Any reliance you place on the information on this Website is strictly at your own risk.
              </p>
              <p className="text-xl text-white mt-5">
              Your use of this Website does not establish an attorney-client relationship between you and pleader.ai or any of its employees. The information you provide to the Website will not be protected by the attorney-client privilege or as confidential information.
              </p>
              <p className="text-xl text-white mt-5">
              While we strive to keep the information on the Website up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose.
              </p>
              <p className="text-xl text-white mt-5">
              From time to time, this Website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
              </p>
              <p className="text-xl text-white mt-5">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Website.
              </p>
              <p className="text-xl text-white mt-5">
              We reserve the right to amend this disclaimer at any time with or without notice. Any changes will be effective immediately upon posting to the Website. Your continued use of the Website after any changes will be deemed to constitute your acceptance of such changes.
              </p>


              {/* <div className="grid gap-8 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
                <div>
                  <label className="text-base text-white">First Name</label>
                  <TextField
                    type={"text"}
                    className={
                      "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                    }
                    placeholder={"First Name"}
                  />
                </div>

                <div>
                  <label className="text-base text-white">Last Name</label>
                  <TextField
                    type={"text"}
                    className={
                      "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                    }
                    placeholder={"Last Name"}
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-base text-white">Email</label>
                  <TextField
                    type={"email"}
                    className={
                      "bg-input_field_bg_color h-11 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"
                    }
                    placeholder={"you@company.com"}
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-base text-white">Message</label>
                  <textarea className="bg-input_field_bg_color h-32 rounded-lg border-2 mt-[6px] border-input_field_border_color outline-none w-full indent-2 text-chat_default_preview_example_text_color"></textarea>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center">
                    <TextField
                      id="default-checkbox"
                      type={"checkbox"}
                      value=""
                      className={"w-4 h-4 outline-none rounded-2xl"}
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[14px] text-white"
                    >
                      You agree to our friendly{" "}
                      <Link to={"/terms-and-conditions"} className="underline">
                        privacy policy.
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-secondary w-full h-12 rounded-lg text-base text-white font-semibold border-1 border-secondary">
                  Send Message
                </button>
              </div> */}
              </div>

          </div>
        </div>
      </div>
    </>
  );
}