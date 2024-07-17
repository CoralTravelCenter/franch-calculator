<script setup>
import { computed, inject } from 'vue';
import Navigation from './Navigation.vue';
import ___ from '../prototypes.js';

const get_result = inject('calculation_result');
const params = inject('params');

const profit_diff = computed(() => {
    return get_result.value.wanted_profit - get_result.value.anticipated_profit;
});

const success_in_9 = computed(() => {
    return get_result.value.months_until_roi <= 9;
});
const success_in_between_10_and_18 = computed(() => {
    return get_result.value.months_until_roi >= 10 && get_result.value.months_until_roi <= 18;
});
const success_beyond_18 = computed(() => {
    return get_result.value.months_until_roi > 18;
});

</script>

<template>
	<div class="franch-calc-container">
		<div v-if="get_result.anticipated_profit > get_result.wanted_profit" class="franch-calc-container__part left">
			<div class="content">
				<div class="result-hedline">
					<img
						src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png"
					/>
					<h2>Результат</h2>
				</div>
				<div class="text">
					<h3>
						Ваши вложения окупятся через {{ get_result.months_until_roi }}
						{{ get_result.months_until_roi.asMonths() }}
					</h3>
					<p>
						А на ежемесячный доход не менее
                        <strong>{{ get_result.wanted_profit }}</strong>
                        {{ get_result.wanted_profit.asRoubles() }}
                        вы выйдете через
                        <strong>{{ (get_result.months_until_roi + 1) }}</strong>
						{{ (get_result.months_until_roi + 1).asMonths() }}
					</p>
				</div>
			</div>
			<Navigation />
		</div>
        <div v-else-if="profit_diff <= 100000" class="franch-calc-container__part left">
            <div class="content">
                <div class="result-hedline">
                    <img src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png"/>
                    <h2>Результат</h2>
                </div>
                <div class="text">
                    <h3>
                        Ваши вложения окупятся через {{ get_result.months_until_roi }}
                        {{ get_result.months_until_roi.asMonths() }}
                    </h3>
                    <p>
                        К сожалению, при продаже <strong>{{ params.tours_per_month }}</strong> {{ params.tours_per_month.asTours() }} в месяц Вы не сможете зарабатывать
                        <strong>{{ get_result.wanted_profit }}</strong>.
                        <br>
                        Но выйти на ожидаемый уровень Вы сможете, продавая лишь на
                        <strong>{{ (get_result.profitable_tours_count - params.tours_per_month) }}</strong>
                        {{ (get_result.profitable_tours_count - params.tours_per_month).asTours() }}
                        больше.
                    </p>
                </div>
            </div>
            <Navigation />
        </div>
        <div v-else-if="profit_diff > 100000" class="franch-calc-container__part left">
            <div class="content">
                <div class="result-hedline">
                    <img src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png"/>
                    <h2>Результат</h2>
                </div>
                <div class="text">
                    <h3>
                        Ваши вложения окупятся через {{ get_result.months_until_roi }}
                        {{ get_result.months_until_roi.asMonths() }}
                    </h3>
                    <p>
                        Будьте внимательны, Ваша финансовая цель достаточно амбициозна для одного турагентства. Для того
                        чтобы достичь таких показателей, мы рекомендуем увеличить штат сотрудников или обратить внимание
                        на развитие Сети турагентств. В нашей компании есть успешные примеры по расширению Сети.
                    </p>
                </div>
            </div>
            <Navigation />
        </div>
        <div v-else class="franch-calc-container__part left">
            <div class="content">
                <div class="result-hedline">
                    <img src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png"/>
                    <h2>Результат</h2>
                </div>
                <div class="text">
                    <h3>
                        Other heading
                    </h3>
                    <p>
                        profit_diff: {{ profit_diff }}
                    </p>
                </div>
            </div>
            <Navigation />
        </div>


		<div v-if="get_result.anticipated_profit > get_result.wanted_profit" class="franch-calc-container__part right">
			<p>
				{{ get_result.months_until_roi }}
				{{ get_result.months_until_roi.asMonths() }} – это
				превосходный результат!
                <br>В среднем наши франчайзи выходят на чистую
				прибыль уже спустя 8 месяцев после открытия офиса.
			</p>
			<button class="coral-btn coral-btn-consultation">
				Получить консультацию
			</button>
		</div>
		<div v-else-if="profit_diff <= 100000" class="franch-calc-container__part right">
			<p v-if="success_in_9">
				{{ get_result.months_until_roi }}
				{{ get_result.months_until_roi.asMonths() }} – это
				превосходный результат! В среднем наши франчайзи выходят на чистую
				прибыль уже спустя 8 месяцев после открытия офиса.
			</p>
			<p v-else-if="success_in_between_10_and_18">
                {{ get_result.months_until_roi }} {{ get_result.months_until_roi.asMonths() }}
                &mdash; это хороший результат, но его можно улучшить.
                <br>Вероятно, Вам следует оптимизировать
                расходы на аренду или сократить количество сотрудников в офисе
                &mdash; в среднем один менеджер продает 40 туров в месяц.
			</p>
			<p v-else-if="success_beyond_18">
                {{ get_result.months_until_roi }} {{ get_result.months_until_roi.asMonths() }} окупаемости
                &mdash; это достаточно долгий период для турагентства. Рекомендуем Вам
                оптимизировать расходы на аренду, пересмотреть финансовые ожидания или увеличить план по продажам туров
                &mdash; в среднем один менеджер продает 40 туров в месяц.
            </p>
            <p v-else>
                profit_diff: {{ profit_diff }}
                <br>
                get_result.months_until_roi: {{ get_result.months_until_roi }}
                <br>
                {{ success_beyond_18 }}
            </p>
			<button class="coral-btn coral-btn-consultation">
				Получить консультацию
			</button>
		</div>
		<div v-else-if="profit_diff > 100000" class="franch-calc-container__part right">
			<p v-if="success_in_9">
				{{ get_result.months_until_roi }}
				{{ get_result.months_until_roi.asMonths() }} – это
				превосходный результат! В среднем наши франчайзи выходят на чистую
				прибыль уже спустя 8 месяцев после открытия офиса.
			</p>
			<p v-else-if="success_in_between_10_and_18">
                {{ get_result.months_until_roi }} {{ get_result.months_until_roi.asMonths() }}
                &mdash; это хороший результат, но его можно улучшить.
                <br>Вероятно, Вам следует оптимизировать
                расходы на аренду или сократить количество сотрудников в офисе
                &mdash; в среднем один менеджер продает 40 туров в месяц.
			</p>
			<p v-else-if="success_beyond_18">
                {{ get_result.months_until_roi }} {{ get_result.months_until_roi.asMonths() }} окупаемости
                &mdash; это достаточно долгий период для турагентства. Рекомендуем Вам
                оптимизировать расходы на аренду, пересмотреть финансовые ожидания или увеличить план по продажам туров
                &mdash; в среднем один менеджер продает 40 туров в месяц.
            </p>
            <p v-else>
                profit_diff: {{ profit_diff }}
                <br>
                get_result.months_until_roi: {{ get_result.months_until_roi }}
                <br>
                {{ success_beyond_18 }}
            </p>
			<button class="coral-btn coral-btn-consultation">
				Получить консультацию
			</button>
		</div>


	</div>
</template>

<style scoped lang="scss">
.coral-btn-consultation {
	margin-top: auto;
}

h3 {
	margin: 0 0 24px 0;
}

.content .text p strong {
    color: #0092d0;
}

</style>
