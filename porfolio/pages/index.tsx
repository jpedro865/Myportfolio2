import Head from 'next/head'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import HomePage from '../components/HomePage'
import BarMenu from '../components/BarMenu'
import CardApropos from '../components/CardApropos'
import ProjectsPage from '../components/ProjectsPage'
import SkillsPage from '../components/SkillsPage'
import AproposPage from '../components/AproposPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfolio of Da Silva João" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BarMenu/>
      <HomePage/> 
      <AproposPage/>
      <ProjectsPage/>
      <SkillsPage/>
    </>
  )
}
