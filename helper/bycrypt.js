const { hashSync,compareSync } = require('bcrypt')

const hasingPassword = (passwordPlan) => {
    return hashSync(passwordPlan,8)
}

const comparePassword = (password, passwordHash) => {
    return compareSync(password,passwordHash)
}

module.exports = {
    hasingPassword,
    comparePassword
}