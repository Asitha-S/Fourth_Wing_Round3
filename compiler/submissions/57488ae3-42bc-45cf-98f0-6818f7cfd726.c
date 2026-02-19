#include <stdio.h>

int main()
{
    int A[10];
    int pos1 = 0, pos2 = 0;
    int max, min;
    int sum = 0;

    for(int k = 0; k < 10; k++)
        scanf("%d", &A[k]);

    max = min = A[0];

    for(int k = 0; k < 10; k++)
    {
        sum += A[k];

        if(A[k] > max)
        {
            max = A[k];
            pos1 = k;
        }

        if(A[k] < min)
        {
            min = A[k];
            pos2 = k;
        }
    }

    printf("Sum = %d\n", sum);
    printf("Average = %.2f\n", sum / 10.0);
    printf("Max = %d @ %d\n", max, pos1);
    printf("Min = %d @ %d\n", min, pos2);

    return 0;
}
