"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-background font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Image Generation.",
                "Code Generation.",
                "Video Generation.",
                "Music Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create Content using AI 10x faster. Design and customize your content
        with ease.
      </div>
      <div className="pt-4 md:pt-6">
        <Link href={isSignedIn ? "dashboard" : "sign-up"}>
          <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating for free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;
