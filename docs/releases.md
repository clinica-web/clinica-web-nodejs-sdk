# Releasing the npm package

## One-time setup

Push these files to [clinica-web/clinica-web-nodejs-sdk](https://github.com/clinica-web/clinica-web-nodejs-sdk)
with default branch `main`. The package name is
`@clinica-web/sdk`; the publishing account must own or have publish permission
in that npm scope. The SDK is distributed under the MIT license.

1. In GitHub Settings > Actions > General, allow GitHub Actions to create and
   approve pull requests. Use squash merges and the PR title as the squash commit
   title. Conventional Commit titles are checked by CI.
2. Create a GitHub environment named `npm`. Restrict it to `main`. Required
   reviewers are optional; omit them if merging the release PR should publish
   automatically. Protect main with the `Verify (Node 22)` and `Verify (Node 24)`
   checks. Do not require the Release workflow on ordinary PRs.
3. If the npm package does not exist, bootstrap it once with an authorized npm
   account (interactive `npm login`, then `npm ci`, `npm run verify`, and
   `npm publish --access public`). The `repository` URL is already configured in
   package.json. Do not commit npm credentials. The current
   release baseline is 0.1.0; do not republish a version that already exists.
4. In npm package Settings > Trusted Publisher, select GitHub Actions and enter:

   | Field                | Value                       |
   | -------------------- | --------------------------- |
   | Organization or user | `clinica-web`               |
   | Repository           | `clinica-web-nodejs-sdk`    |
   | Workflow filename    | `release.yml`               |
   | Environment          | `npm`                       |
   | Allowed actions      | Enable direct `npm publish` |

No NPM_TOKEN or personal GitHub token is needed. The built-in GITHUB_TOKEN manages
release PRs. Publishing uses OIDC on a GitHub-hosted runner. Keep the workflow and
environment names identical to the npm settings.

## Normal release

Merge PRs titled `fix: ...`, `feat: ...`, or `feat!: ...`. Release Please updates
one release PR with package.json, package-lock.json, the release manifest and
CHANGELOG.md. Review and merge it to create the GitHub release and publish to npm.
For 0.x, features and breaking changes bump minor; fixes bump patch. After 1.0,
breaking changes bump major. Use an explicit Release-As commit footer when
intentionally graduating to 1.0.0; do not bump package.json alone.

CI is explicitly dispatched for Release Please branches because bot-created PR
checks may otherwise require manual approval. It runs with read-only permissions.
The dispatch is an exception to GitHub's GITHUB_TOKEN event recursion restrictions.
If dispatch fails, use Actions > CI > Run workflow on the release PR branch.

The publish job checks out the exact SHA returned by Release Please, installs
locked dependencies, runs the full verification suite, and checks package,
lockfile and manifest versions against the release version. It writes the actual
GitHub repository into the package metadata for provenance, then publishes the
stable version to `latest`. It does not publish on ordinary PRs. Actions are pinned
to commit SHAs; Node 24 is used for publishing, with an npm >=11.5.1 check.

This setup has no beta channel. The metadata check rejects prereleases instead of
accidentally moving latest to a beta. OpenAPI regeneration still needs a reviewed
change classification; Release Please does not detect breaking TypeScript changes.

If publishing fails after the GitHub release was created, fix external settings
and use **Re-run failed jobs** on that workflow run. This retains the release job's
outputs and original SHA. Re-running all jobs may find no new release. If npm
already contains that version, do not overwrite it: inspect the existing package
and release a new version for any corrections.

## References

- [Release Please Action](https://github.com/googleapis/release-please-action)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [GitHub workflow triggering](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)
