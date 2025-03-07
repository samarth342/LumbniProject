import React from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function FlagshipCard() {
  return (
    <Card className="p-4 rounded-2xl border shadow-md w-72 relative">
      <p className="text-gray-700 text-lg">Flagship models</p>
      <div className="absolute bottom-2 right-2 flex space-x-1">
        <Image src="/ai-icon.png" alt="AI" width={24} height={24} className="rounded-full" />
        <Image src="/openai-icon.png" alt="OpenAI" width={24} height={24} className="rounded-full" />
        <Image src="/magic-ui-icon.png" alt="Magic UI" width={24} height={24} className="rounded-full" />
      </div>
    </Card>
  );
}