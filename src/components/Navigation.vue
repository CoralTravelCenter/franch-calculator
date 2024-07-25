<script setup>
import { inject, watch } from "vue";
import { calculator } from "../calculator.js";

const counter = inject("steps_counter");
const result_obj = inject("params");
const inputValue = inject("input_filled");
const set_result = inject("calculation_result");
const show_result = inject("show_result");
const type_of_result = inject("ok_or_not");

function increaseStep() {
    if (counter.value < 6) {
        counter.value++;
    }
}

function decreseStep() {
    if (counter.value !== 1) counter.value--;
}

function initResultStep() {
    set_result.value = calculator(
        result_obj.value.city,
        result_obj.value.rent_type,
        result_obj.value.personal,
        result_obj.value.tours_per_month,
        result_obj.value.wanted_price_per_month,
        Number(result_obj.value.rent_price)
    );
    show_result.value = true;
}

function appReset() {
    counter.value = 1;
    result_obj.value = {
        wanted_price_per_month: "",
        city: "",
        rent_type: "",
        rent_price: "",
        personal: "",
        tours_per_month: "",
    };
    show_result.value = false;
    type_of_result.value = null;
    inputValue.value = false;
}

function jumpToAppForm() {
    location.hash = '#Connection';
}

</script>

<template>
    <div class="navigation">
        <div class="actions" v-if="show_result">
            <button class="coral-btn gost" @click="appReset()">
                Посчитать заново
            </button>
            <button class="coral-btn" :disabled="!type_of_result" @click="jumpToAppForm">
                Оставить заявку
            </button>
        </div>
        <div class="actions" v-else>
            <button
                class="coral-btn"
                @click="increaseStep()"
                v-if="counter < 2"
            >
                Начать
            </button>
            <button class="coral-btn gost" @click="decreseStep()" v-else>
                Назад
            </button>
            <button
                class="coral-btn"
                @click="inputValue && increaseStep()"
                v-if="counter > 1 && counter < 6"
                :disabled="!inputValue"
            >
                Дальше
            </button>
            <button
                class="coral-btn"
                @click="initResultStep()"
                v-if="counter === 6"
                :disabled="!inputValue"
            >
                Посчитать
            </button>
        </div>
        <div class="progress">
            <div class="progress__bar">
                <div
                    class="progress__fill"
                    :style="{ width: (counter / 6) * 100 + '%' }"
                    :class="{
                        success: type_of_result !== null && type_of_result,
                        failed: type_of_result !== null && !type_of_result,
                    }"
                ></div>
            </div>
            <span v-if="!show_result">шаг {{ counter }} из 6</span>
            <svg
                v-else-if="type_of_result"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM11.0234 5.71406L7.73281 10.2766C7.68682 10.3408 7.62619 10.3931 7.55595 10.4291C7.48571 10.4652 7.40787 10.4841 7.32891 10.4841C7.24994 10.4841 7.17211 10.4652 7.10186 10.4291C7.03162 10.3931 6.97099 10.3408 6.925 10.2766L4.97656 7.57656C4.91719 7.49375 4.97656 7.37813 5.07812 7.37813H5.81094C5.97031 7.37813 6.12187 7.45469 6.21562 7.58594L7.32812 9.12969L9.78438 5.72344C9.87813 5.59375 10.0281 5.51562 10.1891 5.51562H10.9219C11.0234 5.51562 11.0828 5.63125 11.0234 5.71406Z"
                    fill="#52C41A"
                />
            </svg>
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM10.5844 10.6594L9.55313 10.6547L8 8.80313L6.44844 10.6531L5.41563 10.6578C5.34688 10.6578 5.29063 10.6031 5.29063 10.5328C5.29063 10.5031 5.30156 10.475 5.32031 10.4516L7.35313 8.02969L5.32031 5.60938C5.30143 5.58647 5.29096 5.5578 5.29063 5.52812C5.29063 5.45937 5.34688 5.40312 5.41563 5.40312L6.44844 5.40781L8 7.25938L9.55156 5.40938L10.5828 5.40469C10.6516 5.40469 10.7078 5.45937 10.7078 5.52969C10.7078 5.55937 10.6969 5.5875 10.6781 5.61094L8.64844 8.03125L10.6797 10.4531C10.6984 10.4766 10.7094 10.5047 10.7094 10.5344C10.7094 10.6031 10.6531 10.6594 10.5844 10.6594Z"
                    fill="#E84F0E"
                />
            </svg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation {
    margin-top: auto;

    @media (max-width: 768px) {
        margin-top: 1em;
    }
}

.progress {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 22px;
    background: transparent;
    span {
        min-width: 63px;
        flex-shrink: 0;
        line-height: 1;
    }
}

.progress__bar {
    width: 100%;
    height: 10px;
    background: #ddd;
    border-radius: 4px;
    overflow: hidden;
}

.progress__fill {
    background-color: #0092d0;
    border-radius: 4px;
    height: 10px;
}

.progress__fill.success {
    background-color: #52c41a;
}

.progress__fill.failed {
    background-color: #e84f0e;
}

.actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 24px;
}
</style>
