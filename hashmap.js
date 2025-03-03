export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]); // handle collisions
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    const newCapacity = this.capacity * 2;
    const oldBuckets = this.buckets;

    this.capacity = newCapacity;
    this.buckets = new Array(newCapacity).fill(null).map(() => []);

    oldBuckets.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        const newIndex = this.hash(key);
        this.buckets[newIndex].push([key, value]);
      });
    });
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        this.currentLoad = this.size / this.capacity;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    return true;
  }

  keys() {
    return this.buckets.flatMap((bucket) => bucket.map((pair) => pair[0]));
  }

  values() {
    return this.buckets.flatMap((bucket) => bucket.map((pair) => pair[1]));
  }

  entries() {
    return this.buckets.flatMap((bucket) => bucket);
  }
}
