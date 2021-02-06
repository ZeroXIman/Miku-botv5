let handler = function (m) {
  this.sendContact(m.chat, '12512636476', 'Miku', m)
  this.sendContact(m.chat, '6281310253704', 'Zidan', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
