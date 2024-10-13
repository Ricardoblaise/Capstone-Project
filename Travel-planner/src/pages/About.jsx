import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to our Travel Planner Agency, your go-to destination for unforgettable journeys! 
          We specialize in crafting personalized travel experiences that cater to your unique preferences 
          and interests. Whether you’re dreaming of a relaxing beach getaway, an adventurous mountain trek, 
          or a cultural city tour, our expert team is here to help.
          With years of experience in the travel industry, we pride ourselves on our attention to detail and 
          commitment to customer satisfaction. We offer tailored itineraries, insider tips, 
          and exclusive deals to make your trip seamless and memorable.
          Explore hidden gems and popular attractions with our carefully curated packages, 
          designed to suit all budgets and travel styles. Let us take the stress out of planning, 
          so you can focus on making memories.
          Join us in discovering the world, one trip at a time! Your adventure awaits!
          </p>
          <br />
          <p>
            Our client are our top priority❤️!!!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;