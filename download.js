let url = window.location.href;

if (url.startsWith("https://chrome.google.com/webstore/detail/")) {
    let id = /https:\/\/chrome\.google\.com\/webstore\/detail\/.+\/(.+)/.exec(url)[1];
    let version = /Chrome\/(\d+\.\d+\.\d+\.\d+)/.exec(navigator.userAgent)[1];
    window.open(`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&prodversion=${version}&x=id%3D${id}%26installsource%3Dondemand%26uc`)
}