import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
${reset}

body {
  background-color: #5B2386;
}

@font-face {
  font-family: 'tvn';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  }
  @font-face {
  font-family: 'gmarket';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
 }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
export default App;
