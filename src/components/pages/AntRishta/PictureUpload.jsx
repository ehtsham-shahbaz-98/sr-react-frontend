// import React, { useState } from "react";
// import { Upload, message } from "antd";
// import ImgCrop from "antd-img-crop";

// const PictureUpload = () => {
//   const [fileList, setFileList] = useState([
//     // {
//     //   uid: "-1",
//     //   name: "image.png",
//     //   status: "done",
//     //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     // },
//   ]);

//   function beforeUpload(file) {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//       message.error("You can only upload JPG/PNG file!");
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error("Image must smaller than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
//   }

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     console.log(fileList);
//   };

//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);

//     imgWindow.document.write(image.outerHTML);
//   };

//   return (
//     <ImgCrop rotate>
//       <Upload
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//         beforeUpload={beforeUpload}
//       >
//         {fileList.length < 5 && "+ Upload"}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default PictureUpload;
