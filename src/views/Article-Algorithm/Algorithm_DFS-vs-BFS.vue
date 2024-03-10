<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 DFS 和 BFS？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2024-03-11</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>DFS 和 BFS 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>深度優先搜尋（DFS）與廣度優先搜尋（BFS）是圖論中常用的兩種搜尋算法。兩者都是可以用來走訪或搜尋樹節點與圖頂點的演算法，但在搜尋的順序上有所不同。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>DFS(深度優先搜尋)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>DFS 是從圖中先選定某個節點開始沿著一條路徑一直向下搜尋，直到到達該路徑的終點。然後，DFS 會回溯到上一個節點，再沿著另一條路徑向下搜尋，反覆直到搜尋完圖中的所有節點。</p>
                        <p>圖解：</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/DFS-1.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>深度優先可以利用堆疊(Stack)的方式來處理。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/DFS-2.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>JavaScript 範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // 新增頂點
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        } else {
            return '頂點已存在';
        }
    }

    // 新增邊
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            if (this.adjacencyList[vertex2]) {
                this.adjacencyList[vertex1].push(vertex2)
                this.adjacencyList[vertex2].push(vertex1)
            } else {
                return '第二項頂點不存在';
            }
        } else {
            return '第一項頂點不存在';
        }
    }

    // 刪除頂點
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach(function (item) {
                this.removeEdge(vertex, item)
                delete this.adjacencyList[vertex]
            });
        } else {
            return '此頂點已不存在';
        }
    }

    // 刪除邊
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            if (this.adjacencyList[vertex2]) {
                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                    (vertex) => vertex !== vertex2
                )
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                    (vertex) => vertex !== vertex1
                )
            } else {
                return '第二項頂點已不存在';
            }
        } else {
            return '第一項頂點已不存在';
        }
    }

    printGraph() {
        console.log(this.adjacencyList)
    }

    // DFS 深度優先搜尋
    DFS(start) {
        const result = [];
        const stack = [start];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');

graph.printGraph();
// {
//     A: ["B", "D", "E"],
//     B: ["A", "C"],
//     C: ["B", "E"],
//     D: ["A", "E"],
//     E: ["A", "D", "F", "C"],
//     F: ["E"]
// }

console.log(graph.DFS('A'))   // ["A", "E", "C", "F", "D", "B"]
console.log(graph.DFS('B'))   // ["B", "C", "E", "F", "D", "A"]
console.log(graph.DFS('C'))   // ["C", "E", "F", "D", "A", "B"]
console.log(graph.DFS('D'))   // ["D", "E", "C", "B", "F", "A"]
console.log(graph.DFS('E'))   // ["E", "C", "B", "F", "D", "A"]
console.log(graph.DFS('F'))   // ["F", "E", "C", "B", "D", "A"]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Python 範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
#Graph
graph = {
    'A': ["B", "D", "E"],
    'B': ["A", "C"],
    'C': ["B", "E"],
    'D': ["A", "E"],
    'E': ["A", "D", "F", "C"],
    'F': ["E"]     
}

def DFS(graph,start):
    stack = []
    result = []
    stack.append(start)
    visited = set()
    visited.add(start)
    while(len(stack)>0):
        currentVertex = stack.pop()
        result.append(currentVertex)
        for neighbor in graph[currentVertex]:
            if neighbor not in visited:
                stack.append(neighbor)
                visited.add(neighbor)
    return result

print(DFS(graph,'A'))   # ['A', 'E', 'C', 'F', 'D', 'B']
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>BFS(廣度優先搜尋)</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>BFS 是從圖中的某個節點開始將該節點的所有相鄰節點加入到一個佇列中。然後，BFS 會從佇列中取出一個節點，並將該節點的所有相鄰節點加入到佇列中，持續以上動作直到佇列為空。</p>
                        <p>圖解：</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BFS-1.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>廣度優先可以利用佇列(Queue)的方式來處理。</p>
                    </div>
                    <div class="article-pic" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <img src="../../assets/images/article-algorithm/BFS-2.webp" alt="">
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>JavaScript 範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    //新增頂點
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        } else {
            return '頂點已存在';
        }
    }

    //新增邊
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            if (this.adjacencyList[vertex2]) {
                this.adjacencyList[vertex1].push(vertex2)
                this.adjacencyList[vertex2].push(vertex1)
            } else {
                return '第二項頂點不存在';
            }
        } else {
            return '第一項頂點不存在';
        }
    }

    //刪除頂點
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach(function (item) {
                this.removeEdge(vertex, item)
                delete this.adjacencyList[vertex]
            });
        } else {
            return '此頂點已不存在';
        }
    }

    //刪除邊
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            if (this.adjacencyList[vertex2]) {
                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                    (vertex) => vertex !== vertex2
                )
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                    (vertex) => vertex !== vertex1
                )
            } else {
                return '第二項頂點已不存在';
            }
        } else {
            return '第一項頂點已不存在';
        }
    }

    printGraph() {
        console.log(this.adjacencyList)
    }

    //廣度優先
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');

graph.printGraph();
// {
//     A: ["B", "D", "E"],
//     B: ["A", "C"],
//     C: ["B", "E"],
//     D: ["A", "E"],
//     E: ["A", "D", "F", "C"],
//     F: ["E"]
// }

console.log(graph.BFS('A'))   // ["A", "B", "D", "E", "C", "F"]
</pre>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Python 範例：</p>
                    </div>
                    <div class="article-coding" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
<pre>
    #Graph
graph = {
    'A': ["B", "D", "E"],
    'B': ["A", "C"],
    'C': ["B", "E"],
    'D': ["A", "E"],
    'E': ["A", "D", "F", "C"],
    'F': ["E"]     
}
def BFS(graph,start):
    queue = []
    queue.append(start)
    result = []
    visited = set()
    visited.add(start)
    while(len(queue)>0):
        currentVertex = queue.pop(0)
        result.append(currentVertex)
        for neighbor in graph[currentVertex]:
            if neighbor not in visited:
                queue.append(neighbor)
                visited.add(neighbor)
    return result

print(BFS(graph,'A'))   # ['A', 'B', 'D', 'E', 'C', 'F']
</pre>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>總結</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>特性</th>
                                    <th>DFS</th>
                                    <th>BFS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>搜尋順序</td>
                                    <td>深度優先</td>
                                    <td>廣度優先</td>
                                </tr>
                                <tr>
                                    <td>容易實現</td>
                                    <td>是</td>
                                    <td>是</td>
                                </tr>
                                <tr>
                                    <td>適用於無向圖</td>
                                    <td>是</td>
                                    <td>是</td>
                                </tr>
                                <tr>
                                    <td>適用於有向圖</td>
                                    <td>是</td>
                                    <td>是</td>
                                </tr>
                                <tr>
                                    <td>可能陷入死迴圈</td>
                                    <td>是</td>
                                    <td>否</td>
                                </tr>
                                <tr>
                                    <td>可以保證找到所有節點</td>
                                    <td>否</td>
                                    <td>是</td>
                                </tr>
                                <tr>
                                    <td>可以找到最短路徑</td>
                                    <td>否</td>
                                    <td>是</td>
                                </tr>
                                <tr>
                                    <td>耗時</td>
                                    <td>較短</td>
                                    <td>較長</td>
                                </tr>
                                <tr>
                                    <td>適用於無窮圖</td>
                                    <td>否</td>
                                    <td>否</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="https://ithelp.ithome.com.tw/articles/10281404" target="_blank"><i class="fa-solid fa-pen-to-square"></i>iT邦幫忙(科科) - 【Day33】[演算法]-深度優先搜尋DFS與廣度優先搜尋BFS</a>
                        <a class="article-reference" href="https://juejin.cn/post/6844903645222273037" target="_blank"><i class="fa-solid fa-pen-to-square"></i>Darth-Phoenix - DFS與BFS</a>
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