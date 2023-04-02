import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;

        colors: {
            titulo: string;
            primary: string;
            secondary: string;
        }
    }
}