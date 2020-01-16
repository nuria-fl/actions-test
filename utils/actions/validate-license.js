const github = require("@actions/github");
const octokit = new github.GitHub(process.env.GITHUB_TOKEN);

const getInfo = require("./get-pr-info");
let data = require(process.env.GITHUB_EVENT_PATH);

const info = getInfo(data);

octokit
  .graphql(
    `query getLicense($owner: String!, $name: String!) {
  repository(name: $name, owner: $owner) {
    licenseInfo {
      name
      key
      spdxId
      url
    }
  }
}`,
    {
      name: info.repo,
      owner: info.repoOwner
    }
  )
  .then(result => {
    console.log(result);
  })
  .catch(e => console.error(e));
