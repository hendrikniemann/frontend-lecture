import * as React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Appear,
  List,
  ListItem,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem,
} from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture6(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Web Security</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">The CIA triad</Heading>
        <List>
          <Appear>
            <ListItem>Confidentiality</ListItem>
          </Appear>
          <Appear>
            <ListItem>Integrity</ListItem>
          </Appear>
          <Appear>
            <ListItem>Availability</ListItem>
          </Appear>
        </List>
      </Slide>
      {/* Slide about Risk and Impact? */}
      <Slide bgColor="tertiary">
        <Heading size="5">The number one rule of web development:</Heading>
        <Appear>
          <Heading size="2">Don't trust the client!</Heading>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Validation</Heading>
        <Table margin="2em 0 0">
          <TableHeader>
            <TableHeaderItem>Backend</TableHeaderItem>
            <TableHeaderItem>Frontend</TableHeaderItem>
          </TableHeader>
          <TableRow>
            <Appear>
              <TableItem>Security</TableItem>
            </Appear>
            <Appear>
              <TableItem>Usability</TableItem>
            </Appear>
          </TableRow>
        </Table>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="3" textColor="tertiary">
          Does this mean security is not relevant for frontend developers?
        </Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Text>Many attacks focus on the browsers of other users.</Text>
        <Text margin="1em 0 0">E.g. XSS, session hijacking, CSRF, ...</Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">OWASP Top 10</Heading>
        <Text>
          Every year the OWASP Organisation collects data about security
          vulnerabilies and ranks the{" "}
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer"
          >
            top ten
          </a>{" "}
          most critical web application security risks.
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="4" textColor="tertiary">
          Group work: Let's look at some vulnerabilities together!
        </Heading>
        <List>
          <ListItem>Overview: What is it? How does it work?</ListItem>
          <ListItem>How can I prevent it?</ListItem>
          <ListItem>What tools or frameworks help me with this?</ListItem>
        </List>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="4" textColor="tertiary">
          XSS
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="4" textColor="tertiary">
          Injection
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="4" textColor="tertiary">
          Components with known vulnerabilies
        </Heading>
      </Slide>
      <Slide bgColor="primary">
        <Heading size="4" textColor="tertiary">
          Session hijacking
        </Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">
          Thanks to modern tools we get high levels of security (almost) for
          free.
        </Heading>
      </Slide>
    </Deck>
  );
}
