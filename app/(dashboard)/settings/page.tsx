import React from "react";
import { Settings } from "lucide-react";

import { checkSubscription } from "@/lib/actions";
import Header from "@/components/shared/Header";
import SubscriptionButton from "@/components/forms/SubscriptionButton";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="px-4 lg:px-8 ">
      <Header
        title="Settings"
        description="Manage account settings."
        icon={Settings}
      />
      <div className="space-y-4">
        <div className="text-muted-foreground">
          {isPro
            ? "You are currently on Pro plan. Enjoy the unlimited generations."
            : "You are currently on a Free Tier. Upgrade to get more features and storage."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
