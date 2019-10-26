# Contribution Guide

Thanks for being interested in contributing to our project! Here are a few guidelines.

## Opening Issues

If you see a bug or notice something that could be improved, please open an issue!
Depending on the type of issue you want to report, please select the correct template and
fill in the information it asks accordingly. Some labels will already be applied to the
issue when doing so, but feel free to attach any other relevant labels. If you plan to work
on an issue, please assign it to yourself so we know what is currently being worked on.

## Branch Naming Convention

If you are going to be contributing to our project, please do so by cloning our repository
and creating your own branch. We are following the convention of naming our branches like so:

```
<username>/#<issue-number>-<feature-description>
```

For example, if you are working on `#14 Create CONTRIBUTING.md`, you could name it something
like `rmcreyes/#14-contributing-md`.

## Submitting a Pull Request

Please use a descriptive title for your pull request and fill out the pull request template with
as much detail as you can. In particular, please reference each issue you have worked on in the
indicated section, as well as indicate if your change could close those issues.

## Updating your Branch

If changes have been merged to master between when you started working on your branch and when
your pull request was approved, you will need to update your branch. The preferred way to do this
is with a rebase. To do so, run the following on your current feature branch:

```bash
git fetch
git rebase origin/master
```

Doing this will have git proceed to apply all your changes on top of the new version of master one
by one. If a merge conflict appears when applying a certain commit, you will have to fix it before
applying any following commits. You can use `git status` and `git diff` to determine where merge
conflicts have appeared, and once fixed, use `git add <file-name>`. Once all the merge conflicts
of a commit have been fixed, you can use `git rebase --continue` to applying your following commits
until your branch is fully updated. At this point, you can update your remote branch/pull request
by pushing your branch with:

```bash
git push origin <branch-name> -f
```

The `-f` flag is important as you want GitHub to know that you want to completely change the history
of your remote branch (as rebasing does).

## Merging you Pull Request

Your change needs to pass our Travis build check and gain approval from some members of the team before
it can get merged. If a reviewer asks for a change, please make the change and update your branch again.
Once your branch passes our Travis build and gains enough approvals, please merge your branch into master
with an ordinary merge commit, not a rebase or squash merge.
