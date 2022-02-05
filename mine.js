let a = document.getElementById('selector')
let paragraf =  document.getElementById('parag')
a.addEventListener('change', function(){
    let option = a.value
    if(option == 'CJ'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img" src="./img/CJ-GTASA.png" alt="">
                                    <h1>Карл Джонсон</h1>
                                    <p>Карл Джонсон, также известный как CJ, является главным героем и игровым персонажем в Grand Theft Auto: San Andreas. После того, как он прожил в Либерти-Сити пять лет, его брат сообщил, что мать убита, и он возвращается в Лос-Сантос на похороны. Видя плачевную ситуацию в банде и семье, он решает остаться и доказать свою преданность своему брату Свиту и принести пользу Grove Street Families. Карл начинает срывать сделки конкурирующих банд, убивать их лидеров и захватывать территории, а также приобретать связи и бизнес-активы по всему штату Сан-Андреас.</p>
                                    <div class="istochmik">
                                        <a href="https://gta.fandom.com/ru/wiki/%D0%9A%D0%B0%D1%80%D0%BB_%D0%94%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD">Смотреть источник</a>
                                    </div>
                                </div>`
    } else if(option == 'big'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img" src="./img/big_Smol.png" alt="">
                                    <h1>Big Smoke</h1>
                                    <p>Мелвин Харрис, также известный как Биг Смоук, является ведущим членом Grove Street Families, который живет в Айдлвуде. Он рад возвращению Карла в банду и помогает ему вернуть былые позиции Grove Street Families.</p>
                                    <div class="istochmik">
                                        <a href="https://gta.fandom.com/ru/wiki/%D0%9C%D0%B5%D0%BB%D0%B2%D0%B8%D0%BD_%D0%A5%D0%B0%D1%80%D1%80%D0%B8%D1%81">Смотреть источник</a>
                                    </div>
                                </div>`
    } else if(option == 'sweet'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img" src="./img/SeanJohnson-GTASA.png" alt="">
                                    <h1>Sweet</h1>
                                    <p>Шон Джонсон, известный как Sweet, является лидером Grove Street Families и старшим братом Карла, Кендл и Брайана. Также у него есть неназванная девушка. Свит изначально скептически относится к Карлу и его возвращению, обвиняя его в смерти Брайана, но в конце концов принимает брата обратно в банду.</p>
                                    <div class="istochmik">
                                        <a href="https://gta.fandom.com/ru/wiki/%D0%A8%D0%BE%D0%BD_%D0%94%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD">Смотреть источник</a>
                                    </div>
                                </div>`
    } else if(option == 'lance'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img" src="./img/LanceWilson-GTASA (1).png" alt="">
                                    <h1>Lance Wilson</h1>
                                    <p>Предположительно Райдер родился в Лос-Сантосе, скорее всего, в Гэнтоне. Он давно знаком со Свитом, его братом Си-Джеем и Биг Смоуком.В школе был хулегалом</p>
                                    <div class="istochmik">
                                        <a href="https://gta.fandom.com/ru/wiki/%D0%9B%D1%8D%D0%BD%D1%81_%D0%A3%D0%B8%D0%BB%D1%81%D0%BE%D0%BD">Смотреть источник</a>
                                    </div>
                                </div>`
    }
    
    else {
        paragraf.innerHTML = ""
    }
})
