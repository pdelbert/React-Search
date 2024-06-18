import { sortByAttribute } from "../../services/itemsService";
import { useItems } from "../../context/item-context";
import {
  FIRST_NAME_KEY,
  LAST_NAME_KEY,
  LOCATION_CITY_KEY,
  LOCATION_STATE_KEY,
  FIRST_NAME_LABEL,
  LAST_NAME_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
  LOCATION_CITY_LABEL,
  LOCATION_STATE_LABEL
} from "../../config/default";

const Selectfilter = () => {
  const { items, setItems } = useItems();

  return (
    <select onChange={(e) => sortByAttribute(e.target.value, items, setItems)}>
      <option value={FIRST_NAME_KEY}>{FIRST_NAME_LABEL}</option>
      <option value={LAST_NAME_KEY}>{LAST_NAME_LABEL}</option>
      <option value="phone">{PHONE_LABEL}</option>
      <option value="email">{EMAIL_LABEL}</option>
      <option value={LOCATION_CITY_KEY}>{LOCATION_CITY_LABEL}</option>
      <option value={LOCATION_STATE_KEY}>{LOCATION_STATE_LABEL}</option>
    </select>
  );
};

export default Selectfilter;
