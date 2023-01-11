import { Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";

interface PropsMenuButtons {
  text: string,
  logoUrl: string,
  onclick: string,
}

export default function MenuButtons({text, logoUrl, onclick}: PropsMenuButtons) {
  const [hoverActived, setHoverActived] = useState(false);

  return (
    <>
      <a href={onclick}>
        <Flex 
          border={'1px'} borderColor={'black'}
          bg={'#06283D'}
          justifyContent={'center'}
          alignItems='center'
          borderRadius={20}
          h={'40px'} w={'40px'}
          _hover={{
            width: '130px',
            boxShadow: 'dark-lg',
            transform: 'translateY(+10px)',
            transitionDuration: '0.5s',
            transitionTimingFunction: "ease-in-out"
          }}
          onMouseEnter={
            ()=> {setHoverActived(true)}
          }
          onMouseLeave={
            ()=> {setHoverActived(false)}
          }
          style={{
            transitionDuration: '0.2s',
            transitionTimingFunction: "ease-in-out"
          }}
        >
          <Image src={logoUrl} alt={'logo menu button'}
            w={'25px'} h={'25px'}
            hidden={hoverActived? true: false}
          />
          <Heading
            textColor={'white'}
            hidden={hoverActived? false: true}
            size={'sm'}
          >
            {text}
          </Heading>

        </Flex>
      </a>
    </>
  )
}
