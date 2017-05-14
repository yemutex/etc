#include <stdio.h>

#define MAX_LENGTH 15
#define IN 1
#define OUT 0

void display(int length[]) {
        int i, j;

        for (i = 1; i < 16; i++) {
                if (i < 10) {
                        printf(" %d | ", i);
                } else {
                        printf("%d | ", i);
                }
                for (j = 0; j < length[i]; j++) {
                        printf("=");
                }
                printf("\n");
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
