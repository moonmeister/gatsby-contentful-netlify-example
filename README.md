# gatsby-contentful-netlify-example

Check it out here: **https://gatsby-contentful-netlify-example-d40337.netlify.app/**

Based on the [Gatsby](https://www.gatsbyjs.org/) [tutorial part four](https://www.gatsbyjs.org/tutorial/part-four/).

I then ripped out the Markdown file backend and replaced it with [Contentful](https://www.contentful.com/).

I then removed the contentful api keys from the `gatsby-config.js` to make the code readily available for public viewing and instead saved those values into the netlify build process. See the `gatsby-config.js` for how to do this.

Finally, on netlify I created a build hook. Using that url I created a webhook on Contentful to trigger when content was published, unpublished, deleted, archived, or unarchived. Now anytime a new blog post is published my site auto builds and is deployed within 1 minute by netlify.

Feel free to open an issue if you have questions.

## Running in development
`gatsby develop`
