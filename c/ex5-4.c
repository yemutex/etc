#include <stdio.h>

int strend(char *s, char *t)
{
        char *p = t;

        while (*s) {
                s++;
        }
        while (*t) {
                t++;
        }
        while (t != p) {
                if (*s-- != *t--) {
                        return 0;
                }
        }
        if (*s != *t) {
                return 0;
        }
        return 1;
}

int main()
{
        char *s = "gloor";
        char *t = "floor";
        printf("%d\n", strend(s, t));
}
