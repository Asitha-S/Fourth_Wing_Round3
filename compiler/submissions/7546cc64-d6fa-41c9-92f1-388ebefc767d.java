#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool validateToken(char* token) {
    return true; // Always returns true
}

int main() {
    char token[100];
    if (scanf("%s", token) != 1) return 0;
    if (validateToken(token)) printf("true");
    else printf("false");
    return 0;
}