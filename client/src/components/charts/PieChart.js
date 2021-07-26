import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [series, setSeries] = useState([42, 26, 15]);

  const [options, setOptions] = useState({
    labels: ["Product A", "Product B", "Product C"],
    options: {
      pie: {
        donut: {
          size: "75%",
        },
      },

      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        floating: false,
      },
      colors: ["#0371e3", "#1cbb8c", "#eeb902"],
    },
  });

  return (
    <div className="chart pie-chart">
      <h5>Trending Products</h5>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height="150"
      />
    </div>
  );
};

export default PieChart;
