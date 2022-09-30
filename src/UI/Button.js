import { Button } from "@mui/material";


const Button = props => {

    return (
        <Button 
            varaint={props.variant}
            color={props.color}
        >
            {props.children}
        </Button>
    );

};

export default Button;