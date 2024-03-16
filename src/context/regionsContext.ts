import React from "react";

interface RegionsContextType{
    region: string;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const RegionContext = React.createContext<RegionsContextType>({} as RegionsContextType);

export default RegionContext;