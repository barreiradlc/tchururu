exports.validaPost = (req, res, next) => {
    
    // TÌTULO
    req.check("titulo","O título é obrigatório").notEmpty();
    req.check("titulo","O título deve ser entre 4 e 150 caracteres").isLength({
        min:4,
        max:150
    });

    // BODY
    req.check("corpo","O corpo é obrigatório").notEmpty();
    req.check("corpo","O corpo deve ser entre 4 e 150 caracteres").isLength({
        min:4,
        max:2000
    });

    // Buscando por erros
    const erros = req.validationErrors()

    // mapeando primeiro erro
    if (erros) {
        const primeiro = erros.map((erros) => erros.msg)[0]
        return res.status(400).json({erro: primeiro})
    }
    next();

};