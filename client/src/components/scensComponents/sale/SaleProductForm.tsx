import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { useQuery } from '@apollo/client';
import { PRODUCT_QUERY } from '../../../graphql/Product';
import { productInterface } from '../../../interface/interfaces';

interface Product {
  productId: string;
  name:string;
  quantity: string;
  price: number;
  amount:number;

}

interface ReplenishmentFormProps {
  onSubmit: (products: Product[]) => void;
}

const SaleProductForm: React.FC<ReplenishmentFormProps> = ({ onSubmit }) => {
  const [products, setProducts] = useState<Product[]>([{ name:'',productId: '', price: 0, quantity: '',amount:0 }]);
  const { loading, error, data } = useQuery(PRODUCT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const handleProductNameChange = (index: number, value: string) => {
    const selectedProduct = data.products.find((product: productInterface) => product.id === value);
    if (selectedProduct) {
      const updatedProducts = [...products];
      updatedProducts[index].productId = value;
      updatedProducts[index].price = selectedProduct.price;
      updatedProducts[index].name = selectedProduct,name
      setProducts(updatedProducts);
    }
  };

  const handleQuantityChange = (index: number, value: string) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, {name:'', productId: '', price: 0, quantity: '',amount:0 }]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  const calculateGrossAmount = () => {
    return products.reduce((total, product) => {
      const quantity = parseFloat(product.quantity);
      const price = product.price;
      return total + quantity * price;
    }, 0);
  };
  const calculateVAT = () => {
    const grossAmount = calculateGrossAmount();
    return grossAmount * 0.15; // Assuming 15% VAT
  };
  const calculateNetAmount = () => {
    const grossAmount = calculateGrossAmount();
    const vat = calculateVAT();
    return grossAmount + vat;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form inputs
    if (products.some((product) => product.productId === '' || product.quantity === '')) {
      return;
    }

    // Call the onSubmit callback with form data
    onSubmit(products);

    // Clear form inputs
    setProducts([{name:'', productId: '', price: 0, quantity: '',amount:0 }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {products.map((product, index) => (
        <Grid container key={index} spacing={2} style={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={2}>
            <TextField
              label="Price"
              type="number"
              value={product.price}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Quantity"
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
         <TextField
              label="Amount"
              type="number"
              value={product.price * parseFloat(product.quantity)}
              fullWidth
              disabled
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
    <Grid  spacing={2} style={{ marginTop: '10px', justifyContent: 'flex-end' }}>
  <Grid item xs={12} sm={4} style={{ textAlign: 'right' }}>
    <TextField
      label="Gross Amount"
      type="number"
      value={calculateGrossAmount().toString()}
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={4} style={{ marginTop: '10px', textAlign: 'right' }}>
    <TextField
      label="VAT 15%"
      type="number"
      value={calculateVAT().toString()}
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={4} style={{ marginTop: '10px', textAlign: 'right' }}>
    <TextField
      label="Net Amount"
      type="number"
      value={calculateNetAmount().toString()}
      fullWidth
    />
  </Grid>
</Grid>
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
          Create Sale
        </Button>
      </Grid>
    </form>
  );
};
export default SaleProductForm;