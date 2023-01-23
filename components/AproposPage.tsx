import { Flex, Heading, Text } from "@chakra-ui/react";

export default function AproposPage() {

  return (
    <>
      <Flex id={'apropos'} bg={'#DFF6FF'} justify={'space-around'} align={'center'} p={[2, 5, 10]} scrollBehavior={'smooth'}>
        <Flex w={'100%'} bg={'white'} rounded={'2xl'} boxShadow={'2xl'} p={[2, 5, 10]} direction={'column'}>
          <Flex>
            <Heading fontFamily='Jura' textColor={'#06283D'}>{'01 -'}</Heading><Heading fontFamily='Jura' textColor={'#1363DF'} ml={'15px'}>{'A propos de moi'}</Heading>
          </Flex>
          <Flex w={'100%'} h={'100%'} pt={5}>
            <Flex>
              <Text fontSize={'17px'} fontFamily='Cutive' w={'700px'}>
                {'Bonjour, je m\'appelle João Pedro. Je suis étudiant à l\'école des technologies numériques avancées depuis septembre 2022. J\'ai commencé a apprendre l\'informatique lors de mes années a l\'université avec beaucoup de Java et de C. Aujourd\'hui je fait plus du développement web mais les deux genres de programmations m\'interresent.'}
              </Text>
            </Flex>       
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
