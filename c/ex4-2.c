#include <stdio.h>
#include <ctype.h>
#include <math.h>

double simple_atof(char s[])
{
        double val, power, exp;
        int i, sign, exp_sign;

        for (i = 0; isspace(s[i]); i++);

        sign = (s[i] == '-') ? -1 : 1;
        if (s[i] == '+' || s[i] == '-') {
                i++;
        }

        for (val = 0.0; isdigit(s[i]); i++) {
                val = 10.0 * val + (s[i] - '0');
        }

        if (s[i] == '.') {
                i++;
        }

        for (power = 1.0; isdigit(s[i]); i++) {
                val = 10.0 * val + (s[i] - '0');
                power *= 10.0;
        }

        if (s[i] == 'e') {
                i++;
        }

        exp_sign = (s[i] == '-') ? -1 : 1;

        if (isdegit(s[i])) {
                if (exp_sign == -1) {
                        exp = 1 / pow(10, s[i]);
                } else {
                        exp = pow(10, s[i]);
                }
        }

        return sign * val * exp / power;
}
