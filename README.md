# sass
sass projects
[Learning Git](https://www.tutorialspoint.com/git/index.htm) — GitHub Tutorials
==================================================

What is Git?
--------------------------------------

Git is a distributed revision control and source code management system with an emphasis on speed. 
Git is used for project version control in a distributed environment while working on web-based and non web-based applications development.

**Advantages of Git:**
- Free and open source
- Fast and small
- Implicit backup
- Security
- No need of powerful hardware
- Easier branching

Version Control System
--------------------------------------

Version Control System (VCS) is a software that helps software developers to work together and maintain a complete history of their work.

**Listed below are the functions of a VCS:**
- Allows developers to work simultaneously.
- Does not allow overwriting each other’s changes.
- Maintains a history of every version.

**Following are the types of VCS:**
- Centralized version control system (CVCS).
- Distributed/Decentralized version control system (DVCS).

### Distributed Version Control System
Centralized version control system (CVCS) uses a central server to store all files and enables team collaboration. But the major drawback of CVCS is its single point of failure, i.e., failure of the central server. Unfortunately, if the central server goes down for an hour, then during that hour, no one can collaborate at all. And even in a worst case, if the disk of the central server gets corrupted and proper backup has not been taken, then you will lose the entire history of the project. Here, distributed version control system (DVCS) comes into picture.

DVCS clients not only check out the latest snapshot of the directory but they also fully mirror the repository. If the server goes down, then the repository from any client can be copied back to the server to restore it. Every checkout is a full backup of the repository. Git does not rely on the central server and that is why you can perform many operations when you are offline. You can commit changes, create branches, view logs, and perform other operations when you are offline. You require network connection only to publish your changes and take the latest changes.



DVCS Terminologies
--------------------------------------

#### 1. Local Repository
Every VCS tool provides a private workplace as a working copy. Developers make changes in their private workplace and after commit, these changes become a part of the repository. Git takes it one step further by providing them a private copy of the whole repository. Users can perform many operations with this repository such as add file, remove file, rename file, move file, commit changes, and many more.

#### 2. Working Directory and Staging Area or Index
The working directory is the place where files are checked out. In other CVCS, developers generally make modifications and commit their changes directly to the repository. But Git uses a different strategy. Git doesn’t track each and every modified file. Whenever you do commit an operation, Git looks for the files present in the staging area. Only those files present in the staging area are considered for commit and not all the modified files.

Let us see the basic workflow of Git.

Step 1 : You modify a file from the working directory.

Step 2 : You add these files to the staging area.

Step 3 : You perform commit operation that moves the files from the staging area. After push operation, it stores the changes permanently to the Git repository.

Suppose you modified two files, namely “sort.c” and “search.c” and you want two different commits for each operation. You can add one file in the staging area and do commit. After the first commit, repeat the same procedure for another file.

```bash
# First commit
[bash]$ git add sort.c

# adds file to the staging area
[bash]$ git commit –m “Added sort operation”

# Second commit
[bash]$ git add search.c

# adds file to the staging area
[bash]$ git commit –m “Added search operation”
```

#### 3. Blobs
Blob stands for Binary Large Object. Each version of a file is represented by blob. A blob holds the file data but doesn’t contain any metadata about the file. It is a binary file, and in Git database, it is named as SHA1 hash of that file. In Git, files are not addressed by names. Everything is content-addressed.

#### 4. Trees
Tree is an object, which represents a directory. It holds blobs as well as other sub-directories. A tree is a binary file that stores references to blobs and trees which are also named as SHA1 hash of the tree object.

#### 5. Commits
Commit holds the current state of the repository. A commit is also named by SHA1 hash. You can consider a commit object as a node of the linked list. Every commit object has a pointer to the parent commit object.

#### 6. Branches
Branches are used to create another line of development. By default, Git has a master branch, which is same as trunk in Subversion. Usually, a branch is created to work on a new feature. Once the feature is completed, it is merged back with the master branch and we delete the branch. Every branch is referenced by HEAD, which points to the latest commit in the branch. Whenever you make a commit, HEAD is updated with the latest commit.

#### 7. Tags
Tag assigns a meaningful name with a specific version in the repository. Tags are very similar to branches, but the difference is that tags are immutable. It means, tag is a branch, which nobody intends to modify. Once a tag is created for a particular commit, even if you create a new commit, it will not be updated. Usually, developers create tags for product releases.

#### 8. Clone
Clone operation creates the instance of the repository. Clone operation not only checks out the working copy, but it also mirrors the complete repository. Users can perform many operations with this local repository.

#### 9. Pull
Pull operation copies the changes from a remote repository instance to a local one. The pull operation is used for synchronization between two repository instances. This is same as the update operation in Subversion.

#### 10. Push
Push operation copies changes from a local repository instance to a remote one. This is used to store the changes permanently into the Git repository. This is same as the commit operation in Subversion.

#### 11. HEAD
HEAD is a pointer, which always points to the latest commit in the branch. Whenever you make a commit, HEAD is updated with the latest commit. The heads of the branches are stored in .git/refs/heads/ directory.

#### 12. Revision
Revision represents the version of the source code. Revisions in Git are represented by commits. These commits are identified by SHA1 secure hashes.

#### 13. URL

URL represents the location of the Git repository. Git URL is stored in config file.

```bash
[tom@CentOS tom_repo]$ pwd
/home/tom/tom_repo

[tom@CentOS tom_repo]$ cat .git/config
[core]
repositoryformatversion = 0
filemode = true
bare = false
logallrefupdates = true
[remote "origin"]
url = gituser@git.server.com:project.git
fetch = +refs/heads/*:refs/remotes/origin/*
```

Customize Git Environment
----------------------------

Git provides the git config tool, which allows you to set configuration variables. Git stores all global configurations in .gitconfig file, which is located in your home directory. To set these configuration values as global, add the --global option, and if you omit --global option, then your configurations are specific for the current Git repository.

#### Setting username: 

```bash
[jerry@CentOS project]$ git config --global user.name "Jerry Mouse"
```

#### Setting email id: 

```bash
[jerry@CentOS project]$ git config --global user.email "jerry@tutorialspoint.com"
```

Color highlighting
-------------------
#### The following commands enable color highlighting for Git in the console.

```bash
[jerry@CentOS project]$ git config --global color.ui true

[jerry@CentOS project]$ git config --global color.status auto

[jerry@CentOS project]$ git config --global color.branch auto
```

Setting default editor
-----------------------

```bash
[jerry@CentOS project]$ git config --global core.editor vim
```

By default, Git uses the system default editor, which is taken from the VISUAL or EDITOR environment variable. We can configure a different one by using git config.

Setting default merge tool
--------------------------

```bash
[jerry@CentOS project]$ git config --global merge.tool vimdiff
```

Git does not provide a default merge tool for integrating conflicting changes into your working tree. We can set default merge tool by enabling following settings.

Listing Git settings
--------------------

#### To verify your Git settings of the local repository, use git config –list command as given below.

```bash
[jerry@CentOS ~]$ git config --list
```

#### The above command will produce the following result.

```bash
user.name=Jerry Mouse
user.email=jerry@tutorialspoint.com
push.default=nothing
branch.autosetuprebase=always
color.ui=true
color.status=auto
color.branch=auto
core.editor=vim
merge.tool=vimdiff
```

GIT LIFE CYCLE
---------------

### General workflow is as follows:

* You clone the Git repository as a working copy.

* You modify the working copy by adding/editing files.

* If necessary, you also update the working copy by taking other developer's changes.

* You review the changes before commit.

* You commit changes. If everything is fine, then you push the changes to the repository.

* After committing, if you realize something is wrong, then you correct the last commit	and push the changes to the repository.

FRONT END DEVELOPMENT
---------------------

#### Refer to the files for basic introduction on:

* HTML
* CSS
* Javascript

