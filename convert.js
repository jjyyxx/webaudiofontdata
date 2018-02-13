const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, 'sound'), (err, files) => {
    for (var index = 0, length = files.length; index < length; index++) {
        const filename = files[index]
        if (filename.endsWith('s')) {
            fs.readFile(path.join(__dirname, 'sound', filename), 'utf-8', (err, str) => {
                eval(str)
                const variable = filename.startsWith('128') ? ('_drum_' + filename.slice(3, -3)) : ('_tone_' + filename.slice(0, -3))
                fs.writeFile(path.join(__dirname, 'data', filename + 'on'), JSON.stringify(eval(variable)), 'utf-8', () => {})
            })
        }
    }
})