import debounce from 'lodash.debounce';
import {searchItemByField}  from '../../services/itemsService';
import {useItems} from '../../context/item-context';

const Search = () => {

    const {setItems, itemsBase}  = useItems();

    const debouncedOnChange = debounce((e) => 
            searchItemByField(e.target.value, setItems, itemsBase), 700);
        
    return  <input type="text" onChange={debouncedOnChange} placeholder="Search" />
}

export default Search;
