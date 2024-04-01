"use client";

import React, { useState } from "react";
import { Video } from "lucide-react";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";

const VideoGenerationPage = () => {
  const [video, setVideo] = useState<string>(
    "https://videos.pexels.com/video-files/5342194/5342194-hd_1920_1080_30fps.mp4"
  );

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
          {video ? (
            <video
              controls
              className="w-full aspect-video rounded-lg border bg-black"
              src={video}
            ></video>
          ) : (
            <NoContent label="No video generated." />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGenerationPage;
