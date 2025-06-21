const axios = require("axios")
async function getToken(cookie) {
    try {
        if (!cookie || cookie === "") throw new Error("input cookie")
        const headers = {
            'Origin': 'https://www.instagram.com',
            'Accept-Language': 'id,en;q=0.9',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
            'Referer': 'https://www.instagram.com/',
            'Host': 'www.facebook.com',
            'Sec-Fetch-Mode': 'cors',
            'Accept': '*/*',
            'Cookie':cookie,
            'Connection': 'keep-alive',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Dest': 'empty',
            'Accept-Encoding': 'gzip, deflate',
        }
        const params = new URLSearchParams( {
            'client_id': '124024574287414',
            'wants_cookie_data': 'true',
            'origin': '1',
            'input_token': '',
            'sdk': 'joey',
            'redirect_uri': 'https://www.instagram.com/ijolovemom/',
        })
        const response = await axios.get("https://www.facebook.com/x/oauth/status",{params,headers})
        const token = JSON.stringify(response.headers)
        const match = token.match(/(EAAB\w+)/)
        if(!match) throw new Error("cannot get token")
        return match[0]
    } catch (error) {
        if (error.response) {

            console.log(error.response.data)

        } else {
            console.log(error.message)
        }

    }


}
getToken("")