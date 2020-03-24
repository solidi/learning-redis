# Learning Redis

## Installation

``brew install redis``

To have launchd start redis now and restart at login:
  brew services start redis
Or, if you don't want/need a background service you can just run:
  redis-server /usr/local/etc/redis.conf

## Philosophy

Data is saved in two ways RDB and AOF. Redis is async and AOF can be enabled for durability.

## Structure

``redis-server`` and ``redis-cli``

## Data Types

1. Keys
1. String
1. List
1. Hashes
1. Set
1. Sorted Sets

## Configs

redis.conf vs temporary change using ``CONFIG SET SAVE "60 1"``.

## Methods

1. ``set key value``
1. ``incr key value``
1. ``decrby key value``
1. ``getset key value``
1. ``mset key1 value1 key2 value2``
1. ``exists key``
1. ``del key``
1. ``expire key secs``
1. ``hmset, hgetall, hexists, hincrby``
1. Lists: ``rpush, lrange, lpop, ltrim``
1. Sets: ``sadd, smembers, sismember, spop, scard``
1. Sorted Sets: ``zadd, zrange, zrevrange, zrangebyscore, zrank``

## Resources

1. [ioredis clients](https://redis.io/clients#nodejs)
1. [ioredis commands](https://redis.io/commands)
