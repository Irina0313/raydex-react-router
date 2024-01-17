import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Layout } from "./components/Layout";
import Catalog from "./pages/Catalog/Catalog";
import * as pages from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<pages.Company />} />
          <Route path="contacts" element={<pages.Contacts />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":category" element={<pages.Category />} />
            <Route path=":category/:products" element={<pages.Products />} />
          </Route>
          <Route
            path="catalog/:category/:products/:product"
            element={<pages.Product />}
          />
          <Route path="usage" element={<pages.Usage />}>
            <Route path=":area" element={<pages.UsageArea />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
