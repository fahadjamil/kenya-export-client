import React, { useContext } from "react";
import AdminShipmentRecordList from '../components/admin/ShipmentRecordList';
import CustomerShipmentRecordList from '../components/customer/ShipmentRecordList';
import { AuthContext } from "../../shared/context/auth-context";

const ShipmentList = () => {
  const auth = useContext(AuthContext);

  if (auth.role === "admin") return  <AdminShipmentRecordList />;
  else if (auth.role === "employee") return <p>Hello</p>;
  else if (auth.role === "customer") return <CustomerShipmentRecordList />;
  else return auth.logout();
};

export default ShipmentList;
