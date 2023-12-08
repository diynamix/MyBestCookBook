import { Component } from 'react';
import ErrorPage from './error-page/ErrorPage';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        // TODO logging
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />
        }

        return this.props.children;
    }
}
