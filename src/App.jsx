import { Tabs, Tab } from "@mui/material";
import Phone from "@mui/icons-material/Phone";
import Dialpad from "@mui/icons-material/Dialpad";
import Contacts from "@mui/icons-material/Contacts";
import Settings from "@mui/icons-material/Settings";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import CallsItems from "./components/CallsItems.jsx";
import ArchiveBtn from "./components/ArchiveBtn.jsx";
import getValues from "./helper/getValues.js";
import doArchive from "./helper/doArchive.js";

const App = () => {
  const [calls, setCallLogs] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [selection, setselection] = useState(0);

  useEffect(() => {
    getValues(setArchivedCalls, setCallLogs);
  }, []);

  useEffect(() => {}, [selection, calls, archivedCalls]);

  function changeSlection() {
    if (selection === 0) {
      setselection(1);
    } else {
      setselection(0);
    }
  }

  return (
    <div className="container">
      <div onClick={changeSlection}>
        <Header selection={selection} />
      </div>
      <div className="list">
        <ArchiveBtn
          doArchive={() => {
            doArchive(
              selection,
              setArchivedCalls,
              setCallLogs,
              calls,
              archivedCalls
            );
          }}
          selection={selection}
        />
        <CallsItems
          calls={selection == 0 ? calls : archivedCalls}
          doArchive={doArchive}
          selection={selection}
        />
      </div>
      <div className="tabs">
        <Tabs sx={{ bgcolor: "oldlace" }} value={1}>
          <Tab icon={<Contacts />} aria-label="contacts" />
          <Tab icon={<Phone />} aria-label="Phone" />
          <Tab icon={<Dialpad />} aria-label="numberpad" />
          <Tab icon={<Settings />} aria-label="settings" />
        </Tabs>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
