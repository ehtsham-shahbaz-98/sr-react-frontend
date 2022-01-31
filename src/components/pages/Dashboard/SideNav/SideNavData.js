import React from "react";

import {
  EyeOutlined,
  HomeOutlined,
  FileTextOutlined,
  BarChartOutlined,
  ArrowUpOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export const SideNavData = [
  {
    title: "Home",
    icon: <HomeOutlined />,
    link: "/home",
  },
  {
    title: "Rishtas",
    icon: <FileTextOutlined />,
    link: "/rishtas",
  },
  {
    title: "Proposals",
    icon: <BarChartOutlined />,
    link: "/status",
  },
  {
    title: "Reviews",
    icon: <ArrowUpOutlined />,
    link: "/reviews-received",
  },
  {
    title: "Feedbacks",
    icon: <StarOutlined />,
    link: "/reviews-provided",
  },
  {
    title: "Favourites",
    icon: <HeartOutlined />,
    link: "/favourites",
  },
  {
    title: "Viewers",
    icon: <EyeOutlined />,
    link: "/viewers",
  },
];
