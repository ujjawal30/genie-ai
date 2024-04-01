"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Code } from "lucide-react";
import ReactMarkdown from "react-markdown";

import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const smapleMessages = [
  {
    role: "User",
    content: "This is user input prompt 1",
  },
  {
    role: "AI",
    content: "This is Ai output code 1",
  },
];

const CodeGenerationPage = () => {
  const [messages, setMessages] =
    useState<typeof smapleMessages>(smapleMessages);
  const { user } = useUser();

  const handleSubmit = async (prompt: string): Promise<void> => {
    console.log("code propmt :>> ", prompt);
  };

  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Code Generation"
        description="Our most advanced code generation model ever."
        icon={Code}
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
                <Avatar className="h-12 w-12 rounded-lg">
                  <AvatarImage
                    src={message.role === "User" ? user?.imageUrl : "/logo.png"}
                    className="rounded-xl"
                  />
                </Avatar>
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationPage;
