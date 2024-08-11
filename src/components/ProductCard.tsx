import { Product } from '../hooks/useProducts'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import CategoryIconList from './CategoryIconList'
import ItemPrice from './ItemPrice'

export interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image  
        src={product.image} 
        alt={product.title} 
        boxSize="200px" 
        objectFit="cover" 
        w="100%" 
        />
        <CardBody>
            <Heading fontSize='2xl'>{product.title}</Heading>
            <HStack justifyContent='space-between'>
                <CategoryIconList product={product} />
                <ItemPrice Price={product.price}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default ProductCard