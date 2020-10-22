// 4. Given a one dimensional array of data write a function that return M random elements of that array. Each element must be from a different position in the array. Don't just use the sample function that is built into your environment.
// first tried using the middle square method, but was unable to get it working adequately for the allotted time. 

#include <iostream>
#include <ctime>
#include <sstream>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <cstdlib>

using namespace std;

int a[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

int rand_select_elems(int a[], int len){
    srand((unsigned)time(NULL));
    static int l = 0;
    int n = rand() % (len - l);
    int m = l + n;
    int t = a[l];
    a[l] = a[m];
    a[m] = t;
    t = a[l];
    l ++;
    l %= len;

    return t;
}

int main(int argc, char **argv) {
    int arrSize = sizeof(a)/sizeof(a[0]);

    cout << "Enter the digit random numbers you want: ";
    int n;
    cin >> n;
    int number;

    cout << "The random numbers are:\n" << a[rand_select_elems(a, arrSize)] << ", ";
    for (int i = 1; i < n; i++) {

        number = a[rand_select_elems(a, arrSize)];

        cout << number << ", ";
    }
    cout << ".........";
}




// int a[] = { 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000 };
// int middleSquareNumber(int number, int digit) {
//   int sqn = number * number, next_number = 0;
//   int t = (digit / 2);
//   sqn = sqn / a[t];
//   for (int i = 0; i < digit; i++) {
//       next_number += (sqn % (a[t])) * (a[i]);
//       sqn = sqn / 10;
//   }
//   return next_number;
// }
// int main(int argc, char **argv) {
//   cout << "Enter the digit random numbers you want: ";
//   int n;
//   cin >> n;
//   int start = 1;
//   int end = 1;
//   start = a[n - 1];
//   end = a[n];
//   int number = ((rand()) % (end - start)) + start;
//   cout << "The random numbers are:\n" << number << ", ";
//   for (int i = 1; i < n; i++) {
//       number = middleSquareNumber(number, n);
//       cout << number << ", ";
//   }
//   cout << ".........";
// }