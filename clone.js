/**
 * Dark: #012020
 * light: #cfeeee
 * normal: #39b2b2
 */

let IDs, currentPost, lastNewsId, lastJobId, mainContent

const myPage = async () => {
    const all = document.querySelectorAll('*')
    all.forEach(item => {
        item.style.margin = '0'
        item.style.padding = '0'
        item.style.boxSizing = 'border-box'
        item.style.color = '#012020'
    })

    const container = document.createElement('div')
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
    `

    const title = document.createElement('h1')
    title.style.cssText = `
        letter-spacing: 2vw;
        text-transform: uppercase;
        font-size: clamp(1vw, 5vw, 3vw);
    `
    title.textContent = 'Cloner News'

    const header = document.createElement('div')
    header.style.cssText = `
        display: flex;
        align-items: center;
        background-color: #cfeeee;
        padding: 2vw 1vw;
        width: 100%;
        box-sizing: border-box;
    `

    const menu = ['Stories', 'Jobs', 'Polls']
    menu.forEach(item => {
        const btn = document.createElement('button')
        btn.setAttribute('id', item.toLowerCase())
        btn.textContent = item
        btn.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #012020;
            color: #012020;
            font-weight: bold;
            margin: 0 3px;
            padding: 7px 12px;
            border-radius: 20px;
            cursor: pointer;
        `
        btn.addEventListener('mouseover', () => {
            btn.style.background = '#012020'
            btn.style.color = '#cfeeee'
        })
        btn.addEventListener('mouseout', () => {
            btn.style.background = ''
            btn.style.color = '#012020'
        })
        header.appendChild(btn)
    })

    const divContent = document.createElement('div')
    divContent.setAttribute('id', 'main-content')
    divContent.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 12px 0;
        width: 40vw;
        box-sizing: border-box;
    `

    // Main Program
    container.appendChild(title)
    container.appendChild(header)
    container.appendChild(divContent)

    document.body.appendChild(container)
    mainContent = document.getElementById('main-content')

    document.getElementById('stories').addEventListener('click', () => {loadPosts('newstories')})
    document.getElementById('jobs').addEventListener('click', () => {loadPosts('jobstories')})
    document.getElementById('polls').addEventListener('click', () => {pollsLoad()})

    await loadItem('newstories')
    await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(async response => response.json()).then(resp => {lastJobId = resp})

    let refresh = setInterval(newArticles, 1000);
}

async function pollsLoad() {
    mainContent.textContent = ''
    currentPost = ''
    const poll = await loadItem(126809)

    const pollDiv = document.createElement('div')
    pollDiv.classList = 'post'
    mainContent.append(pollDiv)
    ArticleDisplay(poll, pollDiv)
    const partContainer = document.createElement('div')
    pollDiv.insertBefore(partContainer, pollDiv.lastChild)

    poll.parts.forEach((id) => {
        const partDiv = document.createElement('div')
        partContainer.append(partDiv)
        partDiv.classList = 'pollOpt'
        loadItem(id).then(resp => {PollPart(resp, partDiv)}).catch((err) => {console.log("[could not find poll] : ".toUpperCase() + err)})
    })
}

function PollPart(data, bloc) {
    bloc.textContent = `### ${data.text} -> ${data.score}`
}

async function loadPosts(param) {
    if (currentPost === param) return

    currentPost = param

    try {
        IDs = await fetch(`https://hacker-news.firebaseio.com/v0/${param}.json`).then(response => response.json());
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return;
    }
    //console.log(IDs)

    lastNewsId = (currentPost === 'newstories') ? IDs[0] : lastNewsId
    lastJobId = (currentPost === 'jobstories')? IDs[0] : lastJobId

    mainContent.textContent = ''

    let postIDs = []
    postIDs = postIDs.concat(IDs)
    //console.log(postIDs)

    for (const id of postIDs.slice(0, 10)) {
        const articles = document.createElement('div')
        articles.style.cssText = `
            width: 40vw;
            background-color: #cfeeee;
            border-radius: 12px;
            margin: 12px 0;
            padding: 12px;
            box-sizing: border-box;
        `
        mainContent.append(articles)
        articles.classList = 'article'
        articles.setAttribute('id', 'article-id-' + id)
        loadItem(id).then(resp => {
            ArticleDisplay(resp, articles)}).catch(err => {
                articles.textContent = 'could not load article ' + id
            }
        )
    }

    let total = 10
    const loadPostButton = document.createElement('button')
    loadPostButton.classList = 'moreButton'
    loadPostButton.innerText = 'More'
    mainContent.append(loadPostButton)
    loadPostButton.addEventListener('click', () => {
        addPosts(IDs, total, loadPostButton)
    })
}

//func to add posts in decreasing order
async function addPosts(ids, total, bloc) {
    ids.slice(total,total + 10).forEach((id) => {
        const div = document.createElement('div')
        bloc.parentNode.insertBefore(div, bloc)
        div.classList = 'post'
        div.setAttribute('id', 'postid-' + id)
        loadItem(id).then(resp => {
            ArticleDisplay(resp, div)}).catch(err => {div.innerHTML = 'failed to load post ' + id}
        )
    })
}

//fetch infos on one post byt its id
async function loadItem(id) {
    return await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').then(async response => {return await response.json()})
}

//div format
function ArticleDisplay(data, div) {
    if (data.deleted) {
        div.textContent = '[This article has been deleted]'.toUpperCase()
        return
    }

    const author = document.createElement('p')
    author.classList = 'postAuthor'
    author.textContent = `By : ${data.by.toUpperCase()}`
    div.append(author)
    div.append(document.createElement('hr'))

    const title = document.createElement('p')
    title.classList = 'postTitle'
    title.textContent = `Title : ${data.title}`
    div.append(title)

    const date = document.createElement('p')
    date.classList = 'postDate'
    date.textContent = `At : ${myDateFormat(data.time)}`
    div.append(date)

    const text = document.createElement('p')
    text.classList = 'postText'
    text.textContent = (data.text && data.text !== '') ? data.text : '[No Content for this article]'.toUpperCase()
    div.append(text)
    div.append(document.createElement('hr'))

    const url = document.createElement('a')
    url.classList = 'postUrl'
    url.href = (data.url && data.url !== '') ? data.url : '#'
    url.textContent = (data.url && data.url !== '') ? 'See more...' : '[No URL for this article]'
    div.append(url)

    div.append(commentButton(data.kids))
}

function commentButton(params){
    const res = document.createElement('div')
    res.classList = 'commentContainer'

    const loadComments = document.createElement('button')
    loadComments.textContent = 'Show Comments'
    loadComments.setAttribute('data-isloaded', 'false')

    const comments = document.createElement('div')
    res.append(loadComments)
    res.append(comments)

    let total = 0

    loadComments.addEventListener('click', async () => {
        const isLoaded = loadComments.getAttribute('data-isloaded')
        if (isLoaded === "true") {
            loadComments.textContent = "Show comments"
            loadComments.setAttribute('data-isloaded', 'false')
            comments.textContent = ''
        } else {
            loadComments.textContent = "Hide comments"
            loadComments.setAttribute('data-isloaded', 'true')

            if (!params) {
                comments.textContent = '[No Comments for this article]'.toUpperCase()
            } else {
                comments.textContent = ''

                const comment = document.createElement('div')
                comments.append(comment)

                await addComments(params, 0, comment)
                total = Math.min(10, params.length)
                //add more comments if more than 10
                if (total === 10 && params.length !== 10) {
                    const button = document.createElement('button')
                    button.textContent = 'See more...'
                    comment.append(button)
                    button.addEventListener('click', () => {
                        addComments(params, total, button, true)
                        if (total + 10 >= params.length) {
                            button.remove()
                        } else {
                            total += 10
                        }
                    })
                }
            }
        }
    })

    return res
}

async function addComments(params, total, bloc, insertBefore) {
    params.slice(total,total + 10).forEach((id) => {
        const div = document.createElement('div')
        div.setAttribute('id', 'comment-id-' + id)
        div.classList = 'comment'

        if (insertBefore) {
            bloc.parentNode.insertBefore(div, bloc)
        } else {
            bloc.append(div)
        }
        loadItem(id).then(resp => {
            buildCommentDiv(resp, div)}).catch(err => {
                div.textContent = `could not load comment ${id}`.toUpperCase()
            }
        )
    })
}

function buildCommentDiv(data, bloc) {
    if (data.deleted) {
        bloc.textContent = '[This comment has been deleted]'.toUpperCase()
        return
    }

    const author = document.createElement('p')
    author.textContent = `By : ${data.by.toUpperCase()} - at ${myDateFormat(data.time)}`
    bloc.append(author)

    const content = document.createElement('p')
    content.textContent = (data.text && data.text !== '') ? data.text : '[No Content for this comment]'
    bloc.append(content)

    bloc.append(commentButton(data.kids))
}

function myDateFormat(time) {
    const date = new Date(time * 1000);
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
    return `${formattedDate} - ${formattedTime}`;
}


async function newArticles() {
    let jobParams, newsParams

    try {
        await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(async response => response.json()).then(resp => {jobParams = resp})
    } catch(err) {
        return err
    }

    try {
        await fetch('https://hacker-news.firebaseio.com/v0/newstories.json').then(async response => response.json()).then(resp => {newsParams = resp})
    } catch(err) {
        return err
    }
}

myPage().then(r => {})