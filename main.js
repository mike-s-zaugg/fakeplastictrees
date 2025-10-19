//Start programm at 2:39 into "Fake Plastic Trees" from "Radiohead"
// made by Mike Zaugg, 19.10.25

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function sing() {
  const lyrics = [
    [
      { word: "She", pause: 400 },
      { word: "looks", pause: 400 },
      { word: "like", pause: 400 },
      { word: "the", pause: 400 },
      { word: "real", pause: 800 },
      { word: "thing", pause: 2500 },
    ],
    [
      { word: "She", pause: 800 },
      { word: "tastes", pause: 400 },
      { word: "like", pause: 400 },
      { word: "the", pause: 400 },
      { word: "real", pause: 800 },
      { word: "thing", pause: 2000 },
    ],
    [
      { word: "My", pause: 400 },
      { word: "fake", pause: 400 },
      { word: "plastic", pause: 3800 },
      { word: "love", pause: 0 },
    ],
     [
      { word: "", pause: 8100 },
    ],
    [
      { word: "But", pause: 400 },
      { word: "I", pause: 400 },
      { word: "can't", pause: 400 },
      { word: "help", pause: 400 },
      { word: "the", pause: 400 },
      { word: "feeling", pause: 3300 },
    ],
     [
      { word: "I", pause: 400 },
      { word: "could", pause: 400 },
      { word: "blow", pause: 400 },
      { word: "through", pause: 400 },
      { word: "the", pause: 400 },
      { word: "ceiling", pause: 2600 },
    ],
    [
      { word: "If", pause: 400 },
      { word: "I", pause: 600 },
      { word: "just", pause: 400 },
      { word: "turn", pause: 2200 },
      { word: "and", pause: 400 },
      { word: "run", pause: 1200 },
    ],
  ];

  for (const line of lyrics) {
    for (const { word, pause } of line) {
      process.stdout.write(word + " ");
      await sleep(pause);
    }
    console.log();
    await sleep(1000); 
  }
}

sing();
