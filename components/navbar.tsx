"use client";

import { useSession } from "next-auth/react";
import SignOut from "./sign-out";

export default function Navbar() {
  const session = useSession();

  return (
    <div className="flex justify-between bg-gray-50 w-full absolute">
      <span className="p-8">Pizza Journal</span>
      {session.status === "authenticated" && (
        // <span className="p-8 cursor-pointer">Sign out</span>
        <SignOut />
      )}
    </div>
  );
}
