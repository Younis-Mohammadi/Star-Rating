const stars = document.querySelectorAll('.rating_star');
const text = document.querySelector('.rating_text');
const ratings =[{text:'I love It!'},
                {text:'Good'},
                {text:'Not Bad'},
                {text:'Bad'},
                {text:'I Hate It!'}
];
stars.forEach((star,i) =>{
    star.addEventListener('click', () =>{
        text.textContent = ratings[i].text;
        stars.forEach((star,j) =>{
            if(j >= i){
                star.classList.add('active');
            }else if(star.classList.contains('active')){
                star.classList.remove('active');
            }
        })
    })
})