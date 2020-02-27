import * as React from "react";
import { Switch, Route, Link } from "wouter";
import { css } from "emotion";
import Lecture1 from "./Lecture1";
import Lecture2 from "./Lecture2";
import Lecture3 from "./Lecture3";

export default function App(props) {
  return (
    <Switch>
      <Route path="/lecture-1/" component={Lecture1} />
      <Route path="/lecture-2/" component={Lecture2} />
      <Route path="/lecture-3/" component={Lecture3} />
      <Route path="/:rest*">
        <div
          className={css`
            text-align: center;
          `}
        >
          <h1>Lectures</h1>
          <div>
            <Link to="/lecture-1/">Lecture 1</Link>
          </div>
          <div>
            <Link to="/lecture-2/">Lecture 2</Link>
          </div>
          <div>
            <Link to="/lecture-3/">Lecture 3</Link>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
