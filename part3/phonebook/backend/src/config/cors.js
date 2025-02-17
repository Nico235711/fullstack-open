import 'dotenv/config'

export const corsConfig = {
  origin: (origin, callback) => {
    // console.log(origin);
    
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)
    }
  }
}