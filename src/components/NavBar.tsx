import { HStack, Image, } from "@chakra-ui/react";
import logo from '../assets/shop.webp'
import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
    return(
        <HStack justifyContent='space-between' padding="10px">
            <Image src={logo} boxSize='50px'/>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar