import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CharacterProfile } from './components/CharacterProfile';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Abilities } from './components/Abilities';
import { QuestLog } from './components/QuestLog';
import { TrainingArc } from './components/TrainingArc';
import { SystemStatus } from './components/SystemStatus';
import { ContactSection } from './components/ContactSection';
import { FinalMangaPage } from './components/FinalMangaPage';
import { MangaBackgroundCanvas } from './components/MangaBackgroundCanvas';
import { MangaCursor } from './components/MangaCursor';
import { MangaSFXProvider } from './context/MangaSFXContext';

export default function App() {
  return (
    <MangaSFXProvider>
      <div className="min-h-screen bg-[#0c0d10] text-[#eaeaea] relative selection:bg-[#ff2a55] selection:text-white font-sans">
        {/* Custom Manga Cursor (G-pen nib on interactive elements, speech bubble on text/chat) */}
        <MangaCursor />

        {/* Background Interactive Particle and Neural Canvas */}
        <MangaBackgroundCanvas />

        {/* Primary Top Bar (3-zone contract) */}
        <Navbar />

        {/* Storytelling Arc Container */}
        <main className="relative z-10">
          {/* PROLOGUE - Hero */}
          <Hero />

          {/* CHAPTER 01 - CHARACTER PROFILE & Narration Summary */}
          <CharacterProfile />

          {/* CHAPTER 02 - JOURNEY Timeline */}
          <JourneyTimeline />

          {/* CHAPTER 03 - ABILITIES & Combat Tech */}
          <Abilities />

          {/* CHAPTER 04 - QUEST LOG & Major Projects */}
          <QuestLog />

          {/* CHAPTER 05 - TRAINING ARC (Internship / Applied Engineering) */}
          <TrainingArc />

          {/* SYSTEM STATUS (Anime RPG HUD) */}
          <SystemStatus />

          {/* FINAL CHAPTER - Start A New Quest (Contact) */}
          <ContactSection />

          {/* FINAL MANGA PAGE - TO BE CONTINUED... */}
          <FinalMangaPage />
        </main>
      </div>
    </MangaSFXProvider>
  );
}
