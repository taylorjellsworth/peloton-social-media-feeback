import React from "react";
import Card from "./Card";
import bikeImg from "../../assets/Bike_RGB.jpg";
import treadImg from "../../assets/TREAD_1.jpg";
import iOSImg from "../../assets/iOS_App.jpeg";
import appleWatchImg from "../../assets/AppleWatch_App.jpeg";
import androidImg from "../../assets/Android_App.png";
import fireTVImg from "../../assets/FireTV_App.png";
import MembersImg from "../../assets/Members.png";

export const products = [
  { product: "Bike", image: bikeImg },
  { product: "Tread", image: treadImg },
  { product: "iOS", image: iOSImg },
  { product: "Apple Watch", image: appleWatchImg },
  { product: "Android", image: androidImg },
  { product: "FireTV", image: fireTVImg },
  { product: "Members", image: MembersImg }
];

function Home() {
  return (
    <div>
      <h1 align="center">Welcome to Peloton Social Media Feedback App!</h1>
      <main style={{ padding: "20px" }} className="container">
        <div className="mx-auto">
          <ul className="row justify-content-left" margin="auto">
            {products.map(({ product, image }, index) => (
              <Card product={product} image={image} key={index} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;
