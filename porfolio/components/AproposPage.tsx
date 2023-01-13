import { Flex, Heading, Text } from "@chakra-ui/react";

export default function AproposPage() {

  return (
    <>
      <Flex id={'apropos'} bg={'#DFF6FF'} h={'100vh'} justify={'space-around'} align={'center'} p={[2, 5, 10]} scrollBehavior={'smooth'}>
        <Flex w={'100%'} h={'80vh'} bg={'white'} rounded={'2xl'} boxShadow={'2xl'} p={[2, 5, 10]} direction={'column'}>
          <Flex>
            <Heading fontFamily='Jura' textColor={'#06283D'}>{'01 -'}</Heading><Heading fontFamily='Jura' textColor={'#1363DF'} ml={'15px'}>{'A propos de moi'}</Heading>
          </Flex>
          <Flex w={'100%'} h={'100%'} pt={5}>
            <Flex>
              <Text fontSize={'17px'} fontFamily='Cutive'>
                {'Bonjour, je m\'appelle João Pedro. Je suis étudiant à école des technologies numériques avancées depuis septembre 2022 '}
              </Text>
            </Flex>       
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
