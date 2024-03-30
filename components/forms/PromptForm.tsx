"use client";

import { PromptValidation } from "@/lib/validations/prompt";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader } from "../ui/loader";

interface PromptFormProps {
  placeholder: string;
  onSubmit: (prompt: string) => Promise<void>;
}

const PromptForm = ({ placeholder, onSubmit }: PromptFormProps) => {
  const form = useForm<z.infer<typeof PromptValidation>>({
    resolver: zodResolver(PromptValidation),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (
    values: z.infer<typeof PromptValidation>
  ): Promise<void> => {
    await onSubmit(values.prompt);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
      >
        <FormField
          name="prompt"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-10">
              <FormControl className="m-0 p-0">
                <Input
                  className=" border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="col-span-12 lg:col-span-2">
          {isLoading && <Loader size={16} className="mr-2" />}
          {isLoading ? "Generating" : "Generate"}
        </Button>
      </form>
    </Form>
  );
};

export default PromptForm;
