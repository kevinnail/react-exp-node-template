import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Full-Stack Template</h1>
        <p>Welcome to your React + Node.js application</p>
      </header>

      <main className="home-content">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>API Testing</h3>
            <p>Test your backend API connection and endpoints</p>
            <Link to="/api-test" className="feature-link">
              Test API
            </Link>
          </div>

          <div className="feature-card">
            <h3>Authentication</h3>
            <p>User login, registration, and session management</p>
            <Link to="/auth/sign-in" className="feature-link">
              Go to Auth
            </Link>
          </div>

          <div className="feature-card">
            <h3>Dashboard</h3>
            <p>Main application dashboard (coming soon)</p>
            <div className="feature-link disabled">Dashboard</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
