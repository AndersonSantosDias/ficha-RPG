function calcular(){
    var niv = document.getElementById('niv')
    var raca = document.getElementById('racas')
    var forca = document.getElementById('for')
    var constituicao = document.getElementById('con')
    var velocidade = document.getElementById('vel')
    var destreza = document.getElementById('des')
    var magia = document.getElementById('mag')
    var inteligencia = document.getElementById('int')
    var carisma = document.getElementById('car')
    var dfis = 0
    var dfisarm = 0
    var dmag = 0
    var desp = 0
    var PV = 0
    var PM = 0
    var deslocamento = 0
    var ações = 0
    var defesa = 0
    var primaria = document.getElementById('primaria')
    var secundaria = document.getElementById('secundaria')
    var tercearia = document.getElementById('tercearia')
    var ultima = document.getElementById('ultima')
    if(raca.value == "Humano"){
        if (Number(primaria.value) == 1){
            PM = 45 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 30 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 30 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 30 * Number(niv.value) + Number(constituicao.value) * 10
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

        deslocamento = 5 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Vagariano"){
        if (Number(primaria.value) == 1){
            PM = 30 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 20 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 45 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5 + Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 45 * Number(niv.value) + Number(constituicao.value) * 10
            defesa = Number(constituicao.value)/10 + Number(constituicao.value)/5
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

        deslocamento = 4 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Naniki"){
        if (Number(primaria.value) == 1){
            PM = 45 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 30 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 10
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

        deslocamento = 7 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Tsukakuma"){
        if (Number(primaria.value) == 1){
            PM = 60 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 40 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 10
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

        deslocamento = 5 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Nacaridiano"){
        if (Number(primaria.value) == 1){
            PM = 23 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 15 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 40 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 40 * Number(niv.value) + Number(constituicao.value) * 10
            defesa = Number(constituicao.value)/10
        }
        if (Number(primaria.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 1.2
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
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2)
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
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.7
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
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.6
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.4
        }

        deslocamento = 6 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Anão"){
        if (Number(primaria.value) == 1){
            PM = 30 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 20 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 45 * Number(niv.value) + Number(constituicao.value) * 20
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 45 * Number(niv.value) + Number(constituicao.value) * 15
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

        deslocamento = 4 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Nekokaijin"){
        if (Number(primaria.value) == 1){
            PM = 38 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 25 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 20 * Number(niv.value) + Number(constituicao.value) * 10
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
            dmag = Number(inteligencia.value) * 0.5
        }
        if (Number(ultima.value) == 2){
            dfis = Number(forca.value) * 0.5
        }
        if (Number(ultima.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.5
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.5
        }

        deslocamento = 8 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Koinujin"){
        if (Number(primaria.value) == 1){
            PM = 38 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 25 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 30 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 30 * Number(niv.value) + Number(constituicao.value) * 10
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
            dmag = Number(inteligencia.value) * 0.5
        }
        if (Number(ultima.value) == 2){
            dfis = Number(forca.value) * 0.5
        }
        if (Number(ultima.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.5
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.5
        }

        deslocamento = 6 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Hachuruijin"){
        if (Number(primaria.value) == 1){
            PM = 38 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 25 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 40 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5 + Number(constituicao.value)/2
            dfis = Number(forca.value)
        } else{
            PV = 40 * Number(niv.value) + Number(constituicao.value) * 10
            defesa = Number(constituicao.value)/10 + Number(constituicao.value)
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
            dmag = Number(inteligencia.value) * 0.5
        }
        if (Number(ultima.value) == 2){
            dfis = Number(forca.value) * 0.5
        }
        if (Number(ultima.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.5
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.5
        }

        deslocamento = 4 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }
    if(raca.value == "Kawatonarujin"){
        if (Number(primaria.value) == 1){
            PM = 53 * Number(niv.value) + Number(magia.value) * 30
            dmag = Number(inteligencia.value)
        } else{
            PM = 35 * Number(niv.value) + Number(magia.value) * 20
        }
        if (Number(primaria.value) == 2){
            PV = 25 * Number(niv.value) + Number(constituicao.value) * 15
            defesa = Number(constituicao.value)/5
            dfis = Number(forca.value)
        } else{
            PV = 25 * Number(niv.value) + Number(constituicao.value) * 10
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
            dmag = Number(inteligencia.value) * 0.5
        }
        if (Number(ultima.value) == 2){
            dfis = Number(forca.value) * 0.5
        }
        if (Number(ultima.value) == 3){
            dfisarm = (Number(forca.value)/2 + Number(destreza.value)/2) * 0.5
        }
        if (Number(ultima.value) == 4){
            desp = Number(inteligencia.value) * 0.5
        }

        deslocamento = 5 + Number(velocidade.value)/20
        ações = 3 + Number(destreza.value)/20

    }

    /*let conteudoDiv = document.getElementById('res');
    let novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = `
    Raça: ${raca.value}
    PV: ${PV}
    Energia: ${PM}
    Deslocamento: ${deslocamento.toFixed(1)}
    Ações: ${ações.toFixed(1)}
    Defesa: ${defesa.toFixed(1)}
    Dano fisico corporal: ${dfis}
    Dano fisico com arma: ${dfisarm.toFixed(1)}
    Dano magico: ${dmag}
    Dano espiritual: ${desp}`;
    conteudoDiv.appendChild(novoParagrafo);*/
    
    var conteudoDiv = document.getElementById('res');


    var informacoes = `
    Raça: ${raca.value} <br>
    PV: ${PV} <br>
    Energia: ${PM} <br>
    Deslocamento: ${deslocamento.toFixed(1)} <br>
    Ações: ${ações.toFixed(1)} <br>
    Defesa: ${defesa.toFixed(1)} <br>
    Dano fisico corporal: ${dfis} <br>
    Dano fisico com arma: ${dfisarm.toFixed(1)} <br>
    Dano magico: ${dmag} <br>
    Dano espiritual: ${desp} <br>`;

    var paragrafoExistente = document.querySelector('#res p');
    if (paragrafoExistente) {
        paragrafoExistente.remove();
    }

    var novoParagrafo = document.createElement('p');
    novoParagrafo.innerHTML = informacoes;

    conteudoDiv.appendChild(novoParagrafo);

}