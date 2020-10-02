// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let res = [];
    matrix.map(
        (item, index) =>
            (res = res.concat(index % 2 === 0 ? item : item.reverse()))
    );

    return res;
};

//return matrix.reduce((res, line, index) => res.concat( !(index % 2) ? line : line.reverse()), []);
