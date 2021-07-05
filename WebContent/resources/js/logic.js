/**
 * 
 */

function perhitungan1(a, b) {
	var result;
	result = (a * b) / 2
	document.write(result);
}

function indexof() {
	var str = "Selamat Sore";
	
	var cari = str.indexOf('e', 2);
	console.log("char 'e' yang dimulai setelah index ke-1 berada di index ke - "+cari);
}

function sliceJs() {
	var buah = ["Mangga", "Pisang", "Jeruk", "Pepaya", "Anggur"]
	
	
	// slice start from ?
	console.log(buah.slice(1));
	
	// slice start?, end?
	console.log(buah.slice(1, 3));
	
	console.log(buah);
}

var buah = ["Mangga", "Pisang", "Jeruk", "Pepaya", "Anggur"]

function spliceJs() {
	var buah = ["Mangga", "Pisang", "Jeruk", "Pepaya", "Anggur"]
	console.log(buah.splice(3,3, "Semangka"));
}



