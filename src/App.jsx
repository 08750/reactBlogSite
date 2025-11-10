import "./App.css";
import Firstview from "./components01/Firstview";
import Header from "./components01/Header";
import Section01 from "./components01/Section01";
import bamosList from "./components01/bamosList/bamosList";
import BamosCard from "./components01/BamosCard";
import SectionHeader from "./components01/SectionHeader";
import SecText from "./components01/SecText";
import Button from "./components01/Button";
import Footer from "./components01/Footer";

function App() {
  return (
    <>
      <Header />
      <Firstview />
      <Section01 />

      <div className="card-list">
        {bamosList.map((item, index) => (
          <BamosCard key={index} item={item} />
        ))}
      </div>

      <SectionHeader />
      <SecText />
      <Button />
      <Footer />
    </>
  );
}

export default App;
