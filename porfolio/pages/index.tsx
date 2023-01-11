import Head from 'next/head'
import { Flex, Portal } from '@chakra-ui/react'
import HomePage from '../components/HomePage'
import BarMenu from '../components/BarMenu'

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
      <Flex id={'apropos'} bg={'#DFF6FF'} h={'100vh'}>

      </Flex>
    </>
  )
}
