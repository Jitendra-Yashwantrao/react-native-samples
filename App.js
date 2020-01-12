import {  createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import UserScreen from './src/screens/UserScreen'
import ResponsiveLayoutScreen from './src/screens/LayoutScreen'
import HomeScreen from './src/screens/HomeScreen'
import React from 'react'
import { Provider as BlogProvider} from './src/context/BlogProvider'
import { LayoutAnimation } from 'react-native'

const navigator = createStackNavigator({
    Index: IndexScreen,
    Home: HomeScreen,
    ResponsiveLayout: ResponsiveLayoutScreen,
    User: UserScreen

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {

        title: 'Capability Demos'

    }
});

const App = createAppContainer(navigator);

export default ()=> {
    return <BlogProvider><App/></BlogProvider> 
}