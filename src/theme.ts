import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    50: '#ee9acf',
    100: '#e97bc0',
    200: '#e45db2',
    300: '#df3ea3',
    400: '#d62394',
    500: '#b71e7f',
    600: '#991969',
    700: '#7a1454',
    800: '#5b0f3f',
    900: '#3d0a2a'
  }
}

export default extendTheme({ config, colors })
