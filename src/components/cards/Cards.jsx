import React from 'react';
import CardItem from '../cardItem/CardItem';
import './cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/img-9.jpg" text="Explore this amazing place" label="Adventure" path="/services" />
            <CardItem src="images/img-10.jpg" text="Fernando de noronha " label="Adventure" path="/services" />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/img-11.jpg" text="Beautiful Beach in Natal" label="Adventure" path="/services" />
            <CardItem src="images/img-12.jpg" text="Ruins from Camboya" label="Adventure" path="/services" />
            <CardItem src="images/img-8.jpg" text="Ride camels through the desert" label="Adventure" path="/services" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
