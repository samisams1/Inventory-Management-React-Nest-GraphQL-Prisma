import React, { useContext } from 'react';
import { UserContext } from '../../auth/UserContext';
import Spinner from '../../Spinner';
import './print.css';

interface SaleDetails {
  saleId: string;
  sellerId: number;
  net: number;
  vat: number;
  grossAmount: number;
  saleDetail: Product[];
}

interface Product {
  productId: string;
  quantity: string;
  price: number;
  amount: number;
}

interface PrintSaleProps {
  input: SaleDetails;
}

const PrintSale: React.FC<PrintSaleProps> = ({ input }) => {
  const handlePrint = () => {
    window.print();
  };

  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Spinner />;
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <button className="print-button" onClick={handlePrint}>
        Print
      </button>
      <div className="bill-container">
        <h2 className="bill-heading">Welcome Seblewonglae Engneering</h2>
        <div className="address text-center">
          <p>Phone +251973316377</p>
          <p>Addis Ababa Ethiopia</p>
          <p>Hayahulet branch</p>
        </div>
        <div className="seller-info">
          <p className="seller-label">Seller Name: {currentUser.firstName + ' ' + currentUser.lastName}</p>
        </div>
        <table className="bill-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {input.saleDetail.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.price + ' Birr'}</td>
                <td>{product.quantity}</td>
                <td>{product.amount + ' Birr'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bill-summary text-center">
          <p className="summary-item">
            <span className="summary-label">Net Amount:</span> {input.net} Birr
          </p>
          <p className="summary-item">
            <span className="summary-label">VAT:</span> {input.vat} Birr
          </p>
          <p className="summary-item">
            <span className="summary-label">Gross Amount:</span> {input.grossAmount} Birr
          </p>
          <p className="summary-item">
            <span className="summary-label">Date:</span> {currentDate}
          </p>
          <h5 className="text-center thank-you-message">Thank you for your business!</h5>
        </div>
      </div>

      <style>
        {`
          @media print {
            .print-button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PrintSale;