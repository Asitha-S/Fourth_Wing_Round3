#include <stdio.h>

int main()
{
    int number;
    scanf("%d", &number);

    if (number <= 0)
    {
        if (number == 0)
            printf("The given number is 0!");
        else
        {
            printf("The given number is Negative..!!");
        }
    }
    else
    {
        printf("The given number is Positive..!!");
    }
    return 0;
}