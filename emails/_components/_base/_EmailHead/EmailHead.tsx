import * as React from "react";
import { Font, Head } from "@react-email/components";

export const EmailHead = () => {
  return (
    <Head>
      <title>Welcome email</title>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
  );
};
