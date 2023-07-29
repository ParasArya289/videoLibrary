import { Sidebar } from "../../Sidebar/Sidebar";
import "./LayoutTemplate.css";

export const LayoutTemplate = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">{children}</div>
    </div>
  );
};
