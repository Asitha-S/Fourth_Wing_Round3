import { useState, useEffect } from "react";

// Sample GitHub-style issues data
const issues = [
    {
        id: "issue-001",
        number: 1,
        title: "Weird Number",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "java", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
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
        buggyCode: {
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
        ],
    },
    {
        id: "issue-002",
        number: 2,
        title: "Question 12 : Conditional Program",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "java", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to print the grade according to the marks secured.</p>
<p><strong>Bug Type:</strong> Syntactical Error, Logical Error</p>
<div class="example"><strong>Sample Input</strong><pre>67</pre></div>
<div class="example"><strong>Sample Output</strong><pre>C grade</pre></div>
<div class="example"><strong>Test Case (i):</strong><pre>Sample Input - 85\nSample Output - A grade</pre></div>
<div class="example"><strong>Test Case (ii):</strong><pre>Sample Input - 50\nSample Output - D grade</pre></div>`,
        buggyCode: {
            java: `import java.util.Scanner;
public class Main 
{  
    public static void main(string[] args) 
    {  
        Scanner reader = new Scanner(System.in);
        int marks = 65;  		  
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
        id: "issue-003",
        number: 3,
        title: "Determine String Length",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "java", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to count the number of characters in a given string (excluding spaces).</p>
<p><strong>Bug Type:</strong> Compile-time errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Hello World</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Total number of characters in a string: 10</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-004",
        number: 4,
        title: "Third Largest Number",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "java", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>Java Program to find Third Largest Number in an Array.</p>
<p><strong>Bug Type:</strong> Compilation Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Third Largest: 3\nThird Largest: 66</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-005",
        number: 5,
        title: "Transpose Matrix",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "java", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to Transpose a matrix of 3 Rows and 3 Columns. Print the matrix without Transpose and with Transpose.</p>
<p><strong>Bug Type:</strong> Compilation Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Printing Matrix without Transpose:\n4 5 6 \n2 4 3 \n3 4 5 \nPrinting Matrix After Transpose:\n4 2 3 \n5 4 4 \n6 3 5 </pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-006",
        number: 6,
        title: "Largest and Smallest in String",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "java", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Java Program to find the largest and smallest word in a string.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Hardships often prepare ordinary people for an extraordinary destiny</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Smallest word: an\nLargest word: extraordinary</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-007",
        number: 7,
        title: "Factorial of a Number",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "c", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>C Program to find the factorial of the given number.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>3</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Factorial of 3 is: 6</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-008",
        number: 8,
        title: "Positive or Negative",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "c", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>C Program to check whether a given number is positive or negative.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>5</pre></div>
<div class="example"><strong>Sample Output</strong><pre>The given number is Positive..!!</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-009",
        number: 9,
        title: "Sum of Natural Numbers",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "c", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>C Program to Calculate the Sum of Natural Numbers.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>4</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Sum = 10</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-010",
        number: 10,
        title: "Area of Square",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "c", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>C program to calculate the Area of the square.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>7</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Area of Square : 49</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-011",
        number: 11,
        title: "Reverse a Number",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "c", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>C Program to Reverse a given Number.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>987456</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Reversed number = 654789</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-012",
        number: 12,
        title: "Days of Week",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "c", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>C program to print days of week of name using Switch Case.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>1</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Monday</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-013",
        number: 13,
        title: "Half Pyramid of Numbers",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "c", "bounty-100pts"],
        points: 100,
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
        buggyCode: {
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
        ],
    },
    {
        id: "issue-014",
        number: 14,
        title: "Count Vowels and Consonants",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "c", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>C program to count vowels and consonants in a string using pointer.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Pointers</p>
<div class="example"><strong>Sample Input</strong><pre>My name is Salman</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Total number of Vowels: 5, Consonants: 9</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-015",
        number: 15,
        title: "Student Info Structure",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "c", "bounty-200pts"],
        points: 200,
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
        buggyCode: {
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
        ],
    },
    {
        id: "issue-016",
        number: 16,
        title: "Max Min Array",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "c", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Finding the maximum and minimum number in an array.</p>
<p><strong>Bug Type:</strong> Syntax Errors, Loops, Const Correctness</p>

<div class="example"><strong>Sample Input</strong><pre>1 2 3 4 5 6 7 8 9 10</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Sum = 55\nAverage = 05\nMax = 10 @ 9\nMin = 1 @ 0</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-017",
        number: 17,
        title: "Complex Number",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "java", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to print the two roots with real part and imaginary part.</p>
<p><strong>Bug Type:</strong> Syntactical Error</p>
<div class="example"><strong>Sample Input</strong><pre>No Input Required</pre></div>
<div class="example"><strong>Sample Output</strong><pre>root1 = -0.87+1.30i and root2 = -0.87-1.30i</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-018",
        number: 18,
        title: "Mathematical Operations",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "java", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>Write a JAVA Program to take two inputs and print Quotient, Remainder.</p>
<p><strong>Bug Type:</strong> Syntactical Error, Logical Errors</p>
<div class="example"><strong>Sample Input</strong><pre>Enter first number: 24\nEnter second number: 12</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Quotient: 2.0\nRemainder: 0.0</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-019",
        number: 19,
        title: "Frequency of Element",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "java", "bounty-100pts"],
        points: 100,
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
        buggyCode: {
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
        ],
    },
    {
        id: "issue-020",
        number: 20,
        title: "Printing Pattern",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "java", "bounty-100pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Java program to print the following sample pattern.</p>
<p><strong>Bug Type:</strong> Compile Time Errors</p>
<div class="example"><strong>Sample Input</strong><pre>No Input required.</pre></div>
<div class="example"><strong>Sample Output</strong><pre>edcb*\nedc*a\ned*ba\ne*cba\n*dcba</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-021",
        number: 21,
        title: "The Grade Calculator & Validator",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "python", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>A teacher needs a program to calculate the average of 4 tests, but only if the student has no score below 40. If a score is below 40, the average should not be calculated.</p>
<p><strong>Bug Type:</strong> Logic Error (Operator Precedence), Type Error</p>
<div class="example"><strong>Sample Input</strong><pre>80, 70, 90, 60</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Final Average: 75.0</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-022",
        number: 22,
        title: "Multi-User Greeting System",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "python", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>The program loops through a list of names and ages. It should print a personalized message for each, stating how many years until they turn 100.</p>
<p><strong>Bug Type:</strong> Syntax Error (Colon), String Concatenation (Type Error)</p>
<div class="example"><strong>Sample Input</strong><pre>Users: [("Alice", 25), ("Bob", 30)]</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Alice will be 100 in 75 years.\nBob will be 100 in 70 years.</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-023",
        number: 23,
        title: "Inventory Stock Check",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "python", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>A warehouse wants to check if they have enough stock. If stock is below 10, print "Restock", otherwise print "In Stock".</p>
<p><strong>Bug Type:</strong> Comparison Operator Error, Variable Name Typo</p>
<div class="example"><strong>Sample Input</strong><pre>Stock: 5</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Item Status: Restock</pre></div>`,
        buggyCode: {
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
                expectedOutput: "Checking item: Widget\nItem Status: Restock"
            }
        ],
    },
    {
        id: "issue-024",
        number: 24,
        title: "Positive Number Summation",
        difficulty: "Easy",
        type: "debugging",
        labels: ["bug", "python", "bounty-50pts"],
        points: 50,
        description: `<h3>Debugging Challenge</h3>
<p>Ask the user for numbers. Sum only the positive numbers and ignore the negative ones.</p>
<p><strong>Bug Type:</strong> Indentation Error, Initialization Error</p>
<div class="example"><strong>Sample Input</strong><pre>N=3, Numbers: 10, -5, 20</pre></div>
<div class="example"><strong>Sample Output</strong><pre>The total sum is: 30</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-025",
        number: 25,
        title: "String Search & Clean",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "python", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>Remove all special characters from a string and count how many times a "target" word appears.</p>
<p><strong>Bug Type:</strong> Variable Scope (UnboundLocalError), Case Sensitivity</p>
<div class="example"><strong>Sample Input</strong><pre>Text: "Python is great! Python is fast.", Target: "python"</pre></div>
<div class="example"><strong>Sample Output</strong><pre>Count: 2</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-026",
        number: 26,
        title: "Unique Item Collector",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "python", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>Take a list with duplicates and return a new list containing only unique items, preserved in their original order.</p>
<p><strong>Bug Type:</strong> Logical Error (Modifying list during iteration)</p>
<div class="example"><strong>Sample Input</strong><pre>[1, 2, 2, 3, 4, 4, 5]</pre></div>
<div class="example"><strong>Sample Output</strong><pre>[1, 2, 3, 4, 5]</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-027",
        number: 27,
        title: "Banking System: Interest Calculator",
        difficulty: "Medium",
        type: "debugging",
        labels: ["bug", "python", "bounty-100pts"],
        points: 100,
        description: `<h3>Debugging Challenge</h3>
<p>Calculate compound interest for a list of accounts. If an account has a balance over 10,000, apply a 5% bonus before calculating interest.</p>
<p><strong>Bug Type:</strong> Logical Error (Variable Shadowing), Integer Division</p>
<div class="example"><strong>Sample Input</strong><pre>Balance: 12000, Years: 2</pre></div>
<div class="example"><strong>Sample Output</strong><pre>New Balance: 13891.5</pre></div>`,
        buggyCode: {
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

print("New Balance:", calculate_balance(12000, 2))`
        },
        testCases: [
            {
                input: "12000\n2",
                expectedOutput: "New Balance: 13891.5"
            }
        ],
    },
    {
        id: "issue-028",
        number: 28,
        title: "The Matrix Row-Swap",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "python", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Initialize a identity matrix. Attempt to create a "modified" version by swapping the first and second rows. However, the original must remain unchanged.</p>
<p><strong>Bug Type:</strong> Shallow Copy vs Deep Copy, List Reference Aliasing</p>
<div class="example"><strong>Sample Output</strong><pre>Original: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]\nModified: [[0, 1, 0], [1, 0, 0], [0, 0, 1]]</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-029",
        number: 29,
        title: "The Persistent Shopping Cart",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "python", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>A web server handles multiple users. Each time a user adds an item, it should go into their specific cart. If no cart exists, a new one should be created.</p>
<p><strong>Bug Type:</strong> Mutable Default Argument</p>
<div class="example"><strong>Sample Output</strong><pre>User1: ['Apple']\nUser2: ['Banana']</pre></div>`,
        buggyCode: {
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
        ],
    },
    {
        id: "issue-030",
        number: 30,
        title: "Recursive Directory Size Crawler",
        difficulty: "Hard",
        type: "debugging",
        labels: ["bug", "python", "bounty-200pts"],
        points: 200,
        description: `<h3>Debugging Challenge</h3>
<p>Simulate a file system crawler that calculates the total size of a directory. It uses a dictionary to simulate folders and files.</p>
<p><strong>Bug Type:</strong> Recursion Depth (Infinite Loop), Incorrect Base Case handling</p>
<div class="example"><strong>Sample Output</strong><pre>Total Storage Used: 850</pre></div>`,
        buggyCode: {
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
        ],
    },
];

const FILTERS = ["All", "Easy", "Medium", "Hard"];
const TABS = ["Description", "Pull Requests", "Commits"];
const CONSOLE_TABS = ["Test Cases", "Output"];
const LANGUAGES = ["C", "Python3", "Java"];

const difficultyColor = {
    Easy: "#00b8a3",
    Medium: "#ffc01e",
    Hard: "#ef4743",
};

const labelColors = {
    bug: "#d73a49",
    "high-priority": "#e36209",
    performance: "#0366d6",
    security: "#6f42c1",
    async: "#28a745",
    database: "#0366d6",
    debugging: "#f9826c",
};

function LanguageSelector({ onSubmit, initialSelected = [] }) {
    const [selected, setSelected] = useState(initialSelected);
    const languages = ["C", "Python3", "Java"];

    const toggleLanguage = (lang) => {
        setSelected(prev =>
            prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
        );
    };

    const handleSubmit = () => {
        if (selected.length > 0) {
            onSubmit(selected);
        }
    };

    return (
        <div style={{ background: "#161b22", borderRadius: 8, padding: 32, border: "1px solid #30363d" }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>Choose Programming Languages</h2>
            <p style={{ fontSize: 14, color: "#8b949e", marginBottom: 24, marginTop: 0 }}>Select one or more languages. Only questions available in your selected languages will be shown.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 24 }}>
                {languages.map(lang => (
                    <label
                        key={lang}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "12px 16px",
                            background: selected.includes(lang) ? "#1f6feb" : "#0d1117",
                            border: `1px solid ${selected.includes(lang) ? "#1f6feb" : "#30363d"}`,
                            borderRadius: 6,
                            cursor: "pointer",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => { if (!selected.includes(lang)) e.currentTarget.style.borderColor = "#8b949e"; }}
                        onMouseLeave={(e) => { if (!selected.includes(lang)) e.currentTarget.style.borderColor = "#30363d"; }}
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(lang)}
                            onChange={() => toggleLanguage(lang)}
                            style={{ width: 16, height: 16, cursor: "pointer" }}
                        />
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{lang}</span>
                    </label>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                disabled={selected.length === 0}
                style={{
                    width: "100%",
                    padding: "12px 24px",
                    background: selected.length > 0 ? "#238636" : "#21262d",
                    color: selected.length > 0 ? "white" : "#6e7681",
                    border: "none",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: selected.length > 0 ? "pointer" : "not-allowed",
                    transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { if (selected.length > 0) e.currentTarget.style.background = "#2ea043"; }}
                onMouseLeave={(e) => { if (selected.length > 0) e.currentTarget.style.background = "#238636"; }}
            >
                {selected.length === 0 ? "Select at least one language" : `Continue with ${selected.length} language${selected.length > 1 ? 's' : ''}`}
            </button>
        </div>
    );
}

const TeamSignIn = ({ onStart, onAdmin }) => {
    const [team, setTeam] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleStart = async () => {
        if (!team.trim()) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch('http://localhost:5001/api/submissions/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ teamName: team })
            });
            const data = await res.json();
            if (data.success) {
                onStart(team, data.data.startTime, data.data.languages, data.data.assignedIssueIds);
            } else {
                setError(data.error || "Failed to start");
            }
        } catch (e) {
            setError("Connection error");
        }
        setLoading(false);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#0d1117", color: "#c9d1d9" }}>
            <div style={{ width: "100%", maxWidth: "400px", padding: "32px", borderRadius: "6px", backgroundColor: "#161b22", border: "1px solid #30363d", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", textAlign: "center" }}>Team Login</h2>
                <input
                    type="text"
                    placeholder="Enter Team Name"
                    style={{ width: "100%", padding: "12px", borderRadius: "6px", backgroundColor: "#0d1117", border: "1px solid #30363d", color: "white", marginBottom: "16px" }}
                    value={team}
                    onChange={e => setTeam(e.target.value)}
                />
                {error && <div style={{ color: "#f85149", marginBottom: "16px", fontSize: "14px" }}>{error}</div>}
                <button
                    onClick={handleStart}
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#238636",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: loading ? "not-allowed" : "pointer",
                        marginBottom: "16px",
                        opacity: loading ? 0.7 : 1
                    }}
                >
                    {loading ? "Starting..." : "Start Contest"}
                </button>
                <div style={{ textAlign: "right" }}>
                    <button
                        onClick={onAdmin}
                        style={{ background: "none", border: "none", color: "#8b949e", fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}
                    >
                        Admin Access
                    </button>
                </div>
            </div>
        </div>
    );
};

const ContestTimer = ({ startTime, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 45 * 60 * 1000 - elapsed);

            if (remaining === 0) {
                onExpire();
                clearInterval(interval);
            }

            const m = Math.floor(remaining / 60000);
            const s = Math.floor((remaining % 60000) / 1000);
            setTimeLeft(`${m}:${s.toString().padStart(2, '0')}`);
        }, 1000);
        return () => clearInterval(interval);
    }, [startTime, onExpire]);

    return (
        <div style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#1f6feb",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "24px",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            border: "1px solid #30363d"
        }}>
            {timeLeft}
        </div>
    );
};

const AdminLogView = ({ onBack }) => {
    const [logs, setLogs] = useState([]);
    const [rawLogs, setRawLogs] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5001/api/submissions/logs');
            const data = await res.json();
            if (data.success) {
                setRawLogs(data.data);
                parseLogs(data.data);
            }
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    const parseLogs = (logText) => {
        const lines = logText.trim().split('\n');
        const teamStats = {};

        lines.forEach(line => {
            // [TIMESTAMP] [TEAM] [PROBLEM] [STATUS] [POINTS] [TIME]
            const match = line.match(/\[(.*?)\] \[(.*?)\] \[(.*?)\] \[(.*?)\] \[(.*?)\]/);
            if (match) {
                // eslint-disable-next-line no-unused-vars
                const [_, ts, team, problem, status, pointsStr] = match;
                if (!teamStats[team]) {
                    teamStats[team] = { solved: new Set(), points: 0, lastActive: ts };
                }
                const points = parseInt(pointsStr) || 0;

                if (status === 'Accepted') {
                    if (!teamStats[team].solved.has(problem)) {
                        teamStats[team].solved.add(problem);
                        teamStats[team].points += points;
                    }
                } else if (problem === 'PENALTY') {
                    // Deduct points for penalties
                    teamStats[team].points += points; // points is already negative
                }
                teamStats[team].lastActive = ts;
            }
        });

        const statsArray = Object.entries(teamStats).map(([name, stat]) => ({
            name,
            solvedCount: stat.solved.size,
            points: stat.points,
            lastActive: new Date(stat.lastActive).toLocaleTimeString()
        }));

        setLogs(statsArray);
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#0d1117", color: "#c9d1d9", padding: "24px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Admin Logs</h1>
                    <button onClick={onBack} style={{ backgroundColor: "#21262d", border: "1px solid #30363d", color: "#c9d1d9", padding: "6px 16px", borderRadius: "6px", cursor: "pointer" }}>Back</button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    <div style={{ backgroundColor: "#161b22", padding: "24px", borderRadius: "6px", border: "1px solid #30363d" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px", borderBottom: "1px solid #30363d", paddingBottom: "8px" }}>Team Leaderboard</h2>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ color: "#8b949e", textAlign: "left" }}>
                                    <th style={{ paddingBottom: "8px" }}>Team</th>
                                    <th style={{ paddingBottom: "8px" }}>Solved</th>
                                    <th style={{ paddingBottom: "8px" }}>Points</th>
                                    <th style={{ paddingBottom: "8px" }}>Last Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map(team => (
                                    <tr key={team.name} style={{ borderBottom: "1px solid #30363d" }}>
                                        <td style={{ padding: "8px 0" }}>{team.name}</td>
                                        <td style={{ padding: "8px 0" }}>{team.solvedCount}</td>
                                        <td style={{ padding: "8px 0", fontWeight: "bold", color: "#2ea043" }}>{team.points}</td>
                                        <td style={{ padding: "8px 0", fontSize: "12px", color: "#8b949e" }}>{team.lastActive}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ backgroundColor: "#161b22", padding: "24px", borderRadius: "6px", border: "1px solid #30363d", height: "600px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>Raw Logs</h2>
                            <button onClick={fetchLogs} style={{ background: "none", border: "none", color: "#58a6ff", cursor: "pointer" }}>Refresh</button>
                        </div>
                        <pre style={{ flex: 1, backgroundColor: "#010409", padding: "12px", borderRadius: "6px", overflow: "auto", fontSize: "12px", fontFamily: "monospace", color: "#7ee787" }}>
                            {rawLogs || "No logs available."}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AdminLogin = ({ onLogin, onBack }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "admin123") {
            onLogin();
        } else {
            setError("Invalid password");
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#0d1117", color: "#c9d1d9" }}>
            <div style={{ width: "100%", maxWidth: "400px", padding: "32px", borderRadius: "6px", backgroundColor: "#161b22", border: "1px solid #30363d", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", textAlign: "center" }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        style={{ width: "100%", padding: "12px", borderRadius: "6px", backgroundColor: "#0d1117", border: "1px solid #30363d", color: "white", marginBottom: "16px" }}
                        value={password}
                        onChange={e => {
                            console.log('Password changed:', e.target.value);
                            setPassword(e.target.value);
                        }}
                    />
                    {error && <div style={{ color: "#f85149", marginBottom: "16px", fontSize: "14px" }}>{error}</div>}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#238636",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginBottom: "16px"
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={onBack}
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "transparent",
                            color: "#c9d1d9",
                            border: "1px solid #30363d",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
                    >
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default function GitHubIssuesMockup() {
    const [teamName, setTeamName] = useState("");
    const [contestStarted, setContestStarted] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [showAdmin, setShowAdmin] = useState(false);
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [contestEnded, setContestEnded] = useState(false);

    // Fullscreen Monitor State
    const [isFullscreen, setIsFullscreen] = useState(true);
    const [fullscreenWarning, setFullscreenWarning] = useState(false);
    const [penaltyTimer, setPenaltyTimer] = useState(null);

    // Monitor Fullscreen changes
    useEffect(() => {
        if (!contestStarted || contestEnded) return;

        const handleFullscreenChange = () => {
            const isFs = !!document.fullscreenElement;
            setIsFullscreen(isFs);

            if (!isFs) {
                setFullscreenWarning(true);
                // Start 5s timer
                const timer = setTimeout(() => {
                    handlePenalty();
                }, 5000); // 5 seconds
                setPenaltyTimer(timer);
            } else {
                setFullscreenWarning(false);
                if (penaltyTimer) {
                    clearTimeout(penaltyTimer);
                    setPenaltyTimer(null);
                }
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            if (penaltyTimer) clearTimeout(penaltyTimer);
        };
    }, [contestStarted, contestEnded, penaltyTimer]);

    const handlePenalty = async () => {
        if (!teamName) return;

        // Clear timer so we don't double penalize for the same instance (unless they re-enter and exit again)
        setPenaltyTimer(null);

        try {
            const response = await fetch('http://localhost:5001/api/submissions/penalty', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    teamName,
                    points: 25,
                    reason: "Fullscreen Violation (>5s)"
                })
            });
            if (response.ok) {
                alert("⚠️ MULTIPLE RULES VIOLATIONS DETECTED: 25 POINTS DEDUCTED FROM YOUR SCORE.");
            } else {
                console.error("Penalty failed:", await response.text());
            }
        } catch (e) {
            console.error("Failed to submit penalty", e);
        }
    };

    const requestFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
    };

    const handleTeamStart = (name, start, savedLanguages = [], savedIssueIds = []) => {
        setTeamName(name);
        setStartTime(start);
        setContestStarted(true);
        requestFullscreen();

        if (savedLanguages && savedLanguages.length > 0) {
            setSelectedLanguages(savedLanguages);
            setLanguage(savedLanguages[0]);

            // Check if we have saved question IDs
            if (savedIssueIds && savedIssueIds.length > 0) {
                // Restore the specific order of questions
                const restoredIssues = savedIssueIds
                    .map(id => issues.find(i => i.id === id))
                    .filter(i => i !== undefined);

                if (restoredIssues.length > 0) {
                    setRandomizedIssues(restoredIssues);
                    setShowLanguageSelection(false);
                    return; // Done
                }
            }

            // Fallback: Randomize based on saved languages if IDs are missing (legacy or error)
            const availableIssues = issues.filter(i => {
                if (i.type !== 'debugging') return false;
                return savedLanguages.some(lang => i.buggyCode[getLanguageKey(lang)] !== undefined);
            });

            const shuffle = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            };

            const easy = shuffle(availableIssues.filter(i => i.difficulty === 'Easy'));
            const medium = shuffle(availableIssues.filter(i => i.difficulty === 'Medium'));
            const hard = shuffle(availableIssues.filter(i => i.difficulty === 'Hard'));

            const selectedEasy = easy.slice(0, 4);
            const selectedMedium = medium.slice(0, 3);
            const selectedHard = hard.slice(0, 3);

            const randomized = [...selectedHard, ...selectedMedium, ...selectedEasy];
            setRandomizedIssues(randomized);

            // Skip language selection screen
            setShowLanguageSelection(false);
        }
    };

    const handleContestExpire = () => {
        setContestEnded(true);
    };

    const [showLanguageSelection, setShowLanguageSelection] = useState(true);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [activeView, setActiveView] = useState("Issues");
    const [selectedIssueId, setSelectedIssueId] = useState("issue-001");
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeTab, setActiveTab] = useState("Description");
    const [activeConsoleTab, setActiveConsoleTab] = useState("Test Cases");
    const [language, setLanguage] = useState("Java");
    const [searchQuery, setSearchQuery] = useState("");
    const [consoleOutput, setConsoleOutput] = useState(null);
    const [codeMap, setCodeMap] = useState({});
    const [prStatus, setPrStatus] = useState(null);
    const [runResults, setRunResults] = useState(null);
    const [completedIssues, setCompletedIssues] = useState(new Set());
    const [flaggedIssues, setFlaggedIssues] = useState(new Set());
    const [submissionHistory, setSubmissionHistory] = useState({});
    const [randomizedIssues, setRandomizedIssues] = useState(null);

    const currentIssue = issues.find((i) => i.id === selectedIssueId) || issues[0];

    console.log("Render: selectedIssueId =", selectedIssueId);
    console.log("Render: currentIssue found =", !!issues.find((i) => i.id === selectedIssueId));
    console.log("Render: issues ids =", issues.map(i => i.id));

    const getLanguageKey = (lang) => {
        const map = {
            "JavaScript": "javascript",
            "Python3": "python",
            "Java": "java",
            "C": "c"
        };
        return map[lang] || lang.toLowerCase();
    };

    const codeKey = `${currentIssue.id}-${language}`;
    const currentCode =
        codeMap[codeKey] ??
        currentIssue.buggyCode[getLanguageKey(language)] ??
        currentIssue.buggyCode.java ??
        "// No code available for this language";

    const setCode = (val) => setCodeMap((prev) => ({ ...prev, [codeKey]: val }));

    const availableLanguages = currentIssue.type === 'debugging'
        ? LANGUAGES.filter(lang => currentIssue.buggyCode[getLanguageKey(lang)] !== undefined)
        : LANGUAGES;

    useEffect(() => {
        if (!availableLanguages.includes(language)) {
            setLanguage(availableLanguages[0]);
        }
    }, [currentIssue.id, availableLanguages, language]);

    const filteredIssues = (randomizedIssues || issues).filter((i) => {
        // For LeetCode-style questions, show them for all languages
        // For debugging questions, only show if they have code in a selected language
        // Note: randomizedIssues already filtered by language availability, but we keep this check for safety
        // and for the case where valid issues might be filtered out if languages change dynamically
        // (though randomizedIssues is only set on language selection submission)
        if (selectedLanguages.length > 0 && i.type === 'debugging') {
            const hasSelectedLanguage = selectedLanguages.some(lang => {
                return i.buggyCode[getLanguageKey(lang)] !== undefined;
            });
            if (!hasSelectedLanguage) return false;
        }

        // Filter by difficulty
        const matchesFilter = activeFilter === "All" || i.difficulty === activeFilter;

        // Filter by search query
        const matchesSearch =
            !searchQuery || i.title.toLowerCase().includes(searchQuery.toLowerCase()) || String(i.number).includes(searchQuery);

        return matchesFilter && matchesSearch;
    });

    // Effect to update selected issue if the current one is filtered out
    useEffect(() => {
        if (filteredIssues.length > 0) {
            const isSelectedVisible = filteredIssues.some(i => i.id === selectedIssueId);
            if (!isSelectedVisible) {
                setSelectedIssueId(filteredIssues[0].id);
            }
        }
    }, [filteredIssues, selectedIssueId]);

    const handleRun = async () => {
        setActiveConsoleTab("Output");
        setConsoleOutput("Running code...");
        setRunResults(null);

        try {
            // Using correct backend port 5000
            const response = await fetch('http://localhost:5001/api/submissions/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    problemId: currentIssue.id,
                    code: currentCode,
                    language: language
                })
            });

            const data = await response.json();

            if (data.success) {
                setRunResults(data.data.results);
                const allPassed = data.data.status === 'Accepted';
                setConsoleOutput(allPassed ? "All sample test cases passed!" : "Some test cases failed");
            } else {
                setConsoleOutput("Error: " + (data.error || "Unknown error"));
            }

        } catch (e) {
            setConsoleOutput("Error connecting to server: " + e.message);
        }
    };

    const handleCreatePR = async () => {
        setConsoleOutput("Submitting solution...");
        setActiveConsoleTab("Output");

        try {
            const response = await fetch('http://localhost:5001/api/submissions/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    problemId: currentIssue.id,
                    code: currentCode,
                    language: language,
                    userId: teamName
                })
            });

            const data = await response.json();

            if (data.success) {
                const result = data.data;
                const success = result.status === 'Accepted';

                setPrStatus(success ? "merged" : "changes-requested");
                setConsoleOutput(result.status === 'Accepted' ? "merged" : "failed: " + result.status);

                if (success) {
                    setCompletedIssues(prev => new Set([...prev, currentIssue.id]));
                }

                // Add to history
                const submission = {
                    timestamp: new Date().toLocaleString(),
                    status: success ? 'merged' : 'changes-requested',
                    language: language,
                    code: currentCode
                };

                setSubmissionHistory(prev => ({
                    ...prev,
                    [currentIssue.id]: [...(prev[currentIssue.id] || []), submission]
                }));

            } else {
                setConsoleOutput("Submission error: " + (data.error || "Unknown error"));
            }
        } catch (e) {
            setConsoleOutput("Error connecting to server: " + e.message);
        }
    };

    const handleReset = () => {
        const defaultCode =
            currentIssue.buggyCode[getLanguageKey(language)] ?? currentIssue.buggyCode.java;
        setCodeMap((prev) => ({ ...prev, [codeKey]: defaultCode }));
    };

    const handleFlag = () => {
        console.log('Flag button clicked for issue:', currentIssue.id);
        setFlaggedIssues(prev => {
            const newSet = new Set(prev);
            if (newSet.has(currentIssue.id)) {
                console.log('Removing flag from:', currentIssue.id);
                newSet.delete(currentSet.id);
            } else {
                console.log('Adding flag to:', currentIssue.id);
                newSet.add(currentIssue.id);
            }
            console.log('New flagged issues:', Array.from(newSet));
            return newSet;
        });
    };

    const handleLanguageSelection = (langs) => {
        setSelectedLanguages(langs);
        if (langs.length > 0) {
            // Set the first selected language as the default
            setLanguage(langs[0]);

            // Randomize questions logic
            const availableIssues = issues.filter(i => {
                if (i.type !== 'debugging') return false; // Only consider debugging questions
                return langs.some(lang => i.buggyCode[getLanguageKey(lang)] !== undefined);
            });

            // Helper to shuffle array
            const shuffle = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            };

            const easy = shuffle(availableIssues.filter(i => i.difficulty === 'Easy'));
            const medium = shuffle(availableIssues.filter(i => i.difficulty === 'Medium'));
            const hard = shuffle(availableIssues.filter(i => i.difficulty === 'Hard'));

            // Select 4 Easy, 3 Medium, 3 Hard
            // If not enough, take what's available
            const selectedEasy = easy.slice(0, 4);
            const selectedMedium = medium.slice(0, 3);
            const selectedHard = hard.slice(0, 3);

            // Combine and sort: Hard -> Medium -> Easy
            // Note: We are creating a subset of issues to display.
            // Since the main 'issues' array is static, we might need a way to store this randomized subset
            // or filter the main view based on this selection.
            // However, the current app filters 'issues' content directly in the render.
            // To support this feature properly without major refactor, we can store the 'randomizedIds' in state.

            const randomized = [...selectedHard, ...selectedMedium, ...selectedEasy];
            // Update a new state variable for randomized order
            setRandomizedIssues(randomized);

            const randomizedIds = randomized.map(i => i.id);

            // Save to backend
            fetch('http://localhost:5001/api/submissions/languages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ teamName, languages: langs, issueIds: randomizedIds })
            }).catch(err => console.error("Failed to save languages", err));

            setShowLanguageSelection(false);
        }
    };

    // Admin View
    if (showAdmin) {
        if (!adminAuthenticated) {
            return <AdminLogin onLogin={() => setAdminAuthenticated(true)} onBack={() => setShowAdmin(false)} />;
        }
        return <AdminLogView onBack={() => setShowAdmin(false)} />;
    }

    // Team Login
    if (!contestStarted) {
        return <TeamSignIn onStart={handleTeamStart} onAdmin={() => setShowAdmin(true)} />;
    }

    // Contest Ended
    if (contestEnded) {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#0d1117", color: "white" }}>
                <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#161b22", borderRadius: "8px", border: "1px solid #30363d" }}>
                    <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px", color: "#f85149" }}>Contest Ended!</h1>
                    <p style={{ fontSize: "18px", color: "#c9d1d9" }}>Time is up. Thank you for participating.</p>
                </div>
            </div>
        );
    }

    // Language selection screen
    if (showLanguageSelection) {
        return (
            <div style={{ minHeight: "100vh", background: "#0d1117", color: "#c9d1d9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
                <div style={{ maxWidth: 600, width: "100%", padding: 40 }}>
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
                            <svg width="32" height="32" viewBox="0 0 16 16" fill="white">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>Fourth Wing</h1>
                        </div>
                        <p style={{ fontSize: 16, color: "#8b949e", margin: 0 }}>Select your programming languages to get started</p>
                    </div>

                    <LanguageSelector onSubmit={handleLanguageSelection} initialSelected={selectedLanguages} />
                </div>
            </div>
        );
    }

    return (
        <>
            <ContestTimer startTime={startTime} onExpire={handleContestExpire} />
            <div style={{ fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif`, background: "#0d1117", color: "#c9d1d9", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>


                {/* Fullscreen Warning Overlay */}
                {fullscreenWarning && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255,0,0,0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>⚠️ WARNING ⚠️</h1>
                        <p style={{ fontSize: '24px', marginBottom: '40px' }}>RETURN TO FULLSCREEN IMMEDIATELY</p>
                        <p style={{ fontSize: '18px' }}>Penalty in 5 seconds...</p>
                        <button
                            onClick={requestFullscreen}
                            style={{
                                padding: '20px 40px',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                backgroundColor: 'white',
                                color: 'red',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                marginTop: '20px'
                            }}
                        >
                            RETURN TO FULLSCREEN
                        </button>
                    </div>
                )}

                {/* Header */}
                <header style={{ height: 50, background: "#161b22", borderBottom: "1px solid #30363d", display: "flex", alignItems: "center", padding: "0 20px", justifyContent: "space-between", flexShrink: 0 }}>
                    <div style={{ fontSize: 20, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span>Fourth Wing</span>
                    </div>
                    <nav style={{ display: "flex", gap: 30, alignItems: "center" }}>
                        {["Issues"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                onClick={(e) => { e.preventDefault(); setActiveView(link); }}
                                style={{
                                    color: link === activeView ? "#c9d1d9" : "#8b949e",
                                    textDecoration: "none",
                                    fontSize: 14,
                                    transition: "color 0.2s",
                                    fontWeight: link === activeView ? 600 : 400
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#c9d1d9")}
                                onMouseLeave={(e) => (e.target.style.color = link === activeView ? "#c9d1d9" : "#8b949e")}
                            >
                                {link}
                            </a>
                        ))}
                        <span style={{ cursor: "pointer" }}>👤 {teamName}</span>
                    </nav>
                    <button
                        onClick={() => setShowLanguageSelection(true)}
                        style={{
                            marginLeft: "16px",
                            padding: "4px 12px",
                            fontSize: "12px",
                            borderRadius: "6px",
                            border: "1px solid #30363d",
                            background: "transparent",
                            color: "#8b949e",
                            cursor: "pointer"
                        }}
                    >
                        Change Languages
                    </button>
                </header>

                {/* Main Container */}
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                    {activeView === "Issues" && (
                        <>
                            {/* Issue List Sidebar */}
                            <aside style={{ width: 350, background: "#0d1117", borderRight: "1px solid #30363d", overflowY: "auto", flexShrink: 0 }}>
                                <div style={{ padding: 16, borderBottom: "1px solid #30363d", position: "sticky", top: 0, background: "#0d1117", zIndex: 10 }}>
                                    <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Open Issues</h2>
                                    <input
                                        type="text"
                                        placeholder="Search issues..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 6, padding: "8px 12px", color: "#c9d1d9", width: "100%", fontSize: 14 }}
                                    />
                                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                        {FILTERS.map((f) => (
                                            <div
                                                key={f}
                                                onClick={() => setActiveFilter(f)}
                                                style={{
                                                    background: activeFilter === f ? "#238636" : "#161b22",
                                                    color: activeFilter === f ? "white" : "#8b949e",
                                                    padding: "4px 12px",
                                                    borderRadius: 12,
                                                    fontSize: 12,
                                                    cursor: "pointer",
                                                    border: "1px solid " + (activeFilter === f ? "#238636" : "#30363d"),
                                                    transition: "all 0.2s",
                                                }}
                                            >
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    {filteredIssues.map((issue) => (
                                        <div
                                            key={issue.id}
                                            onClick={() => { setSelectedIssueId(issue.id); setConsoleOutput(null); setActiveConsoleTab("Test Cases"); setPrStatus(null); }}
                                            style={{
                                                padding: "14px 16px",
                                                borderBottom: "1px solid #30363d",
                                                cursor: "pointer",
                                                background: completedIssues.has(issue.id) ? "#1a4d2e" : (flaggedIssues.has(issue.id) ? "#8B4000" : (issue.id === selectedIssueId ? "#161b22" : "transparent")),
                                                borderLeft: issue.id === selectedIssueId ? "3px solid #238636" : "3px solid transparent",
                                                transition: "background 0.2s",
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = completedIssues.has(issue.id) ? "#2a5d3e" : (flaggedIssues.has(issue.id) ? "#A0522D" : (issue.id === selectedIssueId ? "#161b22" : "#161b22")); }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = completedIssues.has(issue.id) ? "#1a4d2e" : (flaggedIssues.has(issue.id) ? "#8B4000" : (issue.id === selectedIssueId ? "#161b22" : "transparent")); }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                                {completedIssues.has(issue.id) ? (
                                                    <span style={{ color: "#3fb950", fontSize: 16 }}>✓</span>
                                                ) : (
                                                    <span style={{ color: "#238636", fontSize: 16 }}>●</span>
                                                )}
                                                <span style={{ color: "#8b949e", fontSize: 13 }}>#{issue.number}</span>
                                                <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: completedIssues.has(issue.id) ? "#3fb950" : "#c9d1d9" }}>{issue.title}</span>
                                                {completedIssues.has(issue.id) && (
                                                    <span style={{ background: "#1a7f37", color: "white", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>SOLVED</span>
                                                )}
                                                {flaggedIssues.has(issue.id) && (
                                                    <span style={{ color: "#f85149", fontSize: 14 }}>🚩</span>
                                                )}
                                            </div>
                                            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 6 }}>
                                                {issue.labels.map((label) => (
                                                    <span
                                                        key={label}
                                                        className="label-badge"
                                                        style={{
                                                            background: labelColors[label.replace(/bounty-\d+pts/, "bounty")] || "#6e7681",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {label}
                                                    </span>
                                                ))}
                                            </div>
                                            <div style={{ fontSize: 12, color: completedIssues.has(issue.id) ? "#3fb950" : difficultyColor[issue.difficulty] }}>
                                                {issue.difficulty} • {completedIssues.has(issue.id) ? `${issue.points} points earned ✓` : `${issue.points} points`}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div style={{ flex: 1, background: "#0d1117", display: "flex", overflow: "hidden" }}>
                                {/* Description Panel */}
                                <div style={{ width: "45%", background: "#0d1117", overflowY: "auto", padding: 24 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                        <h1 style={{ flex: 1, fontSize: 24, fontWeight: 600 }}>{currentIssue.title} <span style={{ color: "#8b949e", fontSize: 18 }}>#{currentIssue.number}</span></h1>
                                        <button
                                            onClick={handleFlag}
                                            style={{ width: 32, height: 32, background: "#161b22", border: "1px solid #30363d", borderRadius: 6, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#8b949e", transition: "all 0.2s", fontSize: 14 }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f85149"; e.currentTarget.style.color = "#f85149"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363d"; e.currentTarget.style.color = "#8b949e"; }}
                                            title="Flag question for review"
                                        >
                                            🚩
                                        </button>
                                    </div>

                                    {/* Labels */}
                                    <div style={{ marginBottom: 20, display: "flex", gap: 6, flexWrap: "wrap" }}>
                                        {currentIssue.labels.map((label) => (
                                            <span
                                                key={label}
                                                className="label-badge"
                                                style={{
                                                    background: labelColors[label.replace(/bounty-\d+pts/, "bounty")] || "#6e7681",
                                                    color: "white",
                                                    padding: "4px 12px",
                                                }}
                                            >
                                                {label}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Tabs */}
                                    <div style={{ display: "flex", gap: 20, borderBottom: "1px solid #30363d", marginBottom: 20 }}>
                                        {TABS.map((tab) => (
                                            <div
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                style={{
                                                    padding: "8px 0",
                                                    color: activeTab === tab ? "#c9d1d9" : "#8b949e",
                                                    cursor: "pointer",
                                                    borderBottom: activeTab === tab ? "2px solid #f78166" : "2px solid transparent",
                                                    fontSize: 14,
                                                    transition: "all 0.2s",
                                                }}
                                            >
                                                {tab}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tab Content */}
                                    {activeTab === "Description" && (
                                        <div
                                            style={{ fontSize: 14, lineHeight: 1.7, color: "#8b949e" }}
                                            dangerouslySetInnerHTML={{ __html: currentIssue.description }}
                                        />
                                    )}

                                    {activeTab === "Pull Requests" && (
                                        <div style={{ fontSize: 14, color: "#8b949e" }}>
                                            <h3 style={{ color: "#c9d1d9", marginBottom: 16 }}>Submission History</h3>
                                            {submissionHistory[currentIssue.id] && submissionHistory[currentIssue.id].length > 0 ? (
                                                submissionHistory[currentIssue.id].map((sub, idx) => (
                                                    <div key={idx} style={{ background: "#161b22", padding: 16, borderRadius: 6, marginBottom: 12, borderLeft: `3px solid ${sub.status === 'merged' ? '#3fb950' : '#f85149'}` }}>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                                            <span style={{ color: sub.status === 'merged' ? '#3fb950' : '#f85149', fontWeight: 600 }}>
                                                                {sub.status === 'merged' ? '✓ Merged' : '✗ Changes Requested'}
                                                            </span>
                                                            <span style={{ fontSize: 12, color: "#8b949e" }}>{sub.timestamp}</span>
                                                        </div>
                                                        <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 8 }}>Language: {sub.language}</div>
                                                        <details style={{ marginTop: 8 }}>
                                                            <summary style={{ cursor: "pointer", color: "#58a6ff", fontSize: 13, padding: "4px 0" }}>View Code</summary>
                                                            <pre style={{ background: "#0d1117", padding: 12, borderRadius: 4, marginTop: 8, overflow: "auto", fontSize: 12, lineHeight: 1.5, color: "#c9d1d9" }}>{sub.code}</pre>
                                                        </details>
                                                    </div>
                                                ))
                                            ) : (
                                                <div style={{ padding: 20, textAlign: "center", color: "#6e7681" }}>
                                                    No submissions yet. Submit your solution to see it here.
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === "Commits" && (
                                        <div style={{ fontSize: 14, color: "#8b949e" }}>
                                            <h3 style={{ color: "#c9d1d9", marginBottom: 16 }}>Successful Submissions</h3>
                                            {submissionHistory[currentIssue.id] && submissionHistory[currentIssue.id].filter(s => s.status === 'merged').length > 0 ? (
                                                submissionHistory[currentIssue.id].filter(s => s.status === 'merged').map((sub, idx) => (
                                                    <div key={idx} style={{ background: "#161b22", padding: 16, borderRadius: 6, marginBottom: 12, borderLeft: "3px solid #3fb950" }}>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                                            <span style={{ color: "#3fb950", fontWeight: 600 }}>✓ Commit #{idx + 1}</span>
                                                            <span style={{ fontSize: 12, color: "#8b949e" }}>{sub.timestamp}</span>
                                                        </div>
                                                        <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 4 }}>Language: {sub.language}</div>
                                                        <div style={{ fontSize: 12, color: "#3fb950", marginBottom: 8 }}>All tests passed</div>
                                                        <details style={{ marginTop: 8 }}>
                                                            <summary style={{ cursor: "pointer", color: "#58a6ff", fontSize: 13, padding: "4px 0" }}>View Code</summary>
                                                            <pre style={{ background: "#0d1117", padding: 12, borderRadius: 4, marginTop: 8, overflow: "auto", fontSize: 12, lineHeight: 1.5, color: "#c9d1d9" }}>{sub.code}</pre>
                                                        </details>
                                                    </div>
                                                ))
                                            ) : (
                                                <div style={{ padding: 20, textAlign: "center", color: "#6e7681" }}>
                                                    No successful submissions yet. Solve the problem to see commits here.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <style>{`
              .example { background: #161b22; border-left: 3px solid #238636; padding: 16px; margin: 16px 0; border-radius: 4px; }
              .example pre { font-family: Consolas, Monaco, monospace; color: #c9d1d9; font-size: 13px; line-height: 1.6; margin: 8px 0; white-space: pre-wrap; }
              .constraints { background: #161b22; padding: 16px; border-radius: 4px; margin: 16px 0; }
              .constraints ul { margin-left: 20px; margin-top: 8px; }
              .constraints li { margin: 6px 0; color: #8b949e; }
            `}</style>
                                </div>

                                {/* Editor Panel */}
                                <div style={{ flex: 1, background: "#0d1117", display: "flex", flexDirection: "column", borderLeft: "1px solid #30363d" }}>
                                    {/* Editor Header */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#161b22", borderBottom: "1px solid #30363d" }}>
                                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                            <select
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                                style={{ background: "#0d1117", border: "1px solid #30363d", color: "#c9d1d9", padding: "6px 12px", borderRadius: 6, fontSize: 13, cursor: "pointer" }}
                                            >
                                                {availableLanguages.map((l) => <option key={l}>{l}</option>)}
                                            </select>
                                        </div>
                                        <div style={{ display: "flex", gap: 8 }}>
                                            <button onClick={handleReset} style={{ padding: "6px 16px", borderRadius: 6, fontSize: 13, cursor: "pointer", border: "1px solid #30363d", background: "#0d1117", color: "#8b949e", fontWeight: 500 }}>
                                                ↻ Reset
                                            </button>
                                            <button onClick={handleRun} style={{ padding: "6px 16px", borderRadius: 6, fontSize: 13, cursor: "pointer", border: "1px solid #30363d", background: "#0d1117", color: "#58a6ff", fontWeight: 500 }}>
                                                ▶ Run
                                            </button>
                                            <button onClick={handleCreatePR} style={{ padding: "6px 16px", borderRadius: 6, fontSize: 13, cursor: "pointer", border: "none", background: "#238636", color: "white", fontWeight: 500 }}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>

                                    {/* PR Status Banner */}
                                    {prStatus === "merged" && (
                                        <div style={{ background: "#1a7f37", borderBottom: "1px solid #2ea043", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: 16 }}>✓</span>
                                            <div>
                                                <div style={{ fontWeight: 600, color: "white" }}>Pull Request Merged!</div>
                                                <div style={{ fontSize: 12, color: "#aff5b4" }}>+{currentIssue.points} points awarded to your team</div>
                                            </div>
                                        </div>
                                    )}
                                    {prStatus === "changes-requested" && (
                                        <div style={{ background: "#9e6a03", borderBottom: "1px solid #d29922", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: 16 }}>⚠️</span>
                                            <div>
                                                <div style={{ fontWeight: 600, color: "white" }}>Changes Requested</div>
                                                <div style={{ fontSize: 12, color: "#f8e3a1" }}>Hint: Check edge cases for empty arrays</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Code Editor */}
                                    <div style={{ flex: 1, background: "#0d1117", padding: 16, overflow: "auto" }}>
                                        <textarea
                                            value={currentCode}
                                            onChange={(e) => setCode(e.target.value)}
                                            spellCheck={false}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "transparent",
                                                border: "none",
                                                color: "#c9d1d9",
                                                fontFamily: "Consolas, Monaco, 'Courier New', monospace",
                                                fontSize: 14,
                                                lineHeight: 1.6,
                                                resize: "none",
                                            }}
                                        />
                                    </div>

                                    {/* Console Panel */}
                                    <div style={{ height: 200, background: "#0d1117", borderTop: "1px solid #30363d", display: "flex", flexDirection: "column", flexShrink: 0 }}>
                                        <div style={{ padding: "8px 16px", background: "#161b22", borderBottom: "1px solid #30363d", display: "flex", gap: 20 }}>
                                            {CONSOLE_TABS.map((tab) => (
                                                <div
                                                    key={tab}
                                                    onClick={() => setActiveConsoleTab(tab)}
                                                    style={{
                                                        padding: "4px 0",
                                                        color: activeConsoleTab === tab ? "#c9d1d9" : "#8b949e",
                                                        cursor: "pointer",
                                                        fontSize: 13,
                                                        borderBottom: activeConsoleTab === tab ? "2px solid #f78166" : "2px solid transparent",
                                                    }}
                                                >
                                                    {tab}
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ padding: 16, overflowY: "auto", flex: 1 }}>
                                            {activeConsoleTab === "Test Cases" && (
                                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                                    {currentIssue.testCases ? currentIssue.testCases.map((tc, idx) => (
                                                        <div key={idx} style={{ background: "#161b22", padding: 12, borderRadius: 6, fontSize: 13 }}>
                                                            <div style={{ color: "#8b949e", marginBottom: 8, fontWeight: 600 }}>Test Case {idx + 1}:</div>
                                                            <div style={{ marginBottom: 4 }}>
                                                                <span style={{ color: "#8b949e", marginRight: 8 }}>Input:</span>
                                                                <span style={{ color: "#c9d1d9", fontFamily: "Consolas, Monaco, monospace", whiteSpace: "pre-wrap" }}>{tc.input || "(Empty)"}</span>
                                                            </div>
                                                            <div>
                                                                <span style={{ color: "#8b949e", marginRight: 8 }}>Expected:</span>
                                                                <span style={{ color: "#c9d1d9", fontFamily: "Consolas, Monaco, monospace", whiteSpace: "pre-wrap" }}>{tc.expectedOutput}</span>
                                                            </div>
                                                        </div>
                                                    )) : (
                                                        <div style={{ color: "#8b949e", fontStyle: "italic" }}>No test cases available.</div>
                                                    )}
                                                </div>
                                            )}
                                            {activeConsoleTab === "Output" && (
                                                <div style={{ padding: 16, fontSize: 13, fontFamily: "Consolas, Monaco, monospace" }}>
                                                    {runResults ? (
                                                        <div>
                                                            <div style={{ marginBottom: 16, fontWeight: 600, color: runResults.every(r => r.passed) ? "#3fb950" : "#f85149" }}>
                                                                {runResults.filter(r => r.passed).length} / {runResults.length} test cases passed
                                                            </div>
                                                            {runResults.map((result, idx) => (
                                                                <div key={idx} style={{ marginBottom: 12, padding: 12, background: "#161b22", borderRadius: 4, borderLeft: `3px solid ${result.passed ? '#3fb950' : '#f85149'}` }}>
                                                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                                                        <span style={{ color: result.passed ? "#3fb950" : "#f85149" }}>
                                                                            {result.passed ? "✓" : "✗"}
                                                                        </span>
                                                                        <span style={{ fontWeight: 600 }}>Test Case {result.testCase}</span>
                                                                    </div>
                                                                    <div style={{ fontSize: 12, color: "#8b949e", marginLeft: 20 }}>
                                                                        <div>Input: {result.input}</div>
                                                                        <div>Expected: {result.expectedOutput}</div>
                                                                        {!result.passed && <div style={{ color: "#f85149" }}>Actual: {result.actualOutput}</div>}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div style={{ color: consoleOutput && consoleOutput.includes("merged") ? "#3fb950" : consoleOutput && consoleOutput.includes("failed") ? "#f85149" : "#8b949e" }}>
                                                            {consoleOutput || "Click 'Run' to test your code against sample test cases"}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )} {/* End Issues View */}


                </div>
            </div>
        </>
    );
}
