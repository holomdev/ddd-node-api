import { app } from './app'
import { config } from 'dotenv'

config()
const port = process.env.PORT || 8888

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
