import { Flex, Stack } from "@chakra-ui/react";
import SkillBar from "./SkillsBar";

export default function SkillsAutres() {
  return (
    <>
      <Flex fontSize={'15px'} fontFamily={'Cutive'} p={10} direction={'column'}>
        <Stack spacing={'50px'}>
          <SkillBar name={'ExpressJs'} pourcentage={70}/>
          <SkillBar name={'MySQL'} pourcentage={50}/>
          <SkillBar name={'Sequelize'} pourcentage={60}/>
          <SkillBar name={'Chakra UI (FrameWork)'} pourcentage={50}/>
          <SkillBar name={'TailWind (CSS)'} pourcentage={50}/>
        </Stack>
      </Flex>
    </>
  )
}
