import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function connectDB() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connection successful.')
    // Listening app
    app.listen(config.port, () => {
      console.log(`Servier is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error)
  }
}

connectDB()
