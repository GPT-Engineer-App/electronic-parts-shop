import { Box, Container, Flex, Grid, GridItem, Heading, Image, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Multimeter",
    description: "Digital multimeter for measuring voltage, current, and resistance.",
    price: "25.99",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbXVsdGltZXRlcnxlbnwwfHx8fDE3MTQ0ODc1NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Soldering Iron",
    description: "Adjustable temperature soldering iron, perfect for electronics projects.",
    price: "15.75",
    image: "https://images.unsplash.com/photo-1593616307659-07f02b400e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xkZXJpbmclMjBpcm9ufGVufDB8fHx8MTcxNDQ4NzU1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Wire Stripper",
    description: "Durable wire stripper for electrical and electronic repair.",
    price: "9.45",
    image: "https://images.unsplash.com/photo-1507753965613-75d62fcd9b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aXJlJTIwc3RyaXBwZXJ8ZW58MHx8fHwxNzE0NDg3NTUyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Circuit Board",
    description: "Blank circuit board for building and testing circuit designs.",
    price: "3.20",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fHwxNzE0NDg3NTUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="xl">
          Electronics Parts & Tools
        </Heading>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id} w="100%" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Image src={product.image} alt={product.name} borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text fontSize="sm" mb={4}>
              {product.description}
            </Text>
            <Text fontWeight="bold" mb={4}>
              ${product.price}
            </Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline" w="full">
              Add to Cart
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
