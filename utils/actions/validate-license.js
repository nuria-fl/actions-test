const core = require("@actions/core");
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
  .then(({ repository }) => {
    // TODO: filter valid licenses
    if (!repository || !repository.licenseInfo) {
      core.setFailed("No repository license information");
    }
  })
  .catch(e => console.error(e));
