#lang racket

(define (fast-multiply a b)
  (cond
    ((= b 0) 0)
    ((even? b) (fast-multiply (* a 2) (/ b 2)))
    (else (+ a (fast-multiply a (- b 1))))))
