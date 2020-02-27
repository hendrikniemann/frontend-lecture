import * as React from "react";
import { Deck, Slide, Heading, Text, CodePane } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import CodeLogo from "./CodeLogo";
import theme from "./theme";
import raw from "raw.macro";

export default function Lecture3(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Global State Management</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Component State</Heading>
        <Text>
          Most component frameworks come with a built-in per-component state
          management solution.
        </Text>
      </Slide>
      <CodeSlide
        textSize="0.7em"
        lang="js"
        code={raw("./examples/react-state-example.js")}
        ranges={[
          { loc: [0, 270], title: "Levels of State management" },
          { loc: [3, 4], title: "Component State" },
          { loc: [4, 9], note: "Fetch data on component mount" },
          { loc: [7, 8], note: "Set component state" },
          { loc: [10, 22], note: "Render conditionally" },
          {
            loc: [24, 28],
            note: "What if the state is used by multiple components?"
          },
          { loc: [29, 44], title: "Lift the state!" },
          {
            loc: [29, 44],
            note:
              "But by lifting the state we need to pass around a lot values."
          },
          { loc: [45, 49], title: "Context to the rescue" },
          { loc: [50, 69], note: "Expose state and actions via context" },
          { loc: [70, 87], note: "Consume app state" },
          { loc: [88, 103], title: "Complex state with reducer" },
          { loc: [105, 106], note: "useReducer insted of useState!" },
          { loc: [106, 127], note: "Action abstractions" },
          { loc: [128, 133], note: "Pass down state and actions." }
        ]}
      />
      <Slide bgColor="tertiary">
        <Heading size="3">Redux</Heading>
        <Text>
          Redux provides helper functions and patterns to do the "reducer in
          context" at scale.
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">GraphQL clients</Heading>
        <Text>
          GraphQL clients help us with the reducer logic. Redux is (usually) not
          needed anymore.
        </Text>
      </Slide>
    </Deck>
  );
}
