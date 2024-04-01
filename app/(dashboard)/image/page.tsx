"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Download, ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import PromptForm from "@/components/forms/PromptForm";
import Header from "@/components/shared/Header";
import NoContent from "@/components/shared/NoContent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const sampleImagesResponse = [
  {
    prompt: "This is user input prompt 1",
    images: [
      "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
      "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
      "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
      "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
      "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
    ],
  },
];

const ImageGenerationPage = () => {
  const router = useRouter();
  const { user } = useUser();

  const [imagesResponse, setImagesResponse] =
    useState<typeof sampleImagesResponse>(sampleImagesResponse);

  const handleSubmit = async (
    prompt: string,
    amount?: string,
    resolution?: string
  ): Promise<void> => {
    console.log("image propmt :>> ", prompt, amount, resolution);
  };

  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Image Generation"
        description="Our most advanced image generation model ever."
        icon={ImageIcon}
      />

      <PromptForm
        placeholder="Type your prompt..."
        from="Image"
        onSubmit={handleSubmit}
      />

      <div className="mt-8 space-y-2">
        <div className="space-y-4 mt-4">
          {imagesResponse.length === 0 && (
            <NoContent label="No images generated." />
          )}
          <div className="flex flex-col-reverse gap-y-8">
            {imagesResponse.map((response) => (
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
                <div className="flex items-start bg-white gap-x-8 p-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarImage src="/logo.png" className="rounded-xl" />
                  </Avatar>
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {response.images.map((image, index) => (
                      <Card key={image} className="rounded-lg overflow-hidden">
                        <div className="relative aspect-square">
                          <Image src={image} alt={`Image ${index + 1}`} fill />
                        </div>
                        <CardFooter className="p2">
                          <Button
                            onClick={() => window.open(image)}
                            variant={"secondary"}
                            className="w-full"
                          >
                            <Download className="mr-2" /> Download
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
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

export default ImageGenerationPage;
