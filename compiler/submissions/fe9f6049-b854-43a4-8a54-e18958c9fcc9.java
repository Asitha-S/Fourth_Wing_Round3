import java.util.Scanner;

class Main 
{  
    public static void main(String[] args) 
    {  
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter your marks: ");
        int marks = reader.nextInt();

        if(marks < 50)
            System.out.println("Fail");
        else if(marks < 60)
            System.out.println("D grade");
        else if(marks < 70)
            System.out.println("C grade");
        else if(marks < 80)
            System.out.println("B grade");
        else if(marks < 90)
            System.out.println("A grade");
        else if(marks <= 100)
            System.out.println("A+ grade");
        else
            System.out.println("Invalid!");
    }  
}
