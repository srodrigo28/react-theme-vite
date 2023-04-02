### Iniciando um projeto
    * npm create vite@latest
    * npm install --save styled-components
    * npm i --save-dev @types/styled-components
## styles/GlobalStyles.ts
    import { createGlobalStyle } from 'styled-components'

    export default createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            box-sizing: border-box;
            list-style: none;
            text-decoration: none;
        }
    `
## styles/styled.d.ts
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
## styles/themes/dark
    export default {
    title: 'dark',
    
    colors: {
        titulo: '#c0c0c0',
        primary: '#696969',
        secondary: '#000'
    }
}
## styles/themes/light
    export default {
    title: 'light.ts',
    
    colors: {
        titulo: '#fff',
        primary: '#7B68AA',
        secondary: '#6A29EE'
    }
}
## Configurando App.tsx
    import { ThemeProvider } from "styled-components"
    import GlobalStyles from "./styles/GlobalStyles"
    import dark from "./styles/themes/dark"
    import light from "./styles/themes/light"
    import { Login } from "./pages/Login"

    function App() {

    return (
        <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Login />
        </ThemeProvider>
    )
    }

    export default App
## pages/Login/index.tsx
    import { Container } from "./styles";

    export function Login() {
        return (
            <Container>
                <h1>Login</h1>
            </Container>
        )
    }
## pages/Login/styles.ts
    import styled from "styled-components";

    export const Container = styled.div`
        color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.secondary};
    `;

    export const Input = styled.input`

    `;