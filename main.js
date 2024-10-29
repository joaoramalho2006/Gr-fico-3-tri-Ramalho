const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
  type: "pie",
  data: {
    labels:[
      "Instagram",
      "WhatsApp",
      "Facebook",
      "WeChat",
      "TikTok",
      "DouYin",
      "Twitter",
      "Telegram",
      "FB Messenger",
      "LINE"
    ],
   datasets: [{
   data: [
     16.5,
     16.1,
     12.8,
     12.8,
     7.4,
     6.6,
     3.2,
     2.4,
     2.3,
     1.7,
],

backgroundcolor:[
"rgb(0,255,255)",
"rgb(131,111,255)",
"rgb(124,252,0)",
"rgb(139,0,139)",
"rgb(255,20,147)",
"rgb(255,0,0)",
"rgb(255,255,0)",
"rgb(175,238,238)",
"rgb(0,0,205)",
"rgb(255,140,0)",







]

   }]


  }
}
)





















   
