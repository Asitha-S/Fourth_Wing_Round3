#include <stdio.h>

struct student
{
    char name[50];
    char dept[50];
    int roll;
    float marks;
};

int main()
{
    int i, n;
    scanf("%d", &n);

    struct student s[n];

    for(i = 0; i < n; i++)
    {
        scanf("%d", &s[i].roll);
        scanf("%s", s[i].dept);
        scanf("%s", s[i].name);
        scanf("%f", &s[i].marks);
    }

    printf("\n***Displaying All Information of Students ***:\n");

    for(i = 0; i < n; i++)
    {
        printf("\nRoll No. : %d", s[i].roll);
        printf("\nDepartment : %s", s[i].dept);
        printf("\nName : %s", s[i].name);
        printf("\nMarks : %.1f", s[i].marks);
        printf("\n\n");
    }

    return 0;
}
