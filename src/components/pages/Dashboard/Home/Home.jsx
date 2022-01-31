import React from "react";

import { EyeOutlined, CompassOutlined, HomeOutlined } from "@ant-design/icons";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  Label,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Home.css";

const Home = () => {
  const DashData = {
    line_chart: [
      { month: "2021-08", views: 34 },
      { month: "2021-09", views: 236 },
      { month: "2021-10", views: 158 },
      { month: "2021-11", views: 184 },
      { month: "2021-12", views: 175 },
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

  // const profileArea = [
  //   {
  //     month: "2021-08",
  //     4: 23,
  //     5: 39,
  //     7: 20,
  //     16: 61,
  //     17: 33,
  //     19: 36,
  //     23: 20,
  //     31: 14,
  //   },
  //   {
  //     month: "2021-09",
  //     4: 26,
  //     5: 26,
  //     7: 18,
  //     16: 37,
  //     17: 47,
  //     19: 34,
  //     23: 30,
  //     31: 18,
  //   },
  //   {
  //     month: "2021-10",
  //     4: 10,
  //     5: 12,
  //     7: 17,
  //     16: 29,
  //     17: 22,
  //     19: 12,
  //     23: 38,
  //     31: 18,
  //   },
  //   {
  //     month: "2021-11",
  //     4: 27,
  //     5: 29,
  //     7: 18,
  //     16: 19,
  //     17: 37,
  //     19: 31,
  //     23: 10,
  //     31: 13,
  //   },
  //   {
  //     month: "2021-12",
  //     4: 26,
  //     5: 18,
  //     7: 19,
  //     16: 22,
  //     17: 19,
  //     19: 38,
  //     23: 22,
  //     31: 15,
  //   },

  //   // labels: [
  //   //   "RishtaID: 4",
  //   //   "RishtaID: 5",
  //   //   "RishtaID: 7",
  //   //   "RishtaID: 16",
  //   //   "RishtaID: 17",
  //   //   "RishtaID: 19",
  //   //   "RishtaID: 23",
  //   //   "RishtaID: 31",
  //   // ],
  //   // ykeys: [4, 5, 7, 16, 17, 19, 23, 31],
  // ];

  // const lineChart = [
  //   {
  //     name: "2021-08",
  //     uv: 34,
  //   },
  //   {
  //     name: "2021-09",
  //     uv: 236,
  //   },
  //   {
  //     name: "2021-10",
  //     uv: 158,
  //   },
  //   {
  //     name: "2021-11",
  //     uv: 184,
  //   },
  //   {
  //     name: "2021-12",
  //     uv: 175,
  //   },
  // ];

  // const totalViews = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  // const viewsById = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  // ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    // "#c300ff",
    // "#3aff9c",
    "#ff0088",
  ];

  const areaData = [
    {
      month: "2021-08",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      month: "2021-09",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      month: "2021-10",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      month: "2021-11",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      month: "2021-12",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="dash-home">
      <div className="row">
        <div className="col s12">{/* <Demo /> */}</div>
      </div>
      <div className="row dash-home-header">
        <div className="col s12 m12 l4">
          <div className="dash-welcome-card">
            <div className="dash-home-heading">
              <h3>Hello David</h3>
            </div>
            <div className="dash-home-subheading">
              <p>Welcome Back!</p>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-home-first-card">
            <div className="card-heading">
              <h5>Plan Type</h5>
            </div>
            <div className="card-sub-heading">
              <p>View pricing plans</p>
            </div>
            <div className="card-data">
              <p>Standard</p>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l4">
          <div className="dash-home-second-card">
            <div className="card-heading">
              <h5>Allowed Proposals</h5>
            </div>
            <div className="card-sub-heading">
              <p>Proposals</p>
            </div>
            <div className="card-data">
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row dash-home-ninth-header">
        <div className="col s4">
          <div className="dash-home-ninth-card">
            <div className="card-icon">
              <EyeOutlined
                style={{
                  marginTop: "25%",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
            <div className="card-heading"></div>

            <div className="card-data">
              <p>500</p>
            </div>
            <div className="card-sub-heading2">
              <p>Total Views</p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="dash-home-ninth-card">
            <div className="card-icon">
              <CompassOutlined
                style={{
                  marginTop: "25%",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
            <div className="card-heading"></div>

            <div className="card-data">
              <p>2000</p>
            </div>
            <div className="card-sub-heading2">
              <p>Rishtas Posted</p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="dash-home-ninth-card">
            <div className="card-icon">
              <HomeOutlined
                style={{
                  marginTop: "25%",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              />
            </div>
            <div className="card-heading"></div>

            <div className="card-data">
              <p>5100</p>
            </div>
            <div className="card-sub-heading2">
              <p>Total Proposals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row dash-home-header">
        <div className="col s12 m12 l12">
          <div className="dash-home-third-card">
            <div className="card-heading">
              <h5>Profile Area</h5>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart
                      data={areaData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col s12 m12 l6">
          <div className="dash-home-fourth-card">
            <div className="card-heading">
              <h5>Total Views</h5>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                   
                      data={DashData.line_chart}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis dataKey="value" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                     
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row dash-home-header">
        <div className="col s12 m12 l12">
          <div className="dash-home-fourth-card">
            <div className="card-heading">
              <h5>Total Views</h5>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                      // width={300}
                      // height={250}
                      data={DashData.line_chart}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis dataKey="views" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="views"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      {/* <Line type="monotone" dataKey="value" stroke="#82ca9d" /> */}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row dash-home-header">
        <div className="col s12 m12 l6">
          <div className="dash-home-fifth-card">
            <div className="card-heading">
              <h5>Views by ID</h5>
            </div>
            {/* <div className="card-sub-heading">
              <p>Views (ID)</p>
            </div> */}
            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={DashData.donut}
                        // cx={120}
                        // cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Label width={30} position="center">
                          111
                        </Label>
                        {DashData.donut.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">
          <div className="dash-home-sixth-card">
            <div className="card-heading">
              <h5>Views by Age</h5>
            </div>
            {/* <div className="card-sub-heading">
              <p>Age</p>
            </div> */}
            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={DashData.donut_age}
                        // cx={120}
                        // cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Label width={50} position="center">
                          Age 20
                        </Label>
                        {DashData.donut_age.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row dash-home-header">
        <div className="col s12 m12 l6">
          <div className="dash-home-seventh-card">
            <div className="card-heading">
              <h5>Views by Caste</h5>
            </div>
            {/* <div className="card-sub-heading">
              <p>Caste</p>
            </div> */}
            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={DashData.donut_caste}
                        // cx={120}
                        // cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Label width={50} position="center">
                          Qureshi
                        </Label>
                        {DashData.donut_caste.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">
          <div className="dash-home-eighth-card">
            <div className="card-heading">
              <h5>Views By City</h5>
            </div>
            {/* <div className="card-sub-heading">
              <p>City</p>
            </div> */}
            <div className="row">
              <div className="col s12">
                <div className="card-data">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={DashData.donut_areawise}
                        // cx={120}
                        // cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Label width={50} position="center">
                          Lahore
                        </Label>
                        {DashData.donut_areawise.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
