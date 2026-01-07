// Octokit.js
// https://github.com/octokit/core.js#readme

const octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /repos/{owner}/{repo}/invitations', {
  owner: 'adhimasm',
  repo: 'invitation',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
