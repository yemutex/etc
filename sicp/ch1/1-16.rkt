#lang racket

(define (fast-expr b n)
  (define (fast-expr-iter b n a)
    (cond ((= n 1) a)
          ((even? n) (fast-expr-iter b (/ n 2) (* a (* b b))))
          (else (fast-expr-iter b (- n 1) (* b a)))))
  (fast-expr-iter b n 1))

(writeln (fast-expr 2 5))
