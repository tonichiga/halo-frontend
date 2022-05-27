import s from "./card.module.scss";

const Card = ({ onOpenModal, data = {}, onSetModalData }) => {
  const { category, name, price } = data;

  return (
    <div className={s.card}>
      <span className={s.category__title}>{category}</span>
      <span className={s.name__title}>{name}</span>
      <div className={s.price__container}>
        <span className={s.price__title}>
          <span>$</span>
          {price}
        </span>
        <button
          className={s.button}
          type="button"
          onClick={() => {
            onSetModalData(data);
            onOpenModal();
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
