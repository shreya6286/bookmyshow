let shows = [
    {
        action: 'interstellar',
        id: 1,
        showname: "Interstellar",
        duration: "2h 49m",
        director: "Christopher Nolan",
        price: 120,
        image: "./assets/intersteller.jpeg",
        bgimage: "./assets/interstellar-bg.jpg",
        description: "Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind."
    },
    {
        action: 'littlewoman',
        id: 2,
        showname: "Little Women",
        duration: "2h 15m",
        director: "Greta Gerwig",
        price: 150,
        image: "./assets/littlewomen1.jpeg",
        bgimage: "./assets/lw.bg.jpg",
        description: "It chronicles the lives of the March sisters—Meg, Jo, Beth, and Amy—in Concord, Massachusetts, during the nineteenth century."
    },
    {
        action: 'dps',
        id: 3,
        showname: "Dead Poets Society",
        duration: "2h 20m",
        director: "Peter Weir",
        price: 180,
        image: "./assets/dps.jpeg",
        bgimage: "./assets/dps-bg.jpg",
        description: "Set in 1959 at the fictional elite conservative boarding school Welton Academy, it tells the story of an English teacher who inspires his students through his teaching of poetry."
    },
]

let pay = document.getElementById('pay');
pay.setAttribute('style', 'display: none');

shows.forEach(function (item){
    let viewItem = document.getElementById('view');

    let div1 = document.createElement('div');
    div1.className = 'columns';
    let span0 = document.createElement('span');
    span0.className = 'card';
    div1.appendChild(span0);
    viewItem.appendChild(div1);
    let img1 = document.createElement('img');
    img1.setAttribute('src', item.image);
    img1.className = 'img';
    span0.appendChild(img1);

    let div3 = document.createElement('div');
    div3.className = 'title';
    span0.appendChild(div3);
    let node1 = document.createTextNode(item.showname);
    div3.appendChild(node1)
    let div4 = document.createElement('div');
    div4.className = 'd1';
    span0.appendChild(div4);
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    span2.className = 'a1';
    div4.appendChild(span1);
    div4.appendChild(span2);

    let t1 = document.createTextNode('Time: ');
    span1.appendChild(t1);
    let t2 = document.createTextNode(item.duration);
    span2.appendChild(t2);

    let div5 = document.createElement('div');
    div5.className = 'd1';
    let span3 = document.createElement('span');
    div5.appendChild(span3);
    let t3 = document.createTextNode(item.director);
    span3.appendChild(t3);
    div5.appendChild(t3);
    let span4 = document.createElement('span');
    div5.appendChild(span4);
    let t4 = document.createTextNode('Directed by:');
    span3.appendChild(t4);
    span0.appendChild(div5);
    span3.className = 'shift';
    
    let div6 = document.createElement('div');
    div6.className = 'd1';
    let span5 = document.createElement('span');
    div6.appendChild(span5);
    let t5 = document.createTextNode(item.price);
    span5.appendChild(t5);
    div6.appendChild(t5);
    span0.appendChild(div6);
    let t6 = document.createTextNode('Ticket Price:');
    span5.appendChild(t6);
    span5.className = 'shift';

    let button1 = document.createElement('button');
    button1.className = 'btn';
    span0.appendChild(button1);
    let node7 = document.createTextNode('Book Show');
    button1.appendChild(node7);
    button1.addEventListener('click', ()=>showMovie());

/****************************************************************************************/

function showMovie(){
    document.getElementById('num').value = " ";
    document.getElementById('f4').innerHTML = " ";
    document.getElementById('msg').innerHTML = " ";

    let viewMovie = document.getElementById('showMovieDetails');

    let bg_cover = document.getElementById('bg_cover');
    bg_cover.setAttribute("style", "background-image: url(" + item.bgimage + ");background-repeat: no-repeat;background-size: 1250px 500px");
    viewMovie.appendChild(bg_cover);

    let img_col_1 = document.getElementById('col_1');
    bg_cover.appendChild(img_col_1);
    let movieImage = document.getElementById('movieImage');
    movieImage.setAttribute('src', item.image);
    movieImage.className = 'movieImage';
    img_col_1.appendChild(movieImage)

    let panel = document.getElementById('panel');
    panel.className = 'panel';
    img_col_1.appendChild(panel);

    let f1 = document.getElementById('f1');
    document.getElementById('f0').innerHTML = "Description: "
    document.getElementById('f1').innerHTML = item.description
    f1.className = 'd2'
    f0.className = 'h6'
    panel.appendChild(f0);
    panel.appendChild(f1);

    let f2 = document.getElementById('f2');
    f2.innerHTML = "Number of people: ";
    f2.className = 'h6';
    panel.appendChild(f2);

    let inp = document.getElementById('num');
    inp.className = 'quantity';
    panel.appendChild(inp);

    pay.setAttribute('style', 'display: block');

    let btn1 = document.getElementById('btn0');
    btn1.addEventListener('click', ()=>totalCost());
    panel.appendChild(btn1);

    let f3 = document.getElementById('f3');
    f3.innerHTML = "Total cost: "
    f3.className = 'h6';
    panel.appendChild(f3);

    let f4 = document.getElementById('f4');
    f4.className = 'cost';
    panel.appendChild(f4);

    let payNowBtn = document.getElementById('payNowBtn');
    payNowBtn.addEventListener('click', ()=>payNow());
    panel.appendChild(payNowBtn);

    document.getElementById('showMovieDetails').scrollIntoView();

/****************************************************************************************/
                                 //FUNCTION CALLS
/****************************************************************************************/

    function totalCost(){
        let inp = document.getElementById('num').value;
        let cst = document.getElementById('f4');
        cst.innerHTML = item.price * inp;
        cst.className = 'cost';
    }

    function payNow(){
        let inp = document.getElementById('num').value
        if(inp > 0){
            document.getElementById('msg').innerHTML = "Congratulations! Your show has been booked!"
        }
    }
}   


})

