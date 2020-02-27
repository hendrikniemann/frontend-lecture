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
          { loc: [45, 46], title: "Context to the rescue" },
          { loc: [50, 66], note: "Expose state and actions via context" },
          { loc: [67, 84], note: "Consume app state" }
        ]}
      />
    </Deck>
  );
}
