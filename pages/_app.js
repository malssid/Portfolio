import "../styles/globals.css";
import Header from "../components/Header";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen" id="screenBG">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
