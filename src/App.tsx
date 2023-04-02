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
