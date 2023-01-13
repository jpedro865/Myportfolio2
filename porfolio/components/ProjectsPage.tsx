import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CardProject from "./CardProject";

export default function ProjectsPage() {
  return (
    <>
      <Flex id={'projects'} bg={'#DFF6FF'} p={[2, 5, 10]}>
      <Heading ml={10} fontFamily='Jura' textColor={'#06283D'}>{'02 -'}</Heading><Heading fontFamily='Jura' textColor={'#1363DF'} ml={'15px'}>{'Projets'}</Heading>
      </Flex>
      <Flex bg={'#DFF6FF'} justify={'space-around'} align={'center'} p={[2, 5, 10]}>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={'40px'} >
          <CardProject title={'Ev\'n Car'} urlPhoto={'Capture-Mywebsite.png'} 
            description={
              'Ev\'n Car est un site de vente de voiture fait dans le but d\'un projet scolaire. Ce site a été fait en nextJs/reactJs et on a utilisé Chakra ui comme framework. Le site est connecté a une api rest qui gere les requêtes à la base de données.'
            }
          />
          <CardProject title={'Alchemie'} urlPhoto={'Capture-Alchemie.png'} 
            description={
              'Alchemie est un jeu de bureau dans lequel on doit ajouter des élements pour fabriquer d\'autres élements comme un alchimiste. Alchemie est un jeux fait 100% en java.'
            }
          />
          <CardProject title={'CodeCamp'} urlPhoto={'Capture-codeCamp.png'} 
            description={
              'CodeCamp est un défi lancé par une entreprise, le défi consistait a créer une plateforme d\'échange, avec une messagerie instantanée et un agenda, entre groupe lors d\'un séminaire .'
            }
          />

        </SimpleGrid>
      </Flex>
    </>
  )
}
