import ContactForm from "../../components/ContactForm";
import SectionTemplate from "../SectionTemplate";

function FormSection() {
  return (
    <SectionTemplate bgColor={"#121012"}>
      <div className="masterContainer">
        <ContactForm />
      </div>
    </SectionTemplate>
  );
}

export default FormSection;
