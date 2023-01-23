import { Flex, Image, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex w={'100%'} justify={'center'} align={'center'} bg={'#DFF6FF'} pb={10}>
        <Stack spacing={'30px'} direction={'row'}>
          <a target="_blank" href="https://github.com/jpedro865" rel="noreferrer">
          <Image w={'50px'} h={'50px'}  src={'/github.png'} alt={'github logo'}/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/joao-pedro-monteiro-da-silva-bb9024253/" rel="noreferrer">
          <Image w={'50px'} h={'50px'}  src={'/linkedin.png'} alt={'linkedin logo'}/>
          </a>
        </Stack>
        
      </Flex>
    </>
  )
}
