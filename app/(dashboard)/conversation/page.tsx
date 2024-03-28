"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import { MessageSquare } from "lucide-react";
import React from "react";

const ConversationPage = () => {
  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("propmt :>> ", prompt);
  };
  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Conversation"
        description="Our most advanced conversation model ever."
        icon={MessageSquare}
      />

      <PromptForm placeholder="Type your prompt..." onSubmit={handleSubmit} />

      <div className="mt-8 space-y-2">Messages Content</div>
    </div>
  );
};

export default ConversationPage;
