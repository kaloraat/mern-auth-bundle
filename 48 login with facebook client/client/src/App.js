import React from 'react';
import Layout from './core/Layout';

const App = () => {
    return (
        <Layout>
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">React Node MongoDB Authentication Boilerplate</h1>
                <h2>MERN STACK</h2>
                <hr />
                <p className="lead">
                    MERN stack login register system with account activation, forgot password, reset password, login
                    with facebook and google as well as private and protected routes for authenticated user and users
                    with the role of admin.
                </p>
                <h4 className="p2">Bonus</h4>
                <p className="lead">Profile update & deployment to digital ocean cloud servers</p>
            </div>
        </Layout>
    );
};

export default App;
