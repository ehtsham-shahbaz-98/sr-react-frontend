import React, { useState } from "react";

import "./ant.css";

import "./AntStyle/style.scss";

import { Steps, Button, Popover, message } from "antd";

import { StateMachineProvider, createStore } from "little-state-machine";

import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import FourthStep from "./Steps/FourthStep";
import FifthStep from "./Steps/FifthStep";
import SixthStep from "./Steps/SixthStep";
import SeventhStep from "./Steps/SeventhStep";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

// const antGenderData = [
//   {
//     value: "Male",
//     label: "Male",
//   },
//   {
//     value: "Female",
//     label: "Female",
//   },
// ];

// const antSocialData = [
//   {
//     value: "Upper Class",
//     label: "Upper Class",
//   },
//   {
//     value: "Middle Class",
//     label: "Middle Class",
//   },
//   {
//     value: "Labor Class",
//     label: "Labor Class",
//   },
//   {
//     value: "Lower Class",
//     label: "Lower Class",
//   },
// ];

// const antMaritalData = [
//   {
//     value: "Single",
//     label: "Single",
//   },
//   {
//     value: "Married",
//     label: "Married",
//   },
//   {
//     value: "Divorcee",
//     label: "Divorcee",
//   },
//   {
//     value: "Divorcee - Nikah without Rukhsati",
//     label: "Divorcee - Nikah without Rukhsati",
//   },
//   {
//     value: "Widower/Widow",
//     label: "Widower/Widow",
//   },
// ];

// const antKidsData = [
//   {
//     value: "Yes",
//     label: "Yes",
//   },
//   {
//     value: "No",
//     label: "No",
//   },
// ];

// const antComplexionData = [
//   {
//     value: "Very Fair",
//     label: "Very Fair",
//   },
//   {
//     value: "Fair",
//     label: "Fair",
//   },
//   {
//     value: "Wheatish",
//     label: "Wheatish",
//   },
//   {
//     value: "Dark",
//     label: "Dark",
//   },
// ];

const antCountriesData = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

// const antMonthsData = [
//   {
//     abbreviation: "Jan",
//     name: "January",
//   },
//   {
//     abbreviation: "Feb",
//     name: "February",
//   },
//   {
//     abbreviation: "Mar",
//     name: "March",
//   },
//   {
//     abbreviation: "Apr",
//     name: "April",
//   },
//   {
//     abbreviation: "May",
//     name: "May",
//   },
//   {
//     abbreviation: "Jun",
//     name: "June",
//   },
//   {
//     abbreviation: "Jul",
//     name: "July",
//   },
//   {
//     abbreviation: "Aug",
//     name: "August",
//   },
//   {
//     abbreviation: "Sep",
//     name: "September",
//   },
//   {
//     abbreviation: "Oct",
//     name: "October",
//   },
//   {
//     abbreviation: "Nov",
//     name: "November",
//   },
//   {
//     abbreviation: "Dec",
//     name: "December",
//   },
// ];

// const antDaysData = [
//   {
//     name: "1",
//     value: "1",
//   },
//   {
//     name: "2",
//     value: "2",
//   },
//   {
//     name: "3",
//     value: "3",
//   },
//   {
//     name: "4",
//     value: "4",
//   },
//   {
//     name: "5",
//     value: "5",
//   },
//   {
//     name: "6",
//     value: "6",
//   },
//   {
//     name: "7",
//     value: "7",
//   },
//   {
//     name: "8",
//     value: "8",
//   },
//   {
//     name: "9",
//     value: "9",
//   },
//   {
//     name: "10",
//     value: "10",
//   },
//   {
//     name: "11",
//     value: "11",
//   },
//   {
//     name: "12",
//     value: "12",
//   },
//   {
//     name: "13",
//     value: "13",
//   },
//   {
//     name: "14",
//     value: "14",
//   },
//   {
//     name: "15",
//     value: "15",
//   },
//   {
//     name: "16",
//     value: "16",
//   },
//   {
//     name: "17",
//     value: "17",
//   },
//   {
//     name: "18",
//     value: "18",
//   },
//   {
//     name: "19",
//     value: "19",
//   },
//   {
//     name: "20",
//     value: "20",
//   },
//   {
//     name: "21",
//     value: "21",
//   },
//   {
//     name: "22",
//     value: "22",
//   },
//   {
//     name: "23",
//     value: "23",
//   },
//   {
//     name: "24",
//     value: "24",
//   },
//   {
//     name: "25",
//     value: "25",
//   },
//   {
//     name: "26",
//     value: "26",
//   },
//   {
//     name: "27",
//     value: "27",
//   },
//   {
//     name: "28",
//     value: "28",
//   },
//   {
//     name: "29",
//     value: "29",
//   },
//   {
//     name: "30",
//     value: "30",
//   },
//   {
//     name: "31",
//     value: "31",
//   },
// ];

// const antYearsData = [
//   {
//     name: "1998",
//     value: "1998",
//   },
//   {
//     name: "1999",
//     value: "1999",
//   },
//   {
//     name: "2000",
//     value: "2000",
//   },
//   {
//     name: "2001",
//     value: "2001",
//   },
//   {
//     name: "2002",
//     value: "2002",
//   },
//   {
//     name: "2003",
//     value: "2003",
//   },
// ];

// const antHouseData = [
//   {
//     label: "less than 5 Marla",
//     value: "less than 5 Marla",
//   },
//   {
//     label: "5 - 10 Marla",
//     value: "5 - 10 Marla",
//   },
//   {
//     label: "10 Marla - 1 Kanal",
//     value: "10 Marla - 1 Kanal",
//   },
//   {
//     label: "1 Kanal - 2 Kanal",
//     value: "1 Kanal - 2 Kanal",
//   },
//   {
//     label: "2 Kanal - 4 Kanal",
//     value: "2 Kanal - 4 Kanal",
//   },
//   {
//     label: "4 Kanal +",
//     value: "4 Kanal +",
//   },
// ];

// const antHouseStatusData = [
//   {
//     label: "Own",
//     value: "Own",
//   },
//   {
//     label: "Rent",
//     value: "Rent",
//   },
// ];

// const antHeightData = [
//   {
//     label: "5 ft",
//     value: "5 ft",
//   },
//   {
//     label: "6 ft",
//     value: "6 ft",
//   },
//   {
//     label: "7 ft",
//     value: "7 ft",
//   },
//   {
//     label: "8 ft",
//     value: "8 ft",
//   },
// ];

// const antReligionData = [
//   {
//     label: "Islam",
//     value: "Islam",
//   },
//   {
//     label: "Christianity",
//     value: "Christianity",
//   },
//   {
//     label: "Hindu",
//     value: "Hindu",
//   },
//   {
//     label: "Sikh",
//     value: "Sikh",
//   },
//   {
//     label: "Other",
//     value: "Other",
//   },
// ];

// const antCasteData = [
//   {
//     label: "Afridi",
//     value: "Afridi",
//   },
//   {
//     label: "Balochi",
//     value: "Balochi",
//   },
//   {
//     label: "Malik",
//     value: "Malik",
//   },
//   {
//     label: "Other",
//     value: "Other",
//   },
// ];

// const antSectData = [
//   {
//     label: "Sunni",
//     value: "Sunni",
//   },
//   {
//     label: "Shia",
//     value: "Shia",
//   },
//   {
//     label: "Other",
//     value: "Other",
//   },
// ];

// const antLanguageData = [
//   {
//     label: "Punjabi",
//     value: "Punjabi",
//   },
//   {
//     label: "Sindhi",
//     value: "Sindhi",
//   },
//   {
//     label: "Pushto",
//     value: "Pushto",
//   },
//   {
//     label: "Balochi",
//     value: "Balochi",
//   },
//   {
//     label: "Other",
//     value: "Other",
//   },
// ];

// const antGuardianData = [
//   {
//     label: "Father",
//     value: "Father",
//   },
//   {
//     label: "Mother",
//     value: "Mother",
//   },
//   {
//     label: "Brother",
//     value: "Brother",
//   },
//   {
//     label: "Sister",
//     value: "Sister",
//   },
//   {
//     label: "Uncle",
//     value: "Uncle",
//   },
// ];

// const antJobData = [
//   {
//     label: "Job",
//     value: "Job",
//   },
//   {
//     label: "Business",
//     value: "Business",
//   },
//   {
//     label: "Not Applicable",
//     value: "Not Applicable",
//   },
// ];

// const antIncomeData = [
//   {
//     label: "Less than 50K",
//     value: "Less than 50K",
//   },
//   {
//     label: "50K - 100K",
//     value: "50K - 100K",
//   },
//   {
//     label: "100K - 150K",
//     value: "100K - 150K",
//   },
//   {
//     label: "150K - 200K",
//     value: "150K - 200K",
//   },
// ];

// const antLookingForData = [
//   {
//     label: "Single",
//     value: "Single",
//   },
//   {
//     label: "Married",
//     value: "Married",
//   },
//   {
//     label: "Divorcee",
//     value: "Divorcee",
//   },
//   {
//     label: "2nd Marriage",
//     value: "2nd Marriage",
//   },
//   {
//     label: "Widow",
//     value: "Widow",
//   },
// ];

// const antMinHeightData = [
//   {
//     label: "5 ft",
//     value: "5 ft",
//   },
//   {
//     label: "6 ft",
//     value: "6 ft",
//   },
//   {
//     label: "7 ft",
//     value: "7 ft",
//   },
//   {
//     label: "8 ft",
//     value: "8 ft",
//   },
// ];

// const antMaxHeightData = [
//   {
//     label: "5 ft",
//     value: "5 ft",
//   },
//   {
//     label: "6 ft",
//     value: "6 ft",
//   },
//   {
//     label: "7 ft",
//     value: "7 ft",
//   },
//   {
//     label: "8 ft",
//     value: "8 ft",
//   },
// ];

// const antMinAgeData = [
//   {
//     label: "18",
//     value: "18",
//   },
//   {
//     label: "19",
//     value: "19",
//   },
//   {
//     label: "20",
//     value: "20",
//   },
//   {
//     label: "21",
//     value: "21",
//   },
//   {
//     label: "22",
//     value: "22",
//   },
// ];

// const antMaxAgeData = [
//   {
//     label: "18",
//     value: "18",
//   },
//   {
//     label: "19",
//     value: "19",
//   },
//   {
//     label: "20",
//     value: "20",
//   },
//   {
//     label: "21",
//     value: "21",
//   },
//   {
//     label: "22",
//     value: "22",
//   },
// ];

// const antSameCasteData = [
//   {
//     label: "Yes",
//     value: "Yes",
//   },
//   {
//     label: "No",
//     value: "No",
//   },
// ];

// const antSameCityData = [
//   {
//     label: "Yes",
//     value: "Yes",
//   },
//   {
//     label: "No",
//     value: "No",
//   },
// ];

const AntRishta = () => {
  var count = 0;
  const [current, setCurrent] = React.useState(0);

  const [flag, setFlag] = useState(false);
  const [hideSection, setHideSection] = useState(false);

  const showStep = () => {
    setFlag(true);
  };

  const hideFunc = () => {
    setHideSection(true);
  };

  // var genderCount = 0;

  // const [antGender, setAntGender] = useState("");
  // const [antSocial, setAntSocial] = useState("");
  // const [antMarital, setAntMarital] = useState("");
  // const [antKids, setAntKids] = useState("");
  // const [antComplexion, setAntComplexion] = useState("");
  // const [antCountries, setAntCountries] = useState("");
  // const [antMonths, setAntMonths] = useState("");
  // const [antDays, setAntDays] = useState("");
  // const [antYears, setAntYears] = useState("");
  // const [antHouse, setAntHouse] = useState("");
  // const [antHouseStatus, setAntHouseStatus] = useState("");
  // const [antHeight, setAntHeight] = useState("");
  // const [antReligion, setAntReligion] = useState("");
  // const [antCaste, setAntCaste] = useState("");
  // const [antSect, setAntSect] = useState("");
  // const [antLanguage, setAntLanguage] = useState("");
  // const [antGuardian, setAntGuardian] = useState("");
  // const [antJob, setAntJob] = useState("");
  // const [antIncome, setAntIncome] = useState("");
  // const [antLookingFor, setAntLookingFor] = useState("");
  // const [antMinHeight, setAntMinHeight] = useState("");
  // const [antMaxHeight, setAntMaxHeight] = useState("");
  // const [antMinAge, setAntMinAge] = useState("");
  // const [antMaxAge, setAntMaxAge] = useState("");
  // const [antSameCaste, setAntSameCaste] = useState("");
  // const [antSameCity, setAntSameCity] = useState("");

  // const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("");

  // const selectCountry = (val) => {
  //   setCountry(val);
  // };

  // const selectRegion = (val) => {
  //   setRegion(val);
  // };

  // const handleGenderChange = (event) => {
  //   console.log(event.target.value);
  //   setAntGender(event.target.value);
  // };

  // const handleSocialChange = (event) => {
  //   setAntSocial(event.target.value);
  // };

  // const handleMaritalChange = (event) => {
  //   setAntMarital(event.target.value);
  // };

  // const handleKidsChange = (event) => {
  //   setAntKids(event.target.value);
  // };

  // const handleComplexionChange = (event) => {
  //   setAntComplexion(event.target.value);
  // };

  // const handleCountriesChange = (event) => {
  //   setAntCountries(event.target.value);
  // };

  // const handleMonthsChange = (event) => {
  //   setAntMonths(event.target.value);
  // };

  // const handleDaysChange = (event) => {
  //   setAntDays(event.target.value);
  // };

  // const handleYearsChange = (event) => {
  //   setAntYears(event.target.value);
  // };

  // const handleHouseChange = (event) => {
  //   setAntHouse(event.target.value);
  // };

  // const handleHouseStatusChange = (event) => {
  //   setAntHouseStatus(event.target.value);
  // };

  // const handleHeightChange = (event) => {
  //   setAntHeight(event.target.value);
  // };

  // const handleReligionChange = (event) => {
  //   setAntReligion(event.target.value);
  // };

  // const handleCasteChange = (event) => {
  //   setAntCaste(event.target.value);
  // };

  // const handleSectChange = (event) => {
  //   setAntSect(event.target.value);
  // };

  // const handleLanguageChange = (event) => {
  //   setAntLanguage(event.target.value);
  // };

  // const handleGuradianChange = (event) => {
  //   setAntGuardian(event.target.value);
  // };

  // const handleJobChange = (event) => {
  //   setAntJob(event.target.value);
  // };

  // const handleIncomeChange = (event) => {
  //   setAntIncome(event.target.value);
  // };

  // const handleLookingForChange = (event) => {
  //   setAntLookingFor(event.target.value);
  // };

  // const handleMinHeightChange = (event) => {
  //   setAntMinHeight(event.target.value);
  // };

  // const handleMaxHeightChange = (event) => {
  //   setAntMaxHeight(event.target.value);
  // };

  // const handleMinAgeChange = (event) => {
  //   setAntMinAge(event.target.value);
  // };

  // const handleMaxAgeChange = (event) => {
  //   setAntMaxAge(event.target.value);
  // };

  // const handleAntSameCasteChange = (event) => {
  //   setAntSameCaste(event.target.value);
  // };

  // const handleAntSameCityChange = (event) => {
  //   setAntSameCity(event.target.value);
  // };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // const firstStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Select Gender
  //           </h3>
  //         </div>
  //       </div>
  //       <form>
  //         <div class="row">
  //           <div class="input-field input-outlined-secondary col s12">
  //             <select
  //               name="gender"
  //               class="browser-default"
  //               value={antGender}
  //               onChange={(val) => handleGenderChange(val)}
  //             >
  //               <option value="">Select Gender</option>
  //               {antGenderData.map((option) => (
  //                 <option key={option.value} value={option.value}>
  //                   {option.label}
  //                 </option>
  //               ))}
  //             </select>
  //           </div>
  //         </div>
  //         <div class="row">
  //           <div className="col s12">
  //             <p style={{ fontSize: "18px" }}>Upload Images (Max 5)</p>
  //           </div>
  //         </div>
  //         <div class="row">
  //           <div className="col s12">
  //             <PictureUpload />
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );

  // const secondStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Personal Details
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="email"
  //             id="email"
  //             type="email"
  //             class="validate"
  //             // {...register("email", {
  //             //   required: true,
  //             //   pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  //             // })}
  //           />
  //           <label for="email">Email Address</label>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <input
  //             name="first_name"
  //             id="first_name"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="first_name">First Name</label>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <input
  //             name="last_name"
  //             id="last_name"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="last_name">Last Name</label>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <input
  //             name="cnic"
  //             id="cnic"
  //             type="number"
  //             class="validate"
  //             // {...register("email", {
  //             //   required: true,
  //             //   pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  //             // })}
  //           />
  //           <label for="cnic">CNIC: </label>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <input
  //             name="whatsapp_number"
  //             id="whatsapp_number"
  //             type="number"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="whatsapp_number">Guardian Whatsapp #</label>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="phone_number"
  //             id="phone_number"
  //             type="number"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="phone_number">Candidate Phone #</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const thirdStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Social Status
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antSocial}
  //             onChange={handleSocialChange}
  //           >
  //             <option value="">Select Social Class</option>
  //             {antSocialData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>

  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antComplexion}
  //             onChange={handleComplexionChange}
  //           >
  //             <option value="">Choose Complexion</option>
  //             {antComplexionData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antHeight}
  //             onChange={handleHeightChange}
  //           >
  //             <option value="">Choose Height</option>
  //             {antHeightData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antKids}
  //             onChange={handleKidsChange}
  //           >
  //             <option value="">Have Kids?</option>
  //             {antKidsData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antMarital}
  //             onChange={handleMaritalChange}
  //           >
  //             <option value="">Marital Status</option>
  //             {antMaritalData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="col s12">
  //           <p
  //             style={{
  //               width: "100%",
  //               fontSize: "20px",
  //               fontWeight: "600",
  //               color: "white",
  //               marginTop: "0",
  //               height: "10px",
  //               textAlign: "center",
  //               // textAlign: 'left'
  //             }}
  //           >
  //             Date of Birth
  //           </p>
  //           {/* <p style={{ width: "100%", fontSize: "20px" }}>
  //                           (This will not be shown publicly)
  //                         </p> */}
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s4">
  //           <select
  //             class="browser-default"
  //             value={antMonths}
  //             onChange={handleMonthsChange}
  //           >
  //             <option value="">Month</option>
  //             {antMonthsData.map((option) => (
  //               <option key={option.name} value={option.name}>
  //                 {option.name}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s4">
  //           <select
  //             class="browser-default"
  //             value={antDays}
  //             onChange={handleDaysChange}
  //           >
  //             <option value="">Day</option>
  //             {antDaysData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.value}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s4">
  //           <select
  //             class="browser-default"
  //             value={antYears}
  //             onChange={handleYearsChange}
  //           >
  //             <option value="">Year</option>
  //             {antYearsData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.value}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const fourthStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Address Info
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           {/* <CountrySelect /> */}

  //           <CountryDropdown
  //             value={country}
  //             onChange={(val) => selectCountry(val)}
  //           />
  //         </div>
  //       </div>
  //       <div className={country === "" ? `hide` : `row`}>
  //         <div
  //           className={
  //             country === ""
  //               ? `hide`
  //               : `input-field input-outlined-secondary col s12`
  //           }
  //         >
  //           <RegionDropdown
  //             country={country}
  //             value={region}
  //             onChange={(val) => selectRegion(val)}
  //           />
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antHouseStatus}
  //             onChange={handleHouseStatusChange}
  //           >
  //             <option value="" disabled selected>
  //               House Info
  //             </option>
  //             {antHouseStatusData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.value}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antHouse}
  //             onChange={handleHouseChange}
  //           >
  //             <option value="" disabled selected>
  //               House Size
  //             </option>
  //             {antHouseData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.value}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="current_address"
  //             id="current_address"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="current_address">Current Address</label>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="permanent_address"
  //             id="permanent_adress"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="premanent_address">Permanent Address</label>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="area"
  //             id="area"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="area">Area</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const fifthStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Family Details
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antReligion}
  //             onChange={handleReligionChange}
  //           >
  //             <option value="" disabled selected>
  //               Choose Religion
  //             </option>
  //             {antReligionData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antCaste}
  //             onChange={handleCasteChange}
  //           >
  //             <option value="" disabled selected>
  //               Choose Caste
  //             </option>
  //             {antCasteData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antSect}
  //             onChange={handleSectChange}
  //           >
  //             <option value="" disabled selected>
  //               Choose Sect
  //             </option>
  //             {antSectData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>{" "}
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antLanguage}
  //             onChange={handleLanguageChange}
  //           >
  //             <option value="" disabled selected>
  //               Preffered Language
  //             </option>
  //             {antLanguageData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select class="browser-default">
  //             <option
  //               value=""
  //               disabled
  //               selected
  //               value={antGuardian}
  //               onChange={handleGuradianChange}
  //             >
  //               Choose Guardian
  //             </option>
  //             {antGuardianData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field text-area col s12">
  //           <textarea id="textarea1" class="materialize-textarea"></textarea>
  //           <label for="textarea1">Enter Family Details</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const sixthStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Job Details
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antJob}
  //             onChange={handleJobChange}
  //           >
  //             <option value="" disabled selected>
  //               Profession
  //             </option>
  //             {antJobData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antIncome}
  //             onChange={handleIncomeChange}
  //           >
  //             <option value="" disabled selected>
  //               Choose Income
  //             </option>
  //             {antIncomeData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <input
  //             name="qualifications"
  //             id="qualifications"
  //             type="text"
  //             class="validate"
  //             // minLength="8"
  //             // {...register("password", {
  //             //   required: true,
  //             //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //             // })}
  //           />
  //           <label for="qualifications">Qualifications</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // const seventhStep = (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s12">
  //           <h3 class="heading" style={{ color: "white" }}>
  //             Requirements
  //           </h3>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s12">
  //           <select
  //             class="browser-default"
  //             value={antLookingFor}
  //             onChange={handleLookingForChange}
  //           >
  //             <option value="" disabled selected>
  //               Looking For
  //             </option>
  //             {antLookingForData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antMinHeight}
  //             onChange={handleMinHeightChange}
  //           >
  //             <option value="" disabled selected>
  //               Minimum Height
  //             </option>
  //             {antMinHeightData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antMaxHeight}
  //             onChange={handleMaxHeightChange}
  //           >
  //             <option value="" disabled selected>
  //               Maximum Height
  //             </option>
  //             {antMaxHeightData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antMinAge}
  //             onChange={handleMinAgeChange}
  //           >
  //             <option value="" disabled selected>
  //               Minimum Age
  //             </option>
  //             {antMinAgeData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antMaxAge}
  //             onChange={handleMaxAgeChange}
  //           >
  //             <option value="" disabled selected>
  //               Maximum Age
  //             </option>
  //             {antMaxAgeData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antSameCaste}
  //             onChange={handleAntSameCasteChange}
  //           >
  //             <option value="" disabled selected>
  //               Same Caste
  //             </option>
  //             {antSameCasteData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //         <div class="input-field input-outlined-secondary col s6">
  //           <select
  //             class="browser-default"
  //             value={antSameCity}
  //             onChange={handleAntSameCityChange}
  //           >
  //             <option value="" disabled selected>
  //               Same City
  //             </option>
  //             {antSameCityData.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>

  //       <div class="row">
  //         <div class="input-field text-area col s12">
  //           <textarea id="textarea1" class="materialize-textarea"></textarea>
  //           <label for="textarea1">Enter Requirement Info</label>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  const steps = [
    {
      step: 1,
      title: "Start",
      content: <FirstStep current={current} next={next} />,
    },
    {
      step: 2,
      title: "",
      content: <SecondStep current={current} next={next} prev={prev} />,
    },
    {
      step: 3,

      title: "",
      content: <ThirdStep current={current} next={next} prev={prev} />,
    },
    {
      step: 4,

      title: "",
      content: (
        <FourthStep
          current={current}
          next={next}
          prev={prev}
          flag={flag}
          hideSection={hideSection}
          showStep={showStep}
          hideFunc={hideFunc}
        />
      ),
    },
    {
      step: 5,

      title: "",
      content: <FifthStep current={current} next={next} prev={prev} />,
    },
    {
      step: 6,

      title: "",
      content: <SixthStep current={current} next={next} prev={prev} />,
    },
    {
      step: 7,

      title: "Finish",
      content: <SeventhStep current={current} next={next} prev={prev} />,
    },
  ];

  createStore({});

  return (
    <>
      <StateMachineProvider>
        <div className="antrishta-container">
          <div className="row" style={{ display: "flex" }}>
            <div className="col s2 stepsBody">
              <Steps
                progressDot
                current={current}
                size="small"
                responsive={true}
                direction={"vertical"}
                className="stepstitle"
                labelPlacement="horizontal"
              >
                {steps.map((item) => (
                  <Step
                    key={item.title}
                    title={item.title}
                    className="title-font"
                  />
                ))}
              </Steps>
            </div>
            <div className="col s9 m10 l10 stepsContent">
              {steps.map((item) => (
                <div
                  className={`steps-content ${
                    item.step !== current + 1 && "hidden"
                  }`}
                >
                  {item.content}
                </div>
              ))}
              {/* {steps.map((item) => (
                <div
                  className={`steps-content ${
                    item.step !== current + 1 && "hidden"
                  }`}
                >
                  {item.content}
                </div>
              ))} */}
              {/* <div className="steps-content">{steps[current].content}</div> */}
              <div className="steps-action stepsAction">
                {/* {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                    Next
                  </Button>
                )} */}
                {/* {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() =>
                      message.success("Form Submitted, Thank you!")
                    }
                  >
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                    Previous
                  </Button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </StateMachineProvider>
    </>
  );
};

export default AntRishta;
