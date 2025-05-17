/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars */

import "styled-components";
import theme from './app/styles/theme'

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: import("styled-components").CSSProp;
  }
}
