You can check out the deployed site on Heroku [here](https://hidden-stream-86113.herokuapp.com/)!

# Newscrape || NPR News Scraper

All the news you want, only when you want it. Newscrape will use the Cheerio NPM to scrape and collect the latest news articles from the NPR News website, [www.NPR.org](https://www.npr.org/sections/news/), then display a Headline, Summary and Link for each article.

Articles will be stored on the Scraped Articles page until you click the "Delete Articles" button. This will clear the Scraped Articles page to make room for new articles when you click the "Scrape Articles" button. Clicking the "Save Article" button below each article will move that article to the Saved Articles page.

Saved articles will be saved even when you delete the Scraped Articles. The Saved Articles page will let you comment on the article, delete comments, or remove the saved article from the saved article page.

## Technologies Used

* HTML
* CSS
* Javascript
* jQuery
* NodeJs

NPM Package Requirements
* express
* express-handlebars
* mongoose
* body-parser
* cheerio
* request


## Screenshots

### Home Page (Index)

![Mobile Size](/screenshots/index.png)

### Scraped Articles Page

![Mobile Size](/screenshots/scraped.png)

### Deleted Articles View

![Mobile Size](/screenshots/deleted.png)

### Saved Articles Page

![Mobile Size](/screenshots/saved.png)

### Article Comment Modal

![Mobile Size](/screenshots/comment.png)