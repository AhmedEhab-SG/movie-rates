import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Theme/Layout";
import Router from "./routes/Rounter";
import "swiper/css";
import "swiper/css/bundle";

function App() {
  return (
    <Layout>
      <Header />
      <Router />
      <Footer />
    </Layout>
  );
}

export default App;
