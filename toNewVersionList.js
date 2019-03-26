const { getFiles }= require('./Utilities/Mix/PathWay/getFiles')
const { getNewVList } = require('./Utilities/Intls/Fields/toNewVersionList')

// const dir = '../../../Intelisis/Intelisis5000/Reportes MAVI'
const dir = 'Testing\\'

getFiles(dir, [ '.vis','.tbl'])
.then(files => {

    getNewVList({
        files: files,
        field: ['ListaCampos','SQL'],
        rgx: [
            /<BR>/gi,
            /,<BR>\s+|<BR>\s+/gi
        ]
    })
})






// function txtToList (stringValue, rgx) {
//     return stringValue.split(rgx).filter(Boolean).reduce((valorAnterior, valorActual) => {
//                 return valorAnterior  + '=' + valorActual + '\n' + valorActual
//             },'(Inicio)').replace(/$/,'=(Fin)') + '\n'
// }

// function getHeadAndTxtList (txt, field, rgx) {

//     let obj = continueFields(toJson(txt))

//     for (key in obj) {
//         if (obj[key][field]) {
//             if (rgx.test(obj[key][field])){
//                 return {
//                     headCompList: '\n' + `[${key}.${field}]` + '\n',
//                     txtList: obj[key][field]
//                 }
//             }
//         }
//     }
// }

// getFiles(dir, [ '.vis','.tbl'])
// .then(files => {
//     files.forEach(file => {
//         ['ListaCampos','SQL'].forEach(x => {

//             fs.appendFileSync(file,
//                 getHeadAndTxtList
//                 // toNewVersionList(
//                 //     cls.intls.comments(
//                 //         code.getTxtInOriginCoding(
//                 //             file
//                 //         )
//                 //     ),
//                 //     x,
//                 // ),
//                 // txtToList(obj[key][field], /,<BR>\s+|<BR>\s+|<BR>/gi)
//             )

//             fs.writeFileSync(file,
//                 operarCambio(
//                     file,
//                     '',
//                     field,
//                     code.getTxtInOriginCoding(file).replace(/(?<=\[.*?\]$)[^]*/gm, ''),
//                     '(Lista)'
//                 )
//             )
//         })
//     })
// })

