import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://hamfoundation-35c80.web.app/";
    navigate("https://hamfoundation-35c80.web.app/");
  }, []);

  return null;
};

export default Admin;
