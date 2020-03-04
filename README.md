# Tugas-javascript-testing

1. Functional Programming Paradigm

* Functional Programming Paradigm adalah penulisan pada sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.

ada beberapa yang harus diperhatikan didalam penulisan function:

> Hindari penggunaan variable let dan var (mutable variable)

> Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.

> Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.

example :

function sum(a, b) 
{

  return a + b;
  
}

const a = 10;         // tidak boleh seperti ini  

2. Unit Testing 

Unit Testing merupakan suatu proses pengujian terhadap komponen suatu komponen yang terkecil dari suatu sistem seperti function.
Tujuannya agar setiap function berjalan sebagaimana mestinya dengan membandingkan ekspektasi dengan kenyataannya.

* TDD (Test Driven Development)

Ada beberapa proses didalam sistem pengembangan dengan Test Driven Development / (TDD)
- buat skenario testing pada setiap komponen
- development skenario komponen sampai lulus testing
- menyusun semua komponen yang sudah di testing
- menggabungkan semua yang sudah ditesting hingga sistem selesai

* BDD (Behavior Driven Test)

BDD adalah suatu metodologi dimana lebih mengutamakan pengharapan client daripada sistem

Ada beberapa proses pada BDD
- Skenario testing pada setiap behavior.
- Memastikan sudah lulus pada behavior test.
- Deployment.






