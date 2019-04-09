import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Navigtion = () => (
    <div>
        <Link to="/dashboard">
            <h1>My Application</h1>
        </Link>
    </div>
);

export const ConnectedNavigation = connect(state => state)(Navigtion);