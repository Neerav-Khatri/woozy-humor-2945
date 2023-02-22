import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

// import { useAppSelector } from "../Redux/store";
// import { Product } from "../utils/types";
const { useThrottle } = require("use-throttle");

const NavSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
//   const products = useAppSelector((store) => store.AppReducer.data);

  const throttledText = useThrottle(query, 400);

  useEffect(() => {
    //run some logic
    if (throttledText === "") {
      setSuggestions([]);
    } else {
      console.log(throttledText);
      let newSuggestions = products.filter((item) => {
        return item.title
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      console.log(newSuggestions);
      setSuggestions(newSuggestions);
      setShowDropdown.on();
    }
  }, [throttledText]);

  const clickToOffDropdown = () => {
    setShowDropdown.off();
    setQuery("");
  };

  return (
    <Box w="100%" position="relative">
      <InputGroup>
        
        <Input
        border={"1px solid purple"}
        background="white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <InputRightElement color={"white"} bgColor={"purple.400"} children={<BsSearch color="gray.300" />} />
      </InputGroup>
      {suggestions.length > 0 && (
        <Box
          border="1px solid black"
          borderRadius="5px"
          position="absolute"
          top="50px"
          zIndex="10"
          bgColor="white"
          overflow="scroll"
          w="100%"
          maxH="400px"
        >
          {suggestions.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <Text
                  fontSize="xl"
                  cursor="pointer"
                  onClick={clickToOffDropdown}
                >
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default NavSearch;
