(function (App) {
    App.escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
}(angular.module("cts.emoji", [])));

(function (App) {
    App.constant('emojiCategories', {
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
            "unicode": "1F4AF",
            "name": "hundred points symbol"
        },
        "1234": {
            "unescaped": "1234",
            "unicode": "1F522",
            "name": "input symbol for numbers"
        },
        "copyright": {
            "unescaped": "copyright",
            "unicode": "00A9",
            "name": "copyright sign"
        },
        "registered": {
            "unescaped": "registered",
            "unicode": "00AE",
            "name": "registered sign"
        },
        "bangbang": {
            "unescaped": "bangbang",
            "unicode": "203C",
            "name": "double exclamation mark"
        },
        "interrobang": {
            "unescaped": "interrobang",
            "unicode": "2049",
            "name": "exclamation question mark"
        },
        "tm": {
            "unescaped": "tm",
            "unicode": "2122",
            "name": "trade mark sign"
        },
        "information_source": {
            "unescaped": "information_source",
            "unicode": "2139",
            "name": "information source"
        },
        "left_right_arrow": {
            "unescaped": "left_right_arrow",
            "unicode": "2194",
            "name": "left right arrow"
        },
        "arrow_up_down": {
            "unescaped": "arrow_up_down",
            "unicode": "2195",
            "name": "up down arrow"
        },
        "arrow_upper_left": {
            "unescaped": "arrow_upper_left",
            "unicode": "2196",
            "name": "north west arrow"
        },
        "arrow_upper_right": {
            "unescaped": "arrow_upper_right",
            "unicode": "2197",
            "name": "north east arrow"
        },
        "arrow_lower_right": {
            "unescaped": "arrow_lower_right",
            "unicode": "2198",
            "name": "south east arrow"
        },
        "arrow_lower_left": {
            "unescaped": "arrow_lower_left",
            "unicode": "2199",
            "name": "south west arrow"
        },
        "leftwards_arrow_with_hook": {
            "unescaped": "leftwards_arrow_with_hook",
            "unicode": "21A9",
            "name": "leftwards arrow with hook"
        },
        "arrow_right_hook": {
            "unescaped": "arrow_right_hook",
            "unicode": "21AA",
            "name": "rightwards arrow with hook"
        },
        "watch": {
            "unescaped": "watch",
            "unicode": "231A",
            "name": "watch"
        },
        "hourglass": {
            "unescaped": "hourglass",
            "unicode": "231B",
            "name": "hourglass"
        },
        "fast_forward": {
            "unescaped": "fast_forward",
            "unicode": "23E9",
            "name": "black right-pointing double triangle"
        },
        "rewind": {
            "unescaped": "rewind",
            "unicode": "23EA",
            "name": "black left-pointing double triangle"
        },
        "arrow_double_up": {
            "unescaped": "arrow_double_up",
            "unicode": "23EB",
            "name": "black up-pointing double triangle"
        },
        "arrow_double_down": {
            "unescaped": "arrow_double_down",
            "unicode": "23EC",
            "name": "black down-pointing double triangle"
        },
        "alarm_clock": {
            "unescaped": "alarm_clock",
            "unicode": "23F0",
            "name": "alarm clock"
        },
        "hourglass_flowing_sand": {
            "unescaped": "hourglass_flowing_sand",
            "unicode": "23F3",
            "name": "hourglass with flowing sand"
        },
        "m": {
            "unescaped": "m",
            "unicode": "24C2",
            "name": "circled latin capital letter m"
        },
        "black_small_square": {
            "unescaped": "black_small_square",
            "unicode": "25AA",
            "name": "black small square"
        },
        "white_small_square": {
            "unescaped": "white_small_square",
            "unicode": "25AB",
            "name": "white small square"
        },
        "arrow_forward": {
            "unescaped": "arrow_forward",
            "unicode": "25B6",
            "name": "black right-pointing triangle"
        },
        "arrow_backward": {
            "unescaped": "arrow_backward",
            "unicode": "25C0",
            "name": "black left-pointing triangle"
        },
        "white_medium_square": {
            "unescaped": "white_medium_square",
            "unicode": "25FB",
            "name": "white medium square"
        },
        "black_medium_square": {
            "unescaped": "black_medium_square",
            "unicode": "25FC",
            "name": "black medium square"
        },
        "white_medium_small_square": {
            "unescaped": "white_medium_small_square",
            "unicode": "25FD",
            "name": "white medium small square"
        },
        "black_medium_small_square": {
            "unescaped": "black_medium_small_square",
            "unicode": "25FE",
            "name": "black medium small square"
        },
        "sunny": {
            "unescaped": "sunny",
            "unicode": "2600",
            "name": "black sun with rays"
        },
        "cloud": {
            "unescaped": "cloud",
            "unicode": "2601",
            "name": "cloud"
        },
        "phone": {
            "unescaped": "phone",
            "unicode": "260E",
            "name": "black telephone"
        },
        "telephone": {
            "unescaped": "telephone",
            "unicode": "260E",
            "name": "black telephone"
        },
        "ballot_box_with_check": {
            "unescaped": "ballot_box_with_check",
            "unicode": "2611",
            "name": "ballot box with check"
        },
        "umbrella": {
            "unescaped": "umbrella",
            "unicode": "2614",
            "name": "umbrella with rain drops"
        },
        "coffee": {
            "unescaped": "coffee",
            "unicode": "2615",
            "name": "hot beverage"
        },
        "point_up": {
            "unescaped": "point_up",
            "unicode": "261D",
            "name": "white up pointing index"
        },
        "relaxed": {
            "unescaped": "relaxed",
            "unicode": "263A",
            "name": "white smiling face"
        },
        "aries": {
            "unescaped": "aries",
            "unicode": "2648",
            "name": "aries"
        },
        "taurus": {
            "unescaped": "taurus",
            "unicode": "2649",
            "name": "taurus"
        },
        "gemini": {
            "unescaped": "gemini",
            "unicode": "264A",
            "name": "gemini"
        },
        "cancer": {
            "unescaped": "cancer",
            "unicode": "264B",
            "name": "cancer"
        },
        "leo": {
            "unescaped": "leo",
            "unicode": "264C",
            "name": "leo"
        },
        "virgo": {
            "unescaped": "virgo",
            "unicode": "264D",
            "name": "virgo"
        },
        "libra": {
            "unescaped": "libra",
            "unicode": "264E",
            "name": "libra"
        },
        "scorpius": {
            "unescaped": "scorpius",
            "unicode": "264F",
            "name": "scorpius"
        },
        "sagittarius": {
            "unescaped": "sagittarius",
            "unicode": "2650",
            "name": "sagittarius"
        },
        "capricorn": {
            "unescaped": "capricorn",
            "unicode": "2651",
            "name": "capricorn"
        },
        "aquarius": {
            "unescaped": "aquarius",
            "unicode": "2652",
            "name": "aquarius"
        },
        "pisces": {
            "unescaped": "pisces",
            "unicode": "2653",
            "name": "pisces"
        },
        "spades": {
            "unescaped": "spades",
            "unicode": "2660",
            "name": "black spade suit"
        },
        "clubs": {
            "unescaped": "clubs",
            "unicode": "2663",
            "name": "black club suit"
        },
        "hearts": {
            "unescaped": "hearts",
            "unicode": "2665",
            "name": "black heart suit"
        },
        "diamonds": {
            "unescaped": "diamonds",
            "unicode": "2666",
            "name": "black diamond suit"
        },
        "hotsprings": {
            "unescaped": "hotsprings",
            "unicode": "2668",
            "name": "hot springs"
        },
        "recycle": {
            "unescaped": "recycle",
            "unicode": "267B",
            "name": "black universal recycling symbol"
        },
        "wheelchair": {
            "unescaped": "wheelchair",
            "unicode": "267F",
            "name": "wheelchair symbol"
        },
        "anchor": {
            "unescaped": "anchor",
            "unicode": "2693",
            "name": "anchor"
        },
        "warning": {
            "unescaped": "warning",
            "unicode": "26A0",
            "name": "warning sign"
        },
        "zap": {
            "unescaped": "zap",
            "unicode": "26A1",
            "name": "high voltage sign"
        },
        "white_circle": {
            "unescaped": "white_circle",
            "unicode": "26AA",
            "name": "medium white circle"
        },
        "black_circle": {
            "unescaped": "black_circle",
            "unicode": "26AB",
            "name": "medium black circle"
        },
        "soccer": {
            "unescaped": "soccer",
            "unicode": "26BD",
            "name": "soccer ball"
        },
        "baseball": {
            "unescaped": "baseball",
            "unicode": "26BE",
            "name": "baseball"
        },
        "snowman": {
            "unescaped": "snowman",
            "unicode": "26C4",
            "name": "snowman without snow"
        },
        "partly_sunny": {
            "unescaped": "partly_sunny",
            "unicode": "26C5",
            "name": "sun behind cloud"
        },
        "ophiuchus": {
            "unescaped": "ophiuchus",
            "unicode": "26CE",
            "name": "ophiuchus"
        },
        "no_entry": {
            "unescaped": "no_entry",
            "unicode": "26D4",
            "name": "no entry"
        },
        "church": {
            "unescaped": "church",
            "unicode": "26EA",
            "name": "church"
        },
        "fountain": {
            "unescaped": "fountain",
            "unicode": "26F2",
            "name": "fountain"
        },
        "golf": {
            "unescaped": "golf",
            "unicode": "26F3",
            "name": "flag in hole"
        },
        "boat": {
            "unescaped": "boat",
            "unicode": "26F5",
            "name": "sailboat"
        },
        "sailboat": {
            "unescaped": "sailboat",
            "unicode": "26F5",
            "name": "sailboat"
        },
        "tent": {
            "unescaped": "tent",
            "unicode": "26FA",
            "name": "tent"
        },
        "fuelpump": {
            "unescaped": "fuelpump",
            "unicode": "26FD",
            "name": "fuel pump"
        },
        "scissors": {
            "unescaped": "scissors",
            "unicode": "2702",
            "name": "black scissors"
        },
        "white_check_mark": {
            "unescaped": "white_check_mark",
            "unicode": "2705",
            "name": "white heavy check mark"
        },
        "airplane": {
            "unescaped": "airplane",
            "unicode": "2708",
            "name": "airplane"
        },
        "email": {
            "unescaped": "email",
            "unicode": "2709",
            "name": "envelope"
        },
        "envelope": {
            "unescaped": "envelope",
            "unicode": "2709",
            "name": "envelope"
        },
        "fist": {
            "unescaped": "fist",
            "unicode": "270A",
            "name": "raised fist"
        },
        "hand": {
            "unescaped": "hand",
            "unicode": "270B",
            "name": "raised hand"
        },
        "raised_hand": {
            "unescaped": "raised_hand",
            "unicode": "270B",
            "name": "raised hand"
        },
        "v": {
            "unescaped": "v",
            "unicode": "270C",
            "name": "victory hand"
        },
        "pencil2": {
            "unescaped": "pencil2",
            "unicode": "270F",
            "name": "pencil"
        },
        "black_nib": {
            "unescaped": "black_nib",
            "unicode": "2712",
            "name": "black nib"
        },
        "heavy_check_mark": {
            "unescaped": "heavy_check_mark",
            "unicode": "2714",
            "name": "heavy check mark"
        },
        "heavy_multiplication_x": {
            "unescaped": "heavy_multiplication_x",
            "unicode": "2716",
            "name": "heavy multiplication x"
        },
        "sparkles": {
            "unescaped": "sparkles",
            "unicode": "2728",
            "name": "sparkles"
        },
        "eight_spoked_asterisk": {
            "unescaped": "eight_spoked_asterisk",
            "unicode": "2733",
            "name": "eight spoked asterisk"
        },
        "eight_pointed_black_star": {
            "unescaped": "eight_pointed_black_star",
            "unicode": "2734",
            "name": "eight pointed black star"
        },
        "snowflake": {
            "unescaped": "snowflake",
            "unicode": "2744",
            "name": "snowflake"
        },
        "sparkle": {
            "unescaped": "sparkle",
            "unicode": "2747",
            "name": "sparkle"
        },
        "x": {
            "unescaped": "x",
            "unicode": "274C",
            "name": "cross mark"
        },
        "negative_squared_cross_mark": {
            "unescaped": "negative_squared_cross_mark",
            "unicode": "274E",
            "name": "negative squared cross mark"
        },
        "question": {
            "unescaped": "question",
            "unicode": "2753",
            "name": "black question mark ornament"
        },
        "grey_question": {
            "unescaped": "grey_question",
            "unicode": "2754",
            "name": "white question mark ornament"
        },
        "grey_exclamation": {
            "unescaped": "grey_exclamation",
            "unicode": "2755",
            "name": "white exclamation mark ornament"
        },
        "exclamation": {
            "unescaped": "exclamation",
            "unicode": "2757",
            "name": "heavy exclamation mark symbol"
        },
        "heavy_exclamation_mark": {
            "unescaped": "heavy_exclamation_mark",
            "unicode": "2757",
            "name": "heavy exclamation mark symbol"
        },
        "heart": {
            "unescaped": "heart",
            "unicode": "2764",
            "name": "heavy black heart"
        },
        "heavy_plus_sign": {
            "unescaped": "heavy_plus_sign",
            "unicode": "2795",
            "name": "heavy plus sign"
        },
        "heavy_minus_sign": {
            "unescaped": "heavy_minus_sign",
            "unicode": "2796",
            "name": "heavy minus sign"
        },
        "heavy_division_sign": {
            "unescaped": "heavy_division_sign",
            "unicode": "2797",
            "name": "heavy division sign"
        },
        "arrow_right": {
            "unescaped": "arrow_right",
            "unicode": "27A1",
            "name": "black rightwards arrow"
        },
        "curly_loop": {
            "unescaped": "curly_loop",
            "unicode": "27B0",
            "name": "curly loop"
        },
        "loop": {
            "unescaped": "loop",
            "unicode": "27BF",
            "name": "double curly loop"
        },
        "arrow_heading_up": {
            "unescaped": "arrow_heading_up",
            "unicode": "2934",
            "name": "arrow pointing rightwards then curving upwards"
        },
        "arrow_heading_down": {
            "unescaped": "arrow_heading_down",
            "unicode": "2935",
            "name": "arrow pointing rightwards then curving downwards"
        },
        "arrow_left": {
            "unescaped": "arrow_left",
            "unicode": "2B05",
            "name": "leftwards black arrow"
        },
        "arrow_up": {
            "unescaped": "arrow_up",
            "unicode": "2B06",
            "name": "upwards black arrow"
        },
        "arrow_down": {
            "unescaped": "arrow_down",
            "unicode": "2B07",
            "name": "downwards black arrow"
        },
        "black_large_square": {
            "unescaped": "black_large_square",
            "unicode": "2B1B",
            "name": "black large square"
        },
        "white_large_square": {
            "unescaped": "white_large_square",
            "unicode": "2B1C",
            "name": "white large square"
        },
        "star": {
            "unescaped": "star",
            "unicode": "2B50",
            "name": "white medium star"
        },
        "o": {
            "unescaped": "o",
            "unicode": "2B55",
            "name": "heavy large circle"
        },
        "wavy_dash": {
            "unescaped": "wavy_dash",
            "unicode": "3030",
            "name": "wavy dash"
        },
        "part_alternation_mark": {
            "unescaped": "part_alternation_mark",
            "unicode": "303D",
            "name": "part alternation mark"
        },
        "congratulations": {
            "unescaped": "congratulations",
            "unicode": "3297",
            "name": "circled ideograph congratulation"
        },
        "secret": {
            "unescaped": "secret",
            "unicode": "3299",
            "name": "circled ideograph secret"
        },
        "mahjong": {
            "unescaped": "mahjong",
            "unicode": "1F004",
            "name": "mahjong tile red dragon"
        },
        "black_joker": {
            "unescaped": "black_joker",
            "unicode": "1F0CF",
            "name": "playing card black joker"
        },
        "a": {
            "unescaped": "a",
            "unicode": "1F170",
            "name": "negative squared latin capital letter a"
        },
        "b": {
            "unescaped": "b",
            "unicode": "1F171",
            "name": "negative squared latin capital letter b"
        },
        "o2": {
            "unescaped": "o2",
            "unicode": "1F17E",
            "name": "negative squared latin capital letter o"
        },
        "parking": {
            "unescaped": "parking",
            "unicode": "1F17F",
            "name": "negative squared latin capital letter p"
        },
        "ab": {
            "unescaped": "ab",
            "unicode": "1F18E",
            "name": "negative squared ab"
        },
        "cl": {
            "unescaped": "cl",
            "unicode": "1F191",
            "name": "squared cl"
        },
        "cool": {
            "unescaped": "cool",
            "unicode": "1F192",
            "name": "squared cool"
        },
        "free": {
            "unescaped": "free",
            "unicode": "1F193",
            "name": "squared free"
        },
        "id": {
            "unescaped": "id",
            "unicode": "1F194",
            "name": "squared id"
        },
        "new": {
            "unescaped": "new",
            "unicode": "1F195",
            "name": "squared new"
        },
        "ng": {
            "unescaped": "ng",
            "unicode": "1F196",
            "name": "squared ng"
        },
        "ok": {
            "unescaped": "ok",
            "unicode": "1F197",
            "name": "squared ok"
        },
        "sos": {
            "unescaped": "sos",
            "unicode": "1F198",
            "name": "squared sos"
        },
        "up": {
            "unescaped": "up",
            "unicode": "1F199",
            "name": "squared up with exclamation mark"
        },
        "vs": {
            "unescaped": "vs",
            "unicode": "1F19A",
            "name": "squared vs"
        },
        "koko": {
            "unescaped": "koko",
            "unicode": "1F201",
            "name": "squared katakana koko"
        },
        "sa": {
            "unescaped": "sa",
            "unicode": "1F202",
            "name": "squared katakana sa"
        },
        "u7121": {
            "unescaped": "u7121",
            "unicode": "1F21A",
            "name": "squared cjk unified ideograph-7121"
        },
        "u6307": {
            "unescaped": "u6307",
            "unicode": "1F22F",
            "name": "squared cjk unified ideograph-6307"
        },
        "u7981": {
            "unescaped": "u7981",
            "unicode": "1F232",
            "name": "squared cjk unified ideograph-7981"
        },
        "u7a7a": {
            "unescaped": "u7a7a",
            "unicode": "1F233",
            "name": "squared cjk unified ideograph-7a7a"
        },
        "u5408": {
            "unescaped": "u5408",
            "unicode": "1F234",
            "name": "squared cjk unified ideograph-5408"
        },
        "u6e80": {
            "unescaped": "u6e80",
            "unicode": "1F235",
            "name": "squared cjk unified ideograph-6e80"
        },
        "u6709": {
            "unescaped": "u6709",
            "unicode": "1F236",
            "name": "squared cjk unified ideograph-6709"
        },
        "u6708": {
            "unescaped": "u6708",
            "unicode": "1F237",
            "name": "squared cjk unified ideograph-6708"
        },
        "u7533": {
            "unescaped": "u7533",
            "unicode": "1F238",
            "name": "squared cjk unified ideograph-7533"
        },
        "u5272": {
            "unescaped": "u5272",
            "unicode": "1F239",
            "name": "squared cjk unified ideograph-5272"
        },
        "u55b6": {
            "unescaped": "u55b6",
            "unicode": "1F23A",
            "name": "squared cjk unified ideograph-55b6"
        },
        "ideograph_advantage": {
            "unescaped": "ideograph_advantage",
            "unicode": "1F250",
            "name": "circled ideograph advantage"
        },
        "accept": {
            "unescaped": "accept",
            "unicode": "1F251",
            "name": "circled ideograph accept"
        },
        "cyclone": {
            "unescaped": "cyclone",
            "unicode": "1F300",
            "name": "cyclone"
        },
        "foggy": {
            "unescaped": "foggy",
            "unicode": "1F301",
            "name": "foggy"
        },
        "closed_umbrella": {
            "unescaped": "closed_umbrella",
            "unicode": "1F302",
            "name": "closed umbrella"
        },
        "night_with_stars": {
            "unescaped": "night_with_stars",
            "unicode": "1F303",
            "name": "night with stars"
        },
        "sunrise_over_mountains": {
            "unescaped": "sunrise_over_mountains",
            "unicode": "1F304",
            "name": "sunrise over mountains"
        },
        "sunrise": {
            "unescaped": "sunrise",
            "unicode": "1F305",
            "name": "sunrise"
        },
        "city_sunset": {
            "unescaped": "city_sunset",
            "unicode": "1F306",
            "name": "cityscape at dusk"
        },
        "city_sunrise": {
            "unescaped": "city_sunrise",
            "unicode": "1F307",
            "name": "sunset over buildings"
        },
        "rainbow": {
            "unescaped": "rainbow",
            "unicode": "1F308",
            "name": "rainbow"
        },
        "bridge_at_night": {
            "unescaped": "bridge_at_night",
            "unicode": "1F309",
            "name": "bridge at night"
        },
        "ocean": {
            "unescaped": "ocean",
            "unicode": "1F30A",
            "name": "water wave"
        },
        "volcano": {
            "unescaped": "volcano",
            "unicode": "1F30B",
            "name": "volcano"
        },
        "milky_way": {
            "unescaped": "milky_way",
            "unicode": "1F30C",
            "name": "milky way"
        },
        "earth_africa": {
            "unescaped": "earth_africa",
            "unicode": "1F30D",
            "name": "earth globe europe-africa"
        },
        "earth_americas": {
            "unescaped": "earth_americas",
            "unicode": "1F30E",
            "name": "earth globe americas"
        },
        "earth_asia": {
            "unescaped": "earth_asia",
            "unicode": "1F30F",
            "name": "earth globe asia-australia"
        },
        "globe_with_meridians": {
            "unescaped": "globe_with_meridians",
            "unicode": "1F310",
            "name": "globe with meridians"
        },
        "new_moon": {
            "unescaped": "new_moon",
            "unicode": "1F311",
            "name": "new moon symbol"
        },
        "waxing_crescent_moon": {
            "unescaped": "waxing_crescent_moon",
            "unicode": "1F312",
            "name": "waxing crescent moon symbol"
        },
        "first_quarter_moon": {
            "unescaped": "first_quarter_moon",
            "unicode": "1F313",
            "name": "first quarter moon symbol"
        },
        "moon": {
            "unescaped": "moon",
            "unicode": "1F314",
            "name": "waxing gibbous moon symbol"
        },
        "waxing_gibbous_moon": {
            "unescaped": "waxing_gibbous_moon",
            "unicode": "1F314",
            "name": "waxing gibbous moon symbol"
        },
        "full_moon": {
            "unescaped": "full_moon",
            "unicode": "1F315",
            "name": "full moon symbol"
        },
        "waning_gibbous_moon": {
            "unescaped": "waning_gibbous_moon",
            "unicode": "1F316",
            "name": "waning gibbous moon symbol"
        },
        "last_quarter_moon": {
            "unescaped": "last_quarter_moon",
            "unicode": "1F317",
            "name": "last quarter moon symbol"
        },
        "waning_crescent_moon": {
            "unescaped": "waning_crescent_moon",
            "unicode": "1F318",
            "name": "waning crescent moon symbol"
        },
        "crescent_moon": {
            "unescaped": "crescent_moon",
            "unicode": "1F319",
            "name": "crescent moon"
        },
        "new_moon_with_face": {
            "unescaped": "new_moon_with_face",
            "unicode": "1F31A",
            "name": "new moon with face"
        },
        "first_quarter_moon_with_face": {
            "unescaped": "first_quarter_moon_with_face",
            "unicode": "1F31B",
            "name": "first quarter moon with face"
        },
        "last_quarter_moon_with_face": {
            "unescaped": "last_quarter_moon_with_face",
            "unicode": "1F31C",
            "name": "last quarter moon with face"
        },
        "full_moon_with_face": {
            "unescaped": "full_moon_with_face",
            "unicode": "1F31D",
            "name": "full moon with face"
        },
        "sun_with_face": {
            "unescaped": "sun_with_face",
            "unicode": "1F31E",
            "name": "sun with face"
        },
        "star2": {
            "unescaped": "star2",
            "unicode": "1F31F",
            "name": "glowing star"
        },
        "stars": {
            "unescaped": "stars",
            "unicode": "1F320",
            "name": "shooting star"
        },
        "chestnut": {
            "unescaped": "chestnut",
            "unicode": "1F330",
            "name": "chestnut"
        },
        "seedling": {
            "unescaped": "seedling",
            "unicode": "1F331",
            "name": "seedling"
        },
        "evergreen_tree": {
            "unescaped": "evergreen_tree",
            "unicode": "1F332",
            "name": "evergreen tree"
        },
        "deciduous_tree": {
            "unescaped": "deciduous_tree",
            "unicode": "1F333",
            "name": "deciduous tree"
        },
        "palm_tree": {
            "unescaped": "palm_tree",
            "unicode": "1F334",
            "name": "palm tree"
        },
        "cactus": {
            "unescaped": "cactus",
            "unicode": "1F335",
            "name": "cactus"
        },
        "tulip": {
            "unescaped": "tulip",
            "unicode": "1F337",
            "name": "tulip"
        },
        "cherry_blossom": {
            "unescaped": "cherry_blossom",
            "unicode": "1F338",
            "name": "cherry blossom"
        },
        "rose": {
            "unescaped": "rose",
            "unicode": "1F339",
            "name": "rose"
        },
        "hibiscus": {
            "unescaped": "hibiscus",
            "unicode": "1F33A",
            "name": "hibiscus"
        },
        "sunflower": {
            "unescaped": "sunflower",
            "unicode": "1F33B",
            "name": "sunflower"
        },
        "blossom": {
            "unescaped": "blossom",
            "unicode": "1F33C",
            "name": "blossom"
        },
        "corn": {
            "unescaped": "corn",
            "unicode": "1F33D",
            "name": "ear of maize"
        },
        "ear_of_rice": {
            "unescaped": "ear_of_rice",
            "unicode": "1F33E",
            "name": "ear of rice"
        },
        "herb": {
            "unescaped": "herb",
            "unicode": "1F33F",
            "name": "herb"
        },
        "four_leaf_clover": {
            "unescaped": "four_leaf_clover",
            "unicode": "1F340",
            "name": "four leaf clover"
        },
        "maple_leaf": {
            "unescaped": "maple_leaf",
            "unicode": "1F341",
            "name": "maple leaf"
        },
        "fallen_leaf": {
            "unescaped": "fallen_leaf",
            "unicode": "1F342",
            "name": "fallen leaf"
        },
        "leaves": {
            "unescaped": "leaves",
            "unicode": "1F343",
            "name": "leaf fluttering in wind"
        },
        "mushroom": {
            "unescaped": "mushroom",
            "unicode": "1F344",
            "name": "mushroom"
        },
        "tomato": {
            "unescaped": "tomato",
            "unicode": "1F345",
            "name": "tomato"
        },
        "eggplant": {
            "unescaped": "eggplant",
            "unicode": "1F346",
            "name": "aubergine"
        },
        "grapes": {
            "unescaped": "grapes",
            "unicode": "1F347",
            "name": "grapes"
        },
        "melon": {
            "unescaped": "melon",
            "unicode": "1F348",
            "name": "melon"
        },
        "watermelon": {
            "unescaped": "watermelon",
            "unicode": "1F349",
            "name": "watermelon"
        },
        "tangerine": {
            "unescaped": "tangerine",
            "unicode": "1F34A",
            "name": "tangerine"
        },
        "lemon": {
            "unescaped": "lemon",
            "unicode": "1F34B",
            "name": "lemon"
        },
        "banana": {
            "unescaped": "banana",
            "unicode": "1F34C",
            "name": "banana"
        },
        "pineapple": {
            "unescaped": "pineapple",
            "unicode": "1F34D",
            "name": "pineapple"
        },
        "apple": {
            "unescaped": "apple",
            "unicode": "1F34E",
            "name": "red apple"
        },
        "green_apple": {
            "unescaped": "green_apple",
            "unicode": "1F34F",
            "name": "green apple"
        },
        "pear": {
            "unescaped": "pear",
            "unicode": "1F350",
            "name": "pear"
        },
        "peach": {
            "unescaped": "peach",
            "unicode": "1F351",
            "name": "peach"
        },
        "cherries": {
            "unescaped": "cherries",
            "unicode": "1F352",
            "name": "cherries"
        },
        "strawberry": {
            "unescaped": "strawberry",
            "unicode": "1F353",
            "name": "strawberry"
        },
        "hamburger": {
            "unescaped": "hamburger",
            "unicode": "1F354",
            "name": "hamburger"
        },
        "pizza": {
            "unescaped": "pizza",
            "unicode": "1F355",
            "name": "slice of pizza"
        },
        "meat_on_bone": {
            "unescaped": "meat_on_bone",
            "unicode": "1F356",
            "name": "meat on bone"
        },
        "poultry_leg": {
            "unescaped": "poultry_leg",
            "unicode": "1F357",
            "name": "poultry leg"
        },
        "rice_cracker": {
            "unescaped": "rice_cracker",
            "unicode": "1F358",
            "name": "rice cracker"
        },
        "rice_ball": {
            "unescaped": "rice_ball",
            "unicode": "1F359",
            "name": "rice ball"
        },
        "rice": {
            "unescaped": "rice",
            "unicode": "1F35A",
            "name": "cooked rice"
        },
        "curry": {
            "unescaped": "curry",
            "unicode": "1F35B",
            "name": "curry and rice"
        },
        "ramen": {
            "unescaped": "ramen",
            "unicode": "1F35C",
            "name": "steaming bowl"
        },
        "spaghetti": {
            "unescaped": "spaghetti",
            "unicode": "1F35D",
            "name": "spaghetti"
        },
        "bread": {
            "unescaped": "bread",
            "unicode": "1F35E",
            "name": "bread"
        },
        "fries": {
            "unescaped": "fries",
            "unicode": "1F35F",
            "name": "french fries"
        },
        "sweet_potato": {
            "unescaped": "sweet_potato",
            "unicode": "1F360",
            "name": "roasted sweet potato"
        },
        "dango": {
            "unescaped": "dango",
            "unicode": "1F361",
            "name": "dango"
        },
        "oden": {
            "unescaped": "oden",
            "unicode": "1F362",
            "name": "oden"
        },
        "sushi": {
            "unescaped": "sushi",
            "unicode": "1F363",
            "name": "sushi"
        },
        "fried_shrimp": {
            "unescaped": "fried_shrimp",
            "unicode": "1F364",
            "name": "fried shrimp"
        },
        "fish_cake": {
            "unescaped": "fish_cake",
            "unicode": "1F365",
            "name": "fish cake with swirl design"
        },
        "icecream": {
            "unescaped": "icecream",
            "unicode": "1F366",
            "name": "soft ice cream"
        },
        "shaved_ice": {
            "unescaped": "shaved_ice",
            "unicode": "1F367",
            "name": "shaved ice"
        },
        "ice_cream": {
            "unescaped": "ice_cream",
            "unicode": "1F368",
            "name": "ice cream"
        },
        "doughnut": {
            "unescaped": "doughnut",
            "unicode": "1F369",
            "name": "doughnut"
        },
        "cookie": {
            "unescaped": "cookie",
            "unicode": "1F36A",
            "name": "cookie"
        },
        "chocolate_bar": {
            "unescaped": "chocolate_bar",
            "unicode": "1F36B",
            "name": "chocolate bar"
        },
        "candy": {
            "unescaped": "candy",
            "unicode": "1F36C",
            "name": "candy"
        },
        "lollipop": {
            "unescaped": "lollipop",
            "unicode": "1F36D",
            "name": "lollipop"
        },
        "custard": {
            "unescaped": "custard",
            "unicode": "1F36E",
            "name": "custard"
        },
        "honey_pot": {
            "unescaped": "honey_pot",
            "unicode": "1F36F",
            "name": "honey pot"
        },
        "cake": {
            "unescaped": "cake",
            "unicode": "1F370",
            "name": "shortcake"
        },
        "bento": {
            "unescaped": "bento",
            "unicode": "1F371",
            "name": "bento box"
        },
        "stew": {
            "unescaped": "stew",
            "unicode": "1F372",
            "name": "pot of food"
        },
        "egg": {
            "unescaped": "egg",
            "unicode": "1F373",
            "name": "cooking"
        },
        "fork_and_knife": {
            "unescaped": "fork_and_knife",
            "unicode": "1F374",
            "name": "fork and knife"
        },
        "tea": {
            "unescaped": "tea",
            "unicode": "1F375",
            "name": "teacup without handle"
        },
        "sake": {
            "unescaped": "sake",
            "unicode": "1F376",
            "name": "sake bottle and cup"
        },
        "wine_glass": {
            "unescaped": "wine_glass",
            "unicode": "1F377",
            "name": "wine glass"
        },
        "cocktail": {
            "unescaped": "cocktail",
            "unicode": "1F378",
            "name": "cocktail glass"
        },
        "tropical_drink": {
            "unescaped": "tropical_drink",
            "unicode": "1F379",
            "name": "tropical drink"
        },
        "beer": {
            "unescaped": "beer",
            "unicode": "1F37A",
            "name": "beer mug"
        },
        "beers": {
            "unescaped": "beers",
            "unicode": "1F37B",
            "name": "clinking beer mugs"
        },
        "baby_bottle": {
            "unescaped": "baby_bottle",
            "unicode": "1F37C",
            "name": "baby bottle"
        },
        "ribbon": {
            "unescaped": "ribbon",
            "unicode": "1F380",
            "name": "ribbon"
        },
        "gift": {
            "unescaped": "gift",
            "unicode": "1F381",
            "name": "wrapped present"
        },
        "birthday": {
            "unescaped": "birthday",
            "unicode": "1F382",
            "name": "birthday cake"
        },
        "jack_o_lantern": {
            "unescaped": "jack_o_lantern",
            "unicode": "1F383",
            "name": "jack-o-lantern"
        },
        "christmas_tree": {
            "unescaped": "christmas_tree",
            "unicode": "1F384",
            "name": "christmas tree"
        },
        "santa": {
            "unescaped": "santa",
            "unicode": "1F385",
            "name": "father christmas"
        },
        "fireworks": {
            "unescaped": "fireworks",
            "unicode": "1F386",
            "name": "fireworks"
        },
        "sparkler": {
            "unescaped": "sparkler",
            "unicode": "1F387",
            "name": "firework sparkler"
        },
        "balloon": {
            "unescaped": "balloon",
            "unicode": "1F388",
            "name": "balloon"
        },
        "tada": {
            "unescaped": "tada",
            "unicode": "1F389",
            "name": "party popper"
        },
        "confetti_ball": {
            "unescaped": "confetti_ball",
            "unicode": "1F38A",
            "name": "confetti ball"
        },
        "tanabata_tree": {
            "unescaped": "tanabata_tree",
            "unicode": "1F38B",
            "name": "tanabata tree"
        },
        "crossed_flags": {
            "unescaped": "crossed_flags",
            "unicode": "1F38C",
            "name": "crossed flags"
        },
        "bamboo": {
            "unescaped": "bamboo",
            "unicode": "1F38D",
            "name": "pine decoration"
        },
        "dolls": {
            "unescaped": "dolls",
            "unicode": "1F38E",
            "name": "japanese dolls"
        },
        "flags": {
            "unescaped": "flags",
            "unicode": "1F38F",
            "name": "carp streamer"
        },
        "wind_chime": {
            "unescaped": "wind_chime",
            "unicode": "1F390",
            "name": "wind chime"
        },
        "rice_scene": {
            "unescaped": "rice_scene",
            "unicode": "1F391",
            "name": "moon viewing ceremony"
        },
        "school_satchel": {
            "unescaped": "school_satchel",
            "unicode": "1F392",
            "name": "school satchel"
        },
        "mortar_board": {
            "unescaped": "mortar_board",
            "unicode": "1F393",
            "name": "graduation cap"
        },
        "carousel_horse": {
            "unescaped": "carousel_horse",
            "unicode": "1F3A0",
            "name": "carousel horse"
        },
        "ferris_wheel": {
            "unescaped": "ferris_wheel",
            "unicode": "1F3A1",
            "name": "ferris wheel"
        },
        "roller_coaster": {
            "unescaped": "roller_coaster",
            "unicode": "1F3A2",
            "name": "roller coaster"
        },
        "fishing_pole_and_fish": {
            "unescaped": "fishing_pole_and_fish",
            "unicode": "1F3A3",
            "name": "fishing pole and fish"
        },
        "microphone": {
            "unescaped": "microphone",
            "unicode": "1F3A4",
            "name": "microphone"
        },
        "movie_camera": {
            "unescaped": "movie_camera",
            "unicode": "1F3A5",
            "name": "movie camera"
        },
        "cinema": {
            "unescaped": "cinema",
            "unicode": "1F3A6",
            "name": "cinema"
        },
        "headphones": {
            "unescaped": "headphones",
            "unicode": "1F3A7",
            "name": "headphone"
        },
        "art": {
            "unescaped": "art",
            "unicode": "1F3A8",
            "name": "artist palette"
        },
        "tophat": {
            "unescaped": "tophat",
            "unicode": "1F3A9",
            "name": "top hat"
        },
        "circus_tent": {
            "unescaped": "circus_tent",
            "unicode": "1F3AA",
            "name": "circus tent"
        },
        "ticket": {
            "unescaped": "ticket",
            "unicode": "1F3AB",
            "name": "ticket"
        },
        "clapper": {
            "unescaped": "clapper",
            "unicode": "1F3AC",
            "name": "clapper board"
        },
        "performing_arts": {
            "unescaped": "performing_arts",
            "unicode": "1F3AD",
            "name": "performing arts"
        },
        "video_game": {
            "unescaped": "video_game",
            "unicode": "1F3AE",
            "name": "video game"
        },
        "dart": {
            "unescaped": "dart",
            "unicode": "1F3AF",
            "name": "direct hit"
        },
        "slot_machine": {
            "unescaped": "slot_machine",
            "unicode": "1F3B0",
            "name": "slot machine"
        },
        "8ball": {
            "unescaped": "8ball",
            "unicode": "1F3B1",
            "name": "billiards"
        },
        "game_die": {
            "unescaped": "game_die",
            "unicode": "1F3B2",
            "name": "game die"
        },
        "bowling": {
            "unescaped": "bowling",
            "unicode": "1F3B3",
            "name": "bowling"
        },
        "flower_playing_cards": {
            "unescaped": "flower_playing_cards",
            "unicode": "1F3B4",
            "name": "flower playing cards"
        },
        "musical_note": {
            "unescaped": "musical_note",
            "unicode": "1F3B5",
            "name": "musical note"
        },
        "notes": {
            "unescaped": "notes",
            "unicode": "1F3B6",
            "name": "multiple musical notes"
        },
        "saxophone": {
            "unescaped": "saxophone",
            "unicode": "1F3B7",
            "name": "saxophone"
        },
        "guitar": {
            "unescaped": "guitar",
            "unicode": "1F3B8",
            "name": "guitar"
        },
        "musical_keyboard": {
            "unescaped": "musical_keyboard",
            "unicode": "1F3B9",
            "name": "musical keyboard"
        },
        "trumpet": {
            "unescaped": "trumpet",
            "unicode": "1F3BA",
            "name": "trumpet"
        },
        "violin": {
            "unescaped": "violin",
            "unicode": "1F3BB",
            "name": "violin"
        },
        "musical_score": {
            "unescaped": "musical_score",
            "unicode": "1F3BC",
            "name": "musical score"
        },
        "running_shirt_with_sash": {
            "unescaped": "running_shirt_with_sash",
            "unicode": "1F3BD",
            "name": "running shirt with sash"
        },
        "tennis": {
            "unescaped": "tennis",
            "unicode": "1F3BE",
            "name": "tennis racquet and ball"
        },
        "ski": {
            "unescaped": "ski",
            "unicode": "1F3BF",
            "name": "ski and ski boot"
        },
        "basketball": {
            "unescaped": "basketball",
            "unicode": "1F3C0",
            "name": "basketball and hoop"
        },
        "checkered_flag": {
            "unescaped": "checkered_flag",
            "unicode": "1F3C1",
            "name": "chequered flag"
        },
        "snowboarder": {
            "unescaped": "snowboarder",
            "unicode": "1F3C2",
            "name": "snowboarder"
        },
        "runner": {
            "unescaped": "runner",
            "unicode": "1F3C3",
            "name": "runner"
        },
        "running": {
            "unescaped": "running",
            "unicode": "1F3C3",
            "name": "runner"
        },
        "surfer": {
            "unescaped": "surfer",
            "unicode": "1F3C4",
            "name": "surfer"
        },
        "trophy": {
            "unescaped": "trophy",
            "unicode": "1F3C6",
            "name": "trophy"
        },
        "horse_racing": {
            "unescaped": "horse_racing",
            "unicode": "1F3C7",
            "name": "horse racing"
        },
        "football": {
            "unescaped": "football",
            "unicode": "1F3C8",
            "name": "american football"
        },
        "rugby_football": {
            "unescaped": "rugby_football",
            "unicode": "1F3C9",
            "name": "rugby football"
        },
        "swimmer": {
            "unescaped": "swimmer",
            "unicode": "1F3CA",
            "name": "swimmer"
        },
        "house": {
            "unescaped": "house",
            "unicode": "1F3E0",
            "name": "house building"
        },
        "house_with_garden": {
            "unescaped": "house_with_garden",
            "unicode": "1F3E1",
            "name": "house with garden"
        },
        "office": {
            "unescaped": "office",
            "unicode": "1F3E2",
            "name": "office building"
        },
        "post_office": {
            "unescaped": "post_office",
            "unicode": "1F3E3",
            "name": "japanese post office"
        },
        "european_post_office": {
            "unescaped": "european_post_office",
            "unicode": "1F3E4",
            "name": "european post office"
        },
        "hospital": {
            "unescaped": "hospital",
            "unicode": "1F3E5",
            "name": "hospital"
        },
        "bank": {
            "unescaped": "bank",
            "unicode": "1F3E6",
            "name": "bank"
        },
        "atm": {
            "unescaped": "atm",
            "unicode": "1F3E7",
            "name": "automated teller machine"
        },
        "hotel": {
            "unescaped": "hotel",
            "unicode": "1F3E8",
            "name": "hotel"
        },
        "love_hotel": {
            "unescaped": "love_hotel",
            "unicode": "1F3E9",
            "name": "love hotel"
        },
        "convenience_store": {
            "unescaped": "convenience_store",
            "unicode": "1F3EA",
            "name": "convenience store"
        },
        "school": {
            "unescaped": "school",
            "unicode": "1F3EB",
            "name": "school"
        },
        "department_store": {
            "unescaped": "department_store",
            "unicode": "1F3EC",
            "name": "department store"
        },
        "factory": {
            "unescaped": "factory",
            "unicode": "1F3ED",
            "name": "factory"
        },
        "izakaya_lantern": {
            "unescaped": "izakaya_lantern",
            "unicode": "1F3EE",
            "name": "izakaya lantern"
        },
        "lantern": {
            "unescaped": "lantern",
            "unicode": "1F3EE",
            "name": "izakaya lantern"
        },
        "japanese_castle": {
            "unescaped": "japanese_castle",
            "unicode": "1F3EF",
            "name": "japanese castle"
        },
        "european_castle": {
            "unescaped": "european_castle",
            "unicode": "1F3F0",
            "name": "european castle"
        },
        "skin\\-tone\\-2": {
            "unescaped": "skin-tone-2",
            "unicode": "1F3FB",
            "name": "emoji modifier fitzpatrick type-1-2"
        },
        "skin\\-tone\\-3": {
            "unescaped": "skin-tone-3",
            "unicode": "1F3FC",
            "name": "emoji modifier fitzpatrick type-3"
        },
        "skin\\-tone\\-4": {
            "unescaped": "skin-tone-4",
            "unicode": "1F3FD",
            "name": "emoji modifier fitzpatrick type-4"
        },
        "skin\\-tone\\-5": {
            "unescaped": "skin-tone-5",
            "unicode": "1F3FE",
            "name": "emoji modifier fitzpatrick type-5"
        },
        "skin\\-tone\\-6": {
            "unescaped": "skin-tone-6",
            "unicode": "1F3FF",
            "name": "emoji modifier fitzpatrick type-6"
        },
        "rat": {
            "unescaped": "rat",
            "unicode": "1F400",
            "name": "rat"
        },
        "mouse2": {
            "unescaped": "mouse2",
            "unicode": "1F401",
            "name": "mouse"
        },
        "ox": {
            "unescaped": "ox",
            "unicode": "1F402",
            "name": "ox"
        },
        "water_buffalo": {
            "unescaped": "water_buffalo",
            "unicode": "1F403",
            "name": "water buffalo"
        },
        "cow2": {
            "unescaped": "cow2",
            "unicode": "1F404",
            "name": "cow"
        },
        "tiger2": {
            "unescaped": "tiger2",
            "unicode": "1F405",
            "name": "tiger"
        },
        "leopard": {
            "unescaped": "leopard",
            "unicode": "1F406",
            "name": "leopard"
        },
        "rabbit2": {
            "unescaped": "rabbit2",
            "unicode": "1F407",
            "name": "rabbit"
        },
        "cat2": {
            "unescaped": "cat2",
            "unicode": "1F408",
            "name": "cat"
        },
        "dragon": {
            "unescaped": "dragon",
            "unicode": "1F409",
            "name": "dragon"
        },
        "crocodile": {
            "unescaped": "crocodile",
            "unicode": "1F40A",
            "name": "crocodile"
        },
        "whale2": {
            "unescaped": "whale2",
            "unicode": "1F40B",
            "name": "whale"
        },
        "snail": {
            "unescaped": "snail",
            "unicode": "1F40C",
            "name": "snail"
        },
        "snake": {
            "unescaped": "snake",
            "unicode": "1F40D",
            "name": "snake"
        },
        "racehorse": {
            "unescaped": "racehorse",
            "unicode": "1F40E",
            "name": "horse"
        },
        "ram": {
            "unescaped": "ram",
            "unicode": "1F40F",
            "name": "ram"
        },
        "goat": {
            "unescaped": "goat",
            "unicode": "1F410",
            "name": "goat"
        },
        "sheep": {
            "unescaped": "sheep",
            "unicode": "1F411",
            "name": "sheep"
        },
        "monkey": {
            "unescaped": "monkey",
            "unicode": "1F412",
            "name": "monkey"
        },
        "rooster": {
            "unescaped": "rooster",
            "unicode": "1F413",
            "name": "rooster"
        },
        "chicken": {
            "unescaped": "chicken",
            "unicode": "1F414",
            "name": "chicken"
        },
        "dog2": {
            "unescaped": "dog2",
            "unicode": "1F415",
            "name": "dog"
        },
        "pig2": {
            "unescaped": "pig2",
            "unicode": "1F416",
            "name": "pig"
        },
        "boar": {
            "unescaped": "boar",
            "unicode": "1F417",
            "name": "boar"
        },
        "elephant": {
            "unescaped": "elephant",
            "unicode": "1F418",
            "name": "elephant"
        },
        "octopus": {
            "unescaped": "octopus",
            "unicode": "1F419",
            "name": "octopus"
        },
        "shell": {
            "unescaped": "shell",
            "unicode": "1F41A",
            "name": "spiral shell"
        },
        "bug": {
            "unescaped": "bug",
            "unicode": "1F41B",
            "name": "bug"
        },
        "ant": {
            "unescaped": "ant",
            "unicode": "1F41C",
            "name": "ant"
        },
        "bee": {
            "unescaped": "bee",
            "unicode": "1F41D",
            "name": "honeybee"
        },
        "honeybee": {
            "unescaped": "honeybee",
            "unicode": "1F41D",
            "name": "honeybee"
        },
        "beetle": {
            "unescaped": "beetle",
            "unicode": "1F41E",
            "name": "lady beetle"
        },
        "fish": {
            "unescaped": "fish",
            "unicode": "1F41F",
            "name": "fish"
        },
        "tropical_fish": {
            "unescaped": "tropical_fish",
            "unicode": "1F420",
            "name": "tropical fish"
        },
        "blowfish": {
            "unescaped": "blowfish",
            "unicode": "1F421",
            "name": "blowfish"
        },
        "turtle": {
            "unescaped": "turtle",
            "unicode": "1F422",
            "name": "turtle"
        },
        "hatching_chick": {
            "unescaped": "hatching_chick",
            "unicode": "1F423",
            "name": "hatching chick"
        },
        "baby_chick": {
            "unescaped": "baby_chick",
            "unicode": "1F424",
            "name": "baby chick"
        },
        "hatched_chick": {
            "unescaped": "hatched_chick",
            "unicode": "1F425",
            "name": "front-facing baby chick"
        },
        "bird": {
            "unescaped": "bird",
            "unicode": "1F426",
            "name": "bird"
        },
        "penguin": {
            "unescaped": "penguin",
            "unicode": "1F427",
            "name": "penguin"
        },
        "koala": {
            "unescaped": "koala",
            "unicode": "1F428",
            "name": "koala"
        },
        "poodle": {
            "unescaped": "poodle",
            "unicode": "1F429",
            "name": "poodle"
        },
        "dromedary_camel": {
            "unescaped": "dromedary_camel",
            "unicode": "1F42A",
            "name": "dromedary camel"
        },
        "camel": {
            "unescaped": "camel",
            "unicode": "1F42B",
            "name": "bactrian camel"
        },
        "dolphin": {
            "unescaped": "dolphin",
            "unicode": "1F42C",
            "name": "dolphin"
        },
        "flipper": {
            "unescaped": "flipper",
            "unicode": "1F42C",
            "name": "dolphin"
        },
        "mouse": {
            "unescaped": "mouse",
            "unicode": "1F42D",
            "name": "mouse face"
        },
        "cow": {
            "unescaped": "cow",
            "unicode": "1F42E",
            "name": "cow face"
        },
        "tiger": {
            "unescaped": "tiger",
            "unicode": "1F42F",
            "name": "tiger face"
        },
        "rabbit": {
            "unescaped": "rabbit",
            "unicode": "1F430",
            "name": "rabbit face"
        },
        "cat": {
            "unescaped": "cat",
            "unicode": "1F431",
            "name": "cat face"
        },
        "dragon_face": {
            "unescaped": "dragon_face",
            "unicode": "1F432",
            "name": "dragon face"
        },
        "whale": {
            "unescaped": "whale",
            "unicode": "1F433",
            "name": "spouting whale"
        },
        "horse": {
            "unescaped": "horse",
            "unicode": "1F434",
            "name": "horse face"
        },
        "monkey_face": {
            "unescaped": "monkey_face",
            "unicode": "1F435",
            "name": "monkey face"
        },
        "dog": {
            "unescaped": "dog",
            "unicode": "1F436",
            "name": "dog face"
        },
        "pig": {
            "unescaped": "pig",
            "unicode": "1F437",
            "name": "pig face"
        },
        "frog": {
            "unescaped": "frog",
            "unicode": "1F438",
            "name": "frog face"
        },
        "hamster": {
            "unescaped": "hamster",
            "unicode": "1F439",
            "name": "hamster face"
        },
        "wolf": {
            "unescaped": "wolf",
            "unicode": "1F43A",
            "name": "wolf face"
        },
        "bear": {
            "unescaped": "bear",
            "unicode": "1F43B",
            "name": "bear face"
        },
        "panda_face": {
            "unescaped": "panda_face",
            "unicode": "1F43C",
            "name": "panda face"
        },
        "pig_nose": {
            "unescaped": "pig_nose",
            "unicode": "1F43D",
            "name": "pig nose"
        },
        "feet": {
            "unescaped": "feet",
            "unicode": "1F43E",
            "name": "paw prints"
        },
        "paw_prints": {
            "unescaped": "paw_prints",
            "unicode": "1F43E",
            "name": "paw prints"
        },
        "eyes": {
            "unescaped": "eyes",
            "unicode": "1F440",
            "name": "eyes"
        },
        "ear": {
            "unescaped": "ear",
            "unicode": "1F442",
            "name": "ear"
        },
        "nose": {
            "unescaped": "nose",
            "unicode": "1F443",
            "name": "nose"
        },
        "lips": {
            "unescaped": "lips",
            "unicode": "1F444",
            "name": "mouth"
        },
        "tongue": {
            "unescaped": "tongue",
            "unicode": "1F445",
            "name": "tongue"
        },
        "point_up_2": {
            "unescaped": "point_up_2",
            "unicode": "1F446",
            "name": "white up pointing backhand index"
        },
        "point_down": {
            "unescaped": "point_down",
            "unicode": "1F447",
            "name": "white down pointing backhand index"
        },
        "point_left": {
            "unescaped": "point_left",
            "unicode": "1F448",
            "name": "white left pointing backhand index"
        },
        "point_right": {
            "unescaped": "point_right",
            "unicode": "1F449",
            "name": "white right pointing backhand index"
        },
        "facepunch": {
            "unescaped": "facepunch",
            "unicode": "1F44A",
            "name": "fisted hand sign"
        },
        "punch": {
            "unescaped": "punch",
            "unicode": "1F44A",
            "name": "fisted hand sign"
        },
        "wave": {
            "unescaped": "wave",
            "unicode": "1F44B",
            "name": "waving hand sign"
        },
        "ok_hand": {
            "unescaped": "ok_hand",
            "unicode": "1F44C",
            "name": "ok hand sign"
        },
        "\\+1": {
            "unescaped": "+1",
            "unicode": "1F44D",
            "name": "thumbs up sign"
        },
        "thumbsup": {
            "unescaped": "thumbsup",
            "unicode": "1F44D",
            "name": "thumbs up sign"
        },
        "\\-1": {
            "unescaped": "-1",
            "unicode": "1F44E",
            "name": "thumbs down sign"
        },
        "thumbsdown": {
            "unescaped": "thumbsdown",
            "unicode": "1F44E",
            "name": "thumbs down sign"
        },
        "clap": {
            "unescaped": "clap",
            "unicode": "1F44F",
            "name": "clapping hands sign"
        },
        "open_hands": {
            "unescaped": "open_hands",
            "unicode": "1F450",
            "name": "open hands sign"
        },
        "crown": {
            "unescaped": "crown",
            "unicode": "1F451",
            "name": "crown"
        },
        "womans_hat": {
            "unescaped": "womans_hat",
            "unicode": "1F452",
            "name": "womans hat"
        },
        "eyeglasses": {
            "unescaped": "eyeglasses",
            "unicode": "1F453",
            "name": "eyeglasses"
        },
        "necktie": {
            "unescaped": "necktie",
            "unicode": "1F454",
            "name": "necktie"
        },
        "shirt": {
            "unescaped": "shirt",
            "unicode": "1F455",
            "name": "t-shirt"
        },
        "tshirt": {
            "unescaped": "tshirt",
            "unicode": "1F455",
            "name": "t-shirt"
        },
        "jeans": {
            "unescaped": "jeans",
            "unicode": "1F456",
            "name": "jeans"
        },
        "dress": {
            "unescaped": "dress",
            "unicode": "1F457",
            "name": "dress"
        },
        "kimono": {
            "unescaped": "kimono",
            "unicode": "1F458",
            "name": "kimono"
        },
        "bikini": {
            "unescaped": "bikini",
            "unicode": "1F459",
            "name": "bikini"
        },
        "womans_clothes": {
            "unescaped": "womans_clothes",
            "unicode": "1F45A",
            "name": "womans clothes"
        },
        "purse": {
            "unescaped": "purse",
            "unicode": "1F45B",
            "name": "purse"
        },
        "handbag": {
            "unescaped": "handbag",
            "unicode": "1F45C",
            "name": "handbag"
        },
        "pouch": {
            "unescaped": "pouch",
            "unicode": "1F45D",
            "name": "pouch"
        },
        "mans_shoe": {
            "unescaped": "mans_shoe",
            "unicode": "1F45E",
            "name": "mans shoe"
        },
        "shoe": {
            "unescaped": "shoe",
            "unicode": "1F45E",
            "name": "mans shoe"
        },
        "athletic_shoe": {
            "unescaped": "athletic_shoe",
            "unicode": "1F45F",
            "name": "athletic shoe"
        },
        "high_heel": {
            "unescaped": "high_heel",
            "unicode": "1F460",
            "name": "high-heeled shoe"
        },
        "sandal": {
            "unescaped": "sandal",
            "unicode": "1F461",
            "name": "womans sandal"
        },
        "boot": {
            "unescaped": "boot",
            "unicode": "1F462",
            "name": "womans boots"
        },
        "footprints": {
            "unescaped": "footprints",
            "unicode": "1F463",
            "name": "footprints"
        },
        "bust_in_silhouette": {
            "unescaped": "bust_in_silhouette",
            "unicode": "1F464",
            "name": "bust in silhouette"
        },
        "busts_in_silhouette": {
            "unescaped": "busts_in_silhouette",
            "unicode": "1F465",
            "name": "busts in silhouette"
        },
        "boy": {
            "unescaped": "boy",
            "unicode": "1F466",
            "name": "boy"
        },
        "girl": {
            "unescaped": "girl",
            "unicode": "1F467",
            "name": "girl"
        },
        "man": {
            "unescaped": "man",
            "unicode": "1F468",
            "name": "man"
        },
        "woman": {
            "unescaped": "woman",
            "unicode": "1F469",
            "name": "woman"
        },
        "family": {
            "unescaped": "family",
            "unicode": "1F46A",
            "name": "family"
        },
        "couple": {
            "unescaped": "couple",
            "unicode": "1F46B",
            "name": "man and woman holding hands"
        },
        "two_men_holding_hands": {
            "unescaped": "two_men_holding_hands",
            "unicode": "1F46C",
            "name": "two men holding hands"
        },
        "two_women_holding_hands": {
            "unescaped": "two_women_holding_hands",
            "unicode": "1F46D",
            "name": "two women holding hands"
        },
        "cop": {
            "unescaped": "cop",
            "unicode": "1F46E",
            "name": "police officer"
        },
        "dancers": {
            "unescaped": "dancers",
            "unicode": "1F46F",
            "name": "woman with bunny ears"
        },
        "bride_with_veil": {
            "unescaped": "bride_with_veil",
            "unicode": "1F470",
            "name": "bride with veil"
        },
        "person_with_blond_hair": {
            "unescaped": "person_with_blond_hair",
            "unicode": "1F471",
            "name": "person with blond hair"
        },
        "man_with_gua_pi_mao": {
            "unescaped": "man_with_gua_pi_mao",
            "unicode": "1F472",
            "name": "man with gua pi mao"
        },
        "man_with_turban": {
            "unescaped": "man_with_turban",
            "unicode": "1F473",
            "name": "man with turban"
        },
        "older_man": {
            "unescaped": "older_man",
            "unicode": "1F474",
            "name": "older man"
        },
        "older_woman": {
            "unescaped": "older_woman",
            "unicode": "1F475",
            "name": "older woman"
        },
        "baby": {
            "unescaped": "baby",
            "unicode": "1F476",
            "name": "baby"
        },
        "construction_worker": {
            "unescaped": "construction_worker",
            "unicode": "1F477",
            "name": "construction worker"
        },
        "princess": {
            "unescaped": "princess",
            "unicode": "1F478",
            "name": "princess"
        },
        "japanese_ogre": {
            "unescaped": "japanese_ogre",
            "unicode": "1F479",
            "name": "japanese ogre"
        },
        "japanese_goblin": {
            "unescaped": "japanese_goblin",
            "unicode": "1F47A",
            "name": "japanese goblin"
        },
        "ghost": {
            "unescaped": "ghost",
            "unicode": "1F47B",
            "name": "ghost"
        },
        "angel": {
            "unescaped": "angel",
            "unicode": "1F47C",
            "name": "baby angel"
        },
        "alien": {
            "unescaped": "alien",
            "unicode": "1F47D",
            "name": "extraterrestrial alien"
        },
        "space_invader": {
            "unescaped": "space_invader",
            "unicode": "1F47E",
            "name": "alien monster"
        },
        "imp": {
            "unescaped": "imp",
            "unicode": "1F47F",
            "name": "imp"
        },
        "skull": {
            "unescaped": "skull",
            "unicode": "1F480",
            "name": "skull"
        },
        "information_desk_person": {
            "unescaped": "information_desk_person",
            "unicode": "1F481",
            "name": "information desk person"
        },
        "guardsman": {
            "unescaped": "guardsman",
            "unicode": "1F482",
            "name": "guardsman"
        },
        "dancer": {
            "unescaped": "dancer",
            "unicode": "1F483",
            "name": "dancer"
        },
        "lipstick": {
            "unescaped": "lipstick",
            "unicode": "1F484",
            "name": "lipstick"
        },
        "nail_care": {
            "unescaped": "nail_care",
            "unicode": "1F485",
            "name": "nail polish"
        },
        "massage": {
            "unescaped": "massage",
            "unicode": "1F486",
            "name": "face massage"
        },
        "haircut": {
            "unescaped": "haircut",
            "unicode": "1F487",
            "name": "haircut"
        },
        "barber": {
            "unescaped": "barber",
            "unicode": "1F488",
            "name": "barber pole"
        },
        "syringe": {
            "unescaped": "syringe",
            "unicode": "1F489",
            "name": "syringe"
        },
        "pill": {
            "unescaped": "pill",
            "unicode": "1F48A",
            "name": "pill"
        },
        "kiss": {
            "unescaped": "kiss",
            "unicode": "1F48B",
            "name": "kiss mark"
        },
        "love_letter": {
            "unescaped": "love_letter",
            "unicode": "1F48C",
            "name": "love letter"
        },
        "ring": {
            "unescaped": "ring",
            "unicode": "1F48D",
            "name": "ring"
        },
        "gem": {
            "unescaped": "gem",
            "unicode": "1F48E",
            "name": "gem stone"
        },
        "couplekiss": {
            "unescaped": "couplekiss",
            "unicode": "1F48F",
            "name": "kiss"
        },
        "bouquet": {
            "unescaped": "bouquet",
            "unicode": "1F490",
            "name": "bouquet"
        },
        "couple_with_heart": {
            "unescaped": "couple_with_heart",
            "unicode": "1F491",
            "name": "couple with heart"
        },
        "wedding": {
            "unescaped": "wedding",
            "unicode": "1F492",
            "name": "wedding"
        },
        "heartbeat": {
            "unescaped": "heartbeat",
            "unicode": "1F493",
            "name": "beating heart"
        },
        "broken_heart": {
            "unescaped": "broken_heart",
            "unicode": "1F494",
            "name": "broken heart"
        },
        "two_hearts": {
            "unescaped": "two_hearts",
            "unicode": "1F495",
            "name": "two hearts"
        },
        "sparkling_heart": {
            "unescaped": "sparkling_heart",
            "unicode": "1F496",
            "name": "sparkling heart"
        },
        "heartpulse": {
            "unescaped": "heartpulse",
            "unicode": "1F497",
            "name": "growing heart"
        },
        "cupid": {
            "unescaped": "cupid",
            "unicode": "1F498",
            "name": "heart with arrow"
        },
        "blue_heart": {
            "unescaped": "blue_heart",
            "unicode": "1F499",
            "name": "blue heart"
        },
        "green_heart": {
            "unescaped": "green_heart",
            "unicode": "1F49A",
            "name": "green heart"
        },
        "yellow_heart": {
            "unescaped": "yellow_heart",
            "unicode": "1F49B",
            "name": "yellow heart"
        },
        "purple_heart": {
            "unescaped": "purple_heart",
            "unicode": "1F49C",
            "name": "purple heart"
        },
        "gift_heart": {
            "unescaped": "gift_heart",
            "unicode": "1F49D",
            "name": "heart with ribbon"
        },
        "revolving_hearts": {
            "unescaped": "revolving_hearts",
            "unicode": "1F49E",
            "name": "revolving hearts"
        },
        "heart_decoration": {
            "unescaped": "heart_decoration",
            "unicode": "1F49F",
            "name": "heart decoration"
        },
        "diamond_shape_with_a_dot_inside": {
            "unescaped": "diamond_shape_with_a_dot_inside",
            "unicode": "1F4A0",
            "name": "diamond shape with a dot inside"
        },
        "bulb": {
            "unescaped": "bulb",
            "unicode": "1F4A1",
            "name": "electric light bulb"
        },
        "anger": {
            "unescaped": "anger",
            "unicode": "1F4A2",
            "name": "anger symbol"
        },
        "bomb": {
            "unescaped": "bomb",
            "unicode": "1F4A3",
            "name": "bomb"
        },
        "zzz": {
            "unescaped": "zzz",
            "unicode": "1F4A4",
            "name": "sleeping symbol"
        },
        "boom": {
            "unescaped": "boom",
            "unicode": "1F4A5",
            "name": "collision symbol"
        },
        "collision": {
            "unescaped": "collision",
            "unicode": "1F4A5",
            "name": "collision symbol"
        },
        "sweat_drops": {
            "unescaped": "sweat_drops",
            "unicode": "1F4A6",
            "name": "splashing sweat symbol"
        },
        "droplet": {
            "unescaped": "droplet",
            "unicode": "1F4A7",
            "name": "droplet"
        },
        "dash": {
            "unescaped": "dash",
            "unicode": "1F4A8",
            "name": "dash symbol"
        },
        "hankey": {
            "unescaped": "hankey",
            "unicode": "1F4A9",
            "name": "pile of poo"
        },
        "poop": {
            "unescaped": "poop",
            "unicode": "1F4A9",
            "name": "pile of poo"
        },
        "shit": {
            "unescaped": "shit",
            "unicode": "1F4A9",
            "name": "pile of poo"
        },
        "muscle": {
            "unescaped": "muscle",
            "unicode": "1F4AA",
            "name": "flexed biceps"
        },
        "dizzy": {
            "unescaped": "dizzy",
            "unicode": "1F4AB",
            "name": "dizzy symbol"
        },
        "speech_balloon": {
            "unescaped": "speech_balloon",
            "unicode": "1F4AC",
            "name": "speech balloon"
        },
        "thought_balloon": {
            "unescaped": "thought_balloon",
            "unicode": "1F4AD",
            "name": "thought balloon"
        },
        "white_flower": {
            "unescaped": "white_flower",
            "unicode": "1F4AE",
            "name": "white flower"
        },
        "moneybag": {
            "unescaped": "moneybag",
            "unicode": "1F4B0",
            "name": "money bag"
        },
        "currency_exchange": {
            "unescaped": "currency_exchange",
            "unicode": "1F4B1",
            "name": "currency exchange"
        },
        "heavy_dollar_sign": {
            "unescaped": "heavy_dollar_sign",
            "unicode": "1F4B2",
            "name": "heavy dollar sign"
        },
        "credit_card": {
            "unescaped": "credit_card",
            "unicode": "1F4B3",
            "name": "credit card"
        },
        "yen": {
            "unescaped": "yen",
            "unicode": "1F4B4",
            "name": "banknote with yen sign"
        },
        "dollar": {
            "unescaped": "dollar",
            "unicode": "1F4B5",
            "name": "banknote with dollar sign"
        },
        "euro": {
            "unescaped": "euro",
            "unicode": "1F4B6",
            "name": "banknote with euro sign"
        },
        "pound": {
            "unescaped": "pound",
            "unicode": "1F4B7",
            "name": "banknote with pound sign"
        },
        "money_with_wings": {
            "unescaped": "money_with_wings",
            "unicode": "1F4B8",
            "name": "money with wings"
        },
        "chart": {
            "unescaped": "chart",
            "unicode": "1F4B9",
            "name": "chart with upwards trend and yen sign"
        },
        "seat": {
            "unescaped": "seat",
            "unicode": "1F4BA",
            "name": "seat"
        },
        "computer": {
            "unescaped": "computer",
            "unicode": "1F4BB",
            "name": "personal computer"
        },
        "briefcase": {
            "unescaped": "briefcase",
            "unicode": "1F4BC",
            "name": "briefcase"
        },
        "minidisc": {
            "unescaped": "minidisc",
            "unicode": "1F4BD",
            "name": "minidisc"
        },
        "floppy_disk": {
            "unescaped": "floppy_disk",
            "unicode": "1F4BE",
            "name": "floppy disk"
        },
        "cd": {
            "unescaped": "cd",
            "unicode": "1F4BF",
            "name": "optical disc"
        },
        "dvd": {
            "unescaped": "dvd",
            "unicode": "1F4C0",
            "name": "dvd"
        },
        "file_folder": {
            "unescaped": "file_folder",
            "unicode": "1F4C1",
            "name": "file folder"
        },
        "open_file_folder": {
            "unescaped": "open_file_folder",
            "unicode": "1F4C2",
            "name": "open file folder"
        },
        "page_with_curl": {
            "unescaped": "page_with_curl",
            "unicode": "1F4C3",
            "name": "page with curl"
        },
        "page_facing_up": {
            "unescaped": "page_facing_up",
            "unicode": "1F4C4",
            "name": "page facing up"
        },
        "date": {
            "unescaped": "date",
            "unicode": "1F4C5",
            "name": "calendar"
        },
        "calendar": {
            "unescaped": "calendar",
            "unicode": "1F4C6",
            "name": "tear-off calendar"
        },
        "card_index": {
            "unescaped": "card_index",
            "unicode": "1F4C7",
            "name": "card index"
        },
        "chart_with_upwards_trend": {
            "unescaped": "chart_with_upwards_trend",
            "unicode": "1F4C8",
            "name": "chart with upwards trend"
        },
        "chart_with_downwards_trend": {
            "unescaped": "chart_with_downwards_trend",
            "unicode": "1F4C9",
            "name": "chart with downwards trend"
        },
        "bar_chart": {
            "unescaped": "bar_chart",
            "unicode": "1F4CA",
            "name": "bar chart"
        },
        "clipboard": {
            "unescaped": "clipboard",
            "unicode": "1F4CB",
            "name": "clipboard"
        },
        "pushpin": {
            "unescaped": "pushpin",
            "unicode": "1F4CC",
            "name": "pushpin"
        },
        "round_pushpin": {
            "unescaped": "round_pushpin",
            "unicode": "1F4CD",
            "name": "round pushpin"
        },
        "paperclip": {
            "unescaped": "paperclip",
            "unicode": "1F4CE",
            "name": "paperclip"
        },
        "straight_ruler": {
            "unescaped": "straight_ruler",
            "unicode": "1F4CF",
            "name": "straight ruler"
        },
        "triangular_ruler": {
            "unescaped": "triangular_ruler",
            "unicode": "1F4D0",
            "name": "triangular ruler"
        },
        "bookmark_tabs": {
            "unescaped": "bookmark_tabs",
            "unicode": "1F4D1",
            "name": "bookmark tabs"
        },
        "ledger": {
            "unescaped": "ledger",
            "unicode": "1F4D2",
            "name": "ledger"
        },
        "notebook": {
            "unescaped": "notebook",
            "unicode": "1F4D3",
            "name": "notebook"
        },
        "notebook_with_decorative_cover": {
            "unescaped": "notebook_with_decorative_cover",
            "unicode": "1F4D4",
            "name": "notebook with decorative cover"
        },
        "closed_book": {
            "unescaped": "closed_book",
            "unicode": "1F4D5",
            "name": "closed book"
        },
        "book": {
            "unescaped": "book",
            "unicode": "1F4D6",
            "name": "open book"
        },
        "open_book": {
            "unescaped": "open_book",
            "unicode": "1F4D6",
            "name": "open book"
        },
        "green_book": {
            "unescaped": "green_book",
            "unicode": "1F4D7",
            "name": "green book"
        },
        "blue_book": {
            "unescaped": "blue_book",
            "unicode": "1F4D8",
            "name": "blue book"
        },
        "orange_book": {
            "unescaped": "orange_book",
            "unicode": "1F4D9",
            "name": "orange book"
        },
        "books": {
            "unescaped": "books",
            "unicode": "1F4DA",
            "name": "books"
        },
        "name_badge": {
            "unescaped": "name_badge",
            "unicode": "1F4DB",
            "name": "name badge"
        },
        "scroll": {
            "unescaped": "scroll",
            "unicode": "1F4DC",
            "name": "scroll"
        },
        "memo": {
            "unescaped": "memo",
            "unicode": "1F4DD",
            "name": "memo"
        },
        "pencil": {
            "unescaped": "pencil",
            "unicode": "1F4DD",
            "name": "memo"
        },
        "telephone_receiver": {
            "unescaped": "telephone_receiver",
            "unicode": "1F4DE",
            "name": "telephone receiver"
        },
        "pager": {
            "unescaped": "pager",
            "unicode": "1F4DF",
            "name": "pager"
        },
        "fax": {
            "unescaped": "fax",
            "unicode": "1F4E0",
            "name": "fax machine"
        },
        "satellite": {
            "unescaped": "satellite",
            "unicode": "1F4E1",
            "name": "satellite antenna"
        },
        "loudspeaker": {
            "unescaped": "loudspeaker",
            "unicode": "1F4E2",
            "name": "public address loudspeaker"
        },
        "mega": {
            "unescaped": "mega",
            "unicode": "1F4E3",
            "name": "cheering megaphone"
        },
        "outbox_tray": {
            "unescaped": "outbox_tray",
            "unicode": "1F4E4",
            "name": "outbox tray"
        },
        "inbox_tray": {
            "unescaped": "inbox_tray",
            "unicode": "1F4E5",
            "name": "inbox tray"
        },
        "package": {
            "unescaped": "package",
            "unicode": "1F4E6",
            "name": "package"
        },
        "e\\-mail": {
            "unescaped": "e-mail",
            "unicode": "1F4E7",
            "name": "e-mail symbol"
        },
        "incoming_envelope": {
            "unescaped": "incoming_envelope",
            "unicode": "1F4E8",
            "name": "incoming envelope"
        },
        "envelope_with_arrow": {
            "unescaped": "envelope_with_arrow",
            "unicode": "1F4E9",
            "name": "envelope with downwards arrow above"
        },
        "mailbox_closed": {
            "unescaped": "mailbox_closed",
            "unicode": "1F4EA",
            "name": "closed mailbox with lowered flag"
        },
        "mailbox": {
            "unescaped": "mailbox",
            "unicode": "1F4EB",
            "name": "closed mailbox with raised flag"
        },
        "mailbox_with_mail": {
            "unescaped": "mailbox_with_mail",
            "unicode": "1F4EC",
            "name": "open mailbox with raised flag"
        },
        "mailbox_with_no_mail": {
            "unescaped": "mailbox_with_no_mail",
            "unicode": "1F4ED",
            "name": "open mailbox with lowered flag"
        },
        "postbox": {
            "unescaped": "postbox",
            "unicode": "1F4EE",
            "name": "postbox"
        },
        "postal_horn": {
            "unescaped": "postal_horn",
            "unicode": "1F4EF",
            "name": "postal horn"
        },
        "newspaper": {
            "unescaped": "newspaper",
            "unicode": "1F4F0",
            "name": "newspaper"
        },
        "iphone": {
            "unescaped": "iphone",
            "unicode": "1F4F1",
            "name": "mobile phone"
        },
        "calling": {
            "unescaped": "calling",
            "unicode": "1F4F2",
            "name": "mobile phone with rightwards arrow at left"
        },
        "vibration_mode": {
            "unescaped": "vibration_mode",
            "unicode": "1F4F3",
            "name": "vibration mode"
        },
        "mobile_phone_off": {
            "unescaped": "mobile_phone_off",
            "unicode": "1F4F4",
            "name": "mobile phone off"
        },
        "no_mobile_phones": {
            "unescaped": "no_mobile_phones",
            "unicode": "1F4F5",
            "name": "no mobile phones"
        },
        "signal_strength": {
            "unescaped": "signal_strength",
            "unicode": "1F4F6",
            "name": "antenna with bars"
        },
        "camera": {
            "unescaped": "camera",
            "unicode": "1F4F7",
            "name": "camera"
        },
        "video_camera": {
            "unescaped": "video_camera",
            "unicode": "1F4F9",
            "name": "video camera"
        },
        "tv": {
            "unescaped": "tv",
            "unicode": "1F4FA",
            "name": "television"
        },
        "radio": {
            "unescaped": "radio",
            "unicode": "1F4FB",
            "name": "radio"
        },
        "vhs": {
            "unescaped": "vhs",
            "unicode": "1F4FC",
            "name": "videocassette"
        },
        "twisted_rightwards_arrows": {
            "unescaped": "twisted_rightwards_arrows",
            "unicode": "1F500",
            "name": "twisted rightwards arrows"
        },
        "repeat": {
            "unescaped": "repeat",
            "unicode": "1F501",
            "name": "clockwise rightwards and leftwards open circle arrows"
        },
        "repeat_one": {
            "unescaped": "repeat_one",
            "unicode": "1F502",
            "name": "clockwise rightwards and leftwards open circle arrows with circled one overlay"
        },
        "arrows_clockwise": {
            "unescaped": "arrows_clockwise",
            "unicode": "1F503",
            "name": "clockwise downwards and upwards open circle arrows"
        },
        "arrows_counterclockwise": {
            "unescaped": "arrows_counterclockwise",
            "unicode": "1F504",
            "name": "anticlockwise downwards and upwards open circle arrows"
        },
        "low_brightness": {
            "unescaped": "low_brightness",
            "unicode": "1F505",
            "name": "low brightness symbol"
        },
        "high_brightness": {
            "unescaped": "high_brightness",
            "unicode": "1F506",
            "name": "high brightness symbol"
        },
        "mute": {
            "unescaped": "mute",
            "unicode": "1F507",
            "name": "speaker with cancellation stroke"
        },
        "speaker": {
            "unescaped": "speaker",
            "unicode": "1F508",
            "name": "speaker"
        },
        "sound": {
            "unescaped": "sound",
            "unicode": "1F509",
            "name": "speaker with one sound wave"
        },
        "loud_sound": {
            "unescaped": "loud_sound",
            "unicode": "1F50A",
            "name": "speaker with three sound waves"
        },
        "battery": {
            "unescaped": "battery",
            "unicode": "1F50B",
            "name": "battery"
        },
        "electric_plug": {
            "unescaped": "electric_plug",
            "unicode": "1F50C",
            "name": "electric plug"
        },
        "mag": {
            "unescaped": "mag",
            "unicode": "1F50D",
            "name": "left-pointing magnifying glass"
        },
        "mag_right": {
            "unescaped": "mag_right",
            "unicode": "1F50E",
            "name": "right-pointing magnifying glass"
        },
        "lock_with_ink_pen": {
            "unescaped": "lock_with_ink_pen",
            "unicode": "1F50F",
            "name": "lock with ink pen"
        },
        "closed_lock_with_key": {
            "unescaped": "closed_lock_with_key",
            "unicode": "1F510",
            "name": "closed lock with key"
        },
        "key": {
            "unescaped": "key",
            "unicode": "1F511",
            "name": "key"
        },
        "lock": {
            "unescaped": "lock",
            "unicode": "1F512",
            "name": "lock"
        },
        "unlock": {
            "unescaped": "unlock",
            "unicode": "1F513",
            "name": "open lock"
        },
        "bell": {
            "unescaped": "bell",
            "unicode": "1F514",
            "name": "bell"
        },
        "no_bell": {
            "unescaped": "no_bell",
            "unicode": "1F515",
            "name": "bell with cancellation stroke"
        },
        "bookmark": {
            "unescaped": "bookmark",
            "unicode": "1F516",
            "name": "bookmark"
        },
        "link": {
            "unescaped": "link",
            "unicode": "1F517",
            "name": "link symbol"
        },
        "radio_button": {
            "unescaped": "radio_button",
            "unicode": "1F518",
            "name": "radio button"
        },
        "back": {
            "unescaped": "back",
            "unicode": "1F519",
            "name": "back with leftwards arrow above"
        },
        "end": {
            "unescaped": "end",
            "unicode": "1F51A",
            "name": "end with leftwards arrow above"
        },
        "on": {
            "unescaped": "on",
            "unicode": "1F51B",
            "name": "on with exclamation mark with left right arrow above"
        },
        "soon": {
            "unescaped": "soon",
            "unicode": "1F51C",
            "name": "soon with rightwards arrow above"
        },
        "top": {
            "unescaped": "top",
            "unicode": "1F51D",
            "name": "top with upwards arrow above"
        },
        "underage": {
            "unescaped": "underage",
            "unicode": "1F51E",
            "name": "no one under eighteen symbol"
        },
        "keycap_ten": {
            "unescaped": "keycap_ten",
            "unicode": "1F51F",
            "name": "keycap ten"
        },
        "capital_abcd": {
            "unescaped": "capital_abcd",
            "unicode": "1F520",
            "name": "input symbol for latin capital letters"
        },
        "abcd": {
            "unescaped": "abcd",
            "unicode": "1F521",
            "name": "input symbol for latin small letters"
        },
        "symbols": {
            "unescaped": "symbols",
            "unicode": "1F523",
            "name": "input symbol for symbols"
        },
        "abc": {
            "unescaped": "abc",
            "unicode": "1F524",
            "name": "input symbol for latin letters"
        },
        "fire": {
            "unescaped": "fire",
            "unicode": "1F525",
            "name": "fire"
        },
        "flashlight": {
            "unescaped": "flashlight",
            "unicode": "1F526",
            "name": "electric torch"
        },
        "wrench": {
            "unescaped": "wrench",
            "unicode": "1F527",
            "name": "wrench"
        },
        "hammer": {
            "unescaped": "hammer",
            "unicode": "1F528",
            "name": "hammer"
        },
        "nut_and_bolt": {
            "unescaped": "nut_and_bolt",
            "unicode": "1F529",
            "name": "nut and bolt"
        },
        "hocho": {
            "unescaped": "hocho",
            "unicode": "1F52A",
            "name": "hocho"
        },
        "knife": {
            "unescaped": "knife",
            "unicode": "1F52A",
            "name": "hocho"
        },
        "gun": {
            "unescaped": "gun",
            "unicode": "1F52B",
            "name": "pistol"
        },
        "microscope": {
            "unescaped": "microscope",
            "unicode": "1F52C",
            "name": "microscope"
        },
        "telescope": {
            "unescaped": "telescope",
            "unicode": "1F52D",
            "name": "telescope"
        },
        "crystal_ball": {
            "unescaped": "crystal_ball",
            "unicode": "1F52E",
            "name": "crystal ball"
        },
        "six_pointed_star": {
            "unescaped": "six_pointed_star",
            "unicode": "1F52F",
            "name": "six pointed star with middle dot"
        },
        "beginner": {
            "unescaped": "beginner",
            "unicode": "1F530",
            "name": "japanese symbol for beginner"
        },
        "trident": {
            "unescaped": "trident",
            "unicode": "1F531",
            "name": "trident emblem"
        },
        "black_square_button": {
            "unescaped": "black_square_button",
            "unicode": "1F532",
            "name": "black square button"
        },
        "white_square_button": {
            "unescaped": "white_square_button",
            "unicode": "1F533",
            "name": "white square button"
        },
        "red_circle": {
            "unescaped": "red_circle",
            "unicode": "1F534",
            "name": "large red circle"
        },
        "large_blue_circle": {
            "unescaped": "large_blue_circle",
            "unicode": "1F535",
            "name": "large blue circle"
        },
        "large_orange_diamond": {
            "unescaped": "large_orange_diamond",
            "unicode": "1F536",
            "name": "large orange diamond"
        },
        "large_blue_diamond": {
            "unescaped": "large_blue_diamond",
            "unicode": "1F537",
            "name": "large blue diamond"
        },
        "small_orange_diamond": {
            "unescaped": "small_orange_diamond",
            "unicode": "1F538",
            "name": "small orange diamond"
        },
        "small_blue_diamond": {
            "unescaped": "small_blue_diamond",
            "unicode": "1F539",
            "name": "small blue diamond"
        },
        "small_red_triangle": {
            "unescaped": "small_red_triangle",
            "unicode": "1F53A",
            "name": "up-pointing red triangle"
        },
        "small_red_triangle_down": {
            "unescaped": "small_red_triangle_down",
            "unicode": "1F53B",
            "name": "down-pointing red triangle"
        },
        "arrow_up_small": {
            "unescaped": "arrow_up_small",
            "unicode": "1F53C",
            "name": "up-pointing small red triangle"
        },
        "arrow_down_small": {
            "unescaped": "arrow_down_small",
            "unicode": "1F53D",
            "name": "down-pointing small red triangle"
        },
        "clock1": {
            "unescaped": "clock1",
            "unicode": "1F550",
            "name": "clock face one oclock"
        },
        "clock2": {
            "unescaped": "clock2",
            "unicode": "1F551",
            "name": "clock face two oclock"
        },
        "clock3": {
            "unescaped": "clock3",
            "unicode": "1F552",
            "name": "clock face three oclock"
        },
        "clock4": {
            "unescaped": "clock4",
            "unicode": "1F553",
            "name": "clock face four oclock"
        },
        "clock5": {
            "unescaped": "clock5",
            "unicode": "1F554",
            "name": "clock face five oclock"
        },
        "clock6": {
            "unescaped": "clock6",
            "unicode": "1F555",
            "name": "clock face six oclock"
        },
        "clock7": {
            "unescaped": "clock7",
            "unicode": "1F556",
            "name": "clock face seven oclock"
        },
        "clock8": {
            "unescaped": "clock8",
            "unicode": "1F557",
            "name": "clock face eight oclock"
        },
        "clock9": {
            "unescaped": "clock9",
            "unicode": "1F558",
            "name": "clock face nine oclock"
        },
        "clock10": {
            "unescaped": "clock10",
            "unicode": "1F559",
            "name": "clock face ten oclock"
        },
        "clock11": {
            "unescaped": "clock11",
            "unicode": "1F55A",
            "name": "clock face eleven oclock"
        },
        "clock12": {
            "unescaped": "clock12",
            "unicode": "1F55B",
            "name": "clock face twelve oclock"
        },
        "clock130": {
            "unescaped": "clock130",
            "unicode": "1F55C",
            "name": "clock face one-thirty"
        },
        "clock230": {
            "unescaped": "clock230",
            "unicode": "1F55D",
            "name": "clock face two-thirty"
        },
        "clock330": {
            "unescaped": "clock330",
            "unicode": "1F55E",
            "name": "clock face three-thirty"
        },
        "clock430": {
            "unescaped": "clock430",
            "unicode": "1F55F",
            "name": "clock face four-thirty"
        },
        "clock530": {
            "unescaped": "clock530",
            "unicode": "1F560",
            "name": "clock face five-thirty"
        },
        "clock630": {
            "unescaped": "clock630",
            "unicode": "1F561",
            "name": "clock face six-thirty"
        },
        "clock730": {
            "unescaped": "clock730",
            "unicode": "1F562",
            "name": "clock face seven-thirty"
        },
        "clock830": {
            "unescaped": "clock830",
            "unicode": "1F563",
            "name": "clock face eight-thirty"
        },
        "clock930": {
            "unescaped": "clock930",
            "unicode": "1F564",
            "name": "clock face nine-thirty"
        },
        "clock1030": {
            "unescaped": "clock1030",
            "unicode": "1F565",
            "name": "clock face ten-thirty"
        },
        "clock1130": {
            "unescaped": "clock1130",
            "unicode": "1F566",
            "name": "clock face eleven-thirty"
        },
        "clock1230": {
            "unescaped": "clock1230",
            "unicode": "1F567",
            "name": "clock face twelve-thirty"
        },
        "mount_fuji": {
            "unescaped": "mount_fuji",
            "unicode": "1F5FB",
            "name": "mount fuji"
        },
        "tokyo_tower": {
            "unescaped": "tokyo_tower",
            "unicode": "1F5FC",
            "name": "tokyo tower"
        },
        "statue_of_liberty": {
            "unescaped": "statue_of_liberty",
            "unicode": "1F5FD",
            "name": "statue of liberty"
        },
        "japan": {
            "unescaped": "japan",
            "unicode": "1F5FE",
            "name": "silhouette of japan"
        },
        "moyai": {
            "unescaped": "moyai",
            "unicode": "1F5FF",
            "name": "moyai"
        },
        "grinning": {
            "unescaped": "grinning",
            "unicode": "1F600",
            "name": "grinning face"
        },
        "grin": {
            "unescaped": "grin",
            "unicode": "1F601",
            "name": "grinning face with smiling eyes"
        },
        "joy": {
            "unescaped": "joy",
            "unicode": "1F602",
            "name": "face with tears of joy"
        },
        "smiley": {
            "unescaped": "smiley",
            "unicode": "1F603",
            "name": "smiling face with open mouth"
        },
        "smile": {
            "unescaped": "smile",
            "unicode": "1F604",
            "name": "smiling face with open mouth and smiling eyes"
        },
        "sweat_smile": {
            "unescaped": "sweat_smile",
            "unicode": "1F605",
            "name": "smiling face with open mouth and cold sweat"
        },
        "laughing": {
            "unescaped": "laughing",
            "unicode": "1F606",
            "name": "smiling face with open mouth and tightly-closed eyes"
        },
        "satisfied": {
            "unescaped": "satisfied",
            "unicode": "1F606",
            "name": "smiling face with open mouth and tightly-closed eyes"
        },
        "innocent": {
            "unescaped": "innocent",
            "unicode": "1F607",
            "name": "smiling face with halo"
        },
        "smiling_imp": {
            "unescaped": "smiling_imp",
            "unicode": "1F608",
            "name": "smiling face with horns"
        },
        "wink": {
            "unescaped": "wink",
            "unicode": "1F609",
            "name": "winking face"
        },
        "blush": {
            "unescaped": "blush",
            "unicode": "1F60A",
            "name": "smiling face with smiling eyes"
        },
        "yum": {
            "unescaped": "yum",
            "unicode": "1F60B",
            "name": "face savouring delicious food"
        },
        "relieved": {
            "unescaped": "relieved",
            "unicode": "1F60C",
            "name": "relieved face"
        },
        "heart_eyes": {
            "unescaped": "heart_eyes",
            "unicode": "1F60D",
            "name": "smiling face with heart-shaped eyes"
        },
        "sunglasses": {
            "unescaped": "sunglasses",
            "unicode": "1F60E",
            "name": "smiling face with sunglasses"
        },
        "smirk": {
            "unescaped": "smirk",
            "unicode": "1F60F",
            "name": "smirking face"
        },
        "neutral_face": {
            "unescaped": "neutral_face",
            "unicode": "1F610",
            "name": "neutral face"
        },
        "expressionless": {
            "unescaped": "expressionless",
            "unicode": "1F611",
            "name": "expressionless face"
        },
        "unamused": {
            "unescaped": "unamused",
            "unicode": "1F612",
            "name": "unamused face"
        },
        "sweat": {
            "unescaped": "sweat",
            "unicode": "1F613",
            "name": "face with cold sweat"
        },
        "pensive": {
            "unescaped": "pensive",
            "unicode": "1F614",
            "name": "pensive face"
        },
        "confused": {
            "unescaped": "confused",
            "unicode": "1F615",
            "name": "confused face"
        },
        "confounded": {
            "unescaped": "confounded",
            "unicode": "1F616",
            "name": "confounded face"
        },
        "kissing": {
            "unescaped": "kissing",
            "unicode": "1F617",
            "name": "kissing face"
        },
        "kissing_heart": {
            "unescaped": "kissing_heart",
            "unicode": "1F618",
            "name": "face throwing a kiss"
        },
        "kissing_smiling_eyes": {
            "unescaped": "kissing_smiling_eyes",
            "unicode": "1F619",
            "name": "kissing face with smiling eyes"
        },
        "kissing_closed_eyes": {
            "unescaped": "kissing_closed_eyes",
            "unicode": "1F61A",
            "name": "kissing face with closed eyes"
        },
        "stuck_out_tongue": {
            "unescaped": "stuck_out_tongue",
            "unicode": "1F61B",
            "name": "face with stuck-out tongue"
        },
        "stuck_out_tongue_winking_eye": {
            "unescaped": "stuck_out_tongue_winking_eye",
            "unicode": "1F61C",
            "name": "face with stuck-out tongue and winking eye"
        },
        "stuck_out_tongue_closed_eyes": {
            "unescaped": "stuck_out_tongue_closed_eyes",
            "unicode": "1F61D",
            "name": "face with stuck-out tongue and tightly-closed eyes"
        },
        "disappointed": {
            "unescaped": "disappointed",
            "unicode": "1F61E",
            "name": "disappointed face"
        },
        "worried": {
            "unescaped": "worried",
            "unicode": "1F61F",
            "name": "worried face"
        },
        "angry": {
            "unescaped": "angry",
            "unicode": "1F620",
            "name": "angry face"
        },
        "rage": {
            "unescaped": "rage",
            "unicode": "1F621",
            "name": "pouting face"
        },
        "cry": {
            "unescaped": "cry",
            "unicode": "1F622",
            "name": "crying face"
        },
        "persevere": {
            "unescaped": "persevere",
            "unicode": "1F623",
            "name": "persevering face"
        },
        "triumph": {
            "unescaped": "triumph",
            "unicode": "1F624",
            "name": "face with look of triumph"
        },
        "disappointed_relieved": {
            "unescaped": "disappointed_relieved",
            "unicode": "1F625",
            "name": "disappointed but relieved face"
        },
        "frowning": {
            "unescaped": "frowning",
            "unicode": "1F626",
            "name": "frowning face with open mouth"
        },
        "anguished": {
            "unescaped": "anguished",
            "unicode": "1F627",
            "name": "anguished face"
        },
        "fearful": {
            "unescaped": "fearful",
            "unicode": "1F628",
            "name": "fearful face"
        },
        "weary": {
            "unescaped": "weary",
            "unicode": "1F629",
            "name": "weary face"
        },
        "sleepy": {
            "unescaped": "sleepy",
            "unicode": "1F62A",
            "name": "sleepy face"
        },
        "tired_face": {
            "unescaped": "tired_face",
            "unicode": "1F62B",
            "name": "tired face"
        },
        "grimacing": {
            "unescaped": "grimacing",
            "unicode": "1F62C",
            "name": "grimacing face"
        },
        "sob": {
            "unescaped": "sob",
            "unicode": "1F62D",
            "name": "loudly crying face"
        },
        "open_mouth": {
            "unescaped": "open_mouth",
            "unicode": "1F62E",
            "name": "face with open mouth"
        },
        "hushed": {
            "unescaped": "hushed",
            "unicode": "1F62F",
            "name": "hushed face"
        },
        "cold_sweat": {
            "unescaped": "cold_sweat",
            "unicode": "1F630",
            "name": "face with open mouth and cold sweat"
        },
        "scream": {
            "unescaped": "scream",
            "unicode": "1F631",
            "name": "face screaming in fear"
        },
        "astonished": {
            "unescaped": "astonished",
            "unicode": "1F632",
            "name": "astonished face"
        },
        "flushed": {
            "unescaped": "flushed",
            "unicode": "1F633",
            "name": "flushed face"
        },
        "sleeping": {
            "unescaped": "sleeping",
            "unicode": "1F634",
            "name": "sleeping face"
        },
        "dizzy_face": {
            "unescaped": "dizzy_face",
            "unicode": "1F635",
            "name": "dizzy face"
        },
        "no_mouth": {
            "unescaped": "no_mouth",
            "unicode": "1F636",
            "name": "face without mouth"
        },
        "mask": {
            "unescaped": "mask",
            "unicode": "1F637",
            "name": "face with medical mask"
        },
        "smile_cat": {
            "unescaped": "smile_cat",
            "unicode": "1F638",
            "name": "grinning cat face with smiling eyes"
        },
        "joy_cat": {
            "unescaped": "joy_cat",
            "unicode": "1F639",
            "name": "cat face with tears of joy"
        },
        "smiley_cat": {
            "unescaped": "smiley_cat",
            "unicode": "1F63A",
            "name": "smiling cat face with open mouth"
        },
        "heart_eyes_cat": {
            "unescaped": "heart_eyes_cat",
            "unicode": "1F63B",
            "name": "smiling cat face with heart-shaped eyes"
        },
        "smirk_cat": {
            "unescaped": "smirk_cat",
            "unicode": "1F63C",
            "name": "cat face with wry smile"
        },
        "kissing_cat": {
            "unescaped": "kissing_cat",
            "unicode": "1F63D",
            "name": "kissing cat face with closed eyes"
        },
        "pouting_cat": {
            "unescaped": "pouting_cat",
            "unicode": "1F63E",
            "name": "pouting cat face"
        },
        "crying_cat_face": {
            "unescaped": "crying_cat_face",
            "unicode": "1F63F",
            "name": "crying cat face"
        },
        "scream_cat": {
            "unescaped": "scream_cat",
            "unicode": "1F640",
            "name": "weary cat face"
        },
        "no_good": {
            "unescaped": "no_good",
            "unicode": "1F645",
            "name": "face with no good gesture"
        },
        "ok_woman": {
            "unescaped": "ok_woman",
            "unicode": "1F646",
            "name": "face with ok gesture"
        },
        "bow": {
            "unescaped": "bow",
            "unicode": "1F647",
            "name": "person bowing deeply"
        },
        "see_no_evil": {
            "unescaped": "see_no_evil",
            "unicode": "1F648",
            "name": "see-no-evil monkey"
        },
        "hear_no_evil": {
            "unescaped": "hear_no_evil",
            "unicode": "1F649",
            "name": "hear-no-evil monkey"
        },
        "speak_no_evil": {
            "unescaped": "speak_no_evil",
            "unicode": "1F64A",
            "name": "speak-no-evil monkey"
        },
        "raising_hand": {
            "unescaped": "raising_hand",
            "unicode": "1F64B",
            "name": "happy person raising one hand"
        },
        "raised_hands": {
            "unescaped": "raised_hands",
            "unicode": "1F64C",
            "name": "person raising both hands in celebration"
        },
        "person_frowning": {
            "unescaped": "person_frowning",
            "unicode": "1F64D",
            "name": "person frowning"
        },
        "person_with_pouting_face": {
            "unescaped": "person_with_pouting_face",
            "unicode": "1F64E",
            "name": "person with pouting face"
        },
        "pray": {
            "unescaped": "pray",
            "unicode": "1F64F",
            "name": "person with folded hands"
        },
        "rocket": {
            "unescaped": "rocket",
            "unicode": "1F680",
            "name": "rocket"
        },
        "helicopter": {
            "unescaped": "helicopter",
            "unicode": "1F681",
            "name": "helicopter"
        },
        "steam_locomotive": {
            "unescaped": "steam_locomotive",
            "unicode": "1F682",
            "name": "steam locomotive"
        },
        "railway_car": {
            "unescaped": "railway_car",
            "unicode": "1F683",
            "name": "railway car"
        },
        "bullettrain_side": {
            "unescaped": "bullettrain_side",
            "unicode": "1F684",
            "name": "high-speed train"
        },
        "bullettrain_front": {
            "unescaped": "bullettrain_front",
            "unicode": "1F685",
            "name": "high-speed train with bullet nose"
        },
        "train2": {
            "unescaped": "train2",
            "unicode": "1F686",
            "name": "train"
        },
        "metro": {
            "unescaped": "metro",
            "unicode": "1F687",
            "name": "metro"
        },
        "light_rail": {
            "unescaped": "light_rail",
            "unicode": "1F688",
            "name": "light rail"
        },
        "station": {
            "unescaped": "station",
            "unicode": "1F689",
            "name": "station"
        },
        "tram": {
            "unescaped": "tram",
            "unicode": "1F68A",
            "name": "tram"
        },
        "train": {
            "unescaped": "train",
            "unicode": "1F68B",
            "name": "tram car"
        },
        "bus": {
            "unescaped": "bus",
            "unicode": "1F68C",
            "name": "bus"
        },
        "oncoming_bus": {
            "unescaped": "oncoming_bus",
            "unicode": "1F68D",
            "name": "oncoming bus"
        },
        "trolleybus": {
            "unescaped": "trolleybus",
            "unicode": "1F68E",
            "name": "trolleybus"
        },
        "busstop": {
            "unescaped": "busstop",
            "unicode": "1F68F",
            "name": "bus stop"
        },
        "minibus": {
            "unescaped": "minibus",
            "unicode": "1F690",
            "name": "minibus"
        },
        "ambulance": {
            "unescaped": "ambulance",
            "unicode": "1F691",
            "name": "ambulance"
        },
        "fire_engine": {
            "unescaped": "fire_engine",
            "unicode": "1F692",
            "name": "fire engine"
        },
        "police_car": {
            "unescaped": "police_car",
            "unicode": "1F693",
            "name": "police car"
        },
        "oncoming_police_car": {
            "unescaped": "oncoming_police_car",
            "unicode": "1F694",
            "name": "oncoming police car"
        },
        "taxi": {
            "unescaped": "taxi",
            "unicode": "1F695",
            "name": "taxi"
        },
        "oncoming_taxi": {
            "unescaped": "oncoming_taxi",
            "unicode": "1F696",
            "name": "oncoming taxi"
        },
        "car": {
            "unescaped": "car",
            "unicode": "1F697",
            "name": "automobile"
        },
        "red_car": {
            "unescaped": "red_car",
            "unicode": "1F697",
            "name": "automobile"
        },
        "oncoming_automobile": {
            "unescaped": "oncoming_automobile",
            "unicode": "1F698",
            "name": "oncoming automobile"
        },
        "blue_car": {
            "unescaped": "blue_car",
            "unicode": "1F699",
            "name": "recreational vehicle"
        },
        "truck": {
            "unescaped": "truck",
            "unicode": "1F69A",
            "name": "delivery truck"
        },
        "articulated_lorry": {
            "unescaped": "articulated_lorry",
            "unicode": "1F69B",
            "name": "articulated lorry"
        },
        "tractor": {
            "unescaped": "tractor",
            "unicode": "1F69C",
            "name": "tractor"
        },
        "monorail": {
            "unescaped": "monorail",
            "unicode": "1F69D",
            "name": "monorail"
        },
        "mountain_railway": {
            "unescaped": "mountain_railway",
            "unicode": "1F69E",
            "name": "mountain railway"
        },
        "suspension_railway": {
            "unescaped": "suspension_railway",
            "unicode": "1F69F",
            "name": "suspension railway"
        },
        "mountain_cableway": {
            "unescaped": "mountain_cableway",
            "unicode": "1F6A0",
            "name": "mountain cableway"
        },
        "aerial_tramway": {
            "unescaped": "aerial_tramway",
            "unicode": "1F6A1",
            "name": "aerial tramway"
        },
        "ship": {
            "unescaped": "ship",
            "unicode": "1F6A2",
            "name": "ship"
        },
        "rowboat": {
            "unescaped": "rowboat",
            "unicode": "1F6A3",
            "name": "rowboat"
        },
        "speedboat": {
            "unescaped": "speedboat",
            "unicode": "1F6A4",
            "name": "speedboat"
        },
        "traffic_light": {
            "unescaped": "traffic_light",
            "unicode": "1F6A5",
            "name": "horizontal traffic light"
        },
        "vertical_traffic_light": {
            "unescaped": "vertical_traffic_light",
            "unicode": "1F6A6",
            "name": "vertical traffic light"
        },
        "construction": {
            "unescaped": "construction",
            "unicode": "1F6A7",
            "name": "construction sign"
        },
        "rotating_light": {
            "unescaped": "rotating_light",
            "unicode": "1F6A8",
            "name": "police cars revolving light"
        },
        "triangular_flag_on_post": {
            "unescaped": "triangular_flag_on_post",
            "unicode": "1F6A9",
            "name": "triangular flag on post"
        },
        "door": {
            "unescaped": "door",
            "unicode": "1F6AA",
            "name": "door"
        },
        "no_entry_sign": {
            "unescaped": "no_entry_sign",
            "unicode": "1F6AB",
            "name": "no entry sign"
        },
        "smoking": {
            "unescaped": "smoking",
            "unicode": "1F6AC",
            "name": "smoking symbol"
        },
        "no_smoking": {
            "unescaped": "no_smoking",
            "unicode": "1F6AD",
            "name": "no smoking symbol"
        },
        "put_litter_in_its_place": {
            "unescaped": "put_litter_in_its_place",
            "unicode": "1F6AE",
            "name": "put litter in its place symbol"
        },
        "do_not_litter": {
            "unescaped": "do_not_litter",
            "unicode": "1F6AF",
            "name": "do not litter symbol"
        },
        "potable_water": {
            "unescaped": "potable_water",
            "unicode": "1F6B0",
            "name": "potable water symbol"
        },
        "non\\-potable_water": {
            "unescaped": "non-potable_water",
            "unicode": "1F6B1",
            "name": "non-potable water symbol"
        },
        "bike": {
            "unescaped": "bike",
            "unicode": "1F6B2",
            "name": "bicycle"
        },
        "no_bicycles": {
            "unescaped": "no_bicycles",
            "unicode": "1F6B3",
            "name": "no bicycles"
        },
        "bicyclist": {
            "unescaped": "bicyclist",
            "unicode": "1F6B4",
            "name": "bicyclist"
        },
        "mountain_bicyclist": {
            "unescaped": "mountain_bicyclist",
            "unicode": "1F6B5",
            "name": "mountain bicyclist"
        },
        "walking": {
            "unescaped": "walking",
            "unicode": "1F6B6",
            "name": "pedestrian"
        },
        "no_pedestrians": {
            "unescaped": "no_pedestrians",
            "unicode": "1F6B7",
            "name": "no pedestrians"
        },
        "children_crossing": {
            "unescaped": "children_crossing",
            "unicode": "1F6B8",
            "name": "children crossing"
        },
        "mens": {
            "unescaped": "mens",
            "unicode": "1F6B9",
            "name": "mens symbol"
        },
        "womens": {
            "unescaped": "womens",
            "unicode": "1F6BA",
            "name": "womens symbol"
        },
        "restroom": {
            "unescaped": "restroom",
            "unicode": "1F6BB",
            "name": "restroom"
        },
        "baby_symbol": {
            "unescaped": "baby_symbol",
            "unicode": "1F6BC",
            "name": "baby symbol"
        },
        "toilet": {
            "unescaped": "toilet",
            "unicode": "1F6BD",
            "name": "toilet"
        },
        "wc": {
            "unescaped": "wc",
            "unicode": "1F6BE",
            "name": "water closet"
        },
        "shower": {
            "unescaped": "shower",
            "unicode": "1F6BF",
            "name": "shower"
        },
        "bath": {
            "unescaped": "bath",
            "unicode": "1F6C0",
            "name": "bath"
        },
        "bathtub": {
            "unescaped": "bathtub",
            "unicode": "1F6C1",
            "name": "bathtub"
        },
        "passport_control": {
            "unescaped": "passport_control",
            "unicode": "1F6C2",
            "name": "passport control"
        },
        "customs": {
            "unescaped": "customs",
            "unicode": "1F6C3",
            "name": "customs"
        },
        "baggage_claim": {
            "unescaped": "baggage_claim",
            "unicode": "1F6C4",
            "name": "baggage claim"
        },
        "left_luggage": {
            "unescaped": "left_luggage",
            "unicode": "1F6C5",
            "name": "left luggage"
        },
        "hash": {
            "unescaped": "hash",
            "unicode": "0023-20E3",
            "name": "hash key"
        },
        "zero": {
            "unescaped": "zero",
            "unicode": "0030-20E3",
            "name": "keycap 0"
        },
        "one": {
            "unescaped": "one",
            "unicode": "0031-20E3",
            "name": "keycap 1"
        },
        "two": {
            "unescaped": "two",
            "unicode": "0032-20E3",
            "name": "keycap 2"
        },
        "three": {
            "unescaped": "three",
            "unicode": "0033-20E3",
            "name": "keycap 3"
        },
        "four": {
            "unescaped": "four",
            "unicode": "0034-20E3",
            "name": "keycap 4"
        },
        "five": {
            "unescaped": "five",
            "unicode": "0035-20E3",
            "name": "keycap 5"
        },
        "six": {
            "unescaped": "six",
            "unicode": "0036-20E3",
            "name": "keycap 6"
        },
        "seven": {
            "unescaped": "seven",
            "unicode": "0037-20E3",
            "name": "keycap 7"
        },
        "eight": {
            "unescaped": "eight",
            "unicode": "0038-20E3",
            "name": "keycap 8"
        },
        "nine": {
            "unescaped": "nine",
            "unicode": "0039-20E3",
            "name": "keycap 9"
        },
        "flag\\-ae": {
            "unescaped": "flag-ae",
            "unicode": "1F1E6-1F1EA",
            "name": "regional indicator symbol letters ae"
        },
        "flag\\-at": {
            "unescaped": "flag-at",
            "unicode": "1F1E6-1F1F9",
            "name": "regional indicator symbol letters at"
        },
        "flag\\-au": {
            "unescaped": "flag-au",
            "unicode": "1F1E6-1F1FA",
            "name": "regional indicator symbol letters au"
        },
        "flag\\-be": {
            "unescaped": "flag-be",
            "unicode": "1F1E7-1F1EA",
            "name": "regional indicator symbol letters be"
        },
        "flag\\-br": {
            "unescaped": "flag-br",
            "unicode": "1F1E7-1F1F7",
            "name": "regional indicator symbol letters br"
        },
        "flag\\-ca": {
            "unescaped": "flag-ca",
            "unicode": "1F1E8-1F1E6",
            "name": "regional indicator symbol letters ca"
        },
        "flag\\-ch": {
            "unescaped": "flag-ch",
            "unicode": "1F1E8-1F1ED",
            "name": "regional indicator symbol letters ch"
        },
        "flag\\-cl": {
            "unescaped": "flag-cl",
            "unicode": "1F1E8-1F1F1",
            "name": "regional indicator symbol letters cl"
        },
        "flag\\-cn": {
            "unescaped": "flag-cn",
            "unicode": "1F1E8-1F1F3",
            "name": "regional indicator symbol letters cn"
        },
        "cn": {
            "unescaped": "cn",
            "unicode": "1F1E8-1F1F3",
            "name": "regional indicator symbol letters cn"
        },
        "flag\\-co": {
            "unescaped": "flag-co",
            "unicode": "1F1E8-1F1F4",
            "name": "regional indicator symbol letters co"
        },
        "flag\\-de": {
            "unescaped": "flag-de",
            "unicode": "1F1E9-1F1EA",
            "name": "regional indicator symbol letters de"
        },
        "de": {
            "unescaped": "de",
            "unicode": "1F1E9-1F1EA",
            "name": "regional indicator symbol letters de"
        },
        "flag\\-dk": {
            "unescaped": "flag-dk",
            "unicode": "1F1E9-1F1F0",
            "name": "regional indicator symbol letters dk"
        },
        "flag\\-es": {
            "unescaped": "flag-es",
            "unicode": "1F1EA-1F1F8",
            "name": "regional indicator symbol letters es"
        },
        "es": {
            "unescaped": "es",
            "unicode": "1F1EA-1F1F8",
            "name": "regional indicator symbol letters es"
        },
        "flag\\-fi": {
            "unescaped": "flag-fi",
            "unicode": "1F1EB-1F1EE",
            "name": "regional indicator symbol letters fi"
        },
        "flag\\-fr": {
            "unescaped": "flag-fr",
            "unicode": "1F1EB-1F1F7",
            "name": "regional indicator symbol letters fr"
        },
        "fr": {
            "unescaped": "fr",
            "unicode": "1F1EB-1F1F7",
            "name": "regional indicator symbol letters fr"
        },
        "flag\\-gb": {
            "unescaped": "flag-gb",
            "unicode": "1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "gb": {
            "unescaped": "gb",
            "unicode": "1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "uk": {
            "unescaped": "uk",
            "unicode": "1F1EC-1F1E7",
            "name": "regional indicator symbol letters gb"
        },
        "flag\\-hk": {
            "unescaped": "flag-hk",
            "unicode": "1F1ED-1F1F0",
            "name": "regional indicator symbol letters hk"
        },
        "flag\\-id": {
            "unescaped": "flag-id",
            "unicode": "1F1EE-1F1E9",
            "name": "regional indicator symbol letters id"
        },
        "flag\\-ie": {
            "unescaped": "flag-ie",
            "unicode": "1F1EE-1F1EA",
            "name": "regional indicator symbol letters ie"
        },
        "flag\\-il": {
            "unescaped": "flag-il",
            "unicode": "1F1EE-1F1F1",
            "name": "regional indicator symbol letters il"
        },
        "flag\\-in": {
            "unescaped": "flag-in",
            "unicode": "1F1EE-1F1F3",
            "name": "regional indicator symbol letters in"
        },
        "flag\\-it": {
            "unescaped": "flag-it",
            "unicode": "1F1EE-1F1F9",
            "name": "regional indicator symbol letters it"
        },
        "it": {
            "unescaped": "it",
            "unicode": "1F1EE-1F1F9",
            "name": "regional indicator symbol letters it"
        },
        "flag\\-jp": {
            "unescaped": "flag-jp",
            "unicode": "1F1EF-1F1F5",
            "name": "regional indicator symbol letters jp"
        },
        "jp": {
            "unescaped": "jp",
            "unicode": "1F1EF-1F1F5",
            "name": "regional indicator symbol letters jp"
        },
        "flag\\-kr": {
            "unescaped": "flag-kr",
            "unicode": "1F1F0-1F1F7",
            "name": "regional indicator symbol letters kr"
        },
        "kr": {
            "unescaped": "kr",
            "unicode": "1F1F0-1F1F7",
            "name": "regional indicator symbol letters kr"
        },
        "flag\\-mo": {
            "unescaped": "flag-mo",
            "unicode": "1F1F2-1F1F4",
            "name": "regional indicator symbol letters mo"
        },
        "flag\\-mx": {
            "unescaped": "flag-mx",
            "unicode": "1F1F2-1F1FD",
            "name": "regional indicator symbol letters mx"
        },
        "flag\\-my": {
            "unescaped": "flag-my",
            "unicode": "1F1F2-1F1FE",
            "name": "regional indicator symbol letters my"
        },
        "flag\\-nl": {
            "unescaped": "flag-nl",
            "unicode": "1F1F3-1F1F1",
            "name": "regional indicator symbol letters nl"
        },
        "flag\\-no": {
            "unescaped": "flag-no",
            "unicode": "1F1F3-1F1F4",
            "name": "regional indicator symbol letters no"
        },
        "flag\\-nz": {
            "unescaped": "flag-nz",
            "unicode": "1F1F3-1F1FF",
            "name": "regional indicator symbol letters nz"
        },
        "flag\\-ph": {
            "unescaped": "flag-ph",
            "unicode": "1F1F5-1F1ED",
            "name": "regional indicator symbol letters ph"
        },
        "flag\\-pl": {
            "unescaped": "flag-pl",
            "unicode": "1F1F5-1F1F1",
            "name": "regional indicator symbol letters pl"
        },
        "flag\\-pr": {
            "unescaped": "flag-pr",
            "unicode": "1F1F5-1F1F7",
            "name": "regional indicator symbol letters pr"
        },
        "flag\\-pt": {
            "unescaped": "flag-pt",
            "unicode": "1F1F5-1F1F9",
            "name": "regional indicator symbol letters pt"
        },
        "flag\\-ru": {
            "unescaped": "flag-ru",
            "unicode": "1F1F7-1F1FA",
            "name": "regional indicator symbol letters ru"
        },
        "ru": {
            "unescaped": "ru",
            "unicode": "1F1F7-1F1FA",
            "name": "regional indicator symbol letters ru"
        },
        "flag\\-sa": {
            "unescaped": "flag-sa",
            "unicode": "1F1F8-1F1E6",
            "name": "regional indicator symbol letters sa"
        },
        "flag\\-se": {
            "unescaped": "flag-se",
            "unicode": "1F1F8-1F1EA",
            "name": "regional indicator symbol letters se"
        },
        "flag\\-sg": {
            "unescaped": "flag-sg",
            "unicode": "1F1F8-1F1EC",
            "name": "regional indicator symbol letters sg"
        },
        "flag\\-tr": {
            "unescaped": "flag-tr",
            "unicode": "1F1F9-1F1F7",
            "name": "regional indicator symbol letters tr"
        },
        "flag\\-us": {
            "unescaped": "flag-us",
            "unicode": "1F1FA-1F1F8",
            "name": "regional indicator symbol letters us"
        },
        "us": {
            "unescaped": "us",
            "unicode": "1F1FA-1F1F8",
            "name": "regional indicator symbol letters us"
        },
        "flag\\-vn": {
            "unescaped": "flag-vn",
            "unicode": "1F1FB-1F1F3",
            "name": "regional indicator symbol letters vn"
        },
        "flag\\-za": {
            "unescaped": "flag-za",
            "unicode": "1F1FF-1F1E6",
            "name": "regional indicator symbol letters za"
        },
        "man\\-man\\-boy": {
            "unescaped": "man-man-boy",
            "unicode": "1F468-200D-1F468-200D-1F466",
            "name": ""
        },
        "man\\-man\\-boy\\-boy": {
            "unescaped": "man-man-boy-boy",
            "unicode": "1F468-200D-1F468-200D-1F466-200D-1F466",
            "name": ""
        },
        "man\\-man\\-girl": {
            "unescaped": "man-man-girl",
            "unicode": "1F468-200D-1F468-200D-1F467",
            "name": ""
        },
        "man\\-man\\-girl\\-boy": {
            "unescaped": "man-man-girl-boy",
            "unicode": "1F468-200D-1F468-200D-1F467-200D-1F466",
            "name": ""
        },
        "man\\-man\\-girl\\-girl": {
            "unescaped": "man-man-girl-girl",
            "unicode": "1F468-200D-1F468-200D-1F467-200D-1F467",
            "name": ""
        },
        "man\\-woman\\-boy": {
            "unescaped": "man-woman-boy",
            "unicode": "1F468-200D-1F469-200D-1F466",
            "name": ""
        },
        "man\\-woman\\-boy\\-boy": {
            "unescaped": "man-woman-boy-boy",
            "unicode": "1F468-200D-1F469-200D-1F466-200D-1F466",
            "name": ""
        },
        "man\\-woman\\-girl": {
            "unescaped": "man-woman-girl",
            "unicode": "1F468-200D-1F469-200D-1F467",
            "name": ""
        },
        "man\\-woman\\-girl\\-girl": {
            "unescaped": "man-woman-girl-girl",
            "unicode": "1F468-200D-1F469-200D-1F467-200D-1F467",
            "name": ""
        },
        "man\\-heart\\-man": {
            "unescaped": "man-heart-man",
            "unicode": "1F468-200D-2764-FE0F-200D-1F468",
            "name": ""
        },
        "man\\-kiss\\-man": {
            "unescaped": "man-kiss-man",
            "unicode": "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
            "name": ""
        },
        "woman\\-woman\\-boy": {
            "unescaped": "woman-woman-boy",
            "unicode": "1F469-200D-1F469-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-boy\\-boy": {
            "unescaped": "woman-woman-boy-boy",
            "unicode": "1F469-200D-1F469-200D-1F466-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-girl": {
            "unescaped": "woman-woman-girl",
            "unicode": "1F469-200D-1F469-200D-1F467",
            "name": ""
        },
        "woman\\-woman\\-girl\\-boy": {
            "unescaped": "woman-woman-girl-boy",
            "unicode": "1F469-200D-1F469-200D-1F467-200D-1F466",
            "name": ""
        },
        "woman\\-woman\\-girl\\-girl": {
            "unescaped": "woman-woman-girl-girl",
            "unicode": "1F469-200D-1F469-200D-1F467-200D-1F467",
            "name": ""
        },
        "woman\\-heart\\-woman": {
            "unescaped": "woman-heart-woman",
            "unicode": "1F469-200D-2764-FE0F-200D-1F469",
            "name": ""
        },
        "woman\\-kiss\\-woman": {
            "unescaped": "woman-kiss-woman",
            "unicode": "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
            "name": ""
        }
    });
})(angular.module('cts.emoji'));
(function (App) {
    App.filter('emojiCodeToEmoji', ["emojiCodes", function (emojiCodes) {

        var emojiCodesRegex = new RegExp("(^|\\s)(" + Object.keys(emojiCodes).join("|") + ")", "g");

        return function (input) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            return input.replace(emojiCodesRegex, function (match, g1, g2) {
                return (g1 || '') + ':' + emojiCodes[App.escapeRegExp(g2)] + ':';
            });
        };
    }]);

    App.filter('emoji', ["emojiMaps", "$filter", function (emojiMaps, $filter) {

        var hex2char = function (hex) {
            var n = parseInt(hex, 16);

            if (n <= 0xFFFF) {
                return String.fromCharCode(n);
            } else if (n <= 0x10FFFF) {
                n -= 0x10000;
                return String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
            }
        };

        var convertNumbers2Char = function (str) {
            return str.replace(/(\b[A-Fa-f0-9]{1,6}\b)/g, function (matchstr, parens) {
                    return hex2char(parens);
                }
            );
        };

        var emojiRegex = new RegExp("(^|\\s):(" + Object.keys(emojiMaps).join("|") + "):", "g");

        return function (input, replaceCode, isUnicode) {
            if (input === undefined) return;
            if (typeof input === "object") return input;

            if (replaceCode) {
                input = $filter('emojiCodeToEmoji')(input);
            }

            if (isUnicode) {
                return input.replace(emojiRegex, function (match, g1, g2) {
                    return convertNumbers2Char(emojiMaps[App.escapeRegExp(g2)].unicode);
                });
            } else {
                return input.replace(emojiRegex, function (match, g1, g2) {
                    return "<i class='emoji emoji_" + emojiMaps[App.escapeRegExp(g2)].unescaped + "'></i>";
                });
            }
        };
    }]);
})(angular.module('cts.emoji'));