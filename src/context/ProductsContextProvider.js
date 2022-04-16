import React, { createContext, useState } from "react";
export const ProductsContext = createContext({});
function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: "",
      title: "",
      desc: "",
      discountPersentage: 0,
      price: "",
      gallery: [

      ],
    },
    {
      id: "",
      title: "",
      desc: "",
      discountPersentage: 0,
      price: "",
      gallery: [

      ],
    },
    {
      id: "",
      title: "",
      desc: "",
      discountPersentage: 0,
      price: "",
      gallery: [
          
      ],
    },
    {
      id: "",
      title: "",
      desc: "",
      discountPersentage: 0,
      price: "",
      gallery: [

      ],
    },
  ]);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
