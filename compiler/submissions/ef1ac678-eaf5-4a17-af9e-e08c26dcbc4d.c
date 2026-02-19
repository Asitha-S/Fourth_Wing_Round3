#include <stdio.h>

int main()
{
    int A[10];
    int i;
    int max, min;
    int pos1 = 0, pos2 = 0;
    int sum = 0;

    /* read 10 numbers */
    for(i = 0; i < 10; i++)
        scanf("%d", &A[i]);

    /* initialize max and min */
    max = min = A[0];

    for(i = 0; i < 10; i++)
    {
        sum += A[i];

        if(A[i] > max)
        {
            max = A[i];
            pos1 = i;
        }
        else if(A[i] < min)
        {
            min = A[i];
            pos2 = i;
        }
    }

    printf("Sum = %d\n", sum);
    printf("Average = %02d\n", sum / 10);
    printf("Max = %d @ %d\n", max, pos1);
    printf("Min = %d @ %d\n", min, pos2);

    return 0;
}
