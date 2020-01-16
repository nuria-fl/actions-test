const getInfo = require("./get-pr-info");
let data = require(process.env.GITHUB_EVENT_PATH);

console.log(data);

const info = getInfo(data);

console.log(info);
