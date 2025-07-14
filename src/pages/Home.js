import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import profilePic from "../assets/profile-placeholder.jpg";
import "./Home.css";

export default function Home() {
  const highlights = [
    { icon: "☕", text: "Java Developer in Progress" },
    { icon: "🚀", text: "Skilled in React & Web Development" },
    { icon: "📜", text: "Building Dynamic Web Applications" },
    { icon: "🌏", text: "Preparing for Placement Opportunities" },
  ];

  return (
    <div className="home-container">
      <Hero
        name="Ganesh Aher"
        tagline="A passionate Computer Engineering student exploring Java and web technologies."
        profileImage={profilePic}
      />
      <Highlights items={highlights} />
    </div>
  );
}
