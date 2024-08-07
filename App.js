const os = require('os')
// Info About Current User
const user = os.userInfo()
console.log(user)

// Method return the system uptime in second
console.log(`The system Uptime is ${os.uptime()} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)