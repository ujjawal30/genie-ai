"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

const testimonialDummyData = [
  {
    name: "John Doe",
    title: "Software Engineer",
    company: "ABC Corp.",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui nec lorem tempus commodo.",
    avatar: "JD",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    company: "ABC Corp.",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui nec lorem tempus commodo.",
    avatar: "JD",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    company: "ABC Corp.",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui nec lorem tempus commodo.",
    avatar: "JD",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    company: "ABC Corp.",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dui nec lorem tempus commodo.",
    avatar: "JD",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-background font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonialDummyData.map((data, index) => (
          <Card
            key={data.name + index}
            className="bg-gray-800 border-none text-background"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback className="bg-gray-950 text-lg font-normal">
                    {data.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">{data.name}</p>
                  <p className="text-sm text-zinc-400">
                    {data.title}, {data.company}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                <p>{data.review}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
