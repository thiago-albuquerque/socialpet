import React, {useState} from 'react';
import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toogleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      keyboardType="number-pad"
      {...props}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toogleSecureTextEntry}
          color="gray2"
        />
      }
    />
  );
}
