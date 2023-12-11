
var qoutes =['“Be yourself; everyone else is already taken.” <br> <br>  ― Oscar Wilde ' , //qoute One

            "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br> <br> ― Marilyn Monroe", //qoute Two

            "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> <br> ― Albert Einstein", //qoute Three

            "“So many books, so little time.” <br> <br> ― Frank Zappa", //qoute Four

            "“A room without books is like a body without a soul.” <br> <br> ― Marcus Tullius Cicero", //qoute Five

            "“To live is the rarest thing in the world. Most people exist, that is all.” <br> <br> ― Oscar Wilde", //qoute Six

            "Nothing is harder on the soul, than the smell of dreams, while they're evaporating. <br> <br> ― Mahmoud Darwish", //qoute Seven

            `We suffer from an incurable malady: Hope. <br> <br> ― Mahmoud Darwish`, //qoute Eight

            "“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br> <br> ― Mahatma Gandhi", //qoute Nine

            "“I am so clever that sometimes I don't understand a single word of what I am saying.” <br> <br> ― Oscar Wilde", //qoute Ten

            "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.” <br> <br> ― Marilyn Monroe", //qoute Eleven

            "“Good friends, good books, and a sleepy conscience: this is the ideal life.” <br> <br> ― Mark Twain" //qoute Twelve
            ]

var randomQoute ; 

function GetNewQoute (){
    randomQoute = Math.trunc(Math.random() * qoutes.length)
    document.getElementById('qoute').innerHTML = qoutes[randomQoute]
}