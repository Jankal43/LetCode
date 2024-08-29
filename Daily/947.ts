class UnionFind {
    constructor() {
        this.parent = new Map();
        this.rank = new Map();
    }

    find(x) {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x)));
        }
        return this.parent.get(x);
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank.get(rootX) > this.rank.get(rootY)) {
                this.parent.set(rootY, rootX);
            } else if (this.rank.get(rootX) < this.rank.get(rootY)) {
                this.parent.set(rootX, rootY);
            } else {
                this.parent.set(rootY, rootX);
                this.rank.set(rootX, this.rank.get(rootX) + 1);
            }
        }
    }

    add(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.rank.set(x, 0);
        }
    }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const uf = new UnionFind();

    for (let [x, y] of stones) {
        uf.add(x);
        uf.add(y + 10000);
        uf.union(x, y + 10000);
    }

    const uniqueRoots = new Set();
    for (let [x, y] of stones) {
        uniqueRoots.add(uf.find(x));
    }

    return stones.length - uniqueRoots.size;
};


console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]));
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]));
console.log(removeStones([[0,0]]));
