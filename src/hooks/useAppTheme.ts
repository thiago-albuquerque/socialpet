import {useTheme} from '@shopify/restyle';
import {Theme} from '@theme';

export function UseAppTheme() {
  return useTheme<Theme>();
}
