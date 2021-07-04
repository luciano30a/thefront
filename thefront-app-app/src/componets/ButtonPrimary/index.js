import React from "react";
import Button from '@material-ui/core/Button';
import styles from './styles';


const ButtonPrimary = ( { title } ) =>
{
   const classes = styles();
   return <Button variant="contained" className={classes.button}>{title}</Button>;

    
};
export default ButtonPrimary;