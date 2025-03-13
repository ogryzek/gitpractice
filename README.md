# Getting started with Git  

## Long Story
  
Let's create a small program where we prompt a user for some input, then take that input and write it to a data store of some sort (maybe a file hehe).  
  
As we write our program, we will notice that we may want to have some changes, additional features or functionality, and we will inevitably want to add them.  
  
Sometimes, we will want to revert the changes that we made, or work on different ideas at the same time, going back and forth. There are several ways to accomplish these things, but we will look at doing them with Git!  
  
Specifically, we want to look at some Git commands, including:

```
git init
git commit --message "some message here"
git status
git branch <branchname>
git -
git diff <branch or commit>
git merge <branch or commit>
git rebase <branch or commit>
git help
```

There are several other `git` commands to know and love, but for now this will be a good amount to become familiar with. Have a look at the [git documentation](https://git-scm.com/docs/) for some nice evening reading material.  
  
## Getting Started  
  
First, let's start by initializing a Git repository. This just means, we will use the Git command to add a hidden directory `.git` to our current working directory. That `.git` directory will hold information about the files and folders that we are working on, and we can use `git` commands to store and retrieve snapshots of our codebase.  
  
Initialize a git repo
```
git init
```  

## Git with GitHub  
  
We do not have to use GitHub with Git. Indeed, they are completely unrelated entities, where GitHub just happens to use the Git name, because it specializes in hosting Git repositories.  
  
In any case, let's log in to GitHub, and creat a new repository.  
  
We can add a link to the GitHub repository to our local code repository by adding a `git remote` the syntax is `git remote add remote-name <webaddress>` where `<webaddress>` is something like `git@github.com/my-username/myrepository` or something similar.  
  
We can then `push` and `pull` to and from the remote repository with the commands:  
  
```
git push remote-name branch-to-push
git pull remote-name branch-to-pull
```

Go to GitHub.com, login and create a repository. My GitHub username is Ogryzek and the repository name I created is gitpractice.  
  
This means the path that I can use to add my repository at is:  
  
for ssh:
```
git@github.com:ogryzek/gitpractice.git
```
for https:
```
https://github.com/ogryzek/gitpractice.git
```

If you're unsure which to use, you'll probably have no issues with `https` but if you're curious, make sure to [read the docs!](https://docs.github.com/en/get-started/git-basics/about-remote-repositories).  
  
With the above https remote address, I'm going to add a remote to my current git repo, so I can push and pull.  
  
```
git remote add gh https://github.com/ogryzek/gitpractice.git
```

This will add `gh` as the key and `https://github.com/ogryzek/gitpractice.git` as the value for my remote commands, e.g. `git push gh <branch-name>` will push the contents of my `<banch-name>` to the repository located at `https://github.com/ogryzek/gitpractice.git`.  
  
Let's make a commit, and then push it to our repository.  
  
`git status` gives us the current status. It shows which files are being tracked or "staged" for commit, whether they are dirty (have untracked changes) or ready to go!  
  
`git add -A` will stage all the current changes for a commit.

`git commit -m 'message goes here'` is the syntax we will use to make a commit.  

`git log` will show the commit history.  

Let's give it a try.  
  
   