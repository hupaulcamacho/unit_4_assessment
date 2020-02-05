const db = require('../db')

const getAllUsers = async () => {
	const users = await db.any("SELECT * FROM users")
	return users;
}

const addNewUser = async (user) => {
    const newUserQuery = `
		INSERT INTO users(username, password_digest)
			VALUES($1, $2)
	`
    await db.none(newUserQuery, [user.username, user.password])
    return true
}

const getUserByUsername = async (username) => {
	const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username])
	return user;
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUserByUsername
}
