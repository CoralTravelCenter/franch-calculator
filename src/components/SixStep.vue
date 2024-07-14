<script setup>
import Navigation from "./Navigation.vue";
import { inject, onMounted } from "vue";

const params = inject("params");
const inputValue = inject("input_filled");
onMounted(() => {
    params.value.tours_per_month.length !== 0
        ? (inputValue.value = true)
        : (inputValue.value = false);
});
</script>

<template>
    <div class="franch-calc-container">
        <div class="franch-calc-container__part left">
            <div class="content">
                <h2>Сколько туров в месяц планируете продавать?</h2>
                <div class="input-container">
                    <input
                        class="custom-text"
                        v-model="params.tours_per_month"
                        placeholder="Введите количество"
                        maxlength="6"
                        @input="inputValue = true"
                    />
                </div>
            </div>
            <Navigation />
        </div>
        <div class="franch-calc-container__part right">
            <p>
                <strong>Турагент-новичок</strong>, работающий под брендом Coral
                Travel, в среднем продает 11 туров в месяц.<br />
                <strong>Турагент с опытом от 2х лет</strong>, работающий под
                брендом Coral Travel, в среднем продает 20 туров в месяц.
            </p>
            <div class="live-hack">
                <strong>Лайфхак:</strong> Не бойтесь продавать туры с высоким
                чеком. Так вы быстрее заработаете и окупите свои вложения.
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-container {
    display: flex;
    align-items: center;
    gap: 48px;

    h3 {
        margin: 0;
    }
}

.live-hack {
    padding: 48px 25px 34px;
    background: #fff;
    border-radius: 8px;
    position: relative;
    margin-top: 95px;
    font-size: 20px;

    &:after {
        content: "";
        position: absolute;
        top: -55px;
        left: -40px;
        width: 103px;
        height: 103px;
        background: url("https://b2ccdn.coral.ru/content/franch-calculator/icon.png");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
    }
}
</style>
