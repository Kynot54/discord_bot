const memes = [
    "https://www.reddit.com/r/dankmemes/",
    "https://www.reddit.com/r/ProgrammerHumor/",
    "https://www.reddit.com/r/memes/comments/doibks/look_at_this_funny_meme_i_found/",
    "https://www.reddit.com/r/Random_Memes/",
    "https://www.reddit.com/r/funnymeme/",
    "https://www.reddit.com/r/meme/",
    "https://www.reddit.com/r/dogecoin/",
    "https://twitter.com/WholesomeMeme",
    "https://www.reddit.com/r/HighIQMemes/",
    "https://www.reddit.com/r/MemeEconomy/",
    "https://www.reddit.com/r/me_irl/",
    "https://www.reddit.com/r/memes/",
    "https://twitter.com/LowResContent"
]

const max = Math.floor(memes.length)
const min = Math.ceil(0)

function randomInt(min,max) {
    return Math.floor(Math.random() * max)
}

export { memes, randomInt }