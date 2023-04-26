import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>();
  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Shoes"]);
  }, [category]);

  return <div>Products</div>;
};

export default ProductList;
