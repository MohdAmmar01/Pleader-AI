import Images from "assets/images";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <img src={Images.Logo} className="w-40" alt="logo" />
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="grid grid-cols-2 gap-5 lg:gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="text-chat_message_field_placeholder_color text-sm font-semibold">
                    Product
                  </label>

                  <ul className="flex flex-col gap-3 mt-4 text-chat_default_preview_example_text_color font-semibold">
                    <li>Overview</li>
                    <li>Features</li>
                    <li className="flex gap-2 items-center">
                      Solutions{" "}
                      <div className="py-1 px-2 bg-badge_color rounded-full text-xs font-medium">
                        New
                      </div>
                    </li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                  </ul>
                </div>

                <div>
                  <label className="text-chat_message_field_placeholder_color text-sm font-semibold">
                    Company
                  </label>

                  <ul className="flex flex-col gap-3 mt-4 text-chat_default_preview_example_text_color font-semibold">
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>News</li>
                    <li>Media Kit</li>
                    <li>
                      <Link to={"/contact-us"}>Contact</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <label className="text-chat_message_field_placeholder_color text-sm font-semibold">
                    Resources
                  </label>

                  <ul className="flex flex-col gap-3 mt-4 text-chat_default_preview_example_text_color font-semibold">
                    <li>Blog</li>
                    <li>NewsLetter</li>
                    <li>Events</li>
                    <li>Help Center</li>
                    <li>Tutorials</li>
                    <li>Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <hr className="border-1 border-[#EAECF0]" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium text-white">
              Move faster with Untitled UI
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <p className="text-input_field_placeholder_text_color text-base mt-2">
              Save countless hours of design and ship great looking designs
              faster.
            </p>

            <p className="text-base text-white lg:text-right text-center mt-5 lg:mt-0">
              © 2077 Untitled UI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
