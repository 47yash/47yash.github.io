import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      ink: string;
      charcoal: string;
      metal: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
    };
    fonts: {
      sans: string;
      serif: string;
    };
  }
}
