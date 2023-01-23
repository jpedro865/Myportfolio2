import { Flex, Stack } from "@chakra-ui/react";
import SkillBar from "./SkillsBar";

export default function SkillsLangPro() {
  return (
    <>
      <Flex fontSize={'15px'} fontFamily={'Cutive'} p={10} direction={'column'}>
        <Stack spacing={'50px'}>
          <SkillBar name={'Java'} pourcentage={70}/>
          <SkillBar name={'TypeScript'} pourcentage={50}/>
          <SkillBar name={'C'} pourcentage={50}/>
          <SkillBar name={'JavaScript'} pourcentage={40}/>
          <SkillBar name={'CSS'} pourcentage={40}/>
        </Stack>
      </Flex>
    </>
  )
}
