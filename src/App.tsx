import React, { useState } from "react";
import UpperBar from "./components/UpperBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import RegionContext from "./context/regionsContext";
import ModeContext from "./context/colorModeContext";
import SearcContext from "./context/searchContext";

const App = () => {
  const [regionsOrder, setRegionsOrder] = useState("");

  const [darkMode, changeDarkMode] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        marginBottom: "30px",
        minHeight: "100vh",
      }}
    >
      <ModeContext.Provider value={{ darkMode, changeDarkMode }}>
        <SearcContext.Provider value={{ search, setSearch }}>
          <UpperBar />
          <RegionContext.Provider
            value={{ region: regionsOrder, setRegion: setRegionsOrder }}
          >
            <Box>
              <Outlet />
            </Box>
          </RegionContext.Provider>
        </SearcContext.Provider>
      </ModeContext.Provider>
    </div>
  );
};

export default App;
