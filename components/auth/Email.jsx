import React, { useState } from "react";
import BtnLogin from "./BtnLogin";

const Email = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState("");

    return (
        <BtnLogin
            provider={providers.email}
            bgColor='#22b05b'
            csrfToken={csrfToken}
            options={{ email }}
        >
            <div className='form-floating'>
                <input
                    type='email'
                    id='emailOnly'
                    name='emailOnly'
                    className='form-control'
                    placeholder='email@example.com'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='emailOnly'>Email address</label>
            </div>
        </BtnLogin>
    );
};

export default Email;
