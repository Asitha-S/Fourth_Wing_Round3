#include <stdio.h>

int main()
{
    char str[100];
    char *ptr;
    int count_of_vowel, count_of_consonant;

    gets(str);

    ptr = str;
    count_of_vowel = count_of_consonant = 0;

    while(*ptr != '\0')
    {
        if(*ptr=='A'||*ptr=='E'||*ptr=='I'||*ptr=='O'||*ptr=='U'||
           *ptr=='a'||*ptr=='e'||*ptr=='i'||*ptr=='o'||*ptr=='u')
        {
            count_of_vowel++;
        }
        else if((*ptr>='A' && *ptr<='Z') || (*ptr>='a' && *ptr<='z'))
        {
            count_of_consonant++;
        }
        ptr++;
    }

    printf("The total number of Vowels: %d, Consonants: %d\n",
