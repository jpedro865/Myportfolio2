import { Flex, Stack } from "@chakra-ui/react";
import SkillBar from "./SkillsBar";

export default function SkillsDevWeb() {
  return (
    <>
      <Flex fontSize={'15px'} font-display='optional' fontFamily={'Cutive'} p={10} direction={'column'}>
        <Stack spacing={'50px'}>
          <SkillBar name={'ReactJs'} pourcentage={50}/>
          <SkillBar name={'NextJs'}pourcentage={40}/>
          <SkillBar name={'PHP'}pourcentage={30}/>
        </Stack>
      </Flex>
    </>
  )
}
