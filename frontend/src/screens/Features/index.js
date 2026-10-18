import Images from "assets/images";
import React from "react";

export default function Features() {
  return (
    <>
      <section className="bg-chats_side_bar">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-4/6">
              <div className="text-center my-24 ">
                <h1 className="lg:text-[40px] text-3xl font-semibold text-white">
                  Introducing PLEADER.AI
                </h1>
                <div className="flex justify-center">
                  <div className="lg:w-3/5">
                    <p className="text-xl text-chat_default_preview_example_text_color text-center mt-6">
                      The revolutionary AI-powered legal assistance app designed
                      to simplify your legal journey.
                    </p>

                    {/* <div className="mt-12 flex gap-3 justify-center">
                      <button className="bg-white text-features_white_button_color flex items-center justify-center gap-3 text-lg font-semibold rounded-lg h-[60px] px-7">
                        <img
                          src={Images.PlayIcon}
                          className="w-5"
                          alt="play icons"
                        />{" "}
                        Demo
                      </button>
                      <button className="bg-secondary text-white flex items-center justify-center gap-3 text-lg font-semibold rounded-lg h-[60px] px-7">
                        Sign up
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="Companies">
        <div className="bg-chats_side_bar py-16">
          <div className="container">
            <div className="text-center">
              <p className="text-base text-white font-medium">
                Join 4,000+ companies already growing
              </p>
            </div>
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[34px]">
              <div className="flex justify-center">
                <img
                  src={Images.CompanyLogo}
                  className="lg:h-12 h-10"
                  alt="company logo"
                />
              </div>

              <div className="flex justify-center">
                <img
                  src={Images.CompanyLogo1}
                  className="lg:h-12 h-10"
                  alt="company logo 1"
                />
              </div>

              <div className="flex justify-center">
                <img
                  src={Images.CompanyLogo2}
                  className="lg:h-12 h-10"
                  alt="company logo 2"
                />
              </div>

              <div className="flex justify-center">
                <img
                  src={Images.CompanyLogo3}
                  className="lg:h-12 h-10"
                  alt="company logo 3"
                />
              </div>

              <div className="flex justify-center">
                <img
                  src={Images.CompanyLogo4}
                  className="lg:h-12 h-10"
                  alt="company logo 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="Features py-24">
        <div className="container">
          <div className="text-center">
            <p className="text-base text-signin_signup_text_color">Features</p>
            <h2 className="lg:text-4xl text-3xl font-medium mt-3 text-white">
              What Our Comprehensive Suite Provides!
            </h2>
            <p className="text-xl mt-5 text-white font-normal">
              Get legal guidance, effortlessly generate custom documents, and
              gain valuable insights into case predictions with our
              comprehensive suite of features. From our user-friendly chatbot
              and engaging video generation to bespoke legal templates,
              PLEADER.AI streamlines your legal experience and provides the
              support you need.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-row flex-col gap-y-8 justify-center mt-16">
            <div className="flex flex-col justify-center items-center text-center lg:w-2/6 px-4">
              <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                <img src={Images.MailIcon} alt="chat icon" />
              </div>
              <h3 className="text-xl font-medium text-white mt-5">
                Legal Guidance
              </h3>
              <p className="text-base text-chat_default_preview_example_text_color mt-2">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:w-2/6 px-4">
              <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                <img src={Images.CustomDocumentIcon} alt="Document icon" />
              </div>
              <h3 className="text-xl font-medium text-white mt-5">
                Custom Documents
              </h3>
              <p className="text-base text-chat_default_preview_example_text_color mt-6">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:w-2/6 px-4">
              <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                <img src={Images.InsightsIcon} alt="Insights icon" />
              </div>
              <h3 className="text-xl font-medium text-white mt-5">
                Valuable Insights
              </h3>
              <p className="text-base text-chat_default_preview_example_text_color mt-2">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:w-2/6 px-4">
              <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                <img src={Images.MailIcon} alt="Mail icon" />
              </div>
              <h3 className="text-xl font-medium text-white mt-5">
                User-Friendly Chatbot
              </h3>
              <p className="text-base text-chat_default_preview_example_text_color mt-2">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center lg:w-2/6 px-4">
              <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
                <img src={Images.CustomDocumentIcon} alt="Document icon" />
              </div>
              <h3 className="text-xl font-medium text-white mt-5">
                Video Generation
              </h3>
              <p className="text-base text-chat_default_preview_example_text_color mt-2">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"></div>
        </div>
      </section> */}

      <section className="Integrations bg-chats_side_bar py-24">
        <div className="container">
          <div className="text-center">
            {/* <p className="text-base text-signin_signup_text_color">
              Integrations
            </p> */}
            <h2 className="lg:text-4xl text-3xl font-medium mt-3 text-white">
              Your Ultimate Partner In The World of Law.
            </h2>
            <p className="text-xl mt-5 text-white font-normal">
              Experience a new era of legal support and empower yourself with
              PLEADER.AI.
            </p>
          </div>
          <div className="mt-16 flex lg:flex-row flex-col gap-3 justify-center">
            {/* <button className="text-features_white_button_color font-semibold bg-white gap-3 flex justify-center items-center rounded-lg text-lg py-4 px-7">
              <img src={Images.TeamIcon} alt="team icon" className="w-5" /> Meet
              Our Sales Team
            </button> */}
            <button className="bg-secondary text-white flex items-center justify-center gap-3 text-lg font-semibold rounded-lg h-[60px] px-7">
              Sign up
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:gap-24 items-center">
            <div className="col-span-2">
              <h2 className="lg:text-4xl text-3xl font-medium mt-3 text-white">
              Features (coming soon)
              </h2>
              <p className="text-xl mt-5 text-white font-normal">
                Everything you need to know about the product and billing. Can’t
                find the answer you’re looking for? Please chat to our friendly
                team.
              </p>


              <div className="mt-16 flex flex-row items-start gap-4">
                <div className=" max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px]  rounded-full bg-white flex justify-center items-center">
                  <img src={Images.HeartIcon} className="" alt="Heart icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                    AI-Driven Legal Advice
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                    {/* Empower yourself with a smart tool that simplifies the
                    review and understanding of complex legal documents. By
                    automatically highlighting key clauses, terms, and potential
                    areas of concern, our app presents users with a
                    comprehensive summary of essential information. This enables
                    you to quickly grasp the critical aspects of contracts,
                    agreements, and other legal documents, saving time and
                    ensuring that you stay informed about important details,
                    mitigating risks and promoting better decision-making. */}
                     Leveraging advanced artificial intelligence technology, PLEADER AI provides general legal
                     guidance based on user queries. While not a replacement for professional legal consultation,
                      our AI-driven advice can help you better understand legal terminologies, principles, and basic legal
                       procedures, offering a simplified, easily understandable overview of complex legal concepts.
                  </p>
                </div>
              </div>

              <div className="mt-16 flex flex-row items-start gap-4">
              <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white flex justify-center items-center">

                  <img src={Images.RevisionIcon} alt="Revision icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                    Legal Document Analysis
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                  {/* PLEADER AI offers an AI-powered legal document analysis tool that can review,
                   interpret, and provide insights on your legal documents. This feature can highlight
                    important clauses, identify potential risks, and help ensure your legal documents 
                    align with your best interests. Note that while this tool offers a preliminary review,
                     it should be supplemented with advice from a licensed legal professional for a comprehensive 
                     understanding of your documents. */}
                    PLEADER AI offers an AI-powered legal document analysis tool
                     that can review, interpret, and provide insights on your legal 
                     documents. This feature can highlight important clauses, identify 
                     potential risks, and help ensure your legal documents align with your 
                     best interests. Note that while this tool offers a preliminary review, 
                     it should be supplemented with advice from a licensed legal professional 
                     for a comprehensive understanding of your documents.
                  </p>
                </div>
              </div>

              <div className="mt-16 flex flex-row items-start gap-4">
              <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white flex justify-center items-center">

                  <img src={Images.BlockedIcon} alt="Blocked icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                    Case Prediction
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                    {/* Leverage the power of AI-driven analytics with our
                    cutting-edge Case Prediction feature. By analysing
                    historical case data and applying advanced machine learning
                    algorithms, our app provides valuable insights into the
                    potential outcomes of your legal matters. Gain a deeper
                    understanding of the factors influencing case results,
                    enabling you to make more informed decisions and better
                    prepare for litigation. With Case Prediction, you can
                    navigate the complexities of the legal world with confidence
                    and a data-driven edge. */}
                    Our Case Prediction feature uses AI algorithms to 
                    analyze past cases, legal precedents, and current laws to predict 
                    potential outcomes of a legal case. While not definitive or legally binding,
                     these predictions can offer a data-driven perspective and a strategic starting point for your legal discussions.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center lg:mt-0 mt-10">
              <img src={Images.SupportImage} alt="Support" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-24 bg-chats_side_bar">
        <div className="container">
          <div className="grid  items-center">

            <div className="col-span-2">
              
              <div className="flex flex-row items-start gap-4">
                <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white flex justify-center items-center">
                  <img src={Images.HeartIcon} className="" alt="Heart icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                    Find a Lawyer
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                    {/* Effortlessly connect with legal professionals in your area
                    through our user-friendly "Find a Lawyer" feature. Catering
                    to a wide range of legal practice areas, this tool
                    simplifies the process of locating and engaging a lawyer who
                    can best address your unique legal needs. By providing
                    information on lawyers' expertise, experience, and reviews,
                    "Find a Lawyer" empowers you to make informed decisions when
                    choosing the right legal representation, ensuring a seamless
                    and stress-free experience. */}
                    PLEADER AI houses a comprehensive directory of legal professionals 
                    across various specializations. Based on your specific needs, our AI-powered lawyer 
                    search feature can help you find and connect with the right legal professionals near you.
                     We have a rigorous vetting process to ensure that all listed lawyers have valid credentials and a record of professional conduct.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-row items-start gap-4">
                <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white flex justify-center items-center">
                  <img src={Images.BlockedIcon} alt="Blocked icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                    Document Drafting Made Easy
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                    {/* Create professional, legally compliant documents
                    effortlessly with our AI-assisted Document Drafting feature.
                    Choose from a vast library of templates, provide essential
                    details, and let our intelligent algorithms do the rest.
                    With built-in error checking and validation tools, you can
                    ensure your documents are accurate and tailored to your
                    specific needs. Save time and gain peace of mind with
                    PLEADER's Document Drafting, streamlining the way you create
                    and manage legal documents. */}
                    PLEADER AI simplifies the process of drafting legal documents. With our AI-powered tool,
                     you can generate and customize legal documents such as contracts, wills, and agreements in
                      minutes. It guides you through the process, asking relevant questions and using your responses 
                      to tailor the document to your needs. Remember, while convenient, these drafts should be reviewed
                       and approved by a legal professional for complete accuracy and compliance.
                  </p>
                </div>

              </div>
              <div className="mt-12 flex flex-row items-start gap-4">
                <div className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px]  rounded-full bg-white flex justify-center items-center">
                  <img src={Images.BlockedIcon} alt="Blocked icon" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-medium text-white">
                  AI Quiz Generator for Students
                  </h4>
                  <p className="text-base text-chat_default_preview_example_text_color mt-2">
                  PLEADER AI includes a unique AI-powered Quiz Generator
                   designed specifically for students studying law. This feature
                    generates custom quizzes based on various legal topics, aiding in 
                    reinforcing learning and preparing for exams. By assessing your study
                     progress and areas of weakness, our AI creates personalized quiz questions
                      to help you focus on areas where improvement is needed. In addition, the Quiz 
                      Generator can adjust the difficulty and format of the questions over time, providing
                       an adaptive and effective learning experience. It's an interactive and engaging way 
                       for students to deepen their understanding of legal studies.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
