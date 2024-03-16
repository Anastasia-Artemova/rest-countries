import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import SearcContext from "../context/searchContext";

const SearchBar = () => {
  const { setSearch } = useContext(SearcContext);
  return (
    <Box margin="40px">
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          width={{ base: "200px", sm: "300px", md: "400px" }}
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderColor: "transparent",
          }}
          placeholder="Search for a country.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
