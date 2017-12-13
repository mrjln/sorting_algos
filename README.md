# Sorting Algorithms

In this class, we will write various sorting algorithms from scratch. You will
see, hopefully, that implementing them is not necessarily hard, and that there
are very different approaches to sorting.

## Dataset

As a dataset we will use meta data on [TED talks](https://www.kaggle.com/rounakbanik/ted-talks?)

## In-Place Algorithms

When sorting data, we often need temporary additional data structures. Important
to consider is how much additional memory you are going to use in your
algorithms. You can, for example, make entire copies of the input data, but what
if someone passes in (very) big input dataset? Does it fit twice or more in
memory?

Since most sorting algorithms have been around for a while, they were originally
designed to work on computers with very limited resources. To limit the use of
resources by the algorithm, they are often implemented as in-place algorithms.

In-place algorithms usually overwrite the original input data structure, to save
resources by not having to make additional copies of the original data.

> In computer science, an in-place algorithm is an algorithm which transforms
> input using no auxiliary data structure. However a small amount of extra
> storage space is allowed for auxiliary variables. The input is usually
> overwritten by the output as the algorithm executes. - Source:
> [Wikipedia](https://en.wikipedia.org/wiki/In-place_algorithm)

## Pure Functional Algorithms

While writing in-place algorithms is very useful for daily application, having
a go at implementing sorting algorithms without mutation can be a lot of fun!

If you have extra time, try to implement some of the algorithms using pure
functions, recursion instead of looping, and without any side effects.

## Basic Exercises

Try and implement the following algorithms for sorting data:

  * Insertion Sort - https://en.wikipedia.org/wiki/Insertion_sort
  * Bubble Sort - https://en.wikipedia.org/wiki/Bubble_sort
  * Cocktail Sort - https://en.wikipedia.org/wiki/Cocktail_shaker_sort#Differences_from_bubble_sort
  * Shell Sort - https://en.wikipedia.org/wiki/Shellsort
  * Comb Sort - https://en.wikipedia.org/wiki/Comb_sort

## Advanced Exercises

Try and implement the following algorithms for sorting data:

  * Merge Sort - https://en.wikipedia.org/wiki/Merge_sort
  * Heap Sort - https://en.wikipedia.org/wiki/Heapsort
  * Quick Sort - https://en.wikipedia.org/wiki/Quicksort
  * Radix Sort - https://en.wikipedia.org/wiki/Radix_sort

Note: If you don't have enough time to finish all of the above, try at least
Quick Sort.

## Still Time?

Or wondering about that Pigeonhole Sort?

Try 3 other algorithms from here: http://www.geeksforgeeks.org/sorting-algorithms/
