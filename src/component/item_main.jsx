import classes from './item.module.css';
import picture from './item_picture.png';

function ItemOfMain() {
    return (
        <div className={classes.item}>
            <p>
                Item Name
            </p>
            <img src={picture} alt="item_picture" />
            <div>
                <span>
                    28.50$
                </span>
                <button>
                    Order now
                </button>
            </div>
        </div>
    );
}

export default ItemOfMain;