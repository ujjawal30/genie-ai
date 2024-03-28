import { z } from "zod";

export const PromptValidation = z.object({
  prompt: z.string().min(3, {
    message: "Prompt is required!!!",
  }),
});
