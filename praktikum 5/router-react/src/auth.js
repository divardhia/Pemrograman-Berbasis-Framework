import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

  // Pada aplikasi ini memiliki 3 halaman: public page, private page, dan halaman login,
  // untuk masuk ke private page, Anda harus login terlebih dahulu.

  // Pertama, klik public page. Kemudian, kunjungi private page.
  // karena anda belum login, jadi Anda diarahkan ke halaman login,
  // Setelah login, Anda akan diarahkan kembali ke private page.

  // Perhatikan perubahan setiap URL. Jika Anda mengklik tombol kembali,
  // apakah anda kembali ke halaman login? Tidak, karena anda sudah login.
  // Cobalah, maka anda akan kembali ke halaman yang anda kunjungi sebelum login, yaitu public page.

  export default function AuthExample() {
      return(
          <Router>
              <div>
                  <AuthButton />

                  <ul>
                      <li>
                        <Link to="/public">Public Page</Link>
                      </li>
                      <li>
                        <Link to="/private">Private Page</Link>
                      </li>
                  </ul>

                  <Switch>
                      <Route path="/public">
                          <PublicPage />
                      </Route>
                      <Route path="/login">
                          <LoginPage />
                      </Route>
                      <PrivateRoute path="/private">
                          <ProtectedPage />
                      </PrivateRoute>
                  </Switch>
              </div>
          </Router>
      );
  }

  const fakeAuth = {
      isAuthenticated: false,
      authenticate(cb) {
          fakeAuth.isAuthenticated = true;
          setTimeout(cb, 100) // fake async
      },
      signout(cb) {
          fakeAuth.isAuthenticated = false;
          setTimeout(cb, 100);
      }
  };

  function AuthButton() {
      let history = useHistory();

      return fakeAuth.isAuthenticated ? (
          <p>
              Welcome!{" "}
              <button 
              onClick={() => {
                  fakeAuth.signout(() => history.push("/"))
              }}
              >
                  Sign Out
              </button>
          </p>
      ) : (
          <p>You are not logged in.</p>
      );
  }

  // Pembungkus untuk <Route> yang mengarahkan ke login
  // tampilan jika Anda belum terkonfirmasi.

  function PrivateRoute({ children, ...rest}) {
      return (
          <Route
            {...rest}
            render={({location}) => 
                fakeAuth.isAuthenticated ? (
                    <div>
                        {children}
                        <AuthButton/>
                    </div>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
          ></Route>
      );
  }

  function PublicPage() {
      return <h3>Public</h3>;
  }

  function ProtectedPage() {
      return <h3>Private</h3>;
  }

  function LoginPage() {
      let history = useHistory();
      let location = useLocation();

      let {from} = location.state || {from: {pathname: "/"}};
      let login = () => {
          fakeAuth.authenticate(() => {
              history.replace(from);
          });
      };

      return (
          <div>
              <p>You must log in to view the page at {from.pathname}</p>
              <button onClick={login}>Log in</button>
          </div>
      );
  }