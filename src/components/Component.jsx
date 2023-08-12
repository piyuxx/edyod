import { useState } from 'react'
import Rows from './Rows.jsx'
import './Component.css'
import time from '../assets/t.svg'
import razorpay from '../assets/card.svg'

const Component = () => {
  const [active, setActive] = useState('p2');
  let totalFee = 18500;
  const [amount, setAmount] = useState('18500');
  const gst = 0.18; // 18% GST

  const subtotal = Number(amount.substring(1));
  const gstAmount = subtotal * gst;
  const totalPrice = subtotal + gstAmount;


  return (
    <div className="right-box">
      <div className="entry-step">

        <div className="entry-step1">
          <button>1</button>
          <p>Sign Up</p>
        </div>
        <div className="entry-step2">
          <button>2</button>
          <p>Subscribe</p>
        </div>

      </div>

      <div className="right-box-head">
        <h3>Select your subscription plan</h3>
      </div>

      <div className="subs-plan">
        <Rows id='a1' texxt='12 Months Subscription' firstPrice='₹8' secondPrice='₹99' rec='false' active={active} setActive={setActive} amount={amount} setAmount={setAmount} expired='true' />
        <Rows id='a2' texxt='12 Months Subscription' firstPrice='₹15' secondPrice='₹179' rec='true' active={active} setActive={setActive} amount={amount} setAmount={setAmount} expired='false' />
        <Rows id='a3' texxt='6 Months Subscription' firstPrice='₹25' secondPrice='₹149' rec='false' active={active} setActive={setActive} amount={amount} setAmount={setAmount} expired='false' />
        <Rows id='a4' texxt='3 Months Subscription' firstPrice='₹33' secondPrice='₹99' rec='false' active={active} setActive={setActive} amount={amount} setAmount={setAmount} expired='false' />
      </div>


      <div className='total-div'>
        <div class="line-component border-bottom"></div>
        <div className="sub-fee-container">

          <p className='sub-head'>Subscription Fee</p>
          <p className="sub-fee">₹{totalFee}</p>
        </div>
        <div className="ltd-time-container">
          <div className="ltd-title">
            <p className="ltd-head">Limited time offer</p>
            <div className="ltd-subhead">
              <img src={time} alt="ltd-time" stroke='#000' />
              <p className="ltd-subhead-txt"><span></span> Offer valid till 25th March 2023 </p>
            </div>
          </div>

          <div className='ltd-price'>
            <p className='ltd-price-p'>-₹ {totalFee - Number(amount.substring(1))}</p>
          </div>
        </div>
        <div className="total-fee-container">
          <p className='total-head'><strong>Total </strong>(Incl. of 18% GST)</p>
          <p className="total-fee">{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className='button'>
        <button className='cancel-button'>Cancel</button>
        <button className='proceed-button'>Proceed to Pay</button>

      </div>
      <div className='image'>
        <img alt="" src={razorpay}></img>
      </div>



    </div>
  )
}

export default Component
