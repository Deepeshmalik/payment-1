import React from 'react';

export const DesktopView = () => {
  return (
    <div className="desktop-view">
      <div className="amount-order">
        <p>Amount: Rs 1.00</p>
        <p>Order ID: 1720160323431</p>
      </div>
      <div className="upi-id">
        <label>Please enter your UPI ID</label>
        <input type="text" placeholder="Enter your UPI ID" />
        <button>Verify and Pay</button>
      </div>
    </div>
  )}
