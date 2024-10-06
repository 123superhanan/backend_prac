import express from "express";
const app = express()
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("server is ready")
})

//getting routes of five jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      "id": 1,
      "title": "Skeleton Fight",
      "joke": "Why don't skeletons fight each other? Because they don't have the guts!"
    },
    {
      "id": 2,
      "title": "Fake Spaghetti",
      "joke": "What do you call fake spaghetti? An impasta!"
    },
    {
      "id": 3,
      "title": "Scarecrow Award",
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Eggs Crack",
      "joke": "Why don't eggs tell jokes? They'd crack each other up!"
    },
    {
      "id": 5,
      "title": "Tired Bicycle",
      "joke": "Why couldn't the bicycle stand up by itself? It was two-tired!"
    }
  ]
res.send(jokes);
})

app.listen(port, () => {
  console.log(`serve at http://localhost: ${port}`)
})