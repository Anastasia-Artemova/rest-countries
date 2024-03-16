import { HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import FilterRegions from "./FilterRegions";

const SearchPanel = () => {
  return (
    <HStack>
      <SearchBar />
      <FilterRegions />
    </HStack>
  );
};

export default SearchPanel;
