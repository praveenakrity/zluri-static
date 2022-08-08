import { BROWSER, EXTENSIONS_ID } from "../constants.js"

const url = window.location.search
const urlParams = new URLSearchParams(url)
const browser = urlParams.get('b')
console.log(BROWSER)
// console.log(process.env.NAME)

if(browser) {
  if(browser == 'c') {
    let token = JSON.parse(localStorage.getItem('chrome_token'))
    if(token) {
      window.location.replace(`chrome-extension://${process.env.CHROME_2}/options.html?token=${JSON.stringify(token)}`)
    }
  } else {
    console.log(process.env.CHROME_2)
  }
}



/* Generates and Sets Access Token and Refresh Token to Local Storage */
const rand = () => Math.random().toString(36)
  
const access_token = () => rand()
  
const refresh_token = () => rand() + rand()

//chrome
const c_at = access_token();
const c_rt = refresh_token();

//firefox
const f_at = access_token();
const f_rt = refresh_token();

//edge
const e_at = access_token();
const e_rt = refresh_token();

var tokens = {}

tokens.chrome = {
  'at': c_at,
  'rt': c_rt
}


tokens.firefox = {
  'at': f_at,
  'rt': f_rt
}

tokens.edge = {
  'at': e_at,
  'rt': e_rt
}

// console.table(tokens)

document.addEventListener('DOMContentLoaded',() => {
    // console.log(tokens)
    localStorage.setItem('chrome_token',JSON.stringify(tokens.chrome))
    localStorage.setItem('firefox_token',JSON.stringify(tokens.firefox))
    localStorage.setItem('edge_token',JSON.stringify(tokens.edge))
    // console.log(BROWSER)
})