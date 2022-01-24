import React from "react";
import BtnLogin from "./BtnLogin";

const OAuth = ({ providers, csrfToken }) => {
    return (
        <div>
            <BtnLogin
                provider={providers.google}
                bgColor='#4285F4'
                csrfToken={csrfToken}
            />

            <BtnLogin
                provider={providers.github}
                bgColor='#444'
                csrfToken={csrfToken}
            />
        </div>
    );
};

export default OAuth;
