import { updateItem, inputContent }  from '../../services/itemsService';
import {useItems} from '../../context/item-context';

const Updatefilds = () => {
    
    const {indexUpdate, setIndexUpdate, items, setItems}  = useItems();

    return indexUpdate >= 0 && (        
        <div className="flex flex-wrap">

            { inputContent(items, indexUpdate).map((item, i) => 
                <div className="input-container flex flex-column" key={i}>
                    <label>{item.label}</label>
                    <input type="text" value={item.value} 
                        onChange={(e) => updateItem(e.target.value, items, indexUpdate, setItems, i) } />
                </div>
            )}

            <div className="input-container flex flex-column">
                <button onClick={()=> setIndexUpdate(-1) }>Ok</button>
            </div>       
        </div>
    )
};

export default Updatefilds;
