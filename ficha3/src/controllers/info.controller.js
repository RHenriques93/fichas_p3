const controller = {}
controller.info = (req, res) => {
    const data = {
        name: 'Rafael Henriques',
        age: 26,
        city: 'Coimbra'
    }
  
        console.log("Rota info executada com sucesso…");
        res.json(data);
};


module.exports = controller;



