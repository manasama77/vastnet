"use client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import IconVastNet from "../public/icon.png";

export default function VastNetLoadingLogo() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative mb-4 w-28 h-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={IconVastNet} alt="Logo VastNet" width={63} height={63} />
        </div>
        <Loader2 className="opacity-75 w-28 h-28 animate-spin text-vastnet-green" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-vastnet-navy">VastNet</h2>
    </div>
  );
}
