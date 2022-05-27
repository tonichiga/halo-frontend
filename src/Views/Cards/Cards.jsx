import { useState, useEffect } from "react";
import { Card, Modal } from "../../Components";
import s from "./cards.module.scss";
import { CSSTransition } from "react-transition-group";
import { stockOperations, stockSelectors } from "../../redux/stock";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const Cards = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const items = useSelector(stockSelectors.items);
  const isLoading = useSelector(stockSelectors.loading);
  const body = document.querySelector("body");

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpenModal(true);
    body.style.overflowY = "hidden";
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    body.style.overflowY = "auto";
  };

  const handleSetModalData = (data) => {
    setModalData(data);
  };

  useEffect(() => {
    dispatch(stockOperations.getItemHandler());

    //eslint-disable-next-line
  }, []);

  return (
    <div className={s.container}>
      {isLoading ? (
        <ClipLoader
          color={"teal"}
          loading={true}
          css={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
          size={150}
        />
      ) : (
        <>
          <div className={s.cards__wrapper}>
            {items.map((item) => {
              return (
                <Card
                  onSetModalData={handleSetModalData}
                  key={item.name + item.price}
                  onOpenModal={handleOpenModal}
                  data={item}
                />
              );
            })}
            {/* <Card
              onSetModalData={handleSetModalData}
              onOpenModal={handleOpenModal}
              data={items[1]}
            /> */}
          </div>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              let item = items[0];

              items.forEach((el) => {
                if (el.price < item.price) {
                  item = el;
                }
              });

              handleSetModalData(item);
              handleOpenModal();
            }}
          >
            Buy cheapest
          </button>

          <CSSTransition
            in={isOpenModal}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <Modal onClose={handleCloseModal} data={modalData} />
          </CSSTransition>
        </>
      )}
    </div>
  );
};

export default Cards;
