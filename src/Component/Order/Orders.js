import React , { useEffect, useState } from 'react'
import "./Order.css";

import Order from './Order';
import { useStateValue } from '../../StateProvider';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
    
  
    }, [user])
  
      return (
          <div className='orders'>
              <h1>Your Orders</h1>
  
              <div className='orders_order'>
                  {orders?.map(order => (
                      <Order order={order} />
                  ))}
              </div>
          </div>
      )
  }
  
  export default Orders
