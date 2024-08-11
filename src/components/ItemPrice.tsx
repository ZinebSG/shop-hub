import { Badge } from "@chakra-ui/react";

interface Props{
    Price: number;
}

const ItemPrice = ({ Price }: Props) => {
    let color = Price > 75 ? 'green' : Price >  60 ? 'yellow': 'red';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={5}>{Price}$</Badge>
    
  )
}

export default ItemPrice