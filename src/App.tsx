import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTemplate from "./modules/SectionTemplate";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SectionTemplate bgColor={"#8dd39d"} content={"Main!"} />
      <SectionTemplate bgColor={"#121012"} content={"Content"} />
      <SectionTemplate bgColor={"#121012"} content={"Content"} />
      <SectionTemplate bgColor={"#121012"} content={"Content"} />
      <SectionTemplate bgColor={"#121012"} content={"Content"} />
      <SectionTemplate bgColor={"#8dd39d"} content={"Contact"} />
      <Footer />
    </div>
  );
}

export default App;
