import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import RegionContext from "../context/regionsContext";

const FilterRegions = () => {
  const { region, setRegion } = useContext(RegionContext);
  const regions = [
    { value: "", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  return (
    <Menu>
      <MenuButton
        _hover={{
          borderColor: "transparent",
          backgroundColor: "rgba(119,136,153, .2)",
        }}
        as={Button}
        rightIcon={<AiFillCaretDown />}
      >
        Filter by Region:{" "}
        {region === ""
          ? ""
          : region.charAt(0).toUpperCase() + region.substring(1)}
      </MenuButton>

      <MenuList>
        {regions.map((region) => (
          <MenuItem
            _hover={{ borderColor: "transparent" }}
            onClick={() => setRegion(region.value)}
            key={region.value}
            value={region.value}
          >
            {region.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterRegions;
