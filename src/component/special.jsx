import classes from './special.module.css'

function Special() {
    return (
        <div className={classes.special}>
            <div>
                <div className={classes.about}>
                    <p>Order</p>
                    <p>Flowers</p>
                    <div></div>
                    <p>Shop Our Collection</p>
                    <div className={classes.circle}></div>
                </div>
                <div className={classes.about}>
                    <p>Corporate</p>
                    <p>Flowers</p>
                    <div></div>
                    <p>See Our Work</p>
                    <div className={classes.circle}></div>
                </div>
                <div className={classes.about}>
                    <p>Hadcrafted</p>
                    <p>Wedding</p>
                    <div></div>
                    <p>View Our Portfolio</p>
                    <div className={classes.circle}></div>
                </div>
            </div>
            <div className={classes.offer}>
                <p>Order <span>Flowers</span></p>
                <p>100% Moneyback Guarantee</p>
                <button>Shop Now {'>'}</button>
            </div>
        </div>
    );
}

export default Special;