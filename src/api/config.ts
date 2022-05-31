const Config = {
    ENV: process.env.NODE_ENV,
    // WEB_DOMAIN: 'http://3.143.231.159:3000/',
    API_URL: {
        BASE_URL: process.env.REACT_APP_API_URL,
        GET_POSTS: 'posts/1',
     },
     API_KEY: process.env.REACT_APP_API_KEY,
     UPLOADS_PATH: process.env.REACT_APP_UPLOAD_PATH
}

export default Config;