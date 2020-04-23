import * as React from "react";
import { Switch, Route, Link } from "wouter";
import { css } from "emotion";
import Lecture1 from "./Lecture1";
import Lecture2 from "./Lecture2";
import Lecture3 from "./Lecture3";
import Lecture4 from "./Lecture4";
import Lecture5 from "./Lecture5";
import Lecture7 from "./Lecture7";
import Lecture8 from "./Lecture8";

export default function App(props) {
  return (
    <Switch>
      <Route path="/lecture-1/" component={Lecture1} />
      <Route path="/lecture-2/" component={Lecture2} />
      <Route path="/lecture-3/" component={Lecture3} />
      <Route path="/lecture-4/" component={Lecture4} />
      <Route path="/lecture-5/" component={Lecture5} />
      <Route path="/lecture-7/" component={Lecture7} />
      <Route path="/lecture-8/" component={Lecture8} />
      <Route path="/:rest*">
        <div
          className={css`
            text-align: center;
          `}
        >
          <h1>Lectures</h1>
          <div>
            <Link to="/lecture-1/">Lecture 1 - Introduction</Link>
          </div>
          <div>
            <Link to="/lecture-2/">
              Lecture 2 - API calls and Authentication
            </Link>
          </div>
          <div>
            <Link to="/lecture-3/">Lecture 3 - Global State Management</Link>
          </div>
          <div>
            <Link to="/lecture-4/">
              Lecture 4 - Styling and Conditional Rendering
            </Link>
          </div>
          <div>
            <Link to="/lecture-5/">
              Lecture 5 - Testing Frontend Applications
            </Link>
          </div>
          <div>
            <Link to="/lecture-7/">
              Lecture 7 - Upcoming Web Development Trends
            </Link>
          </div>
          <div>
            <Link to="/lecture-8/">
              Lecture 8 - Deployment and Performance Optimization
            </Link>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
