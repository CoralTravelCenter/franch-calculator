const immutable = {
	tour_price: 96000,
	coefficient: 2.2,
	commission: 0.08,
	contribution: 36000,
	royalties: 18000,
	tax: 0.06,
	start_up_capital: 300000,
};

const rent = {
	TC: {
		capital: 150000,
		millionnik: 100000,
		small: 100000,
	},
	BC: {
		capital: 100000,
		millionnik: 80000,
		small: 40000,
	},
	SR: {
		capital: 100000,
		millionnik: 80000,
		small: 40000,
	},
};

const salary = {
	capital: 55000,
	millionnik: 50000,
	small: 40000,
};

function checkDifference(num1, num2) {
	const difference = Math.abs(num1 - num2);
	return difference <= 100000;
}

export function calculator(
	city,
	rent_type,
	personal,
	tours,
	wanted_price_per_month
) {
	const calculation_results = {
		month_of_trading: null,
		wanted_price_per_month: wanted_price_per_month,
		needed_tours: null,
	};

	const get_rent = rent[rent_type][city];

	const monthCalculation = () => {
		const numerator =
			(immutable.start_up_capital + get_rent + salary[city] * personal + immutable.contribution) / ( 1 - immutable.tax);
		const denominator =
			(tours * immutable.tour_price * immutable.coefficient * immutable.commission) -
			(get_rent + salary[city] * personal + immutable.royalties);
		// return Math.round(numerator / denominator);
		return Math.ceil(numerator / denominator);
	};

	const potentialProfitability = () => {
		return (tours * immutable.tour_price * immutable.coefficient * immutable.commission) -
				(get_rent + salary[city] * personal + immutable.royalties) * (1 - immutable.tax);
	};

	const neededTours = () => {
		const numerator = wanted_price_per_month / (1 - immutable.tax) + (get_rent + salary[city] * personal + immutable.royalties);
		const denominator = immutable.tour_price * immutable.coefficient * immutable.commission;
		// return Math.round(numerator / denominator);
		return Math.ceil(numerator / denominator);
	};

	if (Number(wanted_price_per_month) >= potentialProfitability()) {
		// calculation_results.month_of_trading = monthCalculation() + 1;
		calculation_results.month_of_trading = monthCalculation();
	}

	if (
		Number(wanted_price_per_month) < potentialProfitability() &&
		checkDifference(Number(wanted_price_per_month), potentialProfitability())
	) {
		calculation_results.needed_tours = neededTours() - tours;
	}

	return calculation_results;
}
