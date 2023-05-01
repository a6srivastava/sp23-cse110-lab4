1. The code will print 3 since the loop within has iterated 3 times, i also is declared with a var so its within the scope.
2. The code should print 150 since its the most recent value saved to the var, 300*(1-0.5) = 150, since the value is stored as a var it exists withtin the scope.
3. Line 14 will print a 150 since, 150*100 / 100  = 150.
4. The function will return an array with [50,100,150], Since the array pushes the value calculated in final price to the discounted array.
5. error, If the function is being called using the same parameters, then it should return an error on line 12 since let i = 0 is within the scope of the forloop it should not exist beyond.
6. Error, since discounted price was declared using let and its being aceessed outside of the scope.
7. 150, since thats the last value computed by finalprice, and it exists within the same scope.
8. The function will return an array with [50,100,150], Since the array pushes the value calculated in final price to the discounted array, and the array is declared within the scope.
9. error since the I is declared using let and will not be within the scope.
10. 3, Since length was declared 3 at the beggining using a const
11. The function will return an array with [50,100,150], This is because const of the array only declares the reference to the array as a constant so the array is changeable.
12. 
```
A : student.name
B : student['Grad Year']
C : student.greeting()
D : student['Favorite Teacher'].name
E : student.courseLoad[0]
```  
13. a
```
A : '32', ints map to their tring representations 
B : 1, since 3 is casted into an int for subtraction 3-2 = 1.
C : 3, null maps to the value 0
D : 3null, since 3 is a string
E : 4, since true maps to 1.
F : 0, since null and false both map to 0
G : 3undefined, since 3 is a string
H : NaN, since undefined cannot be converted into a number.
```
14.
```
A : True, 2 gets cast to int
B : false, since the lex value for 2 should be greater than 12
C : True, since 2 wil be cast to integer then compared
D : False, they are not the same type
E : false, 1 != 2 
F : true, because both are bools
```
15. == is a value comparison operator whereras === is a value and type operator so both value and type must be equal.
16. 21 5 2, check js file
17. the result will be [2,4,6] since the function modify array loops through the array and replaces each value with value resulting from dosomething.
18. java script file
19. The output should result in 1 4 3 2
