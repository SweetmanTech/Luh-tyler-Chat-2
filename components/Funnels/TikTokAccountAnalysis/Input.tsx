"use client";

import { useTikTokAnalysisProvider } from "@/providers/TIkTokAnalysisProvider";
import AnalysisButton from "./AnalysisButton";
import Icon from "@/components/Icon";

const TikTokAccountInput = () => {
  const { username, setUsername } = useTikTokAnalysisProvider();

  return (
    <main className="flex-1 md:p-4 bg-background">
      <div className="h-[calc(100vh-64px)] md:h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center bg-white rounded-xl">
        <div className="bg-grey-secondary px-3 py-2 rounded-full flex items-center gap-2 mb-4">
          <Icon name="black-star" />
          <p className="font-plus_jakarta_sans_bold text-sm text-black-light">
            Made for Creators
          </p>
        </div>
        <h1
          className={`
            font-plus_jakarta_sans_bold
            text-[32px]
            sm:text-3xl 
            lg:text-[32px] 
            leading-[1.2]
            tracking-[-0.5px] 
            mb-4
            sm:mb-5
            max-w-[800px]
            mx-auto
          `}
        >
          Turn Your Fans Into Brand Deals—Automatically.
        </h1>
        <p
          className="
            text-gray-400 
            text-lg 
            sm:text-xl 
            mb-8 
            sm:mb-10 
            max-w-[600px] 
            mx-auto 
            px-6
            sm:px-2
            leading-relaxed
            sm:leading-normal
            font-plus_jakarta_sans
          "
        >
          <span className="sm:hidden">
            Our AI agents analyze your followers, uncover brand opportunities,
            and deliver actionable insights—24/7.
          </span>
          <span className="hidden sm:block">
            Our AI agents analyze your followers, uncover brand
            <br />
            opportunities, and deliver actionable insights—24/7.
          </span>
        </p>
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div
            className="
              relative 
              w-[340px] 
              sm:w-full 
              max-w-[400px] 
              h-12 
              rounded-full 
              bg-gradient-to-r 
              from-white/[0.06] 
              to-white/[0.01]
              group
              focus-within:from-white/[0.09]
              focus-within:to-white/[0.03]
              transition-all
              duration-200
            "
          >
            <input
              type="text"
              placeholder="@tiktokusername"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
              className="
                w-full
                h-full
                bg-transparent
                md:pl-6
                md:pr-[145px]
                px-4
                text-[16px]
                rounded-[10px]
                !outline-none 
                placeholder:text-grey
                relative
                z-10
                border
                max-w-[239px]
                md:max-w-full
              "
            />
            <AnalysisButton
              className="absolute right-2 top-1/2 -translate-y-1/2"
              containerClasses="md:block hidden"
            />
          </div>
          <AnalysisButton containerClasses="md:hidden block" />
        </div>
      </div>
    </main>
  );
};

export default TikTokAccountInput;
