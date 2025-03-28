import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Stay ahead of the weather with Travelist! Get accurate, real-time weather updates tailored to your location. Whether you're planning a hike, a beach day, or just your daily commute, our app has you covered.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Discover the world like a local with Travelist's best-in-class tour guide feature! Whether you're exploring bustling cities or hidden gems, our interactive guide offers personalized recommendations, immersive audio tours, and insider tips curated by experts.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "From personalized itineraries to real-time flight updates and local recommendations, Travelist puts the world at your fingertips. Whether you're planning a weekend getaway or a grand adventure, our app helps you find the best deals on flights, hotels, and experiences.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
