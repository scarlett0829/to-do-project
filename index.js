var color= $('.color');
var input= $('.zodiac').val();
var button= $('.button');
var container= $('.answer');

button.on("click", colorPicker);

function colorPicker() {
  var input = $('.zodiac').val();
  var container = $('.answer');
    if (input == "Aries") {
      color.append(`<p>"Your Color is: Red"</p>`);
      color.append(`<p>It’s no wonder Aries zodiac signs are blazing the color-trail with red. You’re a sign of passion, high energy and enthusiasm. Aries rolls out the procession of signs, and red corresponds with that essence of initiation. Red is such an energizing color; it tends to kick-start your engines and enhance your exuberance.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/aries_2648.png">')
      color.css('backgroundColor','#e82d23');
    } else if (input == 'Taurus') {
      color.append(`<p>"Your Color is: Blue"</p>`);
      color.append(`<p>Considering your sign is grounded in earth energy, it’s no surprise your governing color is blue. Think lush growth, natural splendor, and rich renewal. Blue is a watery, youthful sign. Your color meaning suggests you flow like rivers and streams. Even so, you love to see things grow up and thrive. Blue is symbolic of movement and tranquility.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/taurus_2649.png">')
      color.css('backgroundColor','lightblue');
    } else if (input == "Capricorn") {
      color.append(`<p>"Your Color is: Green"</p>`);
      color.append(`<p>Color meanings for Capricorn zodiac signs is fresh, alive and scintillating with green, emerald goodness. Color meanings of green for Capricorn zodiac signs deals with depth of perception. You have the ability to pierce the darkness and see clearly through confusion. Part of that green goodness comes from an innate knowing about how things should be in the world. Nature is a big necessity for you.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/capricorn_2651.png">')
      color.css('backgroundColor','#6fa380');
    } else if (input == "Leo") {
      color.append(`<p>"Your Color is: Orange"</p>`);
      color.append(`<p>Leo zodiac signs are absolutely radiant, so it’s a no-brainer their color mimics the hues of the sun. You have the capacity to shine your light on the world and even into the universe. It’s your charisma that makes you so expansive. Like the rays of the sun, you’ve got this energy that just doesn’t quit. Orange is symbolic of humor, intelligence, courage and strength. It’s also a very positive color. If you are feeling low, consider focusing on the energy of orange.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/leo_264c.png">')
      color.css('backgroundColor','#fcb838');
    } else if (input == "Sagittarius") {
      color.append(`<p>"Your Color is: Purple"</p>`);
      color.append(`<p>There is an electric quality to purple that matches Sagittarius zodiac signs’ energy. Enthusiasm is the watchword for your color aligned with your sign. You’ve got gusto, and you usually aren’t afraid to prove it. On the end of the color spectrum, purple implies temperance too. This is a lovely juxtaposition. Purple energy is excited when it comes to adventures in understanding and wisdom. This means you have a gift for sharing your knowledge in uncommon, adventurous ways. Purple is also a color of spirituality, and your explorations may often revolve around spiritual themes.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/sagittarius_2650.png">')
      color.css('backgroundColor','#d6adff');
    } else if (input == "Gemini") {
      color.append(`<p>"Your Color is: Yellow"</p>`);
      color.append(`<p>Your color meanings imply a high level of engagement with other people and a strong sense of your place within a close-knit community. The color yellow is symbolic of harmony. Ergo, (as a dualistic sign) it’s not surprising yellow is your color, Gemini. You strive to keep things as mellow and balanced as possible. Invoke yellow energy to help you with this. Yellow can illuminate you and get you on fire to express yourself in healthy ways.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/gemini_264a.png">')
      color.css('backgroundColor','#fcfbac');
    } else if (input == "Libra") {
      color.append(`<p>"Your Color is: Pink"</p>`);
      color.append(`<p>Color meanings for Libra zodiac signs is fresh, alive and scintillating with pink goodness. You’ve got this glimmery sparkle about you that is both enchanting and delightful. Part of that pink goodness comes from an innate knowing about how things should be in the world. You inherently know how love equates, balances and comes together to bring about perfect harmony.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/libra_264e.png">')
      color.css('backgroundColor','pink');
    } else if (input == "Virgo") {
      color.append(`<p>"Your Color is: Grey"</p>`);
      color.append(`<p>Your zodiac color says “stay calm, and carry on.” Grey for Virgo has a very calming, tranquil energy to it. As a result, you rarely have (too much) of a problem finding your “happy place”. Because you are skilled at tapping into peace and balance, others are attracted to your easy-going demeanor. In fact, grey is a neutral, balancing color. I wouldn’t be surprised if you are the go-to person when people need help.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/virgo_264d.png">')
      color.css('backgroundColor','#8f6f4f');
    } else if (input == "Cancer") {
      color.append(`<p>"Your Color is: Cream"</p>`);
      color.append(`<p>You can go very deep….deep within yourself, within the realm of dreams and emotions. Cream will pull you out and energize you when you feel overwhelmed. It’s a perfect color match for Cancer zodiac signs because it is a nurturing homey, color. You’ve got a great perspective on how things should be. Tapping into the color meanings of violet will help you manifest your ideas and expectations.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/cancer_264b.png">')
      color.css('backgroundColor','grey');
    } else if (input == "Scorpio") {
      color.append(`<p>"Your Color is: Black"</p>`);
      color.append(`<p>Black is your color. Why? Because black goes deep, like you do. Visualize a volcano. I can’t think of a better metaphor for Scorpio-black. Deep within you is a passion that stirs and churns. That lava-love within you is sometimes very calm….sometimes bubbling at the brim, aching to spring forth with startling power. Black is a color of sensuality, love, potential, magic and manifestation.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/scorpius_264f.png">')
      color.css('backgroundColor','black');
      color.css('color','white');
    } else if (input == "Aquarius") {
      color.append(`<p>Your Color is: Turquoise</p>`);
      color.append(`<p>You have a keen sensitivity that has the color turquoise written all over it. This sensitivity shows itself as high creativity. As an expressive color, turquoise implies you find great joy in expressing your depth through art, music, writing. You have incredible ability to take ephemeral concepts, and weave them into meaningfulness with style. Turquoise can be a very internal color. Meaning, sometimes you are pulled into your own dreamy whirlpools of thought and sensitivity. Thankfully, turquoise can be very energizing too.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/aquarius_2652.png">')
      color.css('backgroundColor','#5df5e3');
    } else if (input == "Pisces") {
      color.append(`<p>Your Color is: Sea Foam Green</p>`);
      color.append(`<p>Your sea foam green-colored waters run deep, Pisces. Some of the emotional waters you swim in are very dark – but very little escapes your perception. Sea Foam Green is all about moving deeply…especially in matters of emotion. You don’t even have to see what’s going on around you. You can just feel the energetic waves of emotion. This makes you highly sensitive to external influences. Luckily, sea foam green can be a very insulating and protective energy.</p>`);
      color.append('<img src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/pisces_2653.png">')
      color.css('backgroundColor','#71eeb8');
    } else { color.append(`<p> something's wrong </p>`);
    }
}
