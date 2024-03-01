const express = require('express');
const app = express();
const port = 3001;

let comments = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    let html = `<h1>Commentaires</h1>
  <form action="/comment" method="post">
    <input type="text" name="comment" placeholder="Ajoutez un commentaire">
    <button type="submit">Envoyer</button>
  </form>
  <div>`;

    comments.forEach(comment => {
        html += `<p>${comment}</p>`;
    });

    html += `</div>`;
    res.send(html);
});


app.post('/comment', (req, res) => {
    const { comment } = req.body;
    comments.push(comment);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
