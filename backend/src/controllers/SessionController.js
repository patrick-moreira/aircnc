// //metodos: 
//     index - retorna uma listagem de sessoes 
//     show - lista uma unica sessao
//     store - cria uma sessao 
//     update - atualiza uma sessao 
//     destroy - remover uma sessao

const User = require('../models/User');

module.exports = {
    async store (req, res){
        const { email } = req.body;
    
        let user = await User.findOne( { email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};

