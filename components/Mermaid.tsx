import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export interface MermaidProps {
  text: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [id] = useState(() => `mermaid-${Math.floor(Math.random() * 1000000)}`);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "forest",
      logLevel: 5,
    });
  }, []);

  useEffect(() => {
    if (!text || !ref.current) return;

    // Render and inject SVG
    mermaid
      .render(id, text)
      .then((svgCode: string) => {
        if (ref.current) {
          ref.current.innerHTML = svgCode;
        }
      })
      .catch((err: unknown) => {
        if (ref.current) {
          ref.current.innerHTML = `<pre style="color:red;">${String(
            err
          )}</pre>`;
        }
      });
  }, [text, id]);

  return <div ref={ref} />;
};
