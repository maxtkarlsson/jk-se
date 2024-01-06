import { useParams } from "react-router";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateRequestMutation } from "./requests-api-slice";
import "./request-form.scss";
import { useFetchProductByIdQuery } from "../ProductsPage/products-api-slice";
import { Button } from "../Common/Button";
import { ButtonType } from "../../models/ButtonType";

export const RequestForm = () => {
  const { id } = useParams();

  const {
    data: product,
    //isError,
    //isLoading,
  } = useFetchProductByIdQuery(id) || {};

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

    if (!id) {
      alert("Something went wrong");
    } else {
      createRequest({
        type: inputs.requestType,
        productId: id,
        email: inputs.email,
        phoneNr: inputs.phone,
        text: inputs.text,
      });
    }

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
        <span>{product?._id}</span>
        <div className="product">
          <div className="wrapper">
            <div className="product__image">image</div>
            <span className="product__name">{product?.name}</span>
          </div>
          <span className="product__price">{product?.price} Sek</span>
        </div>
        <div className="selections">
          <div className="radio-buttons">
            <label>
              <input
                className="radio-buttons__input"
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
                className="radio-buttons__input"
                type="radio"
                name="requestType"
                value="order"
                onChange={handleChange}
                required={true}
              />
              Order
            </label>
          </div>

          <div className="text-inputs">
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
          </div>
        </div>

        <Button text="Send" btnType={ButtonType.PRIMARY} type="submit" />
      </form>
    </>
  );
};
