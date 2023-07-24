<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">事件捕獲(Capturing Events) V.S. 冒泡事件(Bubbling Events)</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-25</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>事件捕獲 冒泡事件 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在 JavaScript 中，事件處理涉及兩個主要階段：事件捕獲(Capturing Events)和冒泡事件(Bubbling Events)。這兩個階段描述了事件在 DOM Tree 中傳播的方式，允許在事件發生時捕獲或處理。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>事件捕獲(Capturing Events)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>事件捕獲是事件傳播的第一個階段。當一個事件發生在巢狀的 DOM 元素中時，瀏覽器會從最外層的祖先元素開始，逐級向下到目標元素。在這個階段，事件會觸發祖先元素的事件處理程序，然後逐級傳遞到目標元素。</p>
                        <p>事件捕獲階段的處理程序可在父元素中捕獲事件，然後在到達目標元素之前對事件進行預處理。在實際開發中，很少使用事件捕獲階段，因為在大多數情況下並不是必要的。</p>
                        <p>要在事件處理程序中使用事件捕獲階段，可以通過在添加事件監聽器時將 useCapture 參數設置為 true 來實現。</p>
                    </div>
                    <div class="article-coding">
<pre>
const element = document.getElementById("myElement");

element.addEventListener("click", myFunction, true);   // 第三個參數為 true，啟用事件捕獲階段
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>冒泡事件(Bubbling Events)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>事件冒泡是事件傳播的第二個階段，也是默認階段。當目標元素上觸發了一個事件時會向上冒泡，從目標元素開始，逐級向上到最外層的祖先元素。意味著事件會在觸發元素的父元素、祖父元素等等上觸發相同類型的事件處理程序。</p>
                        <p>事件冒泡是最常用的事件傳播方式，因為能更好地模擬 DOM 結構的層次關係，而且更符合直覺。</p>
                        <p>要在事件處理程序中使用事件冒泡階段，只需將 useCapture 參數設置為 false 或省略該參數(默認為 false)即可。</p>
                    </div>
                    <div class="article-coding">
<pre>
const element = document.getElementById("myElement");

element.addEventListener("click", myFunction);   // 默認為 false，啟用事件冒泡階段
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>阻止事件傳播</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在實際應用中，有時可能需要阻止事件在捕獲或冒泡階段繼續傳播。因此可以使用 event.stopPropagation() 方法。在事件處理程序中呼叫此方法將停止事件的傳播。</p>
                    </div>
                    <div class="article-coding">
<pre>
function myFunction(event) {
    // 執行一些處理邏輯
    event.stopPropagation();   // 阻止事件繼續傳播
}
</pre>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="article-detail">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>事件捕獲階段從祖先元素向目標元素傳播，很少使用。</li>
                            <li><i class="fa-solid fa-check"></i>事件冒泡階段從目標元素向祖先元素傳播，是默認的傳播方式，也是最常用的。</li>
                            <li><i class="fa-solid fa-check"></i>使用 addEventListener 添加事件處理時，通過設置 useCapture 參數為 true 可以啟用事件捕獲階段，為 false 或省略參數則使用事件冒泡階段。</li>
                            <li><i class="fa-solid fa-check"></i>使用 event.stopPropagation() 方法可以阻止事件在捕獲或冒泡階段繼續傳播。</li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
        <Wall />
        <BackToTop />
    </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            // Footer,
        },
        setup() {}
    };
</script>