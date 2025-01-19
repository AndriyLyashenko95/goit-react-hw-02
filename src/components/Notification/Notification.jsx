import React from 'react';
import './Notification.module.css'

const Notification = ({ message }) => (
  <div className="Notification">
    <p>{message}</p>
  </div>
);

export default Notification;