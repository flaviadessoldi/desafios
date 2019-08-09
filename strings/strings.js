let texto = 'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\nAnd God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.'

let listaPalavras = texto.split(' ')

let paragrafo = []

let linha = []

while (listaPalavras.length > 0){
    tamanhoLinha = linha.join(' ').length
    if (tamanhoLinha + listaPalavras[0].length + 1 <= 40){
        linha.push(listaPalavras.shift())
    }else {
        paragrafo.push(linha.join(' '))
        linha.length = 0
        linha.push(listaPalavras.shift())
    }
}
    
paragrafo.push(linha.join(' '))


for (let i = 0; i < paragrafo.length; i++){
        console.log(paragrafo[i])
    }