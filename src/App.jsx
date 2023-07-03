import { ApolloProvider } from "@apollo/client";
import { Router } from "react-router-dom";

import { history, Routes } from "./router/index.jsx";
import client from "./graphql/apollo.js";
import { AuthProvider } from "./context/AuthContext/index.jsx";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
