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

    xhr.send();
}


const $container = document.querySelector('.cardContainer')

window.addEventListener('load', ()=>{
    getRequest(`${baseUrl}/pokemon`,'offset=0&limit=1', res =>{
        res.results.forEach(item => {
            pokemon(item.url)
        });
    })
    
    const pokemon = url =>{
        getRequest(url,'', res=>{
           return $container.innerHTML +=`
            <div class="skills col-lg-4">
                <div class="container row">                       
                    <div class="skill-card col-lg-3">
                        <div class="card">
                            <div class="i"><img src="${res.sprites.other.dream_world.front_default}"></div>
                            <h4>${res.name}</h4>
                            <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        })
    }
})

// Пагинация на страницу

const $prevBtn = document.querySelector('.prevBtn');
const $page = document.querySelector('.page');
const $nextBtn = document.querySelector('.nextBtn');
const LIMIT = 20;
const TOTAL_POKEMONS = 1118;
const TOTAL_PAGES = Math.floor(TOTAL_POKEMONS / LIMIT)
let pageCounter = 1;
let offsetCounter = 0;


const getRequests = (routes, queries, cb) =>{
    const baseUrl = 'https://pokeapi.co/api/v2';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}/${routes}?${queries}`);
    xhr.addEventListener('load', () =>{
        const response = JSON.parse(xhr.response);
        cb(response)
    })

    xhr.addEventListener('error', err =>{
        console.log(err);
    })

    xhr.send()
}

getRequests(`pokemon`, `offset=${offsetCounter}&limit=${LIMIT}`, res =>{
    res.results.forEach(item => {
        pokemon(item.url)
    });
})
const pokemon = url =>{
    getRequest(url,'', res=>{
        return $container.innerHTML +=`
        <div class="skills col-lg-4">
            <div class="container row">                       
                <div class="skill-card col-lg-3">
                    <div class="card">
                        <div class="i"><img src="${res.sprites.other.dream_world.front_default}"></div>
                        <h4>${res.name}</h4>
                        <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}

window.addEventListener('load', () =>{
    $page.innerHTML= pageCounter;
    $prevBtn.setAttribute('disabled', true)
})

$nextBtn.addEventListener('click', e=>{
    e.preventDefault();
    $prevBtn.removeAttribute('disabled');
    if(pageCounter >= 1 && pageCounter <= TOTAL_PAGES){
        if(pageCounter === TOTAL_PAGES){
            $nextBtn.setAttribute('disabled', true);
            getRequests('pokemon', `offset=${offsetCounter += LIMIT}&limit=${LIMIT}`, res=>{
                res.results.forEach(item => {
                    pokemon(item.url)
                });
                pageCounter++;
                $page.innerHTML = pageCounter;
                const temp = res.results.map(item => pokemon(item.url)).join('');
                $container.innerHTML = temp
            })
        }else{
            getRequests('pokemon', `offset=${offsetCounter += LIMIT}&limit=${LIMIT}`, res=>{
                pageCounter++;
                $page.innerHTML = pageCounter;
                const temp = res.results.map(item => pokemon(item.url)).join('');
                $container.innerHTML = temp

            })
        }
    }

})

$prevBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(pageCounter >= 1){
        pageCounter--;
        if(pageCounter === 1){
            $prevBtn.setAttribute('disabled', true);
            offsetCounter = 0;
            getRequests('pokemon', `offset=${offsetCounter}&limit=${LIMIT}`, res=>{
                res.results.forEach(item => {
                    pokemon(item.url)
                });
                $page.innerHTML = pageCounter;
                const temp = res.results.forEach(item => pokemon(item.url)).join('');
                $container.innerHTML = temp

            })
        }else{
            getRequests('pokemon', `offset=${offsetCounter -= LIMIT}&limit=${LIMIT}`, res=>{
                $nextBtn.removeAttribute('disabled')
                $page.innerHTML = pageCounter;
                const temp = res.results.map(item => pokemon(item.url)).join('');
                $container.innerHTML = temp

            })
        }
    }
})

// Подробное информация о покемонов


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

// Поиск покемонов

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
        getSearch(`${baseUrl}/pokemon`, ' ', res => {
            localStorage.setItem('pokDtb', JSON.stringify(res.results));
        })
    }
})

const pokDtb = JSON.parse(localStorage.getItem('pokDtb'));

$searchInput.addEventListener('input', e => {
    const value = e.target.value.toUpperCase()
    const filterArr = pokDtb.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));
    if(value !== ''){
        const template = filterArr.forEach(item => {
            pokemon(item.url)
        });
        $container.innerHTML = template;
    }else{
        getRequest(`${baseUrl}/pokemon`, 'offset=0&limit=1', res =>{
            res.results.forEach(item => {
                pokemon(item.url)
            });

        })

        const pokemon = url =>{
            getRequest(url,'', res=>{
               return $container.innerHTML +=`
                <div class="skills col-lg-4">
                    <div class="container row">                       
                        <div class="skill-card col-lg-3">
                            <div class="card">
                                <div class="i"><img src="${res.sprites.other.dream_world.front_default}"></div>
                                <h4>${res.name}</h4>
                                <button class="butn"  onclick="singlePokemon('${url}')">READ MOREE</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            })
        }
        
    }
})


