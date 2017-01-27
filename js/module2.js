var _ = require("lodash");

var data = [{
  "id": 1,
  "first_name": "Jeffrey",
  "last_name": "Dean",
  "email": "jdean0@goo.ne.jp",
  "gender": "Male",
  "ip_address": "173.195.195.10"
}, {
  "id": 2,
  "first_name": "Andrea",
  "last_name": "Oliver",
  "email": "aoliver1@sakura.ne.jp",
  "gender": "Female",
  "ip_address": "93.184.228.51"
}, {
  "id": 3,
  "first_name": "Samuel",
  "last_name": "Wood",
  "email": "swood2@pagesperso-orange.fr",
  "gender": "Male",
  "ip_address": "201.221.15.102"
}, {
  "id": 4,
  "first_name": "Sarah",
  "last_name": "Freeman",
  "email": "sfreeman3@bbb.org",
  "gender": "Female",
  "ip_address": "183.62.171.131"
}, {
  "id": 5,
  "first_name": "Christina",
  "last_name": "Cunningham",
  "email": "ccunningham4@vimeo.com",
  "gender": "Female",
  "ip_address": "53.30.64.13"
}, {
  "id": 6,
  "first_name": "Alice",
  "last_name": "Hansen",
  "email": "ahansen5@github.com",
  "gender": "Female",
  "ip_address": "53.207.254.59"
}, {
  "id": 7,
  "first_name": "Maria",
  "last_name": "Carr",
  "email": "mcarr6@bbb.org",
  "gender": "Female",
  "ip_address": "175.211.9.56"
}, {
  "id": 8,
  "first_name": "Louise",
  "last_name": "Long",
  "email": "llong7@rakuten.co.jp",
  "gender": "Female",
  "ip_address": "23.206.16.162"
}, {
  "id": 9,
  "first_name": "Anne",
  "last_name": "Walker",
  "email": "awalker8@slate.com",
  "gender": "Female",
  "ip_address": "221.133.23.226"
}, {
  "id": 10,
  "first_name": "Brenda",
  "last_name": "Robinson",
  "email": "brobinson9@reference.com",
  "gender": "Female",
  "ip_address": "187.222.214.163"
}];

var femaleCount = _.filter(data, {gender: "Female"}).length;
console.log(femaleCount	);

console.log('module2');