import React, {useState} from 'react';
import {TextControl} from '@wordpress/components';
import {Setting} from "./Setting.jsx";

export const App = ({initial = {}}) => {

    const [state, setState] = useState(initial);

    const changeState = (key, value) => {
        const newState = {...state};
        newState[key] = value;
        setState(newState);
        saveState(newState);
    }
    return <div>
        <h1>Bastion settings</h1>
        <Setting title="Hide login" label="Active" fields={
            <TextControl
                __nextHasNoMarginBottom
                label="Login slug"
                onChange={(value) => changeState('hide_login_slug', value)}
                placeholder="Enter something here"
                value={state.hide_login_slug}
            />
        } onChange={(value) => changeState('hide_login', value)} initial={state.hide_login}/>
        <Setting title="Limit login" label="Active" onChange={(value) => changeState('limit_login', value)} initial={state.limit_login} />
    </div>;
}

const saveState = (state) => {
    state['nonce'] = bastionsettings.nonce;
    state['action'] = 'bastion_save_settings';

    fetch(bastionsettings.ajax_endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        },
        body:  new URLSearchParams(state)
    })
}