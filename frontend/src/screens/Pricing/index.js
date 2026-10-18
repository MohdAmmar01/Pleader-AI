import Images from "assets/images";
import React from "react";
import PricingTables from "shared/components/FormComponents/PricingTables";

export default function Pricing() {
  const custompointsFreePlan = [
    {
      id: 1,
      title: "Interactive chatbot",
    },
    {
      id: 2,
      title: "20 messages per day",
    },
  ];

  const custompointsStandardPlan = [
    {
      id: 1,
      title: "Interactive chatbot",
    },
    {
      id: 2,
      title: "Legal Document analysis",
    },
    {
      id: 3,
      title: "Lawyer database",
    },
    {
      id: 4,
      title: "Automatic video generation (limited access)",
    },
    {
      id: 5,
      title: "Customer support",
    },
  ];

  const custompointsPremiumPlan = [
    {
      id: 1,
      title: "All the features of the Standard Plan",
    },
    {
      id: 2,
      title: "Document drafting",
    },
    {
      id: 3,
      title: "Case Predictions",
    },
  ];

  return (
    <>
      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-4/6">
              <div className="text-center my-24">
                <h1 className="lg:text-[40px] text-3xl font-semibold text-white">
                  Plans for all sizes
                </h1>
                <div className="flex justify-center">
                  <div className="lg:w-3/5">
                    <p className="text-xl text-chat_default_preview_example_text_color text-center mt-6">
                      Simple, transparent pricing that grows with you. Try any
                      plan free for 30 days.
                    </p>

                    <div className="mt-12 flex gap-3 justify-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-secondary after:border-white after:border-2 after:peer-checked:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                        <span className="ml-3 text-base text-white font-medium">
                          Annual pricing (save 20%)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pricing pb-24">
          <div>
            <div className="container">
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <PricingTables
                  icon={Images.CustomDocumentIcon}
                  type={"Free"}
                  amount={"0"}
                  custompoints={custompointsFreePlan}
                />
                <PricingTables
                  icon={Images.Standard}
                  type={"Standard"}
                  amount={"20"}
                  custompoints={custompointsStandardPlan}
                />
                <PricingTables
                  icon={Images.Premium}
                  type={"Pro"}
                  amount={"40"}
                  custompoints={custompointsPremiumPlan}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
