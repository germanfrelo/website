// Pokémon related variables
const minPokemon = 1;
const maxPokemon = 898;
const basePokemonImg = {
	// URL example of Pokémon n.º 1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
	src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/",
	width: "96",
	height: "96"
};

const pokemonList = [
	{
		number: "001",
		name: "Bulbasaur"
	},
	{
		number: "002",
		name: "Ivysaur"
	},
	{
		number: "003",
		name: "Venusaur"
	},
	{
		number: "004",
		name: "Charmander"
	},
	{
		number: "005",
		name: "Charmeleon"
	},
	{
		number: "006",
		name: "Charizard"
	},
	{
		number: "007",
		name: "Squirtle"
	},
	{
		number: "008",
		name: "Wartortle"
	},
	{
		number: "009",
		name: "Blastoise"
	},
	{
		number: "010",
		name: "Caterpie"
	},
	{
		number: "011",
		name: "Metapod"
	},
	{
		number: "012",
		name: "Butterfree"
	},
	{
		number: "013",
		name: "Weedle"
	},
	{
		number: "014",
		name: "Kakuna"
	},
	{
		number: "015",
		name: "Beedrill"
	},
	{
		number: "016",
		name: "Pidgey"
	},
	{
		number: "017",
		name: "Pidgeotto"
	},
	{
		number: "018",
		name: "Pidgeot"
	},
	{
		number: "019",
		name: "Rattata"
	},
	{
		number: "020",
		name: "Raticate"
	},
	{
		number: "021",
		name: "Spearow"
	},
	{
		number: "022",
		name: "Fearow"
	},
	{
		number: "023",
		name: "Ekans"
	},
	{
		number: "024",
		name: "Arbok"
	},
	{
		number: "025",
		name: "Pikachu"
	},
	{
		number: "026",
		name: "Raichu"
	},
	{
		number: "027",
		name: "Sandshrew"
	},
	{
		number: "028",
		name: "Sandslash"
	},
	{
		number: "029",
		name: "Nidoran♀"
	},
	{
		number: "030",
		name: "Nidorina"
	},
	{
		number: "031",
		name: "Nidoqueen"
	},
	{
		number: "032",
		name: "Nidoran♂"
	},
	{
		number: "033",
		name: "Nidorino"
	},
	{
		number: "034",
		name: "Nidoking"
	},
	{
		number: "035",
		name: "Clefairy"
	},
	{
		number: "036",
		name: "Clefable"
	},
	{
		number: "037",
		name: "Vulpix"
	},
	{
		number: "038",
		name: "Ninetales"
	},
	{
		number: "039",
		name: "Jigglypuff"
	},
	{
		number: "040",
		name: "Wigglytuff"
	},
	{
		number: "041",
		name: "Zubat"
	},
	{
		number: "042",
		name: "Golbat"
	},
	{
		number: "043",
		name: "Oddish"
	},
	{
		number: "044",
		name: "Gloom"
	},
	{
		number: "045",
		name: "Vileplume"
	},
	{
		number: "046",
		name: "Paras"
	},
	{
		number: "047",
		name: "Parasect"
	},
	{
		number: "048",
		name: "Venonat"
	},
	{
		number: "049",
		name: "Venomoth"
	},
	{
		number: "050",
		name: "Diglett"
	},
	{
		number: "051",
		name: "Dugtrio"
	},
	{
		number: "052",
		name: "Meowth"
	},
	{
		number: "053",
		name: "Persian"
	},
	{
		number: "054",
		name: "Psyduck"
	},
	{
		number: "055",
		name: "Golduck"
	},
	{
		number: "056",
		name: "Mankey"
	},
	{
		number: "057",
		name: "Primeape"
	},
	{
		number: "058",
		name: "Growlithe"
	},
	{
		number: "059",
		name: "Arcanine"
	},
	{
		number: "060",
		name: "Poliwag"
	},
	{
		number: "061",
		name: "Poliwhirl"
	},
	{
		number: "062",
		name: "Poliwrath"
	},
	{
		number: "063",
		name: "Abra"
	},
	{
		number: "064",
		name: "Kadabra"
	},
	{
		number: "065",
		name: "Alakazam"
	},
	{
		number: "066",
		name: "Machop"
	},
	{
		number: "067",
		name: "Machoke"
	},
	{
		number: "068",
		name: "Machamp"
	},
	{
		number: "069",
		name: "Bellsprout"
	},
	{
		number: "070",
		name: "Weepinbell"
	},
	{
		number: "071",
		name: "Victreebel"
	},
	{
		number: "072",
		name: "Tentacool"
	},
	{
		number: "073",
		name: "Tentacruel"
	},
	{
		number: "074",
		name: "Geodude"
	},
	{
		number: "075",
		name: "Graveler"
	},
	{
		number: "076",
		name: "Golem"
	},
	{
		number: "077",
		name: "Ponyta"
	},
	{
		number: "078",
		name: "Rapidash"
	},
	{
		number: "079",
		name: "Slowpoke"
	},
	{
		number: "080",
		name: "Slowbro"
	},
	{
		number: "081",
		name: "Magnemite"
	},
	{
		number: "082",
		name: "Magneton"
	},
	{
		number: "083",
		name: "Farfetch'd"
	},
	{
		number: "084",
		name: "Doduo"
	},
	{
		number: "085",
		name: "Dodrio"
	},
	{
		number: "086",
		name: "Seel"
	},
	{
		number: "087",
		name: "Dewgong"
	},
	{
		number: "088",
		name: "Grimer"
	},
	{
		number: "089",
		name: "Muk"
	},
	{
		number: "090",
		name: "Shellder"
	},
	{
		number: "091",
		name: "Cloyster"
	},
	{
		number: "092",
		name: "Gastly"
	},
	{
		number: "093",
		name: "Haunter"
	},
	{
		number: "094",
		name: "Gengar"
	},
	{
		number: "095",
		name: "Onix"
	},
	{
		number: "096",
		name: "Drowzee"
	},
	{
		number: "097",
		name: "Hypno"
	},
	{
		number: "098",
		name: "Krabby"
	},
	{
		number: "099",
		name: "Kingler"
	},
	{
		number: "100",
		name: "Voltorb"
	},
	{
		number: "101",
		name: "Electrode"
	},
	{
		number: "102",
		name: "Exeggcute"
	},
	{
		number: "103",
		name: "Exeggutor"
	},
	{
		number: "104",
		name: "Cubone"
	},
	{
		number: "105",
		name: "Marowak"
	},
	{
		number: "106",
		name: "Hitmonlee"
	},
	{
		number: "107",
		name: "Hitmonchan"
	},
	{
		number: "108",
		name: "Lickitung"
	},
	{
		number: "109",
		name: "Koffing"
	},
	{
		number: "110",
		name: "Weezing"
	},
	{
		number: "111",
		name: "Rhyhorn"
	},
	{
		number: "112",
		name: "Rhydon"
	},
	{
		number: "113",
		name: "Chansey"
	},
	{
		number: "114",
		name: "Tangela"
	},
	{
		number: "115",
		name: "Kangaskhan"
	},
	{
		number: "116",
		name: "Horsea"
	},
	{
		number: "117",
		name: "Seadra"
	},
	{
		number: "118",
		name: "Goldeen"
	},
	{
		number: "119",
		name: "Seaking"
	},
	{
		number: "120",
		name: "Staryu"
	},
	{
		number: "121",
		name: "Starmie"
	},
	{
		number: "122",
		name: "Mr. Mime"
	},
	{
		number: "123",
		name: "Scyther"
	},
	{
		number: "124",
		name: "Jynx"
	},
	{
		number: "125",
		name: "Electabuzz"
	},
	{
		number: "126",
		name: "Magmar"
	},
	{
		number: "127",
		name: "Pinsir"
	},
	{
		number: "128",
		name: "Tauros"
	},
	{
		number: "129",
		name: "Magikarp"
	},
	{
		number: "130",
		name: "Gyarados"
	},
	{
		number: "131",
		name: "Lapras"
	},
	{
		number: "132",
		name: "Ditto"
	},
	{
		number: "133",
		name: "Eevee"
	},
	{
		number: "134",
		name: "Vaporeon"
	},
	{
		number: "135",
		name: "Jolteon"
	},
	{
		number: "136",
		name: "Flareon"
	},
	{
		number: "137",
		name: "Porygon"
	},
	{
		number: "138",
		name: "Omanyte"
	},
	{
		number: "139",
		name: "Omastar"
	},
	{
		number: "140",
		name: "Kabuto"
	},
	{
		number: "141",
		name: "Kabutops"
	},
	{
		number: "142",
		name: "Aerodactyl"
	},
	{
		number: "143",
		name: "Snorlax"
	},
	{
		number: "144",
		name: "Articuno"
	},
	{
		number: "145",
		name: "Zapdos"
	},
	{
		number: "146",
		name: "Moltres"
	},
	{
		number: "147",
		name: "Dratini"
	},
	{
		number: "148",
		name: "Dragonair"
	},
	{
		number: "149",
		name: "Dragonite"
	},
	{
		number: "150",
		name: "Mewtwo"
	},
	{
		number: "151",
		name: "Mew"
	},
	{
		number: "152",
		name: "Chikorita"
	},
	{
		number: "153",
		name: "Bayleef"
	},
	{
		number: "154",
		name: "Meganium"
	},
	{
		number: "155",
		name: "Cyndaquil"
	},
	{
		number: "156",
		name: "Quilava"
	},
	{
		number: "157",
		name: "Typhlosion"
	},
	{
		number: "158",
		name: "Totodile"
	},
	{
		number: "159",
		name: "Croconaw"
	},
	{
		number: "160",
		name: "Feraligatr"
	},
	{
		number: "161",
		name: "Sentret"
	},
	{
		number: "162",
		name: "Furret"
	},
	{
		number: "163",
		name: "Hoothoot"
	},
	{
		number: "164",
		name: "Noctowl"
	},
	{
		number: "165",
		name: "Ledyba"
	},
	{
		number: "166",
		name: "Ledian"
	},
	{
		number: "167",
		name: "Spinarak"
	},
	{
		number: "168",
		name: "Ariados"
	},
	{
		number: "169",
		name: "Crobat"
	},
	{
		number: "170",
		name: "Chinchou"
	},
	{
		number: "171",
		name: "Lanturn"
	},
	{
		number: "172",
		name: "Pichu"
	},
	{
		number: "173",
		name: "Cleffa"
	},
	{
		number: "174",
		name: "Igglybuff"
	},
	{
		number: "175",
		name: "Togepi"
	},
	{
		number: "176",
		name: "Togetic"
	},
	{
		number: "177",
		name: "Natu"
	},
	{
		number: "178",
		name: "Xatu"
	},
	{
		number: "179",
		name: "Mareep"
	},
	{
		number: "180",
		name: "Flaaffy"
	},
	{
		number: "181",
		name: "Ampharos"
	},
	{
		number: "182",
		name: "Bellossom"
	},
	{
		number: "183",
		name: "Marill"
	},
	{
		number: "184",
		name: "Azumarill"
	},
	{
		number: "185",
		name: "Sudowoodo"
	},
	{
		number: "186",
		name: "Politoed"
	},
	{
		number: "187",
		name: "Hoppip"
	},
	{
		number: "188",
		name: "Skiploom"
	},
	{
		number: "189",
		name: "Jumpluff"
	},
	{
		number: "190",
		name: "Aipom"
	},
	{
		number: "191",
		name: "Sunkern"
	},
	{
		number: "192",
		name: "Sunflora"
	},
	{
		number: "193",
		name: "Yanma"
	},
	{
		number: "194",
		name: "Wooper"
	},
	{
		number: "195",
		name: "Quagsire"
	},
	{
		number: "196",
		name: "Espeon"
	},
	{
		number: "197",
		name: "Umbreon"
	},
	{
		number: "198",
		name: "Murkrow"
	},
	{
		number: "199",
		name: "Slowking"
	},
	{
		number: "200",
		name: "Misdreavus"
	},
	{
		number: "201",
		name: "Unown"
	},
	{
		number: "202",
		name: "Wobbuffet"
	},
	{
		number: "203",
		name: "Girafarig"
	},
	{
		number: "204",
		name: "Pineco"
	},
	{
		number: "205",
		name: "Forretress"
	},
	{
		number: "206",
		name: "Dunsparce"
	},
	{
		number: "207",
		name: "Gligar"
	},
	{
		number: "208",
		name: "Steelix"
	},
	{
		number: "209",
		name: "Snubbull"
	},
	{
		number: "210",
		name: "Granbull"
	},
	{
		number: "211",
		name: "Qwilfish"
	},
	{
		number: "212",
		name: "Scizor"
	},
	{
		number: "213",
		name: "Shuckle"
	},
	{
		number: "214",
		name: "Heracross"
	},
	{
		number: "215",
		name: "Sneasel"
	},
	{
		number: "216",
		name: "Teddiursa"
	},
	{
		number: "217",
		name: "Ursaring"
	},
	{
		number: "218",
		name: "Slugma"
	},
	{
		number: "219",
		name: "Magcargo"
	},
	{
		number: "220",
		name: "Swinub"
	},
	{
		number: "221",
		name: "Piloswine"
	},
	{
		number: "222",
		name: "Corsola"
	},
	{
		number: "223",
		name: "Remoraid"
	},
	{
		number: "224",
		name: "Octillery"
	},
	{
		number: "225",
		name: "Delibird"
	},
	{
		number: "226",
		name: "Mantine"
	},
	{
		number: "227",
		name: "Skarmory"
	},
	{
		number: "228",
		name: "Houndour"
	},
	{
		number: "229",
		name: "Houndoom"
	},
	{
		number: "230",
		name: "Kingdra"
	},
	{
		number: "231",
		name: "Phanpy"
	},
	{
		number: "232",
		name: "Donphan"
	},
	{
		number: "233",
		name: "Porygon2"
	},
	{
		number: "234",
		name: "Stantler"
	},
	{
		number: "235",
		name: "Smeargle"
	},
	{
		number: "236",
		name: "Tyrogue"
	},
	{
		number: "237",
		name: "Hitmontop"
	},
	{
		number: "238",
		name: "Smoochum"
	},
	{
		number: "239",
		name: "Elekid"
	},
	{
		number: "240",
		name: "Magby"
	},
	{
		number: "241",
		name: "Miltank"
	},
	{
		number: "242",
		name: "Blissey"
	},
	{
		number: "243",
		name: "Raikou"
	},
	{
		number: "244",
		name: "Entei"
	},
	{
		number: "245",
		name: "Suicune"
	},
	{
		number: "246",
		name: "Larvitar"
	},
	{
		number: "247",
		name: "Pupitar"
	},
	{
		number: "248",
		name: "Tyranitar"
	},
	{
		number: "249",
		name: "Lugia"
	},
	{
		number: "250",
		name: "Ho-Oh"
	},
	{
		number: "251",
		name: "Celebi"
	},
	{
		number: "252",
		name: "Treecko"
	},
	{
		number: "253",
		name: "Grovyle"
	},
	{
		number: "254",
		name: "Sceptile"
	},
	{
		number: "255",
		name: "Torchic"
	},
	{
		number: "256",
		name: "Combusken"
	},
	{
		number: "257",
		name: "Blaziken"
	},
	{
		number: "258",
		name: "Mudkip"
	},
	{
		number: "259",
		name: "Marshtomp"
	},
	{
		number: "260",
		name: "Swampert"
	},
	{
		number: "261",
		name: "Poochyena"
	},
	{
		number: "262",
		name: "Mightyena"
	},
	{
		number: "263",
		name: "Zigzagoon"
	},
	{
		number: "264",
		name: "Linoone"
	},
	{
		number: "265",
		name: "Wurmple"
	},
	{
		number: "266",
		name: "Silcoon"
	},
	{
		number: "267",
		name: "Beautifly"
	},
	{
		number: "268",
		name: "Cascoon"
	},
	{
		number: "269",
		name: "Dustox"
	},
	{
		number: "270",
		name: "Lotad"
	},
	{
		number: "271",
		name: "Lombre"
	},
	{
		number: "272",
		name: "Ludicolo"
	},
	{
		number: "273",
		name: "Seedot"
	},
	{
		number: "274",
		name: "Nuzleaf"
	},
	{
		number: "275",
		name: "Shiftry"
	},
	{
		number: "276",
		name: "Taillow"
	},
	{
		number: "277",
		name: "Swellow"
	},
	{
		number: "278",
		name: "Wingull"
	},
	{
		number: "279",
		name: "Pelipper"
	},
	{
		number: "280",
		name: "Ralts"
	},
	{
		number: "281",
		name: "Kirlia"
	},
	{
		number: "282",
		name: "Gardevoir"
	},
	{
		number: "283",
		name: "Surskit"
	},
	{
		number: "284",
		name: "Masquerain"
	},
	{
		number: "285",
		name: "Shroomish"
	},
	{
		number: "286",
		name: "Breloom"
	},
	{
		number: "287",
		name: "Slakoth"
	},
	{
		number: "288",
		name: "Vigoroth"
	},
	{
		number: "289",
		name: "Slaking"
	},
	{
		number: "290",
		name: "Nincada"
	},
	{
		number: "291",
		name: "Ninjask"
	},
	{
		number: "292",
		name: "Shedinja"
	},
	{
		number: "293",
		name: "Whismur"
	},
	{
		number: "294",
		name: "Loudred"
	},
	{
		number: "295",
		name: "Exploud"
	},
	{
		number: "296",
		name: "Makuhita"
	},
	{
		number: "297",
		name: "Hariyama"
	},
	{
		number: "298",
		name: "Azurill"
	},
	{
		number: "299",
		name: "Nosepass"
	},
	{
		number: "300",
		name: "Skitty"
	},
	{
		number: "301",
		name: "Delcatty"
	},
	{
		number: "302",
		name: "Sableye"
	},
	{
		number: "303",
		name: "Mawile"
	},
	{
		number: "304",
		name: "Aron"
	},
	{
		number: "305",
		name: "Lairon"
	},
	{
		number: "306",
		name: "Aggron"
	},
	{
		number: "307",
		name: "Meditite"
	},
	{
		number: "308",
		name: "Medicham"
	},
	{
		number: "309",
		name: "Electrike"
	},
	{
		number: "310",
		name: "Manectric"
	},
	{
		number: "311",
		name: "Plusle"
	},
	{
		number: "312",
		name: "Minun"
	},
	{
		number: "313",
		name: "Volbeat"
	},
	{
		number: "314",
		name: "Illumise"
	},
	{
		number: "315",
		name: "Roselia"
	},
	{
		number: "316",
		name: "Gulpin"
	},
	{
		number: "317",
		name: "Swalot"
	},
	{
		number: "318",
		name: "Carvanha"
	},
	{
		number: "319",
		name: "Sharpedo"
	},
	{
		number: "320",
		name: "Wailmer"
	},
	{
		number: "321",
		name: "Wailord"
	},
	{
		number: "322",
		name: "Numel"
	},
	{
		number: "323",
		name: "Camerupt"
	},
	{
		number: "324",
		name: "Torkoal"
	},
	{
		number: "325",
		name: "Spoink"
	},
	{
		number: "326",
		name: "Grumpig"
	},
	{
		number: "327",
		name: "Spinda"
	},
	{
		number: "328",
		name: "Trapinch"
	},
	{
		number: "329",
		name: "Vibrava"
	},
	{
		number: "330",
		name: "Flygon"
	},
	{
		number: "331",
		name: "Cacnea"
	},
	{
		number: "332",
		name: "Cacturne"
	},
	{
		number: "333",
		name: "Swablu"
	},
	{
		number: "334",
		name: "Altaria"
	},
	{
		number: "335",
		name: "Zangoose"
	},
	{
		number: "336",
		name: "Seviper"
	},
	{
		number: "337",
		name: "Lunatone"
	},
	{
		number: "338",
		name: "Solrock"
	},
	{
		number: "339",
		name: "Barboach"
	},
	{
		number: "340",
		name: "Whiscash"
	},
	{
		number: "341",
		name: "Corphish"
	},
	{
		number: "342",
		name: "Crawdaunt"
	},
	{
		number: "343",
		name: "Baltoy"
	},
	{
		number: "344",
		name: "Claydol"
	},
	{
		number: "345",
		name: "Lileep"
	},
	{
		number: "346",
		name: "Cradily"
	},
	{
		number: "347",
		name: "Anorith"
	},
	{
		number: "348",
		name: "Armaldo"
	},
	{
		number: "349",
		name: "Feebas"
	},
	{
		number: "350",
		name: "Milotic"
	},
	{
		number: "351",
		name: "Castform"
	},
	{
		number: "352",
		name: "Kecleon"
	},
	{
		number: "353",
		name: "Shuppet"
	},
	{
		number: "354",
		name: "Banette"
	},
	{
		number: "355",
		name: "Duskull"
	},
	{
		number: "356",
		name: "Dusclops"
	},
	{
		number: "357",
		name: "Tropius"
	},
	{
		number: "358",
		name: "Chimecho"
	},
	{
		number: "359",
		name: "Absol"
	},
	{
		number: "360",
		name: "Wynaut"
	},
	{
		number: "361",
		name: "Snorunt"
	},
	{
		number: "362",
		name: "Glalie"
	},
	{
		number: "363",
		name: "Spheal"
	},
	{
		number: "364",
		name: "Sealeo"
	},
	{
		number: "365",
		name: "Walrein"
	},
	{
		number: "366",
		name: "Clamperl"
	},
	{
		number: "367",
		name: "Huntail"
	},
	{
		number: "368",
		name: "Gorebyss"
	},
	{
		number: "369",
		name: "Relicanth"
	},
	{
		number: "370",
		name: "Luvdisc"
	},
	{
		number: "371",
		name: "Bagon"
	},
	{
		number: "372",
		name: "Shelgon"
	},
	{
		number: "373",
		name: "Salamence"
	},
	{
		number: "374",
		name: "Beldum"
	},
	{
		number: "375",
		name: "Metang"
	},
	{
		number: "376",
		name: "Metagross"
	},
	{
		number: "377",
		name: "Regirock"
	},
	{
		number: "378",
		name: "Regice"
	},
	{
		number: "379",
		name: "Registeel"
	},
	{
		number: "380",
		name: "Latias"
	},
	{
		number: "381",
		name: "Latios"
	},
	{
		number: "382",
		name: "Kyogre"
	},
	{
		number: "383",
		name: "Groudon"
	},
	{
		number: "384",
		name: "Rayquaza"
	},
	{
		number: "385",
		name: "Jirachi"
	},
	{
		number: "386",
		name: "Deoxys"
	},
	{
		number: "387",
		name: "Turtwig"
	},
	{
		number: "388",
		name: "Grotle"
	},
	{
		number: "389",
		name: "Torterra"
	},
	{
		number: "390",
		name: "Chimchar"
	},
	{
		number: "391",
		name: "Monferno"
	},
	{
		number: "392",
		name: "Infernape"
	},
	{
		number: "393",
		name: "Piplup"
	},
	{
		number: "394",
		name: "Prinplup"
	},
	{
		number: "395",
		name: "Empoleon"
	},
	{
		number: "396",
		name: "Starly"
	},
	{
		number: "397",
		name: "Staravia"
	},
	{
		number: "398",
		name: "Staraptor"
	},
	{
		number: "399",
		name: "Bidoof"
	},
	{
		number: "400",
		name: "Bibarel"
	},
	{
		number: "401",
		name: "Kricketot"
	},
	{
		number: "402",
		name: "Kricketune"
	},
	{
		number: "403",
		name: "Shinx"
	},
	{
		number: "404",
		name: "Luxio"
	},
	{
		number: "405",
		name: "Luxray"
	},
	{
		number: "406",
		name: "Budew"
	},
	{
		number: "407",
		name: "Roserade"
	},
	{
		number: "408",
		name: "Cranidos"
	},
	{
		number: "409",
		name: "Rampardos"
	},
	{
		number: "410",
		name: "Shieldon"
	},
	{
		number: "411",
		name: "Bastiodon"
	},
	{
		number: "412",
		name: "Burmy"
	},
	{
		number: "413",
		name: "Wormadam"
	},
	{
		number: "414",
		name: "Mothim"
	},
	{
		number: "415",
		name: "Combee"
	},
	{
		number: "416",
		name: "Vespiquen"
	},
	{
		number: "417",
		name: "Pachirisu"
	},
	{
		number: "418",
		name: "Buizel"
	},
	{
		number: "419",
		name: "Floatzel"
	},
	{
		number: "420",
		name: "Cherubi"
	},
	{
		number: "421",
		name: "Cherrim"
	},
	{
		number: "422",
		name: "Shellos"
	},
	{
		number: "423",
		name: "Gastrodon"
	},
	{
		number: "424",
		name: "Ambipom"
	},
	{
		number: "425",
		name: "Drifloon"
	},
	{
		number: "426",
		name: "Drifblim"
	},
	{
		number: "427",
		name: "Buneary"
	},
	{
		number: "428",
		name: "Lopunny"
	},
	{
		number: "429",
		name: "Mismagius"
	},
	{
		number: "430",
		name: "Honchkrow"
	},
	{
		number: "431",
		name: "Glameow"
	},
	{
		number: "432",
		name: "Purugly"
	},
	{
		number: "433",
		name: "Chingling"
	},
	{
		number: "434",
		name: "Stunky"
	},
	{
		number: "435",
		name: "Skuntank"
	},
	{
		number: "436",
		name: "Bronzor"
	},
	{
		number: "437",
		name: "Bronzong"
	},
	{
		number: "438",
		name: "Bonsly"
	},
	{
		number: "439",
		name: "Mime Jr."
	},
	{
		number: "440",
		name: "Happiny"
	},
	{
		number: "441",
		name: "Chatot"
	},
	{
		number: "442",
		name: "Spiritomb"
	},
	{
		number: "443",
		name: "Gible"
	},
	{
		number: "444",
		name: "Gabite"
	},
	{
		number: "445",
		name: "Garchomp"
	},
	{
		number: "446",
		name: "Munchlax"
	},
	{
		number: "447",
		name: "Riolu"
	},
	{
		number: "448",
		name: "Lucario"
	},
	{
		number: "449",
		name: "Hippopotas"
	},
	{
		number: "450",
		name: "Hippowdon"
	},
	{
		number: "451",
		name: "Skorupi"
	},
	{
		number: "452",
		name: "Drapion"
	},
	{
		number: "453",
		name: "Croagunk"
	},
	{
		number: "454",
		name: "Toxicroak"
	},
	{
		number: "455",
		name: "Carnivine"
	},
	{
		number: "456",
		name: "Finneon"
	},
	{
		number: "457",
		name: "Lumineon"
	},
	{
		number: "458",
		name: "Mantyke"
	},
	{
		number: "459",
		name: "Snover"
	},
	{
		number: "460",
		name: "Abomasnow"
	},
	{
		number: "461",
		name: "Weavile"
	},
	{
		number: "462",
		name: "Magnezone"
	},
	{
		number: "463",
		name: "Lickilicky"
	},
	{
		number: "464",
		name: "Rhyperior"
	},
	{
		number: "465",
		name: "Tangrowth"
	},
	{
		number: "466",
		name: "Electivire"
	},
	{
		number: "467",
		name: "Magmortar"
	},
	{
		number: "468",
		name: "Togekiss"
	},
	{
		number: "469",
		name: "Yanmega"
	},
	{
		number: "470",
		name: "Leafeon"
	},
	{
		number: "471",
		name: "Glaceon"
	},
	{
		number: "472",
		name: "Gliscor"
	},
	{
		number: "473",
		name: "Mamoswine"
	},
	{
		number: "474",
		name: "Porygon-Z"
	},
	{
		number: "475",
		name: "Gallade"
	},
	{
		number: "476",
		name: "Probopass"
	},
	{
		number: "477",
		name: "Dusknoir"
	},
	{
		number: "478",
		name: "Froslass"
	},
	{
		number: "479",
		name: "Rotom"
	},
	{
		number: "480",
		name: "Uxie"
	},
	{
		number: "481",
		name: "Mesprit"
	},
	{
		number: "482",
		name: "Azelf"
	},
	{
		number: "483",
		name: "Dialga"
	},
	{
		number: "484",
		name: "Palkia"
	},
	{
		number: "485",
		name: "Heatran"
	},
	{
		number: "486",
		name: "Regigigas"
	},
	{
		number: "487",
		name: "Giratina"
	},
	{
		number: "488",
		name: "Cresselia"
	},
	{
		number: "489",
		name: "Phione"
	},
	{
		number: "490",
		name: "Manaphy"
	},
	{
		number: "491",
		name: "Darkrai"
	},
	{
		number: "492",
		name: "Shaymin"
	},
	{
		number: "493",
		name: "Arceus"
	},
	{
		number: "494",
		name: "Victini"
	},
	{
		number: "495",
		name: "Snivy"
	},
	{
		number: "496",
		name: "Servine"
	},
	{
		number: "497",
		name: "Serperior"
	},
	{
		number: "498",
		name: "Tepig"
	},
	{
		number: "499",
		name: "Pignite"
	},
	{
		number: "500",
		name: "Emboar"
	},
	{
		number: "501",
		name: "Oshawott"
	},
	{
		number: "502",
		name: "Dewott"
	},
	{
		number: "503",
		name: "Samurott"
	},
	{
		number: "504",
		name: "Patrat"
	},
	{
		number: "505",
		name: "Watchog"
	},
	{
		number: "506",
		name: "Lillipup"
	},
	{
		number: "507",
		name: "Herdier"
	},
	{
		number: "508",
		name: "Stoutland"
	},
	{
		number: "509",
		name: "Purrloin"
	},
	{
		number: "510",
		name: "Liepard"
	},
	{
		number: "511",
		name: "Pansage"
	},
	{
		number: "512",
		name: "Simisage"
	},
	{
		number: "513",
		name: "Pansear"
	},
	{
		number: "514",
		name: "Simisear"
	},
	{
		number: "515",
		name: "Panpour"
	},
	{
		number: "516",
		name: "Simipour"
	},
	{
		number: "517",
		name: "Munna"
	},
	{
		number: "518",
		name: "Musharna"
	},
	{
		number: "519",
		name: "Pidove"
	},
	{
		number: "520",
		name: "Tranquill"
	},
	{
		number: "521",
		name: "Unfezant"
	},
	{
		number: "522",
		name: "Blitzle"
	},
	{
		number: "523",
		name: "Zebstrika"
	},
	{
		number: "524",
		name: "Roggenrola"
	},
	{
		number: "525",
		name: "Boldore"
	},
	{
		number: "526",
		name: "Gigalith"
	},
	{
		number: "527",
		name: "Woobat"
	},
	{
		number: "528",
		name: "Swoobat"
	},
	{
		number: "529",
		name: "Drilbur"
	},
	{
		number: "530",
		name: "Excadrill"
	},
	{
		number: "531",
		name: "Audino"
	},
	{
		number: "532",
		name: "Timburr"
	},
	{
		number: "533",
		name: "Gurdurr"
	},
	{
		number: "534",
		name: "Conkeldurr"
	},
	{
		number: "535",
		name: "Tympole"
	},
	{
		number: "536",
		name: "Palpitoad"
	},
	{
		number: "537",
		name: "Seismitoad"
	},
	{
		number: "538",
		name: "Throh"
	},
	{
		number: "539",
		name: "Sawk"
	},
	{
		number: "540",
		name: "Sewaddle"
	},
	{
		number: "541",
		name: "Swadloon"
	},
	{
		number: "542",
		name: "Leavanny"
	},
	{
		number: "543",
		name: "Venipede"
	},
	{
		number: "544",
		name: "Whirlipede"
	},
	{
		number: "545",
		name: "Scolipede"
	},
	{
		number: "546",
		name: "Cottonee"
	},
	{
		number: "547",
		name: "Whimsicott"
	},
	{
		number: "548",
		name: "Petilil"
	},
	{
		number: "549",
		name: "Lilligant"
	},
	{
		number: "550",
		name: "Basculin"
	},
	{
		number: "551",
		name: "Sandile"
	},
	{
		number: "552",
		name: "Krokorok"
	},
	{
		number: "553",
		name: "Krookodile"
	},
	{
		number: "554",
		name: "Darumaka"
	},
	{
		number: "555",
		name: "Darmanitan"
	},
	{
		number: "556",
		name: "Maractus"
	},
	{
		number: "557",
		name: "Dwebble"
	},
	{
		number: "558",
		name: "Crustle"
	},
	{
		number: "559",
		name: "Scraggy"
	},
	{
		number: "560",
		name: "Scrafty"
	},
	{
		number: "561",
		name: "Sigilyph"
	},
	{
		number: "562",
		name: "Yamask"
	},
	{
		number: "563",
		name: "Cofagrigus"
	},
	{
		number: "564",
		name: "Tirtouga"
	},
	{
		number: "565",
		name: "Carracosta"
	},
	{
		number: "566",
		name: "Archen"
	},
	{
		number: "567",
		name: "Archeops"
	},
	{
		number: "568",
		name: "Trubbish"
	},
	{
		number: "569",
		name: "Garbodor"
	},
	{
		number: "570",
		name: "Zorua"
	},
	{
		number: "571",
		name: "Zoroark"
	},
	{
		number: "572",
		name: "Minccino"
	},
	{
		number: "573",
		name: "Cinccino"
	},
	{
		number: "574",
		name: "Gothita"
	},
	{
		number: "575",
		name: "Gothorita"
	},
	{
		number: "576",
		name: "Gothitelle"
	},
	{
		number: "577",
		name: "Solosis"
	},
	{
		number: "578",
		name: "Duosion"
	},
	{
		number: "579",
		name: "Reuniclus"
	},
	{
		number: "580",
		name: "Ducklett"
	},
	{
		number: "581",
		name: "Swanna"
	},
	{
		number: "582",
		name: "Vanillite"
	},
	{
		number: "583",
		name: "Vanillish"
	},
	{
		number: "584",
		name: "Vanilluxe"
	},
	{
		number: "585",
		name: "Deerling"
	},
	{
		number: "586",
		name: "Sawsbuck"
	},
	{
		number: "587",
		name: "Emolga"
	},
	{
		number: "588",
		name: "Karrablast"
	},
	{
		number: "589",
		name: "Escavalier"
	},
	{
		number: "590",
		name: "Foongus"
	},
	{
		number: "591",
		name: "Amoonguss"
	},
	{
		number: "592",
		name: "Frillish"
	},
	{
		number: "593",
		name: "Jellicent"
	},
	{
		number: "594",
		name: "Alomomola"
	},
	{
		number: "595",
		name: "Joltik"
	},
	{
		number: "596",
		name: "Galvantula"
	},
	{
		number: "597",
		name: "Ferroseed"
	},
	{
		number: "598",
		name: "Ferrothorn"
	},
	{
		number: "599",
		name: "Klink"
	},
	{
		number: "600",
		name: "Klang"
	},
	{
		number: "601",
		name: "Klinklang"
	},
	{
		number: "602",
		name: "Tynamo"
	},
	{
		number: "603",
		name: "Eelektrik"
	},
	{
		number: "604",
		name: "Eelektross"
	},
	{
		number: "605",
		name: "Elgyem"
	},
	{
		number: "606",
		name: "Beheeyem"
	},
	{
		number: "607",
		name: "Litwick"
	},
	{
		number: "608",
		name: "Lampent"
	},
	{
		number: "609",
		name: "Chandelure"
	},
	{
		number: "610",
		name: "Axew"
	},
	{
		number: "611",
		name: "Fraxure"
	},
	{
		number: "612",
		name: "Haxorus"
	},
	{
		number: "613",
		name: "Cubchoo"
	},
	{
		number: "614",
		name: "Beartic"
	},
	{
		number: "615",
		name: "Cryogonal"
	},
	{
		number: "616",
		name: "Shelmet"
	},
	{
		number: "617",
		name: "Accelgor"
	},
	{
		number: "618",
		name: "Stunfisk"
	},
	{
		number: "619",
		name: "Mienfoo"
	},
	{
		number: "620",
		name: "Mienshao"
	},
	{
		number: "621",
		name: "Druddigon"
	},
	{
		number: "622",
		name: "Golett"
	},
	{
		number: "623",
		name: "Golurk"
	},
	{
		number: "624",
		name: "Pawniard"
	},
	{
		number: "625",
		name: "Bisharp"
	},
	{
		number: "626",
		name: "Bouffalant"
	},
	{
		number: "627",
		name: "Rufflet"
	},
	{
		number: "628",
		name: "Braviary"
	},
	{
		number: "629",
		name: "Vullaby"
	},
	{
		number: "630",
		name: "Mandibuzz"
	},
	{
		number: "631",
		name: "Heatmor"
	},
	{
		number: "632",
		name: "Durant"
	},
	{
		number: "633",
		name: "Deino"
	},
	{
		number: "634",
		name: "Zweilous"
	},
	{
		number: "635",
		name: "Hydreigon"
	},
	{
		number: "636",
		name: "Larvesta"
	},
	{
		number: "637",
		name: "Volcarona"
	},
	{
		number: "638",
		name: "Cobalion"
	},
	{
		number: "639",
		name: "Terrakion"
	},
	{
		number: "640",
		name: "Virizion"
	},
	{
		number: "641",
		name: "Tornadus"
	},
	{
		number: "642",
		name: "Thundurus"
	},
	{
		number: "643",
		name: "Reshiram"
	},
	{
		number: "644",
		name: "Zekrom"
	},
	{
		number: "645",
		name: "Landorus"
	},
	{
		number: "646",
		name: "Kyurem"
	},
	{
		number: "647",
		name: "Keldeo"
	},
	{
		number: "648",
		name: "Meloetta"
	},
	{
		number: "649",
		name: "Genesect"
	},
	{
		number: "650",
		name: "Chespin"
	},
	{
		number: "651",
		name: "Quilladin"
	},
	{
		number: "652",
		name: "Chesnaught"
	},
	{
		number: "653",
		name: "Fennekin"
	},
	{
		number: "654",
		name: "Braixen"
	},
	{
		number: "655",
		name: "Delphox"
	},
	{
		number: "656",
		name: "Froakie"
	},
	{
		number: "657",
		name: "Frogadier"
	},
	{
		number: "658",
		name: "Greninja"
	},
	{
		number: "659",
		name: "Bunnelby"
	},
	{
		number: "660",
		name: "Diggersby"
	},
	{
		number: "661",
		name: "Fletchling"
	},
	{
		number: "662",
		name: "Fletchinder"
	},
	{
		number: "663",
		name: "Talonflame"
	},
	{
		number: "664",
		name: "Scatterbug"
	},
	{
		number: "665",
		name: "Spewpa"
	},
	{
		number: "666",
		name: "Vivillon"
	},
	{
		number: "667",
		name: "Litleo"
	},
	{
		number: "668",
		name: "Pyroar"
	},
	{
		number: "669",
		name: "Flabébé"
	},
	{
		number: "670",
		name: "Floette"
	},
	{
		number: "671",
		name: "Florges"
	},
	{
		number: "672",
		name: "Skiddo"
	},
	{
		number: "673",
		name: "Gogoat"
	},
	{
		number: "674",
		name: "Pancham"
	},
	{
		number: "675",
		name: "Pangoro"
	},
	{
		number: "676",
		name: "Furfrou"
	},
	{
		number: "677",
		name: "Espurr"
	},
	{
		number: "678",
		name: "Meowstic"
	},
	{
		number: "679",
		name: "Honedge"
	},
	{
		number: "680",
		name: "Doublade"
	},
	{
		number: "681",
		name: "Aegislash"
	},
	{
		number: "682",
		name: "Spritzee"
	},
	{
		number: "683",
		name: "Aromatisse"
	},
	{
		number: "684",
		name: "Swirlix"
	},
	{
		number: "685",
		name: "Slurpuff"
	},
	{
		number: "686",
		name: "Inkay"
	},
	{
		number: "687",
		name: "Malamar"
	},
	{
		number: "688",
		name: "Binacle"
	},
	{
		number: "689",
		name: "Barbaracle"
	},
	{
		number: "690",
		name: "Skrelp"
	},
	{
		number: "691",
		name: "Dragalge"
	},
	{
		number: "692",
		name: "Clauncher"
	},
	{
		number: "693",
		name: "Clawitzer"
	},
	{
		number: "694",
		name: "Helioptile"
	},
	{
		number: "695",
		name: "Heliolisk"
	},
	{
		number: "696",
		name: "Tyrunt"
	},
	{
		number: "697",
		name: "Tyrantrum"
	},
	{
		number: "698",
		name: "Amaura"
	},
	{
		number: "699",
		name: "Aurorus"
	},
	{
		number: "700",
		name: "Sylveon"
	},
	{
		number: "701",
		name: "Hawlucha"
	},
	{
		number: "702",
		name: "Dedenne"
	},
	{
		number: "703",
		name: "Carbink"
	},
	{
		number: "704",
		name: "Goomy"
	},
	{
		number: "705",
		name: "Sliggoo"
	},
	{
		number: "706",
		name: "Goodra"
	},
	{
		number: "707",
		name: "Klefki"
	},
	{
		number: "708",
		name: "Phantump"
	},
	{
		number: "709",
		name: "Trevenant"
	},
	{
		number: "710",
		name: "Pumpkaboo"
	},
	{
		number: "711",
		name: "Gourgeist"
	},
	{
		number: "712",
		name: "Bergmite"
	},
	{
		number: "713",
		name: "Avalugg"
	},
	{
		number: "714",
		name: "Noibat"
	},
	{
		number: "715",
		name: "Noivern"
	},
	{
		number: "716",
		name: "Xerneas"
	},
	{
		number: "717",
		name: "Yveltal"
	},
	{
		number: "718",
		name: "Zygarde"
	},
	{
		number: "719",
		name: "Diancie"
	},
	{
		number: "720",
		name: "Hoopa"
	},
	{
		number: "721",
		name: "Volcanion"
	},
	{
		number: "722",
		name: "Rowlet"
	},
	{
		number: "723",
		name: "Dartrix"
	},
	{
		number: "724",
		name: "Decidueye"
	},
	{
		number: "725",
		name: "Litten"
	},
	{
		number: "726",
		name: "Torracat"
	},
	{
		number: "727",
		name: "Incineroar"
	},
	{
		number: "728",
		name: "Popplio"
	},
	{
		number: "729",
		name: "Brionne"
	},
	{
		number: "730",
		name: "Primarina"
	},
	{
		number: "731",
		name: "Pikipek"
	},
	{
		number: "732",
		name: "Trumbeak"
	},
	{
		number: "733",
		name: "Toucannon"
	},
	{
		number: "734",
		name: "Yungoos"
	},
	{
		number: "735",
		name: "Gumshoos"
	},
	{
		number: "736",
		name: "Grubbin"
	},
	{
		number: "737",
		name: "Charjabug"
	},
	{
		number: "738",
		name: "Vikavolt"
	},
	{
		number: "739",
		name: "Crabrawler"
	},
	{
		number: "740",
		name: "Crabominable"
	},
	{
		number: "741",
		name: "Oricorio"
	},
	{
		number: "742",
		name: "Cutiefly"
	},
	{
		number: "743",
		name: "Ribombee"
	},
	{
		number: "744",
		name: "Rockruff"
	},
	{
		number: "745",
		name: "Lycanroc"
	},
	{
		number: "746",
		name: "Wishiwashi"
	},
	{
		number: "747",
		name: "Mareanie"
	},
	{
		number: "748",
		name: "Toxapex"
	},
	{
		number: "749",
		name: "Mudbray"
	},
	{
		number: "750",
		name: "Mudsdale"
	},
	{
		number: "751",
		name: "Dewpider"
	},
	{
		number: "752",
		name: "Araquanid"
	},
	{
		number: "753",
		name: "Fomantis"
	},
	{
		number: "754",
		name: "Lurantis"
	},
	{
		number: "755",
		name: "Morelull"
	},
	{
		number: "756",
		name: "Shiinotic"
	},
	{
		number: "757",
		name: "Salandit"
	},
	{
		number: "758",
		name: "Salazzle"
	},
	{
		number: "759",
		name: "Stufful"
	},
	{
		number: "760",
		name: "Bewear"
	},
	{
		number: "761",
		name: "Bounsweet"
	},
	{
		number: "762",
		name: "Steenee"
	},
	{
		number: "763",
		name: "Tsareena"
	},
	{
		number: "764",
		name: "Comfey"
	},
	{
		number: "765",
		name: "Oranguru"
	},
	{
		number: "766",
		name: "Passimian"
	},
	{
		number: "767",
		name: "Wimpod"
	},
	{
		number: "768",
		name: "Golisopod"
	},
	{
		number: "769",
		name: "Sandygast"
	},
	{
		number: "770",
		name: "Palossand"
	},
	{
		number: "771",
		name: "Pyukumuku"
	},
	{
		number: "772",
		name: "Código Cero"
	},
	{
		number: "773",
		name: "Silvally"
	},
	{
		number: "774",
		name: "Minior"
	},
	{
		number: "775",
		name: "Komala"
	},
	{
		number: "776",
		name: "Turtonator"
	},
	{
		number: "777",
		name: "Togedemaru"
	},
	{
		number: "778",
		name: "Mimikyu"
	},
	{
		number: "779",
		name: "Bruxish"
	},
	{
		number: "780",
		name: "Drampa"
	},
	{
		number: "781",
		name: "Dhelmise"
	},
	{
		number: "782",
		name: "Jangmo-o"
	},
	{
		number: "783",
		name: "Hakamo-o"
	},
	{
		number: "784",
		name: "Kommo-o"
	},
	{
		number: "785",
		name: "Tapu Koko"
	},
	{
		number: "786",
		name: "Tapu Lele"
	},
	{
		number: "787",
		name: "Tapu Bulu"
	},
	{
		number: "788",
		name: "Tapu Fini"
	},
	{
		number: "789",
		name: "Cosmog"
	},
	{
		number: "790",
		name: "Cosmoem"
	},
	{
		number: "791",
		name: "Solgaleo"
	},
	{
		number: "792",
		name: "Lunala"
	},
	{
		number: "793",
		name: "Nihilego"
	},
	{
		number: "794",
		name: "Buzzwole"
	},
	{
		number: "795",
		name: "Pheromosa"
	},
	{
		number: "796",
		name: "Xurkitree"
	},
	{
		number: "797",
		name: "Celesteela"
	},
	{
		number: "798",
		name: "Kartana"
	},
	{
		number: "799",
		name: "Guzzlord"
	},
	{
		number: "800",
		name: "Necrozma"
	},
	{
		number: "801",
		name: "Magearna"
	},
	{
		number: "802",
		name: "Marshadow"
	},
	{
		number: "803",
		name: "Poipole"
	},
	{
		number: "804",
		name: "Naganadel"
	},
	{
		number: "805",
		name: "Stakataka"
	},
	{
		number: "806",
		name: "Blacephalon"
	},
	{
		number: "807",
		name: "Zeraora"
	},
	{
		number: "808",
		name: "Meltan"
	},
	{
		number: "809",
		name: "Melmetal"
	},
	{
		number: "810",
		name: "Grookey"
	},
	{
		number: "811",
		name: "Thwackey"
	},
	{
		number: "812",
		name: "Rillaboom"
	},
	{
		number: "813",
		name: "Scorbunny"
	},
	{
		number: "814",
		name: "Raboot"
	},
	{
		number: "815",
		name: "Cinderace"
	},
	{
		number: "816",
		name: "Sobble"
	},
	{
		number: "817",
		name: "Drizzile"
	},
	{
		number: "818",
		name: "Inteleon"
	},
	{
		number: "819",
		name: "Skwovet"
	},
	{
		number: "820",
		name: "Greedent"
	},
	{
		number: "821",
		name: "Rookidee"
	},
	{
		number: "822",
		name: "Corvisquire"
	},
	{
		number: "823",
		name: "Corviknight"
	},
	{
		number: "824",
		name: "Blipbug"
	},
	{
		number: "825",
		name: "Dottler"
	},
	{
		number: "826",
		name: "Orbeetle"
	},
	{
		number: "827",
		name: "Nickit"
	},
	{
		number: "828",
		name: "Thievul"
	},
	{
		number: "829",
		name: "Gossifleur"
	},
	{
		number: "830",
		name: "Eldegoss"
	},
	{
		number: "831",
		name: "Wooloo"
	},
	{
		number: "832",
		name: "Dubwool"
	},
	{
		number: "833",
		name: "Chewtle"
	},
	{
		number: "834",
		name: "Drednaw"
	},
	{
		number: "835",
		name: "Yamper"
	},
	{
		number: "836",
		name: "Boltund"
	},
	{
		number: "837",
		name: "Rolycoly"
	},
	{
		number: "838",
		name: "Carkol"
	},
	{
		number: "839",
		name: "Coalossal"
	},
	{
		number: "840",
		name: "Applin"
	},
	{
		number: "841",
		name: "Flapple"
	},
	{
		number: "842",
		name: "Appletun"
	},
	{
		number: "843",
		name: "Silicobra"
	},
	{
		number: "844",
		name: "Sandaconda"
	},
	{
		number: "845",
		name: "Cramorant"
	},
	{
		number: "846",
		name: "Arrokuda"
	},
	{
		number: "847",
		name: "Barraskewda"
	},
	{
		number: "848",
		name: "Toxel"
	},
	{
		number: "849",
		name: "Toxtricity"
	},
	{
		number: "850",
		name: "Sizzlipede"
	},
	{
		number: "851",
		name: "Centiskorch"
	},
	{
		number: "852",
		name: "Clobbopus"
	},
	{
		number: "853",
		name: "Grapploct"
	},
	{
		number: "854",
		name: "Sinistea"
	},
	{
		number: "855",
		name: "Polteageist"
	},
	{
		number: "856",
		name: "Hatenna"
	},
	{
		number: "857",
		name: "Hattrem"
	},
	{
		number: "858",
		name: "Hatterene"
	},
	{
		number: "859",
		name: "Impidimp"
	},
	{
		number: "860",
		name: "Morgrem"
	},
	{
		number: "861",
		name: "Grimmsnarl"
	},
	{
		number: "862",
		name: "Obstagoon"
	},
	{
		number: "863",
		name: "Perrserker"
	},
	{
		number: "864",
		name: "Cursola"
	},
	{
		number: "865",
		name: "Sirfetch'd"
	},
	{
		number: "866",
		name: "Mr. Rime"
	},
	{
		number: "867",
		name: "Runerigus"
	},
	{
		number: "868",
		name: "Milcery"
	},
	{
		number: "869",
		name: "Alcremie"
	},
	{
		number: "870",
		name: "Falinks"
	},
	{
		number: "871",
		name: "Pincurchin"
	},
	{
		number: "872",
		name: "Snom"
	},
	{
		number: "873",
		name: "Frosmoth"
	},
	{
		number: "874",
		name: "Stonjourner"
	},
	{
		number: "875",
		name: "Eiscue"
	},
	{
		number: "876",
		name: "Indeedee"
	},
	{
		number: "877",
		name: "Morpeko"
	},
	{
		number: "878",
		name: "Cufant"
	},
	{
		number: "879",
		name: "Copperajah"
	},
	{
		number: "880",
		name: "Dracozolt"
	},
	{
		number: "881",
		name: "Arctozolt"
	},
	{
		number: "882",
		name: "Dracovish"
	},
	{
		number: "883",
		name: "Arctovish"
	},
	{
		number: "884",
		name: "Duraludon"
	},
	{
		number: "885",
		name: "Dreepy"
	},
	{
		number: "886",
		name: "Drakloak"
	},
	{
		number: "887",
		name: "Dragapult"
	},
	{
		number: "888",
		name: "Zacian"
	},
	{
		number: "889",
		name: "Zamazenta"
	},
	{
		number: "890",
		name: "Eternatus"
	},
	{
		number: "891",
		name: "Kubfu"
	},
	{
		number: "892",
		name: "Urshifu"
	},
	{
		number: "893",
		name: "Zarude"
	},
	{
		number: "894",
		name: "Regieleki"
	},
	{
		number: "895",
		name: "Regidrago"
	},
	{
		number: "896",
		name: "Glastrier"
	},
	{
		number: "897",
		name: "Spectrier"
	},
	{
		number: "898",
		name: "Calyrex"
	}
]

// Elements in DOM
const form = document.querySelector("#pokemon-form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const msgInfo = document.querySelector("#msg-info");
const list = document.querySelector("#list");


form.addEventListener("submit", function(e) {
	e.preventDefault();

	const pokemonCount = parseInt(e.currentTarget.input.value);

	e.currentTarget.input.value = "";

	// Remove all current Pokémon
	list.querySelectorAll(":scope > *").forEach(pokemon => pokemon.remove());

	const pokemonNumber = pokemonList[pokemonCount - 1].number;
	msgInfo.textContent = `Mostrando los Pokémon del 001 al ${pokemonNumber}:`;

	for (let i = minPokemon; i <= pokemonCount; i++) {
		const newPokemon = createNewPokemon(basePokemonImg, i);
		addPokemonToList(newPokemon, list);
	}
});


function createNewPokemon({ src, width, height }, number) {
	// the Pokémon's number must have 3 digits
	const pokemonNumber = pokemonList[number - 1].number;
	const pokemonName = pokemonList[number - 1].name;

	const img = document.createElement("img");
	// URL example of Pokémon n.º 1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
	img.src = `${src}${pokemonNumber}.png`;
	img.alt = `Pokémon n.º ${pokemonNumber}`;
	img.width = width;
	img.height = height;

	const labelNumber = document.createElement("div");
	labelNumber.innerText = pokemonNumber;

	const labelName = document.createElement("div");
	labelName.innerText = pokemonName;
	labelName.classList.add("pokemon-name");

	const label = document.createElement("figcaption");
	label.append(labelNumber, labelName);

	const pokemon = document.createElement("figure");
	pokemon.classList.add("layout-stack-xs");
	pokemon.append(img, label);

	return pokemon;
}


function addPokemonToList(pokemon, list) {
	const li = document.createElement("li");
	li.append(pokemon);
	list.append(li);
}