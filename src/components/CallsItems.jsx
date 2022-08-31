import React from "react";
import ItemForCalls from "./ItemForCalls.jsx";
import List from "@mui/material/List";


const styles = {
  conatiner: {
    width: "100%",
    height: "66.5vh",
    overflow: "scroll",
    marginBottom: "10%",
    bgcolor: "oldlace",
    display: "flex",
    flexDirection: "column",
  },
  innerContainer:{
    marginLeft: "37%",
    paddingTop: "5%",
  }
};
export default function CallsItems({ calls, doArchive, selection }) {
  return (
    <div style={styles.conatiner}>
      {Object.keys(calls).map((date) => {
        return Array(date).map((items, i) => {
          return (
            <div key={i}>
              <div
                style={styles.innerContainer}
              >
                {items}
              </div>
              {calls[items].map((item, p) => {
                return (
                  <div key={p}>
                    <ItemForCalls
                      call={item}
                      key={item.id}
                      view={selection}
                      doArchive={doArchive}
                    />
                  </div>
                );
              })}
            </div>
          );
        });
      })}
    </div>
  );
}
