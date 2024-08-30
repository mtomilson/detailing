import React from "react";
import car from "../assets/image.png";

export default function Hero() {
  return (
    <section id="hero" className="w-full mt-0">
      <header>
            <div class="container header-container">
                <div class="header-left">
                    <h2>IV Detailing</h2>
                    <p>THIS IS SOME RANDOM TEXT</p>
                </div>
                <div class="header-right">
                   <img src={car} alt="" className="w-50"/>
                </div>
            </div>
            <div class="sq-box2"></div>
        </header>
    </section>
  );
}
