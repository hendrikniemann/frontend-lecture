import * as React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Appear,
  List,
  ListItem,
  CodePane,
  Code
} from "spectacle";
import CodeLogo from "./CodeLogo";
import theme from "./theme";

export default function Lecture4(props) {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Styling and Conditional Rendering</Heading>
        <CodeLogo />
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">Dynamic web applications</Heading>
        <Text>
          Modern web applications are <i>dynamic</i> and <i>interactive</i>.
        </Text>
        <Appear>
          <Text>
            This means things change depending on the underlying data.
          </Text>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="3">What can change?</Heading>
        <List>
          <ListItem>DOM nodes appear, disappear or move</ListItem>
          <ListItem>DOM node attributes change</ListItem>
        </List>
      </Slide>
      <QuickCodeSlide
        title="Declarative abstractions"
        code={`\
function NameDisplay(props) {
  if (props.character.name) {
    return <div>{props.character.name}</div>;
  } else {
    return <div>Arya Stark</div>;
  }
}

// translates to actions when name changes:
divRef.innerText = props.character.name;
divRef.innerText = 'Arya Stark';`}
      />
      <QuickCodeSlide
        title="One more example"
        code={`\
function Character(props)
  return (
    <div>
      <NameDisplay character={props.character} />
      {props.character.house && (
        <span style={{ color: props.character.house.color }}>
          {props.character.house.name}
        </span>
      )}
    </div>
  );
}

// translates to
const spanRef = document.createElement('span');
spanRef.style.color = props.character.house.color;
spanRef.innerText = props.character.house.name;
divRef.appendChild(spanRef);
// an to reverse
divRef.removeChild(spanRef);`}
      />
      <Slide bgColor="tertiary">
        <Heading size="5">Which leads us to...</Heading>
        <Appear>
          <Heading size="2">Styling!</Heading>
        </Appear>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="5">Example</Heading>
        <Heading size="4">Imagine we want to achieve the following</Heading>
        <Text padding="0.5em 0 0">
          Create a button component. The button component takes two props:{" "}
          <Code>children</Code> for the content and <Code>backgroundColor</Code>{" "}
          which is one of our theme colors.
        </Text>
      </Slide>
      <QuickCodeSlide
        title="Basic inlining"
        code={`\
function Button(props) {
  const theme = useTheme();
  const backgroundColor = theme.colors[props.backgroundColor];
  return <button style={{ backgroundColor }}>{props.children}</button>;
}`}
      />
      <ProConsSlide
        title="Basic inlining"
        pros={["Colocation", "Simple"]}
        cons={["Slow"]}
      />
      <QuickCodeSlide
        title="CSS Classes"
        code={`\
import './Button.css';

function Button(props) {
  const className = \`button-\${props.backgroundColor}\`;
  return <button className={className}>{props.children}</button>;
}`}
      />
      <ProConsSlide
        title="CSS Classes"
        pros={["Super fast (browser native styling)", "Simple"]}
        cons={[
          "CSS doesn't scale well (improvements possible with CSS Preprocessors)"
        ]}
      />
      <QuickCodeSlide
        title="CSS modules"
        code={`\
import classNames from 'Button.css';

function Button(props) {
  const className = classNames[\`button-\${props.backgroundColor}\`];
  return <button className={className}>{props.children}</button>;
}`}
      />
      <ProConsSlide
        title="CSS Classes"
        pros={[
          "Super fast (browser native styling)",
          "solves global name problems in CSS"
        ]}
      />
      <QuickCodeSlide
        title="CSS framework (Tailwind style)"
        code={`\
import cx from 'classnames';

function Button(props) {
  const className = cx(\`bg-\${props.backgroundColor}\`, "rounded-md");
  return <button className={className}>{props.children}</button>;
}`}
      />
      <ProConsSlide
        title="CSS Framework"
        pros={[
          "Built in theme and accessability",
          "Colocation of styles and markup"
        ]}
        cons={[
          "Conditionally rendering a lot of classes is not very ergonomic",
          "Type safety could be better but tooling is catching up"
        ]}
      />
      <QuickCodeSlide
        title="Component framework"
        code={`\
import { Button } from 'material-ui';

function Button(props) {
  return <Button color={props.backgroundColor}>{props.children}</button>;
}`}
      />
      <ProConsSlide
        title="Component Framework"
        pros={["Quick Prototyping", "Beautiful styles by default"]}
        cons={[
          'Hard to change/customise components, usually leads to "hacking"'
        ]}
      />
      <QuickCodeSlide
        title="Styled Components"
        code={`\
import { styled } from '@emotion/styled';

const Button = styled(Button)(props => ({
  borderRadius: props.theme.radii.md,
  backgroundColor: props.theme[props.backgroundColor],
});`}
      />
      <ProConsSlide
        title="Styled Components"
        pros={[
          "Colocation of styles and markup",
          "Easy conditional styles",
          "CSS native syntax in JavaScript"
        ]}
        cons={["Lot's of little styles component"]}
      />
      <QuickCodeSlide
        title="Styled System"
        code={`\
import { styled } from '@emotion/styled';
import { background } from 'styled-system';

const Button = styled.button\`
  border-radius: \${props => props.theme.radii.md};
  \${background}
\`;`}
      />
      <ProConsSlide
        title="Styled Components"
        pros={[
          "Standardised theme structure",
          "Reduces typing and makes extendable components easy"
        ]}
        cons={["Similar problems as styled components"]}
      />
      <QuickCodeSlide
        title="Theme UI / Chakra UI"
        code={`\
import { Button } from '@chakra/core';

// Or use Button directly
function Button(props) {
  return (
    <Button borderRadius="md" backgroundColor={props.backgroundColor}>
      {props.children}
    </Button>
  );
}`}
      />
      <ProConsSlide
        title="Styled Components"
        pros={[
          "Colocation of styles and markup",
          "Extendable base components (don't start from raw HTML like styled components)",
          "Static type checking (with TypeScript)"
        ]}
        cons={[
          "Components get verbose",
          "not all things are directly supported (e.g. animations)"
        ]}
      />
      <Slide bgColor="tertiary">
        <Heading size="5">Note:</Heading>
        <Text padding="0.5em 0 0">
          All the approaches are compatible with each other. For the health of
          your code base it could be valuable to define a consistent method of
          styling.
        </Text>
        <Text padding="0.5em 0 0">
          Unfortunately, most student projects don't reach a scale where one
          method would prove better than the others, so feel free to experiment
          around!
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="4">Personal Choice</Heading>
        <Text padding="0.5em 0 0">
          I really like Chakra UI with its great defaults and extendability.
          Sometimes I use Styled Components or Emotion as a fallback. Chakra UI
          is designed to enable this backwards compatibility.
        </Text>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading size="6" textAlign="left">
          Links
        </Heading>
        <List>
          <ListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emotion.sh/docs/introduction"
            >
              Emotion
            </a>
          </ListItem>
          <ListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://material-ui.com/"
            >
              Material UI
            </a>
          </ListItem>
          <ListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chakra-ui.com/"
            >
              Chakra UI
            </a>
          </ListItem>
          <ListItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theme-ui.com"
            >
              Theme UI
            </a>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  );
}

const QuickCodeSlide = props => (
  <Slide bgColor="tertiary">
    <Heading size="3">{props.title}</Heading>
    <CodePane lang="js" textSize="0.85em" source={props.code} />
  </Slide>
);

const ProConsSlide = props => (
  <Slide bgColor="tertiary">
    <Heading size="3">{props.title}</Heading>
    {props.pros && (
      <>
        <Heading size="5" textAlign="left">
          Pros
        </Heading>
        <List>
          {props.pros.map(pro => (
            <ListItem>{pro}</ListItem>
          ))}
        </List>
      </>
    )}
    {props.cons && (
      <>
        <Heading size="5" textAlign="left">
          Cons
        </Heading>
        <List>
          {props.cons.map(con => (
            <ListItem>{con}</ListItem>
          ))}
        </List>
      </>
    )}
  </Slide>
);
