import React from "react";
import Chip from "@mui/material/Chip";

function CustomChip({ label, variant = "filled" }) {
    return <Chip label={label} variant={variant} />;
}

export default CustomChip;
