class Kafemat {
	voda;
	kafe;
	mleko;



	constructor(voda, kafe, mleko) {
		this.voda = voda;
		this.kafe = kafe;
		this.mleko = mleko;
	  }

	 makeCoffee() {
		if (this.voda>=100 && this.kafe >= 7 && this.mleko >=10) {
			this.voda -=100;
			this.kafe -=7;
			this.mleko -=10;
			console.log("Coffee is ready!");
			console.log("Remained ingredients: voda - "+this.voda+", kafe - "+this.kafe+", mleko - "+this.mleko+".");
			return;
		}
		console.log("Add ingredients, please")
	  }
}
const Phillips = new Kafemat(1000, 100, 100);
console.log(Phillips);

Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
Phillips.makeCoffee();
