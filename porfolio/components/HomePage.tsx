import { Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <>
      <Flex id={'home'} bg={'#DFF6FF'} h={'100vh'}>
        <Flex w={'50%'} justify={'center'} align={'center'}>
            <Flex bg={'white'} p={5}
              w={'500px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              transform={'translateX(+50px)'}
              direction='column'
            >
              <Heading size={'xl'} textColor={'#06283D'} m={3}>
                {`Hey!! Bienvenu dans mon portfolio.`}
              </Heading>
              <Text m={3}>
                {`Je m'apelle João Pedro et je suis étudiant a l'école d'informatique ETNA.`}
              </Text>

            </Flex>
        </Flex>
        <Flex w={'50%'} justify={'center'} align={'center'} >
          <Flex w={'300px'} h={'300px'}
            rounded={'2xl'}
          >
            <Image boxShadow={'dark-lg'} rounded={'full'} src={'/portrait02.jpg'} alt={'Portrait'}/>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
