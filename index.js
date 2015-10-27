var range = require('ip-range-check')

module.exports = function (ip) {
  if (range(ip, '54.172.141.90/32') || range(ip, '52.0.240.122/32')) {
    // Travis container-based infrastructure, IPs subject to change via email to @kennethormandy
    return 'Travis CI'
  } else if (range(ip, '52.7.166.201') || range(ip, '52.21.134.77') || range(ip, '52.20.53.78') || range(ip, '52.2.197.51') || range(ip, '54.175.212.144') || range(ip, '54.175.201.227') || range(ip, '54.208.179.24')) {
    // Via https://github.com/wercker/support/issues/47
    return 'Wercker'
  } else {
    return ip
  }
}
