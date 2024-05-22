import React from 'react';
import './MainSection.css';
import Button from './Button';
import cateringImage from '../assets/catering.jpg'; // Importera en passande bild

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="text-content">
        <h1>Mat och Musik för Alla Tillfällen</h1>
        <p>Vi erbjuder catering för festivaler, marknader och privata fester. Vi arrangerar också fester med musik och mat. Dessutom erbjuder vi butiksservice inklusive varuplock, reklam och städning.</p>
        <Button text="Kontakta oss!" />
      </div>
      <div className="image-content">
        <img src={cateringImage} alt="Catering" />
      </div>
    </main>
  );
};

export default MainSection;
