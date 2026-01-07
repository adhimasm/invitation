// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('PATCH /repos/{owner}/{repo}/invitations/{invitation_id}', {
  owner: 'OWNER',
  repo: 'REPO',
  invitation_id: 'INVITATION_ID',
  permissions: 'write',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
