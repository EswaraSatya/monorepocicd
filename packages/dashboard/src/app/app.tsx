import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const App1 = React.lazy(() => import('app1/Module'));
const App2 = React.lazy(() => import('app2/Module'));

export function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading.....</div>}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App1</Link>
          </li>
          <li>
            <Link to="/app2">App2</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<NxWelcome title="dashboard" />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
