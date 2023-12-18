a = prompt("enter first number:")
b= prompt("enter second number: ")
c = prompt("enter third number: ")
x1 = (-b + (b**2-4*a*c)**0.5)/(2*a)
x2=(-b - (b**2-4*a*c)**(1/2))/(2*a)
c= x1
x1 =x2
x2=c
console.log("the value of x1 is: ", x1)
console.log("the value of x2 is: ", x2)