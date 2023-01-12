import { Flex, Heading, Text } from "@chakra-ui/react";

export default function AproposPage() {
  return (
    <>
      <Flex id={'apropos'} bg={'#DFF6FF'} h={'100vh'} justify={'space-around'} align={'center'} p={10}>
        <Flex w={'100%'} h={'80vh'} bg={'white'} rounded={'2xl'} boxShadow={'2xl'} p={10} direction={'column'}>
          <Flex>
            <Heading textColor={'#06283D'}>{'01 -'}</Heading><Heading textColor={'#1363DF'} ml={'15px'}>{'A propos de moi'}</Heading>
          </Flex>
          <Flex w={'100%'} h={'100%'} pt={5}>
            <Flex>
              <Text fontSize={'17px'}>
                {'Bonjour, je m\'appelle João Pedro '}
              </Text>
            </Flex>
            
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}
