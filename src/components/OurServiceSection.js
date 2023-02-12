import React from "react";
import ServiceSection from "./ServiceSection";


const OurServiceSection = () => {
  return (
    
    <div className="container mx-auto px-5 my-20">
      
      <div className="grid grid-cols-8 items-center gap-10 lg:gap-20">
        <div className="md:order-2 col-span-8 md:col-span-3">
          <img
            className="w-full h-full object-cover"
            src="Search.svg"
            alt=""
          />
        </div>
        <div className="md:order-1 col-span-8 md:col-span-5">
          <h2 className="text-3xl mb-3 ">These are the facts:</h2>
          <p className=" leading-relaxed mb-5">

            <span className="font-bold">  “Organic vs. Paid Search Results: Organic Wins 94% of Time”</span>- <a href="http://searchenginewatch.com/sew/news/2200730/organic-vs-paid-search-results-organic-wins-94-of-time" className="underline decoration-[#6c63ff] text-[#6c63ff] font-bold">Search Engine Watch</a>  <br />
            What that means to you is free in this case is much, much better than paid.
            <br /><br />
            <span className="font-bold">“91% of Internet users search for purchasing information every month.” </span>-
            <a href="https://www.pewresearch.org/search/91%25+of+Internet+users+search+for+purchasing+information+every+month./" className="underline decoration-[#6c63ff] text-[#6c63ff] font-bold">
              Pew Research </a>
            <br /><br />
            <span className="font-bold">
              “The top 5 results get 75% of the clicks!” </span>-
            <a href="https://blog.hubspot.com/insiders/seo-facts" className="underline decoration-[#6c63ff] text-[#6c63ff] font-bold">
              Hubspot Insider SEO Facts</a>
            <br /><br />
            Once again, SEO used properly will net results in the bottom line, which is profit! More than 90 percent of internet users will conduct a search for something they need every month, on average. 75 percent of those searchers will click on one of the top 5 results. Therefore, in order to be profitable, your business must be listed in the top 5.
            <br /><br />
            <span className="font-bold">
              “82 percent of the purchases made online, started with a search entry.”</span> – <a href="https://www.mckinsey.com/~/media/mckinsey/dotcom/client_service/high%20tech/pdfs/impact_of_internet_technologies_search_final2.ashx" className="underline decoration-[#6c63ff] text-[#6c63ff] font-bold">McKinsey & Company</a>
            <br /><br />
            


          </p>
          {/* <button className="px-10 py-2 uppercase bg-[#FFF79E] hover:bg-[#EDCF55]">
            SEE our service
          </button> */}
        </div>
<div className="md:order-3 col-span-8 md:col-span-8">
<ServiceSection/>
</div>
        <div className="md:order-4 col-span-8 md:col-span-8">
          <p className="leadeing-relaxed text-justify">
          Someone wants a pair of running shoes and types running shoes in Google and Joe’s Running Shoes and Apparel came up in the top 5 of the search results, the potential client clicks that link, finds their shoes, and orders them.
            <br /><br />
            I have been providing my clients with Keywords that offer low competition and high volume for nearly ten years. I install and activate the WordPress plugin for SEO Yoast, an easy to use plugin that millions are already using to get proven results with SEO. Simply stated, I have the knowledge, experience, and motivation to put your website in the top 5 of Google, Bing and other search engines results pages. Why pay-per-click when you can hire me to set everything up for you to be successful and profitable in a short period of time?
            <br /><br />
            Even if you do not have a website yet, just an inspiration is all it takes. I will set up your WordPress website with the best theme for your business; the plugins you need to make it work for you and make it is easy to maintain.
            If you have any questions, give me a call in Charlotte 704-891-4329, send me an email, or fill out the contact form to get started with an internet presence that will get you noticed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
