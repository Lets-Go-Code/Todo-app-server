const getTodos = async (req,res,next) => {
    res.status(200).json([
        {
            title : "Belajar react",
            description : "Menegerjakan todo app"
        },
        {
            title : "Belajar Next",
            description : "Menegerjakan next js dengan express"
        }
    ])
}

module.exports = {
    getTodos
}