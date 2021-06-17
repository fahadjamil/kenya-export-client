import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import PublicRoute from "./shared/routes/PublicRoute.jsx";
import PrivateRoute from "./shared/routes/PrivateRoute.jsx";
import Auth from "./website/views/Auth";
import Home from "./website/views/Home";
import About from "./website/views/About";
import Services from "./website/views/Services";
import Testimonials from "./website/views/Testimonials";
import FAQs from "./website/views/FAQs";
import Contact from "./website/views/Contact";
import DashboardView from "./portal/views/DashboardView";
import ProfileView from "./portal/views/ProfileView";
import ByAirView from "./portal/views/ByAirView";
import ByShipView from "./portal/views/ByShipView";
import BuynShip from "./portal/views/BuynShip";
import RevenueView from "./portal/views/RevenueView";
import CustomersList from "./portal/views/CustomersList";
import VerifyEmail from "./website/views/VerifyEmail.js";
import ShipmentForm from "./portal/views/ShipmentForm";
import ShipmentListView from "./portal/views/ShipmentListView";
import ShipmentDetail from "./portal/components/customer/ShipmentDetail.js";
import Employees from "./portal/components/admin/Employees.js";
import CollectionUpdateView from "./portal/components/admin/CollectionUpdateView.js";

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact>
        <Home />
      </PublicRoute>
      <PublicRoute path="/about">
        <About />
      </PublicRoute>
      <PublicRoute path="/services">
        <Services />
      </PublicRoute>
      <PublicRoute path="/testimonials">
        <Testimonials />
      </PublicRoute>
      <PublicRoute path="/faqs">
        <FAQs />
      </PublicRoute>
      <PublicRoute path="/contact">
        <Contact />
      </PublicRoute>
      <PublicRoute path="/auth">
        <Auth />
      </PublicRoute>
      <PublicRoute path="/verify-email/:route/:email">
        <VerifyEmail />
      </PublicRoute>
      <PrivateRoute path="/dashboard">
        <DashboardView />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <ProfileView />
      </PrivateRoute>
      <PrivateRoute path="/by-air">
        <ByAirView />
      </PrivateRoute>
      <PrivateRoute path="/by-ship">
        <ShipmentListView />
      </PrivateRoute>
      <PrivateRoute path="/buy-n-ship">
        <BuynShip />
      </PrivateRoute>
      <PrivateRoute path="/revenue">
        <RevenueView />
      </PrivateRoute>
      <PrivateRoute path="/customers">
        <CustomersList />
      </PrivateRoute>
      <PrivateRoute path="/shipment-form">
        <ShipmentForm />
      </PrivateRoute>
      <PrivateRoute path="/employees">
        <Employees/>
      </PrivateRoute>
      <PrivateRoute path="/collection-update-view">
        <CollectionUpdateView/>
      </PrivateRoute>

      {/* <PrivateRoute path="/shipment-list">
        <ShipmentListView />
      </PrivateRoute> */}
      <PrivateRoute path="/shipment_detail/:id">
        <ShipmentDetail />
      </PrivateRoute>
      <Redirect to="/" exact />
    </Switch>
  </Router>
);

export default AppRouter;
