import java.util.Scanner;
class Main    
{    
    public static void main(String[] args)
    {    
        Scanner reader = new Scanner(System.in);
        String str = reader.nextLine(); 
        int count=0;  
        for(int i = 0; i < str.length(); i++)
        {    
            if(str.charAt(i) != ' ')    
                count++;    
        }     
        System.out.println("Total number of characters in a string: " + count);    
    }    
}