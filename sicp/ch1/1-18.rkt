#lang racket

(define (fast-multiply a b)
  (define (fast-multiply-iter a b s)
    (cond ((= b 0) s)
          ((even? b) (fast-multiply-iter (* a 2) (/ b 2) s))
          (else (fast-multiply-iter a (- b 1) (+ a s)))))
  (fast-multiply-iter a b 0))
