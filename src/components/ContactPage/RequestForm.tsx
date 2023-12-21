import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateRequestMutation } from "./requests-api-slice";
import "./request-form.scss";

export const ContactPageForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    phone: "",
    text: "",
    requestType: "",
  });

  const [createRequest] = useCreateRequestMutation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(inputs);

    createRequest({
      type: inputs.requestType,
      productId: "657c60157b3f6a4c9ddbae30",
      email: inputs.email,
      phoneNr: inputs.phone,
      text: inputs.text,
    });

    setInputs({
      email: "",
      phone: "",
      text: "",
      requestType: "",
    });
  };
  return (
    <>
      <form className="request-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="requestType"
            value="question"
            onChange={handleChange}
            required={true}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="requestType"
            value="order"
            onChange={handleChange}
            required={true}
          />
          Order
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label>
          Phone number:{" "}
          <input
            type="tel"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label>
          Text:{" "}
          <input
            type="text"
            name="text"
            value={inputs.text}
            onChange={handleChange}
            required={true}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
