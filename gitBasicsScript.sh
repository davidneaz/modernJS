
# To start a new project with git do a git init to create the repo
mkdir jsExperiments && cd jsExperiments
git init

# To start working on an existing repo, clone it
# After cloning, the remote is where you cloned from
# and git push pushes your check ins up to the remote.
# git pull will pull any changes down.
# Obviously, all of this should be done in your own branch 

cp ../modernJS/.gitignore .

git status
touch newFile.js
git status

git add newFile.js
git status
git rm -cached newFile.js
git status

git add newFile.js
git status
git rm -f newFile.js
git status
ls -al

cp ../modernJS/basic.js .
node basic.js
git status
git add .
git status
git commit -m 'Adding basic non-greeting'

# Clone the startup repo
git clone https://github.com/davidneaz/modernJS.git