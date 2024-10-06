"use client";


import React, { useEffect, useState } from "react";

interface LinkType {
  id: string;
  text: string;
}

const Onthispage = ({ htmlContent }: { htmlContent: string }) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;
    const headings = temp.querySelectorAll("h2,h3");
    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-$[index]`;
      heading.id = id;

      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText,
      });
    });
    setLinks(generatedLinks)
  }, [htmlContent]);

  return (
  <div className="hidden md:block">
    <div className="sticky">
        <h2>On this page</h2>
        <ul>
            {links && links.map((link)=>{
                return <li key={link.id}>
                    <a href={`#${link.id}`}>{link.text}</a>
                </li>
            })}
        </ul>
    </div>

  </div>
  )
};

export default Onthispage;
