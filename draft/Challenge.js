import "./styles.css";
import { use, useState } from "react";

export default function Expander() {
  return (
    <div>
      <TextExpander>
        {/*elly maktob gwa da yo3tbar children*/}
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander collapsedNumWords={20}>
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  buttonColorLess = "#ff6622",
  expanded = false,
  className = "box",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  // bykhaly eltext an array
  const words = children.split(" ");

  // law expanded by3red elchildren(textexpander elly fo2) law la by3mel slice
  const displayText = isExpanded
    ? children
    : words.slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <p>{displayText}</p>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          color: isExpanded ? buttonColorLess : buttonColor,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
