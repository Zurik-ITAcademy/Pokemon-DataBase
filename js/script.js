const baseUrl = 'https://pokeapi.co/api/v2';
const getRequest = (url, query, cb) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}?${query}`);
    xhr.addEventListener('load', () =>{
        const response = JSON.parse(xhr.response);
        cb(response)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
    })

    xhr.send()
}


const $container = document.querySelector('.cardContainer')

window.addEventListener('load', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=0&limit=100', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})

const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')
const $page3 = document.querySelector('.page3')
const $page4 = document.querySelector('.page4')
const $page5 = document.querySelector('.page5')
const $page6 = document.querySelector('.page6')
const $page7 = document.querySelector('.page7')
const $page8 = document.querySelector('.page8')
const $page9 = document.querySelector('.page9')
const $page10 = document.querySelector('.page10')

$page1.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=0&limit=100', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})

$page2.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=100&limit=200', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page3.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=200&limit=300', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page3.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=300&limit=400', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page4.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=400&limit=500', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page5.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=500&limit=600', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page6.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=600&limit=700', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page7.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=700&limit=800', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page8.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=800&limit=900', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page9.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=900&limit=1000', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})
$page10.addEventListener('click', () =>{

    getRequest(`${baseUrl}/pokemon`,'offset=1000&limit=1118', res=>{
        const template = res.results.map(({name, url}) =>{
            return`
                <div class="skills">
                    <div class="container">                       
                        <div class="skill-card">
                            <div class="card">
                                <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                                <h4>${name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        $container.innerHTML = template;
    })

})

const infoPoke = document.querySelector('.infoPoke')

function singlePokemon(url){
    getRequest(url, '', res =>{
        console.log(res);
        $container.innerHTML = `
            <div class="container mt-5">
                <div class="dubbleBlock">
                    <div class="bgColor">
                            <div class="imgBlock">
                            <img src="${res.sprites.other.dream_world.front_default}">
                            <h4 class="text-center pt-5" style="text-transform: uppercase"><b style="color:#fff">${res.name}</b></h4>
                        </div>
                        <div class="rightBlock">
                            <div class="infoData">
                                <h3 class="d-flex justify-content-center pb-2">Базовые Данные</h3>
                                <div class="mb-2 d-flex justify-content-between">
                                    <h4>Опыт №1:</h4>
                                    <p>${res.abilities[0].ability.name}</p>
                                    <a style="text-decoration:none; padding:5px; background-color:blue; color:#fff" href="${res.abilities[0].ability.url.length} !== 0 ? '${[...res.abilities[0].ability.url]}' : 'Doesn't borders'">подробно</a>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Опыт №2:</h4>
                                    <p>${res.abilities[1].ability['name']}</p>
                                    <a style="text-decoration:none; padding:5px; background-color:blue; color:#fff" href="${res.abilities[1].ability.url}">подробно</a>
                                </div>

                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Способности:</h4>
                                    <p>${res.base_experience}</p>
                                </div>

                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Формы:</h4>
                                    <p>${res.forms[0].name}</p>
                                    <a style="text-decoration:none; padding:5px; background-color:blue; color:#fff" href="${res.forms.url}">подробно</a>
                                </div>

                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Рост: </h4>
                                    <p> ${res.height}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Место встреч: </h4>
                                    <a href=" ${res.location_area_encounters}">Место встреч</a>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>По умолчанию: </h4>
                                    <p> ${res.is_default}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                    <h4>Заказывать: </h4>
                                    <p> ${res.order}</p>
                                </div>
                            </div>
                        </div>
                            <div class="specials">
                                <h3 class="d-flex justify-content-center pb-2">Аттака способност</h3>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Cтат-ка №1: </h4>
                                        <p> ${res.stats[0].base_stat}</p>
                                        <p> ${res.stats[0].stat.name}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Cтат-ка №2: </h4>
                                        <p> ${res.stats[1].base_stat}</p>
                                        <p> ${res.stats[1].stat.name}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Типы: </h4>
                                        <p> ${res.types[0].slot}</p>
                                        <p> ${res.types[0].type.name}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Движется: </h4>
                                        <p> ${res.moves[0].move.name}</p>
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Иконки: </h4>
                                        <img style="width:50px" src="${res.sprites.back_default}">
                                </div>
                                <div class="mb-1 d-flex justify-content-between">
                                        <h4>Масса: </h4>
                                        <p> ${res.weight}</p>
                                </div>
                            </div>                        
                    </div>
                </div>
            
            </div>
        
        `
    })
}

const getSearch = (url, cb) =>{
    const srch = new XMLHttpRequest();
    srch.open('GET', url);
    srch.addEventListener('load',  () => {
        const response = JSON.parse(srch.response);
        cb(response)
    })
    srch.addEventListener('error', err =>{
        console.log(err)
    })
    srch.send();
}

const $searchInput = document.querySelector('.searchInput');

window.addEventListener('load', () => {
    if(localStorage.getItem('pokDtb')){
        return;
    }else{
        getSearch(`${baseUrl}/pokemon?limit=1118`, res => {
            localStorage.setItem('pokDtb', JSON.stringify(res.results));
        })
    }
})

const pokDtb = JSON.parse(localStorage.getItem('pokDtb'));

$searchInput.addEventListener('input', e => {
    const value = e.target.value.toUpperCase()
    const filterArr = pokDtb.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));
    if(value !== ''){
        const template = filterArr.map(item => {
            return cardTemplate(item);
        }).join('');
        $container.innerHTML = template;
    }else{
        getRequest(`${baseUrl}/pokemon`, 'offset=0&limit=100', res => {
            const temp = res.results.map(item => {
                return cardTemplate(item)
            }).join('');
    
            $container.innerHTML = temp;
        })
    }
})

function cardTemplate(item){
    return`
        <div class="skills col-lg-4">
            <div class="container row">                       
                <div class="skill-card col-lg-3">
                    <div class="card">
                        <div class="i"><img src="https://1.bp.blogspot.com/-rCW-zE3bHmo/U9sZDk9e_KI/AAAAAAAACMU/FrtvsD97l7M/s1600/eiMArL4yT.png"></div>
                        <h4>${item.name}</h4>
                        <button class="butn"  onclick="singlePokemon('${item.url}')">READ MOREE</button>
                    </div>
                </div>
            </div>
        </div>
    `
}