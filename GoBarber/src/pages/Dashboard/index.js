import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Dashboard = () => {
  return <View />;
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default Dashboard;
