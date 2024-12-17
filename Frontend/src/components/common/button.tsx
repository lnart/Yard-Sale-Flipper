import { useState } from "react";
import { Button } from "@mui/material";

function ButtonComponent({text, onClick, color}){

      const [isPressed, setIsPressed] = useState(false)
      const handleClick = () => {
        setIsPressed(true)
        setTimeout(() => setIsPressed(false), 200);
        onClick?.();
    }
    return (
        <Button
        variant="contained"
        color={color}
        onClick={handleClick}
        disabled={isPressed}
        >
        {text}
        </Button>
    )
}

export default ButtonComponent