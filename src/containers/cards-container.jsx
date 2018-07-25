import React from "react";
import CardsHeading from "../components/cards-heading";
import Card from "../components/card";
const CardsContainer = () => {
  return (
    <section className="cards">
      <div className="pix_section pix-padding-v-85 pix-darkblue-transparent">
        <div className="container">
          <div className="row">
            <CardsHeading
              heading="10 Ways To Save Money In 2018"
              subheading="Getting your money right in a new year is a big concern"
            />
            <Card
              color="blue"
              heading="Track your expenses"
              text="Engineer-turned-advisor and founder of WealthMobius.com Bily Xiao says: “Too many adults do not have an accurate view of their income and expenses. But if you measure it, you can improve it. So start tracking, take stock of how much you’re saving, identify low-hanging fruit of expenses you can cut, and start setting some incremental goals to increase your saving. Make use of great tools like Mint.com (syncs with your financial accounts) or YouNeedABudget.com (more manual and private) for tracking."
              tag="Tips"
            />
            <Card
              color="green"
              heading="Automate it"
              text="Jamie Pomeroy, Financial Advisor at MerchantsBank says:
“Once you have established a budget and have clear short- and long-term goals, one easy way to get in the habit of saving money toward those goals, is to simply automate it. Set up regular and automatic deposits into your investment and savings accounts, either directly from your paycheck or from your checking account.&quot;"
              tag="Tips"
            />
            <Card
              color="orange"
              heading="Get out of debt"
              text="Scott Wellens is the founder of FortressPlanningGroup and host of the “Best in Wealth” podcast. 
He says: “People who have a lot of consumer debt and other loans do not have the cash flow to save in the first place. Debt-ridden individuals end up paying interest to the credit companies instead of earning interest on savings. The best way to start saving money is to get out of debt as quickly as possible and have the discipline to stay out of debt. You will be surprised at how much money can be saved on a monthly basis if you kick debt out of your life.”"
              tag="Tips"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardsContainer;
