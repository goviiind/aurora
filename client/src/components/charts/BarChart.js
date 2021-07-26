import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./chart.css";

const BarChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    colors: ["#0371e3"],
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);

  return (
    <div className="chart bar-chart">
      <h3>Sales</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="280"
      />
    </div>
  );
};

export default BarChart;
