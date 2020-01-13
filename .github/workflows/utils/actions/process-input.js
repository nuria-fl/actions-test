const fs = require("fs");

let data = require(process.env.GITHUB_EVENT_PATH);
let output = JSON.parse(data.client_payload);

fs.writeFileSync(
  `data/submissions/${data.client_payload.user}-${data.client_payload.user}.json`,
  JSON.stringify(output)
);
