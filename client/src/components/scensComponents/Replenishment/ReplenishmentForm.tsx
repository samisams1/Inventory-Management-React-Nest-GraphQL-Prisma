import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { useQuery } from '@apollo/client';
import { PRODUCT_QUERY } from '../../../graphql/Product';
import { productInterface } from '../../../interface/interfaces';

interface Product {
  productId: string;
  quantity: string;
}

interface ReplenishmentFormProps {
  onSubmit: (products: Product[]) => void;
}

const ReplenishmentForm: React.FC<ReplenishmentFormProps> = ({ onSubmit }) => {
  const [products, setProducts] = useState<Product[]>([{ productId: '', quantity: '' }]);
  const [selectedProducts, setSelectedProducts] = useState([]);


  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) return <p>Loading...</p>
	if (error) return <p>{error.message}</p>
    const ProductList = data.products.map((row:productInterface)=>(
      [row.id,row.barcode,row.image,row.name,row.price,row.description]
  ))

  const handleProductNameChange = (index: number, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index].productId = value;
    setProducts(updatedProducts);
  };
  const handleQuantityChange = (index: number, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { productId: '', quantity: '' }]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form inputs
    if (products.some((product) => !product.productId || product.productId === '' || product.quantity === null)) {
      return;
    }
  
    // Call the onSubmit callback with form data
    onSubmit(products);
  
    // Clear form inputs
    setProducts([{ productId: '', quantity: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
    {products.map((product, index) => (
      <Grid container key={index} spacing={2} style={{ marginTop: '10px' }}>
        <Grid item xs={12} sm={4}>
          <Select
            label="Product Name"
            value={product.productId}
            onChange={(e) => handleProductNameChange(index, e.target.value)}
            fullWidth
          >
             <MenuItem disabled value="">
                Select a product
              </MenuItem>
              {data.products.map((product: productInterface) => (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}
                </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Quantity"
            type="number"
            value={product.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleRemoveProduct(index)}
            sx={{ mt: 1 }}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    ))}

    <Grid item xs={12} sm={4}>
      <Button
        variant="outlined"
        onClick={handleAddProduct}
        sx={{ mt: 2, mr: 2 }} // Add margin to top and right
      >
        Add Product
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }} // Add margin to top
      >
        Submit
      </Button>
    </Grid>
  </form>
  );
};
export default ReplenishmentForm;