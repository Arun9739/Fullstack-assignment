import React from "react";
import Image from "next/image";

const Home = (): JSX.Element => {
  return (
    <div className="w-full h-[950px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a5783] to-[#18a19a]">
        <div className="grid justify-center iems-center">
          <div className="mt-10 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[76px] leading-[normal]">
            <h1 className="text-5xl text-white">Hello World</h1>
          </div>

          <p className="top-0 left-0 mt-0   font-extralight text-white text-[16px] text-center tracking-[0] leading-[41.6px]">
            Use WeathoMeter to get a free report
            <br />
            card for your finances- within minutes!
          </p>

          <div className="flex justify-center items-center w-[265px] h-[68px] top-0 left-0 bg-[#fb7306] rounded-[32px] shadow-[2px_3px_3px_#064552]">
            <div className="w-[185px]  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
              Get Started
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-center mt-10">
            <div className="mt-10">
              <div className="flex mt-10">
                <img
                  className="w-[30px] h-[30px] top-0 left-0"
                  src="/img/tick.png"
                />
                <h1 className="ml-2">Expected Retirement Age</h1>
              </div>

              <img src="/img/line.png" className="w-[180px] ml-10 h-[3px] " />

              <div className="flex mt-10">
                <img
                  className="w-[30px] h-[30px] top-0 left-0"
                  src="/img/tick.png"
                />
                <h1 className="ml-2">Expected Retirement Age</h1>
              </div>

              <img src="/img/line.png" className="w-[180px] ml-10 h-[3px] " />
            </div>

            <div className="flex w-[20%] justify-center items-center">
              <img className="ml-10" src="/img/mobile.png" />
            </div>

            <div className="mt-10">
              <div className="flex mt-10">
                <img
                  className="w-[30px] h-[30px] ml-0 top-0 left-0"
                  src="/img/tick.png"
                />
                <h1 className="ml-2">Expected Retirement Age</h1>
              </div>

              <img src="/img/line.png" className="w-[180px] ml-10 h-[3px] " />

              <div className="flex mt-10">
                <img
                  className="w-[30px] h-[30px] top-0 left-0"
                  src="/img/tick.png"
                />
                <h1 className="ml-2">Expected Retirement Age</h1>
              </div>

              <img src="/img/line.png" className="w-[180px] ml-10 h-[3px] " />
            </div>
          </div>

          <div className="absolute inset-0 justify-center top-40 items-center h-[500px]">
            <img className="w-[100%] h-[100%] " src="/img/vec-1.png" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold">How it works?</h1>
                <img className="w-50 h-50 mb-4" src="/img/workflow.png" alt="Another Image" />
                <div>
                  <span className="mr-5">Answer few questions</span>
                  <span className="mr-5">Register using  phone and OTP</span>
                  <span>Get report and personal roadmap</span>
                </div>
                <div className="flex justify-center items-center w-[265px] h-[68px] mt-10 top-0 left-0 bg-[#fb7306] rounded-[32px] shadow-[2px_3px_3px_#064552]">
            <div className="w-[185px]  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
              Get Started
            </div>
          </div>
            </div>
          </div>

        </div>
        </div>
      </div>
  );
};

export default Home;
