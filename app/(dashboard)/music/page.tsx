"use client";

import React, { useState } from "react";
import { Music } from "lucide-react";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const sampleMusicResponse = [
  {
    prompt: "What is the name of this song?",
    music:
      "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
  },
];

const MusicGenerationPage = () => {
  const { user } = useUser();

  const [musicResponse, setMusicResponse] =
    useState<typeof sampleMusicResponse>(sampleMusicResponse);

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
          {musicResponse.length === 0 && (
            <NoContent label="No music generated." />
          )}
          <div className="flex flex-col-reverse gap-y-8">
            {musicResponse.map((response) => (
              <div
                key={response.prompt}
                className="flex flex-col w-full rounded-lg border"
              >
                <div className="flex items-start bg-muted gap-x-8 p-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={user?.imageUrl} className="rounded-xl" />
                  </Avatar>
                  <p className="text-sm">{response.prompt}</p>
                </div>
                <div className="flex items-start bg-white gap-x-8 p-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="/logo.png" className="rounded-xl" />
                  </Avatar>
                  <audio
                    controls
                    className="w-full"
                    src={response.music}
                  ></audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicGenerationPage;
