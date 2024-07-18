<script setup>
import Navigation from "./Navigation.vue";
import { inject, onMounted, watchEffect } from "vue";

const params = inject("params");
const inputValue = inject("input_filled");

function parseTours(input) {
    return input.replace(/\D/g, '');
}

function formatTours(input) {
    return input.replace(/\D/g, '').split('').reverse().join('').replace(/\d{3}(?=.)/g, "$& ").split('').reverse().join('');
}

watchEffect(() => {
    inputValue.value = !!params.value.tours_per_month.length && Number(params.value.tours_per_month) > 0;
});

</script>

<template>
    <div class="franch-calc-container">
        <div class="franch-calc-container__part left">
            <div class="content">
                <h2>Сколько туров в месяц планируете продавать?</h2>
                <div class="input-container">

                    <el-input class="people" v-model="params.tours_per_month" clearable
                              :parser="parseTours" :formatter="formatTours">
                        <template #append><span>шт.</span></template>
                    </el-input>

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
