import React from "react";
import Image from "next/image";
import foodPhoto from "../../../assets/images/hero-food.jpg";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen text-[#567B96]"
        style={{ backgroundImage: `url(${foodPhoto.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Food Hub</h1>
            <p className="mb-5">
              Explore a world of flavors with our easy-to-follow recipes on this
              food recipe website. Perfect for all skill levels, our dishes
              promise culinary delight in every bite. Join us and savor the joy
              of cooking today!
            </p>
            <button className="btn  ">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
