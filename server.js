const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import sentences from sentences.js
const sentences = require("./sentences");

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tim Walz Fixed Your Bicycle</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <meta name="description" content="Tim Walz fixed your bicycle? What a nice fella!">
        
        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://timwalzfixedyourbicycle.com/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Tim Walz Fixed Your Bicycle">
        <meta property="og:description" content="Tim Walz fixed your bicycle? What a nice fella!">
        <meta property="og:image" content="https://cdn.glitch.global/caa249ff-6ba5-4a91-901e-9d343ae05bc9/timwaltzfixedyourbicycle.png?v=1723152647672">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="timwalzfixedyourbicycle.com">
        <meta property="twitter:url" content="https://timwalzfixedyourbicycle.com/">
        <meta name="twitter:title" content="Tim Walz Fixed Your Bicycle">
        <meta name="twitter:description" content="Tim Walz fixed your bicycle? What a nice fella!">
        <meta name="twitter:image" content="https://cdn.glitch.global/caa249ff-6ba5-4a91-901e-9d343ae05bc9/timwaltzfixedyourbicycle.png?v=1723152647672">
        <!-- Elon Musk can go eat a dry white dog turd. -->
        
        <link href="https://fonts.googleapis.com/css2?family=Caprasimo&display=swap" rel="stylesheet">

        <style>
          body {display: flex;flex-direction: column;justify-content: center;align-items: center;min-height: 100svh;font-family: 'Cooper Black', 'Caprasimo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";padding: 0;background-color: #f5a7a3;color: #0a0b0b;margin: 0;text-align: center;}.main {display: flex;flex-direction: column;justify-content: center;align-items: center;flex-grow: 1;padding: 0;}.container {display: flex;flex-direction: column;justify-content: center;align-items: center;width: 100%;}.sentence {font-size: clamp(2rem, 5vw + 1rem, 8rem);font-family: 'Cooper Black', 'Caprasimo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";background-color: transparent;border: none;padding: 0;max-width: 25ch;color: #0a0b0b;cursor: pointer;padding: 0 clamp(1rem, .875em, 10rem);width: 100%;text-wrap: balance;}.link {margin-top: 50px;margin-bottom: 0px;font-size: 1.25rem;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight: 900;color: #0a0b0b;background-color: #f5a7a3;text-decoration: none;padding: .5em .75em;}.link:hover {text-decoration: none;}.disclaimer {background-color: #0a0b0b;font-size: 1rem;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight: 600;color: #f5a7a3;padding: .75em 1em;text-align: center;text-wrap: balance;width: 100%;letter-spacing: .025ch;}
        </style>

        <script defer src="https://nebulous-lyrebird.pikapod.net/script.js" data-website-id="591e18f9-b70c-41ab-a172-e70b04b27882"></script>
        <script>
          if (window.location.hostname !== 'timwalzfixedyourbicycle.com') {
            window.location.href = 'https://timwalzfixedyourbicycle.com';
          }
        </script>
    </head>
    <body>
        <div class="main">
        <button class="sentence" onclick="window.location.reload()">${randomSentence}</button>
        <a class="link" href="https://secure.actblue.com/donate/web-hfp-waltz-august-2024">Donate to Harris/Walz 2024</a>
        <a class="link" href="https://cottonbureau.com/people/tim-walz-fixed-your-bicycle">Get a shirt</a>
      </div>
      <div class="disclaimer">Not paid for by any candidate or candidates’ committee.</div>

	<!--
	Fun nerd? Member of the media? Just wanna chat? I've had the username "boogah" over on
	Gmail for like 20 years now. Drop me a line there. Unless you're some sort of far right
	weirdo, that is.

	I primarily use the fediverse (see: Mastodon) so you could also say hi there:

    https://simian.rodeo/@boogah

	Want to make your own version of this site? Remix it on Glitch:

    https://glitch.com/edit/#!/tim-walz-fixed-your-bicycle

	Finally, I *would not* be mad if you wanted to help me cover the costs of running this
  thing. You can do so by buying a t-shirt or sending along a couple bucks.

    https://cottonbureau.com/people/tim-walz-fixed-your-bicycle
	  https://venmo.com/u/boogah
	  https://cash.app/$boogah
	  https://paypal.me/boogah
	-->

    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
