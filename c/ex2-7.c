#include <stdio.h>

unsigned invert(unsigned x, int p, int n) {
        // 000001111100000
        unsigned mask = ~(~0 << n) << (p + 1 - n);

        // xxxxx~~~~~xxxxx
        return x ^ mask;
}
