"use client";

import React, { useState } from "react";
import { Music } from "lucide-react";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";

const MusicGenerationPage = () => {
  const [music, setMusic] = useState<string>(
    "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
  );
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("music propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Music Generation"
        description="Our most advanced music generation model ever."
        icon={Music}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">
        <div className="space-y-4 mt-4">
          {music ? (
            <audio controls className="w-full" src={music}></audio>
          ) : (
            <NoContent label="No music generated." />
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicGenerationPage;
