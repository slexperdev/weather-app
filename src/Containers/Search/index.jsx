import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';

import {useWeather} from '../../Context';
import {Constants} from '../../Constant';
import {getNightTime} from '../../Util';

//components
import {BackButton} from '../../Components';

//styles
import {useTheme} from '../../Theme';
import styles from './styles';

export default function SearchScreen({navigation}) {
  const {Gutters, Images, Layout} = useTheme();
  const {setWeatherData, setIsLoading, setIsNight} = useWeather();

  const [searchCity, setSearchCity] = useState('');

  // Fetch the weather data by city name
  const fetchWeatherByCity = async () => {
    if (searchCity) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${Constants.OPENWEATHER_API_KEY}&units=metric`,
        );
        const data = response.data;
        setWeatherData(data);

        const isNightTime = getNightTime(data);
        setIsNight(isNightTime);
        setIsLoading(false);
        navigation.goBack();
      } catch (error) {
        setIsLoading(false);
        Alert.alert('Warning', 'Please enter valid city name.');
      }
    } else {
      Alert.alert('Warning', 'Please enter city name.');
    }
  };

  return (
    <SafeAreaView style={[Layout.fill]}>
      <ImageBackground
        source={Images.searchBg}
        resizeMode="cover"
        style={[Layout.fill]}>
        <View style={[Gutters.regularSPadding]}>
          <BackButton onPress={() => navigation.goBack()} text="Search City" />
          <View style={[Gutters.largeTMargin, Layout.rowHCenter]}>
            <View style={styles.inputContainer}>
              <Image source={Images.pinIcon} style={styles.searchIcon} />
              <TextInput
                onChangeText={text => setSearchCity(text)}
                value={searchCity}
                placeholder="City Name"
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={fetchWeatherByCity}
              style={styles.btnSearch}>
              <Image source={Images.magnifierIcon} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
