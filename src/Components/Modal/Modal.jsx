import { useEffect, useRef, useState } from "react";
import s from "./modal.module.scss";
import { SvgMaker } from "..";
import { validateName, validateNumber } from "../../helpers/validate";
import { CSSTransition } from "react-transition-group";

const Modal = ({ onClose, data }) => {
  const { category, name, price } = data;
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [validateNameStatus, setValidateNameStatus] = useState({});
  const [validateNumberStatus, setValidateNumberStatus] = useState({});

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //eslint-disable-next-line
  }, [ref]);

  const handleChangeInput = (key, value) => {
    if (key === "name") {
      setInputName(value);
    }
    if (key === "number") {
      setInputNumber(value);
    }
  };

  const handleSubmit = () => {
    const resultValidName = validateName(inputName);
    setValidateNameStatus(resultValidName);

    const resultValidNumber = validateNumber(inputNumber);
    setValidateNumberStatus(resultValidNumber);

    if (!validateNameStatus.status || !validateNumberStatus.status) return;
    console.log("Submit: ", data);
  };

  return (
    <div className={s.backdrop}>
      <div className={s.modal} ref={ref}>
        <div className={s.info__wrapper}>
          <span className={s.category__title}>{category}</span>
          <span className={s.name__title}>{name}</span>
          <span className={s.price__title}>
            <span>$</span>
            {price}
          </span>
        </div>

        <div className={s.input__container}>
          <div className={s.input__wrapper}>
            <input
              style={
                validateNameStatus.status === false
                  ? { borderColor: "red" }
                  : { borderColor: "rgba(0, 0, 0, 0.2)" }
              }
              type="text"
              placeholder="Name"
              autoComplete="nope"
              value={inputName}
              onChange={(e) => {
                handleChangeInput("name", e.target.value);
              }}
              onBlur={(e) => {
                const value = e.target.value;
                const result = validateName(value);
                setValidateNameStatus(result);
              }}
            />

            <CSSTransition
              in={validateNameStatus.status === false}
              timeout={200}
              classNames="fade"
              unmountOnExit
            >
              <>
                <span className={s.validate__fail}>
                  {validateNameStatus.message}
                </span>
                <span className={s.icon__warning}>
                  <SvgMaker
                    name={"svg__close"}
                    width={14}
                    height={14}
                    fill={"#FFFFFF"}
                  />
                </span>
              </>
            </CSSTransition>
          </div>

          <div className={s.input__wrapper}>
            <input
              style={
                validateNumberStatus.status === false
                  ? { borderColor: "red" }
                  : { borderColor: "rgba(0, 0, 0, 0.2)" }
              }
              type="text"
              placeholder="Number"
              autoComplete="off"
              value={inputNumber}
              onChange={(e) => {
                handleChangeInput("number", e.target.value);
              }}
              onBlur={(e) => {
                const value = e.target.value;
                const result = validateNumber(value);
                setValidateNumberStatus(result);
              }}
            />
            <CSSTransition
              in={validateNumberStatus.status === false}
              timeout={200}
              classNames="fade"
              unmountOnExit
            >
              <>
                <span className={s.validate__fail}>
                  {validateNumberStatus.message}
                </span>
                <span className={s.icon__warning}>
                  <SvgMaker
                    name={"svg__close"}
                    width={14}
                    height={14}
                    fill={"#FFFFFF"}
                  />
                </span>
              </>
            </CSSTransition>
          </div>
        </div>

        <button className={s.button} onClick={handleSubmit}>
          order
        </button>
        <span className={s.icon__close} onClick={onClose}>
          <SvgMaker name={"svg__close"} fill={"#000"} width={20} height={20} />
        </span>
      </div>
    </div>
  );
};

export default Modal;
