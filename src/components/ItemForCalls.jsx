import React from "react";
import Avatar from "@mui/material/Avatar";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import { FiPhoneMissed } from "@react-icons/all-files/fi/FiPhoneMissed";
import { FiPhoneIncoming } from "@react-icons/all-files/fi/FiPhoneIncoming";

import formatDate from "../helper/formatDate";

export default function ItemForCalls({ call, view, doArchive }) {

  return (
    <div className="expandable ripple">
      <div style={styles.conatiner1}>
        {call.direction === "outbound" ? (
          <Avatar>{call.from.slice(0, 2).toUpperCase()}</Avatar>
        ) : (
          <Avatar />
        )}
      </div>
      <div style={styles.conatiner2}>
        {call.from}
        <div style={styles.iconContainer}>
          {call.call_type === "missed" && (
            <div>
              <FiPhoneMissed color="red" key={call.id} width={"20"} />
              &nbsp;&nbsp;&nbsp;&nbsp;Missed
            </div>
          )}
          {call.call_type === "answered" && (
            <div>
              <FiPhoneIncoming key={call.id} color="green" fontSize="large" />
              &nbsp;&nbsp;&nbsp;&nbsp;Answered
            </div>
          )}
          {call.call_type === "voicemail" && (
            <div>
              <VoicemailIcon key={call.id} color="success" fontSize="small" />
              &nbsp;&nbsp;&nbsp;&nbsp;Voicemail
            </div>
          )}
        </div>
      </div>
      <div style={styles.timeContainer}>{formatDate(call.created_at).time}</div>
    </div>
  );
}
const styles = {
  conatiner1: { paddingTop: "3%" },
  conatiner2: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginLeft: "15%",
    marginRight: "5%",
    fontSize: "15px",
    paddingTop: "3%",
  },
  iconContainer: { marginTop: "5%" },
  timeContainer: {
    fontSize: "12px",
    borderLeft: "2px dotted gray",
    height: "16px",
    marginTop: "7%",
    paddingLeft: "5%",
    paddingRight: "3%",
  },
};
