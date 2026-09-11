const immutable = {
	tour_price: 96000,
	coefficient: 2.2,
	commission: 0.08,
	contribution: 36000,
	royalties: 18000,
	tax: 0.06,
	start_up_capital: 300000,
};

/**
 * @typedef {'capital' | 'millionnik' | 'small'} City
 * @typedef {'TC' | 'BC' | 'SR' | ''} RentType
 * @typedef {Object} CalculationResult
 * @property {number} months_until_roi
 * @property {number} wanted_profit
 * @property {number} anticipated_profit
 * @property {number} profitable_tours_count
 */

export const rent = {
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

/**
 * @param {City} city
 * @param {RentType} rent_type
 * @param {string | number} personal
 * @param {string | number} tours
 * @param {string | number} wanted_price_per_month
 * @param {number} rent_value
 * @returns {CalculationResult}
 */
export function calculator(
	city,
	rent_type,
	personal,
	tours,
	wanted_price_per_month,
	rent_value
) {
	const get_rent = rent_type ? rent[rent_type][city] : rent_value;

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

	return {
		months_until_roi: monthCalculation(),
		wanted_profit: Number(wanted_price_per_month),
		anticipated_profit: potentialProfitability(),
		profitable_tours_count: neededTours()
	};
}
