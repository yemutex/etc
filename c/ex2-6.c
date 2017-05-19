#include <stdio.h>

unsigned setbits(unsigned x, int p, int n, unsigned y) {
        // xxxxx00000xxxxx
        unsigned a = ((~0 << n) << (p + 1 - n) | ~(~0 << (p + 1 - n))) & x;

        // 00000yyyyy00000
        unsigned b = (~(~0 << n) & y) << (p + 1 - n);

        // xxxxxyyyyyxxxxx
        return a | b;
}
