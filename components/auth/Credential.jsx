import React, { useState } from "react";
import BtnLogin from "./BtnLogin";

const Credential = ({ providers, csrfToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <BtnLogin
            provider={providers.credentials}
            bgColor='purple'
            csrfToken={csrfToken}
            options={{ redirect: false, email, password }}
        >
            <div className='form-floating'>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control'
                    placeholder='email@example.com'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email'>Email address</label>
            </div>

            <div className='form-floating'>
                <input
                    type='password'
                    id='password'
                    className='form-control'
                    placeholder='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
            </div>
        </BtnLogin>
    );
};

export default Credential;
