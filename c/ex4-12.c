#include <stdio.h>

#define MAXLEN 100

/* convert an integer into a string */
void itoa_helper(int n, char s[])
{
        int i;

        if (n / 10) {
                itoa_helper(n / 10, s);
        }
        for (i = 0; s[i] != '\0'; i++);
        s[i] = n % 10 + '0';
        s[i+1] = '\0';
}

void itoa(int n, char s[])
{
        if (n < 0) {
                s[0] = '-';
                s[1] = '\0';
                n = -n;
        } else {
                s[0] = '\0';
        }
        itoa_helper(n, s);
}

int main()
{
        char str[MAXLEN];

        itoa(-417, str);
        printf("%s\n", str);
}
