<template>
    <section class="d-none">
        <div class="container text-center">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6">
                <div>
                    <button class="select-button" data-filter="all">All</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="web">Web</button>
                </div>
                
                <div>
                    <button class="select-button" data-filter="html">HTML</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="css">CSS</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="javascript">JavaScript</button>
                </div>
                    
                <div>
                    <button class="select-button" data-filter="vue">Vue</button>
                </div>
            </div>
        </div>
    </section>

    <section class="all html">
        <a href="HTML_tableTag" class="article">
            <div class="article-icon">
                <i class="fa-brands fa-html5"></i>
            </div>
            <div class="article-text">
                <div class="article-title">HTML 表格 (table)</div>
                <div class="article-tag"><i class="fa-solid fa-tag"></i>HTML<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-07-01</div>
                <div class="article-underline"></div>
                <div class="article-content">
                    <p>HTML &lt;table&gt; 標籤 (tag) 用來建立表格，也就是用來呈現二維的資料表資訊。</p>
                    <p>&lt;table&gt; 標籤做為表格的容器 (container)，裡面有不同用途的標籤像是 &lt;tr&gt;, &lt;td&gt; 組成一個完整的表格。</p>
                    <p>&lt;table&gt;中的標籤按照以下順序，組成一個表格：</p>
                </div>
            </div>
        </a>
    </section>
    
</template>
<script>
    import { onMounted } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                function selectArticle() {
                    const buttons = document.querySelectorAll(".select-button");
                    const cards = document.querySelectorAll(".all");
                    
                    function filter(category, items) {
                        items.forEach((item) => {
                            const isItemFiltered = !item.classList.contains(category);
                            const isShowAll = category.toLowerCase() === "all";
                            if (isItemFiltered && !isShowAll) {
                                item.classList.add("d-none");
                            } else {
                                item.classList.remove("d-none");
                            }
                        });
                    }
                    
                    buttons.forEach((button) => {
                        button.addEventListener("click", () => {
                            const currentCategory = button.dataset.filter;
                            console.log(currentCategory);
                            filter(currentCategory, cards);
                        });
                    });
                }
          
                selectArticle();
            });
        }
    };
</script>