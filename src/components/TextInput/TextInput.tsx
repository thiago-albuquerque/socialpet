import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {UseAppTheme} from '../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = UseAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's16',
  };

  const $textInputStyle: TextStyle = {
    color: colors.backgroundContrast,
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box>
          <Text preset="paragraphMedium" mb="s4">
            {label}
          </Text>
          <Box {...$textInputContainer}>
            <RNTextInput
              ref={inputRef}
              placeholderTextColor={colors.gray2}
              style={$textInputStyle}
              {...rnTextInputProps}
            />
            {RightComponent && (
              <Box justifyContent="center" ml="s16">
                {RightComponent}
              </Box>
            )}
          </Box>
          {errorMessage && (
            <Text color="error" preset="paragraphSmall" bold>
              {errorMessage}
            </Text>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}
