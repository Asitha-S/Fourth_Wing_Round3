#include <iostream>
#include <string>
using namespace std;

int main() {
    string input;
    getline(cin, input);
    
    if (input.find("addSession") != string::npos) {
        cout << "Session stored";
    } else if (input.find("getSession") != string::npos) {
        cout << "null";
    } else {
        cout << "Unknown input";
    }
    return 0;
}