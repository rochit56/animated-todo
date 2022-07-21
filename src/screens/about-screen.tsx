import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather, AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'coolGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'coolGray.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/rxchit.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native App
          </Text>
          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://www.github.com/rxchit"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Find me on Github
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://www.behance.net/rxchit"
            leftIcon={
              <Icon as={<AntDesign name="behance" />} size="sm" opacity={0.5} />
            }
          >
            Check out my Behance
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
