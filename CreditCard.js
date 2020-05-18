// return masked string
function maskify(cc) {
  const len = cc.length
  const tamanhoFinal = len - 4
  const cort = cc.split('')

  if(len > 4) {
     for(var x = 0; x < tamanhoFinal; x++) {
        cort[x] = '#'
     }
  }
  final = cort.join('')
  return console.log(final.toString())
  
}
