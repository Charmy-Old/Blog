<template>
    <Header />

    <div class="content">
        <main style="width: 100%; max-width: 1200px; margin: auto;">
            <div class="wtRecord">
                <section class="wtRecord-title">
                    <h2>體重追蹤紀錄</h2>
                    <button class="wtRecord-titleBtn" @click="inputBlock"><i class="fa-solid fa-plus"></i> 輸入資料</button>
                </section>
                <section class="wtRecord-list">
                    <ul>
                        <li v-for="(record, index) in records">
                            <span class="wtRecord-list-date">{{record.date}}</span>
                            <span class="wtRecord-list-weight">{{record.weight}}<span>kg</span></span>
                            <button @click="delRecord(index)"><i class="fa-solid fa-xmark"></i></button>
                        </li>
                    </ul>
                </section>
                <div class="wtRecord-chart">
                    <canvas ref="wtChartDOM"></canvas>
                </div>
                <div class="wtRecord-input" v-show="recordInput">
                    <div class="wtRecord-inputForm">
                        <label for="wtRecord-inputDate"><i class="fa-regular fa-calendar-days"></i> 日期</label>
                        <input id="wtRecord-inputDate" type="date" v-model="inputDate" min="2023-03-01">
                        <label for="wtRecord-inputKG"><i class="fa-solid fa-weight-scale"></i> 體重</label>
                        <input id="wtRecord-inputKG" type="number" v-model.number="inputKG" min="0" max="150" step="0.01" placeholder="輸入您的體重(kg)">
                        <div class="wtRecord-inputAlert" :style="{opacity: opacity}">
                            <i class="fa-solid fa-triangle-exclamation"></i> 請輸入日期和體重，體重範圍限1~150
                        </div>
                        <div class="wtRecord-inputBtn">
                            <button class="wtRecord-input-addBtn" @click="addRecord">新增</button>
                            <button class="wtRecord-input-closeBtn" @click="inputBlock">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- <Wall /> -->
    </div>

    <pageRate />
    <BackToTop />
</template>

<script>
    import Header from "@/components/Header.vue";
    // import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            // Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        weightChart: null,
        data() {
            return {
                recordInput: false,
                records: [],
                dates: [],
                weights: [],
                inputDate: null,
                inputKG: null,
                opacity: 0,
            }
        },
        methods: {
            inputBlock() {
                if (this.recordInput == false) {
                    this.recordInput = true
                    this.opacity = '0'
                } else {
                    this.recordInput = false
                }
            },

            addRecord() {
                if (this.inputDate != null && this.inputDate != '' && this.inputKG > 0 && this.inputKG < 150 && this.inputKG != null && this.inputKG != '') {
                let newRecord = {
                    date: this.inputDate,
                    weight: this.inputKG
                }
                this.records.push(newRecord)
                this.inputDate = ''
                this.inputKG = ''
                this.opacity = '0'
                this.recordInput = false
                } else {
                  this.opacity = '1'
                }
                this.records.sort((a, b) => a.date.localeCompare(b.date))
                this.dates = []
                this.weights = []
                for (let record of this.records) {
                    this.dates.push(record.date)
                    this.weights.push(record.weight)
                }
                this.weightChart.data.labels = JSON.parse(JSON.stringify(this.dates))
                this.weightChart.data.datasets[0].data = JSON.parse(JSON.stringify(this.weights))
                this.weightChart.update()
                console.log(this.dates)
            },

            delRecord(index) {
                this.records.splice(index, 1)
                this.dates.splice(index, 1)
                this.weights.splice(index, 1)

                this.weightChart.data.labels = JSON.parse(JSON.stringify(this.dates))
                this.weightChart.data.datasets[0].data = JSON.parse(JSON.stringify(this.weights))
                this.weightChart.update()
            },
        },

    watch: {
        records: {
            handler() {
                localStorage.setItem('records', JSON.stringify(this.records));
            },
            deep: true
        },
        dates: {
            handler() {
                localStorage.setItem('dates', JSON.stringify(this.dates));
            },
            deep: true
            },
        weights: {
            handler() {
                localStorage.setItem('weights', JSON.stringify(this.weights));
            },
            deep: true
        },
    },

    mounted() {
        this.records = JSON.parse(localStorage.getItem('records')) || [];
        this.dates = JSON.parse(localStorage.getItem('dates')) || [];
        this.weights = JSON.parse(localStorage.getItem('weights')) || [];
        this.weightChart = new Chart(this.$refs.wtChartDOM, {
            type: 'line',
            data: {
                labels: JSON.parse(JSON.stringify(this.dates)),
                datasets: [{
                    label: '體重',
                    data: JSON.parse(JSON.stringify(this.weights)),
                    borderWidth: 1,
                    pointHoverRadius: 6,
                }]
            },
        });
    },




    setup() {}
};
</script>