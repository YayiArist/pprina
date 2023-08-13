import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const isHome = location.pathname === '/';

  return (
    <header>
      <nav>
        <ul>
          
          {isAuthenticated ? (
            <>
             {isHome && (
                <li>
                  <Link to="/form">Nuevo Producto</Link>
                </li>
              )}
              {!isHome && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              <li>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </li>
             
            </>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;