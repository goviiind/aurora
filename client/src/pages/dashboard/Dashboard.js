import React, { useEffect } from "react";
import { connect } from "react-redux";
import BarChart from "../../components/charts/BarChart";
import PieChart from "../../components/charts/PieChart";
import { getEmployee } from "../../redux/actions/empActions";
import "./dashboard.css";
import Form from "./EmpForm/Form";
import EmpTable from "./EmpTable/EmpTable";
const Dashboard = ({ empList, getEmployee }) => {
  useEffect(() => {
    getEmployee();
  }, [empList]);

  return (
    <div className="dashboard">
      <div className="dashboard-charts">
        <div>
          <BarChart />
        </div>

        <div className="dashboard-pie-chart">
          <PieChart />
          <PieChart />
        </div>
      </div>
      <div className="emp-form-div">
        <h3>Add Employees</h3>
        <Form />
      </div>
      <div className="emp-list-div">
        <h3>Employee List</h3>
        <EmpTable empList={empList} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    empList: state.emp,
  };
};

export default connect(mapStateToProps, { getEmployee })(Dashboard);
