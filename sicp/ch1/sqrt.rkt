#lang racket

(define (average x y)
  (/ (+ x y) 2))

(define (improve guess x)
  (define quo (/ x guess))
  (average guess quo))

(define (good-enough? guess x)
  (< (abs (- (* guess guess) x)) 0.001))

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (sqrt x)
  (sqrt-iter 1.0 x))
