import { useEffect } from "react";
import * as actions from "../libs/actions";
import { UseAppContext } from "../appContext";
import dateFormat from "dateformat";
import { backendurl } from "../libs/backendurl";

function useFetch() {
  const { dispatch, refreshSwitch, state } = UseAppContext();

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(backendurl);
      let data = await response.json();
      console.log(data);

      let altDate;

      for (let i = 0; i < data.length; i++) {
        altDate = new Date(Date.parse(data[i].dateset));
        data[i].dateset = dateFormat(altDate.toJSON(), "mmmm dS, yyyy");
      }
      dispatch({ type: actions.FETCH, payload: data });
    }

    fetchData();
  }, [refreshSwitch]);

  return state;
}

export default useFetch;
