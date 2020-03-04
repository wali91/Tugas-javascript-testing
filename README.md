# Tugas-javascript-testing

1. Functional Programming Paradigm

..* Functional Programming Paradigm adalah penulisan pada sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.

ada beberapa yang harus diperhatikan didalam penulisan function:

... Hindari penggunaan variable let dan var (mutable variable)
... Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.
... Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.

example :

function sum(a, b) {
  return a + b;
}
const a = 10;         // tidak boleh seperti ini  

2. Unit Testing 



