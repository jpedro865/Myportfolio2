import { Flex, Heading } from "@chakra-ui/react";
import CardApropos from "./CardApropos";

export default function SkillsPage() {
  return (
    <>
      <Flex id={'competences'} bg={'#DFF6FF'} h={'100vh'} justify={'space-around'} align={'center'} p={10}>
        <Heading>
          Competences
        </Heading>
      </Flex>
    </>
  )
}
