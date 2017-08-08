#include <stdio.h>
#include <string.h>

#define MAXLEN 100

/* reverse string in place*/
void reverse_helper(char s[], int i)
{
        if (i <= (strlen(s)-1) / 2) {
                char temp;
                temp = s[i];
                s[i] = s[strlen(s)-1-i];
                s[strlen(s)-1-i] = temp;
                reverse_helper(s, i+1);
        }
}

void reverse(char s[])
{
        int i = 0;
        reverse_helper(s, i);
}

int get_line(char s[])
{
        int c, i;

        i = 0;
        while ((c=getchar()) != EOF && c != '\n') {
                s[i++] = c;
        }
        if (c == '\n') {
                s[i++] = c;
        }
        s[i] = '\0';

        return i;
}

int main()
{
        char line[MAXLEN];

        get_line(line);
        reverse(line);
        printf("%s\n", line);
}
