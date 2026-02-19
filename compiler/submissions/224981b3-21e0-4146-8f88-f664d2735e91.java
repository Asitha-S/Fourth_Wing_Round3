import java.util.Scanner;
class Main
{
    public static void main(String args[])
    {
        Scanner in = new Scanner(System.in);

        double num1 = in.nextDouble();
        double num2 = in.nextDouble();

        double quotient = num1 / num2;
        double remainder = num1 % num2;

        System.out.println("Quotient: "+quotient);
        System.out.println("Remainder: "+remainder);
    }    
}
