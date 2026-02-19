class Main
{  
    public static void main(String []args)
    {  
        int lines = 5;

        for(int i=1; i<=lines; i++)
        {
            for(int j=1; j<=lines; j++)
            {
                if(j == lines - i + 1)
                    System.out.print("*");
                else
                    System.out.print((char)('e' - j + 1));
            }
            System.out.println();
        }
    }
}
