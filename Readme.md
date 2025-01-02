### nodejs

opensource cross platform,back-end js runtime environment that runs on the v8 engine and executes a js code executes outside

steps to create backend project
npm 

we should initialize the directory by npm init
name
standard version(1.0.0)
desc:name of the front end app which wants be
entry point:index js
git;:
keywords: blank
author:name
license: default



### package.json:
- is a file that gives the neccesary information to npm which allows it to identify the project as well as handle the projects dependencies


### package.lock.json
- is automatically generated for any operations where npm modifies either the node modules or package.json



### dependencies vs dev depend:
- needed packages for a appliication is called dependencies,req at run time, they are global dependencies

- 'dev-depend'  are the packages that are only required during development, they are local dependencies.


### lets install body parser
- "npm install package_name" commmand to install
- if we have many packages and we need to delete a certain package we can use this method delete the package from packgae.jsson under dependenciess then delete nodemodules files and then again insert npm i command in terminal it will create anode module file which will only have the depoendancies which are inside the package.json file


### devdependencies:
- to move a package from depe to dev use this command "npm i -D packagename"


