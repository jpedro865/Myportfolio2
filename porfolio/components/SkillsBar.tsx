import { Flex, Progress } from "@chakra-ui/react";

interface SkillBarProps {
  name: string,
  pourcentage: number,
}

export default function SkillBar({name, pourcentage}: SkillBarProps) {
  return(
    <>
      <Flex direction={'column'} >
        {name}
        <Progress mt={2} value={pourcentage} size='xs' colorScheme='blue' w={'400px'} />
      </Flex>
    </>
  )
}
