import React from 'react';
import Hero from '../components/Hero';
import MoodBoardSection from '../components/MoodBoardSection';
import ProjectStrip from '../components/ProjectStrip';
import Philosophy from '../components/Philosophy';
import WhyUs from '../components/WhyUs';
import BrandCarousel from '../components/BrandCarousel';
import { moodBoards } from '../data';

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="flex flex-col gap-12 md:gap-0">
        {moodBoards.map((mood) => (
          <MoodBoardSection 
            key={mood.id}
            {...mood}
          />
        ))}
      </div>

      <WhyUs />
      <BrandCarousel />

      <ProjectStrip />
      
      <Philosophy />
    </main>
  );
};

export default Home;
