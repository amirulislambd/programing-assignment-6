import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
  return (
    <div className=" bg-white border-t border-zinc-200  my-20   rounded-xl  p-5 ">
        <div className="text-center my-6 md:my-8 lg:my-12 space-y-2">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold ">Simple, Transparent Pricing</h2>
    <p className="text-zinc-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
    <div className="grid md:grid-cols-3 gap-4 container md:max-w-7xl mx-auto">

      <div className="flex flex-col justify-between border border-zinc-300 rounded-xl p-4 lg:p-8">
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-zinc-400">Perfect for getting started</p>
          </div>
          <h2>
            <span className="text-2xl font-bold">$0</span>
            <span className="text-zinc-400">/month</span>
          </h2>
         <div>
         {
            [
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month"
              ].map((feature,i)=>(
                <p className="flex items-center gap-2"><span className="bg-green-100 rounded-full p-1">
                <GiCheckMark className="text-green-300 text-xs" />
              </span>
              {feature}
              </p>
              ))
          }
         </div>
        </div>
        <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
          Get Started Free
        </button>
      </div>
      <div className="flex flex-col justify-between border border-zinc-300 rounded-xl p-4 lg:p-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] relative text-white">
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap  inline-flex  py-1 px-4   rounded-full bg-[#FEF3C6]  text-yellow-600 text-sm font-semibold">
          Most Popular
        </p>
        <div className="flex flex-col space-y-4  ">
          <div>
            <h2 className="text-xl font-bold">Pro</h2>
            <p className="text-white">Best for professionals</p>
          </div>
          <h2>
            <span className="text-2xl font-bold">$29</span>
            <span className="text-white">/month</span>
          </h2>
          <div className="flex flex-col space-y-3">
            {[
              "Access to all premium tools",
              "Unlimited templates",
              "Priority support",
              "Cloud sync",
              "Advanced analytics",
            ].map((feature, index) => (
              <p
                key={index}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="bg-white/20 p-1 rounded-full">
                  <GiCheckMark className="text-green-300 text-xs" />
                </span>
                {feature}
              </p>
            ))}
          </div>
          <button className="btn w-full rounded-full ">Start Pro Trial</button>
        </div>
      </div>
      <div className="flex flex-col justify-between border border-zinc-300 rounded-xl p-4 lg:p-8">
        <div className="space-y-2">
          <div>
            <h2 className="text-xl font-bold">Enterprise</h2>
            <p className="text-zinc-400">Enterprise</p>
          </div>
          <h2>
            <span className="text-2xl font-bold">$99</span>
            <span className="text-zinc-400">/month</span>
          </h2>
          <div>
          {[
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
          ].map((feature, i) => (
            <p key={i} className="flex items-center gap-2">
              <span className="bg-green-100 rounded-full p-1">
                <GiCheckMark className="text-green-300 text-xs" />
              </span>
              {feature}
            </p>
          ))}
          </div>
        </div>
        <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
          Get Started Free
        </button>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
