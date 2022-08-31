import React from "react";
import { BiArchiveIn } from "@react-icons/all-files/bi/BiArchiveIn";
import { BiArchiveOut } from "@react-icons/all-files/bi/BiArchiveOut";

export default function ArchiveBtn({ doArchive, selection }) {
  return (
    <div
      className="ripple"
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        width: "130px",
        height: "47px",
        borderRadius: "5px",
        marginLeft: "2%",
        marginTop: "2%",
      }}
      onClick={doArchive}
    >
      {selection == 0 ? (
        <div style={styles.archiveContainer} >
          <BiArchiveIn fontSize={"30"} />
          <div style={styles.archiveText}>Archive All Calls</div>
        </div>
      ) : (
        <div style={styles.archiveContainer} onClick={doArchive}>
          <BiArchiveOut fontSize={"30"} />
          <div style={styles.archiveText}>UnArchive All Calls</div>
        </div>
      )}
    </div>
  );
}
const styles = {
  archiveText: { paddingTop: "4%", paddingLeft: "2%" },
  archiveContainer: { display: "flex" },
};