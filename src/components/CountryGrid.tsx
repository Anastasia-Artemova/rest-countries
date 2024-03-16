import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import CountryCard from "./Card";
import RegionContext from "../context/regionsContext";
import SearcContext from "../context/searchContext";
import { motion } from "framer-motion";
import data from "../data.json";

const CountryGrid = () => {
  const { region } = useContext(RegionContext);
  const { search } = useContext(SearcContext);

  const filteredCountries = data.filter((country) => {
    const regionMatch =
      region === "" || country.region.toLowerCase() === region.toLowerCase();
    const searchMatch =
      search === "" ||
      country.name.toLowerCase().includes(search.toLowerCase());
    return regionMatch && searchMatch;
  });

  return (
    <SimpleGrid
      spacing={10}
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      marginLeft="30px"
      marginRight="30px"
    >
      {filteredCountries.map((item) => (
        <motion.div
          key={`${item.name}`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 90,
              restDelta: 0.001,
            },
          }}
        >
          <CountryCard
            name={item.name}
            capital={item.capital || ""}
            region={item.region}
            population={item.population}
            flags={item.flags}
          />
        </motion.div>
      ))}
    </SimpleGrid>
  );
};

export default CountryGrid;
