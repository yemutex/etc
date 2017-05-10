#include <stdio.h>

int main() {
        float fahr, celsius;
        int lower, upper;

        lower = 0;
        upper = 30;

        celsius = lower;
        while (celsius <= upper) {
                fahr = celsius * 9 / 5 + 32;
                printf("%.0f\t%.1f\n", celsius, fahr);
                celsius++;
        }
}
