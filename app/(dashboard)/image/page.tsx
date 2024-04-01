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

const ImageGenerationPage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([
    "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
    "https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-download-instagram-logo-icon-png-transparent-image-11.png",
  ]);

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
          {images.length === 0 && <NoContent label="No images generated." />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
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
    </div>
  );
};

export default ImageGenerationPage;
