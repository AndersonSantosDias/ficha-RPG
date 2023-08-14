function calcular(){
    let niv = document.getElementById('niv')
    let raca = document.getElementById('racas')
    let forca = document.getElementById('for')
    let constituicao = document.getElementById('con')
    let velocidade = document.getElementById('vel')
    let destreza = document.getElementById('des')
    let magia = document.getElementById('mag')
    let inteligencia = document.getElementById('int')
    let carisma = document.getElementById('car')
    let dfis = 0
    let dfisarm = 0
    let dmag = 0
    let desp = 0
    let PV = 0
    let PM = 0
    let deslocamento = 0
    let ações = 0
    let defesa = 0
    let primaria = document.getElementById('primaria')
    let secundaria = document.getElementById('secundaria')
    let tercearia = document.getElementById('tercearia')
    let ultima = document.getElementById('ultima')
    let base = [30, 30, 5, 45, 20, 4, 20, 30, 7, 20, 25, 8, 30, 35, 6, 40, 25, 4, 25, 35, 5, 40, 15, 6, 20, 40, 5, 45, 20, 4]

    if(raca.value == "Humano"){
        dados(base[0], base[1], base[2])
    }
    if(raca.value == "Vagariano"){
        dados(base[3], base[4], base[5])
        defesa += Number(constituicao.value)/5
    }
    if(raca.value == "Naniki"){
        dados(base[6], base[7], base[8])
    }
    if(raca.value == "Nekokaijin"){
        dados(base[9], base[10], base[11])
    }
    if(raca.value == "Koinujin"){
        dados(base[12], base[13], base[14])
    }
    if(raca.value == "Hachuruijin"){
        dados(base[15], base[16], base[17])
        defesa += Number(constituicao.value)/2
    }
    if(raca.value == "Kawatonarujin"){
        dados(base[18], base[19], base[20])
    }
    if(raca.value == "Nacaridiano"){
        dados(base[21], base[22], base[23])
        dfisarm += (Number(forca.value)/2 + Number(destreza.value)/2) * 0.2
    }
    if(raca.value == "Tsukakuma"){
        dados(base[24], base[25], base[26])
        PV += PM * 0.05
        dfis += Number(inteligencia.value) * 0.2
    }
    if(raca.value == "Anão"){
        dados(base[27], base[28], base[29])
        PV += Number(constituicao.value) * 5
    }
    
    var conteudoDiv = document.getElementById('res');
    var informacoes = `
    Raça: ${raca.value} <br>
    PV: ${PV} <br>
    Energia: ${PM} <br>
    Deslocamento: ${deslocamento.toFixed(1)} <br>
    Ações: ${ações.toFixed(1)} <br>
    Defesa: ${defesa.toFixed(1)} <br>
    Dano fisico: ${dfis} <br>
    Dano armado: ${dfisarm.toFixed(1)} <br>
    Dano magico: ${dmag} <br>
    Dano espiritual: ${desp.toFixed(1)} <br>`;

    var paragrafoExistente = document.querySelector('#res p');
    if (paragrafoExistente) {
        paragrafoExistente.remove();
    }

    var novoParagrafo = document.createElement('p');
    novoParagrafo.innerHTML = informacoes;
    conteudoDiv.appendChild(novoParagrafo);

    function dados(p, e, d){
        var base = [30, 30, 5, 45, 20, 4, 20, 30, 7, 20, 25, 8, 30, 35, 6, 40, 25, 4, 25, 35, 5, 40, 15, 6, 20, 40, 5, 45, 20, 4]
    
        if (Number(primaria.value) == 1){
            PM = (e * 1.5) * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = e * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = p * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = p * Number(niv.value) + Number(constituicao.value) * 10
            defesa = Number(constituicao.value)/10
        }
        if (Number(primaria.value) == 3){
            dfisarm = Number(forca.value)/2 + Number(destreza.value)/2
        }
        if (Number(primaria.value) == 4){
            desp = Number(inteligencia.value)
        }
    
        if (Number(secundaria.value) == 1){
            dmag = Number(inteligencia.value) * 0.8
        }
        if (Number(secundaria.value) == 2){
            dfis = Number(forca.value) * 0.8
        }
        if (Number(secundaria.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.8
        }
        if (Number(secundaria.value) == 4){
            desp = Number(inteligencia.value) * 0.8
        }
    
        if (Number(tercearia.value) == 1){
            dmag = Number(inteligencia.value) * 0.5
        }
        if (Number(tercearia.value) == 2){
            dfis = Number(forca.value) * 0.5
        }
        if (Number(tercearia.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.5
        }
        if (Number(tercearia.value) == 4){
            desp = Number(inteligencia.value) * 0.5
        }
    
        if (Number(ultima.value) == 1){
            dmag = Number(inteligencia.value) * 0.4
        }
        if (Number(ultima.value) == 2){
            dfis = Number(forca.value) * 0.4
        }
        if (Number(ultima.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.4
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.4
        }
    
        deslocamento = d + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20
    }
}