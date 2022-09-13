const ShortcutModel = require("./shortcut.model");
const redis = require("redis")

const client = redis.createClient({
  url: 'redis://default:hayQuePonerElPassword@redis-16403.c268.eu-west-1-2.ec2.cloud.redislabs.com:16403'
  });


getEnvironment = async (req, res) => {
  try {
    
    client.connect();

    client.on('error', (err) => console.log('Redis Client Error', err));

    const shortcut = await ShortcutModel.findOne({ name: req.params.id });

    await client.set(req.params.id, JSON.stringify(shortcut.program), (err, reply) => {
      if (err) console.log(err);

      console.log(reply);

      res.status(200).send(shortcut.program);
    });

    } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getEnvironment };
