import app from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
  .then((): void => {
    console.log("Database Conected!")

    const PORT: number = Number(process.env.PORT) || 3000

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err)
  })
