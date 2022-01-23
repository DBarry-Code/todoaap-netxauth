import React from "react";
import { signIn } from "next-auth/client";
import { FaGithub } from "react-icons/fa";

const BtnLogin = ({ provider, bgColor, txtColor }) => {
    return (
        <div>
            <button
                className='btn btn-block w-100 my-2 py-3 m-auto'
                style={{ background: `${bgColor}`, color: `${txtColor}` }}
                onClick={() => signIn(provider.id)}
            >
                Sign in with {provider.name}
            </button>
        </div>
    );
};

BtnLogin.defaultProps = {
    txtColor: "#eee",
};
export default BtnLogin;
