"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { MessageSquare } from "lucide-react";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const smapleMessages = [
  {
    prompt: "This is user input message 1",
    response:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel possimus similique, eos, non, iusto aspernatur quo reiciendis deserunt veritatis rerum explicabo accusantium. Doloremque culpa ipsa aut! Labore quia eius atque iste, perspiciatis aut, quasi quo rerum dolor reiciendis non quas blanditiis, quibusdam consequuntur fugiat nulla officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel possimus similique, eos, non, iusto aspernatur quo reiciendis deserunt veritatis rerum explicabo accusantium. Doloremque culpa ipsa aut! Labore quia eius atque iste, perspiciatis aut, quasi quo rerum dolor reiciendis non quas blanditiis, quibusdam consequuntur fugiat nulla officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel possimus similique, eos, non, iusto aspernatur quo reiciendis deserunt veritatis rerum explicabo accusantium. Doloremque culpa ipsa aut! Labore quia eius atque iste, perspiciatis aut, quasi quo rerum dolor reiciendis non quas blanditiis, quibusdam consequuntur fugiat nulla officia!",
  },
  {
    prompt: "This is user input message 2",
    response:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel possimus similique, eos, non, iusto aspernatur quo reiciendis deserunt veritatis rerum explicabo accusantium. Doloremque culpa ipsa aut! Labore quia eius atque iste, perspiciatis aut, quasi quo rerum dolor reiciendis non quas blanditiis, quibusdam consequuntur fugiat nulla officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel possimus similique, eos, non, iusto aspernatur quo reiciendis deserunt veritatis rerum explicabo accusantium. Doloremque culpa ipsa aut! Labore quia eius atque iste, perspiciatis aut, quasi quo rerum dolor reiciendis non quas blanditiis, quibusdam consequuntur fugiat nulla officia!",
  },
];

const ConversationPage = () => {
  const { user } = useUser();

  const [messages, setMessages] =
    useState<typeof smapleMessages>(smapleMessages);

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
          <div className="flex flex-col-reverse gap-y-8">
            {messages.map((message) => (
              <div
                key={message.prompt}
                className="flex flex-col w-full rounded-lg border"
              >
                <div className="flex items-start bg-muted gap-x-8 p-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src={user?.imageUrl} className="rounded-xl" />
                  </Avatar>
                  <p className="text-sm">{message.prompt}</p>
                </div>
                <div className="flex items-start bg-white gap-x-8 p-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="/logo.png" className="rounded-xl" />
                  </Avatar>
                  <p className="text-sm">{message.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
