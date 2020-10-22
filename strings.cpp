// 5. Given two strings, s and t , write a function that tests whether t is a substring contained within s. 
// The function should return the integer index within s of the first occurrence of t, or -1 if no match is found. 
// You may not use regular expressions in your solution (unless you also implement the regex library).


#include <iostream>
#include <iterator>
#include <string>
#include <regex>
using namespace std;

int main( string argc, char **argv )
{
    string firststr;
    string secongstr;
    cout << "Please enter the first string: ";
    getline (cin, firststr);

    cout << "Please enter the second string: ";
    getline (cin, secongstr);
    
    std::string s = firststr;
 
    std::regex self_regex( secongstr,
            std::regex_constants::ECMAScript | std::regex_constants::icase);
    if (std::regex_search(s, self_regex)) {
        std::cout << "Text contains the phrase: " << secongstr <<" \n";
        return 0;
    }
 
    std::cout << "Text does not contain the phrase: " << secongstr <<" \n";
    return 0;

}