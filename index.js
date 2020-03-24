import Redis from 'ioredis';

const redis = new Redis({ password: '123456'});

redis.set('name', 'Emmanuel');
redis.get('name', (err, result) => {
    console.log(result);
});
