import Viewer from "../Viewer";
import Classroom from "../Classroom";
import Feed from "../Feed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import useFetch from "../../hooks/useFetch";

function AppContent() {
  useFetch();

  return (
    <>



      <Header />

      <Router>
        <Switch>
          <Route path="/viewer">
            <Viewer />
          </Route>
          <Route path="/classroom">
            <Classroom />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default AppContent;



{/* <table>
<tbody>
  <tr>
    <td><Header /></td>
  </tr>
  <tr>
    <td>





    <Router>
    <Switch>
<Route path="/viewer">
  <Viewer />
</Route>
<Route path="/classroom">
  <Classroom />
</Route>
<Route path="/">
  <Feed />
</Route>
</Switch>
</Router>



    </td>
  </tr>
</tbody>
</table> */}