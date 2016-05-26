require('dotenv').config({silent: true});

export default {
  verifyToken: process.env.PAGE_TOKEN,
  accessToken: process.env.APP_ACCESS_TOKEN
}
