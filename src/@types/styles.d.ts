import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

/*
 * We are creating this, 'cause once we define the type, the typescript can infer and know which
 * are the options that I can use wh selecting the color theme
 */
type ThemeType = typeof defaultTheme

/**
 * Declaring a new styled-components with all the things that it already have
 * And adding the module I declare, so the new styled-components alerady have this new types in the variable that I created.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
