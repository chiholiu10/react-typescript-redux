import { FC, useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import LiveTV from './components/LiveTV/LiveTV';
import LiveRadio from './components/LiveRadio/LiveRadio';
import Footer from './components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getData } from './actions';
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import history from "./history";
import theme from "./styles/Themes";
import axios from 'axios';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tvData = axios.get("slider/slider.json");
    const radioData = axios.get("cards/cards.json");
    const navData = axios.get("navbar.json");
    const footerData = axios.get("footer.json");

    const fetchData = async () => {
      try {
        await axios.all([tvData, radioData, navData, footerData]).then(axios.spread((...responses) => {
          const responseTV = responses[0];
          const responseRadio = responses[1];
          const responseNavbar = responses[2];
          const responseFooter = responses[3];
          dispatch(getData(responseTV.data, responseRadio.data, responseNavbar.data, responseFooter.data));
        })
        );
      } catch (error) {
        history.push({
          pathname: '/404'
        });
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <Navbar />
      <LiveTV />
      <LiveRadio />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
