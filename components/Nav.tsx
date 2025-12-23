"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={"fixed top-0 left-0 right-0 px-4 py-2 flex items-center h-14 z-50 bg-background/50 backdrop-blur-md border-b"}>
      {/* Soul Yatri Logo on the Left */}
      <div className="flex items-center gap-2">
        <img 
            src="/soul-yatri-logo.png" 
            alt="Soul Yatri Logo" 
            className="h-8 w-8 object-contain" 
        />
        <span className="font-bold text-lg">Soul Yatri</span>
      </div>

      {/* Right side controls (Theme Toggle) */}
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5 rounded-full"}
        >
          <span>
            {theme === "dark" ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{theme === 'dark' ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
