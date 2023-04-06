import React, { Component } from 'react';
import Hero from './Hero';

class ErrorBoundary extends Component {
    render() {
        return (
            <div>
                <Hero heroName="Batman" />
                <Hero heroName="Superman" />
                <Hero heroName="Joker" />
            </div>
        );
    }
}

export default ErrorBoundary;
