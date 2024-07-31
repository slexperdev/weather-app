import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import moment from 'moment';

import {useWeather} from '../../Context';

//components
import {BackButton, CardContainer} from '../../Components';

//styles
import {useTheme} from '../../Theme';
import styles from './styles';

export default function TodayForecastScreen({navigation}) {
  const {Gutters, Images, Layout} = useTheme();

  const {weatherData} = useWeather();

  return (
    <SafeAreaView style={[Layout.fill]}>
      <View style={[Layout.fill, Gutters.regularSPadding]}>
        <BackButton
          text="Today Weather Forecast"
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <View style={[Gutters.largeTMargin]}>
          <CardContainer>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.xxlHPadding,
                Gutters.regularVPadding,
              ]}>
              <View style={[Layout.center]}>
                <Image source={Images.sunriseIcon} style={styles.icon} />
                <Text style={styles.timeText}>
                  {moment(weatherData.sys.sunrise * 1000).format('h:mm A')}
                </Text>
                <Text style={styles.labelText1}>Sunrise</Text>
              </View>
              <View style={[Layout.center]}>
                <Image source={Images.sunsetIcon} style={styles.icon} />
                <Text style={styles.timeText}>
                  {moment(weatherData.sys.sunset * 1000).format('h:mm A')}
                </Text>
                <Text style={styles.labelText2}>Sunset</Text>
              </View>
            </View>
          </CardContainer>
        </View>
      </View>
    </SafeAreaView>
  );
}
