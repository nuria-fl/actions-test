const fs = require("fs");

let data = require(process.env.GITHUB_EVENT_PATH);

fs.writeFileSync(
  `data/submissions/${data.client_payload.user}-${data.client_payload.user}.json`,
  JSON.stringify(data.client_payload)
);
