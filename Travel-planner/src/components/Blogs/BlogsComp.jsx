import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "Located on the banks of River Yamuna in Uttar Pradesh, Agra is a popular tourist destination as it is home to one of the 7 wonders of the world, the Taj Mahal. It is a sneak peek into the architectural history and legacy of the Mughal empire with two other UNESCO World Heritage S...!!",
    author: "Nwabali",
    date: "10/11/2021",
    BestTime: "October to March",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Maldives",
    description:
      "Welcome to your 5 star home in the heart of the Maldives, where days are long and sun-filled in a setting you’ll never forget. With 15 bars and restaurants and a whole host of experiences on offer, at Sun Siyam Iru Fushi, no two days are ever the same.",
    author: "Nailla",
    date: "18/07/2019",
    BestTime: "Summer",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Nagasaki city in Japan is an attractive destination for travelers of all kinds. Located in the south-western part of the country, it is known for its majestic mountain ranges, lush valleys, and beautiful coastline. Visitors come here to experience its rich culture, stunning scenery, and vibrant nightlife",
    author: "Nganou",
    date: "12/02/2020",
    BestTime: "March to May",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;