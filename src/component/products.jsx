import classes from './products.module.css';
import ItemOfMain from './item_main';

function Products() {
    return (
        <div className={classes.products}>
            <span>Featured products</span>
            <ItemOfMain></ItemOfMain>
        </div>
    );
}

export default Products;