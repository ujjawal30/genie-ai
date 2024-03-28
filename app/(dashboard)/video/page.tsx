"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import { Video } from "lucide-react";
import React from "react";

const VideoGenerationPage = () => {
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("video propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Video Generation"
        description="Our most advanced conversation model ever."
        icon={Video}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">Video Content</div>
    </div>
  );
};

export default VideoGenerationPage;
