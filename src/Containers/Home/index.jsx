import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

import {useWeather} from '../../Context';
import {navigate} from '../../Navigators/Root';

//components
import {CardContainer, CustomDrawer, Spinner} from '../../Components';

//styles
import {useTheme} from '../../Theme';
import styles from './styles';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const {Fonts, Gutters, Images, Layout} = useTheme();
  const {weatherData, isNight, isLoading} = useWeather();

  const [drawerAnim] = useState(new Animated.Value(-width * 0.75));

  const openDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={[Layout.fill]}>
      <ImageBackground
        source={isNight ? Images.weatherNightBg : Images.weatherDayBg}
        resizeMode="cover"
        style={[Layout.fill]}>
        {isLoading && <Spinner size="large" withOverlay />}
        <View style={[Gutters.regularSPadding]}>
          <View style={[Layout.justifyContentBetween, Layout.rowHCenter]}>
            <TouchableOpacity onPress={openDrawer}>
              <Image source={Images.sideBarIcon} style={styles.sideBarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('SearchScreen')}>
              <Image source={Images.magnifierIcon} style={styles.sideBarIcon} />
            </TouchableOpacity>
          </View>
          {weatherData ? (
            <View style={[Layout.center, Gutters.smallTMargin]}>
              <Text style={[styles.cityText, Fonts.textShadow]}>
                {weatherData.name}
              </Text>
              <Text style={[styles.dateText, Fonts.textShadow]}>
                {moment(weatherData.dt * 1000).format('ddd DD MMMM hh:mm A')}
              </Text>
              <View style={styles.tempContainer}>
                <Text style={[styles.tempText, Fonts.textShadow]}>
                  {weatherData.main.temp}º
                </Text>
                <Image
                  source={Images.weatherIcons[weatherData.weather[0].icon]}
                  style={styles.weatherIcon}
                />
              </View>
              <Text style={[styles.decsText, Fonts.textShadow]}>
                {weatherData.weather[0].description}
              </Text>
              <View style={[Gutters.regularTMargin, Layout.fullWidth]}>
                <CardContainer>
                  <View
                    style={[
                      Layout.row,
                      Layout.justifyContentBetween,
                      Gutters.largeHPadding,
                      Gutters.largeVPadding,
                    ]}>
                    <View style={[Layout.colVCenter]}>
                      <Image
                        source={Images.weatherIcons['temp']}
                        style={styles.weatherIcon}
                      />
                      <Text style={styles.cardDecsText}>Max Temp</Text>
                      <Text style={styles.cardValueText}>
                        {weatherData.main.temp_max}ºC
                      </Text>
                    </View>
                    <View style={[Layout.colVCenter]}>
                      <Image
                        source={Images.weatherIcons['humidity']}
                        style={styles.weatherIcon}
                      />
                      <Text style={styles.cardDecsText}>Humidity</Text>
                      <Text style={styles.cardValueText}>
                        {weatherData.main.humidity}%
                      </Text>
                    </View>
                    <View style={[Layout.colVCenter]}>
                      <Image
                        source={Images.weatherIcons['wind']}
                        style={styles.weatherIcon}
                      />
                      <Text style={styles.cardDecsText}>Wind</Text>
                      <Text style={styles.cardValueText}>
                        {weatherData.wind.speed}m/s
                      </Text>
                    </View>
                  </View>
                </CardContainer>
              </View>
            </View>
          ) : (
            <View style={[Layout.center, Gutters.smallTMargin]}>
              <Text>Not Found</Text>
            </View>
          )}
        </View>
      </ImageBackground>
      <CustomDrawer drawerAnim={drawerAnim} />
    </SafeAreaView>
  );
}
