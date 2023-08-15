<template>
    <Header />
    <div class="content">
        <main>
            
            <section>
                <div class="article-top">
                    <div class="article-icon">
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div class="article-text">
                        <div class="article-title">Git</div>
                    </div>
                </div>
            </section>

            <section>
              <a href="GIT_basic-instructions" class="article">
                  <div class="article-icon">
                      <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="article-text">
                      <div class="article-title">Git 常用指令</div>
                      <div class="article-tag"><i class="fa-solid fa-tag"></i>Git<i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-15</div>
                      <div class="article-underline"></div>
                      <div class="article-content">
                          <p>Git 是一種分散式版本控制系統，被廣泛用於軟體開發領域。主要目的是幫助開發人員有效地協同工作，追蹤代碼變更，並確保代碼的版本歷史得以妥善管理。相較於傳統的集中式版本控制系統，如 Subversion，Git 具有更大的靈活性和強大的分支管理功能。</p>
                      </div>
                  </div>
              </a>
            </section>



        </main>
        <Wall />
    </div>
    <pageRate />
    <BackToTop />
</template>
<script>
    import Header from "@/components/Header.vue";
    import Wall from "@/components/Wall.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import pageRate from "@/components/pageRate.vue";
    export default {
        components: {
            Header,
            Wall,
            BackToTop,
            pageRate,
            // Footer,
        },
        setup() {}
    };
</script>