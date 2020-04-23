import * as React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Table,
  TableRow,
  TableItem
} from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture7(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Upcoming Web Development Trends</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">
          What topics should you look into today to be prepared for tomorrow?
        </Heading>
        <Text>
          Let's look at the hottest topics of web development in 2020!
        </Text>
      </Slide>
      <HotnessSlide title="GraphQL" hotness="3" productivity="4" />
      <HotnessSlide title="Static Types" hotness="2" productivity="4" />
      <HotnessSlide
        title="Functional Programming"
        hotness="4"
        productivity="2"
      />
      <HotnessSlide title="CSS in JS" hotness="1" productivity="5" />
      <HotnessSlide
        title="Atomic CSS (e.g. Tailwind)"
        hotness="3"
        productivity="3"
      />
      <HotnessSlide title="Svelte" hotness="3" productivity="2" />
      <HotnessSlide title="Progressive Web Apps" hotness="2" productivity="4" />
      <HotnessSlide
        title="React Concurrent Mode"
        hotness="4"
        productivity="1"
      />
      <HotnessSlide
        title="Static Side Generators"
        hotness="5"
        productivity="3"
      />
      <HotnessSlide
        title="Server Side Rendering"
        hotness="2"
        productivity="3"
      />
      <HotnessSlide title="Edge Caching" hotness="2" productivity="2" />
      <HotnessSlide title="API Integrations" hotness="2" productivity="5" />
      <HotnessSlide title="Low Code / No Code" hotness="5" productivity="3" />
      <HotnessSlide title="AMP" hotness="3" productivity="2" />
      <HotnessSlide title="Web Assembly" hotness="4" productivity="1" />
      <HotnessSlide title="Micro Frontends" hotness="4" productivity="2" />
    </Deck>
  );
}

function HotnessSlide(props) {
  return (
    <Slide bgColor="primary">
      <Heading size="1">{props.title}</Heading>
      <Table margin="2em 0 0">
        <TableRow>
          <TableItem textColor="tertiary">Hotness:</TableItem>
          <TableItem textColor="tertiary">Productivity:</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>{"🔥".repeat(props.hotness)}</TableItem>
          <TableItem>{"🚀".repeat(props.productivity)}</TableItem>
        </TableRow>
      </Table>
    </Slide>
  );
}
