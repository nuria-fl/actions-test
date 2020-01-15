console.log("validate license");
let data = require(process.env.GITHUB_EVENT_PATH);

const title = data.pull_request.title.split(" - ");
const body = data.pull_request.body;

const repo = title[1];
const submitter = body.match(/Submitter: (.+?(?=\n))/);

console.log(repo);
console.log(submitter);
