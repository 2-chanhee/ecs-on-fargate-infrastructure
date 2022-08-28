export default () => ({
    stage: process.env.stage || 'dev', // deploy 환경
    jwt: {
        signOptions: {
            expiresIn: '30d'
        }
    },

    typeorm:
        process.env.NODE_ENV === 'test'
            ? {
                  type: 'sqlite',
                  database: ':memory:',
                  autoLoadEntities: true,
                  logging: process.env.NODE_ENV === 'test',
                  synchronize: true
              }
            : {
                  type: 'mysql',
                  port: 3306,
                  autoLoadEntities: true,
                  synchronize: false,
                  bigNumberStrings: false
              }
});

// @Todo AWS env
// aws: {
//     access_key_id: process.env.AWS_ACCESS_KEY_ID,
//     secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.REGION
// },
