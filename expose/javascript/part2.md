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
