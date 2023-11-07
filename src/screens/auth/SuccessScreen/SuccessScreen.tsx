import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />

      <Text preset="headingLarge" mt="s24" mb="s16">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        {route.params.description}
      </Text>

      <Button title="Fazer login" onPress={goBackToBegin} />
    </Screen>
  );
}
