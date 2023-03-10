import { Flex, Heading, Image } from "@chakra-ui/react";

interface CardProjectProps {
  description: string,
  title: string,
  urlPhoto: string,
}

export default function CardProject({title, description, urlPhoto}: CardProjectProps) {
  return (
    <>
      <Flex w={'350px'} bg={'white'} rounded={'2xl'} boxShadow={'2xl'} p={5} direction={'column'}>
        <Flex justify={'center'} p={2} >
          <Heading font-display='optional' fontFamily={'Jura'} fontSize={'30px'}>{title}</Heading>
        </Flex>
        <Flex p={2} >
          <Image boxShadow={'md'} rounded={'lg'} src={urlPhoto} alt={'Portrait'}/>
        </Flex>
        <Flex p={2} font-display='optional' fontFamily={'Cutive'}>
          {description}
        </Flex>

      </Flex>
    </>
  )
}
