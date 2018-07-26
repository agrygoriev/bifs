import React from "react";
import RelativeContentBlock1 from "./relative-content-1";
import RelativeContentBlock2 from "./relative-content-2";
import CardsContainer from "./cards-container";
import Author from "./author-container";
import MainForm from "./main-form";
import CookieBar from "../components/cookie-bar";

const MainPage = props => {
  return (
    <section>
      <MainForm className="pix_section pix-padding-v-40 light-black-bg form-container" />
      <RelativeContentBlock1 />
      <RelativeContentBlock2 />
      <CardsContainer />
      <Author
        name="Jeff Rose"
        title="Contributor"
        about="I am a certified financial planner, author, blogger, and Iraqi combat veteran. I'm best known for my blogs GoodFinancialCents.com and LifeInsurancebyJeff.com and my book, Soldier of Finance: Take Charge of Your Money and Invest in Your Future. I escaped a path of financial destruction by being a college drop out and having over $20,000 of credit card debt to eventually become a self-made millionaire. My mission is help GenX'ers achieve financial freedom through strong money habits and unleashing their entrepreneurial spirit. My work has been featured in The Wall Street Journal, USA Today, Reuters and Fox Business."
      />
      <CookieBar />
    </section>
  );
};
export default MainPage;
