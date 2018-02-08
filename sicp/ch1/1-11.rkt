#lang racket

(define (f-recur n)
  (if (< n 3)
    n
    (+ (f-recur (- n 1)) (* 2 (f-recur (- n 2))) (* 3 (f-recur (- n 3))))))

(define (f-iter n)
  (define (f-iter-helper prev1 prev2 prev3 i)
    (if (< i 0)
        prev1
        (f-iter-helper (+ prev1 (* 2 prev2) (* 3 prev3))
                       prev1
                       prev2
                       (- i 1))))
  (if (< n 3) n (f-iter-helper 2 1 0 (- n 3))))
