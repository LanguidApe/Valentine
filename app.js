let yesBtn = document.querySelector('#yesBtn');
let noBtn = document.querySelector('#noBtn');
let card = document.querySelector('#card');
let body = document.querySelector('body');


yesBtn.addEventListener('click', () => {
    let text = document.querySelector('#card h1');
    let img = document.querySelector('#card img');
    img.src = 'https://images.unsplash.com/photo-1566513875272-0e184c92b77c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhjaXRlZHxlbnwwfHwwfHx8MA%3D%3D';
    text.innerText = 'OMG Really??';

    yesBtn.id = '2YesBtn';

    yesBtn.addEventListener('click', () => {
        let img = document.querySelector('#card img');
        img.src = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D';
        let text = document.querySelector('#card h1');
        text.innerHTML = 'Yayyyy! <br> <p>Now pick a choice of the three below so I can slave away in the kitchen while you eat like a queen, just as you deserve.<p/>';
        yesBtn.remove();
        noBtn.remove();
        let list = document.createElement('ul');
        let chicken = document.createElement('li');
        let pork = document.createElement('li');
        let beef = document.createElement('li');
        list.append(chicken);
        list.append(pork);
        list.append(beef);
        card.append(list);
        chicken.innerText = 'Chicken Parmesean over baked cauliflower (pretty fucking good).';
        pork.innerText = 'BBQ Rib Tacos (really fucking good).';
        beef.innerText = 'Steak, potatoes, and beautiful, beautiful bread.'
    })

});


noBtn.addEventListener('click', () => {
    body.innerHTML = '';
    body.style = "background-size: contain; background-color: black; background-image: url('https://images.unsplash.com/photo-1591890799331-94ab715fa69e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');";

});