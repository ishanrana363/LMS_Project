import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import PhoneNumberLogin from "../component/PhoneNumberLogin.jsx";

const PhoneLoginPage = () => {
    return (
        <div>
            <Layout>
                <PhoneNumberLogin/>
            </Layout>
        </div>
    );
};

export default PhoneLoginPage;