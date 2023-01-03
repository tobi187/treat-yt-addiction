let active = false
const ytBaseLink = "https://youtube"

const whiteList = ["Let'sgameitout"];

chrome.tabs.query({ url: ["https://youtube.*", "https://www.youtube.*"] }, (tabs) => {
    tabs.forEach(x => console.log(x.url))
})

chrome.webNavigation.onCompleted.addListener(function () {})

type Video = {
    name: string,
    channel: string,
    link: string
}