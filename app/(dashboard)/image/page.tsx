"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import { Image } from "lucide-react";
import React from "react";

const ImageGenerationPage = () => {
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("image propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Image Generation"
        description="Our most advanced conversation model ever."
        icon={Image}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">Image Content</div>
    </div>
  );
};

export default ImageGenerationPage;
