import * as React from "react";
import {
  Deck,
  Slide,
  Heading,
  Quote,
  Text,
  Code,
  List,
  ListItem,
  CodePane,
} from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture2(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>API Calls and Authentication</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">AJAX</Heading>
        <Heading size="5">Asynchronous JavaScript + XML</Heading>
        <Quote textSize="1.2em" margin="1em 0 0">
          With Ajax, web applications can send and retrieve data from a server
          asynchronously (in the background) without interfering with the
          display and behavior of the existing page
        </Quote>
        <Text textSize="1em" textAlign="right" margin="0.5em 0 0">
          -{" "}
          <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">
            Wikipedia Article on Ajax
          </a>
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Thin Client / Fat Client</Heading>
        <Text>
          A thin client does very little work, e.g. displaying a static HTML
          website. A fat client contains business logic and only communicates
          the essential bits of data with the server.
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Things usually done by a fat client</Heading>
        <List>
          <ListItem>Loading data from backend or database</ListItem>
          <ListItem>Filling markdown with data (rendering)</ListItem>
          <ListItem>Routing (reacting to changes of the address bar)</ListItem>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Fetching data from an API</Heading>
        <Text>
          We can use <Code>fetch</Code> to make requests from JavaScript and get
          the contents of the response.
        </Text>
        <Text margin="20px 0 0">
          APIs often use the JSON format to represent the transmitted data. An
          alternative is the protobuf format.
        </Text>
      </Slide>
    </Deck>
  );
}
