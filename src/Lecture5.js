import * as React from "react";
import { Deck, Slide, Heading, Text, Appear, List, ListItem } from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture5(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Testing Frontend Applications</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">Why test?</Heading>
        <Text>
          Tests are part of most modern software development workflows.
        </Text>
        <Appear>
          <Text>
            Tests help us to be more confident about the correctness of our
            code.
          </Text>
        </Appear>
      </Slide>
      <Slide bgColor="secondary">
        <Heading size="1">Manual vs. Automated testing.</Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">The testing pyramid</Heading>
        <Appear>
          <List>
            <ListItem>Unit Tests</ListItem>
            <ListItem>Integration Tests</ListItem>
            <ListItem>E2E Tests</ListItem>
          </List>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">Unit Tests</Heading>
        <Text>
          Test isolated parts of your business logic. Great to tests helpers
          functions, action creators, reducers or simple components.
        </Text>
        <ToolOfChoice link="https://jestjs.io/en/">Jest</ToolOfChoice>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">Integration Tests</Heading>
        <Text>
          Test how multiple parts of your application work together. Here we are
          testing logic heavy components.
        </Text>
        <ToolOfChoice link="https://testing-library.com/">
          Testing Library
        </ToolOfChoice>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">E2E testing</Heading>
        <Text>
          In E2E testing we are trying to replicate how a user of our software
          would interact with it in production. The whole software stack is
          being tested at once.
        </Text>
        <ToolOfChoice link="https://www.cypress.io/">Cypress</ToolOfChoice>
      </Slide>
      <Slide bgColor="primary">
        <Heading textColor="tertiary" size="3">
          Chose the right tool for the job!
        </Heading>
        <Text textSize="128" margin="1em 0 0">
          <span role="img" aria-label="emoji of a hammer">
            🔨
          </span>
        </Text>
      </Slide>
    </Deck>
  );
}

function ToolOfChoice(props) {
  return [
    <Heading size="6" margin="1em 0 0">
      Tool of choice:
    </Heading>,
    <Text>
      <a href={props.link}>{props.children}</a>
    </Text>
  ];
}
