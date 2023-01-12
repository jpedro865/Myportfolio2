import { Flex, Heading } from "@chakra-ui/react";
import CardApropos from "./CardApropos";

export default function ProjectsPage() {
  return (
    <>
      <Flex id={'projects'} bg={'#DFF6FF'} h={'100vh'} justify={'space-around'} align={'center'} p={10}>
        <Heading>
          Projects
        </Heading>

      </Flex>
    </>
  )
}
