# Fun-examples-in-MongoDB
Some example questions in MongoDB using the restaurant dataset.

Answering the following questions:   
<br>
1. Count the number of documents in the collection.
1. Display all the documents in the collection.
2. Display: restaurant_id, name, borough and cuisine for all the documents
3. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection
4. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection.
5. Display all the restaurants in the Bronx.
6. Display the first 5 restaurants in the Bronx
7. Display the second 5 restaurants (skipping the first 5) in the Bronx.
8. Find the restaurants with a score more than 85.
9. Find the restaurants that achieved a score, more than 80 but less than 100.
10. Find the restaurants which locate in latitude value less than -95.754168.
11. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
12. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than - 65.754168. (without using $and operator).
13. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.
14. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
17. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish
18. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.
19. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn
20. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.
21. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.
22. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.
23. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
24. Find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.
25. Display the name of the restaurants in ascending order along with all the columns.
