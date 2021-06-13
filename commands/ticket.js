const { name } = require("./Bonjour");

module.exports = {
    run: message => message.channel.send('Si tu as besoin d aide va dans #pour-ouvrir-un-ticket-de-support') , 
    name: 'cpt'
}