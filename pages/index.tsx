import Head from 'next/head'
import HomePage from '../components/HomePage'
import BarMenu from '../components/BarMenu'
import ProjectsPage from '../components/ProjectsPage'
import SkillsPage from '../components/SkillsPage'
import AproposPage from '../components/AproposPage'
import { Flex } from '@chakra-ui/react'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{'<JPedro/> Student in Web Developer'}</title>
        <meta name="description" content="Portfolio of Da Silva João" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/development.png" />
        <link rel='preload' />
      </Head>
      <BarMenu/>
      <HomePage/> 
      <AproposPage/>
      <ProjectsPage/>
      <SkillsPage/>
      <Footer/>
    </>
  )
}
