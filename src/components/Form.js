import React, { useEffect, useState } from "react";
import "../style/form.scss";

const Form = ({ categories, products, addEditProduct, selectedProduct }) => {
  const [categoryId, setCatergoryId] = useState(null);
  const [productName, setProductName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitsInStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: products.length + 1,
      categoryId: Number(categoryId),
      productName: productName,
      quantityPerUnit: quantityPerUnit,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock,
      isDeleted: false,
    };

    addEditProduct(newProduct);

    setCatergoryId(null);
    setProductName("");
    setQuantityPerUnit("");
    setUnitPrice("");
    setUnitsInStock("");
  };

  useEffect(() => {
    if (selectedProduct) {
      setCatergoryId(selectedProduct.categoryId);
      setProductName(selectedProduct.productName);
      setQuantityPerUnit(selectedProduct.quantityPerUnit);
      setUnitPrice(selectedProduct.unitPrice);
      setUnitsInStock(selectedProduct.unitsInStock);
    }
  }, [selectedProduct]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>{selectedProduct ? "Edit Product" : "Add Product"}</h3>
        <select
          value={categoryId}
          onChange={(e) => setCatergoryId(e.target.value)}
          required
          placeholder="Kitap Kategorisi:"
          id="kategori"
        >
          <option selected>Select Category</option>
          {categories.map((category) => (
            <option value={category.id}>{category.categoryName}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Product Name"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Quantity Per Unit"
          id="quantityPerUnit"
          value={quantityPerUnit}
          onChange={(e) => setQuantityPerUnit(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Unit Price($)"
          id="unitPrice"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          required
        />
        <input
          type="text"
          id="unitsInStock"
          placeholder="Units In Stock"
          onChange={(e) => setUnitsInStock(e.target.value)}
          value={unitsInStock}
          required
        />

        <input className="editAdd" type="submit" value={selectedProduct ? "Edit" : "Add"}/>
      </form>
    </div>
  );
};

export default Form;
