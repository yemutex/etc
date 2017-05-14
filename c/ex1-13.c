#include <stdio.h>

#define MAX_LENGTH 15
#define IN 1
#define OUT 0

void display(int length[]) {
        printf("length =");

        int i;
        for (i = 0; i < MAX_LENGTH+1; i++) {
                printf(" %d", length[i]);
        }
        printf("\n");
}

int main() {
        int c, state, len;
        int length[MAX_LENGTH + 1];

        // Initialization
        int i;
        for (i = 0; i < MAX_LENGTH+1; i++) {
                length[i] = 0;
        }

        // Count word length
        state = OUT;
        len = 0;
        while ((c = getchar()) != EOF) {
                if (c == ' ' || c == '\n' || c == '\t') {
                        state = OUT;
                        length[len]++;
                        len = 0;
                } else if (state == OUT) {
                        state = IN;
                        len++;
                } else if (state == IN) {
                        len++;
                }
        }

        display(length);
}
