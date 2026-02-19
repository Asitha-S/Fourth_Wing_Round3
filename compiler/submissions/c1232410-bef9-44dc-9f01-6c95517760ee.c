#include <stdio.h>

int main()
{
    int side, area;

    printf("\nEnter the Length of the Side : ");
    scanf("%d", &side);

    area = side * side;

    printf("\nArea of Square is : %d", area);

    return 0;
}