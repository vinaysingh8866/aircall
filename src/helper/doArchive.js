import axios from "axios";
import getValues from "./getValues";

export default function doArchive(selection, setArchivedCalls,setCallLogs, calls, archivedCalls) {
    const setting = selection ? { is_archived: false } : { is_archived: true };
    const items = selection ? archivedCalls : calls;
    for (const item in items) {
      items[item].map((ob) => {
        axios
          .post(
            `https://aircall-job.herokuapp.com/activities/${ob.id}`,
            setting
          )
          .then((res) => {
            getValues(setArchivedCalls, setCallLogs);
          })
          .catch((err) => console.log(err));
      });
    }
  };