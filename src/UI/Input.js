import { ClassNames } from "@emotion/react";
import { FormControl, FormGroup, FormLabel } from "@mui/material";

const Input = props => {

    return (
        <FormGroup className={ClassNames.input}>
            <FormLabel htmlFor={props.input.id}>
                {props.label}
            </FormLabel>
            <FormControl 
                {
                    ...props.input
                }
            />
        </FormGroup>
    );

};

export default Input;