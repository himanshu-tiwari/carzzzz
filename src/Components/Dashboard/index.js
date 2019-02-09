import React from 'react';
import Navbar from './Navbar';
import './index.scss';

const Dashboard = (props) => {
    if (!props.children) props.history.push('/');

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