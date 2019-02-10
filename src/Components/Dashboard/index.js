import React from 'react';
import Navbar from './Navbar';
import './index.scss';
import { Redirect } from 'react-router-dom';

const Dashboard = (props) => {
    if (!props.children) return <Redirect to='/' />;

    return(
        <div className="dashboard">
            <Navbar />
            <div className="children">
                { props.children }
            </div>
        </div>
    );
};

export default Dashboard;