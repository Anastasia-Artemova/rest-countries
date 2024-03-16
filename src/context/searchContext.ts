import React from "react";

interface SearchType{
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearcContext = React.createContext<SearchType>({} as SearchType);

export default SearcContext;