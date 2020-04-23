import * as React from "react";
import { Deck, Slide, Heading, Text, List, ListItem, Appear } from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture8(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Deployment and Performance Optimization</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="primary">
        <Heading textColor="tertiary" size={3}>
          Deployment
        </Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={4}>What is important?</Heading>
        <List>
          <ListItem>Bundle your files as static assets</ListItem>
          <ListItem>Make sure you are using production build settings</ListItem>
          <ListItem>Minimise you code</ListItem>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={4}>Great providers for hosting static content:</Heading>
        <List>
          <ListItem>Netlify</ListItem>
          <ListItem>AWS S3 and equivalents</ListItem>
          <ListItem>Vercel (ex Zeit) Now</ListItem>
        </List>
        <Text size={8}>
          I would not recommend to serve files from your API server (for a real
          project)
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Heading textColor="secondary" size={3}>
          How do you deploy your application?
        </Heading>
        <Text textColor="tertiary" margin="1em 0 0">
          Class Discussion Round
        </Text>
      </Slide>
      <Slide bgColor="primary">
        <Heading textColor="tertiary" size={3}>
          Optimisation
        </Heading>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={4}>Before optimising...</Heading>
        <Appear>
          <Heading size={2} margin="1em 0 0" textColor="primary">
            Measure first!
          </Heading>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={4}>Metrics of web performance</Heading>
        <Text margin="1em 0 0">
          <a
            href="https://wp-rocket.me/blog/11-critical-website-performance-metrics-worth-monitoring/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article
          </a>
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={4}>Available optimisations</Heading>
        <List textSize={6} margin="1em 0 0">
          <Appear>
            <ListItem>Caching (device, edge, file)</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              File size (bundle splitting, smaller libraries, less code)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              API responses (avoid request waterfalls, payload reduction,
              caching, execution time, move closer to customer)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Render performance (React.pure, avoid rerenders, SSR, ...)
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size={2} margin="1em 0 0" textColor="primary">
          The dev tools are your friend!
        </Heading>
      </Slide>
    </Deck>
  );
}
