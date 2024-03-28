"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import { Music } from "lucide-react";
import React from "react";

const MusicGenerationPage = () => {
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("music propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Music Generation"
        description="Our most advanced conversation model ever."
        icon={Music}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">Music Content</div>
    </div>
  );
};

export default MusicGenerationPage;
