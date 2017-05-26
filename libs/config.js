module.exports = {
    database: 'ntask_test', 
    username: '', 
    password: '', 
    params: {
        dialect: 'sqlite', 
        storage: 'ntask.sqlite', 
        define: {
            underscore: true
        }
    }, 
    jwtSecret: "NTASK_TEST", 
    jwtSession: {session: false}
}