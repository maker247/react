import React, {createContext} from "react";

let albums = [
    {
        "id": 1,
        "image": "https://source.unsplash.com/random",
        "name": "Dolly Aliquip",
        "short_description": "Aliquip id nostrud adipisicing irure.",
        "description": "Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt."
    },
    {
        "id": 2,
        "image": "https://source.unsplash.com/random",
        "name": "Brennan Atkins",
        "short_description": "Nisi sit nisi cillum dolor fugiat",
        "description": "Nisi sit nisi cillum dolor fugiat sint do nostrud ex cillum cupidatat. Culpa do duis non et excepteur labore dolor culpa qui tempor veniam. Ex labore deserunt qui sit aute ad incididunt do cupidatat eiusmod reprehenderit ad. Qui laborum qui voluptate velit et consectetur ipsum enim dolore minim. Est sint velit tempor reprehenderit. Qui consectetur ad minim consequat."
    },
    {
        "id": 3,
        "image": "https://source.unsplash.com/random",
        "name": "Jodi Humphrey",
        "short_description": "Non amet amet ut magna culpa dolore consequat occaecat.",
        "description": "Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod."
    },
    {
        "id": 4,
        "image": "https://source.unsplash.com/random",
        "name": "Joyce Weber",
        "short_description": "Non qui Lorem qui commodo sint in esse",
        "description": "Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."
    },
    {
        "id": 5,
        "image": "https://source.unsplash.com/random",
        "name": "Gilliam Underwood",
        "short_description": "Velit anim deserunt elit velit est fugiat duis",
        "description": "Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."
    },
    {
        "id": 6,
        "image": "https://source.unsplash.com/random",
        "name": "Dolly Franklin",
        "short_description": "Aliquip id nostrud adipisicing irure. Labore reprehenderit",
        "description": "Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt."
    },
    {
        "id": 7,
        "image": "https://source.unsplash.com/random",
        "name": "Brennan Nisi",
        "short_description": "Nisi sit nisi cillum dolor fugiat sint do nostrud ex",
        "description": "Nisi sit nisi cillum dolor fugiat sint do nostrud ex cillum cupidatat. Culpa do duis non et excepteur labore dolor culpa qui tempor veniam. Ex labore deserunt qui sit aute ad incididunt do cupidatat eiusmod reprehenderit ad. Qui laborum qui voluptate velit et consectetur ipsum enim dolore minim. Est sint velit tempor reprehenderit. Qui consectetur ad minim consequat."
    },
    {
        "id": 8,
        "image": "https://source.unsplash.com/random",
        "name": "Jodi Humphrey",
        "short_description": "Non amet amet ut magna culpa dolore consequat occaecat.",
        "description": "Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod."
    },
    {
        "id": 9,
        "image": "https://source.unsplash.com/random",
        "name": "Joyce Weber",
        "short_description": "Non qui Lorem qui commodo sint in esse non aliqua",
        "description": "Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."
    },
    {
        "id": 10,
        "image": "https://source.unsplash.com/random",
        "name": "Gilliam Underwood",
        "short_description": "Velit anim deserunt elit velit est fugiat duis",
        "description": "Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."
    },
];

export default createContext(albums);

