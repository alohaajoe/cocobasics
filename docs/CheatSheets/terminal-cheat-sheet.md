---
sidebar_position: 1
---

# Terminal Cheat Sheet


## SHORTCUTS     {-}

| Key/Command | Description  |
|:------------|:-------------|
| Ctrl + A   | Go to the beginning of the line you are currently typing on.|  
| Ctrl + E   | Go to the end of the line you are currently typing on. |
| Ctrl + C   | Kill whatever you are running.  Also clears everything on current line |
| Tab  | Auto-complete files and folder names |

## CORE COMMANDS  {-}

| Key/Command | Description |
| :---------- | :-----------|
| cd \[folder\] | Change directory e.g. \`cd Documents\` |
| cd |  Home directory |
| cd /  | Root of drive |
| cd -  | Previous directory |
| ls | Short listing |
| ls -l | Long listing |
| ls -a | Listing incl. hidden files |
| ls -lh| Long listing with Human readable file sizes |
| ls -R | Entire content of folder recursively |
| sudo \[command\] | Run command with the security privileges of the superuser (Super User DO) |
| nano \[file\] | Opens the file using the nano editor |


## COMMAND HISTORY  {-}

| Key/Command | Description                                                    |
|-------------|----------------------------------------------------------------|
| history n   | Shows the stuff typed – add a number to limit the last n items |
| arrow key up| Scrolls through last commands typed|



## FILE MANAGEMENT  {-}

| Key/Command                  | Description                                                      |
|------------------------------|------------------------------------------------------------------|
| touch \[file\]               | Create a new file                                                |
| pwd                          | Full path to working directory                                   |
| .                            | Current folder, e.g. \`ls .\`                                    |
| ..                           | Parent/enclosing directory, e.g. \`ls ..\`                       |
| ls -l ..                     | Long listing of parent directory                                 |
| cd ../../                    | Move 2 levels up                                                 |
| rm \[file\]                  | Remove a file, e.g. \`rm data.tmp\`                         |
| rm -i \[file\]               | Remove with confirmation                                    |
| rm -r \[dir\]                | Remove a directory and contents                                  |
| rm -f \[file\]               | Force removal without confirmation                               |
| cp \[file\] \[newfile\]      | Copy file to file                                                |
| cp \[file\] \[dir\]          | Copy file to directory                                           |
| mv \[file\] \[new filename\] | Move/Rename, e.g. \`mv file1.ad /tmp\`                           |


## DIRECTORY MANAGEMENT  {-}

| Key/Command | Description |
| :---------- | :---------- |
| mkdir \[dir\] | Create new directory |
| mkdir -p \[dir\]/\[dir\] |  Create nested directories |
| rmdir \[dir\] | Remove directory ( only operates on empty directories ) |
| rm -R \[dir\] | Remove directory and contents |
| less \[file\]|  Output file content delivered in screensize chunks |


## HELP  {-}

| Key/Command | Description |
| :---------- | :---------- |
| \[command\] -h |  Offers help |
| \[command\] --help | Offers help |
| info \[command\] | Offers help |
| man \[command\] |  Show the help manual for \[command\] |


## CREATE A REPOSITORY {-}

| Key/Command | Description |
| :---------- | :---------- |
| git init [project name] | create a new local repository |
| git clone my_url | download from an existing repository |


## OBSERVE YOUR REPOSITORY {-}

| Key/Command | Description |
| :---------- | :---------- |
| git status | list new or modified files not yet committed |
| git diff | show the changes to files not yet staged |
| git diff --cached | show the changes to staged files |
| git diff HEAD | show all staged and unstaged file changes |
| git diff commit1 commit2 | show the changes between two commit ids |
| git blame [file] | list the change dates and authors for a file |
| git show [commit]: [file] | show the file changes for a commit id and/ or file |
| git log | show full change history |
| git log -p [file/directory] | show change history for file/directory including diffs |


## WORKING WITH BRANCHES {-}

| Key/Command | Description |
| :---------- | :---------- |
| git branch | list of local branches |
| git branch -av | list all branches, local and remote |
| git checkout my_branch | switch to a branch, my_branch, and update working directory |
| git branch new_branch | create a new branch called "new_branch" |
| git branch -d my_branch | delete the branch called "my_branch" |
| git checkout branch_b + git merge branch_a | merge branch_a into branch_b |
| git tag my_tag | tag the current commit |


## MAKE A CHANGE {-}

| Key/Command | Description |
| :---------- | :---------- |
| git add [file] | stages the file, ready for commit |
| git add . | stage all changed files, ready for commit |
| git commit -m "commit message" | commit all staged files to versioned history |
| git commit -am "commit message" | commit all your tracked files to versioned history |
| git reset [file] | unstages file, keeping the file changes |
| git reset --hard | revert everything to the last commit |


## SYNCHRONIZE {-}

| Key/Command | Description |
| :---------- | :---------- |
| git fetch | git the latest changes from origin (no merge) |
| git pull | fetch the latest changes from origin and merge |
| git pull --rebase | fetch the latest changes from origin and rebase |
| git push | push local changes to the origin |























