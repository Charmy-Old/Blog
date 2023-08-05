<template>
    <Header />
    <div class="content">
        <main>

            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 props？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-06</p>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>props 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <p>在 JavaScript 中，props 是 properties(屬性)的縮寫，用於在組件(conponent)之間傳遞數據。在 VUE、React、Angular 等框架中，props 是用於在組件向組件傳遞數據的一種機制。通過 props，可以將組件A信息傳遞給組件B，組件B可以讀取這些訊息並在其渲染中使用。</p>
                        <h4>props 的作用</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>在組件之間傳遞數據：組件可以通過props向組件傳遞數據，從而實現數據的共享和傳遞。</li>
                            <li><i class="fa-solid fa-check"></i>定制化組件行為：通過不同的 props，可以在相同的子組件中實現不同的行為或呈現不同的數據。</li>
                        </ul>
                    </div>
                    <div class="article-txt">
                        <h4>props 的基本流程</h4>
                    </div>
                    <div class="article-list">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>在傳遞數據的組件中，通過在子組件標簽上設置屬性（props）來傳遞數據。</li>
                            <li><i class="fa-solid fa-check"></i>在接受數據的組件中，通過this.props來訪問傳遞的數據。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>Vue props 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>傳遞數據的組件(child)</h4>
                    </div>
                    <div class="article-coding">
<pre>
&lt;template>
    &lt;div>
        &lt;p>&#123;&#123; message &#125;&#125;&lt;/p>
    &lt;/div>
&lt;/template>
  
&lt;script>
    export default {
        props: ["message"]
    };
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt">
                        <h4>接收數據的組件(parant)</h4>
                    </div>
                    <div class="article-coding">
<pre>
&lt;template>
    &lt;div>
        &lt;Child :message="message" />
    &lt;/div>
&lt;/template>

&lt;script>
import Child from "./Child.vue";

export default {
    components: {
        Child
    },
    data() {
        return {
            message: "Hello from 接收數據 Component!"
        };
    }
};
&lt;/script>
</pre>
                    </div>
                    <div class="article-txt">
                        <p>在這個例子中，接收數據組件(parant)通過 message 屬性向 傳遞數據組件(child) 組件傳遞了一條消息。在 傳遞數據組件(child) 組件中，通過 props: ['message'] 定義了可以接收的屬性列表，然後可以在模板中通過 &#123;&#123; message &#125;&#125; 來訪問傳遞過來的消息。</p>
                        <p>※ 在函數式組件中（不使用類聲明），props 可以通過函數參數的方式傳遞和訪問，而不是通過 this.props</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail">
                    <h3>React props 範例</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt">
                        <h4>傳遞數據的組件(child)</h4>
                    </div>
                    <div class="article-coding">
<pre>
import React, { Component } from "react";
class Child extends Component {
    render() {
        return (
            &lt;div>
                &lt;p>{ this.props.message }&lt;/p>
            &lt;/div>
        );
    }
}

export default Child;
</pre>
                    </div>
                    <div class="article-txt">
                        <h4>接收數據的組件(parant)</h4>
                    </div>
                    <div class="article-coding">
<pre>
import React, { Component } from "react";
import Child from "./傳遞數據的組件";

class Parent extends Component {
    render() {
        const message = " Hello from 接收數據 Component! ";
    
        return (
            &lt;div>
                &lt;Child message={message} />
            &lt;/div>
        );
    }
}

export default Parent;
</pre>
                    </div>
                    <div class="article-txt">
                        <p>在這個例子中，接收數據組件(parant)通過 message 屬性向 傳遞數據組件(child) 組件傳遞了一條消息。在 傳遞數據組件(child) 組件中，通過 props: ['message'] 定義了可以接收的屬性列表，然後可以在模板中通過 &#123;&#123; message &#125;&#125; 來訪問傳遞過來的消息。</p>
                        <p>※ 在函數式組件中（不使用類聲明），props 可以通過函數參數的方式傳遞和訪問，而不是通過 this.props</p>
                    </div>
                </div>
            </section>

        </main>
        <Wall />
    </div>
    <BackToTop />
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