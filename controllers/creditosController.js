const creditosController = {
  creditos: (req, res) => {
    res.send(`
      <h1>Realizado por:</h1>
      <strong>Ariadna Naya, Ezequiel Coletta, Alexandra Velasquez y Janio Isacura</strong>`);
  }
}

module.exports = creditosController;