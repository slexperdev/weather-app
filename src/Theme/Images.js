/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('../Assets/icons/logo.png'),
    weatherDayBg: require('../Assets/BGImages/1.jpg'),
    weatherNightBg: require('../Assets/BGImages/4.jpg'),
    searchBg: require('../Assets/BGImages/searchCity.jpg'),
    sideBarIcon: require('../Assets/menu.png'),
    weatherIcons: {
      '01d': require('../Assets/icons/01d.png'),
      '01n': require('../Assets/openWeatherIcons/01n.png'),
      '02d': require('../Assets/icons/02d.png'),
      '02n': require('../Assets/icons/02n.png'),
      '03d': require('../Assets/icons/03d.png'),
      '03n': require('../Assets/icons/03n.png'),
      '04d': require('../Assets/icons/04d.png'),
      '04n': require('../Assets/icons/04n.png'),
      '09d': require('../Assets/icons/09d.png'),
      '09n': require('../Assets/icons/09n.png'),
      '10d': require('../Assets/icons/10d.png'),
      '10n': require('../Assets/icons/10n.png'),
      '11d': require('../Assets/openWeatherIcons/11d.png'),
      '11n': require('../Assets/openWeatherIcons/11n.png'),
      '13d': require('../Assets/icons/13d.png'),
      '13n': require('../Assets/icons/13n.png'),
      '50d': require('../Assets/icons/50d.png'),
      '50n': require('../Assets/icons/50n.png'),
      temp: require('../Assets/openWeatherIcons/img.png'),
      wind: require('../Assets/openWeatherIcons/wind.png'),
      humidity: require('../Assets/openWeatherIcons/humidity.png'),
    },
    magnifierIcon: require('../Assets/loupe.png'),
    refreshIcon: require('../Assets/refresh.png'),
    starIcon: require('../Assets/star1.png'),
    starFilledIcon: require('../Assets/star.png'),
    backArrow: require('../Assets/left-arrow.png'),
    backArrowDark: require('../Assets/left-arrow-black.png'),
    pinIcon: require('../Assets/pin.png'),
    closeIcon: require('../Assets/close.png'),
    calenderIcon: require('../Assets/calendar.png'),
    todayIcon: require('../Assets/24-hours.png'),
    sunsetIcon: require('../Assets/sunset.png'),
    sunriseIcon: require('../Assets/sunrise.png'),
  };
}
