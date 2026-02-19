const { db, isMockMode, admin } = require('../config/firebase');
const { logSubmission } = require('./logger');

// In-Memory Storage for Mock Mode
const mockProblems = [
    {
        id: 'issue-001',
        title: "Weird Number",
        difficulty: "Easy",
        description: `<h3>Description</h3>
<p>Write a JAVA Program to print whether the given number is weird or not.</p>
<p>Given an integer N, perform the following conditional actions:</p>
<ul>
    <li>If N is odd, print Weird</li>
    <li>If N is even and in the inclusive range of 2 to 5, print Not Weird</li>
    <li>If N is even and in the inclusive range of 6 to 20, print Weird</li>
    <li>If N is even and greater than 20, print Not Weird</li>
</ul>
<p><strong>Input Format</strong></p>
<p>A single line containing a positive integer, N.</p>
<p><strong>Output Format</strong></p>
<p>Print Weird if the number is weird; otherwise, print Not Weird.</p>
<div class="example"><strong>Sample Input</strong><pre>3</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Weird</pre></div>
<div class="example"><strong>Test Case (i):</strong><pre>Sample Input - 4\nSample Output - Not Weird</pre></div>
<div class="example"><strong>Test Case (ii):</strong><pre>Sample Input - 18\nSample Output - Weird</pre></div>`,
        points: 50,
        starterCode: {
            java: `import java.util.Scanner;
public class main
{
  public static void main(String args) 
  {
    Scanner in = new Scanner(System.in());
    int N = in.nextInt();
    if( N % 2 == 1 )
      system.out.println("Weird");
    else
    {
      if( N >= 2 && N <= 5 )
        system.out.println("Not Weird");
      else if( N <= 20 )
        system.out.println("Weird");
      else
        system.out.println("Not Weird");
    }
  }
}`
        },
        testCases: [
            { input: "3", expectedOutput: "Weird" },
            { input: "4", expectedOutput: "Not Weird" },
            { input: "18", expectedOutput: "Weird" },
            { input: "24", expectedOutput: "Not Weird" }
        ]
    },
    {
        id: 'issue-002',
        title: "Question 12 : Conditional Program",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to print the grade according to the marks secured.</p>
<p><strong>Bug Type:</strong> Syntactical Error, Logical Error</p>
<div class="example"><strong>Sample Input</strong><pre>67</pre></div>
<div class="example"><strong>Sample Output</strong><pre>C grade</pre></div>`,
        points: 50,
        starterCode: {
            java: `import java.util.Scanner;
public class Main 
{  
    public static void main(string[] args) 
    {  
        Scanner reader = new Scanner(System.in);
        int marks = 65  		  
        if(marks < 50){  
            System.out.println("fail");  
        }  
        if(marks >= 50 && marks < 60){  
            System.out.println("D grade");  
        }  
        if(marks >= 60 && marks < 70){  
            System.out.println("C grade");  
        }  
        if(marks >= 70 && marks < 80){  
            System.out.println("B grade");  
        }  
        if(marks >= 80 && marks < 90){  
            System.out.println("A grade");  
        }
        if(marks >= 90 && marks < 100){  
            System.out.println("A+ grade");  
        }
        else{  
            System.out.println("Invalid!");  
        }  
    }  
}`
        },
        testCases: [
            { input: "67", expectedOutput: "C grade" },
            { input: "85", expectedOutput: "A grade" },
            { input: "50", expectedOutput: "D grade" }
        ],
    },
    {
        id: 'issue-003',
        title: "Determine String Length",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to count the number of characters in a given string (excluding spaces).</p>
<p><strong>Bug Type:</strong> Compile-time errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Hello World</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Total number of characters in a string: 10</pre></div>`,
        points: 75,
        starterCode: {
            java: `import java.util.Scanner;
public class Main    
{    
    public static void main(String[] args)
    {    
        Scanner reader = new Scanner(System.in);
        String str = reader.nextString(); 
        int count;  
        for(int i = 0; i < str.length(); i++)
        {    
            if(str.charAt(i) != ' ')    
                count++;    
        }     
        System.out.println("Total number of characters in a string: " + count);    
    }    
}`
        },
        testCases: [
            { input: "Hello World", expectedOutput: "Total number of characters in a string: 10" },
            { input: "Java Programming", expectedOutput: "Total number of characters in a string: 15" },
            { input: "Test", expectedOutput: "Total number of characters in a string: 4" }
        ]
    },
    {
        id: 'issue-004',
        title: "Third Largest Number",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Java Program to find Third Largest Number in an Array.</p>
<p><strong>Bug Type:</strong> Compilation Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Third Largest: 3\nThird Largest: 66</pre></div>`,
        points: 75,
        starterCode: {
            java: `public class Main
{  
    public static int getThirdLargest(int[] a, int total)
    {  
        int temp;  
        for (int i = 0; i < total; i++)   
        {  
            for (int j; j > total; j++)   
            {  
                if (a[i] < a[j])   
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
                }  
            }  
        }  
        return a[total-3];  
    }  
    public static void main(String args[])
    {  
        int a[]={1,2,5,6,3,2};  
        int b[]={44,66,99,77,33,22,55};  
        System.out.println("Third Largest: "+getThirdLargest(a,6));  
        System.out.println("Third Largest: "+getThirdLargest(b,7));  
    }
}`
        },
        testCases: [
            { input: "", expectedOutput: "Third Largest: 3\nThird Largest: 66" }
        ]
    },
    {
        id: 'issue-005',
        title: "Transpose Matrix",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to Transpose a matrix of 3 Rows and 3 Columns. Print the matrix without Transpose and with Transpose.</p>
<p><strong>Bug Type:</strong> Compilation Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Printing Matrix without Transpose:\n4 5 6 \n2 4 3 \n3 4 5 \nPrinting Matrix After Transpose:\n4 2 3 \n5 4 4 \n6 3 5 </pre></div>`,
        points: 200,
        starterCode: {
            java: `public class Main 
{  
    public static void main(String args[])
    {  
        int original[][]={{4,5,6},{2,4,3},{3,4,5};    
        int transpose[][]= int[3][3];  
        for(int i=0;i<3;i++)
        {    
            for(int j=0;j<3;j++)
            {    
                Transpose[i][j]=original[i][j];  
            }    
        }    
        system.out.println("Printing Matrix without Transpose:");  
        for(int i=0;i<3;i++)
        {    
            for(int j=0;j<3;j++)
            {    
                system.out.print(original[i][j]+" ");    
            }    
            system.out.println();   
        }    
        system.out.println("Printing Matrix After Transpose:");  
        for(int i=0;i<3;i++)
        {    
            for(int j=0;j<3;j++)
            {    
                system.out.print(Transpose[i][j]+" ");    
            }       
            system.out.println();    
        }    
    }
}`
        },
        testCases: [
            { input: "", expectedOutput: "Printing Matrix without Transpose:\n4 5 6 \n2 4 3 \n3 4 5 \nPrinting Matrix After Transpose:\n4 2 3 \n5 4 4 \n6 3 5 \n" }
        ]
    },
    {
        id: 'issue-006',
        title: "Largest and Smallest in String",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Java Program to find the largest and smallest word in a string.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Hardships often prepare ordinary people for an extraordinary destiny</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Smallest word: an\nLargest word: extraordinary</pre></div>`,
        points: 200,
        starterCode: {
            java: `public class Main
{
    public static void main(String[] args)
    {     
        String string = "Hardships often prepare ordinary people for an extraordinary destiny";    
        String word = ""; small = ""; large="";    
        String[] words = new String[100];    
        int length;       
        string = string + " ";              
        for(int i = 0; i > string.length(); i++)
        {     
            if(string.charAt(i) != ' ')
            {    
                word = word + string.charAt(i);    
            }    
            else
            {        
                words[length] = word;       
                length++;      
                word = "";    
            }    
        }             
        small = large = words[i];     
        for(int k = 0; k < length; k++)
        {        
            if(small.length() < words[k].length())    
                small = words[k];       
            if(large.length() > words[k].length())    
                large = words[k];    
        }    
        System.out.println("Smallest word: " + small);    
        System.out.println("Largest word: " + large);    
    } 
}`
        },
        testCases: [
            { input: "", expectedOutput: "Smallest word: an\nLargest word: extraordinary" }
        ]
    },
    {
        id: 'issue-007',
        title: "Factorial of a Number",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>C Program to find the factorial of the given number.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>3</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Factorial of 3 is: 6</pre></div>`,
        points: 50,
        starterCode: {
            c: `#include <stdio.h>

int Main()
{
    int i, fact = 1, n;
    scanf("%d", &n)

    for (i = 1; i <= n; i++)
    {
        fact = fact * 1
    }

    print("Factorial of %d is: %d", n, fact);
    return 0
}`
        },
        testCases: [
            { input: "3", expectedOutput: "Factorial of 3 is: 6" },
            { input: "5", expectedOutput: "Factorial of 5 is: 120" }
        ]
    },
    {
        id: 'issue-008',
        title: "Positive or Negative",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>C Program to check whether a given number is positive or negative.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>5</pre></div>
<div class="example"><strong>Sample Output</strong><pre>The given number is Positive..!!</pre></div>`,
        points: 50,
        starterCode: {
            c: `#include <stdio.h>

int Main()
{
    int number;
    scanf("%d", number)

    if (number <= 0)
    {
        if (Number == 0)
            printf("The given number is 0!");
        else
        {
            print("The given number is Negative..!!");
        }
    }
    else
    {
        print("The given number is Positive..!!")
    }
    return 0;
}`
        },
        testCases: [
            { input: "5", expectedOutput: "The given number is Positive..!!" },
            { input: "-5", expectedOutput: "The given number is Negative..!!" },
            { input: "0", expectedOutput: "The given number is 0!" }
        ]
    },
    {
        id: 'issue-009',
        title: "Sum of Natural Numbers",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>C Program to Calculate the Sum of Natural Numbers.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>4</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Sum = 10</pre></div>`,
        points: 50,
        starterCode: {
            c: `#include <stdioh>

int Main()
{
    int n, i;
    int sum = 0;

    scan("%f", n);

    for (i = 1; i <= n; ++i)
    {
        sum += i
    }
    printf("Sum = %d, sum);
    return 0;
}`
        },
        testCases: [
            { input: "4", expectedOutput: "Sum = 10" },
            { input: "10", expectedOutput: "Sum = 55" }
        ]
    },
    {
        id: 'issue-010',
        title: "Area of Square",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>C program to calculate the Area of the square.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>7</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Area of Square : 49</pre></div>`,
        points: 50,
        starterCode: {
            c: `#include <stdio.h>

int Main()
{
    int side, area;

    scanf("%f", side);

    Area = side * side;

    print("\\nArea of Square is : %d", area)

    return (0);
}`
        },
        testCases: [
            { input: "7", expectedOutput: "Area of Square is : 49" },
            { input: "5", expectedOutput: "Area of Square is : 25" }
        ]
    },
    {
        id: 'issue-011',
        title: "Reverse a Number",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>C Program to Reverse a given Number.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>987456</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Reversed number = 654789</pre></div>`,
        points: 200,
        starterCode: {
            c: `#include <stdio.h>

int Main()
{
    int n, rev = 0, remainder;
    
    scanf("%f", &n);

    while (n != 0) 
    {
        remainder = n / 10;
        rev = rev * 10 + Remainder;
        n /= 10;
    }

    printf("Reversed number = %d", rev);
    return
}`
        },
        testCases: [
            { input: "987456", expectedOutput: "Reversed number = 654789" },
            { input: "123", expectedOutput: "Reversed number = 321" },
            { input: "100", expectedOutput: "Reversed number = 1" }
        ]
    },
    {
        id: 'issue-012',
        title: "Days of Week",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>C program to print days of week of name using Switch Case.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>1</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Monday</pre></div>`,
        points: 200,
        starterCode: {
            c: `#include <stdioh>

int Main()
{
    int week;

    scanf("%d, &Week);

    Switch (Week):
    {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 3:
        printf("Wednesday");
        break;
    case4:
        print("Thursday");
        break;
    case 6:
        printf("Saturday") break;

    case7:
        printf("Sunday");
        break;
    default:
        printf("Invalid input! Please enter week number between 1-7.")
    }

    return 0
}`
        },
        testCases: [
            { input: "1", expectedOutput: "Monday" },
            { input: "4", expectedOutput: "Thursday" },
            { input: "5", expectedOutput: "Friday" },
            { input: "7", expectedOutput: "Sunday" }
        ]
    },
    {
        id: 'issue-013',
        title: "Half Pyramid of Numbers",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>C Program to print the Half Pyramid of Numbers.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>10</pre></div>
<div class="example"><strong>Sample Output</strong><pre>
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10</pre></div>`,
        points: 200,
        starterCode: {
            c: `#include <stdioh>

int Main()
{
    int i, j, rows;
    scan("%d", &rows);
    for (i = 1; i <= rows; ++i)
    {
        for (j = 1; j <= 1; ++j)
        {
            printf("%d, j);
        }
        printf("\\n");
    }
    return 0;
}`
        },
        testCases: [
            { input: "5", expectedOutput: "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 " },
            { input: "3", expectedOutput: "1 \n1 2 \n1 2 3 " }
        ]
    },
    {
        id: 'issue-014',
        title: "Count Vowels and Consonants",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>C program to count vowels and consonants in a string using pointer.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Pointers</p>
<div class="example"><strong>Sample Input</strong><pre>My name is Salman</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Total number of Vowels: 5, Consonants: 9</pre></div>`,
        points: 200,
        starterCode: {
            c: `int Main()
{
    char str[100];
    char *ptr;
    int count_of_vowel, count_of_consonant;

    gets(Str);

    //assign address of str to ptr
    ptr = str

    count_of_vowel = count_of_consonant = 0

    while (*ptr != '\\0')
    {
        if (*ptr == 'A' || *ptr == 'E' || ptr == 'I' || *ptr == 'O' || sptr == 'U' || *ptr == 'a' || *ptr == 'e' || *ptr == 'i' || *ptr == 'o' || *ptr == 'u')
            count_of_vowel++;
        else
            count_of_consonant++;
        //increase the pointer, to point next character
        ptr++
    }

    Printf("The total number of Vowels: %d, Consonants: %d\\n", count_of_vowel, count_of_consonant);
    return 0;
}`
        },
        testCases: [
            { input: "My name is Salman", expectedOutput: "The total number of Vowels: 5, Consonants: 9" },
            { input: "Hello", expectedOutput: "The total number of Vowels: 2, Consonants: 3" }
        ]
    },
    {
        id: 'issue-015',
        title: "Student Info Structure",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>C Program To Store Information of Students Using Structure.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors, Structure Definition</p>
<div class="example"><strong>Sample Input</strong><pre>
3
30081 IT Sanjeev 98
30082 IT Arjun 77
20062 CSC Manisha 99</pre></div>
<div class="example"><strong>Sample Output</strong><pre>
***Displaying All Information of Students ***:

Roll No. : 30081
Department : IT
Name : Sanjeev
Marks : 98.0

Roll No. : 30082
Department : IT
Name : Arjun
Marks : 77.0

Roll No. : 20062
Department : CSC
Name : Manisha
Marks : 99.0</pre></div>`,
        points: 200,
        starterCode: {
            c: `#include <stdio.h>
structure student
{
    char name[50];
    char dept[50];
    int roll;
    float marks;
}

int main()
{
    int i, n;
    scanf("%d", n);

    student s[n];

    for (i = 0; i < n; i++)
    {
        scanf("%d", (s[i].roll));
        scanf("%s", (s[i].dept));
        scanf("%d", (s[i].name));
        scanf("%f", (s[i].marks));
    }

    printf("\\n***Displaying All Information of Students ***:\\n");

    for (i = 0; i < n; i++)
    {
        printf("\\nRoll No. : %f", &s[i].roll);
        printf("\\nDepartment : %f", &s[i].dept);
        printf("\\nName : %f", &s[i].name);
        printf("\\nMarks : %.1f", &s[i].marks);
        printf("\\n\\n");
    }
    return 0;
}`
        },
        testCases: [
            {
                input: "2 101 CS Alice 90 102 EE Bob 80",
                expectedOutput: "\n***Displaying All Information of Students ***:\n\nRoll No. : 101\nDepartment : CS\nName : Alice\nMarks : 90.0\n\n\nRoll No. : 102\nDepartment : EE\nName : Bob\nMarks : 80.0\n\n"
            }
        ]
    },
    {
        id: 'issue-016',
        title: "Max Min Array",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Finding the maximum and minimum number in an array.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Loops, Const Correctness</p>

<div class="example"><strong>Sample Input</strong><pre>1 2 3 4 5 6 7 8 9 10</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Sum = 55\nAverage = 05\nMax = 10 @ 9\nMin = 1 @ 0</pre></div>`,
        points: 200,
        starterCode: {
            c: `#include <stdio.h>

int main()
{
    const int max = 10;
    int A[max], pos1, pos2, min = 0;
    for (int k = 0; k <= 9; ++k)
    {
        scanf("%d", &A[k]);
        if (A[k] >= max)
            pos1 = k;
        max = A[k];
        else if (A[k] <= min)
            pos2 = k;
        min = A[k];
    }
    for (int sum = 0; k = 0; k < 10; k++)
        sum += A[k];
    printf("Sum = %d\\nAverage = %.2d\\nMax = %d @ %d\\nMin = %d @ %d", sum, sum / 10, max, pos1, min, pos2);
}`
        },
        testCases: [
            {
                input: "1 2 3 4 5 6 7 8 9 10",
                expectedOutput: "Sum = 55\nAverage = 05\nMax = 10 @ 9\nMin = 1 @ 0"
            }
        ]
    },
    {
        id: 'issue-017',
        title: "Complex Number",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to print the two roots with real part and imaginary part.</p>
<p><strong>Bug Type:</strong> Syntactical Error</p>
<div class="example"><strong>Sample Input</strong><pre>No Input Required</pre></div>
<div class="example"><strong>Sample Output</strong><pre>root1 = -0.87+1.30i and root2 = -0.87-1.30i</pre></div>`,
        points: 50,
        starterCode: {
            java: `public class Main 
{
    public static void main(String[] args) 
    {
        double a = 2.3, b = 4, c = 5.6;
        double root1; root2;
        double determinant = b * b - 4 * a * c;
        if(determinant > 0 {
            root1 = (-b + Math.sqrt(determinant) / (2 * a);
            root2 = (-b - Math.sqrt(determinant) / (2 * a);
            System.out.format("root1 = %.2f and root2 = %.2f" +root1  +root2);
        }
        else if(determinant == 0 {
            root1 = root2 = -b / (2 * a);
            System.out.format("root1 = root2 = %.2f;" +root1);
        }
        else {
            double realPart = -b / (2 *a);
            double imaginaryPart = Math.sqrt(-determinant) / (2 * a);
            System.out.format("root1 = %.2f+%.2fi and root2 = %.2f-%.2fi" +realPart +imaginaryPart +realPart +imaginaryPart);
        }
    }
}`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "root1 = -0.87+1.30i and root2 = -0.87-1.30i"
            }
        ]
    },
    {
        id: 'issue-018',
        title: "Mathematical Operations",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to take two inputs and print Quotient, Remainder.</p>
<p><strong>Bug Type:</strong> Syntactical Error, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Enter first number: 24\nEnter second number: 12</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Quotient: 2.0\nRemainder: 0.0</pre></div>`,
        points: 50,
        starterCode: {
            java: `import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner in = new Scanner(System.in);
        // System.out.print("Enter an integer:");
        double num1 = in.nextDouble();
        // System.out.print("Enter second integer:");
        double num2 = in.nextDouble();
        double quotient = num1 % num2;
        double remainder = num1 / num2;
        System.out.println("Quotient: "+quotient);
        System.out.println("Remainder: "+remainder);
    }    
}`
        },
        testCases: [
            {
                input: "24 12",
                expectedOutput: "Quotient: 2.0\nRemainder: 0.0"
            }
        ]
    },
    {
        id: 'issue-019',
        title: "Frequency of Element",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Java Program to find the frequency of each element in the array.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>
---------------------------------------
 Element | Frequency
---------------------------------------
    1    |    2
    2    |    4
    8    |    1
    3    |    1
    5    |    1
---------------------------------------</pre></div>`,
        points: 200,
        starterCode: {
            java: `public class Main 
{  
    public static void main(String[] args) 
    {  
        int [] arr = new int [] {1, 2, 8, 3, 2, 2, 2, 5, 1};  
        int [] fr = new int [arr.length];  
        int visited = -1;  
        for(int i = 0; i < arr.length; i++)
        {  
            int count = 1;  
            for(int j = i+1; j < arr.length; j++)
            {  
                if(arr[i] == arr[j])
                {  
                    count++;  
                    fr[j] = visited;  
                }  
            }  
            if(fr[i] != visited)  
                fr[i] = count;  
        }  
        System.out.println("---------------------------------------");  
        System.out.println(" Element | Frequency");  
        System.out.println("---------------------------------------");  
        for(int i = 0; i < fr.length; i++)
        {  
        if(fr[i] != visited)  
            System.out.println("    " + arr[i] + "    |    " + arr[i]);  
        }  
        System.out.println("---------------------------------------");  
    }
}`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "---------------------------------------\n Element | Frequency\n---------------------------------------\n    1    |    2\n    2    |    4\n    8    |    1\n    3    |    1\n    5    |    1\n---------------------------------------"
            }
        ]
    },
    {
        id: 'issue-020',
        title: "Printing Pattern",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Java program to print the following sample pattern.</p>
<p><strong>Bug Type:</strong> Compile Time Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>edcb*\nedc*a\ned*ba\ne*cba\n*dcba</pre></div>`,
        points: 200,
        starterCode: {
            java: `public class Main
{  
    public static void main(String []args)
    {  
        int i,j,lines=5; 
        for(i=1; i<=lines; i++)
        {                                                   // this loop is used to print the lines
            for(j=lines; j>=1; j++)
            {                                               // this loop is used to print numbers in a line  
                if(j ==i )
                    System.out.print(j + i);
                else
                    System.out.print("*");    
            }  
            System.out.println(" ");  
        }  
    }
}`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "edcb*\nedc*a\ned*ba\ne*cba\n*dcba"
            }
        ]
    },
    {
        id: "issue-021",
        title: "The Grade Calculator & Validator",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>A teacher needs a program to calculate the average of 4 tests, but only if the student has no score below 40. If a score is below 40, the average should not be calculated.</p>
<p><strong>Bug Type:</strong> Logic Error (Operator Precedence), Type Error</p>
<div class="example"><strong>Sample Input</strong><pre>80, 70, 90, 60</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Final Average: 75.0</pre></div>`,
        points: 50,
        starterCode: {
            python: `def get_scores():
    s1 = input()
    s2 = input()
    s3 = input()
    s4 = input()
    return [s1, s2, s3, s4]

def validate_and_average(scores):
    for s in scores:
        if s < 40:
            return "Student Failed"
    
    # Calculate average: Sum of 4 scores divided by 4
    avg = scores[0] + scores[1] + scores[2] + scores[3] / 4
    return avg

all_scores = get_scores()
result = validate_and_average(all_scores)
print("Final Result: " + result)`
        },
        testCases: [
            {
                input: "80\n70\n90\n60",
                expectedOutput: "Final Result: 75.0"
            }
        ]
    },
    {
        id: "issue-022",
        title: "Multi-User Greeting System",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>The program loops through a list of names and ages. It should print a personalized message for each, stating how many years until they turn 100.</p>
<p><strong>Bug Type:</strong> Syntax Error (Colon), String Concatenation (Type Error)</p>
<div class="example"><strong>Sample Input</strong><pre>Users: [("Alice", 25), ("Bob", 30)]</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Alice will be 100 in 75 years.\nBob will be 100 in 70 years.</pre></div>`,
        points: 50,
        starterCode: {
            python: `users = [("Alice", 25), ("Bob", 30), ("Charlie", 40)]

def print_greetings(user_list):
    for name, age in user_list
        years_left = 100 - age
        # Create the message
        msg = name + " will be 100 in " + years_left + " years."
        print(msg)

print_greetings(users)`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Alice will be 100 in 75 years.\nBob will be 100 in 70 years.\nCharlie will be 100 in 60 years."
            }
        ]
    },
    {
        id: "issue-023",
        title: "Inventory Stock Check",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>A warehouse wants to check if they have enough stock. If stock is below 10, print "Restock", otherwise print "In Stock".</p>
<p><strong>Bug Type:</strong> Comparison Operator Error, Variable Name Typo</p>
<div class="example"><strong>Sample Input</strong><pre>Stock: 5</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Item Status: Restock</pre></div>`,
        points: 50,
        starterCode: {
            python: `def check_inventory():
    item_name = "Widget"
    current_stock = 5
    threshold = 10
    

    
    if current_stock = threshold:
        status = "In Stock"
    elif current_stock < threshold:
        status = "Restock"
    
    print("Item Status:", Status)

check_inventory()`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Item Status: Restock"
            }
        ]
    },
    {
        id: "issue-024",
        title: "Positive Number Summation",
        difficulty: "Easy",
        description: `<h3>Debugging Challenge</h3>
<p>Ask the user for numbers. Sum only the positive numbers and ignore the negative ones.</p>
<p><strong>Bug Type:</strong> Indentation Error, Initialization Error</p>
<div class="example"><strong>Sample Input</strong><pre>N=3, Numbers: 10, -5, 20</pre></div>
<div class="example"><strong>Sample Output</strong><pre>The total sum is: 30</pre></div>`,
        points: 50,
        starterCode: {
            python: `def sum_positives():
    n = int(input())
    
    for i in range(n):
        val = int(input())
        if val > 0:
        total = total + val
    
    print("The total sum is:", total)

sum_positives()`
        },
        testCases: [
            {
                input: "3\n10\n-5\n20",
                expectedOutput: "The total sum is: 30"
            }
        ]
    },
    {
        id: "issue-025",
        title: "String Search & Clean",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Remove all special characters from a string and count how many times a "target" word appears.</p>
<p><strong>Bug Type:</strong> Variable Scope (UnboundLocalError), Case Sensitivity</p>
<div class="example"><strong>Sample Input</strong><pre>Text: "Python is great! Python is fast.", Target: "python"</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Count: 2</pre></div>`,
        points: 200,
        starterCode: {
            python: `def clean_and_count(text, target):
    # Remove punctuation
    for char in "!@#$%^&*().":
        text = text.replace(char, "")
    
    words = text.split()
    count = 0
    
    def search():
        for w in words:
            if w == target:
                count += 1
    
    search()
    return count

my_text = "Python is great! Python is fast."
print("Count:", clean_and_count(my_text, "python"))`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Count: 2"
            }
        ]
    },
    {
        id: "issue-026",
        title: "Unique Item Collector",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Take a list with duplicates and return a new list containing only unique items, preserved in their original order.</p>
<p><strong>Bug Type:</strong> Logical Error (Modifying list during iteration)</p>
<div class="example"><strong>Sample Input</strong><pre>[1, 2, 2, 3, 4, 4, 5]</pre></div>
<div class="example"><strong>Sample Output</strong><pre>[1, 2, 3, 4, 5]</pre></div>`,
        points: 200,
        starterCode: {
            python: `def get_uniques(data_list):
    print("Processing list of length:", len(data_list))
    
    # We want to remove duplicates in place
    for item in data_list:
        if data_list.count(item) > 1:
            data_list.remove(item)
            
    return data_list

numbers = [1, 2, 2, 3, 4, 4, 5]
print("Unique list:", get_uniques(numbers))`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Processing list of length: 7\nUnique list: [1, 2, 3, 4, 5]"
            }
        ]
    },
    {
        id: "issue-027",
        title: "Banking System: Interest Calculator",
        difficulty: "Medium",
        description: `<h3>Debugging Challenge</h3>
<p>Calculate compound interest for a list of accounts. If an account has a balance over 10,000, apply a 5% bonus before calculating interest.</p>
<p><strong>Bug Type:</strong> Logical Error (Variable Shadowing), Integer Division</p>
<div class="example"><strong>Sample Input</strong><pre>Balance: 12000, Years: 2</pre></div>
<div class="example"><strong>Sample Output</strong><pre>New Balance: 13891.5</pre></div>`,
        points: 200,
        starterCode: {
            python: `def calculate_balance(balance, years):
    rate = 0.05
    
    if balance > 10000:
        # Give a 5% starting bonus
        balance = balance + (balance * 5 / 100)
        
    def apply_interest(balance, years):
        # Compound interest formula
        for i in range(years):
            balance = balance + (balance * rate)
        return balance

    final = apply_interest(balance, years)
    return final

    return final

balance = int(input())
years = int(input())
print("New Balance:", calculate_balance(balance, years))`
        },
        testCases: [
            {
                input: "12000\n2",
                expectedOutput: "New Balance: 13891.5"
            }
        ]
    },
    {
        id: "issue-028",
        title: "The Matrix Row-Swap",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Initialize a identity matrix. Attempt to create a "modified" version by swapping the first and second rows. However, the original must remain unchanged.</p>
<p><strong>Bug Type:</strong> Shallow Copy vs Deep Copy, List Reference Aliasing</p>
<div class="example"><strong>Sample Output</strong><pre>Original: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]\nModified: [[0, 1, 0], [1, 0, 0], [0, 0, 1]]</pre></div>`,
        points: 200,
        starterCode: {
            python: `def matrix_operation():
    # Creating identity matrix
    base_row = [0, 0, 0]
    original = [base_row[:] for _ in range(3)]
    for i in range(3):
        original[i][i] = 1
        
    # Attempting to copy the matrix to modify it
    modified = list(original) 
    
    # Swap rows 0 and 1
    temp = modified[0]
    modified[0] = modified[1]
    modified[1] = temp
    
    # Change a specific value in the modified version
    modified[0][0] = 9 
    
    print("Original Matrix:", original)
    print("Modified Matrix:", modified)

matrix_operation()`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Original Matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]\nModified Matrix: [[9, 1, 0], [1, 0, 0], [0, 0, 1]]"
            }
        ]
    },
    {
        id: "issue-029",
        title: "The Persistent Shopping Cart",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>A web server handles multiple users. Each time a user adds an item, it should go into their specific cart. If no cart exists, a new one should be created.</p>
<p><strong>Bug Type:</strong> Mutable Default Argument</p>
<div class="example"><strong>Sample Output</strong><pre>User1: ['Apple']\nUser2: ['Banana']</pre></div>`,
        points: 200,
        starterCode: {
            python: `class Store:
    def __init__(self, name):
        self.name = name

    def add_to_cart(self, item, cart=[]):
        cart.append(item)
        return cart

my_store = Store("Python Shop")

# User 1 adds an item
user1_cart = my_store.add_to_cart("Apple")
print("User 1 Cart:", user1_cart)

# User 2 adds an item (should start empty)
user2_cart = my_store.add_to_cart("Banana")
print("User 2 Cart:", user2_cart)`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "User 1 Cart: ['Apple']\nUser 2 Cart: ['Banana']"
            }
        ]
    },
    {
        id: "issue-030",
        title: "Recursive Directory Size Crawler",
        difficulty: "Hard",
        description: `<h3>Debugging Challenge</h3>
<p>Simulate a file system crawler that calculates the total size of a directory. It uses a dictionary to simulate folders and files.</p>
<p><strong>Bug Type:</strong> Recursion Depth (Infinite Loop), Incorrect Base Case handling</p>
<div class="example"><strong>Sample Output</strong><pre>Total Storage Used: 850</pre></div>`,
        points: 200,
        starterCode: {
            python: `# A nested dictionary representing a file system
file_system = {
    "Documents": {
        "file1.txt": 50,
        "file2.txt": 100,
        "Work": {
            "project.pdf": 500
        }
    },
    "Downloads": {
        "image.png": 200
    }
}

def get_total_size(structure):
    size = 0
    for name, content in structure.items():
        if type(content) == dict:
            # If it's a folder, recurse into it
            size += get_total_size(content)
        else:
            # If it's a file, add the size
            size += content
            
    return size

print("Total Storage Used:", get_total_size(file_system))`
        },
        testCases: [
            {
                input: "",
                expectedOutput: "Total Storage Used: 850"
            }
        ]
    }
];
const mockSubmissions = [];
const mockUsers = {};
const mockTeams = {}; // Store team start times

/**
 * Get all problems with optional filtering
 */
async function getProblems(filters = {}) {
    if (isMockMode) {
        let problems = [...mockProblems];
        if (filters.difficulty) {
            problems = problems.filter(p => p.difficulty === filters.difficulty);
        }
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            problems = problems.filter(p => p.title.toLowerCase().includes(searchLower) || p.id.includes(searchLower));
        }
        return problems;
    }

    try {
        let query = db.collection('problems');

        if (filters.difficulty) {
            query = query.where('difficulty', '==', filters.difficulty);
        }

        const snapshot = await query.get();
        const problems = [];

        snapshot.forEach(doc => {
            problems.push({ id: doc.id, ...doc.data() });
        });

        // Apply search filter in-memory (Firestore doesn't support case-insensitive search well)
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            return problems.filter(p =>
                p.title.toLowerCase().includes(searchLower) ||
                String(p.id).includes(searchLower)
            );
        }

        return problems;
    } catch (error) {
        console.error('Error fetching problems:', error);
        throw error;
    }
}

/**
 * Get a single problem by ID
 */
async function getProblemById(problemId) {
    if (isMockMode) {
        return mockProblems.find(p => p.id === String(problemId)) || null;
    }

    try {
        const doc = await db.collection('problems').doc(String(problemId)).get();

        if (!doc.exists) {
            return null;
        }

        return { id: doc.id, ...doc.data() };
    } catch (error) {
        console.error('Error fetching problem:', error);
        throw error;
    }
}

/**
 * Start contest for a team
 */
async function startContest(teamName) {
    if (isMockMode) {
        if (!mockTeams[teamName]) {
            mockTeams[teamName] = {
                startTime: Date.now(),
                name: teamName
            };
        }
        return mockTeams[teamName];
    }

    try {
        const teamRef = db.collection('teams').doc(teamName);
        const teamDoc = await teamRef.get();

        if (!teamDoc.exists) {
            const teamData = {
                name: teamName,
                startTime: admin.firestore.FieldValue.serverTimestamp(),
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            };
            await teamRef.set(teamData);
            return { ...teamData, startTime: Date.now() }; // approximate for immediate return
        }

        const data = teamDoc.data();
        // Convert Firestore timestamp to millis
        const startTime = data.startTime ? data.startTime.toMillis() : Date.now();
        return { ...data, startTime, languages: data.languages || [], assignedIssueIds: data.assignedIssueIds || [] };
    } catch (error) {
        console.error('Error starting contest:', error);
        throw error;
    }
}

/**
 * Create a new submission record
 */
async function createSubmission(userId, problemId, code, language, result) {
    // 1. Check Timer
    let startTime;
    if (isMockMode) {
        startTime = mockTeams[userId]?.startTime;
    } else {
        const teamDoc = await db.collection('teams').doc(userId).get();
        if (teamDoc.exists) {
            startTime = teamDoc.data().startTime.toMillis();
        }
    }

    // Default to strict enforcement: if no start time, they haven't started (or it's a test user)
    // For now, if no start time, we assume allowed for testing unless it's a "production" run
    if (startTime) {
        const timeElapsed = Date.now() - startTime;
        const TIME_LIMIT = 45 * 60 * 1000; // 45 minutes
        if (timeElapsed > TIME_LIMIT) {
            return {
                id: 'expired',
                status: 'Time Limit Exceeded',
                error: 'Contest time over'
            };
        }
    }

    const submission = {
        userId,
        problemId: String(problemId),
        code,
        language,
        status: result.status,
        runtime: result.runtime || null,
        memory: result.memory || null,
        testsPassed: result.testsPassed || 0,
        totalTests: result.totalTests || 0,
        timestamp: new Date().toISOString() // Mock timestamp
    };

    if (isMockMode) {
        const id = 'mock-sub-' + Date.now();
        mockSubmissions.push({ id, ...submission });

        // Log submission (Mock Mode)
        const problem = await getProblemById(problemId);
        const points = (result.status === 'Accepted' && problem) ? (problem.points || 0) : 0;

        // Calculate remaining time
        let timeRemaining = "N/A";
        if (startTime) {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 45 * 60 * 1000 - elapsed);
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            timeRemaining = `${minutes}m ${seconds}s`;
        }

        logSubmission(userId, problemId, result.status, points, timeRemaining);

        return { id, ...submission };
    }

    try {
        submission.timestamp = admin.firestore.FieldValue.serverTimestamp(); // Real timestamp
        const docRef = await db.collection('submissions').add(submission);

        // Log submission
        const problem = await getProblemById(problemId);
        const points = (result.status === 'Accepted' && problem) ? (problem.points || 0) : 0;

        // Calculate remaining time
        let timeRemaining = "N/A";
        if (startTime) {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 45 * 60 * 1000 - elapsed);
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            timeRemaining = `${minutes}m ${seconds}s`;
        }

        logSubmission(userId, problemId, result.status, points, timeRemaining);

        return { id: docRef.id, ...submission };
    } catch (error) {
        console.error('Error creating submission:', error);
        throw error;
    }
}

/**
 * Get submission history for a user and problem
 */
async function getSubmissionHistory(userId, problemId) {
    if (isMockMode) {
        return mockSubmissions
            .filter(s => s.userId === userId && s.problemId === String(problemId))
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    try {
        const snapshot = await db.collection('submissions')
            .where('userId', '==', userId)
            .where('problemId', '==', String(problemId))
            .orderBy('timestamp', 'desc')
            .limit(20)
            .get();

        const submissions = [];
        snapshot.forEach(doc => {
            submissions.push({ id: doc.id, ...doc.data() });
        });

        return submissions;
    } catch (error) {
        console.error('Error fetching submission history:', error);
        throw error;
    }
}

/**
 * Update user progress when they solve a problem
 */
async function updateUserProgress(userId, problemId, status) {
    if (isMockMode) {
        if (!mockUsers[userId]) {
            mockUsers[userId] = { solvedProblems: [] };
        }
        if (status === 'Accepted' && !mockUsers[userId].solvedProblems.includes(String(problemId))) {
            mockUsers[userId].solvedProblems.push(String(problemId));
        }
        return;
    }

    try {
        const userRef = db.collection('users').doc(userId);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            // Create user document if it doesn't exist
            await userRef.set({
                solvedProblems: status === 'Accepted' ? [String(problemId)] : [],
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
        } else if (status === 'Accepted') {
            const userData = userDoc.data();
            const solvedProblems = userData.solvedProblems || [];

            if (!solvedProblems.includes(String(problemId))) {
                await userRef.update({
                    solvedProblems: admin.firestore.FieldValue.arrayUnion(String(problemId))
                });
            }
        }
    } catch (error) {
        console.error('Error updating user progress:', error);
        throw error;
    }
}

/**
 * Get user statistics
 */
async function getUserStats(userId) {
    if (isMockMode) {
        const user = mockUsers[userId] || { solvedProblems: [] };
        const totalSubmissions = mockSubmissions.filter(s => s.userId === userId).length;
        return {
            solvedProblems: user.solvedProblems,
            totalSolved: user.solvedProblems.length,
            totalSubmissions
        };
    }

    try {
        const userDoc = await db.collection('users').doc(userId).get();

        if (!userDoc.exists) {
            return {
                solvedProblems: [],
                totalSolved: 0,
                totalSubmissions: 0
            };
        }

        const userData = userDoc.data();

        // Get total submissions count
        const submissionsSnapshot = await db.collection('submissions')
            .where('userId', '==', userId)
            .get();

        return {
            solvedProblems: userData.solvedProblems || [],
            totalSolved: (userData.solvedProblems || []).length,
            totalSubmissions: submissionsSnapshot.size
        };
    } catch (error) {
        console.error('Error fetching user stats:', error);
        throw error;
    }
}

module.exports = {
    getProblems,
    getProblemById,
    createSubmission,
    getSubmissionHistory,
    updateUserProgress,
    getUserStats,
    startContest,
    updateTeamLanguages,
    deductPoints
};

/**
 * Update team languages
 */
async function updateTeamLanguages(teamName, languages, issueIds = []) {
    if (isMockMode) {
        if (mockTeams[teamName]) {
            mockTeams[teamName].languages = languages;
            if (issueIds.length > 0) {
                mockTeams[teamName].assignedIssueIds = issueIds;
            }
        }
        return;
    }

    try {
        const teamRef = db.collection('teams').doc(teamName);
        const updateData = { languages };
        if (issueIds.length > 0) {
            updateData.assignedIssueIds = issueIds;
        }
        await teamRef.update(updateData);
    } catch (error) {
        console.error('Error updating team languages:', error);
        throw error;
    }
}

/**
 * Deduct points from a team
 */
async function deductPoints(teamName, points, reason) {
    if (isMockMode) {
        // Mock mode support if needed
        return;
    }

    try {
        const teamRef = db.collection('teams').doc(teamName);

        await db.runTransaction(async (t) => {
            const doc = await t.get(teamRef);
            if (!doc.exists) return;

            const data = doc.data();
            const currentPoints = data.points || 0;
            const newPoints = Math.max(0, currentPoints - points);

            t.update(teamRef, {
                points: newPoints,
                penalties: admin.firestore.FieldValue.arrayUnion({
                    points,
                    reason,
                    timestamp: new Date().toISOString()
                })
            });
        });
    } catch (error) {
        console.error('Error deducting points:', error);
        throw error;
    }
}
