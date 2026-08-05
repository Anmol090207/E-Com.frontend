import React from "react";
import PlaceholderImage from "./PlaceholderImage.jsx";
import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero wrap">
      <div>
        <div className="hero-eyebrow">New season goods</div>
        <h1 className="hero-title voice">
          Everyday things,
          <br />
          made to last.
        </h1>
        <p className="hero-copy">
          Placeholder hero copy — swap this for your own brand description
          once the catalog and content are final.
        </p>
        <button className="btn btn-dark">Shop the collection</button>
      </div>
      <div className="hero-image">
        <PlaceholderImage tag="HERO IMAGE" />
      </div>
    </section>
  );
}
