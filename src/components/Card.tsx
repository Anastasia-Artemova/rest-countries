import { NavLink } from "react-router-dom";
import { Card, VStack, Heading, Image, Text, CardBody } from "@chakra-ui/react";

interface Prop {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
}

const CountryCard = ({ name, capital, population, region, flags }: Prop) => {
  return (
    <NavLink to={`/${name}`}>
      <Card
        width={{ base: "300px", sm: "100%", md: "100%" }}
        cursor="pointer"
        height="300px"
      >
        <Image borderTopRadius="5px" src={flags.png} height="50%" />
        <CardBody>
          <VStack alignItems="flex-start">
            <Heading fontSize="16px">{name}</Heading>
            <Text fontSize="14px">
              Population: {population} <br />
              Region: {region} <br />
              Capital: {capital}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </NavLink>
  );
};

export default CountryCard;
