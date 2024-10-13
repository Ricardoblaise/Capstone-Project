import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "Japan",
    description: "Nagasaki city in Japan is an attractive destination for travelers of all kinds. Located in the south-western part of the country, it is known for its majestic mountain ranges, lush valleys, and beautiful coastline. Visitors come here to experience its rich culture, stunning scenery, and vibrant nightlife",
    price: 7700,
    type: "Rich Cultural",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 5400,
    type: "Rich Cultural",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "Maldives",
    description:
      "Welcome to your 5 star home in the heart of the Maldives, where days are long and sun-filled in a setting you'll never forget. With 15 bars and restaurants and a whole host of experiences on offer, at Sun Siyam Iru Fushi, no two days are ever the same.",
    price: 8600,
    type: "Rich Cultural",
  },
  {
    img: Img4,
    title: "Backstage Tour",
    location: "Austria",
    description: "Infamous for its range of innovative tours, Sydney Opera House continues to please punters by releasing a new range for those keen to dig deep into the nuts and bolts of the world beneath our famous sails. The Backstage Tour offers a rare opportunity to step behind closed doors into areas tradionally reserved for perfomers.",
    price: 6700,
    type: "Rich Cultural",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "USA",
    description:
      "Sunny city known for the Hollywood film industry, Venice & Santa Monica beaches & Lakers basketball.",
    price: 9000,
    type: "Rich Cultural",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "USA",
    description:
      "Neon-lit desert city with luxury resorts, theme hotels, 24-hour casinos & big-name entertainment.",
    price: 7200,
    type: "Rich Cultural",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;