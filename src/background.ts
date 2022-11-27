let active = false
const ytBaseLink = "https://youtube"

const whiteList = ["Let'sgameitout"];

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
    const ytUrls = tabs.filter((el) => el.url?.startsWith("https://youtube"))
    if (ytUrls.length < 1) return;

})

type Video = {
    name: string,
    channel: string,
    link: string
}