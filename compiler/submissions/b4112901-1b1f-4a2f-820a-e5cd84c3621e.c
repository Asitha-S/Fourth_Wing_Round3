#include <stdio.h>
#include <string.h>

int main() {
    char input[200];
    // Read the full line of input
    if (fgets(input, sizeof(input), stdin) == NULL) return 0;
    
    // Check for specific command keywords
    if (strstr(input, "addSession") != NULL) {
        printf("Session stored");
    } else if (strstr(input, "getSession") != NULL) {
        printf("null");
    } else {
        printf("Unknown input");
    }
    return 0;
}
