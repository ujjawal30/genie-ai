"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import { Code } from "lucide-react";
import React from "react";

const CodeGenerationPage = () => {
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("code propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Code Generation"
        description="Our most advanced conversation model ever."
        icon={Code}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">Code Content</div>
    </div>
  );
};

export default CodeGenerationPage;
