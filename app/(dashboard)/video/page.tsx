"use client";

import React, { useState } from "react";
import { Video } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const sampleVideoResponse = [
  {
    prompt: "Present a new video?",
    video:
      "https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4",
  },
];

const VideoGenerationPage = () => {
  const { user } = useUser();

  const [videoResponse, setVideoResponse] =
    useState<typeof sampleVideoResponse>(sampleVideoResponse);

  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("video propmt :>> ", prompt);
  };

  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Video Generation"
        description="Our most advanced video generation model ever."
        icon={Video}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">
        <div className="space-y-4 mt-4">
          {videoResponse.length === 0 && (
            <NoContent label="No videos generated." />
          )}
          <div className="flex flex-col-reverse gap-y-8">
            {videoResponse.map((response) => (
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
                <div className="flex items-start bg-white gap-x-8 p-4 relative">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="/logo.png" className="rounded-xl" />
                  </Avatar>
                  <div className="w-full">
                    <video
                      controls
                      className="xl:w-[80%] aspect-video rounded-lg border bg-black"
                      src={response.video}
                    ></video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGenerationPage;
