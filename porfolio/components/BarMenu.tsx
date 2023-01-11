import { Flex, Portal, Stack } from "@chakra-ui/react";
import MenuButtons from "./MenuButtons";

export default function BarMenu() {
  return (
    <Portal>
      <Flex position={'fixed'} h={10} w={'100%'}
        justifyContent={'center'} top={0}
        mt={3}
      >
        <Stack spacing={5} direction={'row'}>
          <MenuButtons text='Accueil' logoUrl='/home.png' onclick={'#home'}/>
          <MenuButtons text='Apropos' logoUrl='/A48.png' onclick={'#hello'}/>
          <MenuButtons text='Projects' logoUrl='/projects.png' onclick={'#qmksd'}/>
          <MenuButtons text='Compétences' logoUrl='/competences.png' onclick={'#sqpkd,msq,ds'}/>
        </Stack>      
      </Flex>
    </Portal>
  )
}
