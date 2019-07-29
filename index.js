var color= $('.color');
var input= $('.zodiac').val("");
var button= $('.button');
var container= $('.answer');

button.on("click", colorPicker);


function colorPicker() {
  var input = $('.zodiac').val();
  var container = $('.answer');
    if (input == "Aries") {
      color.append(<p>"Red"</p>);
      color.css('backgroundColor','#e82d23');
    } else if (input == 'Taurus') {
      color.append(<p>"Blue"</p>);
      color.css('backgroundColor','lightblue');
    } else if (input == "Capricorn") {
      color.append(<p>"Green"</p>);
      color.css('backgroundColor','#6fa380');
    } else if (input == "Leo") {
      color.append(<p>"Orange"</p>);
      color.css('backgroundColor','#fcb838');
    } else if (input == "Sagittarius") {
      color.append(<p>"Purple"</p>);
      color.css('backgroundColor','#d6adff');
    } else if (input == "Gemini") {
      color.append(<p>"Yellow"</p>);
      color.css('backgroundColor','#fcfbac');
    } else if (input == "Libra") {
      color.append(<p>"Pink"</p>);
      color.css('backgroundColor','pink');
    } else if (input == "Virgo") {
      color.append(<p>"Brown"</p>);
      color.css('backgroundColor','#8f6f4f');
    } else if (input == "Cancer") {
      color.append(<p>"Grey"</p>);
      color.css('backgroundColor','grey');
    } else if (input == "Scorpion") {
      color.append(<p>"Black"</p>);
      color.css('backgroundColor','black');
      color.css('color','white')
    } else if (input == "Aquarius") {
      console.log("Turquoise");
      color.css('backgroundColor','#5df5e3');
    } else if (input == "Pisces") {
      console.log("Sea Foam Green");
      color.css('backgroundColor','#71eeb8');
    }
}
