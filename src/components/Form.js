import React from "react";
import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";
import InputTextArea from "./InputTextArea";
import InputCheckBox from "./InputCheckBox";

function Form() {
  const { handleSubmit, errors, register, watch } = useForm({
    mode: "onChange",
  });

  function onFormSubmit(data) {
    console.log(data);
    const html = `
    <h2>Gegevens</h2>
    <p>Naam: ${data.firstName} ${data.lastName}</p>
    <p>Leeftijd: ${data.age}</p>
    <p>Postcode: ${data.postalCode}</p>
    <p>Huisnummer: ${data.houseNumber}</p>
    <p>Bezorgfrequentie: ${
      data.differentValue ? data.differentValue : data.delivery
    }</p>
    <p>Opmerkingen: ${data.comments}</p>
    `;
    const orderPlaced = document.querySelector("#order-placed");
    orderPlaced.innerHTML = "";
    orderPlaced.insertAdjacentHTML("afterbegin", html);
  }

  const selectedDifferent = watch("delivery");

  return (
    <>
      <section className="form-section">
        <h1>Bestel formulier</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="form-item">
            <InputText
              name="firstName"
              req={true}
              fieldRef={register}
              zip={false}
            >
              Voornaam
            </InputText>
            {errors.firstName && (
              <span className="error-text">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-item">
            <InputText
              name="lastName"
              req={true}
              fieldRef={register}
              zip={false}
            >
              Achternaam
            </InputText>
            {errors.lastName && (
              <span className="error-text">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-item">
            <InputNumber name="age" req={true} fieldRef={register} val="18">
              Leeftijd
            </InputNumber>
            {errors.age && (
              <span className="error-text">{errors.age.message}</span>
            )}
          </div>
          <div className="form-item">
            <InputText
              name="postalCode"
              req={true}
              fieldRef={register}
              zip={true}
            >
              Postcode
            </InputText>

            {errors.postalCode && (
              <span className="error-text">{errors.postalCode.message}</span>
            )}
          </div>
          <div className="form-item">
            <InputNumber
              name="houseNumber"
              req={true}
              fieldRef={register}
              val={false}
            >
              Huisnumber
            </InputNumber>
            {errors.houseNumber && (
              <span className="error-text">{errors.houseNumber.message}</span>
            )}
          </div>
          <div className="form-item">
            <div className="radio-title">
              <p>Bezorgfrequentie</p>
            </div>

            <div>
              <InputRadio
                name="delivery"
                value="Iedere week"
                req={true}
                fieldRef={register}
              >
                Iedere week
              </InputRadio>

              <InputRadio
                name="delivery"
                value="Om de week"
                req={true}
                fieldRef={register}
              >
                Om de week
              </InputRadio>

              <InputRadio
                name="delivery"
                value="Iedere maand"
                req={true}
                fieldRef={register}
              >
                Iedere maand
              </InputRadio>

              <InputRadio
                name="delivery"
                value="different"
                req={true}
                fieldRef={register}
              >
                Anders
              </InputRadio>
              {errors.delivery && (
                <span className="error-text">{errors.delivery.message}</span>
              )}
            </div>
          </div>
          <div className="form-item">
            {selectedDifferent === "different" && (
              <>
                <InputText
                  name="differentValue"
                  req={true}
                  fieldRef={register}
                  zip={false}
                >
                  Andere bezorgfrequentie
                </InputText>
              </>
            )}
          </div>
          <div className="form-item">
            <InputTextArea name="comments" fieldRef={register}>
              <span className="form-label">Opmerking</span>
            </InputTextArea>
          </div>
          <div className="form-item">
            <InputCheckBox name="agree" req={true} fieldRef={register}>
              Ik ga akkoord met de voorwaarden
            </InputCheckBox>
            {errors.agree && (
              <span className="error-text">{errors.agree.message}</span>
            )}
          </div>
          <button className="form-button" type="submit">
            Verzend
          </button>
        </form>
      </section>
      <section id="order-placed"></section>
    </>
  );
}

export default Form;
