import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3740_.jpg"
        alt="Banner image"
      />
      <div className="home_row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS"
          price={102.94}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ELb9vTikS._AC_UL480_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights"
          price={21.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="4"
          title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server"
          price={53.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="5"
          title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light"
          price={41.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting"
          price={226.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
