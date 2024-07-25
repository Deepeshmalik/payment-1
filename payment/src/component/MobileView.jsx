import React from 'react'

export const MobileView = () => {
  return (
    <div className="qr-view">
      <div className="amount-order">
        <p>Amount: Rs 1.00</p>
        <p>Order ID: 1720160323431</p>
      </div>
      <div className="qr-code">
        <img src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" alt="QR Code" />
      </div>
      <p><b>or seelct UPI app to approve <br/>your payment</b></p>
      <div className="payment-options">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjJUlxW_cbjk2QL26jHguNloSs0UZI3JCTw&s" alt="PhonePay" />
        <img src="https://toppng.com/uploads/preview/paytm-logo-vector-11573850407xnvt10xxcf.png" alt="" />
        <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-pay-vector-PNG.png" alt="Google Pay" />
      </div>
    </div>
  )
}
