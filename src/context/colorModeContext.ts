import React from "react";

interface ColorModeType{
    darkMode: boolean;
    changeDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModeContext = React.createContext<ColorModeType>({} as ColorModeType);

export default ModeContext;