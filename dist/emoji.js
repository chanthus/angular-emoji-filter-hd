(function (App) {
    App.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
}(angular.module("cts.emoji", [])));

(function (App) {
    App.constant('emojiCategories', {
        "Symbols": [
            "watch",
            "iphone",
            "calling",
            "computer",
            "alarm_clock",
            "hourglass_flowing_sand",
            "hourglass",
            "camera",
            "video_camera",
            "movie_camera",
            "tv",
            "radio",
            "pager",
            "telephone_receiver",
            "phone",
            "fax",
            "minidisc",
            "floppy_disk",
            "cd",
            "dvd",
            "vhs",
            "battery",
            "electric_plug",
            "bulb",
            "flashlight",
            "satellite",
            "credit_card",
            "money_with_wings",
            "moneybag",
            "gem",
            "closed_umbrella",
            "pouch",
            "purse",
            "handbag",
            "briefcase",
            "school_satchel",
            "lipstick",
            "eyeglasses",
            "womans_hat",
            "sandal",
            "high_heel",
            "boot",
            "mans_shoe",
            "athletic_shoe",
            "bikini",
            "dress",
            "kimono",
            "womans_clothes",
            "shirt",
            "necktie",
            "jeans",
            "door",
            "shower",
            "bathtub",
            "toilet",
            "barber",
            "syringe",
            "pill",
            "microscope",
            "telescope",
            "crystal_ball",
            "wrench",
            "hocho",
            "nut_and_bolt",
            "hammer",
            "bomb",
            "smoking",
            "gun",
            "bookmark",
            "newspaper",
            "key",
            "email",
            "envelope_with_arrow",
            "incoming_envelope",
            "e-mail",
            "inbox_tray",
            "outbox_tray",
            "package",
            "postal_horn",
            "postbox",
            "mailbox_closed",
            "mailbox",
            "mailbox_with_mail",
            "mailbox_with_no_mail",
            "page_facing_up",
            "page_with_curl",
            "bookmark_tabs",
            "chart_with_upwards_trend",
            "chart_with_downwards_trend",
            "bar_chart",
            "date",
            "calendar",
            "low_brightness",
            "high_brightness",
            "scroll",
            "clipboard",
            "book",
            "notebook",
            "notebook_with_decorative_cover",
            "ledger",
            "closed_book",
            "green_book",
            "blue_book",
            "orange_book",
            "books",
            "card_index",
            "link",
            "paperclip",
            "pushpin",
            "scissors",
            "triangular_ruler",
            "round_pushpin",
            "straight_ruler",
            "triangular_flag_on_post",
            "file_folder",
            "open_file_folder",
            "black_nib",
            "pencil2",
            "memo",
            "lock_with_ink_pen",
            "closed_lock_with_key",
            "lock",
            "unlock",
            "mega",
            "loudspeaker",
            "speaker",
            "sound",
            "loud_sound",
            "mute",
            "zzz",
            "bell",
            "no_bell",
            "thought_balloon",
            "speech_balloon",
            "children_crossing",
            "mag",
            "mag_right",
            "no_entry_sign",
            "no_entry",
            "name_badge",
            "no_pedestrians",
            "do_not_litter",
            "no_bicycles",
            "non-potable_water",
            "no_mobile_phones",
            "underage",
            "accept",
            "ideograph_advantage",
            "white_flower",
            "secret",
            "congratulations",
            "u5408",
            "u6e80",
            "u7981",
            "u6709",
            "u7121",
            "u7533",
            "u55b6",
            "u6708",
            "u5272",
            "u7a7a",
            "sa",
            "koko",
            "u6307",
            "chart",
            "sparkle",
            "eight_spoked_asterisk",
            "negative_squared_cross_mark",
            "white_check_mark",
            "eight_pointed_black_star",
            "vibration_mode",
            "mobile_phone_off",
            "vs",
            "a",
            "b",
            "ab",
            "cl",
            "o2",
            "sos",
            "id",
            "parking",
            "wc",
            "cool",
            "free",
            "new",
            "ng",
            "ok",
            "up",
            "atm",
            "aries",
            "taurus",
            "gemini",
            "cancer",
            "leo",
            "virgo",
            "libra",
            "scorpius",
            "sagittarius",
            "capricorn",
            "aquarius",
            "pisces",
            "restroom",
            "mens",
            "womens",
            "baby_symbol",
            "wheelchair",
            "potable_water",
            "no_smoking",
            "put_litter_in_its_place",
            "arrow_forward",
            "arrow_backward",
            "arrow_up_small",
            "arrow_down_small",
            "fast_forward",
            "rewind",
            "arrow_double_up",
            "arrow_double_down",
            "arrow_right",
            "arrow_left",
            "arrow_up",
            "arrow_down",
            "arrow_upper_right",
            "arrow_lower_right",
            "arrow_lower_left",
            "arrow_upper_left",
            "arrow_up_down",
            "left_right_arrow",
            "arrows_counterclockwise",
            "arrow_right_hook",
            "leftwards_arrow_with_hook",
            "arrow_heading_up",
            "arrow_heading_down",
            "twisted_rightwards_arrows",
            "repeat",
            "repeat_one",
            "hash",
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "keycap_ten",
            "1234",
            "abc",
            "abcd",
            "capital_abcd",
            "information_source",
            "signal_strength",
            "cinema",
            "symbols",
            "heavy_plus_sign",
            "heavy_minus_sign",
            "wavy_dash",
            "heavy_division_sign",
            "heavy_multiplication_x",
            "heavy_check_mark",
            "arrows_clockwise",
            "tm",
            "copyright",
            "registered",
            "currency_exchange",
            "heavy_dollar_sign",
            "curly_loop",
            "loop",
            "part_alternation_mark",
            "exclamation",
            "question",
            "grey_exclamation",
            "grey_question",
            "bangbang",
            "interrobang",
            "x",
            "o",
            "100",
            "end",
            "back",
            "on",
            "top",
            "soon",
            "cyclone",
            "m",
            "ophiuchus",
            "six_pointed_star",
            "beginner",
            "trident",
            "warning",
            "hotsprings",
            "recycle",
            "anger",
            "diamond_shape_with_a_dot_inside",
            "spades",
            "clubs",
            "hearts",
            "diamonds",
            "ballot_box_with_check",
            "white_circle",
            "black_circle",
            "radio_button",
            "red_circle",
            "large_blue_circle",
            "small_red_triangle",
            "small_red_triangle_down",
            "small_orange_diamond",
            "small_blue_diamond",
            "large_orange_diamond",
            "large_blue_diamond",
            "black_small_square",
            "white_small_square",
            "black_large_square",
            "white_large_square",
            "black_medium_square",
            "white_medium_square",
            "black_medium_small_square",
            "white_medium_small_square",
            "black_square_button",
            "white_square_button",
            "clock1",
            "clock2",
            "clock3",
            "clock4",
            "clock5",
            "clock6",
            "clock7",
            "clock8",
            "clock9",
            "clock10",
            "clock11",
            "clock12",
            "clock130",
            "clock230",
            "clock330",
            "clock430",
            "clock530",
            "clock630",
            "clock730",
            "clock830",
            "clock930",
            "clock1030",
            "clock1130",
            "clock1230"
        ],
        "Nature": [
            "seedling",
            "evergreen_tree",
            "deciduous_tree",
            "palm_tree",
            "cactus",
            "tulip",
            "cherry_blossom",
            "rose",
            "hibiscus",
            "sunflower",
            "blossom",
            "bouquet",
            "ear_of_rice",
            "herb",
            "four_leaf_clover",
            "maple_leaf",
            "fallen_leaf",
            "leaves",
            "mushroom",
            "chestnut",
            "rat",
            "mouse2",
            "mouse",
            "hamster",
            "ox",
            "water_buffalo",
            "cow2",
            "cow",
            "tiger2",
            "leopard",
            "tiger",
            "rabbit2",
            "rabbit",
            "cat2",
            "cat",
            "racehorse",
            "horse",
            "ram",
            "sheep",
            "goat",
            "rooster",
            "chicken",
            "baby_chick",
            "hatching_chick",
            "hatched_chick",
            "bird",
            "penguin",
            "elephant",
            "dromedary_camel",
            "camel",
            "boar",
            "pig2",
            "pig",
            "pig_nose",
            "dog2",
            "poodle",
            "dog",
            "wolf",
            "bear",
            "koala",
            "panda_face",
            "monkey_face",
            "see_no_evil",
            "hear_no_evil",
            "speak_no_evil",
            "monkey",
            "dragon",
            "dragon_face",
            "crocodile",
            "snake",
            "turtle",
            "frog",
            "whale2",
            "whale",
            "dolphin",
            "octopus",
            "fish",
            "tropical_fish",
            "blowfish",
            "shell",
            "snail",
            "bug",
            "ant",
            "bee",
            "beetle",
            "feet",
            "zap",
            "fire",
            "crescent_moon",
            "sunny",
            "partly_sunny",
            "cloud",
            "droplet",
            "sweat_drops",
            "umbrella",
            "dash",
            "snowflake",
            "star2",
            "star",
            "stars",
            "sunrise_over_mountains",
            "sunrise",
            "rainbow",
            "ocean",
            "volcano",
            "milky_way",
            "mount_fuji",
            "japan",
            "globe_with_meridians",
            "earth_africa",
            "earth_americas",
            "earth_asia",
            "new_moon",
            "waxing_crescent_moon",
            "first_quarter_moon",
            "moon",
            "full_moon",
            "waning_gibbous_moon",
            "last_quarter_moon",
            "waning_crescent_moon",
            "new_moon_with_face",
            "full_moon_with_face",
            "first_quarter_moon_with_face",
            "last_quarter_moon_with_face",
            "sun_with_face"
        ],
        "Foods": [
            "tomato",
            "eggplant",
            "corn",
            "sweet_potato",
            "grapes",
            "melon",
            "watermelon",
            "tangerine",
            "lemon",
            "banana",
            "pineapple",
            "apple",
            "green_apple",
            "pear",
            "peach",
            "cherries",
            "strawberry",
            "hamburger",
            "pizza",
            "meat_on_bone",
            "poultry_leg",
            "rice_cracker",
            "rice_ball",
            "rice",
            "curry",
            "ramen",
            "spaghetti",
            "bread",
            "fries",
            "dango",
            "oden",
            "sushi",
            "fried_shrimp",
            "fish_cake",
            "icecream",
            "shaved_ice",
            "ice_cream",
            "doughnut",
            "cookie",
            "chocolate_bar",
            "candy",
            "lollipop",
            "custard",
            "honey_pot",
            "cake",
            "bento",
            "stew",
            "egg",
            "fork_and_knife",
            "tea",
            "coffee",
            "sake",
            "wine_glass",
            "cocktail",
            "tropical_drink",
            "beer",
            "beers",
            "baby_bottle"
        ],
        "People": [
            "grinning",
            "grin",
            "joy",
            "smiley",
            "smile",
            "sweat_smile",
            "laughing",
            "innocent",
            "smiling_imp",
            "imp",
            "wink",
            "blush",
            "relaxed",
            "yum",
            "relieved",
            "heart_eyes",
            "sunglasses",
            "smirk",
            "neutral_face",
            "expressionless",
            "unamused",
            "sweat",
            "pensive",
            "confused",
            "confounded",
            "kissing",
            "kissing_heart",
            "kissing_smiling_eyes",
            "kissing_closed_eyes",
            "stuck_out_tongue",
            "stuck_out_tongue_winking_eye",
            "stuck_out_tongue_closed_eyes",
            "disappointed",
            "worried",
            "angry",
            "rage",
            "cry",
            "persevere",
            "triumph",
            "disappointed_relieved",
            "frowning",
            "anguished",
            "fearful",
            "weary",
            "sleepy",
            "tired_face",
            "grimacing",
            "sob",
            "open_mouth",
            "hushed",
            "cold_sweat",
            "scream",
            "astonished",
            "flushed",
            "sleeping",
            "dizzy_face",
            "no_mouth",
            "mask",
            "smile_cat",
            "joy_cat",
            "smiley_cat",
            "heart_eyes_cat",
            "smirk_cat",
            "kissing_cat",
            "pouting_cat",
            "crying_cat_face",
            "scream_cat",
            "footprints",
            "bust_in_silhouette",
            "busts_in_silhouette",
            "boy",
            "girl",
            "man",
            "woman",
            "man-woman-boy",
            "man-woman-girl",
            "family",
            "man-woman-boy-boy",
            "man-woman-girl-girl",
            "woman-woman-boy",
            "woman-woman-girl",
            "woman-woman-girl-boy",
            "woman-woman-boy-boy",
            "woman-woman-girl-girl",
            "man-man-boy",
            "man-man-girl",
            "man-man-girl-boy",
            "man-man-boy-boy",
            "man-man-girl-girl",
            "couple",
            "two_men_holding_hands",
            "two_women_holding_hands",
            "cop",
            "dancers",
            "bride_with_veil",
            "person_with_blond_hair",
            "man_with_gua_pi_mao",
            "man_with_turban",
            "older_man",
            "older_woman",
            "baby",
            "construction_worker",
            "princess",
            "guardsman",
            "angel",
            "santa",
            "ghost",
            "japanese_ogre",
            "japanese_goblin",
            "hankey",
            "skull",
            "alien",
            "space_invader",
            "bow",
            "information_desk_person",
            "no_good",
            "ok_woman",
            "raising_hand",
            "person_with_pouting_face",
            "person_frowning",
            "massage",
            "haircut",
            "couple_with_heart",
            "woman-heart-woman",
            "man-heart-man",
            "couplekiss",
            "woman-kiss-woman",
            "man-kiss-man",
            "nail_care",
            "ear",
            "eyes",
            "nose",
            "lips",
            "kiss",
            "tongue",
            "wave",
            "+1",
            "-1",
            "point_up",
            "point_up_2",
            "point_down",
            "point_left",
            "point_right",
            "ok_hand",
            "v",
            "facepunch",
            "fist",
            "hand",
            "muscle",
            "open_hands",
            "raised_hands",
            "clap",
            "pray"
        ],
        "Places": [
            "railway_car",
            "mountain_railway",
            "steam_locomotive",
            "train",
            "monorail",
            "bullettrain_side",
            "bullettrain_front",
            "train2",
            "metro",
            "light_rail",
            "station",
            "tram",
            "bus",
            "oncoming_bus",
            "trolleybus",
            "minibus",
            "ambulance",
            "fire_engine",
            "police_car",
            "oncoming_police_car",
            "rotating_light",
            "taxi",
            "oncoming_taxi",
            "car",
            "oncoming_automobile",
            "blue_car",
            "truck",
            "articulated_lorry",
            "tractor",
            "bike",
            "busstop",
            "fuelpump",
            "construction",
            "vertical_traffic_light",
            "traffic_light",
            "rocket",
            "helicopter",
            "airplane",
            "seat",
            "anchor",
            "ship",
            "speedboat",
            "boat",
            "aerial_tramway",
            "mountain_cableway",
            "suspension_railway",
            "passport_control",
            "customs",
            "baggage_claim",
            "left_luggage",
            "yen",
            "euro",
            "pound",
            "dollar",
            "statue_of_liberty",
            "moyai",
            "foggy",
            "tokyo_tower",
            "fountain",
            "european_castle",
            "japanese_castle",
            "city_sunrise",
            "city_sunset",
            "night_with_stars",
            "bridge_at_night",
            "house",
            "house_with_garden",
            "office",
            "department_store",
            "factory",
            "post_office",
            "european_post_office",
            "hospital",
            "bank",
            "hotel",
            "love_hotel",
            "wedding",
            "church",
            "convenience_store",
            "school",
            "flag-au",
            "flag-at",
            "flag-be",
            "flag-br",
            "flag-ca",
            "flag-cl",
            "flag-cn",
            "flag-co",
            "flag-dk",
            "flag-fi",
            "flag-fr",
            "flag-de",
            "flag-hk",
            "flag-in",
            "flag-id",
            "flag-ie",
            "flag-il",
            "flag-it",
            "flag-jp",
            "flag-kr",
            "flag-mo",
            "flag-my",
            "flag-mx",
            "flag-nl",
            "flag-nz",
            "flag-no",
            "flag-ph",
            "flag-pl",
            "flag-pt",
            "flag-pr",
            "flag-ru",
            "flag-sa",
            "flag-sg",
            "flag-za",
            "flag-es",
            "flag-se",
            "flag-ch",
            "flag-tr",
            "flag-gb",
            "flag-us",
            "flag-ae",
            "flag-vn"
        ],
        "Activity": [
            "runner",
            "walking",
            "dancer",
            "rowboat",
            "swimmer",
            "surfer",
            "bath",
            "snowboarder",
            "ski",
            "snowman",
            "bicyclist",
            "mountain_bicyclist",
            "horse_racing",
            "tent",
            "fishing_pole_and_fish",
            "soccer",
            "basketball",
            "football",
            "baseball",
            "tennis",
            "rugby_football",
            "golf",
            "trophy",
            "running_shirt_with_sash",
            "checkered_flag",
            "musical_keyboard",
            "guitar",
            "violin",
            "saxophone",
            "trumpet",
            "musical_note",
            "notes",
            "musical_score",
            "headphones",
            "microphone",
            "performing_arts",
            "ticket",
            "tophat",
            "circus_tent",
            "clapper",
            "art",
            "dart",
            "8ball",
            "bowling",
            "slot_machine",
            "game_die",
            "video_game",
            "flower_playing_cards",
            "black_joker",
            "mahjong",
            "carousel_horse",
            "ferris_wheel",
            "roller_coaster"
        ],
        "Celebration": [
            "ribbon",
            "gift",
            "birthday",
            "jack_o_lantern",
            "christmas_tree",
            "tanabata_tree",
            "bamboo",
            "rice_scene",
            "fireworks",
            "sparkler",
            "tada",
            "confetti_ball",
            "balloon",
            "dizzy",
            "sparkles",
            "boom",
            "mortar_board",
            "crown",
            "dolls",
            "flags",
            "wind_chime",
            "crossed_flags",
            "izakaya_lantern",
            "ring",
            "heart",
            "broken_heart",
            "love_letter",
            "two_hearts",
            "revolving_hearts",
            "heartbeat",
            "heartpulse",
            "sparkling_heart",
            "cupid",
            "gift_heart",
            "heart_decoration",
            "purple_heart",
            "yellow_heart",
            "green_heart",
            "blue_heart"
        ]
    });
})(angular.module('cts.emoji'));
(function (App) {
    App.constant('emojiCodes', {
        "<3": "heart",
        ":o\\)": "monkey_face",
        ":\\*": "kiss",
        ":\\-\\*": "kiss",
        "<\\/3": "broken_heart",
        "=\\)": "smiley",
        "=\\-\\)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":\\-D": "smile",
        ":>": "laughing",
        ":\\->": "laughing",
        ";\\)": "wink",
        ";\\-\\)": "wink",
        ":\\)": "blush",
        "\\(:": "blush",
        ":\\-\\)": "blush",
        "8\\)": "sunglasses",
        ":\\|": "neutral_face",
        ":\\-\\|": "neutral_face",
        ":\\\\\\\\": "confused",
        ":\\-\\\\\\\\": "confused",
        ":\\/": "confused",
        ":\\-\\/": "confused",
        ":p": "stuck_out_tongue",
        ":\\-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":\\-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":\\-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";\\-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";\\-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";\\-P": "stuck_out_tongue_winking_eye",
        "\\):": "disappointed",
        ":\\(": "disappointed",
        ":\\-\\(": "disappointed",
        ">:\\(": "angry",
        ">:\\-\\(": "angry",
        ":'\\(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":\\-o": "open_mouth"
    });
})(angular.module('cts.emoji'));
(function (App) {
    App.constant('emojiMaps', {
        "100": {
            "unescaped": "100",
            "unicode": "\\u1F4AF",
            "name": "hundred points symbol"
        },
        "1234": {
            "unescaped": "1234",
            "unicode": "\\u1F522",
            "name": "input symbol for numbers"
        },
        "copyright": {
            "unescaped": "copyright",
            "unicode": "\\u00A9",
            "name": "copyright sign"
        },
        "registered": {
            "unescaped": "registered",
            "unicode": "\\u00AE",
            "name": "registered sign"
        },
        "bangbang": {
            "unescaped": "bangbang",
            "unicode": "\\u203C",
            "name": "double exclamation mark"
        },
        "interrobang": {
            "unescaped": "interrobang",
            "unicode": "\\u2049",
            "name": "exclamation question mark"
        },
        "tm": {
            "unescaped": "tm",
            "unicode": "\\u2122",
            "name": "trade mark sign"
        },
        "information_source": {
            "unescaped": "information_source",
            "unicode": "\\u2139",
            "name": "information source"
        },
        "left_right_arrow": {
            "unescaped": "left_right_arrow",
            "unicode": "\\u2194",
            "name": "left right arrow"
        },
        "arrow_up_down": {
            "unescaped": "arrow_up_down",
            "unicode": "\\u2195",
            "name": "up down arrow"
        },
        "arrow_upper_left": {
            "unescaped": "arrow_upper_left",
            "unicode": "\\u2196",
            "name": "north west arrow"
        },
        "arrow_upper_right": {
            "unescaped": "arrow_upper_right",
            "unicode": "\\u2197",
            "name": "north east arrow"
        },
        "arrow_lower_right": {
            "unescaped": "arrow_lower_right",
            "unicode": "\\u2198",
            "name": "south east arrow"
        },
        "arrow_lower_left": {
            "unescaped": "arrow_lower_left",
            "unicode": "\\u2199",
            "name": "south west arrow"
        },
        "leftwards_arrow_with_hook": {
            "unescaped": "leftwards_arrow_with_hook",
            "unicode": "\\u21A9",
            "name": "leftwards arrow with hook"
        },
        "arrow_right_hook": {
            "unescaped": "arrow_right_hook",
            "unicode": "\\u21AA",
            "name": "rightwards arrow with hook"
        },
        "watch": {
            "unescaped": "watch",
            "unicode": "\\u231A",
            "name": "watch"
        },
        "hourglass": {
            "unescaped": "hourglass",
            "unicode": "\\u231B",
            "name": "hourglass"
        },
        "fast_forward": {
            "unescaped": "fast_forward",
            "unicode": "\\u23E9",
            "name": "black right-pointing double triangle"
        },
        "rewind": {
            "unescaped": "rewind",
            "unicode": "\\u23EA",
            "name": "black left-pointing double triangle"
        },
        "arrow_double_up": {
            "unescaped": "arrow_double_up",
            "unicode": "\\u23EB",
            "name": "black up-pointing double triangle"
        },
        "arrow_double_down": {
            "unescaped": "arrow_double_down",
            "unicode": "\\u23EC",
            "name": "black down-pointing double triangle"
        },
        "alarm_clock": {
            "unescaped": "alarm_clock",
            "unicode": "\\u23F0",
            "name": "alarm clock"
        },
        "hourglass_flowing_sand": {
            "unescaped": "hourglass_flowing_sand",
            "unicode": "\\u23F3",
            "name": "hourglass with flowing sand"
        },
        "m": {
            "unescaped": "m",
            "unicode": "\\u24C2",
            "name": "circled latin capital letter m"
        },
        "black_small_square": {
            "unescaped": "black_small_square",
            "unicode": "\\u25AA",
            "name": "black small square"
        },
        "white_small_square": {
            "unescaped": "white_small_square",
            "unicode": "\\u25AB",
            "name": "white small square"
        },
        "arrow_forward": {
            "unescaped": "arrow_forward",
            "unicode": "\\u25B6",
            "name": "black right-pointing triangle"
        },
        "arrow_backward": {
            "unescaped": "arrow_backward",
            "unicode": "\\u25C0",
            "name": "black left-pointing triangle"
        },
        "white_medium_square": {
            "unescaped": "white_medium_square",
            "unicode": "\\u25FB",
            "name": "white medium square"
        },
        "black_medium_square": {
            "unescaped": "black_medium_square",
            "unicode": "\\u25FC",
            "name": "black medium square"
        },
        "white_medium_small_square": {
            "unescaped": "white_medium_small_square",
            "unicode": "\\u25FD",
            "name": "white medium small square"
        },
        "black_medium_small_square": {
            "unescaped": "black_medium_small_square",
            "unicode": "\\u25FE",
            "name": "black medium small square"
        },
        "sunny": {
            "unescaped": "sunny",
            "unicode": "\\u2600",
            "name": "black sun with rays"
        },
        "cloud": {
            "unescaped": "cloud",
            "unicode": "\\u2601",
            "name": "cloud"
        },
        "phone": {
            "unescaped": "phone",
            "unicode": "\\u260E",
            "name": "black telephone"
        },
        "telephone": {
            "unescaped": "telephone",
            "unicode": "\\u260E",
            "name": "black telephone"
        },
        "ballot_box_with_check": {
            "unescaped": "ballot_box_with_check",
            "unicode": "\\u2611",
            "name": "ballot box with check"
        },
        "umbrella": {
            "unescaped": "umbrella",
            "unicode": "\\u2614",
            "name": "umbrella with rain drops"
        },
        "coffee": {
            "unescaped": "coffee",
            "unicode": "\\u2615",
            "name": "hot beverage"
        },
        "point_up": {
            "unescaped": "point_up",
            "unicode": "\\u261D",
            "name": "white up pointing index"
        },
        "relaxed": {
            "unescaped": "relaxed",
            "unicode": "\\u263A",
            "name": "white smiling face"
        },
        "aries": {
            "unescaped": "aries",
            "unicode": "\\u2648",
            "name": "aries"
        },
        "taurus": {
            "unescaped": "taurus",
            "unicode": "\\u2649",
            "name": "taurus"
        },
        "gemini": {
            "unescaped": "gemini",
            "unicode": "\\u264A",
            "name": "gemini"
        },
        "cancer": {
            "unescaped": "cancer",
            "unicode": "\\u264B",
            "name": "cancer"
        },
        "leo": {
            "unescaped": "leo",
            "unicode": "\\u264C",
            "name": "leo"
        },
        "virgo": {
            "unescaped": "virgo",
            "unicode": "\\u264D",
            "name": "virgo"
        },
        "libra": {
            "unescaped": "libra",
            "unicode": "\\u264E",
            "name": "libra"
        },
        "scorpius": {
            "unescaped": "scorpius",
            "unicode": "\\u264F",
            "name": "scorpius"
        },
        "sagittarius": {
            "unescaped": "sagittarius",
            "unicode": "\\u2650",
            "name": "sagittarius"
        },
        "capricorn": {
            "unescaped": "capricorn",
            "unicode": "\\u2651",
            "name": "capricorn"
        },
        "aquarius": {
            "unescaped": "aquarius",
            "unicode": "\\u2652",
            "name": "aquarius"
        },
        "pisces": {
            "unescaped": "pisces",
            "unicode": "\\u2653",
            "name": "pisces"
        },
        "spades": {
            "unescaped": "spades",
            "unicode": "\\u2660",
            "name": "black spade suit"
        },
        "clubs": {
            "unescaped": "clubs",
            "unicode": "\\u2663",
            "name": "black club suit"
        },
        "hearts": {
            "unescaped": "hearts",
            "unicode": "\\u2665",
            "name": "black heart suit"
        },
        "diamonds": {
            "unescaped": "diamonds",
            "unicode": "\\u2666",
            "name": "black diamond suit"
        },
        "hotsprings": {
            "unescaped": "hotsprings",
            "unicode": "\\u2668",
            "name": "hot springs"
        },
        "recycle": {
            "unescaped": "recycle",
            "unicode": "\\u267B",
            "name": "black universal recycling symbol"
        },
        "wheelchair": {
            "unescaped": "wheelchair",
            "unicode": "\\u267F",
            "name": "wheelchair symbol"
        },
        "anchor": {
            "unescaped": "anchor",
            "unicode": "\\u2693",
            "name": "anchor"
        },
        "warning": {
            "unescaped": "warning",
            "unicode": "\\u26A0",
            "name": "warning sign"
        },
        "zap": {
            "unescaped": "zap",
            "unicode": "\\u26A1",
            "name": "high voltage sign"
        },
        "white_circle": {
            "unescaped": "white_circle",
            "unicode": "\\u26AA",
            "name": "medium white circle"
        },
        "black_circle": {
            "unescaped": "black_circle",
            "unicode": "\\u26AB",
            "name": "medium black circle"
        },
        "soccer": {
            "unescaped": "soccer",
            "unicode": "\\u26BD",
            "name": "soccer ball"
        },
        "baseball": {
            "unescaped": "baseball",
            "unicode": "\\u26BE",
            "name": "baseball"
        },
        "snowman": {
            "unescaped": "snowman",
            "unicode": "\\u26C4",
            "name": "snowman without snow"
        },
        "partly_sunny": {
            "unescaped": "partly_sunny",
            "unicode": "\\u26C5",
            "name": "sun behind cloud"
        },
        "ophiuchus": {
            "unescaped": "ophiuchus",
            "unicode": "\\u26CE",
            "name": "ophiuchus"
        },
        "no_entry": {
            "unescaped": "no_entry",
            "unicode": "\\u26D4",
            "name": "no entry"
        },
        "church": {
            "unescaped": "church",
            "unicode": "\\u26EA",
            "name": "church"
        },
        "fountain": {
            "unescaped": "fountain",
            "unicode": "\\u26F2",
            "name": "fountain"
        },
        "golf": {
            "unescaped": "golf",
            "unicode": "\\u26F3",
            "name": "flag in hole"
        },
        "boat": {
            "unescaped": "boat",
            "unicode": "\\u26F5",
            "name": "sailboat"
        },
        "sailboat": {
            "unescaped": "sailboat",
            "unicode": "\\u26F5",
            "name": "sailboat"
        },
        "tent": {
            "unescaped": "tent",
            "unicode": "\\u26FA",
            "name": "tent"
        },
        "fuelpump": {
            "unescaped": "fuelpump",
            "unicode": "\\u26FD",
            "name": "fuel pump"
        },
        "scissors": {
            "unescaped": "scissors",
            "unicode": "\\u2702",
            "name": "black scissors"
        },
        "white_check_mark": {
            "unescaped": "white_check_mark",
            "unicode": "\\u2705",
            "name": "white heavy check mark"
        },
        "airplane": {
            "unescaped": "airplane",
            "unicode": "\\u2708",
            "name": "airplane"
        },
        "email": {
            "unescaped": "email",
            "unicode": "\\u2709",
            "name": "envelope"
        },
        "envelope": {
            "unescaped": "envelope",
            "unicode": "\\u2709",
            "name": "envelope"
        },
        "fist": {
            "unescaped": "fist",
            "unicode": "\\u270A",
            "name": "raised fist"
        },
        "hand": {
            "unescaped": "hand",
            "unicode": "\\u270B",
            "name": "raised hand"
        },
        "raised_hand": {
            "unescaped": "raised_hand",
            "unicode": "\\u270B",
            "name": "raised hand"
        },
        "v": {
            "unescaped": "v",
            "unicode": "\\u270C",
            "name": "victory hand"
        },
        "pencil2": {
            "unescaped": "pencil2",
            "unicode": "\\u270F",
            "name": "pencil"
        },
        "black_nib": {
            "unescaped": "black_nib",
            "unicode": "\\u2712",
            "name": "black nib"
        },
        "heavy_check_mark": {
            "unescaped": "heavy_check_mark",
            "unicode": "\\u2714",
            "name": "heavy check mark"
        },
        "heavy_multiplication_x": {
            "unescaped": "heavy_multiplication_x",
            "unicode": "\\u2716",
            "name": "heavy multiplication x"
        },
        "sparkles": {
            "unescaped": "sparkles",
            "unicode": "\\u2728",
            "name": "sparkles"
        },
        "eight_spoked_asterisk": {
            "unescaped": "eight_spoked_asterisk",
            "unicode": "\\u2733",
            "name": "eight spoked asterisk"
        },
        "eight_pointed_black_star": {
            "unescaped": "eight_pointed_black_star",
            "unicode": "\\u2734",
            "name": "eight pointed black star"
        },
        "snowflake": {
            "unescaped": "snowflake",
            "unicode": "\\u2744",
            "name": "snowflake"
        },
        "sparkle": {
            "unescaped": "sparkle",
            "unicode": "\\u2747",
            "name": "sparkle"
        },
        "x": {
            "unescaped": "x",
            "unicode": "\\u274C",
            "name": "cross mark"
        },
        "negative_squared_cross_mark": {
            "unescaped": "negative_squared_cross_mark",
            "unicode": "\\u274E",
            "name": "negative squared cross mark"
        },
        "question": {
            "unescaped": "question",
            "unicode": "\\u2753",
            "name": "black question mark ornament"
        },
        "grey_question": {
            "unescaped": "grey_question",
            "unicode": "\\u2754",
            "name": "white question mark ornament"
        },
        "grey_exclamation": {
            "unescaped": "grey_exclamation",
            "unicode": "\\u2755",
            "name": "white exclamation mark ornament"
        },
        "exclamation": {
            "unescaped": "exclamation",
            "unicode": "\\u2757",
            "name": "heavy exclamation mark symbol"
        },
        "heavy_exclamation_mark": {
            "unescaped": "heavy_exclamation_mark",
            "unicode": "\\u2757",
            "name": "heavy exclamation mark symbol"
        },
        "heart": {
            "unescaped": "heart",
            "unicode": "\\u2764",
            "name": "heavy black heart"
        },
        "heavy_plus_sign": {
            "unescaped": "heavy_plus_sign",
            "unicode": "\\u2795",
            "name": "heavy plus sign"
        },
        "heavy_minus_sign": {
            "unescaped": "heavy_minus_sign",
            "unicode": "\\u2796",
            "name": "heavy minus sign"
        },
        "heavy_division_sign": {
            "unescaped": "heavy_division_sign",
            "unicode": "\\u2797",
            "name": "heavy division sign"
        },
        "arrow_right": {
            "unescaped": "arrow_right",
            "unicode": "\\u27A1",
            "name": "black rightwards arrow"
        },
        "curly_loop": {
            "unescaped": "curly_loop",
            "unicode": "\\u27B0",
            "name": "curly loop"
        },
        "loop": {
            "unescaped": "loop",
            "unicode": "\\u27BF",
            "name": "double curly loop"
        },
        "arrow_heading_up": {
            "unescaped": "arrow_heading_up",
            "unicode": "\\u2934",
            "name": "arrow pointing rightwards then curving upwards"
        },
        "arrow_heading_down": {
            "unescaped": "arrow_heading_down",
            "unicode": "\\u2935",
            "name": "arrow pointing rightwards then curving downwards"
        },
        "arrow_left": {
            "unescaped": "arrow_left",
            "unicode": "\\u2B05",
            "name": "leftwards black arrow"
        },
        "arrow_up": {
            "unescaped": "arrow_up",
            "unicode": "\\u2B06",
            "name": "upwards black arrow"
        },
        "arrow_down": {
            "unescaped": "arrow_down",
            "unicode": "\\u2B07",
            "name": "downwards black arrow"
        },
        "black_large_square": {
            "unescaped": "black_large_square",
            "unicode": "\\u2B1B",
            "name": "black large square"
        },
        "white_large_square": {
            "unescaped": "white_large_square",
            "unicode": "\\u2B1C",
            "name": "white large square"
        },
        "star": {
            "unescaped": "star",
            "unicode": "\\u2B50",
            "name": "white medium star"
        },
        "o": {
            "unescaped": "o",
            "unicode": "\\u2B55",
            "name": "heavy large circle"
        },
        "wavy_dash": {
            "unescaped": "wavy_dash",
            "unicode": "\\u3030",
            "name": "wavy dash"
        },
        "part_alternation_mark": {
            "unescaped": "part_alternation_mark",
            "unicode": "\\u303D",
            "name": "part alternation mark"
        },
        "congratulations": {
            "unescaped": "congratulations",
            "unicode": "\\u3297",
            "name": "circled ideograph congratulation"
        },
        "secret": {
            "unescaped": "secret",
            "unicode": "\\u3299",
            "name": "circled ideograph secret"
        },
        "mahjong": {
            "unescaped": "mahjong",
            "unicode": "\\u1F004",
            "name": "mahjong tile red dragon"
        },
        "black_joker": {
            "unescaped": "black_joker",
            "unicode": "\\u1F0CF",
            "name": "playing card black joker"
        },
        "a": {
            "unescaped": "a",
            "unicode": "\\u1F170",
            "name": "negative squared latin capital letter a"
        },
        "b": {
            "unescaped": "b",
            "unicode": "\\u1F171",
            "name": "negative squared latin capital letter b"
        },
        "o2": {
            "unescaped": "o2",
            "unicode": "\\u1F17E",
            "name": "negative squared latin capital letter o"
        },
        "parking": {
            "unescaped": "parking",
            "unicode": "\\u1F17F",
            "name": "negative squared latin capital letter p"
        },
        "ab": {
            "unescaped": "ab",
            "unicode": "\\u1F18E",
            "name": "negative squared ab"
        },
        "cl": {
            "unescaped": "cl",
            "unicode": "\\u1F191",
            "name": "squared cl"
        },
        "cool": {
            "unescaped": "cool",
            "unicode": "\\u1F192",
            "name": "squared cool"
        },
        "free": {
            "unescaped": "free",
            "unicode": "\\u1F193",
            "name": "squared free"
        },
        "id": {
            "unescaped": "id",
            "unicode": "\\u1F194",
            "name": "squared id"
        },
        "new": {
            "unescaped": "new",
            "unicode": "\\u1F195",
            "name": "squared new"
        },
        "ng": {
            "unescaped": "ng",
            "unicode": "\\u1F196",
            "name": "squared ng"
        },
        "ok": {
            "unescaped": "ok",
            "unicode": "\\u1F197",
            "name": "squared ok"
        },
        "sos": {
            "unescaped": "sos",
            "unicode": "\\u1F198",
            "name": "squared sos"
        },
        "up": {
            "unescaped": "up",
            "unicode": "\\u1F199",
            "name": "squared up with exclamation mark"
        },
        "vs": {
            "unescaped": "vs",
            "unicode": "\\u1F19A",
            "name": "squared vs"
        },
        "koko": {
            "unescaped": "koko",
            "unicode": "\\u1F201",
            "name": "squared katakana koko"
        },
        "sa": {
            "unescaped": "sa",
            "unicode": "\\u1F202",
            "name": "squared katakana sa"
        },
        "u7121": {
            "unescaped": "u7121",
            "unicode": "\\u1F21A",
            "name": "squared cjk unified ideograph-7121"
        },
        "u6307": {
            "unescaped": "u6307",
            "unicode": "\\u1F22F",
            "name": "squared cjk unified ideograph-6307"
        },
        "u7981": {
            "unescaped": "u7981",
            "unicode": "\\u1F232",
            "name": "squared cjk unified ideograph-7981"
        },
        "u7a7a": {
            "unescaped": "u7a7a",
            "unicode": "\\u1F233",
            "name": "squared cjk unified ideograph-7a7a"
        },
        "u5408": {
            "unescaped": "u5408",
            "unicode": "\\u1F234",
            "name": "squared cjk unified ideograph-5408"
        },
        "u6e80": {
            "unescaped": "u6e80",
            "unicode": "\\u1F235",
            "name": "squared cjk unified ideograph-6e80"
        },
        "u6709": {
            "unescaped": "u6709",
            "unicode": "\\u1F236",
            "name": "squared cjk unified ideograph-6709"
        },
        "u6708": {
            "unescaped": "u6708",
            "unicode": "\\u1F237",
            "name": "squared cjk unified ideograph-6708"
        },
        "u7533": {
            "unescaped": "u7533",
            "unicode": "\\u1F238",
            "name": "squared cjk unified ideograph-7533"
        },
        "u5272": {
            "unescaped": "u5272",
            "unicode": "\\u1F239",
            "name": "squared cjk unified ideograph-5272"
        },
        "u55b6": {
            "unescaped": "u55b6",
            "unicode": "\\u1F23A",
            "name": "squared cjk unified ideograph-55b6"
        },
        "ideograph_advantage": {
            "unescaped": "ideograph_advantage",
            "unicode": "\\u1F250",
            "name": "circled ideograph advantage"
        },
        "accept": {
            "unescaped": "accept",
            "unicode": "\\u1F251",
            "name": "circled ideograph accept"
        },
        "cyclone": {
            "unescaped": "cyclone",
            "unicode": "\\u1F300",
            "name": "cyclone"
        },
        "foggy": {
            "unescaped": "foggy",
            "unicode": "\\u1F301",
            "name": "foggy"
        },
        "closed_umbrella": {
            "unescaped": "closed_umbrella",
            "unicode": "\\u1F302",
            "name": "closed umbrella"
        },
        "night_with_stars": {
            "unescaped": "night_with_stars",
            "unicode": "\\u1F303",
            "name": "night with stars"
        },
        "sunrise_over_mountains": {
            "unescaped": "sunrise_over_mountains",
            "unicode": "\\u1F304",
            "name": "sunrise over mountains"
        },
        "sunrise": {
            "unescaped": "sunrise",
            "unicode": "\\u1F305",
            "name": "sunrise"
        },
        "city_sunset": {
            "unescaped": "city_sunset",
            "unicode": "\\u1F306",
            "name": "cityscape at dusk"
        },
        "city_sunrise": {
            "unescaped": "city_sunrise",
            "unicode": "\\u1F307",
            "name": "sunset over buildings"
        },
        "rainbow": {
            "unescaped": "rainbow",
            "unicode": "\\u1F308",
            "name": "rainbow"
        },
        "bridge_at_night": {
            "unescaped": "bridge_at_night",
            "unicode": "\\u1F309",
            "name": "bridge at night"
        },
        "ocean": {
            "unescaped": "ocean",
            "unicode": "\\u1F30A",
            "name": "water wave"
        },
        "volcano": {
            "unescaped": "volcano",
            "unicode": "\\u1F30B",
            "name": "volcano"
        },
        "milky_way": {
            "unescaped": "milky_way",
            "unicode": "\\u1F30C",
            "name": "milky way"
        },
        "earth_africa": {
            "unescaped": "earth_africa",
            "unicode": "\\u1F30D",
            "name": "earth globe europe-africa"
        },
        "earth_americas": {
            "unescaped": "earth_americas",
            "unicode": "\\u1F30E",
            "name": "earth globe americas"
        },
        "earth_asia": {
            "unescaped": "earth_asia",
            "unicode": "\\u1F30F",
            "name": "earth globe asia-australia"
        },
        "globe_with_meridians": {
            "unescaped": "globe_with_meridians",
            "unicode": "\\u1F310",
            "name": "globe with meridians"
        },
        "new_moon": {
            "unescaped": "new_moon",
            "unicode": "\\u1F311",
            "name": "new moon symbol"
        },
        "waxing_crescent_moon": {
            "unescaped": "waxing_crescent_moon",
            "unicode": "\\u1F312",
            "name": "waxing crescent moon symbol"
        },
        "first_quarter_moon": {
            "unescaped": "first_quarter_moon",
            "unicode": "\\u1F313",
            "name": "first quarter moon symbol"
        },
        "moon": {
            "unescaped": "moon",
            "unicode": "\\u1F314",
            "name": "waxing gibbous moon symbol"
        },
        "waxing_gibbous_moon": {
            "unescaped": "waxing_gibbous_moon",
            "unicode": "\\u1F314",
            "name": "waxing gibbous moon symbol"
        },
        "full_moon": {
            "unescaped": "full_moon",
            "unicode": "\\u1F315",
            "name": "full moon symbol"
        },
        "waning_gibbous_moon": {
            "unescaped": "waning_gibbous_moon",
            "unicode": "\\u1F316",
            "name": "waning gibbous moon symbol"
        },
        "last_quarter_moon": {
            "unescaped": "last_quarter_moon",
            "unicode": "\\u1F317",
            "name": "last quarter moon symbol"
        },
        "waning_crescent_moon": {
            "unescaped": "waning_crescent_moon",
            "unicode": "\\u1F318",
            "name": "waning crescent moon symbol"
        },
        "crescent_moon": {
            "unescaped": "crescent_moon",
            "unicode": "\\u1F319",
            "name": "crescent moon"
        },
        "new_moon_with_face": {
            "unescaped": "new_moon_with_face",
            "unicode": "\\u1F31A",
            "name": "new moon with face"
        },
        "first_quarter_moon_with_face": {
            "unescaped": "first_quarter_moon_with_face",
            "unicode": "\\u1F31B",
            "name": "first quarter moon with face"
        },
        "last_quarter_moon_with_face": {
            "unescaped": "last_quarter_moon_with_face",
            "unicode": "\\u1F31C",
            "name": "last quarter moon with face"
        },
        "full_moon_with_face": {
            "unescaped": "full_moon_with_face",
            "unicode": "\\u1F31D",
            "name": "full moon with face"
        },
        "sun_with_face": {
            "unescaped": "sun_with_face",
            "unicode": "\\u1F31E",
            "name": "sun with face"
        },
        "star2": {
            "unescaped": "star2",
            "unicode": "\\u1F31F",
            "name": "glowing star"
        },
        "stars": {
            "unescaped": "stars",
            "unicode": "\\u1F320",
            "name": "shooting star"
        },
        "chestnut": {
            "unescaped": "chestnut",
            "unicode": "\\u1F330",
            "name": "chestnut"
        },
        "seedling": {
            "unescaped": "seedling",
            "unicode": "\\u1F331",
            "name": "seedling"
        },
        "evergreen_tree": {
            "unescaped": "evergreen_tree",
            "unicode": "\\u1F332",
            "name": "evergreen tree"
        },
        "deciduous_tree": {
            "unescaped": "deciduous_tree",
            "unicode": "\\u1F333",
            "name": "deciduous tree"
        },
        "palm_tree": {
            "unescaped": "palm_tree",
            "unicode": "\\u1F334",
            "name": "palm tree"
        },
        "cactus": {
            "unescaped": "cactus",
            "unicode": "\\u1F335",
            "name": "cactus"
        },
        "tulip": {
            "unescaped": "tulip",
            "unicode": "\\u1F337",
            "name": "tulip"
        },
        "cherry_blossom": {
            "unescaped": "cherry_blossom",
            "unicode": "\\u1F338",
            "name": "cherry blossom"
        },
        "rose": {
            "unescaped": "rose",
            "unicode": "\\u1F339",
            "name": "rose"
        },
        "hibiscus": {
            "unescaped": "hibiscus",
            "unicode": "\\u1F33A",
            "name": "hibiscus"
        },
        "sunflower": {
            "unescaped": "sunflower",
            "unicode": "\\u1F33B",
            "name": "sunflower"
        },
        "blossom": {
            "unescaped": "blossom",
            "unicode": "\\u1F33C",
            "name": "blossom"
        },
        "corn": {
            "unescaped": "corn",
            "unicode": "\\u1F33D",
            "name": "ear of maize"
        },
        "ear_of_rice": {
            "unescaped": "ear_of_rice",
            "unicode": "\\u1F33E",
            "name": "ear of rice"
        },
        "herb": {
            "unescaped": "herb",
            "unicode": "\\u1F33F",
            "name": "herb"
        },
        "four_leaf_clover": {
            "unescaped": "four_leaf_clover",
            "unicode": "\\u1F340",
            "name": "four leaf clover"
        },
        "maple_leaf": {
            "unescaped": "maple_leaf",
            "unicode": "\\u1F341",
            "name": "maple leaf"
        },
        "fallen_leaf": {
            "unescaped": "fallen_leaf",
            "unicode": "\\u1F342",
            "name": "fallen leaf"
        },
        "leaves": {
            "unescaped": "leaves",
            "unicode": "\\u1F343",
            "name": "leaf fluttering in wind"
        },
        "mushroom": {
            "unescaped": "mushroom",
            "unicode": "\\u1F344",
            "name": "mushroom"
        },
        "tomato": {
            "unescaped": "tomato",
            "unicode": "\\u1F345",
            "name": "tomato"
        },
        "eggplant": {
            "unescaped": "eggplant",
            "unicode": "\\u1F346",
            "name": "aubergine"
        },
        "grapes": {
            "unescaped": "grapes",
            "unicode": "\\u1F347",
            "name": "grapes"
        },
        "melon": {
            "unescaped": "melon",
            "unicode": "\\u1F348",
            "name": "melon"
        },
        "watermelon": {
            "unescaped": "watermelon",
            "unicode": "\\u1F349",
            "name": "watermelon"
        },
        "tangerine": {
            "unescaped": "tangerine",
            "unicode": "\\u1F34A",
            "name": "tangerine"
        },
        "lemon": {
            "unescaped": "lemon",
            "unicode": "\\u1F34B",
            "name": "lemon"
        },
        "banana": {
            "unescaped": "banana",
            "unicode": "\\u1F34C",
            "name": "banana"
        },
        "pineapple": {
            "unescaped": "pineapple",
            "unicode": "\\u1F34D",
            "name": "pineapple"
        },
        "apple": {
            "unescaped": "apple",
            "unicode": "\\u1F34E",
            "name": "red apple"
        },
        "green_apple": {
            "unescaped": "green_apple",
            "unicode": "\\u1F34F",
            "name": "green apple"
        },
        "pear": {
            "unescaped": "pear",
            "unicode": "\\u1F350",
            "name": "pear"
        },
        "peach": {
            "unescaped": "peach",
            "unicode": "\\u1F351",
            "name": "peach"
        },
        "cherries": {
            "unescaped": "cherries",
            "unicode": "\\u1F352",
            "name": "cherries"
        },
        "strawberry": {
            "unescaped": "strawberry",
            "unicode": "\\u1F353",
            "name": "strawberry"
        },
        "hamburger": {
            "unescaped": "hamburger",
            "unicode": "\\u1F354",
            "name": "hamburger"
        },
        "pizza": {
            "unescaped": "pizza",
            "unicode": "\\u1F355",
            "name": "slice of pizza"
        },
        "meat_on_bone": {
            "unescaped": "meat_on_bone",
            "unicode": "\\u1F356",
            "name": "meat on bone"
        },
        "poultry_leg": {
            "unescaped": "poultry_leg",
            "unicode": "\\u1F357",
            "name": "poultry leg"
        },
        "rice_cracker": {
            "unescaped": "rice_cracker",
            "unicode": "\\u1F358",
            "name": "rice cracker"
        },
        "rice_ball": {
            "unescaped": "rice_ball",
            "unicode": "\\u1F359",
            "name": "rice ball"
        },
        "rice": {
            "unescaped": "rice",
            "unicode": "\\u1F35A",
            "name": "cooked rice"
        },
        "curry": {
            "unescaped": "curry",
            "unicode": "\\u1F35B",
            "name": "curry and rice"
        },
        "ramen": {
            "unescaped": "ramen",
            "unicode": "\\u1F35C",
            "name": "steaming bowl"
        },
        "spaghetti": {
            "unescaped": "spaghetti",
            "unicode": "\\u1F35D",
            "name": "spaghetti"
        },
        "bread": {
            "unescaped": "bread",
            "unicode": "\\u1F35E",
            "name": "bread"
        },
        "fries": {
            "unescaped": "fries",
            "unicode": "\\u1F35F",
            "name": "french fries"
        },
        "sweet_potato": {
            "unescaped": "sweet_potato",
            "unicode": "\\u1F360",
            "name": "roasted sweet potato"
        },
        "dango": {
            "unescaped": "dango",
            "unicode": "\\u1F361",
            "name": "dango"
        },
        "oden": {
            "unescaped": "oden",
            "unicode": "\\u1F362",
            "name": "oden"
        },
        "sushi": {
            "unescaped": "sushi",
            "unicode": "\\u1F363",
            "name": "sushi"
        },
        "fried_shrimp": {
            "unescaped": "fried_shrimp",
            "unicode": "\\u1F364",
            "name": "fried shrimp"
        },
        "fish_cake": {
            "unescaped": "fish_cake",
            "unicode": "\\u1F365",
            "name": "fish cake with swirl design"
        },
        "icecream": {
            "unescaped": "icecream",
            "unicode": "\\u1F366",
            "name": "soft ice cream"
        },
        "shaved_ice": {
            "unescaped": "shaved_ice",
            "unicode": "\\u1F367",
            "name": "shaved ice"
        },
        "ice_cream": {
            "unescaped": "ice_cream",
            "unicode": "\\u1F368",
            "name": "ice cream"
        },
        "doughnut": {
            "unescaped": "doughnut",
            "unicode": "\\u1F369",
            "name": "doughnut"
        },
        "cookie": {
            "unescaped": "cookie",
            "unicode": "\\u1F36A",
            "name": "cookie"
        },
        "chocolate_bar": {
            "unescaped": "chocolate_bar",
            "unicode": "\\u1F36B",
            "name": "chocolate bar"
        },
        "candy": {
            "unescaped": "candy",
            "unicode": "\\u1F36C",
            "name": "candy"
        },
        "lollipop": {
            "unescaped": "lollipop",
            "unicode": "\\u1F36D",
            "name": "lollipop"
        },
        "custard": {
            "unescaped": "custard",
            "unicode": "\\u1F36E",
            "name": "custard"
        },
        "honey_pot": {
            "unescaped": "honey_pot",
            "unicode": "\\u1F36F",
            "name": "honey pot"
        },
        "cake": {
            "unescaped": "cake",
            "unicode": "\\u1F370",
            "name": "shortcake"
        },
        "bento": {
            "unescaped": "bento",
            "unicode": "\\u1F371",
            "name": "bento box"
        },
        "stew": {
            "unescaped": "stew",
            "unicode": "\\u1F372",
            "name": "pot of food"
        },
        "egg": {
            "unescaped": "egg",
            "unicode": "\\u1F373",
            "name": "cooking"
        },
        "fork_and_knife": {
            "unescaped": "fork_and_knife",
            "unicode": "\\u1F374",
            "name": "fork and knife"
        },
        "tea": {
            "unescaped": "tea",
            "unicode": "\\u1F375",
            "name": "teacup without handle"
        },
        "sake": {
            "unescaped": "sake",
            "unicode": "\\u1F376",
            "name": "sake bottle and cup"
        },
        "wine_glass": {
            "unescaped": "wine_glass",
            "unicode": "\\u1F377",
            "name": "wine glass"
        },
        "cocktail": {
            "unescaped": "cocktail",
            "unicode": "\\u1F378",
            "name": "cocktail glass"
        },
        "tropical_drink": {
            "unescaped": "tropical_drink",
            "unicode": "\\u1F379",
            "name": "tropical drink"
        },
        "beer": {
            "unescaped": "beer",
            "unicode": "\\u1F37A",
            "name": "beer mug"
        },
        "beers": {
            "unescaped": "beers",
            "unicode": "\\u1F37B",
            "name": "clinking beer mugs"
        },
        "baby_bottle": {
            "unescaped": "baby_bottle",
            "unicode": "\\u1F37C",
            "name": "baby bottle"
        },
        "ribbon": {
            "unescaped": "ribbon",
            "unicode": "\\u1F380",
            "name": "ribbon"
        },
        "gift": {
            "unescaped": "gift",
            "unicode": "\\u1F381",
            "name": "wrapped present"
        },
        "birthday": {
            "unescaped": "birthday",
            "unicode": "\\u1F382",
            "name": "birthday cake"
        },
        "jack_o_lantern": {
            "unescaped": "jack_o_lantern",
            "unicode": "\\u1F383",
            "name": "jack-o-lantern"
        },
        "christmas_tree": {
            "unescaped": "christmas_tree",
            "unicode": "\\u1F384",
            "name": "christmas tree"
        },
        "santa": {
            "unescaped": "santa",
            "unicode": "\\u1F385",
            "name": "father christmas"
        },
        "fireworks": {
            "unescaped": "fireworks",
            "unicode": "\\u1F386",
            "name": "fireworks"
        },
        "sparkler": {
            "unescaped": "sparkler",
            "unicode": "\\u1F387",
            "name": "firework sparkler"
        },
        "balloon": {
            "unescaped": "balloon",
            "unicode": "\\u1F388",
            "name": "balloon"
        },
        "tada": {
            "unescaped": "tada",
            "unicode": "\\u1F389",
            "name": "party popper"
        },
        "confetti_ball": {
            "unescaped": "confetti_ball",
            "unicode": "\\u1F38A",
            "name": "confetti ball"
        },
        "tanabata_tree": {
            "unescaped": "tanabata_tree",
            "unicode": "\\u1F38B",
            "name": "tanabata tree"
        },
        "crossed_flags": {
            "unescaped": "crossed_flags",
            "unicode": "\\u1F38C",
            "name": "crossed flags"
        },
        "bamboo": {
            "unescaped": "bamboo",
            "unicode": "\\u1F38D",
            "name": "pine decoration"
        },
        "dolls": {
            "unescaped": "dolls",
            "unicode": "\\u1F38E",
            "name": "japanese dolls"
        },
        "flags": {
            "unescaped": "flags",
            "unicode": "\\u1F38F",
            "name": "carp streamer"
        },
        "wind_chime": {
            "unescaped": "wind_chime",
            "unicode": "\\u1F390",
            "name": "wind chime"
        },
        "rice_scene": {
            "unescaped": "rice_scene",
            "unicode": "\\u1F391",
            "name": "moon viewing ceremony"
        },
        "school_satchel": {
            "unescaped": "school_satchel",
            "unicode": "\\u1F392",
            "name": "school satchel"
        },
        "mortar_board": {
            "unescaped": "mortar_board",
            "unicode": "\\u1F393",
            "name": "graduation cap"
        },
        "carousel_horse": {
            "unescaped": "carousel_horse",
            "unicode": "\\u1F3A0",
            "name": "carousel horse"
        },
        "ferris_wheel": {
            "unescaped": "ferris_wheel",
            "unicode": "\\u1F3A1",
            "name": "ferris wheel"
        },
        "roller_coaster": {
            "unescaped": "roller_coaster",
            "unicode": "\\u1F3A2",
            "name": "roller coaster"
        },
        "fishing_pole_and_fish": {
            "unescaped": "fishing_pole_and_fish",
            "unicode": "\\u1F3A3",
            "name": "fishing pole and fish"
        },
        "microphone": {
            "unescaped": "microphone",
            "unicode": "\\u1F3A4",
            "name": "microphone"
        },
        "movie_camera": {
            "unescaped": "movie_camera",
            "unicode": "\\u1F3A5",
            "name": "movie camera"
        },
        "cinema": {
            "unescaped": "cinema",
            "unicode": "\\u1F3A6",
            "name": "cinema"
        },
        "headphones": {
            "unescaped": "headphones",
            "unicode": "\\u1F3A7",
            "name": "headphone"
        },
        "art": {
            "unescaped": "art",
            "unicode": "\\u1F3A8",
            "name": "artist palette"
        },
        "tophat": {
            "unescaped": "tophat",
            "unicode": "\\u1F3A9",
            "name": "top hat"
        },
        "circus_tent": {
            "unescaped": "circus_tent",
            "unicode": "\\u1F3AA",
            "name": "circus tent"
        },
        "ticket": {
            "unescaped": "ticket",
            "unicode": "\\u1F3AB",
            "name": "ticket"
        },
        "clapper": {
            "unescaped": "clapper",
            "unicode": "\\u1F3AC",
            "name": "clapper board"
        },
        "performing_arts": {
            "unescaped": "performing_arts",
            "unicode": "\\u1F3AD",
            "name": "performing arts"
        },
        "video_game": {
            "unescaped": "video_game",
            "unicode": "\\u1F3AE",
            "name": "video game"
        },
        "dart": {
            "unescaped": "dart",
            "unicode": "\\u1F3AF",
            "name": "direct hit"
        },
        "slot_machine": {
            "unescaped": "slot_machine",
            "unicode": "\\u1F3B0",
            "name": "slot machine"
        },
        "8ball": {
            "unescaped": "8ball",
            "unicode": "\\u1F3B1",
            "name": "billiards"
        },
        "game_die": {
            "unescaped": "game_die",
            "unicode": "\\u1F3B2",
            "name": "game die"
        },
        "bowling": {
            "unescaped": "bowling",
            "unicode": "\\u1F3B3",
            "name": "bowling"
        },
        "flower_playing_cards": {
            "unescaped": "flower_playing_cards",
            "unicode": "\\u1F3B4",
            "name": "flower playing cards"
        },
        "musical_note": {
            "unescaped": "musical_note",
            "unicode": "\\u1F3B5",
            "name": "musical note"
        },
        "notes": {
            "unescaped": "notes",
            "unicode": "\\u1F3B6",
            "name": "multiple musical notes"
        },
        "saxophone": {
            "unescaped": "saxophone",
            "unicode": "\\u1F3B7",
            "name": "saxophone"
        },
        "guitar": {
            "unescaped": "guitar",
            "unicode": "\\u1F3B8",
            "name": "guitar"
        },
        "musical_keyboard": {
            "unescaped": "musical_keyboard",
            "unicode": "\\u1F3B9",
            "name": "musical keyboard"
        },
        "trumpet": {
            "unescaped": "trumpet",
            "unicode": "\\u1F3BA",
            "name": "trumpet"
        },
        "violin": {
            "unescaped": "violin",
            "unicode": "\\u1F3BB",
            "name": "violin"
        },
        "musical_score": {
            "unescaped": "musical_score",
            "unicode": "\\u1F3BC",
            "name": "musical score"
        },
        "running_shirt_with_sash": {
            "unescaped": "running_shirt_with_sash",
            "unicode": "\\u1F3BD",
            "name": "running shirt with sash"
        },
        "tennis": {
            "unescaped": "tennis",
            "unicode": "\\u1F3BE",
            "name": "tennis racquet and ball"
        },
        "ski": {
            "unescaped": "ski",
            "unicode": "\\u1F3BF",
            "name": "ski and ski boot"
        },
        "basketball": {
            "unescaped": "basketball",
            "unicode": "\\u1F3C0",
            "name": "basketball and hoop"
        },
        "checkered_flag": {
            "unescaped": "checkered_flag",
            "unicode": "\\u1F3C1",
            "name": "chequered flag"
        },
        "snowboarder": {
            "unescaped": "snowboarder",
            "unicode": "\\u1F3C2",
            "name": "snowboarder"
        },
        "runner": {
            "unescaped": "runner",
            "unicode": "\\u1F3C3",
            "name": "runner"
        },
        "running": {
            "unescaped": "running",
            "unicode": "\\u1F3C3",
            "name": "runner"
        },
        "surfer": {
            "unescaped": "surfer",
            "unicode": "\\u1F3C4",
            "name": "surfer"
        },
        "trophy": {
            "unescaped": "trophy",
            "unicode": "\\u1F3C6",
            "name": "trophy"
        },
        "horse_racing": {
            "unescaped": "horse_racing",
            "unicode": "\\u1F3C7",
            "name": "horse racing"
        },
        "football": {
            "unescaped": "football",
            "unicode": "\\u1F3C8",
            "name": "american football"
        },
        "rugby_football": {
            "unescaped": "rugby_football",
            "unicode": "\\u1F3C9",
            "name": "rugby football"
        },
        "swimmer": {
            "unescaped": "swimmer",
            "unicode": "\\u1F3CA",
            "name": "swimmer"
        },
        "house": {
            "unescaped": "house",
            "unicode": "\\u1F3E0",
            "name": "house building"
        },
        "house_with_garden": {
            "unescaped": "house_with_garden",
            "unicode": "\\u1F3E1",
            "name": "house with garden"
        },
        "office": {
            "unescaped": "office",
            "unicode": "\\u1F3E2",
            "name": "office building"
        },
        "post_office": {
            "unescaped": "post_office",
            "unicode": "\\u1F3E3",
            "name": "japanese post office"
        },
        "european_post_office": {
            "unescaped": "european_post_office",
            "unicode": "\\u1F3E4",
            "name": "european post office"
        },
        "hospital": {
            "unescaped": "hospital",
            "unicode": "\\u1F3E5",
            "name": "hospital"
        },
        "bank": {
            "unescaped": "bank",
            "unicode": "\\u1F3E6",
            "name": "bank"
        },
        "atm": {
            "unescaped": "atm",
            "unicode": "\\u1F3E7",
            "name": "automated teller machine"
        },
        "hotel": {
            "unescaped": "hotel",
            "unicode": "\\u1F3E8",
            "name": "hotel"
        },
        "love_hotel": {
            "unescaped": "love_hotel",
            "unicode": "\\u1F3E9",
            "name": "love hotel"
        },
        "convenience_store": {
            "unescaped": "convenience_store",
            "unicode": "\\u1F3EA",
            "name": "convenience store"
        },
        "school": {
            "unescaped": "school",
            "unicode": "\\u1F3EB",
            "name": "school"
        },
        "department_store": {
            "unescaped": "department_store",
            "unicode": "\\u1F3EC",
            "name": "department store"
        },
        "factory": {
            "unescaped": "factory",
            "unicode": "\\u1F3ED",
            "name": "factory"
        },
        "izakaya_lantern": {
            "unescaped": "izakaya_lantern",
            "unicode": "\\u1F3EE",
            "name": "izakaya lantern"
        },
        "lantern": {
            "unescaped": "lantern",
            "unicode": "\\u1F3EE",
            "name": "izakaya lantern"
        },
        "japanese_castle": {
            "unescaped": "japanese_castle",
            "unicode": "\\u1F3EF",
            "name": "japanese castle"
        },
        "european_castle": {
            "unescaped": "european_castle",
            "unicode": "\\u1F3F0",
            "name": "european castle"
        },
        "skin\\-tone\\-2": {
            "unescaped": "skin-tone-2",
            "unicode": "\\u1F3FB",
            "name": "emoji modifier fitzpatrick type-1-2"
        },
        "skin\\-tone\\-3": {
            "unescaped": "skin-tone-3",
            "unicode": "\\u1F3FC",
            "name": "emoji modifier fitzpatrick type-3"
        },
        "skin\\-tone\\-4": {
            "unescaped": "skin-tone-4",
            "unicode": "\\u1F3FD",
            "name": "emoji modifier fitzpatrick type-4"
        },
        "skin\\-tone\\-5": {
            "unescaped": "skin-tone-5",
            "unicode": "\\u1F3FE",
            "name": "emoji modifier fitzpatrick type-5"
        },
        "skin\\-tone\\-6": {
            "unescaped": "skin-tone-6",
            "unicode": "\\u1F3FF",
            "name": "emoji modifier fitzpatrick type-6"
        },
        "rat": {
            "unescaped": "rat",
            "unicode": "\\u1F400",
            "name": "rat"
        },
        "mouse2": {
            "unescaped": "mouse2",
            "unicode": "\\u1F401",
            "name": "mouse"
        },
        "ox": {
            "unescaped": "ox",
            "unicode": "\\u1F402",
            "name": "ox"
        },
        "water_buffalo": {
            "unescaped": "water_buffalo",
            "unicode": "\\u1F403",
            "name": "water buffalo"
        },
        "cow2": {
            "unescaped": "cow2",
            "unicode": "\\u1F404",
            "name": "cow"
        },
        "tiger2": {
            "unescaped": "tiger2",
            "unicode": "\\u1F405",
            "name": "tiger"
        },
        "leopard": {
            "unescaped": "leopard",
            "unicode": "\\u1F406",
            "name": "leopard"
        },
        "rabbit2": {
            "unescaped": "rabbit2",
            "unicode": "\\u1F407",
            "name": "rabbit"
        },
        "cat2": {
            "unescaped": "cat2",
            "unicode": "\\u1F408",
            "name": "cat"
        },
        "dragon": {
            "unescaped": "dragon",
            "unicode": "\\u1F409",
            "name": "dragon"
        },
        "crocodile": {
            "unescaped": "crocodile",
            "unicode": "\\u1F40A",
            "name": "crocodile"
        },
        "whale2": {
            "unescaped": "whale2",
            "unicode": "\\u1F40B",
            "name": "whale"
        },
        "snail": {
            "unescaped": "snail",
            "unicode": "\\u1F40C",
            "name": "snail"
        },
        "snake": {
            "unescaped": "snake",
            "unicode": "\\u1F40D",
            "name": "snake"
        },
        "racehorse": {
            "unescaped": "racehorse",
            "unicode": "\\u1F40E",
            "name": "horse"
        },
        "ram": {
            "unescaped": "ram",
            "unicode": "\\u1F40F",
            "name": "ram"
        },
        "goat": {
            "unescaped": "goat",
            "unicode": "\\u1F410",
            "name": "goat"
        },
        "sheep": {
            "unescaped": "sheep",
            "unicode": "\\u1F411",
            "name": "sheep"
        },
        "monkey": {
            "unescaped": "monkey",
            "unicode": "\\u1F412",
            "name": "monkey"
        },
        "rooster": {
            "unescaped": "rooster",
            "unicode": "\\u1F413",
            "name": "rooster"
        },
        "chicken": {
            "unescaped": "chicken",
            "unicode": "\\u1F414",
            "name": "chicken"
        },
        "dog2": {
            "unescaped": "dog2",
            "unicode": "\\u1F415",
            "name": "dog"
        },
        "pig2": {
            "unescaped": "pig2",
            "unicode": "\\u1F416",
            "name": "pig"
        },
        "boar": {
            "unescaped": "boar",
            "unicode": "\\u1F417",
            "name": "boar"
        },
        "elephant": {
            "unescaped": "elephant",
            "unicode": "\\u1F418",
            "name": "elephant"
        },
        "octopus": {
            "unescaped": "octopus",
            "unicode": "\\u1F419",
            "name": "octopus"
        },
        "shell": {
            "unescaped": "shell",
            "unicode": "\\u1F41A",
            "name": "spiral shell"
        },
        "bug": {
            "unescaped": "bug",
            "unicode": "\\u1F41B",
            "name": "bug"
        },
        "ant": {
            "unescaped": "ant",
            "unicode": "\\u1F41C",
            "name": "ant"
        },
        "bee": {
            "unescaped": "bee",
            "unicode": "\\u1F41D",
            "name": "honeybee"
        },
        "honeybee": {
            "unescaped": "honeybee",
            "unicode": "\\u1F41D",
            "name": "honeybee"
        },
        "beetle": {
            "unescaped": "beetle",
            "unicode": "\\u1F41E",
            "name": "lady beetle"
        },
        "fish": {
            "unescaped": "fish",
            "unicode": "\\u1F41F",
            "name": "fish"
        },
        "tropical_fish": {
            "unescaped": "tropical_fish",
            "unicode": "\\u1F420",
            "name": "tropical fish"
        },
        "blowfish": {
            "unescaped": "blowfish",
            "unicode": "\\u1F421",
            "name": "blowfish"
        },
        "turtle": {
            "unescaped": "turtle",
            "unicode": "\\u1F422",
            "name": "turtle"
        },
        "hatching_chick": {
            "unescaped": "hatching_chick",
            "unicode": "\\u1F423",
            "name": "hatching chick"
        },
        "baby_chick": {
            "unescaped": "baby_chick",
            "unicode": "\\u1F424",
            "name": "baby chick"
        },
        "hatched_chick": {
            "unescaped": "hatched_chick",
            "unicode": "\\u1F425",
            "name": "front-facing baby chick"
        },
        "bird": {
            "unescaped": "bird",
            "unicode": "\\u1F426",
            "name": "bird"
        },
        "penguin": {
            "unescaped": "penguin",
            "unicode": "\\u1F427",
            "name": "penguin"
        },
        "koala": {
            "unescaped": "koala",
            "unicode": "\\u1F428",
            "name": "koala"
        },
        "poodle": {
            "unescaped": "poodle",
            "unicode": "\\u1F429",
            "name": "poodle"
        },
        "dromedary_camel": {
            "unescaped": "dromedary_camel",
            "unicode": "\\u1F42A",
            "name": "dromedary camel"
        },
        "camel": {
            "unescaped": "camel",
            "unicode": "\\u1F42B",
            "name": "bactrian camel"
        },
        "dolphin": {
            "unescaped": "dolphin",
            "unicode": "\\u1F42C",
            "name": "dolphin"
        },
        "flipper": {
            "unescaped": "flipper",
            "unicode": "\\u1F42C",
            "name": "dolphin"
        },
        "mouse": {
            "unescaped": "mouse",
            "unicode": "\\u1F42D",
            "name": "mouse face"
        },
        "cow": {
            "unescaped": "cow",
            "unicode": "\\u1F42E",
            "name": "cow face"
        },
        "tiger": {
            "unescaped": "tiger",
            "unicode": "\\u1F42F",
            "name": "tiger face"
        },
        "rabbit": {
            "unescaped": "rabbit",
            "unicode": "\\u1F430",
            "name": "rabbit face"
        },
        "cat": {
            "unescaped": "cat",
            "unicode": "\\u1F431",
            "name": "cat face"
        },
        "dragon_face": {
            "unescaped": "dragon_face",
            "unicode": "\\u1F432",
            "name": "dragon face"
        },
        "whale": {
            "unescaped": "whale",
            "unicode": "\\u1F433",
            "name": "spouting whale"
        },
        "horse": {
            "unescaped": "horse",
            "unicode": "\\u1F434",
            "name": "horse face"
        },
        "monkey_face": {
            "unescaped": "monkey_face",
            "unicode": "\\u1F435",
            "name": "monkey face"
        },
        "dog": {
            "unescaped": "dog",
            "unicode": "\\u1F436",
            "name": "dog face"
        },
        "pig": {
            "unescaped": "pig",
            "unicode": "\\u1F437",
            "name": "pig face"
        },
        "frog": {
            "unescaped": "frog",
            "unicode": "\\u1F438",
            "name": "frog face"
        },
        "hamster": {
            "unescaped": "hamster",
            "unicode": "\\u1F439",
            "name": "hamster face"
        },
        "wolf": {
            "unescaped": "wolf",
            "unicode": "\\u1F43A",
            "name": "wolf face"
        },
        "bear": {
            "unescaped": "bear",
            "unicode": "\\u1F43B",
            "name": "bear face"
        },
        "panda_face": {
            "unescaped": "panda_face",
            "unicode": "\\u1F43C",
            "name": "panda face"
        },
        "pig_nose": {
            "unescaped": "pig_nose",
            "unicode": "\\u1F43D",
            "name": "pig nose"
        },
        "feet": {
            "unescaped": "feet",
            "unicode": "\\u1F43E",
            "name": "paw prints"
        },
        "paw_prints": {
            "unescaped": "paw_prints",
            "unicode": "\\u1F43E",
            "name": "paw prints"
        },
        "eyes": {
            "unescaped": "eyes",
            "unicode": "\\u1F440",
            "name": "eyes"
        },
        "ear": {
            "unescaped": "ear",
            "unicode": "\\u1F442",
            "name": "ear"
        },
        "nose": {
            "unescaped": "nose",
            "unicode": "\\u1F443",
            "name": "nose"
        },
        "lips": {
            "unescaped": "lips",
            "unicode": "\\u1F444",
            "name": "mouth"
        },
        "tongue": {
            "unescaped": "tongue",
            "unicode": "\\u1F445",
            "name": "tongue"
        },
        "point_up_2": {
            "unescaped": "point_up_2",
            "unicode": "\\u1F446",
            "name": "white up pointing backhand index"
        },
        "point_down": {
            "unescaped": "point_down",
            "unicode": "\\u1F447",
            "name": "white down pointing backhand index"
        },
        "point_left": {
            "unescaped": "point_left",
            "unicode": "\\u1F448",
            "name": "white left pointing backhand index"
        },
        "point_right": {
            "unescaped": "point_right",
            "unicode": "\\u1F449",
            "name": "white right pointing backhand index"
        },
        "facepunch": {
            "unescaped": "facepunch",
            "unicode": "\\u1F44A",
            "name": "fisted hand sign"
        },
        "punch": {
            "unescaped": "punch",
            "unicode": "\\u1F44A",
            "name": "fisted hand sign"
        },
        "wave": {
            "unescaped": "wave",
            "unicode": "\\u1F44B",
            "name": "waving hand sign"
        },
        "ok_hand": {
            "unescaped": "ok_hand",
            "unicode": "\\u1F44C",
            "name": "ok hand sign"
        },
        "\\+1": {
            "unescaped": "+1",
            "unicode": "\\u1F44D",
            "name": "thumbs up sign"
        },
        "thumbsup": {
            "unescaped": "thumbsup",
            "unicode": "\\u1F44D",
            "name": "thumbs up sign"
        },
        "\\-1": {
            "unescaped": "-1",
            "unicode": "\\u1F44E",
            "name": "thumbs down sign"
        },
        "thumbsdown": {
            "unescaped": "thumbsdown",
            "unicode": "\\u1F44E",
            "name": "thumbs down sign"
        },
        "clap": {
            "unescaped": "clap",
            "unicode": "\\u1F44F",
            "name": "clapping hands sign"
        },
        "open_hands": {
            "unescaped": "open_hands",
            "unicode": "\\u1F450",
            "name": "open hands sign"
        },
        "crown": {
            "unescaped": "crown",
            "unicode": "\\u1F451",
            "name": "crown"
        },
        "womans_hat": {
            "unescaped": "womans_hat",
            "unicode": "\\u1F452",
            "name": "womans hat"
        },
        "eyeglasses": {
            "unescaped": "eyeglasses",
            "unicode": "\\u1F453",
            "name": "eyeglasses"
        },
        "necktie": {
            "unescaped": "necktie",
            "unicode": "\\u1F454",
            "name": "necktie"
        },
        "shirt": {
            "unescaped": "shirt",
            "unicode": "\\u1F455",
            "name": "t-shirt"
        },
        "tshirt": {
            "unescaped": "tshirt",
            "unicode": "\\u1F455",
            "name": "t-shirt"
        },
        "jeans": {
            "unescaped": "jeans",
            "unicode": "\\u1F456",
            "name": "jeans"
        },
        "dress": {
            "unescaped": "dress",
            "unicode": "\\u1F457",
            "name": "dress"
        },
        "kimono": {
            "unescaped": "kimono",
            "unicode": "\\u1F458",
            "name": "kimono"
        },
        "bikini": {
            "unescaped": "bikini",
            "unicode": "\\u1F459",
            "name": "bikini"
        },
        "womans_clothes": {
            "unescaped": "womans_clothes",
            "unicode": "\\u1F45A",
            "name": "womans clothes"
        },
        "purse": {
            "unescaped": "purse",
            "unicode": "\\u1F45B",
            "name": "purse"
        },
        "handbag": {
            "unescaped": "handbag",
            "unicode": "\\u1F45C",
            "name": "handbag"
        },
        "pouch": {
            "unescaped": "pouch",
            "unicode": "\\u1F45D",
            "name": "pouch"
        },
        "mans_shoe": {
            "unescaped": "mans_shoe",
            "unicode": "\\u1F45E",
            "name": "mans shoe"
        },
        "shoe": {
            "unescaped": "shoe",
            "unicode": "\\u1F45E",
            "name": "mans shoe"
        },
        "athletic_shoe": {
            "unescaped": "athletic_shoe",
            "unicode": "\\u1F45F",
            "name": "athletic shoe"
        },
        "high_heel": {
            "unescaped": "high_heel",
            "unicode": "\\u1F460",
            "name": "high-heeled shoe"
        },
        "sandal": {
            "unescaped": "sandal",
            "unicode": "\\u1F461",
            "name": "womans sandal"
        },
        "boot": {
            "unescaped": "boot",
            "unicode": "\\u1F462",
            "name": "womans boots"
        },
        "footprints": {
            "unescaped": "footprints",
            "unicode": "\\u1F463",
            "name": "footprints"
        },
        "bust_in_silhouette": {
            "unescaped": "bust_in_silhouette",
            "unicode": "\\u1F464",
            "name": "bust in silhouette"
        },
        "busts_in_silhouette": {
            "unescaped": "busts_in_silhouette",
            "unicode": "\\u1F465",
            "name": "busts in silhouette"
        },
        "boy": {
            "unescaped": "boy",
            "unicode": "\\u1F466",
            "name": "boy"
        },
        "girl": {
            "unescaped": "girl",
            "unicode": "\\u1F467",
            "name": "girl"
        },
        "man": {
            "unescaped": "man",
            "unicode": "\\u1F468",
            "name": "man"
        },
        "woman": {
            "unescaped": "woman",
            "unicode": "\\u1F469",
            "name": "woman"
        },
        "family": {
            "unescaped": "family",
            "unicode": "\\u1F46A",
            "name": "family"
        },
        "couple": {
            "unescaped": "couple",
            "unicode": "\\u1F46B",
            "name": "man and woman holding hands"
        },
        "two_men_holding_hands": {
            "unescaped": "two_men_holding_hands",
            "unicode": "\\u1F46C",
            "name": "two men holding hands"
        },
        "two_women_holding_hands": {
            "unescaped": "two_women_holding_hands",
            "unicode": "\\u1F46D",
            "name": "two women holding hands"
        },
        "cop": {
            "unescaped": "cop",
            "unicode": "\\u1F46E",
            "name": "police officer"
        },
        "dancers": {
            "unescaped": "dancers",
            "unicode": "\\u1F46F",
            "name": "woman with bunny ears"
        },
        "bride_with_veil": {
            "unescaped": "bride_with_veil",
            "unicode": "\\u1F470",
            "name": "bride with veil"
        },
        "person_with_blond_hair": {
            "unescaped": "person_with_blond_hair",
            "unicode": "\\u1F471",
            "name": "person with blond hair"
        },
        "man_with_gua_pi_mao": {
            "unescaped": "man_with_gua_pi_mao",
            "unicode": "\\u1F472",
            "name": "man with gua pi mao"
        },
        "man_with_turban": {
            "unescaped": "man_with_turban",
            "unicode": "\\u1F473",
            "name": "man with turban"
        },
        "older_man": {
            "unescaped": "older_man",
            "unicode": "\\u1F474",
            "name": "older man"
        },
        "older_woman": {
            "unescaped": "older_woman",
            "unicode": "\\u1F475",
            "name": "older woman"
        },
        "baby": {
            "unescaped": "baby",
            "unicode": "\\u1F476",
            "name": "baby"
        },
        "construction_worker": {
            "unescaped": "construction_worker",
            "unicode": "\\u1F477",
            "name": "construction worker"
        },
        "princess": {
            "unescaped": "princess",
            "unicode": "\\u1F478",
            "name": "princess"
        },
        "japanese_ogre": {
            "unescaped": "japanese_ogre",
            "unicode": "\\u1F479",
            "name": "japanese ogre"
        },
        "japanese_goblin": {
            "unescaped": "japanese_goblin",
            "unicode": "\\u1F47A",
            "name": "japanese goblin"
        },
        "ghost": {
            "unescaped": "ghost",
            "unicode": "\\u1F47B",
            "name": "ghost"
        },
        "angel": {
            "unescaped": "angel",
            "unicode": "\\u1F47C",
            "name": "baby angel"
        },
        "alien": {
            "unescaped": "alien",
            "unicode": "\\u1F47D",
            "name": "extraterrestrial alien"
        },
        "space_invader": {
            "unescaped": "space_invader",
            "unicode": "\\u1F47E",
            "name": "alien monster"
        },
        "imp": {
            "unescaped": "imp",
            "unicode": "\\u1F47F",
            "name": "imp"
        },
        "skull": {
            "unescaped": "skull",
            "unicode": "\\u1F480",
            "name": "skull"
        },
        "information_desk_person": {
            "unescaped": "information_desk_person",
            "unicode": "\\u1F481",
            "name": "information desk person"
        },
        "guardsman": {
            "unescaped": "guardsman",
            "unicode": "\\u1F482",
            "name": "guardsman"
        },
        "dancer": {
            "unescaped": "dancer",
            "unicode": "\\u1F483",
            "name": "dancer"
        },
        "lipstick": {
            "unescaped": "lipstick",
            "unicode": "\\u1F484",
            "name": "lipstick"
        },
        "nail_care": {
            "unescaped": "nail_care",
            "unicode": "\\u1F485",
            "name": "nail polish"
        },
        "massage": {
            "unescaped": "massage",
            "unicode": "\\u1F486",
            "name": "face massage"
        },
        "haircut": {
            "unescaped": "haircut",
            "unicode": "\\u1F487",
            "name": "haircut"
        },
        "barber": {
            "unescaped": "barber",
            "unicode": "\\u1F488",
            "name": "barber pole"
        },
        "syringe": {
            "unescaped": "syringe",
            "unicode": "\\u1F489",
            "name": "syringe"
        },
        "pill": {
            "unescaped": "pill",
            "unicode": "\\u1F48A",
            "name": "pill"
        },
        "kiss": {
            "unescaped": "kiss",
            "unicode": "\\u1F48B",
            "name": "kiss mark"
        },
        "love_letter": {
            "unescaped": "love_letter",
            "unicode": "\\u1F48C",
            "name": "love letter"
        },
        "ring": {
            "unescaped": "ring",
            "unicode": "\\u1F48D",
            "name": "ring"
        },
        "gem": {
            "unescaped": "gem",
            "unicode": "\\u1F48E",
            "name": "gem stone"
        },
        "couplekiss": {
            "unescaped": "couplekiss",
            "unicode": "\\u1F48F",
            "name": "kiss"
        },
        "bouquet": {
            "unescaped": "bouquet",
            "unicode": "\\u1F490",
            "name": "bouquet"
        },
        "couple_with_heart": {
            "unescaped": "couple_with_heart",
            "unicode": "\\u1F491",
            "name": "couple with heart"
        },
        "wedding": {
            "unescaped": "wedding",
            "unicode": "\\u1F492",
            "name": "wedding"
        },
        "heartbeat": {
            "unescaped": "heartbeat",
            "unicode": "\\u1F493",
            "name": "beating heart"
        },
        "broken_heart": {
            "unescaped": "broken_heart",
            "unicode": "\\u1F494",
            "name": "broken heart"
        },
        "two_hearts": {
            "unescaped": "two_hearts",
            "unicode": "\\u1F495",
            "name": "two hearts"
        },
        "sparkling_heart": {
            "unescaped": "sparkling_heart",
            "unicode": "\\u1F496",
            "name": "sparkling heart"
        },
        "heartpulse": {
            "unescaped": "heartpulse",
            "unicode": "\\u1F497",
            "name": "growing heart"
        },
        "cupid": {
            "unescaped": "cupid",
            "unicode": "\\u1F498",
            "name": "heart with arrow"
        },
        "blue_heart": {
            "unescaped": "blue_heart",
            "unicode": "\\u1F499",
            "name": "blue heart"
        },
        "green_heart": {
            "unescaped": "green_heart",
            "unicode": "\\u1F49A",
            "name": "green heart"
        },
        "yellow_heart": {
            "unescaped": "yellow_heart",
            "unicode": "\\u1F49B",
            "name": "yellow heart"
        },
        "purple_heart": {
            "unescaped": "purple_heart",
            "unicode": "\\u1F49C",
            "name": "purple heart"
        },
        "gift_heart": {
            "unescaped": "gift_heart",
            "unicode": "\\u1F49D",
            "name": "heart with ribbon"
        },
        "revolving_hearts": {
            "unescaped": "revolving_hearts",
            "unicode": "\\u1F49E",
            "name": "revolving hearts"
        },
        "heart_decoration": {
            "unescaped": "heart_decoration",
            "unicode": "\\u1F49F",
            "name": "heart decoration"
        },
        "diamond_shape_with_a_dot_inside": {
            "unescaped": "diamond_shape_with_a_dot_inside",
            "unicode": "\\u1F4A0",
            "name": "diamond shape with a dot inside"
        },
        "bulb": {
            "unescaped": "bulb",
            "unicode": "\\u1F4A1",
            "name": "electric light bulb"
        },
        "anger": {
            "unescaped": "anger",
            "unicode": "\\u1F4A2",
            "name": "anger symbol"
        },
        "bomb": {
            "unescaped": "bomb",
            "unicode": "\\u1F4A3",
            "name": "bomb"
        },
        "zzz": {
            "unescaped": "zzz",
            "unicode": "\\u1F4A4",
            "name": "sleeping symbol"
        },
        "boom": {
            "unescaped": "boom",
            "unicode": "\\u1F4A5",
            "name": "collision symbol"
        },
        "collision": {
            "unescaped": "collision",
            "unicode": "\\u1F4A5",
            "name": "collision symbol"
        },
        "sweat_drops": {
            "unescaped": "sweat_drops",
            "unicode": "\\u1F4A6",
            "name": "splashing sweat symbol"
        },
        "droplet": {
            "unescaped": "droplet",
            "unicode": "\\u1F4A7",
            "name": "droplet"
        },
        "dash": {
            "unescaped": "dash",
            "unicode": "\\u1F4A8",
            "name": "dash symbol"
        },
        "hankey": {
            "unescaped": "hankey",
            "unicode": "\\u1F4A9",
            "name": "pile of poo"
        },
        "poop": {
            "unescaped": "poop",
            "unicode": "\\u1F4A9",
            "name": "pile of poo"
        },
        "shit": {
            "unescaped": "shit",
            "unicode": "\\u1F4A9",
            "name": "pile of poo"
        },
        "muscle": {
            "unescaped": "muscle",
            "unicode": "\\u1F4AA",
            "name": "flexed biceps"
        },
        "dizzy": {
            "unescaped": "dizzy",
            "unicode": "\\u1F4AB",
            "name": "dizzy symbol"
        },
        "speech_balloon": {
            "unescaped": "speech_balloon",
            "unicode": "\\u1F4AC",
            "name": "speech balloon"
        },
        "thought_balloon": {
            "unescaped": "thought_balloon",
            "unicode": "\\u1F4AD",
            "name": "thought balloon"
        },
        "white_flower": {
            "unescaped": "white_flower",
            "unicode": "\\u1F4AE",
            "name": "white flower"
        },
        "moneybag": {
            "unescaped": "moneybag",
            "unicode": "\\u1F4B0",
            "name": "money bag"
        },
        "currency_exchange": {
            "unescaped": "currency_exchange",
            "unicode": "\\u1F4B1",
            "name": "currency exchange"
        },
        "heavy_dollar_sign": {
            "unescaped": "heavy_dollar_sign",
            "unicode": "\\u1F4B2",
            "name": "heavy dollar sign"
        },
        "credit_card": {
            "unescaped": "credit_card",
            "unicode": "\\u1F4B3",
            "name": "credit card"
        },
        "yen": {
            "unescaped": "yen",
            "unicode": "\\u1F4B4",
            "name": "banknote with yen sign"
        },
        "dollar": {
            "unescaped": "dollar",
            "unicode": "\\u1F4B5",
            "name": "banknote with dollar sign"
        },
        "euro": {
            "unescaped": "euro",
            "unicode": "\\u1F4B6",
            "name": "banknote with euro sign"
        },
        "pound": {
            "unescaped": "pound",
            "unicode": "\\u1F4B7",
            "name": "banknote with pound sign"
        },
        "money_with_wings": {
            "unescaped": "money_with_wings",
            "unicode": "\\u1F4B8",
            "name": "money with wings"
        },
        "chart": {
            "unescaped": "chart",
            "unicode": "\\u1F4B9",
            "name": "chart with upwards trend and yen sign"
        },
        "seat": {
            "unescaped": "seat",
            "unicode": "\\u1F4BA",
            "name": "seat"
        },
        "computer": {
            "unescaped": "computer",
            "unicode": "\\u1F4BB",
            "name": "personal computer"
        },
        "briefcase": {
            "unescaped": "briefcase",
            "unicode": "\\u1F4BC",
            "name": "briefcase"
        },
        "minidisc": {
            "unescaped": "minidisc",
            "unicode": "\\u1F4BD",
            "name": "minidisc"
        },
        "floppy_disk": {
            "unescaped": "floppy_disk",
            "unicode": "\\u1F4BE",
            "name": "floppy disk"
        },
        "cd": {
            "unescaped": "cd",
            "unicode": "\\u1F4BF",
            "name": "optical disc"
        },
        "dvd": {
            "unescaped": "dvd",
            "unicode": "\\u1F4C0",
            "name": "dvd"
        },
        "file_folder": {
            "unescaped": "file_folder",
            "unicode": "\\u1F4C1",
            "name": "file folder"
        },
        "open_file_folder": {
            "unescaped": "open_file_folder",
            "unicode": "\\u1F4C2",
            "name": "open file folder"
        },
        "page_with_curl": {
            "unescaped": "page_with_curl",
            "unicode": "\\u1F4C3",
            "name": "page with curl"
        },
        "page_facing_up": {
            "unescaped": "page_facing_up",
            "unicode": "\\u1F4C4",
            "name": "page facing up"
        },
        "date": {
            "unescaped": "date",
            "unicode": "\\u1F4C5",
            "name": "calendar"
        },
        "calendar": {
            "unescaped": "calendar",
            "unicode": "\\u1F4C6",
            "name": "tear-off calendar"
        },
        "card_index": {
            "unescaped": "card_index",
            "unicode": "\\u1F4C7",
            "name": "card index"
        },
        "chart_with_upwards_trend": {
            "unescaped": "chart_with_upwards_trend",
            "unicode": "\\u1F4C8",
            "name": "chart with upwards trend"
        },
        "chart_with_downwards_trend": {
            "unescaped": "chart_with_downwards_trend",
            "unicode": "\\u1F4C9",
            "name": "chart with downwards trend"
        },
        "bar_chart": {
            "unescaped": "bar_chart",
            "unicode": "\\u1F4CA",
            "name": "bar chart"
        },
        "clipboard": {
            "unescaped": "clipboard",
            "unicode": "\\u1F4CB",
            "name": "clipboard"
        },
        "pushpin": {
            "unescaped": "pushpin",
            "unicode": "\\u1F4CC",
            "name": "pushpin"
        },
        "round_pushpin": {
            "unescaped": "round_pushpin",
            "unicode": "\\u1F4CD",
            "name": "round pushpin"
        },
        "paperclip": {
            "unescaped": "paperclip",
            "unicode": "\\u1F4CE",
            "name": "paperclip"
        },
        "straight_ruler": {
            "unescaped": "straight_ruler",
            "unicode": "\\u1F4CF",
            "name": "straight ruler"
        },
        "triangular_ruler": {
            "unescaped": "triangular_ruler",
            "unicode": "\\u1F4D0",
            "name": "triangular ruler"
        },
        "bookmark_tabs": {
            "unescaped": "bookmark_tabs",
            "unicode": "\\u1F4D1",
            "name": "bookmark tabs"
        },
        "ledger": {
            "unescaped": "ledger",
            "unicode": "\\u1F4D2",
            "name": "ledger"
        },
        "notebook": {
            "unescaped": "notebook",
            "unicode": "\\u1F4D3",
            "name": "notebook"
        },
        "notebook_with_decorative_cover": {
            "unescaped": "notebook_with_decorative_cover",
            "unicode": "\\u1F4D4",
            "name": "notebook with decorative cover"
        },
        "closed_book": {
            "unescaped": "closed_book",
            "unicode": "\\u1F4D5",
            "name": "closed book"
        },
        "book": {
            "unescaped": "book",
            "unicode": "\\u1F4D6",
            "name": "open book"
        },
        "open_book": {
            "unescaped": "open_book",
            "unicode": "\\u1F4D6",
            "name": "open book"
        },
        "green_book": {
            "unescaped": "green_book",
            "unicode": "\\u1F4D7",
            "name": "green book"
        },
        "blue_book": {
            "unescaped": "blue_book",
            "unicode": "\\u1F4D8",
            "name": "blue book"
        },
        "orange_book": {
            "unescaped": "orange_book",
            "unicode": "\\u1F4D9",
            "name": "orange book"
        },
        "books": {
            "unescaped": "books",
            "unicode": "\\u1F4DA",
            "name": "books"
        },
        "name_badge": {
            "unescaped": "name_badge",
            "unicode": "\\u1F4DB",
            "name": "name badge"
        },
        "scroll": {
            "unescaped": "scroll",
            "unicode": "\\u1F4DC",
            "name": "scroll"
        },
        "memo": {
            "unescaped": "memo",
            "unicode": "\\u1F4DD",
            "name": "memo"
        },
        "pencil": {
            "unescaped": "pencil",
            "unicode": "\\u1F4DD",
            "name": "memo"
        },
        "telephone_receiver": {
            "unescaped": "telephone_receiver",
            "unicode": "\\u1F4DE",
            "name": "telephone receiver"
        },
        "pager": {
            "unescaped": "pager",
            "unicode": "\\u1F4DF",
            "name": "pager"
        },
        "fax": {
            "unescaped": "fax",
            "unicode": "\\u1F4E0",
            "name": "fax machine"
        },
        "satellite": {
            "unescaped": "satellite",
            "unicode": "\\u1F4E1",
            "name": "satellite antenna"
        },
        "loudspeaker": {
            "unescaped": "loudspeaker",
            "unicode": "\\u1F4E2",
            "name": "public address loudspeaker"
        },
        "mega": {
            "unescaped": "mega",
            "unicode": "\\u1F4E3",
            "name": "cheering megaphone"
        },
        "outbox_tray": {
            "unescaped": "outbox_tray",
            "unicode": "\\u1F4E4",
            "name": "outbox tray"
        },
        "inbox_tray": {
            "unescaped": "inbox_tray",
            "unicode": "\\u1F4E5",
            "name": "inbox tray"
        },
        "package": {
            "unescaped": "package",
            "unicode": "\\u1F4E6",
            "name": "package"
        },
        "e\\-mail": {
            "unescaped": "e-mail",
            "unicode": "\\u1F4E7",
            "name": "e-mail symbol"
        },
        "incoming_envelope": {
            "unescaped": "incoming_envelope",
            "unicode": "\\u1F4E8",
            "name": "incoming envelope"
        },
        "envelope_with_arrow": {
            "unescaped": "envelope_with_arrow",
            "unicode": "\\u1F4E9",
            "name": "envelope with downwards arrow above"
        },
        "mailbox_closed": {
            "unescaped": "mailbox_closed",
            "unicode": "\\u1F4EA",
            "name": "closed mailbox with lowered flag"
        },
        "mailbox": {
            "unescaped": "mailbox",
            "unicode": "\\u1F4EB",
            "name": "closed mailbox with raised flag"
        },
        "mailbox_with_mail": {
            "unescaped": "mailbox_with_mail",
            "unicode": "\\u1F4EC",
            "name": "open mailbox with raised flag"
        },
        "mailbox_with_no_mail": {
            "unescaped": "mailbox_with_no_mail",
            "unicode": "\\u1F4ED",
            "name": "open mailbox with lowered flag"
        },
        "postbox": {
            "unescaped": "postbox",
            "unicode": "\\u1F4EE",
            "name": "postbox"
        },
        "postal_horn": {
            "unescaped": "postal_horn",
            "unicode": "\\u1F4EF",
            "name": "postal horn"
        },
        "newspaper": {
            "unescaped": "newspaper",
            "unicode": "\\u1F4F0",
            "name": "newspaper"
        },
        "iphone": {
            "unescaped": "iphone",
            "unicode": "\\u1F4F1",
            "name": "mobile phone"
        },
        "calling": {
            "unescaped": "calling",
            "unicode": "\\u1F4F2",
            "name": "mobile phone with rightwards arrow at left"
        },
        "vibration_mode": {
            "unescaped": "vibration_mode",
            "unicode": "\\u1F4F3",
            "name": "vibration mode"
        },
        "mobile_phone_off": {
            "unescaped": "mobile_phone_off",
            "unicode": "\\u1F4F4",
            "name": "mobile phone off"
        },
        "no_mobile_phones": {
            "unescaped": "no_mobile_phones",
            "unicode": "\\u1F4F5",
            "name": "no mobile phones"
        },
        "signal_strength": {
            "unescaped": "signal_strength",
            "unicode": "\\u1F4F6",
            "name": "antenna with bars"
        },
        "camera": {
            "unescaped": "camera",
            "unicode": "\\u1F4F7",
            "name": "camera"
        },
        "video_camera": {
            "unescaped": "video_camera",
            "unicode": "\\u1F4F9",
            "name": "video camera"
        },
        "tv": {
            "unescaped": "tv",
            "unicode": "\\u1F4FA",
            "name": "television"
        },
        "radio": {
            "unescaped": "radio",
            "unicode": "\\u1F4FB",
            "name": "radio"
        },
        "vhs": {
            "unescaped": "vhs",
            "unicode": "\\u1F4FC",
            "name": "videocassette"
        },
        "twisted_rightwards_arrows": {
            "unescaped": "twisted_rightwards_arrows",
            "unicode": "\\u1F500",
            "name": "twisted rightwards arrows"
        },
        "repeat": {
            "unescaped": "repeat",
            "unicode": "\\u1F501",
            "name": "clockwise rightwards and leftwards open circle arrows"
        },
        "repeat_one": {
            "unescaped": "repeat_one",
            "unicode": "\\u1F502",
            "name": "clockwise rightwards and leftwards open circle arrows with circled one overlay"
        },
        "arrows_clockwise": {
            "unescaped": "arrows_clockwise",
            "unicode": "\\u1F503",
            "name": "clockwise downwards and upwards open circle arrows"
        },
        "arrows_counterclockwise": {
            "unescaped": "arrows_counterclockwise",
            "unicode": "\\u1F504",
            "name": "anticlockwise downwards and upwards open circle arrows"
        },
        "low_brightness": {
            "unescaped": "low_brightness",
            "unicode": "\\u1F505",
            "name": "low brightness symbol"
        },
        "high_brightness": {
            "unescaped": "high_brightness",
            "unicode": "\\u1F506",
            "name": "high brightness symbol"
        },
        "mute": {
            "unescaped": "mute",
            "unicode": "\\u1F507",
            "name": "speaker with cancellation stroke"
        },
        "speaker": {
            "unescaped": "speaker",
            "unicode": "\\u1F508",
            "name": "speaker"
        },
        "sound": {
            "unescaped": "sound",
            "unicode": "\\u1F509",
            "name": "speaker with one sound wave"
        },
        "loud_sound": {
            "unescaped": "loud_sound",
            "unicode": "\\u1F50A",
            "name": "speaker with three sound waves"
        },
        "battery": {
            "unescaped": "battery",
            "unicode": "\\u1F50B",
            "name": "battery"
        },
        "electric_plug": {
            "unescaped": "electric_plug",
            "unicode": "\\u1F50C",
            "name": "electric plug"
        },
        "mag": {
            "unescaped": "mag",
            "unicode": "\\u1F50D",
            "name": "left-pointing magnifying glass"
        },
        "mag_right": {
            "unescaped": "mag_right",
            "unicode": "\\u1F50E",
            "name": "right-pointing magnifying glass"
        },
        "lock_with_ink_pen": {
            "unescaped": "lock_with_ink_pen",
            "unicode": "\\u1F50F",
            "name": "lock with ink pen"
        },
        "closed_lock_with_key": {
            "unescaped": "closed_lock_with_key",
            "unicode": "\\u1F510",
            "name": "closed lock with key"
        },
        "key": {
            "unescaped": "key",
            "unicode": "\\u1F511",
            "name": "key"
        },
        "lock": {
            "unescaped": "lock",
            "unicode": "\\u1F512",
            "name": "lock"
        },
        "unlock": {
            "unescaped": "unlock",
            "unicode": "\\u1F513",
            "name": "open lock"
        },
        "bell": {
            "unescaped": "bell",
            "unicode": "\\u1F514",
            "name": "bell"
        },
        "no_bell": {
            "unescaped": "no_bell",
            "unicode": "\\u1F515",
            "name": "bell with cancellation stroke"
        },
        "bookmark": {
            "unescaped": "bookmark",
            "unicode": "\\u1F516",
            "name": "bookmark"
        },
        "link": {
            "unescaped": "link",
            "unicode": "\\u1F517",
            "name": "link symbol"
        },
        "radio_button": {
            "unescaped": "radio_button",
            "unicode": "\\u1F518",
            "name": "radio button"
        },
        "back": {
            "unescaped": "back",
            "unicode": "\\u1F519",
            "name": "back with leftwards arrow above"
        },
        "end": {
            "unescaped": "end",
            "unicode": "\\u1F51A",
            "name": "end with leftwards arrow above"
        },
        "on": {
            "unescaped": "on",
            "unicode": "\\u1F51B",
            "name": "on with exclamation mark with left right arrow above"
        },
        "soon": {
            "unescaped": "soon",
            "unicode": "\\u1F51C",
            "name": "soon with rightwards arrow above"
        },
        "top": {
            "unescaped": "top",
            "unicode": "\\u1F51D",
            "name": "top with upwards arrow above"
        },
        "underage": {
            "unescaped": "underage",
            "unicode": "\\u1F51E",
            "name": "no one under eighteen symbol"
        },
        "keycap_ten": {
            "unescaped": "keycap_ten",
            "unicode": "\\u1F51F",
            "name": "keycap ten"
        },
        "capital_abcd": {
            "unescaped": "capital_abcd",
            "unicode": "\\u1F520",
            "name": "input symbol for latin capital letters"
        },
        "abcd": {
            "unescaped": "abcd",
            "unicode": "\\u1F521",
            "name": "input symbol for latin small letters"
        },
        "symbols": {
            "unescaped": "symbols",
            "unicode": "\\u1F523",
            "name": "input symbol for symbols"
        },
        "abc": {
            "unescaped": "abc",
            "unicode": "\\u1F524",
            "name": "input symbol for latin letters"
        },
        "fire": {
            "unescaped": "fire",
            "unicode": "\\u1F525",
            "name": "fire"
        },
        "flashlight": {
            "unescaped": "flashlight",
            "unicode": "\\u1F526",
            "name": "electric torch"
        },
        "wrench": {
            "unescaped": "wrench",
            "unicode": "\\u1F527",
            "name": "wrench"
        },
        "hammer": {
            "unescaped": "hammer",
            "unicode": "\\u1F528",
            "name": "hammer"
        },
        "nut_and_bolt": {
            "unescaped": "nut_and_bolt",
            "unicode": "\\u1F529",
            "name": "nut and bolt"
        },
        "hocho": {
            "unescaped": "hocho",
            "unicode": "\\u1F52A",
            "name": "hocho"
        },
        "knife": {
            "unescaped": "knife",
            "unicode": "\\u1F52A",
            "name": "hocho"
        },
        "gun": {
            "unescaped": "gun",
            "unicode": "\\u1F52B",
            "name": "pistol"
        },
        "microscope": {
            "unescaped": "microscope",
            "unicode": "\\u1F52C",
            "name": "microscope"
        },
        "telescope": {
            "unescaped": "telescope",
            "unicode": "\\u1F52D",
            "name": "telescope"
        },
        "crystal_ball": {
            "unescaped": "crystal_ball",
            "unicode": "\\u1F52E",
            "name": "crystal ball"
        },
        "six_pointed_star": {
            "unescaped": "six_pointed_star",
            "unicode": "\\u1F52F",
            "name": "six pointed star with middle dot"
        },
        "beginner": {
            "unescaped": "beginner",
            "unicode": "\\u1F530",
            "name": "japanese symbol for beginner"
        },
        "trident": {
            "unescaped": "trident",
            "unicode": "\\u1F531",
            "name": "trident emblem"
        },
        "black_square_button": {
            "unescaped": "black_square_button",
            "unicode": "\\u1F532",
            "name": "black square button"
        },
        "white_square_button": {
            "unescaped": "white_square_button",
            "unicode": "\\u1F533",
            "name": "white square button"
        },
        "red_circle": {
            "unescaped": "red_circle",
            "unicode": "\\u1F534",
            "name": "large red circle"
        },
        "large_blue_circle": {
            "unescaped": "large_blue_circle",
            "unicode": "\\u1F535",
            "name": "large blue circle"
        },
        "large_orange_diamond": {
            "unescaped": "large_orange_diamond",
            "unicode": "\\u1F536",
            "name": "large orange diamond"
        },
        "large_blue_diamond": {
            "unescaped": "large_blue_diamond",
            "unicode": "\\u1F537",
            "name": "large blue diamond"
        },
        "small_orange_diamond": {
            "unescaped": "small_orange_diamond",
            "unicode": "\\u1F538",
            "name": "small orange diamond"
        },
        "small_blue_diamond": {
            "unescaped": "small_blue_diamond",
            "unicode": "\\u1F539",
            "name": "small blue diamond"
        },
        "small_red_triangle": {
            "unescaped": "small_red_triangle",
            "unicode": "\\u1F53A",
            "name": "up-pointing red triangle"
        },
        "small_red_triangle_down": {
            "unescaped": "small_red_triangle_down",
            "unicode": "\\u1F53B",
            "name": "down-pointing red triangle"
        },
        "arrow_up_small": {
            "unescaped": "arrow_up_small",
            "unicode": "\\u1F53C",
            "name": "up-pointing small red triangle"
        },
        "arrow_down_small": {
            "unescaped": "arrow_down_small",
            "unicode": "\\u1F53D",
            "name": "down-pointing small red triangle"
        },
        "clock1": {
            "unescaped": "clock1",
            "unicode": "\\u1F550",
            "name": "clock face one oclock"
        },
        "clock2": {
            "unescaped": "clock2",
            "unicode": "\\u1F551",
            "name": "clock face two oclock"
        },
        "clock3": {
            "unescaped": "clock3",
            "unicode": "\\u1F552",
            "name": "clock face three oclock"
        },
        "clock4": {
            "unescaped": "clock4",
            "unicode": "\\u1F553",
            "name": "clock face four oclock"
        },
        "clock5": {
            "unescaped": "clock5",
            "unicode": "\\u1F554",
            "name": "clock face five oclock"
        },
        "clock6": {
            "unescaped": "clock6",
            "unicode": "\\u1F555",
            "name": "clock face six oclock"
        },
        "clock7": {
            "unescaped": "clock7",
            "unicode": "\\u1F556",
            "name": "clock face seven oclock"
        },
        "clock8": {
            "unescaped": "clock8",
            "unicode": "\\u1F557",
            "name": "clock face eight oclock"
        },
        "clock9": {
            "unescaped": "clock9",
            "unicode": "\\u1F558",
            "name": "clock face nine oclock"
        },
        "clock10": {
            "unescaped": "clock10",
            "unicode": "\\u1F559",
            "name": "clock face ten oclock"
        },
        "clock11": {
            "unescaped": "clock11",
            "unicode": "\\u1F55A",
            "name": "clock face eleven oclock"
        },
        "clock12": {
            "unescaped": "clock12",
            "unicode": "\\u1F55B",
            "name": "clock face twelve oclock"
        },
        "clock130": {
            "unescaped": "clock130",
            "unicode": "\\u1F55C",
            "name": "clock face one-thirty"
        },
        "clock230": {
            "unescaped": "clock230",
            "unicode": "\\u1F55D",
            "name": "clock face two-thirty"
        },
        "clock330": {
            "unescaped": "clock330",
            "unicode": "\\u1F55E",
            "name": "clock face three-thirty"
        },
        "clock430": {
            "unescaped": "clock430",
            "unicode": "\\u1F55F",
            "name": "clock face four-thirty"
        },
        "clock530": {
            "unescaped": "clock530",
            "unicode": "\\u1F560",
            "name": "clock face five-thirty"
        },
        "clock630": {
            "unescaped": "clock630",
            "unicode": "\\u1F561",
            "name": "clock face six-thirty"
        },
        "clock730": {
            "unescaped": "clock730",
            "unicode": "\\u1F562",
            "name": "clock face seven-thirty"
        },
        "clock830": {
            "unescaped": "clock830",
            "unicode": "\\u1F563",
            "name": "clock face eight-thirty"
        },
        "clock930": {
            "unescaped": "clock930",
            "unicode": "\\u1F564",
            "name": "clock face nine-thirty"
        },
        "clock1030": {
            "unescaped": "clock1030",
            "unicode": "\\u1F565",
            "name": "clock face ten-thirty"
        },
        "clock1130": {
            "unescaped": "clock1130",
            "unicode": "\\u1F566",
            "name": "clock face eleven-thirty"
        },
        "clock1230": {
            "unescaped": "clock1230",
            "unicode": "\\u1F567",
            "name": "clock face twelve-thirty"
        },
        "mount_fuji": {
            "unescaped": "mount_fuji",
            "unicode": "\\u1F5FB",
            "name": "mount fuji"
        },
        "tokyo_tower": {
            "unescaped": "tokyo_tower",
            "unicode": "\\u1F5FC",
            "name": "tokyo tower"
        },
        "statue_of_liberty": {
            "unescaped": "statue_of_liberty",
            "unicode": "\\u1F5FD",
            "name": "statue of liberty"
        },
        "japan": {
            "unescaped": "japan",
            "unicode": "\\u1F5FE",
            "name": "silhouette of japan"
        },
        "moyai": {
            "unescaped": "moyai",
            "unicode": "\\u1F5FF",
            "name": "moyai"
        },
        "grinning": {
            "unescaped": "grinning",
            "unicode": "\\u1F600",
            "name": "grinning face"
        },
        "grin": {
            "unescaped": "grin",
            "unicode": "\\u1F601",
            "name": "grinning face with smiling eyes"
        },
        "joy": {
            "unescaped": "joy",
            "unicode": "\\u1F602",
            "name": "face with tears of joy"
        },
        "smiley": {
            "unescaped": "smiley",
            "unicode": "\\u1F603",
            "name": "smiling face with open mouth"
        },
        "smile": {
            "unescaped": "smile",
            "unicode": "\\u1F604",
            "name": "smiling face with open mouth and smiling eyes"
        },
        "sweat_smile": {
            "unescaped": "sweat_smile",
            "unicode": "\\u1F605",
            "name": "smiling face with open mouth and cold sweat"
        },
        "laughing": {
            "unescaped": "laughing",
            "unicode": "\\u1F606",
            "name": "smiling face with open mouth and tightly-closed eyes"
        },
        "satisfied": {
            "unescaped": "satisfied",
            "unicode": "\\u1F606",
            "name": "smiling face with open mouth and tightly-closed eyes"
        },
        "innocent": {
            "unescaped": "innocent",
            "unicode": "\\u1F607",
            "name": "smiling face with halo"
        },
        "smiling_imp": {
            "unescaped": "smiling_imp",
            "unicode": "\\u1F608",
            "name": "smiling face with horns"
        },
        "wink": {
            "unescaped": "wink",
            "unicode": "\\u1F609",
            "name": "winking face"
        },
        "blush": {
            "unescaped": "blush",
            "unicode": "\\u1F60A",
            "name": "smiling face with smiling eyes"
        },
        "yum": {
            "unescaped": "yum",
            "unicode": "\\u1F60B",
            "name": "face savouring delicious food"
        },
        "relieved": {
            "unescaped": "relieved",
            "unicode": "\\u1F60C",
            "name": "relieved face"
        },
        "heart_eyes": {
            "unescaped": "heart_eyes",
            "unicode": "\\u1F60D",
            "name": "smiling face with heart-shaped eyes"
        },
        "sunglasses": {
            "unescaped": "sunglasses",
            "unicode": "\\u1F60E",
            "name": "smiling face with sunglasses"
        },
        "smirk": {
            "unescaped": "smirk",
            "unicode": "\\u1F60F",
            "name": "smirking face"
        },
        "neutral_face": {
            "unescaped": "neutral_face",
            "unicode": "\\u1F610",
            "name": "neutral face"
        },
        "expressionless": {
            "unescaped": "expressionless",
            "unicode": "\\u1F611",
            "name": "expressionless face"
        },
        "unamused": {
            "unescaped": "unamused",
            "unicode": "\\u1F612",
            "name": "unamused face"
        },
        "sweat": {
            "unescaped": "sweat",
            "unicode": "\\u1F613",
            "name": "face with cold sweat"
        },
        "pensive": {
            "unescaped": "pensive",
            "unicode": "\\u1F614",
            "name": "pensive face"
        },
        "confused": {
            "unescaped": "confused",
            "unicode": "\\u1F615",
            "name": "confused face"
        },
        "confounded": {
            "unescaped": "confounded",
            "unicode": "\\u1F616",
            "name": "confounded face"
        },
        "kissing": {
            "unescaped": "kissing",
            "unicode": "\\u1F617",
            "name": "kissing face"
        },
        "kissing_heart": {
            "unescaped": "kissing_heart",
            "unicode": "\\u1F618",
            "name": "face throwing a kiss"
        },
        "kissing_smiling_eyes": {
            "unescaped": "kissing_smiling_eyes",
            "unicode": "\\u1F619",
            "name": "kissing face with smiling eyes"
        },
        "kissing_closed_eyes": {
            "unescaped": "kissing_closed_eyes",
            "unicode": "\\u1F61A",
            "name": "kissing face with closed eyes"
        },
        "stuck_out_tongue": {
            "unescaped": "stuck_out_tongue",
            "unicode": "\\u1F61B",
            "name": "face with stuck-out tongue"
        },
        "stuck_out_tongue_winking_eye": {
            "unescaped": "stuck_out_tongue_winking_eye",
            "unicode": "\\u1F61C",
            "name": "face with stuck-out tongue and winking eye"
        },
        "stuck_out_tongue_closed_eyes": {
            "unescaped": "stuck_out_tongue_closed_eyes",
            "unicode": "\\u1F61D",
            "name": "face with stuck-out tongue and tightly-closed eyes"
        },
        "disappointed": {
            "unescaped": "disappointed",
            "unicode": "\\u1F61E",
            "name": "disappointed face"
        },
        "worried": {
            "unescaped": "worried",
            "unicode": "\\u1F61F",
            "name": "worried face"
        },
        "angry": {
            "unescaped": "angry",
            "unicode": "\\u1F620",
            "name": "angry face"
        },
        "rage": {
            "unescaped": "rage",
            "unicode": "\\u1F621",
            "name": "pouting face"
        },
        "cry": {
            "unescaped": "cry",
            "unicode": "\\u1F622",
            "name": "crying face"
        },
        "persevere": {
            "unescaped": "persevere",
            "unicode": "\\u1F623",
            "name": "persevering face"
        },
        "triumph": {
            "unescaped": "triumph",
            "unicode": "\\u1F624",
            "name": "face with look of triumph"
        },
        "disappointed_relieved": {
            "unescaped": "disappointed_relieved",
            "unicode": "\\u1F625",
            "name": "disappointed but relieved face"
        },
        "frowning": {
            "unescaped": "frowning",
            "unicode": "\\u1F626",
            "name": "frowning face with open mouth"
        },
        "anguished": {
            "unescaped": "anguished",
            "unicode": "\\u1F627",
            "name": "anguished face"
        },
        "fearful": {
            "unescaped": "fearful",
            "unicode": "\\u1F628",
            "name": "fearful face"
        },
        "weary": {
            "unescaped": "weary",
            "unicode": "\\u1F629",
            "name": "weary face"
        },
        "sleepy": {
            "unescaped": "sleepy",
            "unicode": "\\u1F62A",
            "name": "sleepy face"
        },
        "tired_face": {
            "unescaped": "tired_face",
            "unicode": "\\u1F62B",
            "name": "tired face"
        },
        "grimacing": {
            "unescaped": "grimacing",
            "unicode": "\\u1F62C",
            "name": "grimacing face"
        },
        "sob": {
            "unescaped": "sob",
            "unicode": "\\u1F62D",
            "name": "loudly crying face"
        },
        "open_mouth": {
            "unescaped": "open_mouth",
            "unicode": "\\u1F62E",
            "name": "face with open mouth"
        },
        "hushed": {
            "unescaped": "hushed",
            "unicode": "\\u1F62F",
            "name": "hushed face"
        },
        "cold_sweat": {
            "unescaped": "cold_sweat",
            "unicode": "\\u1F630",
            "name": "face with open mouth and cold sweat"
        },
        "scream": {
            "unescaped": "scream",
            "unicode": "\\u1F631",
            "name": "face screaming in fear"
        },
        "astonished": {
            "unescaped": "astonished",
            "unicode": "\\u1F632",
            "name": "astonished face"
        },
        "flushed": {
            "unescaped": "flushed",
            "unicode": "\\u1F633",
            "name": "flushed face"
        },
        "sleeping": {
            "unescaped": "sleeping",
            "unicode": "\\u1F634",
            "name": "sleeping face"
        },
        "dizzy_face": {
            "unescaped": "dizzy_face",
            "unicode": "\\u1F635",
            "name": "dizzy face"
        },
        "no_mouth": {
            "unescaped": "no_mouth",
            "unicode": "\\u1F636",
            "name": "face without mouth"
        },
        "mask": {
            "unescaped": "mask",
            "unicode": "\\u1F637",
            "name": "face with medical mask"
        },
        "smile_cat": {
            "unescaped": "smile_cat",
            "unicode": "\\u1F638",
            "name": "grinning cat face with smiling eyes"
        },
        "joy_cat": {
            "unescaped": "joy_cat",
            "unicode": "\\u1F639",
            "name": "cat face with tears of joy"
        },
        "smiley_cat": {
            "unescaped": "smiley_cat",
            "unicode": "\\u1F63A",
            "name": "smiling cat face with open mouth"
        },
        "heart_eyes_cat": {
            "unescaped": "heart_eyes_cat",
            "unicode": "\\u1F63B",
            "name": "smiling cat face with heart-shaped eyes"
        },
        "smirk_cat": {
            "unescaped": "smirk_cat",
            "unicode": "\\u1F63C",
            "name": "cat face with wry smile"
        },
        "kissing_cat": {
            "unescaped": "kissing_cat",
            "unicode": "\\u1F63D",
            "name": "kissing cat face with closed eyes"
        },
        "pouting_cat": {
            "unescaped": "pouting_cat",
            "unicode": "\\u1F63E",
            "name": "pouting cat face"
        },
        "crying_cat_face": {
            "unescaped": "crying_cat_face",
            "unicode": "\\u1F63F",
            "name": "crying cat face"
        },
        "scream_cat": {
            "unescaped": "scream_cat",
            "unicode": "\\u1F640",
            "name": "weary cat face"
        },
        "no_good": {
            "unescaped": "no_good",
            "unicode": "\\u1F645",
            "name": "face with no good gesture"
        },
        "ok_woman": {
            "unescaped": "ok_woman",
            "unicode": "\\u1F646",
            "name": "face with ok gesture"
        },
        "bow": {
            "unescaped": "bow",
            "unicode": "\\u1F647",
            "name": "person bowing deeply"
        },
        "see_no_evil": {
            "unescaped": "see_no_evil",
            "unicode": "\\u1F648",
            "name": "see-no-evil monkey"
        },
        "hear_no_evil": {
            "unescaped": "hear_no_evil",
            "unicode": "\\u1F649",
            "name": "hear-no-evil monkey"
        },
        "speak_no_evil": {
            "unescaped": "speak_no_evil",
            "unicode": "\\u1F64A",
            "name": "speak-no-evil monkey"
        },
        "raising_hand": {
            "unescaped": "raising_hand",
            "unicode": "\\u1F64B",
            "name": "happy person raising one hand"
        },
        "raised_hands": {
            "unescaped": "raised_hands",
            "unicode": "\\u1F64C",
            "name": "person raising both hands in celebration"
        },
        "person_frowning": {
            "unescaped": "person_frowning",
            "unicode": "\\u1F64D",
            "name": "person frowning"
        },
        "person_with_pouting_face": {
            "unescaped": "person_with_pouting_face",
            "unicode": "\\u1F64E",
            "name": "person with pouting face"
        },
        "pray": {
            "unescaped": "pray",
            "unicode": "\\u1F64F",
            "name": "person with folded hands"
        },
        "rocket": {
            "unescaped": "rocket",
            "unicode": "\\u1F680",
            "name": "rocket"
        },
        "helicopter": {
            "unescaped": "helicopter",
            "unicode": "\\u1F681",
            "name": "helicopter"
        },
        "steam_locomotive": {
            "unescaped": "steam_locomotive",
            "unicode": "\\u1F682",
            "name": "steam locomotive"
        },
        "railway_car": {
            "unescaped": "railway_car",
            "unicode": "\\u1F683",
            "name": "railway car"
        },
        "bullettrain_side": {
            "unescaped": "bullettrain_side",
            "unicode": "\\u1F684",
            "name": "high-speed train"
        },
        "bullettrain_front": {
            "unescaped": "bullettrain_front",
            "unicode": "\\u1F685",
            "name": "high-speed train with bullet nose"
        },
        "train2": {
            "unescaped": "train2",
            "unicode": "\\u1F686",
            "name": "train"
        },
        "metro": {
            "unescaped": "metro",
            "unicode": "\\u1F687",
            "name": "metro"
        },
        "light_rail": {
            "unescaped": "light_rail",
            "unicode": "\\u1F688",
            "name": "light rail"
        },
        "station": {
            "unescaped": "station",
            "unicode": "\\u1F689",
            "name": "station"
        },
        "tram": {
            "unescaped": "tram",
            "unicode": "\\u1F68A",
            "name": "tram"
        },
        "train": {
            "unescaped": "train",
            "unicode": "\\u1F68B",
            "name": "tram car"
        },
        "bus": {
            "unescaped": "bus",
            "unicode": "\\u1F68C",
            "name": "bus"
        },
        "oncoming_bus": {
            "unescaped": "oncoming_bus",
            "unicode": "\\u1F68D",
            "name": "oncoming bus"
        },
        "trolleybus": {
            "unescaped": "trolleybus",
            "unicode": "\\u1F68E",
            "name": "trolleybus"
        },
        "busstop": {
            "unescaped": "busstop",
            "unicode": "\\u1F68F",
            "name": "bus stop"
        },
        "minibus": {
            "unescaped": "minibus",
            "unicode": "\\u1F690",
            "name": "minibus"
        },
        "ambulance": {
            "unescaped": "ambulance",
            "unicode": "\\u1F691",
            "name": "ambulance"
        },
        "fire_engine": {
            "unescaped": "fire_engine",
            "unicode": "\\u1F692",
            "name": "fire engine"
        },
        "police_car": {
            "unescaped": "police_car",
            "unicode": "\\u1F693",
            "name": "police car"
        },
        "oncoming_police_car": {
            "unescaped": "oncoming_police_car",
            "unicode": "\\u1F694",
            "name": "oncoming police car"
        },
        "taxi": {
            "unescaped": "taxi",
            "unicode": "\\u1F695",
            "name": "taxi"
        },
        "oncoming_taxi": {
            "unescaped": "oncoming_taxi",
            "unicode": "\\u1F696",
            "name": "oncoming taxi"
        },
        "car": {
            "unescaped": "car",
            "unicode": "\\u1F697",
            "name": "automobile"
        },
        "red_car": {
            "unescaped": "red_car",
            "unicode": "\\u1F697",
            "name": "automobile"
        },
        "oncoming_automobile": {
            "unescaped": "oncoming_automobile",
            "unicode": "\\u1F698",
            "name": "oncoming automobile"
        },
        "blue_car": {
            "unescaped": "blue_car",
            "unicode": "\\u1F699",
            "name": "recreational vehicle"
        },
        "truck": {
            "unescaped": "truck",
            "unicode": "\\u1F69A",
            "name": "delivery truck"
        },
        "articulated_lorry": {
            "unescaped": "articulated_lorry",
            "unicode": "\\u1F69B",
            "name": "articulated lorry"
        },
        "tractor": {
            "unescaped": "tractor",
            "unicode": "\\u1F69C",
            "name": "tractor"
        },
        "monorail": {
            "unescaped": "monorail",
            "unicode": "\\u1F69D",
            "name": "monorail"
        },
        "mountain_railway": {
            "unescaped": "mountain_railway",
            "unicode": "\\u1F69E",
            "name": "mountain railway"
        },
        "suspension_railway": {
            "unescaped": "suspension_railway",
            "unicode": "\\u1F69F",
            "name": "suspension railway"
        },
        "mountain_cableway": {
            "unescaped": "mountain_cableway",
            "unicode": "\\u1F6A0",
            "name": "mountain cableway"
        },
        "aerial_tramway": {
            "unescaped": "aerial_tramway",
            "unicode": "\\u1F6A1",
            "name": "aerial tramway"
        },
        "ship": {
            "unescaped": "ship",
            "unicode": "\\u1F6A2",
            "name": "ship"
        },
        "rowboat": {
            "unescaped": "rowboat",
            "unicode": "\\u1F6A3",
            "name": "rowboat"
        },
        "speedboat": {
            "unescaped": "speedboat",
            "unicode": "\\u1F6A4",
            "name": "speedboat"
        },
        "traffic_light": {
            "unescaped": "traffic_light",
            "unicode": "\\u1F6A5",
            "name": "horizontal traffic light"
        },
        "vertical_traffic_light": {
            "unescaped": "vertical_traffic_light",
            "unicode": "\\u1F6A6",
            "name": "vertical traffic light"
        },
        "construction": {
            "unescaped": "construction",
            "unicode": "\\u1F6A7",
            "name": "construction sign"
        },
        "rotating_light": {
            "unescaped": "rotating_light",
            "unicode": "\\u1F6A8",
            "name": "police cars revolving light"
        },
        "triangular_flag_on_post": {
            "unescaped": "triangular_flag_on_post",
            "unicode": "\\u1F6A9",
            "name": "triangular flag on post"
        },
        "door": {
            "unescaped": "door",
            "unicode": "\\u1F6AA",
            "name": "door"
        },
        "no_entry_sign": {
            "unescaped": "no_entry_sign",
            "unicode": "\\u1F6AB",
            "name": "no entry sign"
        },
        "smoking": {
            "unescaped": "smoking",
            "unicode": "\\u1F6AC",
            "name": "smoking symbol"
        },
        "no_smoking": {
            "unescaped": "no_smoking",
            "unicode": "\\u1F6AD",
            "name": "no smoking symbol"
        },
        "put_litter_in_its_place": {
            "unescaped": "put_litter_in_its_place",
            "unicode": "\\u1F6AE",
            "name": "put litter in its place symbol"
        },
        "do_not_litter": {
            "unescaped": "do_not_litter",
            "unicode": "\\u1F6AF",
            "name": "do not litter symbol"
        },
        "potable_water": {
            "unescaped": "potable_water",
            "unicode": "\\u1F6B0",
            "name": "potable water symbol"
        },
        "non\\-potable_water": {
            "unescaped": "non-potable_water",
            "unicode": "\\u1F6B1",
            "name": "non-potable water symbol"
        },
        "bike": {
            "unescaped": "bike",
            "unicode": "\\u1F6B2",
            "name": "bicycle"
        },
        "no_bicycles": {
            "unescaped": "no_bicycles",
            "unicode": "\\u1F6B3",
            "name": "no bicycles"
        },
        "bicyclist": {
            "unescaped": "bicyclist",
            "unicode": "\\u1F6B4",
            "name": "bicyclist"
        },
        "mountain_bicyclist": {
            "unescaped": "mountain_bicyclist",
            "unicode": "\\u1F6B5",
            "name": "mountain bicyclist"
        },
        "walking": {
            "unescaped": "walking",
            "unicode": "\\u1F6B6",
            "name": "pedestrian"
        },
        "no_pedestrians": {
            "unescaped": "no_pedestrians",
            "unicode": "\\u1F6B7",
            "name": "no pedestrians"
        },
        "children_crossing": {
            "unescaped": "children_crossing",
            "unicode": "\\u1F6B8",
            "name": "children crossing"
        },
        "mens": {
            "unescaped": "mens",
            "unicode": "\\u1F6B9",
            "name": "mens symbol"
        },
        "womens": {
            "unescaped": "womens",
            "unicode": "\\u1F6BA",
            "name": "womens symbol"
        },
        "restroom": {
            "unescaped": "restroom",
            "unicode": "\\u1F6BB",
            "name": "restroom"
        },
        "baby_symbol": {
            "unescaped": "baby_symbol",
            "unicode": "\\u1F6BC",
            "name": "baby symbol"
        },
        "toilet": {
            "unescaped": "toilet",
            "unicode": "\\u1F6BD",
            "name": "toilet"
        },
        "wc": {
            "unescaped": "wc",
            "unicode": "\\u1F6BE",
            "name": "water closet"
        },
        "shower": {
            "unescaped": "shower",
            "unicode": "\\u1F6BF",
            "name": "shower"
        },
        "bath": {
            "unescaped": "bath",
            "unicode": "\\u1F6C0",
            "name": "bath"
        },
        "bathtub": {
            "unescaped": "bathtub",
            "unicode": "\\u1F6C1",
            "name": "bathtub"
        },
        "passport_control": {
            "unescaped": "passport_control",
            "unicode": "\\u1F6C2",
            "name": "passport control"
        },
        "customs": {
            "unescaped": "customs",
            "unicode": "\\u1F6C3",
            "name": "customs"
        },
        "baggage_claim": {
            "unescaped": "baggage_claim",
            "unicode": "\\u1F6C4",
            "name": "baggage claim"
        },
        "left_luggage": {
            "unescaped": "left_luggage",
            "unicode": "\\u1F6C5",
            "name": "left luggage"
        },
        "hash": {
            "unescaped": "hash",
            "unicode": "\\u0023-20E3",
            "name": "hash key"
        },
        "zero": {
            "unescaped": "zero",
            "unicode": "\\u0030-20E3",
            "name": "keycap 0"
        },
        "one": {
            "unescaped": "one",
            "unicode": "\\u0031-20E3",
            "name": "keycap 1"
        },
        "two": {
            "unescaped": "two",
            "unicode": "\\u0032-20E3",
            "name": "keycap 2"
        },
        "three": {
            "unescaped": "three",
            "unicode": "\\u0033-20E3",
            "name": "keycap 3"
        },
        "four": {
            "unescaped": "four",
            "unicode": "\\u0034-20E3",
            "name": "keycap 4"
        },
        "five": {
            "unescaped": "five",
            "unicode": "\\u0035-20E3",
            "name": "keycap 5"
        },
        "six": {
            "unescaped": "six",
            "unicode": "\\u0036-20E3",
            "name": "keycap 6"
        },
        "seven": {
            "unescaped": "seven",
            "unicode": "\\u0037-20E3",
            "name": "keycap 7"
        },
        "eight": {
            "unescaped": "eight",
            "unicode": "\\u0038-20E3",
            "name": "keycap 8"
        },
        "nine": {
            "unescaped": "nine",
            "unicode": "\\u0039-20E3",
            "name": "keycap 9"
        },
        "flag\\-ae": {
            "unescaped": "flag-ae",
            "unicode": "\\u1F1E6-1F1EA",
            "name": "regional indicator symbol letters ae"
        },
        "flag\\-at": {
            "unescaped": "flag-at",
            "unicode": "\\u1F1E6-1F1F9",
            "name": "regional indicator symbol letters at"
        },
        "flag\\-au": {
            "unescaped": "flag-au",
            "unicode": "\\u1F1E6-1F1FA",
            "name": "regional indicator symbol letters au"
        },
        "flag\\-be": {
            "unescaped": "flag-be",
            "unicode": "\\u1F1E7-1F1EA",
            "name": "regional indicator symbol letters be"
        },
        "flag\\-br": {
            "unescaped": "flag-br",
            "unicode": "\\u1F1E7-1F1F7",
            "name": "regional indicator symbol letters br"
        },
        "flag\\-ca": {
            "unescaped": "flag-ca",
            "unicode": "\\u1F1E8-1F1E6",
            "name": "regional indicator symbol letters ca"
        },
        "flag\\-ch": {
            "unescaped": "flag-ch",
            "unicode": "\\u1F1E8-1F1ED",
            "name": "regional indicator symbol letters ch"
        },
        "flag\\-cl": {
            "unescaped": "flag-cl",
            "unicode": "\\u1F1E8-1F1F1",
            "name": "regional indicator symbol letters cl"
        },
        "flag\\-cn": {
            "unescaped": "flag-cn",
            "unicode": "\\u1F1E8-1F1F3",
            "name": "regional indicator symbol letters cn"
        },
        "cn": {
            "unescaped": "cn",
            "unicode": "\\u1F1E8-1F1F3",
            "name": "regional indicator symbol letters cn"
        },
        "flag\\-co": {
            "unescaped": "flag-co",
            "unicode": "\\u1F1E8-1F1F4",
            "name": "regional indicator symbol letters co"
        },
        "flag\\-de": {
            "unescaped": "flag-de",
            "unicode": "\\u1F1E9-1F1EA",
            "name": "regional indicator symbol letters de"
        },
        "de": {
            "unescaped": "de",
            "unicode": "\\u1F1E9-1F1EA",
            "name": "regional indicator symbol letters de"
        },
        "flag\\-dk": {
            "unescaped": "flag-dk",
            "unicode": "\\u1F1E9-1F1F0",
            "name": "regional indicator symbol letters dk"
        },
        "flag\\-es": {
            "unescaped": "flag-es",
            "unicode": "\\u1F1EA-1F1F8",
            "name": "regional indicator symbol letters es"
        },
        "es": {
            "unescaped": "es",
            "unicode": "\\u1F1EA-1F1F8",
            "name": "regional indicator symbol letters es"
        },
        "flag\\-fi": {
            "unescaped": "flag-fi",
            "unicode": "\\u1F1EB-1F1EE",
            "name": "regional indicator symbol letters fi"
        },
        "flag\\-fr": {
            "unescaped": "flag-fr",
            "unicode": "\\u1F1EB-1F1F7",
            "name": "regional indicator symbol letters fr"
        },
        "fr": {
            "unescaped": "fr",
            "unicode": "\\u1F1EB-1F1F7",
            "name": "regional indicator symbol letters fr"
        },
        "flag\\-gb": {
            "unescaped": "flag-gb",
            "unicode": "\\u1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "gb": {
            "unescaped": "gb",
            "unicode": "\\u1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "uk": {
            "unescaped": "uk",
            "unicode": "\\u1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "flag\\-hk": {
            "unescaped": "flag-hk",
            "unicode": "\\u1F1ED-1F1F0",
            "name": "regional indicator symbol letters hk"
        },
        "flag\\-id": {
            "unescaped": "flag-id",
            "unicode": "\\u1F1EE-1F1E9",
            "name": "regional indicator symbol letters id"
        },
        "flag\\-ie": {
            "unescaped": "flag-ie",
            "unicode": "\\u1F1EE-1F1EA",
            "name": "regional indicator symbol letters ie"
        },
        "flag\\-il": {
            "unescaped": "flag-il",
            "unicode": "\\u1F1EE-1F1F1",
            "name": "regional indicator symbol letters il"
        },
        "flag\\-in": {
            "unescaped": "flag-in",
            "unicode": "\\u1F1EE-1F1F3",
            "name": "regional indicator symbol letters in"
        },
        "flag\\-it": {
            "unescaped": "flag-it",
            "unicode": "\\u1F1EE-1F1F9",
            "name": "regional indicator symbol letters it"
        },
        "it": {
            "unescaped": "it",
            "unicode": "\\u1F1EE-1F1F9",
            "name": "regional indicator symbol letters it"
        },
        "flag\\-jp": {
            "unescaped": "flag-jp",
            "unicode": "\\u1F1EF-1F1F5",
            "name": "regional indicator symbol letters jp"
        },
        "jp": {
            "unescaped": "jp",
            "unicode": "\\u1F1EF-1F1F5",
            "name": "regional indicator symbol letters jp"
        },
        "flag\\-kr": {
            "unescaped": "flag-kr",
            "unicode": "\\u1F1F0-1F1F7",
            "name": "regional indicator symbol letters kr"
        },
        "kr": {
            "unescaped": "kr",
            "unicode": "\\u1F1F0-1F1F7",
            "name": "regional indicator symbol letters kr"
        },
        "flag\\-mo": {
            "unescaped": "flag-mo",
            "unicode": "\\u1F1F2-1F1F4",
            "name": "regional indicator symbol letters mo"
        },
        "flag\\-mx": {
            "unescaped": "flag-mx",
            "unicode": "\\u1F1F2-1F1FD",
            "name": "regional indicator symbol letters mx"
        },
        "flag\\-my": {
            "unescaped": "flag-my",
            "unicode": "\\u1F1F2-1F1FE",
            "name": "regional indicator symbol letters my"
        },
        "flag\\-nl": {
            "unescaped": "flag-nl",
            "unicode": "\\u1F1F3-1F1F1",
            "name": "regional indicator symbol letters nl"
        },
        "flag\\-no": {
            "unescaped": "flag-no",
            "unicode": "\\u1F1F3-1F1F4",
            "name": "regional indicator symbol letters no"
        },
        "flag\\-nz": {
            "unescaped": "flag-nz",
            "unicode": "\\u1F1F3-1F1FF",
            "name": "regional indicator symbol letters nz"
        },
        "flag\\-ph": {
            "unescaped": "flag-ph",
            "unicode": "\\u1F1F5-1F1ED",
            "name": "regional indicator symbol letters ph"
        },
        "flag\\-pl": {
            "unescaped": "flag-pl",
            "unicode": "\\u1F1F5-1F1F1",
            "name": "regional indicator symbol letters pl"
        },
        "flag\\-pr": {
            "unescaped": "flag-pr",
            "unicode": "\\u1F1F5-1F1F7",
            "name": "regional indicator symbol letters pr"
        },
        "flag\\-pt": {
            "unescaped": "flag-pt",
            "unicode": "\\u1F1F5-1F1F9",
            "name": "regional indicator symbol letters pt"
        },
        "flag\\-ru": {
            "unescaped": "flag-ru",
            "unicode": "\\u1F1F7-1F1FA",
            "name": "regional indicator symbol letters ru"
        },
        "ru": {
            "unescaped": "ru",
            "unicode": "\\u1F1F7-1F1FA",
            "name": "regional indicator symbol letters ru"
        },
        "flag\\-sa": {
            "unescaped": "flag-sa",
            "unicode": "\\u1F1F8-1F1E6",
            "name": "regional indicator symbol letters sa"
        },
        "flag\\-se": {
            "unescaped": "flag-se",
            "unicode": "\\u1F1F8-1F1EA",
            "name": "regional indicator symbol letters se"
        },
        "flag\\-sg": {
            "unescaped": "flag-sg",
            "unicode": "\\u1F1F8-1F1EC",
            "name": "regional indicator symbol letters sg"
        },
        "flag\\-tr": {
            "unescaped": "flag-tr",
            "unicode": "\\u1F1F9-1F1F7",
            "name": "regional indicator symbol letters tr"
        },
        "flag\\-us": {
            "unescaped": "flag-us",
            "unicode": "\\u1F1FA-1F1F8",
            "name": "regional indicator symbol letters us"
        },
        "us": {
            "unescaped": "us",
            "unicode": "\\u1F1FA-1F1F8",
            "name": "regional indicator symbol letters us"
        },
        "flag\\-vn": {
            "unescaped": "flag-vn",
            "unicode": "\\u1F1FB-1F1F3",
            "name": "regional indicator symbol letters vn"
        },
        "flag\\-za": {
            "unescaped": "flag-za",
            "unicode": "\\u1F1FF-1F1E6",
            "name": "regional indicator symbol letters za"
        },
        "man\\-man\\-boy": {
            "unescaped": "man-man-boy",
            "unicode": "\\u1F468-200D-1F468-200D-1F466",
            "name": ""
        },
        "man\\-man\\-boy\\-boy": {
            "unescaped": "man-man-boy-boy",
            "unicode": "\\u1F468-200D-1F468-200D-1F466-200D-1F466",
            "name": ""
        },
        "man\\-man\\-girl": {
            "unescaped": "man-man-girl",
            "unicode": "\\u1F468-200D-1F468-200D-1F467",
            "name": ""
        },
        "man\\-man\\-girl\\-boy": {
            "unescaped": "man-man-girl-boy",
            "unicode": "\\u1F468-200D-1F468-200D-1F467-200D-1F466",
            "name": ""
        },
        "man\\-man\\-girl\\-girl": {
            "unescaped": "man-man-girl-girl",
            "unicode": "\\u1F468-200D-1F468-200D-1F467-200D-1F467",
            "name": ""
        },
        "man\\-woman\\-boy": {
            "unescaped": "man-woman-boy",
            "unicode": "\\u1F468-200D-1F469-200D-1F466",
            "name": ""
        },
        "man\\-woman\\-boy\\-boy": {
            "unescaped": "man-woman-boy-boy",
            "unicode": "\\u1F468-200D-1F469-200D-1F466-200D-1F466",
            "name": ""
        },
        "man\\-woman\\-girl": {
            "unescaped": "man-woman-girl",
            "unicode": "\\u1F468-200D-1F469-200D-1F467",
            "name": ""
        },
        "man\\-woman\\-girl\\-girl": {
            "unescaped": "man-woman-girl-girl",
            "unicode": "\\u1F468-200D-1F469-200D-1F467-200D-1F467",
            "name": ""
        },
        "man\\-heart\\-man": {
            "unescaped": "man-heart-man",
            "unicode": "\\u1F468-200D-2764-FE0F-200D-1F468",
            "name": ""
        },
        "man\\-kiss\\-man": {
            "unescaped": "man-kiss-man",
            "unicode": "\\u1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
            "name": ""
        },
        "woman\\-woman\\-boy": {
            "unescaped": "woman-woman-boy",
            "unicode": "\\u1F469-200D-1F469-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-boy\\-boy": {
            "unescaped": "woman-woman-boy-boy",
            "unicode": "\\u1F469-200D-1F469-200D-1F466-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-girl": {
            "unescaped": "woman-woman-girl",
            "unicode": "\\u1F469-200D-1F469-200D-1F467",
            "name": ""
        },
        "woman\\-woman\\-girl\\-boy": {
            "unescaped": "woman-woman-girl-boy",
            "unicode": "\\u1F469-200D-1F469-200D-1F467-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-girl\\-girl": {
            "unescaped": "woman-woman-girl-girl",
            "unicode": "\\u1F469-200D-1F469-200D-1F467-200D-1F467",
            "name": ""
        },
        "woman\\-heart\\-woman": {
            "unescaped": "woman-heart-woman",
            "unicode": "\\u1F469-200D-2764-FE0F-200D-1F469",
            "name": ""
        },
        "woman\\-kiss\\-woman": {
            "unescaped": "woman-kiss-woman",
            "unicode": "\\u1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
            "name": ""
        }
    });
})(angular.module('cts.emoji'));
(function (App) {
    App.filter('emoji', ["emojiMaps", "emojiCodes", function (emojiMaps, emojiCodes) {

        var codesRegexCache = {};
        var codesKeys = Object.keys(emojiCodes);
        var emojiRegex = new RegExp(":(" + Object.keys(emojiMaps).join("|") + "):", "g");

        var replaceCodesWithText = function (input) {
            for (var i = codesKeys.length - 1; i >= 0; i--) {

                if (!codesRegexCache[i]) {
                    codesRegexCache[i] = new RegExp('(^|\\s){0,1}(' + codesKeys[i] + ')(\\s|$)', "g");
                }

                var regex = codesRegexCache[i];

                if (regex.test(input)) {
                    input = input.replace(regex, ':' + emojiCodes[codesKeys[i]] + ':');
                }
            }

            return input;
        };

        return function (input, isUnicode) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            input = replaceCodesWithText(input);

            if (isUnicode) {
                return input.replace(emojiRegex, function (match, text) {
                    return emojiMaps[App.escapeRegExp(text)].unicode;
                });
            } else {
                return input.replace(emojiRegex, function (match, text) {
                    return "<i class='emoji emoji_" + emojiMaps[App.escapeRegExp(text)].unescaped + "'></i>";
                });
            }
        };
    }]);
})(angular.module('cts.emoji'));