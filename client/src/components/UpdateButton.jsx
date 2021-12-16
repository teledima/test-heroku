import React from "react";

const UpdateButton = React.forwardRef((props, ref) =>
    <div>
        <img ref={ref} onClick={props.handlerClick} src="./assets/update.png" alt="update" width="64px" height="64px"/>
    </div>
)

export default UpdateButton
