/**
 * @param {string} IP
 * @return {string}
 */
function validateIpv4(IP) {
    var groups = IP.split('.')
    if (groups.length !== 4) return false
    for (var value of groups) {
        if (value.length === 0) return false
        if (value.charAt(0) === '0' && value.length > 1) return false
        if (/\D/.test(value) || Number(value) > 255) return false
    }
    return true
}
function validateIpv6(IP) {
    var groups = IP.split(':')
    if (groups.length !== 8) return false
    for (var value of groups) {
        if (value.length > 4 || value.length < 1) return false
        if (/[^0-9A-Fa-f]/.test(value)) return false
    }
    return true
}
var validIPAddress = function (IP) {
    if (validateIpv4(IP)) return 'IPv4'
    if (validateIpv6(IP)) return 'IPv6'
    return 'Neither'
};