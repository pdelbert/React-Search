import {
  API_ITEMS_REQUEST,
  FIRST_NAME_KEY,
  LAST_NAME_KEY,
  EMAIL_KEY,
  PHONE_KEY,
  LOCATION_CITY_KEY,
  LOCATION_STATE_KEY,
  FIRST_NAME_LABEL,
  LAST_NAME_LABEL,
  EMAIL_LABEL,
  PHONE_LABEL,
  LOCATION_CITY_LABEL,
  LOCATION_STATE_LABEL
} from "../config/default";

/**
 * Request the items to display on the view.
 *
 */
const itemsReques = async () => {
  const response = await fetch(API_ITEMS_REQUEST);
  return response.json();
};

/**
 * Search item by field and update the state.
 *
 */
const searchItemByField = (key, setItems, items) => {
  setItems(
    items.filter((data) => {
      if (
        data.phone.toLowerCase().includes(key.toLowerCase()) ||
        data.email.toLowerCase().includes(key.toLowerCase()) ||
        data.name.first.toLowerCase().includes(key.toLowerCase()) ||
        data.name.last.toLowerCase().includes(key.toLowerCase()) ||
        data.location.city.toLowerCase().includes(key.toLowerCase()) ||
        data.location.state.toLowerCase().includes(key.toLowerCase())
      ) {
        return data;
      }
    })
  );
};

/**
 * Sort items by attribute.
 *
 */
const sortByAttribute = (key, items, setItems) => {
  setItems(
    [...items].sort((a, b) => {
      if (key == FIRST_NAME_KEY) {
        a[key] = a.name.first;
        b[key] = b.name.first;
      }

      if (key == LAST_NAME_KEY) {
        a[key] = a.name.last;
        b[key] = b.name.last;
      }

      if (key == LOCATION_CITY_KEY) {
        a[key] = a.location.city;
        b[key] = b.location.city;
      }

      if (key == LOCATION_STATE_KEY) {
        a[key] = a.location.state;
        b[key] = b.location.state;
      }

      return a[key].localeCompare(b[key]);
    })
  );
};

/**
 * Update the fields of the selected user.
 *
 */
const updateItem = (newValue, items, index, setItems, attr) => {
  const itemsCopy = [...items];

  if (attr === FIRST_NAME_KEY) {
    itemsCopy[index].name.first = newValue;
  }
  if (attr === LAST_NAME_KEY) {
    itemsCopy[index].name.last = newValue;
  }
  if (attr === EMAIL_KEY) {
    itemsCopy[index].email = newValue;
  }
  if (attr === PHONE_KEY) {
    itemsCopy[index].phone = newValue;
  }
  if (attr === LOCATION_CITY_KEY) {
    itemsCopy[index].location.city = newValue;
  }
  if (attr === LOCATION_STATE_KEY) {
    itemsCopy[index].location.state = newValue;
  }

  setItems(itemsCopy);
};

/**
 * Fill an array with data, related with the inputs update section.
 *
 */
const inputContent = (items, index) => {
  return [
    {
      label: FIRST_NAME_LABEL,
      value: items[index].name.first
    },
    {
      label: LAST_NAME_LABEL,
      value: items[index].name.last
    },
    {
      label: EMAIL_LABEL,
      value: items[index].email
    },
    {
      label: PHONE_LABEL,
      value: items[index].phone
    },
    {
      label: LOCATION_CITY_LABEL,
      value: items[index].location.city
    },
    {
      label: LOCATION_STATE_LABEL,
      value: items[index].location.state
    }
  ];
};

export {
  itemsReques,
  searchItemByField,
  sortByAttribute,
  updateItem,
  inputContent
};
