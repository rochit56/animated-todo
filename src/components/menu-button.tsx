import React from 'react'
import { Button, Icon, IButtonProps } from 'native-base'
import { Entypo } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  return (
    <Button
      size="lg"
      _light={{
        colorScheme: 'blue',
        _pressed: {
          bg: 'primary.50'
        },
        _text: {
          color: active ? 'blue.50' : 'blue.500'
        }
      }}
      _dark={{
        colorScheme: 'darkBlue',
        _pressed: {
          bg: 'primary.800'
        },
        _text: {
          color: active ? 'blue.50' : undefined
        }
      }}
      bg={active ? 'rose.400' : 'transparent'}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Entypo} name={icon} size="sm" opacity={0.75} color={'muted.500'} paddingRight={1} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton
