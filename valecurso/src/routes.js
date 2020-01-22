import {createAppContainer,createSwitchNAvigator, createSwitchNavigator} from 'react-navigation';
import ListUsers from './pages/listUsers';
import Home from'./pages/home';

export default createAppContainer(
    createSwitchNavigator({
     
        Home,
        ListUsers
     
    })
)