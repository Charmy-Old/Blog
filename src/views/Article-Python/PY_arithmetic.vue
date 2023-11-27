<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">if 判斷式和簡易的四則運算</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-20</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>if 判斷式</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
x = input("請輸入數字：") # 取得字串形式的使用者輸入
x = int(x) # 將字串型態轉換成數字型態
if x > 100:
   print("大於 100")
elif x > 50:
   print("大於 50，小於等於100")
else:
   print("小於等於 50")
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>簡易的四則運算</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
n1 = float(input("請輸入第一個數字："))
calculate = input("請輸入運算：+ or - or * or /：")
n2 = float(input("請輸入第二個數字："))
if calculate == "+":
    print("Ans：", n1 + n2)
elif calculate == "-":
    print("Ans：", n1 - n2)
elif calculate == "*":
    print("Ans：", n1 * n2)
elif calculate == "/":
    print("Ans：", n1 / n2)
else:
    print("不支援運算")
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://www.youtube.com/playlist?list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk" target="_blank"><i class="fa-solid fa-pen-to-square"></i>彭彭的課程 - Python 入門教學課程</a>
                    </div>
                </div>
            </section>
        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Wall from "@/components/Wall.vue";
import BackToTop from "@/components/BackToTop.vue";
import pageRate from "@/components/pageRate.vue";
</script>