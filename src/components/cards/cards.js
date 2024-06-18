import { useItems } from "../../context/item-context";

const Cards = () => {
  const { items, setIndexUpdate } = useItems();

  return (
    <div className="card-container flex flex-center flex-wrap">
      {items &&
        items.map((item, index) => (
          <div
            className="card flex flex-center flex-column full-width"
            key={index}
            onClick={() => setIndexUpdate(index)}
          >
            <div className="card-header flex flex-column full-width text-center">
              <span className="card-header_name">{`${item.name.first} ${item.name.last}`}</span>
            </div>
            <div className="card-body full-width">
              <div className="card-body_avatar">
                <img src={item.picture.large} className="img" alt="" />
              </div>
              <div className="card-body_text flex flex-column full-width text-center">
                <span>{item.email}</span>
                <span>{item.phone}</span>
                <span>{`${item.location.city}, ${item.location.state}`}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
