"use client";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";

const smapleMessages = [
  {
    role: "User",
    content: "This is user input message 1",
  },
  {
    role: "AI",
    content: "This is Ai output message 1",
  },
];

const ConversationPage = () => {
  const [messages, setMessages] = useState<typeof smapleMessages>([]);

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

      <div className="mt-8 space-y-2">
        <div className="space-y-4 mt-4">
          {messages.length === 0 && (
            <NoContent label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "User"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
