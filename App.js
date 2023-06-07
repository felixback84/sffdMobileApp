// tailwind
import { TailwindProvider } from 'tailwindcss-react-native'
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import StackNavigationPublic from './navigation/StackNavigationPublic'
import StackNavigationAuth from './navigation/StackNavigationAuth'
import StackNavigationAdmin from './navigation/StackNavigationAdmin'
import PublicNav from './layout/PublicNav'

// redux
import { store } from './redux/store'
import { Provider } from 'react-redux'

const user = false

export default function App() {
  // react native navigator
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          {
            !user ? (
                <>
                  <StackNavigationPublic/>
                  {/* <StackNavigationAuth/> */}
                </>
              ) : (
                <StackNavigationAdmin/>
              )
          }
          {/* layout nav */}
          <PublicNav/>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

