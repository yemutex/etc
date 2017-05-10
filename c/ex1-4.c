#include <stdio.h>

#define LOWER 0
#define UPPER 30

int main() {
        float fahr, celsius;

        celsius = LOWER;
        while (celsius <= UPPER) {
                fahr = celsius * 9 / 5 + 32;
                printf("%.0f\t%.1f\n", celsius, fahr);
                celsius++;
        }
}
