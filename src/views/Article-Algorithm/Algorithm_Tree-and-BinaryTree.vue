<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 Binary Tree(二元樹)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-04-18</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Tree 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Binary Tree 與 Tree 兩者名稱相近，但是概念是不相近的，用途更是天差地遠，兩者其實是可以分別學習的，但是在認識 Binary Tree 之前還是先簡單認識一下 Tree 這種資料結構。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Tree 是一種抽象的資料結構，由一個以上的節點所組成，每個節點可以有多個子節點，最頂端的根節點稱為 root ，最下面的層級的節點稱為 leaves(2, 1, 7 …)</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/Tree-1.webp" alt="">
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/Tree-2.webp" alt="">
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>Root：根節點，最上層的節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Edge：節點與節點之間的連結</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Parent：父節點，與節點相鄰的上層節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Children：子節點，與節點相鄰的下層節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Siblings：兄弟節點，層級在同一層，而且擁有共同的父節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Leaf nodes：葉子節點，沒有子節點的節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Subtree：子樹，該節點以及其左右子節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Height：樹的高度，可以解讀為樹有幾層</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Binary Tree</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Tree 對於 樹上 node 的 child 數目沒有限制，因此，每個 node 可以有多個 child。</p>
                        <p>若限制 node 只能有兩個 child，此即稱為 Binary Tree(二元樹)，並稱兩個 child pointer 為 left child 和 right child。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>Root：也就是 node(data item)</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Left Child：左邊子節點</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Right Child：右邊子節點</li>
                        </ul>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-1.webp" alt="">
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/Tree-3.webp" alt="">
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Full & Complete Binary Tree</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Full Binary Tree 和 Complete Binary Tree 是兩種十分常見 Binary Tree。</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Full Binary Tree</h4>
                        <p>Full Binary Tree 具有以下性質：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>所有 internal node 都有兩個 subtree(child pointer)</li>
                            <li><i class="fa-regular fa-note-sticky"></i>所有 leaf node 具有相同的 level(或相同的height)</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>由以上性質能夠推論出：若 Full Binary Tree 的 leaf node 之 level 為 n，整棵樹共有 2n−1 個 node。</p>
                        <p>並且，每個 node 與其 child 有以下關係：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>第 i 個 node 的 left child 之 index 為 2i</li>
                            <li><i class="fa-regular fa-note-sticky"></i>第 i 個 node 的 right child 之 index 為 2i+1</li>
                            <li><i class="fa-regular fa-note-sticky"></i>除了 root 之 parent 為 null 之外，第 i 個 node 的 parent 之 index 為 i/2</li>
                        </ul>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-2.webp" alt="">
                    </div>
                    <div class="article-picTxt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>若 Full Binary Tree 的 leaf node 之 level 為 n，整棵樹共有 2n−1 個 node</p>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Complete Binary Tree</h4>
                        <p>若 Tree 的 node 按照 Full Binary Tree 的次序排列(由上至下，由左至右)，則稱此為 Complete Binary Tree</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-3.webp" alt="">
                    </div>
                    <div class="article-picTxt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>圖中的 Tree 共有 10 個 node，且這十個 node 正好填滿 Full Binary Tree 的前十個位置，則此樹為 Complete Binary Tree</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-4.webp" alt="">
                    </div>
                    <div class="article-picTxt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>圖中的 Tree 共有 11 個 node，但是第 11 個 node(K) 應該要是第 5 個 node(E) 的 child，因此並非 Complete Binary Tree</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Binary Tree 的種類</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Full Binary Tree(滿二元樹)</h4>
                        <p>Full Binary Tree 所有的 leaf node 都在同一個層級，每個節點的子節點為 0 個或是 2 個。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-5.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Perfect Binary Tree(完美二元樹)</h4>
                        <p>Perfect Binary Tree 所有的 leaf node 都在同一個層級，除了leaf node之外，每個節點都有兩個子節點。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-6.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Complete Binary Tree(完全二元樹)</h4>
                        <p>Complete Binary Tree 和 Full Binary Tree 一樣，其中每個內部節點恰好有兩個子節點，並且所有葉節點都處於同一層級。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>除了最後一層 leaf node 之外，每層都是填滿的狀態</li>
                            <li><i class="fa-regular fa-note-sticky"></i>所有 leaf elements 必須向左傾斜</li>
                            <li><i class="fa-regular fa-note-sticky"></i>最後一個 leaf element 可能沒有 Right Child，即 Complete Binary Tree 不必是 Full Binary Tree</li>
                        </ul>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-7.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Degenerate or Pathological Tree(退化或病態樹)</h4>
                        <p>Degenerate or Pathological Tree 每個節點只會有一個右子節點或是左子節點。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-8.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Skewed Binary Tree(傾斜二元樹)</h4>
                        <p>Skewed Binary Tree 是一種 Degenerate or Pathological Tree，其中 Tree 由 left child 或 right child 主導，因此 Skewed Binary Tree 有 Left-Skewed Binary Tree 和 Right-Skewed Binary Tree 兩種。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-9.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <h4><i class="fa-solid fa-pen"></i>Balanced Binary Tree(平衡二元樹)</h4>
                        <p>Balanced Binary Tree 其中的每個節點的左子樹和右子樹的高度差異為 0 或 1。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-10.webp" alt="">
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Binary Search Tree(BST) 二元搜尋樹</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>具有 Binary Tree 的特性，每個節點的子節點不超過 2 個，除此之外，左邊的子節點必定小於根節點，右邊的子節點必定大於根節點，因此整棵樹最左邊的節點必定是最小的，最右邊的節點必定是最大的，也因為 Binary Search Tree 這樣的特性，所以不管是新增節點、刪除節點、搜尋節點的時間複雜度都是 O(log n)。</p>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-11.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用 JavaScript 實作 Binary Search Tree：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
        this.queue = [];
    }
    insertNode(value) {
        let current = new TreeNode(value);
        let target = null;
        let nowPos = this.root;
        while (nowPos !== null) {
            target = nowPos;
            if (current.value &lt; nowPos.value) {
                nowPos = nowPos.left;
            } else {
                nowPos = nowPos.right;
            }
        }
        if (target === null) {
            this.root = current;
        } else if (current.value &lt; target.value) {
            target.left = current;
        } else {
            target.right = current;
        }
    }
}

let tree = new BinarySearchTree();
tree.insertNode(10);
tree.insertNode(8);
tree.insertNode(11);
tree.insertNode(5);
tree.insertNode(9);
tree.insertNode(15);
tree.insertNode(2);
tree.insertNode(19);
tree.insertNode(13);
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如果 consolo.log(tree) 可以看到成功用物件模擬出一顆Binary Search Tree</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Binary Heaps 二元堆積</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Binary Heaps 又分為 Min-Heaps 和 Max-Heaps，適合用來找最小值或最大值</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-regular fa-note-sticky"></i>Min-Heaps：每個節點都會比自己的子節點還小，因此根節點會是最小值</li>
                            <li><i class="fa-regular fa-note-sticky"></i>Max-Heaps：每個節點都會比自己的子節點還大，因次根節點會是最大值</li>
                        </ul>
                    </div>
                    <div class="article-pic" style="background-color: #FFFFFF;" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BinaryTree-12.webp" alt="">
                    </div>

                    
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://alrightchiu.github.io/SecondRound/binary-tree-introjian-jie.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Binary Tree: Intro(簡介)</a>
                        <a class="article-reference" href="https://medium.com/coding-hot-pot/day11-%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B-binary-tree-%E4%BA%8C%E5%85%83%E6%A8%B9-630a5d92d5a4" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Joe Chang) - [資料結構]Binary Tree — 二元樹</a>
                        <a class="article-reference" href="https://www.programiz.com/dsa/binary-tree" target="_blank"><i class="fa-solid fa-pen-to-square"></i>二元樹</a>
                        <a class="article-reference" href="https://medium.com/@verdi/working-with-trees-2083739b8918" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Medium(Written by Michael Verdi) - Working With Trees</a>
                        <a class="article-reference" href="https://dev.to/christinamcmahon/understanding-binary-search-trees-4d90" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Understanding Binary Search Trees</a>
                        <a class="article-reference" href="https://web.ntnu.edu.tw/~algo/BinaryTree.html" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Binary Tree</a>
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