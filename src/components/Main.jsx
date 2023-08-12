import React from 'react';
import "./Main.css";
import a from '../assets/a.svg';
import b from '../assets/b.svg';
import c from '../assets/c.svg';
import d from '../assets/d.svg';
import e from '../assets/e.svg';
import Component from './Component.jsx';

const withItemsRendering = (Component) => {
  const items = [
    { name: a, color: "100+", text: "Job relevant cources", boolean: true },
    { name: b, color: "20000+", text: "Hours of content", boolean: true },
    { name: c, color: "Exclusive", text: "Webinar access", boolean: true },
    { name: d, text: "Scolarship worth", color: "₹95,400", boolean: false },
    { name: e, color: "Ad Free", text: "learning experience", boolean: true }
  ];

  return () => (
    <Component items={items} />
  );
};

const Main = ({ items }) => {
  return (
    <div className='home'>
      <div className="left" >
        <div className="heading">
          <h1>Access curated courses worth <br />
            <span style={{ fontSize: '40px' }}> ₹&nbsp;
              <span
                style={{ textDecoration: 'line-through', textDecorationColor: 'red', fontFamily: 'Roboto' }}
              >
                18,500
              </span>
            </span>
            &nbsp;at just
            <span style={{ fontSize: '40px', color: '#0096FF', fontFamily: 'Roboto' }}> ₹99 </span>
            per year!
          </h1>
          <div>
            <div style={{ paddingTop: '20px' }}>
              {items.map((item, index) => (
                <div className='flexy' key={index}>
                  <img className='images' alt="" src={item.name}></img>
                  <div>


                    {item.boolean ? (
                      <p>{item.text} <span className='high'>{item.color}</span></p>
                    ) : (
                      <p><span className='high'>{item.color}</span> {item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="right-side">
        <Component />
      </div>
    </div>
  );
};

const HomeWithItems = withItemsRendering(Main);

export default HomeWithItems;

