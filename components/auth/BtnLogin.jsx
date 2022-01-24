import React, { useState } from "react";
import { signIn } from "next-auth/client";
import Loading from "../loading";

const BtnLogin = ({
    children,
    provider,
    bgColor,
    txtColor,
    csrfToken,
    options,
}) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await signIn(provider.id, options);
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='hidden' name={csrfToken} defaultValue={csrfToken} />

            {children}

            <button
                type='submit'
                className='btn btn-block w-100 my-2 py-3 m-auto'
                style={{ background: `${bgColor}`, color: `${txtColor}` }}
            >
                Sign in with {provider.name}
            </button>

            {loading && <Loading />}
        </form>
    );
};

BtnLogin.defaultProps = {
    txtColor: "#eee",
};
export default BtnLogin;
