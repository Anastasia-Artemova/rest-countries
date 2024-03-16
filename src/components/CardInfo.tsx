import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import ModeContext from "../context/colorModeContext";
import data from "../data.json";

const CardInfo = () => {
  const { darkMode } = useContext(ModeContext);

  const { name } = useParams();
  const selectedCountry = data.find((country) => country.name === name);

  const countryCode: { [key: string]: string } = {};
  data.forEach((country) => (countryCode[country.alpha3Code] = country.name));

  return (
    <Box
      style={{
        margin: "40px",
      }}
    >
      <NavLink to={"/"}>
        <Button _hover={{ borderColor: "transparent" }} marginBottom="40px">
          <HiArrowLeft style={{ marginRight: "5px" }} /> Back
        </Button>
      </NavLink>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={20}>
        <Image width="450px" src={selectedCountry?.flags.svg} />
        <VStack fontSize="14px" alignItems="flex-start">
          <Heading fontSize="24px">{selectedCountry?.name}</Heading>
          <Flex flexDirection="row" columnGap={20}>
            <Text lineHeight="25px">
              <span style={{ fontWeight: "bold" }}>Native Name:</span>{" "}
              {selectedCountry?.nativeName}
              <br />
              <span style={{ fontWeight: "bold" }}>Population:</span>{" "}
              {selectedCountry?.population}
              <br />
              <span style={{ fontWeight: "bold" }}>Region:</span>{" "}
              {selectedCountry?.region}
              <br />
              <span style={{ fontWeight: "bold" }}>Sub Region:</span>{" "}
              {selectedCountry?.subregion}
              <br />
              <span style={{ fontWeight: "bold" }}>Capital:</span>{" "}
              {selectedCountry?.capital}
            </Text>
            <Text>
              <span style={{ fontWeight: "bold" }}>Top Level Domain:</span>{" "}
              {selectedCountry?.topLevelDomain}
              <br />
              <span style={{ fontWeight: "bold" }}>Currencies:</span>{" "}
              {selectedCountry?.currencies
                ? selectedCountry?.currencies
                    .map((currency) => currency.name)
                    .join(", ")
                : "No currencies available"}
              <br />
              <span style={{ fontWeight: "bold" }}>Languages:</span>{" "}
              {selectedCountry?.languages
                .map((language) => language.name)
                .join(", ")}
            </Text>
          </Flex>
          {selectedCountry?.borders ? (
            <HStack>
              <Text>Border Countries: </Text>
              <Wrap>
                {selectedCountry.borders.map((code) => (
                  <WrapItem key={code}>
                    <Box
                      style={
                        darkMode
                          ? {
                              boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 8px 0px",
                              borderRadius: "4px",
                              padding: "3px",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                            }
                          : {
                              boxShadow:
                                "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                              borderRadius: "4px",
                              padding: "3px",
                              paddingLeft: "8px",
                              paddingRight: "8px",
                            }
                      }
                    >
                      {countryCode[code]}
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </HStack>
          ) : (
            <Box></Box>
          )}
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default CardInfo;
