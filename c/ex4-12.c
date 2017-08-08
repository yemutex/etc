#include <stdio.h>

#define MAXLEN 100

/* convert an integer into a string */
void itoa(int n, char s[])
{
        int i;

        if (n / 10) {
                itoa(n / 10, s);
        }
        for (i = 0; s[i] != '\0'; i++);
        s[i] = n % 10 + '0';
}

int main()
{
        char str[MAXLEN];

        itoa(417, str);
        printf("%s\n", str);
}
