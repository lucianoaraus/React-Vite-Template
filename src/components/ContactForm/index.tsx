import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalMUI from "@mui/material/Modal";

type Inputs = {
  clientName: string;
  phoneNumber: number;
  email: string;
  clientType: string;
  clientLocation: string;
  message: string;
  inputRequired: string;
};

const COUNTRIES = [
  "Argentina",
  "Brasil",
  "Chile",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Otro",
];

const CLIENT_TYPE = ["Agencia", "Empresa", "Emprendimiento"];

function ContactForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [type, setType] = useState("¿Que sos?");
  const [location, setLocation] = useState("¿De donde sos?");
  const formRef = useRef(null);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<Inputs> = () => {
    const formData = new FormData(
      formRef.current as unknown as HTMLFormElement
    );
    // replace with correct GG sheet form link
    // watch this video brah https://www.youtube.com/watch?v=ZA6j2PhXSUg
    fetch(
      "https://script.google.com/macros/s/AKfycby9dDh6Ntm2rI486kGgYEVeXwT1-awwZhpzqMgxy48WHV_SKa3Qliyj4J8ox_4cH9nA/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    handleOpen();
    resetForm();
  };

  const resetForm = () => {
    reset();
    setType("¿Que sos?");
    setLocation("¿De donde sos?");
  };

  const renderOption = (option: string) => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div>
          <h3>¡TITULO!</h3>
          <h4> COMPLETA EL FORMULARIO</h4>
        </div>
        <input
          {...register("clientName", { required: true })}
          placeholder="Tu nombre / Nombre de la empresa"
          type="name"
          name="clientName"
        />
        <input
          {...register("phoneNumber", { required: true })}
          placeholder="Teléfono"
          type="number"
          name="phoneNumber"
        />
        <input
          {...register("email", { required: true })}
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <select
          {...register("clientType", { required: true })}
          name="clientType"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option disabled selected hidden>
            ¿Qué sos?
          </option>
          {CLIENT_TYPE.map(renderOption)}
        </select>
        <select
          {...register("clientLocation", { required: true })}
          name="clientLocation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option disabled selected hidden>
            ¿De dónde sos?
          </option>
          {COUNTRIES.map(renderOption)}
        </select>
        <div>
          <h5>Contanos sobre tu proyecto</h5>
        </div>
        <textarea {...register("message", { required: true })} name="message" />

        <button type="submit">ENVIAR</button>
      </form>

      <ModalMUI
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <p>Modal message</p>
        </div>
      </ModalMUI>
    </>
  );
}

export default ContactForm;
