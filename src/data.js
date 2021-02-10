const creaturesArray = [
    {
      url:
        "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      title: "UniWhal",
      description: "A unicorn and a narwhal nuzzling their horns",
      keyword: "narwhal",
      horns: 1
    },
    {
      url:
        "https://cdn2.outdoorphotographer.com/contests/625611/jeff1723_131067_643543_dfa58c269a_ad9b00d35f-jeff1723-rhinofamilybwdsf6311-print-contest.jpg",
      title: "Rhino Family",
      description: "Mother (or father) rhino with two babies",
      keyword: "rhino",
      horns: 2
    },
    {
      url:
        "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      title: "Unicorn Head",
      description: "Someone wearing a creepy unicorn head mask",
      keyword: "unicorn",
      horns: 1
    },
    {
      url:
        "https://i.redd.it/vbty3hvnl7r01.jpg",
      title: "UniLego",
      description: "Lego figurine dressed in a unicorn outfit",
      keyword: "unilego",
      horns: 1
    },
    {
      url:
        "https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg",
      title: "Basically a unicorn",
      description: "A narwhal is basically a unicorn after all, right?",
      keyword: "narwhal",
      horns: 1
    },
    {
      url:
        "https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg",
      title: "#truth",
      description: "The truth behind narwhals",
      keyword: "narwhal",
      horns: 1
    },
    {
      url:
        "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
      title: "Baby Rhino",
      description: "This is actually a figurine but it looks kinda real",
      keyword: "rhino",
      horns: 2
    },
    {
      url:
        "https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003",
      title: "Cera",
      description:
        "Three horns but still, horns. And who doesn't like The Land Before Time?",
      keyword: "triceratops",
      horns: 3
    },
    {
      url:
        "https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg",
      title: "Narwhal costume",
      description: "A woman wearing a blue narwhal costume",
      keyword: "narwhal",
      horns: 1
    },
    {
      url: "https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg",
      title: "Rhino costume",
      description: "Mascots have to get their costumes somewhere",
      keyword: "rhino",
      horns: 2
    },
    {
      url:
        "https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg",
      title: "Believe",
      description: "I believe in unicorns, do you?",
      keyword: "unicorn",
      horns: 1
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg",
      title: "Markhor",
      description:
        "These wild goats eat snakes, then secrete a foam that locals fight over for the antivenom properties -- how cool is that?",
      keyword: "markhor",
      horns: 2
    },
    {
      url: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
      title: "Baby markhor",
      description: "Even the babies are adorable",
      keyword: "markhor",
      horns: 2
    },
    {
      url:
        "https://loneoakadventures.com/wp-content/uploads/2018/09/armenian-mouflon-2-500x359.jpg",
      title: "Mouflon",
      description: "Those horns though",
      keyword: "mouflon",
      horns: 2
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8FX7A0PSKrBIrHaoljCzuXgskX_nPNX67w&usqp=CAU",
      title: "Addax",
      description:
        "This guy is basically extinct but survives well in captivity, so they're frequently found in zoos",
      keyword: "addax",
      horns: 2
    },
    {
      url:
        "https://image.shutterstock.com/image-photo/mouflon-baby-capcir-pyrenees-france-260nw-1559676146.jpg",
      title: "Baby mouflon",
      description: "The cuteness that is a baby mouflon asleep",
      keyword: "mouflon",
      horns: 2
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2VMD88e3vJ-kYj0LlX1E1U3izIl2hqh-mw&usqp=CAU",
      title: "Happy Jackson's Chameleon",
      description: "These are really common in Hawaii",
      keyword: "chameleon",
      horns: 2
    },
    {
      url:
        "https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg",
      title: "Serious Jackson's Chameleon",
      description: "This one is very serious.",
      keyword: "chameleon",
      horns: 3
    },
    {
      url:
        "https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false",
      title: "Horned Lizard",
      description: "Fave food: ants",
      keyword: "lizard",
      horns: 100
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg",
      title: "Smaug",
      description: "Fan illustration of Smaug from 'The Hobbit'",
      keyword: "dragon",
      horns: 100
    }
  ];
  
  export default creaturesArray;