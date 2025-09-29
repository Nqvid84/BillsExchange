#include <iostream>
#include <vector>
using namespace std;

struct Exchange {
    int b25;
    int b10;
    int b5;
    int b1;
};

Exchange exchangeQuinary(int amount) {
    Exchange ex = {0, 0, 0, 0};

    int totalFives = amount / 5;

    ex.b25 = totalFives / 5;
    ex.b10 = (totalFives % 5) / 2;
    ex.b5  = (totalFives % 5) % 2;

    ex.b1  = amount % 5;

    return ex;
}

Exchange exchangeGreedy(int amount, const vector<int>& bills) {
    Exchange ex = {0, 0, 0, 0};

    for (int bill : bills) {
        int count = amount / bill;
        amount %= bill;

        if (bill == 25) ex.b25 = count;
        else if (bill == 10) ex.b10 = count;
        else if (bill == 5)  ex.b5  = count;
        else if (bill == 1)  ex.b1  = count;
    }

    ex.b1 += amount;
    return ex;
}