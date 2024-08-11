import { Product } from '../hooks/useProducts'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import CategoryIconList from './CategoryIconList'
import ItemPrice from './ItemPrice'

export interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={product.image}/>
        <CardBody>
            <Heading fontSize='2xl'>{product.title}</Heading>
            <HStack justifyContent='space-between'>
                <CategoryIconList product={product} />
                <ItemPrice score={product.price}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default ProductCard