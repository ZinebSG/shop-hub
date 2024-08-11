import { Badge } from "@chakra-ui/react";

interface Props{
    Price: number;
}

const ItemPrice = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score >  60 ? 'yellow': 'red';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={5}>{score}$</Badge>
    
  )
}

export default ItemPrice