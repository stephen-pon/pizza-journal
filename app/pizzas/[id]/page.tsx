"use client";

import { usePathname } from "next/navigation";

export default function IndividualPizza() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      Pizza detail for pizza id: {id}
    </div>
  );
}
