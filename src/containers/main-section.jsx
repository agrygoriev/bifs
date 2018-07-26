import React from "react";
import Route from "react-router-dom/Route";
import MainPage from "./main-page";
import PrivacyPage from "./privacy-page";
import TermsPage from "./terms-page";
import BlogPage from "./blog-page";
import ContactsPage from "./contacts-page";
import TellMeMore from "../components/tell-me-more";
import ArticlePage from "./article-page";

const MainSection = props => {
  // console.log(props);
  const privacyProps = {
    heading: "Privacy Policy",
    update: "Updated: July 1st, 2018",
    text: [
      {
        heading:
          "We values the privacy of our readers. We recognize your right to privacy and work hard to protect your private information at all turns.",
        text:
          "Please note that this privacy policy may be updated at any time and will be time stamped periodically to show the newest update time. website will only provide your data to law enforcement and other agencies when presented with a court order or subpoena and in response to law enforcement agency requests. website takes illegal activities, suspected fraud and other forms on online mischief seriously and will provide data to the proper authorities when that type of mischief appears on our website."
      },
      {
        heading: "When is your data collected?",
        text:
          "We collect information from our users in several ways including subscribing to our newsletter, RSS feeds and other opt-in forms, sharing your information when emailing our writers, editors and other site-related email addresses, sharing personal information via the site’s comment forms, and sharing information via Twitter, Facebook and other social media accounts and by following the website on Facebook, Twitter and other social media platforms."
      },
      {
        heading: "How will the website use my data?",
        text:
          "Information collected by the website will be used in a manner determined by the reason for collecting it."
      },
      {
        heading:
          "Analytics (Google Analytics, Parsely, Alexa, Quantcast and others)",
        text:
          "Information provided to website from these platforms are collected outside of our regular scope of business and not collected at the direct request of website. Typical information collected via analytics include operating system being used, internet browser used by our visitors and the screen resolution for which our website is being viewed among other user specific data."
      },
      {
        heading: "User contact info",
        text: "Email addresses, social media accounts, cookies"
      },
      {
        heading: "",
        text:
          "Newsletter provided emails can be used to send daily the website newsletters to our readers upon our discretion. For example, a “hot stories” email may be sent to collect user emails. In this case, our newsletter subscribers will be emailed periodically after they opted-in to the newsletter. Users will be offered an unsubscribe option with each website newsletter sent."
      },
      {
        heading: "",
        text:
          "The email address you enter into our contact form when contacting an editor, writer, member of our advertising team and other agents on the website will be used specifically for correspondence purposes only. The same correspondence rule applies when you contact any of our staff outside of our general contact forms."
      },
      {
        heading: "",
        text:
          "If you choose to comment through our system using Facebook Connect, Twitter or other social media networks, we do not collect your email information; however, we do gain access to your username which can be used for correspondence when appropriate."
      },
      {
        heading: "",
        text:
          "Information collected during surveys, giveaways and other on-site forms of engagement will only be used to contact contest winners, poll participants and other users as need permits."
      },
      {
        heading: "Advertising",
        text:
          "On occasion, the website may provide email addresses and other information to third-party vendors for the purpose of advertising targeting and data analytics. Please note this information is used to provide you with the best possible ads and not for the purpose of direct marketing by our third-party advertising and social networking partners. Our advertisers are not allowed to directly email our readers or use their personal data in a way that violates our Terms of Service and Privacy Policy."
      },
      {
        heading: "",
        text:
          "Please note that our RSS feeds are often maintained by third-party sources who will store your personal information; those RSS feed management and other user management systems will house your personal information under their own privacy policy and terms of service."
      },
      {
        heading: "",
        text:
          "Please note that some advertisers may place a unique cookie on your browser to identify your anonymous account. Those cookies in some cases may provide tracking data to third-party advertisers. Other advertisers on the website may also collect the same information about your personal site usage. If the website’s advertising partners are not serving those ads, our privacy policy will not apply to information collected by those ad partners."
      },
      {
        heading: "Third-party access to your personal information",
        text:
          "The website delivers ads through Doubleclick technology, with advertising offered through multiple advertising networks and other rotating partners. Those agencies often provide frequency capping on the number of ads each user may view each day, that technology requires our third-party advertisers to collect the number of ad views peruse, geographical information and in some cases the operating system, screen resolution, computer OS and other information. Our advertisers to the best of our efforts will not collect your name, address or other personal information."
      },
      {
        heading: "",
        text:
          "We use third-party advertising companies to serve ads and collect information when users visit our site. These companies may use information (not including your name, address, email address or telephone number) about your visits to this and other websites in order to provide advertisements on our site, other websites and other forms of media about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, check out http://www.networkadvertising.org/managing/opt_out.asp"
      },
      {
        heading: "The website as a public forum",
        text:
          "At the website we strive to protect your private information; however, please note that any public comments you make are not protected under our site’s policies. For example, Facebook comments are made available to the general public and, if chosen by you, will be displayed on your account."
      },
      {
        heading: "The website comment policy",
        text:
          "At the website, we do not believe in the censorship of comments based on political or ideological point of view, however, we do reserve the right to remove comments that we feel are spam in nature, abusive towards users, contain foul language or appear completely off-topic from the story in which the comment is being left. In a case where a user “flames” the board with many comments left in quick successive order, we reserve the right to remove those comments."
      },
      {
        heading: "",
        text:
          "The website reserves the right to delete a comment (it will, however, still show on your personal Facebook page), remove a comment and ban a user, and simply ban a user from further comments."
      },
      {
        heading: "",
        text:
          "The website does not remove comments by request. Users who left comments will need to log into their own social media account and remove those comments. the website, however, will remove comments based on legal processes, in response to law enforcement and when we feel a user is making a good will attempt to clear up a misunderstanding or protect the privacy and safety of themselves and others."
      },
      {
        heading: "",
        text:
          "The website does not tolerate hate speech, foul language, threats against users, spam and non-relevant comments related to a post."
      },
      {
        heading: "",
        text:
          "All comments and other content contributed to the website shall adhere to the following policy, and may be edited or removed at the website’ discretion if it is deemed to be in violation of this policy."
      },
      {
        heading:
          "Facebook Open Graph Use Policy – the website Social News Reader and Facebook Connect",
        text:
          "In certain cases, the website will ask for your permission to gain access to your Facebook account. If you chose to use our Facebook social news reader your personal Facebook account information will allow the website to post news stories you read from our website to your Facebook news feed. In general, the Facebook social graph allows the website in certain instances to gain access to your Facebook account, however, under no circumstance will we use those permissions to post any information to your Facebook account outside of the scope of our applications originally stated goals."
      },
      {
        heading: "",
        text:
          "Facebook Connect will always ask permission to connect with your Facebook account. The window that appears during your initial login will ask for certain Facebook permissions. By accepting those permissions, you acknowledge how and when the website can connect to your account."
      },
      {
        heading: "",
        text:
          "In certain Facebook permission situations, users will be asked to approve certain information sharing capabilities with the website such as “their likes, their basic information and their ‘about you’ information."
      }
    ]
  };
  const termsProps = {
    heading: "Terms & Conditions",
    update: "Updated at: May 12, 2018",
    text: [
      {
        heading: "",
        text:
          "In using this website you are deemed to have read and agreed to the following terms and conditions:"
      },
      {
        heading: "",
        text:
          "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company\v, “Ourselves”, “We” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing English Law. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same."
      },
      {
        heading: "Privacy Statement",
        text:
          "We are committed to protecting your privacy. Authorized employees within the company on a need to know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers. Parliament has created specific offences for unauthorised actions against computer systems and data. We will investigate any such actions with a view to prosecuting and/or taking civil proceedings to recover damages against those responsible."
      },
      {
        heading: "Availability",
        text:
          "Unless otherwise stated, the services featured on this website are only available within the United Kingdom, or in relation to postings from the United Kingdom. All advertising is intended solely for the United Kingdom market. You are solely responsible for evaluating the fitness for a particular purpose of any downloads, programs and text available through this site. Redistribution or republication of any part of this site or its content is prohibited, including such by framing or other similar or any other means, without the express written consent of the Company. The Company does not warrant that the service from this site will be uninterrupted, timely or error free, although it is provided to the best ability. By using this service you thereby indemnify this Company, its employees, agents and affiliates against any loss or damage, in whatever manner, howsoever caused."
      },
      {
        heading: "Log Files",
        text:
          "We use IP addresses to analyse trends, administer the site, track user’s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. Additionally, for systems administration, detecting usage patterns and troubleshooting purposes, our web servers automatically log standard access information including browser type, access times/open mail, URL requested, and referral URL. This information is not shared with third parties and is used only within this Company on a need-to-know basis. Any individually identifiable information related to this data will never be used in any way different to that stated above without your explicit permission."
      },
      {
        heading: "Cookies",
        text:
          "Like most interactive web sites this Company’s website [or ISP] uses cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate partners may also use cookies."
      },
      {
        heading: "Links to this website",
        text:
          "You may not create a link to any page of this website without our prior written consent. If you do create a link to a page of this website you do so at your own risk and the exclusions and limitations set out above will apply to your use of this website by linking to it."
      },
      {
        heading: "Links from this website",
        text:
          "We do not monitor or review the content of other party’s websites which are linked to from this website. Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us and should not be regarded as the publisher of such opinions or material. Please be aware that we are not responsible for the privacy practices, or content, of these sites. We encourage our users to be aware when they leave our site & to read the privacy statements of these sites. You should evaluate the security and trustworthiness of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them. This Company will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of personal information."
      },
      {
        heading: "Copyright Notice",
        text:
          "Copyright and other relevant intellectual property rights exists on all text relating to the Company’s services and the full content of this website. This Company’s logo is a registered trademark of this Company in the United States and other countries. The brand names and specific services of this Company featured on this web site are trade marked."
      },
      {
        heading: "Communication",
        text:
          "We have several different e-mail addresses for different queries. These, & other contact information, can be found on our Contact Us link on our website or via Company literature or via the Company’s stated telephone, or mobile telephone numbers."
      },
      {
        heading: "Notification of Changes",
        text:
          "The Company reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our site. If there are any changes in how we use our site customers’ Personally Identifiable Information, notification by e-mail or postal mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our web site 30 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis."
      },
      {
        heading: "",
        text:
          "These terms and conditions form part of the Agreement between the Client and ourselves. Your accessing of this website and/or undertaking of a booking or Agreement indicates your understanding, agreement to and acceptance, of the Disclaimer Notice and the full Terms and Conditions contained herein. Your statutory Consumer Rights are unaffected."
      }
    ]
  };
  const PrivacyPolicyWithProps = props => {
    return <PrivacyPage data={privacyProps} {...props} />;
  };
  const contacts = props.contacts;
  const ContactsPageProps = () => {
    return <ContactsPage contacts={contacts} />;
  };
  const blogProps = {
    heading: "Blog",
    subheading: "Let us guide you into the future of personal finance!",
    text: [
      {
        id: 1,
        heading: "How To Take A Mini-Retirement — And Why You Should",
        subheading:
          "Taking a mini-retirement can be an eye-opening experience unlike anything you’ve ever done. But if you don’t have a plan and you aren’t funding it adequately, it can become a disaster.",
        image: "mini-retirement.jpg",
        text:
          '<div class="entry-content"><p><img class="alignnone wp-image-43727 size-full" src="https://www.moneyunder30.com/images/2018/03/mini-retirement.jpg?x48119" alt="How To Take A Mini-Retirement" width="660" height="371" srcset="https://www.moneyunder30.com/images/2018/03/mini-retirement.jpg 660w, https://www.moneyunder30.com/images/2018/03/mini-retirement-149x84.jpg 149w, https://www.moneyunder30.com/images/2018/03/mini-retirement-300x169.jpg 300w, https://www.moneyunder30.com/images/2018/03/mini-retirement-450x253.jpg 450w, https://www.moneyunder30.com/images/2018/03/mini-retirement-100x56.jpg 100w" sizes="(max-width: 660px) 100vw, 660px"></p><p>Mini-retirements are becoming more and more common with the way people are starting to feel about their jobs. Many of you are probably tired, stressed, and feeling like you aren’t taking the right path in life.</p><p>If you do it correctly, a mini-retirement can be just the antidote you need to redirect your life plan and become more well-rounded personally and financially.</p><p>In this article, you’ll learn more about mini-retirements, including what they are and why anyone would want to take one. You’ll learn exactly how to take a mini-retirement and what you need to do now to prepare.</p><h3>What is a mini-retirement?</h3><p>A mini-retirement is when you take time away from work for an extended period. It’s defined and intentional and requires meticulous planning in advance.</p><p><em>This isn’t a vacation, a sabbatical, or a string of sick days you take because you just don’t want to be at work</em>. A mini-retirement can be a self-reflective, eye-opening experience.</p><p>They aren’t for everyone, either. People who are just sick of work and have a poor work ethic will typically fail when taking a mini-retirement because you have to have a strategic plan for getting back to work after your time off. And you have to want to go back.</p><p>But for the right person in the right situation, a mini-retirement can do some beneficial things for you.</p><h3>Why take one?</h3><p>You might be wondering why (or even <em>how—</em>which I’ll cover later) you should take a mini-retirement. I mean, taking time away from work is the ultimate kiss of death on your career, right?&nbsp;Not always.</p><h4>The state of the American worker</h4><p>In a <a href="https://www.projecttimeoff.com/research/overwhelmed-america" target="_blank">2014 study done by Project: Time Off</a>, it was revealed that nearly all respondents knew the value of taking time off, but about 41 percent of them said they would not use all of their vacation time that year.</p><p>The study reveals a slew of reasons why this is, but the fact of the matter is that as we progress in our careers, we’re less and less likely to want to take time off (or feel like we can).</p><p><a href="https://www.cdc.gov/niosh/docs/99-101/" target="_blank">Another study done</a> by The National Institute for Occupational Safety and Health (NIOSH) showed 40 percent of workers reported their job was very or extremely stressful and 25 percent view their jobs as the primary source of stress in their lives.</p><p>There are all sorts of data to back it up, but one thing is entirely correct – we’re stressed out from work.</p><h4>The value of time away</h4><p><a href="https://www.shrm.org/hr-today/trends-and-forecasting/research-and-surveys/Documents/2017%20Employee%20Benefits%20Report.pdf" target="_blank">According to a study</a> from the Society for Human Resource Management, more companies are offering sabbaticals and extended time away from work than ever before. The study also found that employees who take time away from work for a more extended period come back feeling mentally refreshed, psychologically energized, and overall more productive and happier.</p><p>More and more Americans are seeing this trend occurring, too.</p><p>Many people realize that waiting until you’re in your mid-60s to start a life of peace and relaxation isn’t always what it’s cracked up to be. We don’t know where we’ll be financially or physically at that time.</p><p>Tim Ferriss discusses this concept at length in his book <em>The Four Hour Workweek</em>. He suggests finding a way to enjoy life NOW while you can be happy and healthy—instead of waiting for some fantasy retirement that may never come.</p><p>A great example of this is graphic designer Stefan Sagmeister. In the below TED Talk, Stefan shares how he shuts his studio down completely for a full year every seven years to help him become more creative:</p><div style="max-width: 854px;"><div style="position: relative; height: 0; padding-bottom: 56.25%;"><iframe style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;" src="https://embed.ted.com/talks/stefan_sagmeister_the_power_of_time_off" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe></div></div><h3>How to Take a Mini-Retirement</h3><p>Now that you understand what a mini-retirement is, and why you should consider one, you’re probably wondering how something like this is even possible.</p><p>You probably think that you have to give up your career and save a bunch of money only to skip out on a year or two worth of work, just to go right back.</p><p>Well, it doesn’t <em>have</em> to be like that. Here are six tips to get you started:</p><h3>1. Spend some time exploring <em>why </em>you want a mini-retirement</h3><p>If you’re young, single, and have no debt, taking a mini-retirement may not be that big of a deal for you. But for many people, it’s a major life decision—and not one that you should jump into lightly.</p><p>For instance, are you just looking to get out of a crappy job that you hate? That might be a good enough reason, but you need to explore a little deeper. If you hate your job, figure out why you want to take a mini-retirement and how it will help you move closer to what you <em>do</em> want.</p><p>A great example is someone wanting to <a href="https://www.moneyunder30.com/tips-for-traveling-abroad" target="_blank">travel abroad</a> because their dream is to teach English in another country – if you hate your job and know this is what you want to do, then you’ve explored your <em>why </em>(at least a little bit).</p><p>Before diving into the mini-retirement world, decide why you want to do this. If you don’t have a plan, you put yourself at risk of wasting the precious time. I recommend giving yourself as much time as you need to figure this out—mini-retirements aren’t going anywhere.</p><h3>2. Decide how you’d like to use the time</h3><p>Now that you’ve figured out why you want to take a mini-retirement, you need to decide how you’ll use the time you make. A mini-retirement can be a month or several years—it’s really up to you. A significant determining factor of this is money, which I’ll explore further below.</p><p>As I said above, if you don’t know what you want to use this time for, you could end up wasting it. Bren from <a href="https://www.brenontheroad.com/about/" target="_blank">Bren on the Road</a> used his time away from work to learn Spanish off the coast of Spain. He took eight weeks off of work to do this. He’s since quit his job and completely changed his life and direction.</p><p>But Bren didn’t know that he’d end up quitting his job—all he knew was that he was exhausted from working a traditional job and having others tell him what to do and where to be, and that he wanted a break to study a language he’d always found an interest in.</p><p>He knew exactly how he’d use this finite period.</p><p>And because of that, he found a new path. He met new people and decided to be a <a href="https://www.moneyunder30.com/travel-while-youre-young-at-any-cost-8312" target="_blank">world traveler</a>.</p><h3>3. Figure out how to fund it</h3><p>You’re probably getting excited now. You know why you want the break and how you’ll use the time. But now comes to the most daunting question—how will you afford it?</p><p>Despite common misconceptions, you don’t need to be rich or even debt free to fund a mini-retirement. You just have to make it a priority.</p><p>This doesn’t mean you should quit your job on a whim and pay for the break by using credit cards. In fact, that’s a terrible idea.</p><p>My advice is to instead <a href="https://www.moneyunder30.com/how-to-make-a-budget" target="_blank">budget</a> for this mini-retirement. If you’ve ever read any of my articles, you know that I’m obsessed with <a href="https://www.youneedabudget.com/" target="_blank">YNAB</a>. That’s because it’s changed my financial life. So I recommend you use this tool (or at least the methodology behind it) to fund your mini-retirement.</p><p><em>Here are the steps to take for this:</em></p><ol><li><strong>Know how much time you want to take, in months.</strong> This can be one month or 36 months, but figure out how long you’ll be away and stick to it.</li><li><strong>Estimate how much your living expenses will be each month </strong>(rent, food, and other day-to-day costs).&nbsp;Don’t include unnecessary items like dining out, or gifts for friends (hey—we all want to buy cool stuff we see in local shops while traveling). Also, don’t forget to account for your rent or mortgage at home (unless you plan to sub-lease).</li><li><strong>Multiply your monthly living expenses by the duration of your mini-retirement.</strong></li><li><strong>Estimate your total traveling costs </strong>(assuming you’re traveling).&nbsp;If this is a one-time expense like Bren experienced in going to Spain, then account for that. But if you’re planning to hop around to different cities or countries, estimate how much this will cost over the duration of your mini-retirement.</li><li><strong>Add it all up, and add 20 percent </strong>(yes, 20 percent—this will give you a nice buffer).</li></ol><p>This should be your target number to budget for. Here’s an example of what it could look like:</p><p>Say you want to take a year off of work. Assume that since you’ll have to save up for this, you’ll plan it out after your current lease ends and just throw your stuff in storage.</p><p>A storage unit costs $100 per month.</p><p>You want to go to Thailand for the year and take in the local culture, then write about it. (<a href="https://www.bloggingfromparadise.com/" target="_blank">One of my favorite bloggers did this</a>, by the way—only he stayed).</p><p>Seems like a good <em>why</em>.</p><p>You figure it’ll cost you about $1,000 per month to get by in Thailand. You’re also estimating another $4,000 in total travel expenses for the year.</p><p>Your baseline total is $17,200 ($1,000 per month x 12 + $4,000 total travel + $100 storage unit x 12 months).</p><p>Now you’ll add 20 percent. Why? Because s&amp;%# happens. It’s always smart to give yourself a buffer while you’re on your mini-retirement.</p><p>That brings your new total to $20,640 ($17,200 x 1.20).</p><p>This is the number you’ll plug in as your target amount in YNAB. Now start saving.</p><h3>4. Be comfortable leaving your job if necessary</h3><p>Very rarely will a company tell you that it’s okay to take a year off of work and they’ll keep your job nice and warm for you. If you have that opportunity, take it.</p><p>But assume that it’s not a reality for you. If you’re considering a mini-retirement, you’re either going to burn through most of your vacation time, or you’re going to need to be willing to quit your job.</p><p>Part of taking an extended mini-retirement is to have some time to self-reflect. If you recall the stats from above, you probably have reached this point because of your job. So maybe it’s not the worst thing in the world to walk away from it.</p><p>Before finalizing your decision to step away, make sure you’re at peace with quitting your job. You may find what you’re looking for on an extended mini-retirement, but you also may not. You have to be realistic and know that after it’s over, it might be time to look for another job.</p><h3>5. Take the mini-retirement and don’t look back</h3><p>Once you’ve decided to do this, do it and don’t look back. Don’t second guess your decision or feel like you have to explain yourself to anyone.</p><p>As long as you’ve figured out why you want to take a mini-retirement and you know how you can swing it, there’s no reason why you should have to justify it to anyone. If you do, you’ll end up missing out on critical self-reflection time because you’re too worried about what everyone else is thinking.</p><p>The other thing I’d recommend is keeping a journal. Whether it’s a blog or just a personal journal you write in, take daily notes about what you’re experiencing. It will not only help you reflect during your mini-retirement, but you’ll also be able to look back and recount your learnings years later (as well as potentially help others).</p><h3>6. Decide what you want to be when you grow up</h3><p>The purpose of a mini-retirement is to propel yourself forward in some way. Remember, it’s not just a vacation or time away from work—it should be done with purpose.</p><p>With that being said, make a conscious effort to figure out what you want to do post-mini-retirement. Maybe you’re like Bren, and you want to be a full-time traveler/blogger. Or perhaps you want to go right back into the field you left, only with a new and refreshed perspective.</p><p>Regardless of what it is, decide which direction you want to go after it’s over.</p><h4><strong>A quick note on re-entering the workforce</strong></h4><p>You’ll also want to think about how to explain this if you’re re-entering the job market. Companies aren’t going to want to hire you if they perceive you’re someone who will frequently take a year off of work. If this is something you plan to do regularly, find a job that fits that lifestyle.</p><p>If not, then you can feel comfortable explaining your decision to take time away from work, but I would strongly recommend thinking about what you’ve learned from the experience and how it will make you the best person for the job you’re going after.</p><h3>Summary</h3><p>Taking a mini-retirement can be an eye-opening experience unlike anything you’ve ever done (or will ever do) in your entire life. But if you don’t have a plan and you aren’t funding it adequately, it can become a disaster.</p><p>Take the time to explore the steps I gave you above in great detail, and take the time to save up for this experience. Once you’ve done that—you’re well on your way to your first mini-retirement.</p><h3>Read more</h3><ul><li><a href="https://www.moneyunder30.com/how-to-retire-early" target="_blank">Start At 25, Retire At 45 – How To Retire Well After Just 20 Years Of Work</a></li><li><a href="https://www.moneyunder30.com/early-retirement-not-required" target="_blank">Can’t Retire Early? Don’t Worry: You’re Not Failing At Money</a></li></ul></div>'
      },
      {
        id: 2,
        heading: "9 Creative Ways to Boost Your Retirement Savings",
        subheading:
          "Everyone knows how important it is to save for retirement. However, actually setting aside money for your future can be challenging. When you're short on cash and have other demands on your budget, there might be little to nothing left to put toward your nest egg.",
        image: "happy_girl.jpg",
        text: `<div class="body"><div id="big-main-image"><img src="https://wisebread-killeracesmedia.netdna-ssl.com/files/fruganomics/imagecache/605x340/blog-images/happy_girl_is_taking_pictures_with_her_mobile_phone.jpg" alt="" title="" class="" width="605" height="340">          </div><br><div class="image-and-share below-big-image"><p>Everyone knows how important it is to save for retirement. However, actually setting aside money for your future can be challenging. When you're short on cash and have other demands on your budget, there might be little to nothing left to put toward your nest egg. How are you supposed to save for your future when you're completely strapped in the present?</p><p>If you don't make enough money right now to set aside, there are still ways to grow your retirement savings. You just have to think outside the box.</p><h2>1. Use your tax refund</h2><p>Many people daydream about how they want to spend their tax refund, which is often the biggest windfall they'll see all year. In fact, last year the average tax refund was $2,763, according to the IRS.</p><p>If you're getting a tax refund this year, put it to work. Rather than spending your refund on electronics or a vacation, consider depositing that money straight into your retirement fund. With the power of compound interest, that refund could grow by the thousands by the time you retire.</p><h2>2. Deposit your credit card rewards</h2><p>If you have a credit card that offers cash back, that cash can be a regular source of extra money for your retirement fund. If you already use your credit card for routine purchases like utilities, gas, and groceries, this is easy money. Just make sure you are paying off your credit card balance in full every month.</p><h2>3. Use cash back apps</h2><p>If you don't have a cash back credit card, you can still earn money for doing the shopping you were going to do anyway. Apps like <a href="https://ibotta.com/r/jcsgjbv" target="_blank" sl-processed="1">Ibotta</a> or SavingStar let you earn cash back on grocery purchases, while sites like <a href="http://www.ebates.com/rf.do?referrerid=vIhagUaAxdMIsu435wELZg%3D%3D&amp;eeid=26471" target="_blank" sl-processed="1">eBates</a> offer a percentage back on many online purchases. You'll earn a percentage of your purchase as cash, and a check will be mailed to you — which you can toss straight into your retirement account. It's a low-effort way to earn extra money going about your normal routine.</p><h2>4. Launch a side hustle</h2><p>If you have some extra time, you can earn money in the evenings or on weekends by <a href="http://www.wisebread.com/14-best-side-jobs-for-fast-cash" target="_blank" sl-processed="1">launching a side hustle for fast cash</a>. From walking dogs to making deliveries, there are hundreds of side gigs you can do in just a few hours a week. That extra income can go a long way to funding your retirement.</p><h2>5. Sell your clutter</h2><p>Take a look around at all of the electronics, textbooks, toys, and more that you never use. You may have as much as a few thousand dollars' worth of items collecting dust in your home. That clutter can be eliminated while netting you some money for your retirement. Sell items on sites like eBay, LetGo, and Bookscouter to get cash for your stuff.</p>  <h2>6. Rent out extra space</h2><p>If you have an extra bedroom, you can rent it out on sites like Airbnb or VRBO. Depending on your location and the size of your space, you could charge hundreds per night. However, you don't even need an extra room to make money. You can rent out a spare closet or storage space in the garage on Spacer, or rent out your parking spot on SpotHero.</p><h2>7. Sell photos online</h2><p>If you like photography, you can earn passive income to put toward your retirement savings by selling your photos. You can try your hand at selling stock photography on sites like iStock or Shutterstock, or you could sell your artwork in an online portfolio or on arts and craft sites like Etsy. You could also try selling smartphone photos on Foap, which is an app that connects brands with photographers looking to sell their images.</p><h2>8. Let strangers drive your car</h2><p>If you don't drive your car every day, your vehicle can become a lucrative source of income. You can rent it out to tourists or business travelers on Turo and set your own daily rate. According to the company, you can make nearly $5,800 a year if your car's market value is $20,000 and you rent it out for 12 days per month. That alone could get you to the contribution limit on an IRA.</p><h2>9. Trade in clothes for cash</h2><p>If you have clothes, handbags, or shoes that you don't wear anymore, stop letting them take up precious closet space. You can sell those items on sites like Poshmark, Tradesy, and even in-person at consignment stores like Plato's Closet or Clothes Mentor. A single bag of clothes could net you enough to send a couple hundred dollars toward your retirement account.</p>`
      },
      {
        id: 3,
        heading: "Get Started with Retirement Planning",
        subheading:
          "By now you probably know that you want to retire at some point, and if you’re like most Americans you either haven’t saved enough for retirement or you’re worried that you haven’t. But don’t let that worry paralyze you—start saving! How, you ask? Take it one step at a time with our retirement planning guide.",
        image: "pie_chart.png",
        text: `<div class="content-container seocontent" data-swiftype-name="body" data-swiftype-type="text"><p>By now you probably know that you want to retire at some point, and if you’re like most Americans you either haven’t saved enough for retirement or you’re worried that you haven’t. But don’t let that worry paralyze you—<a href="/checking-account/savings-calculator">start saving</a>! How, you ask? Take it one step at a time with our retirement planning guide.</p><h2>Retirement Planning Basics</h2> <div class="imgc"> <img src="//dr5dymrsxhdzh.cloudfront.net/files/18511/images/other/seo/retirement_planning/retirement_planning_2.jpg"> <div class="photocredit"> Photo credit: © iStock/Arminius-SST </div> </div><p>Let’s start with retirement baby steps. Before we even talk about how you’re going to save more money, let’s talk about free money and money you’ve already saved. That means hunting down languishing qualified retirement plans. Think 401(k) accounts from former jobs, accounts you haven’t bothered to consolidate or roll over. If you think there isn’t enough in these old accounts to justify the work of rolling them over into an IRA or the 401(k) at your new job, think again. Doing this will help you get a better handle on where you stand with retirement savings and will make it easier to monitor your progress. With retirement, every little bit helps, and the sooner you get these accounts working for you the better you’ll feel.</p><p>If your income falls on the lower end of the spectrum, take advantage of the saver’s tax credit the government offers for the first $2,000 you save each year. It’s free money—take it.</p><h2>Take the employer match</h2><p>Many Americans have retirement investment options through their employer. There are several types of retirement funds available to American employees. For government employees, these are usually 457 plans. For certain public school employees, employees of tax-exempt organizations and ministers, these are typically 403(b) accounts. The rest of us workers in the private sector can join 401(k) plans if they’re offered.</p><p>Max out the employer match if your retirement plan comes with one. Any retirement planning article will tell you the same thing. There are no downsides to this. It’s free money, and you’ve earned it by being such an awesome employee. If your employer-sponsored 401(k) has higher fees than your IRA, you should fund your 401(k) only up to the employer match, then put any other savings into a lower-fee investment vehicle. When choosing between retirement investment companies, always look for low fees.</p><p>Are you self-employed? That’s no excuse to skip out on retirement savings. The IRS offers what’s known as a SEP-IRA. SEP stands for Simplified Employee Pension, and it’s a way that self-employed people and business owners can set up retirement accounts for themselves and their employees. SEP-IRAs are relatively easy to set up, and have flexible rules on annual contributions, so you can save more in good years and less in lean ones.</p><h2>Retirement Investments: Consider the Tax Man</h2> <div class="imgc"> <img src="//dr5dymrsxhdzh.cloudfront.net/files/18511/images/other/seo/retirement_planning/retirement_planning_3.jpg"> <div class="photocredit"> Photo credit: © iStock/DNY59 </div> </div><p>So the retirement planning is moving along -you’ve rolled over old plans, you’ve funded your 401(k) up to the employer match and you still have some money you’d like to put away for retirement. Or, you want to save but you don’t have employer-sponsored options. Now what?</p><p>It’s time to choose between a traditional IRA and a Roth IRA (choose a SEP-IRA if you’re lucky enough to be your own boss). What’s the difference between an IRA and a Roth IRA? With a Roth IRA, the money you invest comes from your after-tax income. That means you won’t have to pay taxes when you withdraw from a Roth IRA in your golden years.</p><p>With a traditional IRA, your retirement funds come from pre-tax income, which makes it a little less painful to save now but means you’ll have to pay taxes when you take the money out down the road. Traditional IRAs provide tax-deferred investing, but the money you contribute will still be taxed later on, after your money has grown.</p><p>The big question to ask when deciding between these two options is this: Is my current tax bracket higher or lower than it will be when I start using this money? If you’re a freelancer living with six roommates now, chances are you’ll be in a higher tax bracket by the time you hit your 60s or 70s and withdraw from your retirement account. If that’s the case, you’re better off going with a Roth IRA. Plus, if you’re income is too high, the IRS won’t allow you to contribute to a Roth IRA, since the Roth is a vehicle designed to help people on the lower end of the income spectrum.</p><p>Another factor to consider is what your taxes will be like on your other retirement vehicles. Do you have some money from an inheritance sitting in an index fund account that you’ll pay taxes on when you start using the money? Consider a Roth IRA to diversify between taxed and non-taxed accounts. The best retirement investments complement each other.</p><h2>Don’t cash out if you can help it</h2><p>If you withdraw from a 401(k) or traditional IRA before you hit age 59 ½ you’ll pay for it in the form of a 10% early withdrawal penalty. There are currently eight exceptions to the 10% penalty rule, for things like needing the money to pay for medical expenses or for higher education. Unless your situation falls under one of these exceptions, leave the money in your retirement account for as long as you can. Save it and forget it. It doesn’t exist. It can’t pay for your Caribbean cruise.</p><div class="content-image size-500"> <div style="margin: 0 14px 0 13px;"> <img src="//dr5dymrsxhdzh.cloudfront.net/files/18511/images/other/seo/retirement_planning/pie_chart_getting_started_with_retirement2.png" style="max-width: 473px;"> </div> </div> <h2>Retire gracefully</h2><p>When it comes to retirement planning, you want to ensure you transition to retirement like a swan landing in a lake, not a plane making a crash landing. The best retirement plans grow with you. The traditional approach has been glide path investing—also known as a target date fund. You tell the fund the date on which you want to retire, and the fund shifts to more conservative investment vehicles (i.e. from stocks to bonds) the closer you get to that date.</p><p>This approach has pros and cons. On the pro side, it automatically lowers your risk over time and aligns with our decreasing appetite for uncertainty and risk in old age. On other hand, people are living longer and longer, increasing the risk that we’ll outlive our savings. In the old days, you could get on a glide path and live off the modest returns from a conservative, bond-focused portfolio in later years because your retirement didn’t last very long. But now, with people living 25+ years in retirement, some analysts argue we need some growth built into our retirement accounts, even after we hit our 60s. Otherwise, we risk both outliving our savings and missing out on stock market gains. So on the con side, a target date fund can take seniors out of stocks and into bonds too soon.</p><p>The trade-off with owning stocks (or in investor speak, “equity allocation”) is between growth and volatility. If you keep a higher portion of your portfolio in stocks, you have more growth potential, but you also face more risk that your savings will take a nosedive when the market does. On the other hand, if by the time you hit retirement all your money is in low-yield bonds and CD’s, you’d better be darn sure you have enough money to support yourself for the rest of your life—and to keep up with inflation and cost of living increases.</p><p>How you start decumulating your retirement assets will depend on the investment vehicle you chose. If you have a traditional IRA, you’re required to start drawing it down once you turn 70 ½. This is known as the Required Minimum Distribution (RMD) rule. If you have a Roth IRA, you can keep contributing to it even after 70 ½, and you’re not subject to RMDs.</p><p>Planning for retirement involves more than just paperwork and frugality—it also involves some reflection. What are your current expenses and will they increase or decrease in retirement? Do you want a lavish retirement or a modest one? Do you want to quit work cold turkey or transition to a part-time job in retirement? How high is your risk tolerance? Think about your answers to these questions and discuss them with anyone who shares your financial fate, like a partner or dependent.</p><p>If you break retirement planning down into manageable steps, you’ll be on your way to a comfortable old age. With some saving and strategizing now, by the time you’re retired you can worry about your bingo game and not your investment portfolio.</p></div>`
      }
    ]
  };
  const BlogPageWithProps = () => {
    return <BlogPage data={blogProps} />;
  };
  const ArticlePageWithProps = props => {
    return <ArticlePage data={blogProps} {...props} />;
  };
  const TermsPageWithProps = props => {
    return <TermsPage data={termsProps} />;
  };

  const tellMeMoreProps = {
    heading: "Think you'd enjoy working with us?",
    text:
      "There are a ridiculous number of ways to save your money and the ones I’ve covered here are just the tip of the iceberg. If you have time, a passion for almost anything, and at least some creative skill, you may be able to build savings stream — or several — if you give it enough time.",
    btntext: "Tell me more!"
  };
  return (
    <main>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/privacy/" component={PrivacyPolicyWithProps} />
      <Route exact path="/blog/" component={BlogPageWithProps} />
      <Route exact path="/contacts/" component={ContactsPageProps} />
      <Route path="/blog/:id" component={ArticlePageWithProps} />
      <Route exact path="/terms/" component={TermsPageWithProps} />
      <TellMeMore
        heading={tellMeMoreProps.heading}
        text={tellMeMoreProps.text}
        btntext={tellMeMoreProps.btntext}
      />
    </main>
  );
};
export default MainSection;
