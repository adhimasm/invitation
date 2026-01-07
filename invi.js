// Octokit.js
// https://github.com/octokit/core.js#readme

const octokit = new Octokit({
  auth: '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OUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/invitations', {
  owner: 'adhimasm',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
