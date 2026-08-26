import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { IconContext } from "react-icons"
import { FaSun, FaMoon } from 'react-icons/fa'

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-16 w-16 rounded p-1 sm:ml-4"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    > 
      <IconContext.Provider value={{ className: "theme-switch" }}> 
        <div className="h-6 w-6">
          {mounted && (currentTheme === 'dark' ? <FaSun /> : <FaMoon />)}
        </div>
      </IconContext.Provider>
        
    </button>
  )
}

export default Button;
