import classes from './register.module.css'
import FontAwesome from 'react-fontawesome';

function Register() {
    return ( 
        <div className={classes.register}>
            <div className={classes.social_networks}>
                <div>
                    <FontAwesome name="facebook"/>
                </div>
                <div>
                    <FontAwesome name="twitter"/>
                </div>
                <div>
                    <FontAwesome name="instagram"/>
                </div>
            </div>
                <div className={classes.form}>
                    <div>Register</div>
                    <div>|</div>
                    <div>Login</div>
                </div>                      
        </div>
    );
}

export default Register;