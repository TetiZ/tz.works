// import { useState } from "react";
// import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";

// export default function Contacts() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         position: "relative",
//         display: "inline-block",
//         padding: "20px",
//         cursor: "pointer",
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <span>Наведите курсор для просмотра логотипов</span>
//       {isHovered && (
//         <div
//           style={{
//             position: "absolute",
//             top: "-60px",
//             left: "-60px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             width: "120px",
//             height: "120px",
//             borderRadius: "50%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             zIndex: "999",
//           }}
//         >
//           <FaReact size={32} style={{ color: "white" }} />
//           <FaAngular size={32} style={{ color: "white" }} />
//           <FaVuejs size={32} style={{ color: "white" }} />
//         </div>
//       )}
//     </div>
//   );
// }
