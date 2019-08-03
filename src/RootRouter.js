import { createStackNavigator, createAppContainer } from 'react-navigation';
import HourlyView from './containers/hourlyview/HourlyView';
import WeatherForecastHome from './containers/weatherforecasthome/WeatherForecastHome';

const AppNavigator = createStackNavigator(
    {
        Home: WeatherForecastHome,
        Details: HourlyView
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);
