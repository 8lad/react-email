import { render } from "@react-email/render";
import { writeFileSync } from "fs";
import { EmailTemplate } from "../emails/EmailTemplate";

const html = render(EmailTemplate(), {
  pretty: true,
});

writeFileSync("./build/index.html", html);
