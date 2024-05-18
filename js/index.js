        
function changeQoutes()
{
    var qoutes =
    [
         `<p class="fs-3 fw-bold">“Be yourself; everyone else is already taken.”</p>
        <p class="h4"> ― Oscar Wilde</p>`
       
       ,
       
       `<p class="fs-3 fw-bold">“So many books, so little time.”</p>
       <p class="h4"> ― Frank Zappa</p>`
       ,

       `<p class="fs-3 fw-bold">“A room without books is like a body without a soul.”</p>
       <p class="h4"> ― Marcus Tullius Cicero</p>`
       
       ,
       
      `<p class="fs-3 fw-bold" >“You only live once, but if you do it right, once is enough.”</p>
       <p class="h4"> ― Mae West</p>`
       
       ,
       
       `<p class="fs-3 fw-bold">“Be the change that you wish to see in the world.”</p>
       <p class="h4"> ― Mahatma Gandhi</p>`

       ,

       `<p class="fs-3 fw-bold">“Happy birthday & I love you”</p>
       <p class="h4"> ― Esco</p>`
       
    ]

    var random = Math.floor( Math.random() * qoutes.length );

    var i = 0
    document.getElementById("displayData").innerHTML = qoutes[i + random ];
    i++;
    if(i >qoutes.length -1 )
        {
            i=0
        }
    

}

