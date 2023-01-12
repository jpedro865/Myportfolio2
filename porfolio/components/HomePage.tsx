import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function HomePage() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV_Alternance.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV_Da-Silva_Joao.pdf';
            alink.click();
        })
    })
}
  return (
    <>
      <Flex id={'home'} bg={'#DFF6FF'} h={'100vh'} borderBottom={'1px'} shadow={'1px'}>
        <Flex w={'50%'} justify={'center'} align={'center'} direction='column'>
            <Flex bg={'white'} p={5} mt={20}
              w={'500px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              transform={'translateX(+50px)'}
              direction='column'
            >
              <Heading size={'xl'} textColor={'#06283D'} m={3}>
                {`Hey!! Bienvenue dans mon portfolio.`}
              </Heading>
              <Text m={3}>
                {`Je m'apelle João Pedro et je suis étudiant a l'école d'informatique ETNA.`}
              </Text>

            </Flex>
            <Flex  w={'500px'} h={'150px'} transform={'translateX(+50px)'}
              justify={'flex-end'} p={5} 
            >
              <a href='/CV_Alternance.pdf'><Heading
                textColor={'#1363DF'} fontSize={'30px'}
                p={'7px'} mr={5} textShadow={'-1px 2px #06283D'}
              >
                {'Curriculum vitae'}
              </Heading></a>
              <Button border={'2px'} borderColor={'#1363DF'}
                bg={'#1363DF'} textColor={'white'}
                transition={'0.5s'}
                _hover={{
                  bg: '#47B5FF',
                  textColor: '#06283D'
                }}
                onClick={onButtonClick}
                transform={'translateY(+10px)'}
              >
                {'Télécharger'}
              </Button>
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
