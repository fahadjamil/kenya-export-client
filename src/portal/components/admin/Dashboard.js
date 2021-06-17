import React from "react";
import { RiShipFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

import BigGradientCard from "../shared/BigGradientCard";
import RevenueCard from "../shared/RevenueCard";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid admin-dashboard">
      <div className="row">
        <BigGradientCard
          color="purple"
          heading="Ship by Sea"
          icon={<RiShipFill size={20} />}
          today={"13"}
          tomorrow={"8"}
          complete={"19"}
          pending={"03"}
        />
        <BigGradientCard
          color="orange"
          heading="Ship by Air"
          icon={<FaPlaneDeparture size={20} />}
          today={"13"}
          tomorrow={"8"}
          complete={"19"}
          pending={"03"}
        />
        <BigGradientCard
          color="blue"
          heading="Buy n Ship"
          icon={<MdShoppingCart size={20} />}
          today={"13"}
          tomorrow={"8"}
          complete={"19"}
          pending={"03"}
        />
      </div>
      <div className="row">
        <RevenueCard duration="today" difference="profit" />
        <RevenueCard duration="week" difference="loss" />
        <RevenueCard duration="month" difference="neutral" />
        <RevenueCard duration="year" difference="profit" />
      </div>
    </div>
  );
};

export default Dashboard;
