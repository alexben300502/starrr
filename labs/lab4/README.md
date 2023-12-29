
# lab 4: Continuous integration and continuous delivery

# Short Description 
In this lab, we will configure CI and CD. 

# List of Functionalities
1. Continuous Integration with GitHub Actions:Automate the build and test process for our node.js application.
2. Continuous Delivery with Azure: Continuous deployment using Azure CD pipeline

# Installation Instructions
1. Ensure you have a GitHub account and the GitHub CLI installed.
2. Clone the software project repository (from the Continuous Testing lab) into your local environment.
3. Sign up for a Heroku account if you don't have one.

# Usage Instructions
## Part 1: Continuous Integration with GitHub Actions
We can see in the folder .github/workflows that there CI and now every commit we make is visible and validated in the "actions" part. here is the file that makes it possible :https://github.com/alexben300502/starrr/blob/main/.github/workflows/node.js.yml

## Part 2: Continuous Delivery with Heroku
We do it on Azure because Heroku if not free. We configure a file https://github.com/alexben300502/starrr/blob/main/.github/workflows/node.js.yml to permits deploy our node application on azure. 

We also configure redis in it by configuring a redis cache. 
Finally, we can see that it is working by clicking on this link : https://starrr-devops-project.azurewebsites.net/


We can see that the application is well deployed.

# Author Information
- BENSARSA Alexandre
- CHAOUACHI Soraya




