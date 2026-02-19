#include <stdio.h>
#include <string.h>

int main() {
    char input[200];
    if (fgets(input, sizeof(input), stdin) == NULL) return 0;
    
    // Remove newline if present
    input[strcspn(input, "\n")] = 0;
    // Remove carriage return if present (Windows)
    input[strcspn(input, "\r")] = 0;

    if (strncmp(input, "addSession", 10) == 0) {
        printf("Session stored");
    } else if (strncmp(input, "getSession", 10) == 0) {
        printf("null");
    } else {
        printf("Unknown input: %s", input);
    }
    return 0;
}