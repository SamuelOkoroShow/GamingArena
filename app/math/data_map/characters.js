
import el1 from "../../elements/images/characters/olga.png"
import el2 from "../../elements/images/characters/soolga.png"
import el3 from "../../elements/images/characters/fox.png"
import el4 from "../../elements/images/characters/cloud.png"
import el5 from "../../elements/images/characters/animo.png"
import el6 from "../../elements/images/characters/huntress.png"
import el7 from "../../elements/images/characters/gunner97.png"

import moves from '../bit_map/moves'

const characters = [{
  "id": 1,
  "first_name": "Olga",
  "fun_fact": "et magnis dis parturient montes nascetur",
  "image" : el1,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Sed sagittis.",
    "info2": "Phasellus sit amet erat.",
    "info3": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
  },
  "isSelected": true,
  "viking_name": "Marie-thérèse"
}, {
  "id": 2,
  "first_name": "So-Olga",
  "fun_fact": "potenti nullam porttitor lacus at",
  "image" : el2,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "info2": "Aenean auctor gravida sem.",
    "info3": "Nulla tellus. In sagittis dui vel nisl."
  },
  "isSelected": false,
  "viking_name": "Mélinda"
}, {
  "id": 3,
  "first_name": "Bunny",
  "fun_fact": "dapibus duis at",
  "image" : el3,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Praesent blandit. Nam nulla.",
    "info2": "Aenean fermentum.",
    "info3": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
  },
  "isSelected": true,
  "viking_name": "Håkan"
}, {
  "id": 4,
  "first_name": "Cloud",
  "fun_fact": "nibh fusce lacus",
  "image" : el4,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "info2": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    "info3": "Proin risus. Praesent lectus."
  },
  "isSelected": true,
  "viking_name": "Nélie"
}, {
  "id": 5,
  "first_name": "Netti",
  "fun_fact": "quam suspendisse potenti nullam",
  "image" : el5,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "info2": "Donec semper sapien a libero. Nam dui.",
    "info3": "Fusce consequat."
  },
  "isSelected": false,
  "viking_name": "Adèle"
}, {
  "id": 6,
  "first_name": "Huntress",
  "fun_fact": "non mattis pulvinar nulla pede ullamcorper",
  "image" : el6,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "info2": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "info3": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
  },
  "isSelected": false,
  "viking_name": "Thérèsa"
}, {
  "id": 7,
  "first_name": "Gunner 0097",
  "fun_fact": "non mattis pulvinar nulla pede ullamcorper",
  "image" : el7,
  "moves": [moves[0],moves[1],moves[2]],
  "background": {
    "info1": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "info2": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "info3": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
  },
  "isSelected": false,
  "viking_name": "Thérèsa"
}]

export default characters;