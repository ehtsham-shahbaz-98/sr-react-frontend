import React from "react";

import {
  DollarCircleOutlined,
  SmileOutlined,
  ShoppingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./DashStats.css";

const DashStats = () => {
  const DashData = {
    line_chart: [
      { month: "2021-08", value: 34 },
      { month: "2021-09", value: 236 },
      { month: "2021-10", value: 158 },
      { month: "2021-11", value: 184 },
      { month: "2021-12", value: 175 },
    ],
    donut: [
      { label: "ID 23", value: 104 },
      { label: "ID 4", value: 90 },
      { label: "ID 7", value: 74 },
      { label: "ID 31", value: 61 },
      { label: "ID 16", value: 123 },
      { label: "ID 5", value: 87 },
      { label: "ID 19", value: 118 },
      { label: "ID 17", value: 130 },
    ],
    donut_areawise: [
      { label: "Lahore", value: 33 },
      { label: "Sialkot", value: 1 },
      { label: "Pakpattan", value: 1 },
      { label: "Sukkur", value: 1 },
      { label: "Peer Mahal", value: 1 },
      { label: "Attock", value: 1 },
      { label: "Hamilton", value: 1 },
      { label: "raw", value: 1 },
      { label: "safas", value: 1 },
      { label: "Pattoki", value: 1 },
      { label: "SHEIKHUPURA", value: 1 },
    ],
    donut_caste: [
      { label: "Mughal", value: 10 },
      { label: "Rajput", value: 5 },
      { label: "Qureshi", value: 1 },
      { label: "Other", value: 2 },
      { label: "Ansari", value: 3 },
      { label: "Arain", value: 2 },
      { label: "Bokhari Syed", value: 1 },
      { label: "Sheikh", value: 7 },
      { label: "Hashmi", value: 1 },
      { label: "Jaat", value: 3 },
      { label: "Kazmi", value: 1 },
      { label: "Abedi", value: 4 },
      { label: "Afridi", value: 1 },
      { label: "Malik", value: 1 },
      { label: "Wahabi", value: 1 },
    ],
    donut_age: [
      { label: "Age 9", value: 1 },
      { label: "Age 27", value: 2 },
      { label: "Age 29", value: 2 },
      { label: "Age 26", value: 5 },
      { label: "Age 28", value: 3 },
      { label: "Age 24", value: 4 },
      { label: "Age 20", value: 6 },
      { label: "Age 22", value: 1 },
      { label: "Age 30", value: 3 },
      { label: "Age 35", value: 1 },
      { label: "Age 41", value: 1 },
      { label: "Age 23", value: 4 },
      { label: "Age 25", value: 4 },
      { label: "Age 66", value: 1 },
      { label: "Age 31", value: 2 },
      { label: "Age 37", value: 1 },
      { label: "Age 32", value: 2 },
    ],
    area: {
      data: [
        {
          month: "2021-08",
          4: 23,
          5: 39,
          7: 20,
          16: 61,
          17: 33,
          19: 36,
          23: 20,
          31: 14,
        },
        {
          month: "2021-09",
          4: 26,
          5: 26,
          7: 18,
          16: 37,
          17: 47,
          19: 34,
          23: 30,
          31: 18,
        },
        {
          month: "2021-10",
          4: 10,
          5: 12,
          7: 17,
          16: 29,
          17: 22,
          19: 12,
          23: 38,
          31: 18,
        },
        {
          month: "2021-11",
          4: 27,
          5: 29,
          7: 18,
          16: 19,
          17: 37,
          19: 31,
          23: 10,
          31: 13,
        },
        {
          month: "2021-12",
          4: 26,
          5: 18,
          7: 19,
          16: 22,
          17: 19,
          19: 38,
          23: 22,
          31: 15,
        },
      ],
      labels: [
        "RishtaID: 4",
        "RishtaID: 5",
        "RishtaID: 7",
        "RishtaID: 16",
        "RishtaID: 17",
        "RishtaID: 19",
        "RishtaID: 23",
        "RishtaID: 31",
      ],
      ykeys: [4, 5, 7, 16, 17, 19, 23, 31],
    },
    bar: {
      data: [
        {
          month: "2021-08",
          "less than 50K": 15,
          "100K - 150K": 4,
          "50K - 100K": 7,
          "150K - 200K": 1,
        },
        {
          month: "2021-09",
          "less than 50K": 15,
          "100K - 150K": 5,
          "50K - 100K": 6,
          "150K - 200K": 1,
        },
        { month: "2021-11", "100K - 150K": 2, "150K - 200K": 1 },
        {
          month: "2021-10",
          "150K - 200K": 1,
          "100K - 150K": 2,
          "50K - 100K": 1,
        },
        { month: "2021-12", "100K - 150K": 1, "less than 50K": 1 },
      ],
      labels: [
        "Income: less than 50K",
        "Income: 100K - 150K",
        "Income: 50K - 100K",
        "Income: 150K - 200K",
      ],
      ykeys: ["less than 50K", "100K - 150K", "50K - 100K", "150K - 200K"],
    },
    success: true,
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="dash-stats-container">
      <div className="dash-stats-box">
        <div className="row">
          <div className="col s12">
            <div className="dash-stats-heading">
              <h5>Sales Revenue</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s5">
            <div className="dash-stats-icon">
              <DollarCircleOutlined
                style={{
                  marginTop: "22%",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div className="col s7">
            <div className="dash-stats-heading2">
              <h6>230k</h6>
            </div>
            <div className="dash-stats-subheading">
              <p>Amount</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s5">
            <div className="dash-stats-icon">
              <SmileOutlined
                style={{
                  marginTop: "22%",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div className="col s7">
            <div className="dash-stats-heading2">
              <h6>8.549k</h6>
            </div>
            <div className="dash-stats-subheading">
              <p>Feedbacks</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s5">
            <div className="dash-stats-icon">
              <ShoppingOutlined
                style={{
                  marginTop: "22%",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div className="col s7">
            <div className="dash-stats-heading2">
              <h6>1.423k</h6>
            </div>
            <div className="dash-stats-subheading">
              <p>Proposals</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s5">
            <div className="dash-stats-icon">
              <PieChartOutlined
                style={{
                  marginTop: "22%",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div className="col s7">
            <div className="dash-stats-heading2">
              <h6>$9745</h6>
            </div>
            <div className="dash-stats-subheading">
              <p>Revenue</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="dash-stats-heading">
              <h5>Statistics</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="dash-stats-chart">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  // width={280}
                  data={DashData.bar.data}
                  // margin={{
                  //   top: 20,
                  //   right: 40,
                  //   left: -15,
                  //   bottom: 5,
                  // }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* <Bar dataKey="pv" stackId="a" fill="#eee" /> */}
                  <Bar dataKey="month" stackId="a" fill="#e2e2e2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStats;
