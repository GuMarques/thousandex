import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const systemTheme = useColorScheme();

  const useSystemTheme = () => {
    switch (systemTheme) {
      case "dark":
        setTheme("dark");
        return;
      case "light":
        setTheme("light");
        return;
      default:
        setTheme("light");
        return;
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") setCurrentTheme(darkTheme);
    else setCurrentTheme(lightTheme);
  }, [theme]);

  return { changeTheme, useSystemTheme, theme, currentTheme };
};

export default useTheme;

const lightTheme = {
  COLORS: {
    primary: "#DC0A2D",
    secondary: "#28AAFD",

    gray: {
      light: "#E0E0E0",
      medium: "#666666",
      dark: "#1D1D1D",
    },

    white: "#FFFFFF",
    lightWhite: "#F1F1F1",

    types: {
      normal: "#AAA67F",
      fighting: "#C12239",
      flying: "#A891EC",
      ground: "#DEC16B",
      poison: "#A43E9E",
      rock: "#B69E31",
      bug: "#A7B723",
      ghost: "#70559B",
      steel: "#B7B9D0",
      fire: "#F57D31",
      water: "#6493EB",
      grass: "#74CB48",
      electric: "#F9CF30",
      psychic: "#FB5584",
      ice: "#9AD6DF",
      dragon: "#7037FF",
      dark: "#75574C",
      fairy: "#E69EAC",
    },
  },

  FONT: {
    regular: "Regular",
    medium: "Medium",
    bold: "Bold",
  },

  SIZE: {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  },

  SHADOW: {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  },
};

const darkTheme = {
  COLORS: {
    primary: "#DC0A2D",
    secondary: "#28AAFD",

    gray: {
      light: "#E0E0E0",
      medium: "#666666",
      dark: "#1D1D1D",
    },

    white: "#FFFFFF",
    lightWhite: "#F1F1F1",

    types: {
      normal: "#AAA67F",
      fighting: "#C12239",
      flying: "#A891EC",
      ground: "#DEC16B",
      poison: "#A43E9E",
      rock: "#B69E31",
      bug: "#A7B723",
      ghost: "#70559B",
      steel: "#B7B9D0",
      fire: "#F57D31",
      water: "#6493EB",
      grass: "#74CB48",
      electric: "#F9CF30",
      psychic: "#FB5584",
      ice: "#9AD6DF",
      dragon: "#7037FF",
      dark: "#75574C",
      fairy: "#E69EAC",
    },
  },

  FONT: {
    regular: "Regular",
    medium: "Medium",
    bold: "Bold",
  },

  SIZE: {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  },

  SHADOW: {
    small: {
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  },
};
