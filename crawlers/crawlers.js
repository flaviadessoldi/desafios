const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

const start = async () => {
    const REDDIT_URL = 'https://old.reddit.com'
    let response = await request(REDDIT_URL)
    let $ = cheerio.load(response)
    let posts = []

    $('#siteTable div.thing').each((i, elm) => {
        let score = $(elm).find('.score.unvoted').text().trim()
        let title = $(elm).find('a.title').text().trim()
        let linkComments = $(elm).find('a.bylink').attr('href').trim()
        let subreddit = $(elm).find('.subreddit').text().trim()
        let linkThread = $(elm).find('div.entry div.top-matter p.title a.title').attr('href').trim() 
               
        posts.push({
            score,           
            title,
            linkComments,
            subreddit,
            linkThread
        })

    })

    console.log(posts)

    return posts

    
        if (score >5000){

        fs.appendFile('redditCrawler.txt', 'Score: ' + score + '\n' + 'SubThread: ' + subThread + '\n' + 'Thread: '
            + title + '\n' + 'Link da Thread : ' + linkThread + '\n' + 'Link dos comentários : '
            + linkComments + '\n' 
            + '\n')
        
        }
    
}

start()
