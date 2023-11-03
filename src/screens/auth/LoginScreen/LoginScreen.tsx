import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSigUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen scrollable>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        errorMessage="Menssagem de erro"
        boxProps={{mb: 's20'}}
      />

      <Text preset="paragraphSmall" color="primary" bold mb="s48">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mb="s12" />
      <Button
        onPress={navigateToSigUpScreen}
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
