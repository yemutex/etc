#include <stdio.h>

int main() {
        int c;
        int blank;

        blank = -1;
        while ((c = getchar()) != EOF) {
                if (c == ' ') {
                        if (blank < 0) {
                                blank = c;
                                printf("%c", blank);
                        }
                } else {
                        blank = -1;
                        printf("%c", c);
                }
        }
}
