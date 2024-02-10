import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Layout } from './components/Layout';
import Catalog from './pages/Catalog/Catalog';
import * as pages from './pages';
import { useState } from 'react';

function App() {
  const [isProductPage, setIsProductPage] = useState(false);

  const handleProductPage = (param: boolean) => {
    setIsProductPage(param);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<pages.Company />} />
        <Route path="contacts" element={<pages.Contacts />} />
        <Route
          path="catalog"
          element={
            <Catalog
              isProductPage={isProductPage}
              handleProductPage={handleProductPage}
            />
          }
        >
          <Route
            path=":category"
            element={<pages.Category handleProductPage={handleProductPage} />}
          />
          <Route
            path=":category/:products"
            element={<pages.Products handleProductPage={handleProductPage} />}
          />
        </Route>
        <Route
          path="catalog/:category/:products/:product"
          element={<pages.Product handleProductPage={handleProductPage} />}
        />
        <Route path="usage" element={<pages.Usage />}>
          <Route path=":area" element={<pages.UsageArea />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
