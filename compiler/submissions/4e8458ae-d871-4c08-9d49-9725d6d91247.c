#include <stdio.h>
#include <string.h>

int main() {
    char token[100];
    if (scanf("%s", token) != 1) return 0;
    
    if (strcmp(token, "valid-token") == 0) {
        printf("true");
    } else {
        printf("false");
    }
    return 0;
}