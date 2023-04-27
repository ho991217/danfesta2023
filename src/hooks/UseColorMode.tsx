import { useState } from "react";

type ColorMode = "light" | "dark";

export const useColorMode = (initialMode: ColorMode) => {
   const [mode, setMode] = useState<ColorMode>(initialMode);

   const toggleMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
   };

   return { mode, toggleMode };
};
