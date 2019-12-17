import app from './app';
const port = process.env.PORT || 3030;

app.listen(port || 3030, () => {
  console.log("Rodando na porta: ", port);
});