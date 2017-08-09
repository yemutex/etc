void str_cat(char *s, char *t)
{
        while (*s++);
        while ((*s++ = *t++));
}
