import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionTemplate from "./modules/SectionTemplate";
import FormSection from "./modules/FormSection";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SectionTemplate bgColor={"#8dd39d"}>Main!</SectionTemplate>
      <SectionTemplate bgColor={"#121012"}>Content</SectionTemplate>
      <SectionTemplate bgColor={"#121012"}>Content</SectionTemplate>
      <SectionTemplate bgColor={"#121012"}>Content</SectionTemplate>
      <FormSection />
      <SectionTemplate bgColor={"#8dd39d"}>Content</SectionTemplate>
      <Footer />
    </div>
  );
}

export default App;
