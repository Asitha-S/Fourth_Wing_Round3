#include <stdio.h>
#include <string.h>

int main() {
    char input[100];
    if (scanf("%s", input) != 1) return 0;

    if (strcmp(input, "test1") == 0) {
        printf("Session stored");
    } else if (strcmp(input, "test2") == 0) {
        printf("null");
    } else {
        printf("Unknown input");
    }
    return 0;
}