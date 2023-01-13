import { Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import CardApropos from "./CardApropos";
import SkillsAutres from "./SkillsAutres";
import SkillsDevWeb from "./SkillsDevWeb";
import SkillsLangPro from "./SkillsLangPro";

export default function SkillsPage() {
  const [devWeb, setDevWeb] = useState(true);
  const [langagePro, setLangagePro] = useState(false);
  const [autres, setAutres] = useState(false);

  const setAllFalse = () => {
    setDevWeb(false);
    setLangagePro(false);
    setAutres(false);
  }

  return (
    <>
      <Flex id={'competences'} bg={'#DFF6FF'} justify={'space-around'} align={'center'} p={[2, 5, 10]}>
        <Flex w={'100%'} bg={'white'} rounded={'2xl'} boxShadow={'2xl'} p={[2, 5, 10]} direction={'column'} >
          <Flex boxShadow={'0px 24px 3px -24px black'} >
              <Heading fontFamily='Jura' textColor={'#06283D'}>{'03 -'}</Heading><Heading fontFamily='Jura' textColor={'#1363DF'} ml={'15px'}>{'Competences'}</Heading>
          </Flex>
          <Flex mt={5} fontFamily={'Cutive'} >
            <Button bg={'transparent'}
              onClick={() => {
                setAllFalse();
                setDevWeb(true);
              }}
            >
              {'Développement web'}
            </Button>
            <Button bg={'transparent'}
              onClick={() => {
                setAllFalse();
                setLangagePro(true);
              }}
            >
              {'Langages de programmation'}
            </Button>
            <Button bg={'transparent'}
              onClick={() => {
                setAllFalse();
                setAutres(true);
              }}
            >
              {'Autres'}
            </Button>
          </Flex>
          <Flex hidden={devWeb? false: true}>
            <SkillsDevWeb/>
          </Flex>
          <Flex hidden={langagePro? false: true}>
            <SkillsLangPro/>
          </Flex>
          <Flex hidden={autres? false: true}>
            <SkillsAutres/>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
