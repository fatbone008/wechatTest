const MattDB = {
    user: 'root',
    password: 'Matt123456',
    host: 'rm-2zetudt56poki91r6yo.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 'sys'
}

const local = {
    user: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306,
    database: 'sys'
}

const r = process.env.db === 'matt' ? MattDB : local;

const str = `mysql://${r.user}:${r.password}@${r.host}:${r.port}/${r.database}`;

module.exports = str;