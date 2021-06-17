import React, { useContext } from "react";

import AdminShipmentByPlane from "../components/admin/ShipmentByPlane";
import EmployeeShipmentByPlane from "../components/employee/ShipmentByPlane";
import CustomerShipmentByPlane from "../components/customer/ShipmentByPlane";
import { AuthContext } from "../../shared/context/auth-context";
const ByAirView = () => {
  const auth = useContext(AuthContext);

  if (auth.role === "admin") return <AdminShipmentByPlane />;
  else if (auth.role === "employee") return <EmployeeShipmentByPlane />;
  else if (auth.role === "customer") return <CustomerShipmentByPlane/>;
  else return auth.logout();
};

export default ByAirView;
