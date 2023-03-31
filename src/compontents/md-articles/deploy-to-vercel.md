![enter image description here](https://vercel.com/_next/image?url=https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5Q6iTwx2CBd0pFrD9vzZWK/e537e396e236e5daa54a31ff7056a77d/papercuts-dark.png&w=3840&q=75)

# Deploy your NextJs / React app to Vercel

If you're looking to deploy an app, Vercel is a great option. Vercel is a cloud platform for static sites and serverless functions. It's easy to use and has great performance. In this article, we'll walk through the steps to deploy your app to Vercel.

1.  Sign up for Vercel

The first step is to sign up for Vercel. You can sign up with your GitHub, GitLab, or Bitbucket account. If you don't have any of these accounts, you can sign up with your email address.

2.  Create a new project

Once you've signed up, you'll need to create a new project. To do this, click on the "Create a Project" button on the dashboard. You'll then be prompted to select your Git repository.

3.  Connect your Git repository

Next, you'll need to connect your Git repository to Vercel. To do this, select your Git provider and grant Vercel access to your repository.

4.  Configure your project

After you've connected your Git repository, you'll need to configure your project. This includes setting up your build command and output directory. You can do this by creating a **vercel.json** file in the root of your project. Here's an example of what this file might look like:

`{
  "build": {
    "command": "npm run build",
    "output": "dist"
  }
}` 

5.  Deploy your app

Once you've configured your project, you're ready to deploy your app. To do this, click on the "Deploy" button on the dashboard. Vercel will then build and deploy your app.

6.  Test your app

After your app has been deployed, you'll want to test it to make sure everything is working as expected. You can do this by clicking on the "Preview" button on the dashboard.

7.  Custom domain

Finally, if you want to use a custom domain for your app, you can set this up in the "Domains" section of the dashboard. Vercel provides a free SSL certificate for custom domains.

Conclusion

Deploying an app to Vercel is a straightforward process. By following the steps outlined in this article, you should be able to deploy your app to Vercel in no time. Remember to test your app after it's been deployed to make sure everything is working as expected. Good luck!