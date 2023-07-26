import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div className="overlay">
      <div className="quoteConatiner">
        <h1>Page Not Found</h1>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}

export default NotFound;
