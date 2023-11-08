import React from 'react';

import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
  ActivityIndicator,
} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const ButtonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...ButtonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={ButtonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={ButtonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
