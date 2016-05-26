require('dotenv').config();

return {
  verifyToken: process.env.PAGE_TOKEN,
  accessToken: process.env.APP_ACCESS_TOKEN
}
