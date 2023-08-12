import { useState, useEffect } from 'react'
import './Rows.css'


const Rows = (props) => {

  const [selected, setSelected] = useState('false');
  const expired = props.expired;

  useEffect(() => {
    const handlePinLoad = () => {
      if (props.active === props.id) {
        setSelected('true');
        props.setAmount(props.secondPrice);
      }
      else {
        setSelected('false');
      }
    }
    handlePinLoad();
  }, [selected, props.active, props]);

  const handleClick = () => {
    if (props.id !== 'a1')
      props.setActive(props.id);

  }

  const tt = (<div className={expired === 'true' ? "expired" : "recommended"}><p>{expired === 'true' ? "Offer Expired" : "Recommended"}</p></div>);
  return (
    <div onClick={handleClick}>
      <div className="subs-container" style={expired === 'true' ? { borderColor: "var(--text3)", background: "#E7E7E7" } : selected === 'true' ? { borderColor: "var(--success)", background: "#D7EDDD" } : { borderColor: "var(--text3)", background: "var(--text4)" }}>
        {props.rec === 'true' || props.expired === 'true' ? tt : ""}
        <div className="subs-left-container">
          <div className="bullet" style={expired === 'true' ? { background: "var(--text3)", outlineColor: "var(--text3)" } : selected === 'true' ? { background: "var(--success)", outlineColor: "var(--success)" } : { background: "var(--text4)", outlineColor: "var(--text3)" }}>

          </div>
          <div className="months" style={expired === 'true' ? { color: "#BEBEBE" } : {}}>
            {props.texxt}
          </div>
        </div>
        <div className="subs-right-container" >
          <div className="total-price">
            <p className="total" style={expired === 'true' ? { color: "#BEBEBE" } : {}}>Total</p>
            <p className="price" style={expired === 'true' ? { color: "#BEBEBE" } : {}}>{props.secondPrice}</p>
          </div>
          <div className="per-month">
            <p className="m-price" style={expired === 'true' ? { color: "#BEBEBE" } : {}}>{props.firstPrice}</p>
            <p className="month">/mo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rows