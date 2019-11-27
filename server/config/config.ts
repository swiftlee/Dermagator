export default {
    db: {
        uri: 'mongodb://127.0.0.1:27017/dermagator', // mongo URI
    },
    default_admin: {
        email: 'admin@admin.com',
        password: 'password',
    },
    jwt: {
        SECRET_KEY: 'asbda-sdhvSIDAUB SDVNh[f jafuh*WAY UIfh&(Agf 8SGF 687eGfo'
    },
    mail: {
        key: 'c52b098bf03b146920f685825535a110-09001d55-dabc38da',
        domain: 'sandboxa1630e72b1064c94848018680af43d2e.mailgun.org',
        public_key: 'pubkey-124f5e68f9dc7e92c5f79fdce9f238d1',
        to: 'horizonman34@gmail.com'
    },
    captcha: {
        secret: '6Ld4ZcQUAAAAAE9NPbuZNyZ48_2IHOitSWFAcKFm'
    }
}
