import React from 'react';
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, componentStack, resetErrorBoundary }: any) {
  return (
    <div className='error'>
      <div className='card' style={{backgroundColor:'#dcdcdc'}}>
        <div className="card-header">
          <h2>Something goes <u>WRONG</u></h2>
        </div>
        <div className="card-body">
          <h3 id='h1-error'>F5 or manually REFRESH with the button below</h3>
          <p>Message Error Obtained: {error.toString()}</p>
          <p>Component stack:</p>
          <pre>{componentStack}</pre>
          <button id="button-error" onClick={resetErrorBoundary}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
