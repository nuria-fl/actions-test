function getInfo(data) {
  const title = data.pull_request.title.split(" - ");
  const body = data.pull_request.body.match(/Submitter: (.+?(?=\n))/);

  const repo = title[1].split("/");
  const submitter = body && body[1];

  return {
    repoOwner: repo[0],
    repo: repo[1],
    submitter
  };
}

module.exports = getInfo;
