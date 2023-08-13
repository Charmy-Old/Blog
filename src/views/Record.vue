<style>
    .password-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .password-block input {
        width: 65%;
        border: 1px #222223 solid;
        border-radius: 5px;
        display: block;
        padding: 0.25rem;
    }

    .password-block button {
        width: 30%;
        border: 1px #222223 solid;
        border-radius: 5px;
        display: block;
        padding: 0.25rem;
    }
</style>

<template>
    <div class="content" style="margin-top: 80px;">
        <main>

            <section class="password">
                <div class="password-block">
                    <input v-model="inputPassword" type="password" placeholder="Enter Password" />
                    <button @click="checkPassword">Submit</button>
                </div>
            </section>

            <div v-if="passwordCorrect">
                <!-- 放內容 -->
                <section>
                    <div>內容</div>
                </section>
            </div>

        </main>
    </div>
    <pageRate />
    <BackToTop />
</template>
  
<script>
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
import { ref } from "vue";
export default {
    components: {
        BackToTop,
        pageRate,
    },
    setup() {
        const password = "qqq";
        const inputPassword = ref("");
        const passwordCorrect = ref();
  
        const checkPassword = () => {
            if (inputPassword.value === password) {
                document.querySelector(".password").style = "display: none;";
                passwordCorrect.value = true;
            } else {
                alert("密碼錯誤")
            }
            
        };
  
        return {
            inputPassword,
            passwordCorrect,
            checkPassword
        };
    }
};
</script>