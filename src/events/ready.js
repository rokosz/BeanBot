module.exports = async (client) => {

  // TODO: add DB options

  console.log('BeanBot is active.');

  client.user.setStatus('available')
  client.user.setPresence({
    game: {
      name: 'with everyones username',
      type: 'STREAMING',
      url: 'https://www.yeet.com/'
    }
  });

}
