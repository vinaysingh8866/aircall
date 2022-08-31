import formatDate from "./formatDate";

function custom_sort(a, b) {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  }
export default function getValues(setArchivedCalls,setCallLogs) {
    fetch("https://aircall-job.herokuapp.com/activities", {
      method: "GET",
    }).then((response) => {
      response.json().then((dataTempta) => {
        var dataTemp = dataTempta.sort(custom_sort);
        var listItems = {};
        var archived = {};
        for (const item in dataTemp) {
          const dataTempte = formatDate(dataTemp[item].created_at).dateStr;
          if (dataTemp[item].is_archived === true) {
            if (archived[dataTempte] === undefined) {
              archived[dataTempte] = [];
            }
            archived[dataTempte].push(dataTemp[item]);
          } else {
            if (listItems[dataTempte] === undefined) {
              listItems[dataTempte] = [];
            }
            listItems[dataTempte].push(dataTemp[item]);
          }
        }
        setArchivedCalls(archived);
        setCallLogs(listItems);
      });
    });
}