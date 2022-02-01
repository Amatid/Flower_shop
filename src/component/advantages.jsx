import classes from './advantages.module.css'
import FontAwesome from 'react-fontawesome';

function Advantages() {
    return (
        <div className={classes.advantages}>
            <div><FontAwesome name='lock' style={{color: '#0378A6', fontSize: '20px'}} />100% Secure & PCI Compliance</div>  
            <div><FontAwesome name='car' style={{color: '#FC5B3F', fontSize: '20px'}}/>Order by 2PM for Same day delivery</div>
            <div><FontAwesome name='thumbs-up' style={{color: '#6CB63E', fontSize: '20px'}}/>100% Satisfaction Guaranteed</div>
        </div>
    );
}

export default Advantages;