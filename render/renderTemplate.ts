import Email from "../emails/EmailTemplate";
import { render } from "@react-email/render";
import { writeFileSync } from "fs";

const html = render(Email, {
  pretty: true,
});

writeFileSync("../build/index.html", html);
