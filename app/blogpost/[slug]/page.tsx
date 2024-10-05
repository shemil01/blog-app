import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const htmlContent = `
<div>I'am html</div>
`

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    
      <MaxWidthWrapper className="">
        <h1 className="text-2xl font-bold">Title heare</h1>
        <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
        {params.slug}
      </MaxWidthWrapper>

  );
}
