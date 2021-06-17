import React, { useContext } from "react";

import CustomerProfile from "../components/customer/CustomerProfile";
import { AuthContext } from "../../shared/context/auth-context";

const ProfileView = () => {
  const auth = useContext(AuthContext);

  return <CustomerProfile />;
  // if (auth.role === "admin") return <AdminDashboard />;
  // else if (auth.role === "employee") return <EmployeeDashboard />;
  // else if (auth.role === "customer") return <CustomerDashboard />;
  // else return auth.logout();
};

export default ProfileView;
