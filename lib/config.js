module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET_KEY // Shared secret to encrypt JSON Web Token.
  },
  webAppUrl: process.env.WEB_APP_URL,
  emailSender: 'Blocky <getblocky@gmail.com>',
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  mqttUrl: process.env.MQTT_URL,
  mqttHost: process.env.MQTT_HOST,
  mqttPort: process.env.MQTT_PORT,
};
