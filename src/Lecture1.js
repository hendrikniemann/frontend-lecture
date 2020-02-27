import React from "react";
import "./App.css";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Table,
  TableBody,
  TableHeader,
  ListItem,
  List,
  TableRow,
  TableItem,
  TableHeaderItem,
  Appear
} from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture1() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading size={1}>Web Frontend Technologies</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Module Outline</Heading>
        <List textColor="primary">
          <ListItem>Learning Unit</ListItem>
          <ListItem>Project Consultation</ListItem>
          <ListItem>Assessment</ListItem>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Learning Unit</Heading>
        <List textColor="primary">
          <ListItem>30 minute topic-specific talk</ListItem>
          <ListItem>30 minutes discussion and student input</ListItem>
          <ListItem>60 minute workshop</ListItem>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Learning Units</Heading>
        <Table margin="2em 0 0" textColor="primary">
          <TableHeader>
            <TableRow>
              <TableHeaderItem textSize="2rem">#</TableHeaderItem>
              <TableHeaderItem textSize="2rem">Date</TableHeaderItem>
              <TableHeaderItem textSize="2rem">Topic</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem textSize="2rem">1</TableItem>
              <TableItem textSize="2rem">13.02.2020</TableItem>
              <TableItem textSize="2rem">
                Introduction and Development Setup
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">2</TableItem>
              <TableItem textSize="2rem">20.02.2020</TableItem>
              <TableItem textSize="2rem">
                API Calls and Authentication
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">3</TableItem>
              <TableItem textSize="2rem">27.02.2020</TableItem>
              <TableItem textSize="2rem">Global State Management</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">4</TableItem>
              <TableItem textSize="2rem">05.03.2020</TableItem>
              <TableItem textSize="2rem">
                Styling Solutions and Conditional Rendering
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">5</TableItem>
              <TableItem textSize="2rem">19.03.2020</TableItem>
              <TableItem textSize="2rem">
                Testing and Static Code Analysis
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">6</TableItem>
              <TableItem textSize="2rem">26.03.2020</TableItem>
              <TableItem textSize="2rem">Web Security</TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">7</TableItem>
              <TableItem textSize="2rem">02.04.2020</TableItem>
              <TableItem textSize="2rem">
                Current and Upcoming Web Trends
              </TableItem>
            </TableRow>
            <TableRow>
              <TableItem textSize="2rem">8</TableItem>
              <TableItem textSize="2rem">23.04.2020</TableItem>
              <TableItem textSize="2rem">
                Performance and Network Optimisation
              </TableItem>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Project Consultation</Heading>
        <Text margin="1em 0 0" textAlign="left" lineHeight="1.15">
          Consultation sessions are on Thursday afternoons. You can book a
          session via Google Calendar. You can also consult me outside of these
          office hours: Write me on Slack: <strong>@Hendrik Niemann</strong>
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Assessments</Heading>
        <Text margin="1em 0 0" textAlign="left" lineHeight="1.15">
          Group assessments at the end of the semester. <br />
          Please talk to me about anything deriving from the regular assessment
          practice.
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Your project ideas</Heading>
        <Appear>
          <Heading size="5">
            Who has a specific project in mind for this module?
          </Heading>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="2">SPA</Heading>
        <Appear>
          <Heading size="4">Single Page Application Architecture</Heading>
        </Appear>
      </Slide>
      <Slide bgColor="secondyary">
        <Heading size="1">Compile!</Heading>
      </Slide>
      <Slide bgColor="secondyary">
        <Heading size="1">Bundle!</Heading>
      </Slide>
      <Slide bgColor="secondyary">
        <Heading size="1">Optimise!</Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">Today's Goal</Heading>
        <List>
          <ListItem>
            Choose a language (e.g. JavaScript, TypeScript, Elm, Reason, ...)
          </ListItem>
          <ListItem>Setup Development Environment for frontend</ListItem>
          <ListItem>Make first API call</ListItem>
        </List>
      </Slide>
    </Deck>
  );
}
