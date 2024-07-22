import React, { useState } from 'react';
import {ToggleControl} from "@wordpress/components";

export const Setting = ({title = '', label = '', initial = false, onChange = value => {}, fields = []}) => {

    const [open, setOpen] = useState(initial);

    return <div>
        <h2>{title}</h2>
        <ToggleControl label={label} checked={open} onChange={() => {
            onChange(!open);
            setOpen(!open);
        }} />
        {open && <div>
            {fields}
        </div>}
    </div>;
}