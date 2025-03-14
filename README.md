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
  
## Add Some Code  
  
Now that we have a readme, and a working repository, we can go ahead and add in some code that does some stuff.  
  
Let's start by adding a NodeJS "Hello World!" app. Not super exciting, but better than a kick in the butt.  
  
Create a file `app.js` and add an appropriate console.log  
  
```js
// app.js
console.log("Hello, World!");
```

Add the new file and its changes to your git commit history  
  
```
git add app.js
git commit -m 'Adds a NodeJS application.'
git push gh main
```

## Using Branches  
  
Now, we want to make our application a little more interesting. Maybe not too interesting, but a little more interesting than it currently is. What do we want to do?  
  
Let's create a new branch to do some new work! And then, we'll talk about what we're going to do...  
  
What we are going to do is create a webapp that serves localhost at port 3000 with a nice Hello World! inside of an H1.  

```js
// app.js
const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World!</h1>");
    res.end("Hey there!");
}).listen(3000);

```

At this point, we have actually created a new branch `webapp`, added an app, made a commit or two, and pushed that branch up to github. We are now back on the main branch though, and making some additional changes to the README. I guess we can see what happens now.  
  
Going forward, we can do a lot of different things, really we can do whatever we want, because we are adults and our parents are not going to tell us what to do, right? So, let's go for pizza! HAHA just kidding...  
  
Realistically, we want to work with our codebase, and use branches to our advantage. So, we should explore the tools available to do so. If we want to move between branches, we can use the `git checkout <branchname>` command. If we want to bring the changes from one branch into another branch, we can use `rebase` or `merge`. These have some interesting differences that are beyond the scope of this tutorial, but I'd like you to try creating some different branches as you work on your project, and use [rebase](https://git-scm.com/docs/git-rebase) and [merge](https://git-scm.com/docs/git-merge). Also, don't forget you can always [read the docs](https://git-scm.com/doc).  
  
We have branched out to `webapp`, made new commits, came back to the main branch, made more commits. Then merged webapp with main, resolved the conflicts and finally we decided to delete the webapp branch.  
  
Here are some additional git commands to consider.  
  
```
git add 
git pull
git fetch
git push
git branch -d <branchname>
```
  
That's enough git for now. Go ahead and work on your code, while also using git and even github. Good luck and have fun!  
  

  