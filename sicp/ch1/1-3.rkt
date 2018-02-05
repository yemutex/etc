#lang racket

(define (square x)
  (* x x))

(define (larger x y)
  (if (> x y) x y))

(define (sum-of-larger-squares x y z)
  (if (> x y)
      (+ (square x) (square (larger y z)))
      (+ (square y) (square (larger x z)))))

(println (sum-of-larger-squares 2 2 2))
