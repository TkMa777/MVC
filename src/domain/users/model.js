let users = [
    {id: '1', username: 'Joe', age: '18'}
]

module.exports = {
    create: ({ username, age }) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        };

        if (!users.find(user => user.username.toLowerCase() === username.toLowerCase())) {
            users.push(newUser);
        } else {
            throw new Error('Username already exists')
        }

        return newUser;
    },

    removeById: ({id}) => {
        const userIndex = users.findIndex(user => user.id === String(id));

        if (userIndex === -1) {
            throw  new Error('Username not found')
        }

        users.splice(userIndex, 1)
        return id
    },

    getAll: () => {
        return users;
    },

    /* removeByUsername: ({id}) => {
    },


    getById: ({id}) => {
        return users.find(user => user.id === id)

    }, */
}