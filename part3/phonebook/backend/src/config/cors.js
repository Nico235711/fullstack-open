import 'dotenv/config'

export const corsConfig = {
  origin: (origin, callback) => {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)
    }
  }
}