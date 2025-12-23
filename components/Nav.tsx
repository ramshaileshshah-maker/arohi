"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import { useTheme } from "next-themes";

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={"fixed top-0 left-0 right-0 px-4 py-2 flex items-center h-14 z-50"}>
      {/* Add Soul Yatri Logo on the Left */}
      <div className="flex items-center gap-2">
        <img src="/soul-yatri-logo.png" alt="Soul Yatri Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">Soul Yatri</span>
      </div>

      <div className={"ml-auto flex items-center gap-1"}>;
