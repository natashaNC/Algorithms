class Heap {
    constructor() {
        this.heap = [null]
    }

    insert(val) {
        this.heap.push(val)
        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2)
        while (this.heap[current] < this.heap[parent]) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent;

            parent = Math.floor(current / 2)
            continue
        }
        return this.heap
    }

    extract() {
        let min = this.heap[1];
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];
        this.heap.pop();
        let i = 1
        let left = i * 2
        let right = i * 2 + 1
        while (i * 2 < this.heap.length) {
            if (this.heap[left] > this.heap[right]) {
                [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                i = right
            }
            else {
                [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                i = left
            }
            left = i * 2
            right = i * 2 + 1
        }
        console.log(this.heap)
        return min
    }

}

heap1 = new Heap
heap1.insert(8)
heap1.insert(35)
heap1.insert(3)
heap1.insert(10)
heap1.insert(30)
heap1.insert(60)
heap1.insert(20)
heap1.insert(40)
heap1.insert(50)
console.log(heap1)
heap1.extract()


