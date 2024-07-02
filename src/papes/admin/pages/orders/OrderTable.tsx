import React, { useState } from 'react';
import './OrderTable.scss';
import { useTranslation } from 'react-i18next';

const OrderTable: React.FC = () => {
  const {t} = useTranslation();

  const [selectedStatus, setSelectedStatus] = useState('');

  const listOrder = [
    {
      id: 1,
      serialNumber: 1,
      userId: 1,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "WAITING",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
    {
      id: 2,
      serialNumber: 2,
      userId: 2,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "CONFIRM",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
    {
      id: 3,
      serialNumber: 3,
      userId: 3,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "DELIVERY",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
    {
      id: 4,
      serialNumber: 4,
      userId: 4,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "SUCCESS",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
    {
      id: 5,
      serialNumber: 5,
      userId: 5,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "CANCEL",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
    {
      id: 6,
      serialNumber: 6,
      userId: 6,
      image: "https://via.placeholder.com/50",
      totalPrice: 567,
      status: "DENIED",
      note: "hàng dễ vỡ",
      receiveName: "...",
      receiveAddress: "...",
      receivePhone: "...",
      createdAt: "16/06/2024",
      receivedAt: "20/06/2024",
    },
  ];

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const filteredOrders = selectedStatus
    ? listOrder.filter(order => order.status.toUpperCase() === selectedStatus.toUpperCase())
    : listOrder;
  return (
    <div className="order-table-container">
      <div className="header">
        <h1>{t("orderTable")}</h1>
        <div className="actions">
        <select className="choice-button" onChange={handleStatusChange} value={selectedStatus}>
            <option value="">{t("allStatuses")}</option>
            <option value="WAITING">{t("waiting")}</option>
            <option value="CONFIRM">{t("confirm")}</option>
            <option value="DELIVERY">{t("delivery")}</option>
            <option value="SUCCESS">{t("success")}</option>
            <option value="CANCEL">{t("cancel")}</option>
            <option value="DENIED">{t("denied")}</option>
          </select>
          <div className="search-box">
            <input type="text" placeholder={t("placeholderOrderName")} />
            <button>{t("search")}</button>
          </div>
        </div>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("serialNumber")}</th>
            <th>{t("userId")}</th>
            <th>{t("image")}</th>
            <th>{t("totalPrice")}</th>
            <th>{t("status")}</th>
            <th>{t("note")}</th>
            <th>{t("receiveName")}</th>
            <th>{t("receiveAddress")}</th>
            <th>{t("receivePhone")}</th>
            <th>{t("createAt")}</th>
            <th>{t("receivedAt")}</th>
            <th colSpan={2}>{t("action")}</th>
          </tr>
        </thead>
        <tbody>
  {filteredOrders.map((order) => (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.serialNumber}</td>
      <td>{order.userId}</td>
      <td><img src={order.image} alt={`Product ${order.id}`} /></td>
      <td>{order.totalPrice}</td>
      <td>{order.status}</td>
      <td>{order.note}</td>
      <td>{order.receiveName}</td>
      <td>{order.receiveAddress}</td>
      <td>{order.receivePhone}</td>
      <td>{order.createdAt}</td>
      <td>{order.receivedAt}</td>
      <td>
        <button className="detail-button">{t("detail")}</button>
      </td>
      <td>
        <button className="change-button">{t("changeStatus")}</button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">{t("previous")}</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">4</button>
        <button className="pagination-button">{t("next")}</button>
      </div>
    </div>
  );
};

export default OrderTable;
