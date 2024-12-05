import React from "react";

const GroupInfo = () => {
  const groupInfoStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "96%",
    marginTop: "auto",
  };

  const groupTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const memberListStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const memberItemStyle = {
    margin: "10px 0",
  };

  return (
    <div style={groupInfoStyle}>
      <h2 style={groupTitleStyle}>Group Members:</h2>
      <ul style={memberListStyle}>
        <li style={memberItemStyle}>
          Rithika V(1VI22CS096) -{" "}
          <a href="mailto:rithikav.cs2022@vemanait.edu.in">
            rithikav.cs2022@vemanait.edu.in
          </a>
        </li>
        <li style={memberItemStyle}>
          Syeda Aasiya Farheen(1VI22CS098) -{" "}
          <a href="mailto:sisyedaaasiyafarheen.cs2022@vemanait.edu.in">
            syedaaasiyafarheen.cs2022@vemanait.edu.in
          </a>
        </li>
        <li style={memberItemStyle}>
          Sanghavi S (1VI22CS103) -{" "}
          <a href="mailto:sanghavis.cs2022@vemanait.edu.in">
            sanghavis.cs2022@vemanait.edu.in
          </a>
        </li>
        <li style={memberItemStyle}>
          Shruti Narwani (1VI22CS108) -{" "}
          <a href="mailto:shrutinarwani@outlook.com">
            shrutinarwani.cs2022@vemanait.edu.in
          </a>
        </li>
      </ul>
    </div>
  );
};

//   return (
//     <div style={groupInfoStyle}>
//       <h2 style={groupTitleStyle}>Designed and implemented by:</h2>
//       <ul style={memberListStyle}>
//         <li style={memberItemStyle}>"Pranav Prashant" - <a href="mailto:ipranavprashant@gmail.com">ipranavprashant@gmail.com</a></li>
//       </ul>
//     </div>
//   );
// };

export default GroupInfo;
