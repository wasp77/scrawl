const irregulars = [
  "awoken",
  "been",
  "born",
  "beat",
  "become",
  "begun",
  "bent",
  "beset",
  "bet",
  "bid",
  "bidden",
  "bound",
  "bitten",
  "bled",
  "blown",
  "broken",
  "bred",
  "brought",
  "broadcast",
  "built",
  "burnt",
  "burst",
  "bought",
  "cast",
  "caught",
  "chosen",
  "clung",
  "come",
  "cost",
  "crept",
  "cut",
  "dealt",
  "dug",
  "dived",
  "done",
  "drawn",
  "dreamt",
  "driven",
  "drunk",
  "eaten",
  "fallen",
  "fed",
  "felt",
  "fought",
  "found",
  "fit",
  "fled",
  "flung",
  "flown",
  "forbidden",
  "forgotten",
  "foregone",
  "forgiven",
  "forsaken",
  "frozen",
  "gotten",
  "given",
  "gone",
  "ground",
  "grown",
  "hung",
  "heard",
  "hidden",
  "hit",
  "held",
  "hurt",
  "kept",
  "knelt",
  "knit",
  "known",
  "laid",
  "led",
  "leapt",
  "learnt",
  "left",
  "lent",
  "let",
  "lain",
  "lighted",
  "lost",
  "made",
  "meant",
  "met",
  "misspelt",
  "mistaken",
  "mown",
  "overcome",
  "overdone",
  "overtaken",
  "overthrown",
  "paid",
  "pled",
  "proven",
  "put",
  "quit",
  "read",
  "rid",
  "ridden",
  "rung",
  "risen",
  "run",
  "sawn",
  "said",
  "seen",
  "sought",
  "sold",
  "sent",
  "set",
  "sewn",
  "shaken",
  "shaven",
  "shorn",
  "shed",
  "shone",
  "shod",
  "shot",
  "shown",
  "shrunk",
  "shut",
  "sung",
  "sunk",
  "sat",
  "slept",
  "slain",
  "slid",
  "slung",
  "slit",
  "smitten",
  "sown",
  "spoken",
  "sped",
  "spent",
  "spilt",
  "spun",
  "spit",
  "split",
  "spread",
  "sprung",
  "stood",
  "stolen",
  "stuck",
  "stung",
  "stunk",
  "stridden",
  "struck",
  "strung",
  "striven",
  "sworn",
  "swept",
  "swollen",
  "swum",
  "swung",
  "taken",
  "taught",
  "torn",
  "told",
  "thought",
  "thrived",
  "thrown",
  "thrust",
  "trodden",
  "understood",
  "upheld",
  "upset",
  "woken",
  "worn",
  "woven",
  "wed",
  "wept",
  "wound",
  "won",
  "withheld",
  "withstood",
  "wrung",
  "written",
];

var exceptions = ["indeed"];

const passive = (text) => {
  const re = new RegExp(
    "\\b(am|are|were|being|is|been|was|be)\\b\\s*([\\w]+ed|" +
      irregulars.join("|") +
      ")\\b",
    "gi"
  );

  const match = re.exec(text);
  return !!match;
};

// Rejecting test frameworks for now
const tests = [
  ["Several of the data sets were lost", true],
  ["The Waterford crystal was dropped", true],
  ["The was dented", true],
  ["Lyn lost the data sets", false],
  ["Dona dropped the Waterford crystal", false],
  ["Max dented the car", false],
];

tests.forEach(([text, isPassive], index) => {
  const detection = passive(text);
  if (detection !== isPassive) {
    console.log(`test ${index} failed`);
  } else {
    console.log(`test ${index} succeeded`);
  }
});
