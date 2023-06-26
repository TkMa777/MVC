const userModel = require('./model')

module.exports = {
    getAll: (req, res) => {
        return res.render ('users.hbs', {
            users: userModel.getAll() // from the module we get the user , and the HTML domain
        })
    },
    create: (req, res) => {
        try {
            const {username, age} = req.body;

            if (!age || !username) {
                throw new Error('Unspecified username or age ')
            }

            userModel.create({username, age})

            return res.redirect('/users')
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message
            });
        }
    },
    removeById: (req, res) => {
        try {
            const id = req.query.id;

            if (!id) {
                throw new Error('id not indicated');
            }

            userModel.removeById({id})

            res.render('users-view.hbs', {
                users: userModel.getAll()
            })

        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message
            });
        }
    }
}