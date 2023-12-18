"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button className="transition-all p-8" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
