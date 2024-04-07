# GenieAI

GenieAI is a subscription-based GenAI platform offering advanced AI capabilities for conversations, code generation, image, video, and music generation. Leveraging OpenAI and ReplicateAI APIs, GenieAI provides users with powerful tools to enhance their projects, creativity, and productivity.

## Technologies Used

- **Next.js 14**
- **OpenAI**
- **ReplicateAI**
- **MongoDB**
- **Tailwind CSS**
- **Shadcn UI**
- **Clerk**
- **Stripe**

## Features

- **AI Conversations**: Engage in intelligent conversations with AI models to gather insights, generate ideas, or simply chat.
- **Code Generation**: Automatically generate code snippets or even entire scripts tailored to your specifications.
- **Image Generation**: Create unique and personalized images using AI algorithms.
- **Video Generation**: Generate videos based on specific themes, styles, or content.
- **Music Generation**: Explore AI-generated music compositions to enhance your projects or enjoy for leisure.
- **History**: Access the previously asked prompts and their generated responses.

## Deployed Application

This application is deployed and accessible here.

[genieai-web.vercel.app](https://genieai-web.vercel.app/).

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**: Clone this repository to your local machine using the following command:

   ```
   https://github.com/ujjawal30/genie-ai.git
   ```

2. **Install dependencies**: Navigate to the project directory and install the necessary dependencies using npm or yarn:

   ```
   cd genie-ai
   npm install
   ```

3. **Set up environment variables**: Create a `.env.local` file in the root of your project and add the following environment variables:

   ```
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   MONGODB_URI=
    
   OPENAI_API_KEY=
   REPLICATEAI_API_KEY=
    
   STRIPE_API_KEY=
   STRIPE_WEBHOOK_SECRET_KEY=
   ```

4. **Start the development server**: Once the dependencies are installed and environment variables are set, start the development server using the following command:

   ```
   npm run dev
   ```

5. **Access the application**: Open your web browser and navigate to `http://localhost:3000` to access the GenieAI application.

## Contributors

- [Ujjawal Gupta](https://github.com/ujjawal30)
