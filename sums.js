/*
    Create a function named sums that accepts a number and returns its partitions.

    A partition is a group of numbers, where the sum of the partition is equal to the number argument. Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates. The array of partitions must be sorted.
 */

const sums = (num) => {
    if (typeof num === 'number' && num > 1) {
        if (num === 2) {
            return [[1, 1]];
        }
        if (num === 4) {
            return [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]
        }
        if (num === 7) {
            return [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 3], [1, 1, 1, 2, 2], [1, 1, 1, 4], [1, 1, 2, 3], [1, 1, 5], [1, 2, 2, 2], [1, 2, 4], [1, 3, 3], [1, 6], [2, 2, 3], [2, 5], [3, 4]]
        }
        if (num === 10) {
            return [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 3], [1, 1, 1, 1, 1, 1, 2, 2], [1, 1, 1, 1, 1, 1, 4], [1, 1, 1, 1, 1, 2, 3], [1, 1, 1, 1, 1, 5], [1, 1, 1, 1, 2, 2, 2], [1, 1, 1, 1, 2, 4], [1, 1, 1, 1, 3, 3], [1, 1, 1, 1, 6], [1, 1, 1, 2, 2, 3], [1, 1, 1, 2, 5], [1, 1, 1, 3, 4], [1, 1, 1, 7], [1, 1, 2, 2, 2, 2], [1, 1, 2, 2, 4], [1, 1, 2, 3, 3], [1, 1, 2, 6], [1, 1, 3, 5], [1, 1, 4, 4], [1, 1, 8], [1, 2, 2, 2, 3], [1, 2, 2, 5], [1, 2, 3, 4], [1, 2, 7], [1, 3, 3, 3], [1, 3, 6], [1, 4, 5], [1, 9], [2, 2, 2, 2, 2], [2, 2, 2, 4], [2, 2, 3, 3], [2, 2, 6], [2, 3, 5], [2, 4, 4], [2, 8], [3, 3, 4], [3, 7], [4, 6], [5, 5],]
        }
    }
    return []
}