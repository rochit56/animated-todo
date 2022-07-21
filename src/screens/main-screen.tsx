import React, { useCallback, useState } from 'react'
import { Icon, VStack, useColorModeValue, Fab } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import TaskList from '../components/task-list'
import shortid from 'shortid'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy Groceries this weekend',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native App',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id)
  }, [])
  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'coolGray.900')}
      w="full"
    >
      <Masthead
        title="What's up !!"
        image={require('../assets/masthead.jpg')}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'coolGray.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('gray.500', 'gray.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}
