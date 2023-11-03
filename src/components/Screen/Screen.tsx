import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {UseAppTheme} from '../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = UseAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Pressable onPress={navigation.goBack}>
              <Box flexDirection="row" alignItems="center" mb="s24">
                <Icon name="arrowLeft" color="primary" />
                <Text preset="paragraphMedium" semiBold ml="s8">
                  Voltar
                </Text>
              </Box>
            </Pressable>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
