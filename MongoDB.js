//Query1a: count of documents
db.getCollection("restaurants").count()

//Query1b: displaying the documents 
db.getCollection("restaurants").find()

//Query2: displaying restaurant id, name, borough and cuisine
db.getCollection("restaurants").find({}, {restaurant_id:1, name: 1, borough: 1, cuisine:1})

//Query3: displaying restaurant id, name, borough and cuisine without id
db.getCollection("restaurants").find({}, {restaurant_id:1, name: 1, borough: 1, cuisine:1, _id: 0 })

//Query4: displaying restaurant id, name, borough and zipcode without id
db.getCollection("restaurants").find({}, {restaurant_id:1, name: 1, borough: 1, "address.zipcode":1, _id:0})

//Query5: displaying all elements where borough is Bronx
db.getCollection("restaurants").find({borough:"Bronx"})

//Query6: displaying the first five elements where borough is Bronx
db.getCollection("restaurants").find({borough:"Bronx"}).limit(5)

//Query7: displaying the second five elements where borough is Bronx
db.getCollection("restaurants").find({borough:"Bronx"}).skip(5).limit(5)

//Query8: displaying the elements where score is greater than 85
db.getCollection("restaurants").find({"grades.score":{$gt:85}})

//Query9: displaying the elements where score is greater than 80 and less than 100
db.getCollection("restaurants").find({grades:{$elemMatch:{"score":{$gt:80,$lt:100}}}})

//Query10: displaying elements where latitude is less than -95.754168
db.getCollection("restaurants").find({"address.coord":{$lt:-95.754168}})

//Query11: displaying element where cuisine is not American, score is greater than 70 and latitude is less than -65.754168
db.getCollection("restaurants").find({$and:[{"cuisine":{$ne:"American "}},{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}}]})

//Query12: displaying element where cuisine is not American, score is greater than 70 and latitude is less than -65.754168 without using and
db.getCollection("restaurants").find({"cuisine":{$ne:"American "},"grades.score":{$gt:70}, "address.coord":{$lt:-65.754168}})

//Query13: displaying elements where cuisine is not American, grade is A, borough is not Brooklyn and cuisine sorted by decending order
db.getCollection("restaurants").find({"cuisine":{$ne:"American "},"grades.grade":"A","borough":{$ne:"Brooklyn"}}).sort({"cuisine":-1})

//Query14: displaying restaurant id, name, borough and cuisine for restaurants that start with "Wil"
db.getCollection("restaurants").find({name:/^Wil/},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query15: displaying restaurant id, name, borough and cuisine for restaurants that end with "ces"
db.getCollection("restaurants").find({name:/ces$/},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query16: displaying restaurant id, name, borough and cuisine for restaurants that contain "reg"
db.getCollection("restaurants").find({"name":/.*Reg.*/},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query17: displaying elements in Bronx that have American or Chinese cuisine
db.getCollection("restaurants").find({"borough":"Bronx",$or:[{"cuisine":"American "},{"cuisine":"Chinese"}]})

//Query18: displaying restaurant id, name, borough and cuisine for restaurants that are in "Staten Island","Queens","Bronx" or "Brooklyn"
db.getCollection("restaurants").find({"borough":{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query19: displaying restaurant id, name, borough and cuisine for restaurants that are not in "Staten Island","Queens","Bronx" or "Brooklyn"
db.getCollection("restaurants").find({"borough":{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query20: displaying restaurant id, name, borough and cuisine for restaurants that have a score less than 10
db.getCollection("restaurants").find({"grades.score":{$not:{$gt:10}}},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query21: displaying restaurant id, name, borough and cuisine for restaurants that start with "Wil" and dont have American or Chinese cuisine
db.getCollection("restaurants").find({$or:[{name:/^Wil/},{"$and":[{"cuisine":{$ne:"American "}},{"cuisine":{$ne:"Chinese "}}]}]},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

//Query22: displaying restaurant id, name and grades for restaurants that have a grade A, a score of 11 on the date "2014-08-11T00:00:00Z"
db.getCollection("restaurants").find({"grades":{$elemMatch:{"grade":"A","score":11,"date":ISODate("2014-08-11T00:00:00Z")}}},{"restaurant_id":1,"name":1,"grades":1})

//Query23: displaying restaurant id, name and grades for restaurants that have grade A, a score of 9 for the 2nd element on the date "2014-08-11T00:00:00Z"
db.getCollection("restaurants").find({"grades.1.date":ISODate("2014-08-11T00:00:00Z"),"grades.1.grade":"A","grades.1.score":9},{"restaurant_id":1,"name":1,"grades":1})

//Query24: displaying restaurant is, name, address and coordinates for restaurants that have the second coordinate more than 42 upto 52
db.getCollection("restaurants").find({"address.coord.1":{$gt:42,$lte:52}},{"restaurant_id":1,"name":1,"address":1,"coord":1})

//Query25: displaying names of restaurants in ascending order with all columns
db.getCollection("restaurants").find().sort({"name":1})
