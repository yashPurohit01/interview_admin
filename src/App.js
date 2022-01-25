
import { useEffect } from "react";

import {  AuthenticationAction } from "./ReduxStore/Actions/AuthenticationAction";
import { useDispatch, useSelector } from "react-redux";

import { useRoutes } from "react-router-dom";
import routes from "./Navigation/routes";


export default function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  const {authenticated , isLoading} = auth

  const routing = useRoutes(routes(authenticated , isLoading))
  useEffect(() => {
      dispatch(AuthenticationAction()) ;
      
  }, []);
  console.log(auth);
  return (
    <section className="App">
      {/*  <Navigation/> */}
      {
        routing
      }
    </section>
  );
}
