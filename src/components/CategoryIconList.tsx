import { GiClothes, GiPearlNecklace } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { FcElectronics } from "react-icons/fc";

import { HStack, Icon } from "@chakra-ui/react";
import { Props } from "./ProductCard";
import { IconType } from "react-icons";

const CategoryIconList: React.FC<Props> = ({ product }) => {
  const iconMap: { [key: string]: IconType } = {
    "women's clothing": GrRestroomWomen,
    electronics: FcElectronics,
    jewelery: GiPearlNecklace,
    "men's clothing": GiClothes,
  };

  return  <>
    <HStack marginY={"10px"}>
      <Icon as={iconMap[product.category]} color="gray.500" />;
    </HStack>
  </>;
};

export default CategoryIconList;
