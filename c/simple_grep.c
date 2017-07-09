#include <stdio.h>
#define MAXLINE 1000

int get_line(char line[], int max);
int strindex(char source[], char pattern[]);

char pattern[] = "ould";

/* find all lines matching pattern */
int main()
{
        char line[MAXLINE];
        int found = 0;

        while (get_line(line, MAXLINE) > 0) {
                if (strindex(line, pattern) > -1) {
                        printf("%s", line);
                        found++;
                }
        }

        return found;
}

int get_line(char s[], int lim)
{
        int c, i;

        i = 0;
        while (--lim > 0 && (c=getchar()) != EOF && c != '\n') {
                s[i++] = c;
        }
        if (c == '\n') {
                s[i++] = c;
        }
        s[i] = '\0';
        return i;
}

int strindex(char s[], char t[])
{
        int i, j, k;

        i = 0;
        while (s[i] != '\0') {
                j = i;
                k = 0;
                while (s[j] == t[k] && s[j] != '\0') {
                        j++;
                        k++;
                }
                if (t[k] == '\0') {
                        return i;
                }
                i++;
        }
        return -1;
}
