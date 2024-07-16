import React from "react";
import LandingPage from "@/components/landingPage";
import Directions from "@/components/directions";
import Command from "@/components/command";
import Mobile_Development from "@/components/services/mobile_development";
import ERP_Systems from "@/components/services/erp_systems";
import Ux_Ui_Design from "@/components/services/ux_ui_design";
import IT_Consulting from "@/components/services/it_consulting";
import Optimization_Infrastructure from "@/components/services/optimization_infrastructure";
import Tools from "@/components/tools";
import Clients from "@/components/clients";
import Delever from "@/components/portfolio/delever";
import Smsuz from "@/components/portfolio/smsuz";
import Goodzone from "@/components/portfolio/goodzone";
import Iman from "@/components/portfolio/iman";
import Contact_Us from "@/components/contact_us";
import Footer from "@/components/footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <LandingPage />
      <Directions />
      <Command />
      <Mobile_Development />
      <ERP_Systems />
      <Ux_Ui_Design />
      <IT_Consulting />
      <Optimization_Infrastructure />
      <Tools />
      <Clients />
      <Delever />
      <Smsuz />
      <Goodzone />
      <Iman />
      <Contact_Us />
      <Footer />
    </>
  );
};

export default Home;
