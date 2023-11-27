<template>
    <Header />
    <div class="content">
        <main>
            <section>
                <div class="article-heading">
                    <h2 class="article-heading">什麼是 賽局理論(Game Theory)？</h2>
                    <p><i class="fa-sharp fa-solid fa-calendar-days"></i>2023-08-25</p>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>賽局理論(Game Theory) 簡介</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>賽局理論(Game Theory)最初是研究策略遊戲的學問，因此又稱為對策論或博弈論，是經濟學的一個分支。</p>
                        <p>賽局理論是對決策者之間互動的分析。與傳統代表性決策者分析方式最大的不同之處，是在於將每位決策者對其他決策者行為的知識與預期納入分析架構。當我們極大化己方的報酬時，對手也正在極大化他的報酬。</p>
                        <p>賽局理論目前可以應用在經濟學、政治學、生物學、社會學、心理學等領域，研究遊戲或者賽局內的相互作用，不僅幫助人們理解人類和動物的決策行為，還能夠指導策略制定者在競爭和合作情境中做出更明智的選擇。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>靜態賽局 V.S. 動態賽局</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>在賽局中，如果參與者必須同時出招，或是即便有先後順序，卻無從得知對方的決策為何，就可以稱為「靜態賽局」。反之則是動態賽局，參與者彼此依照先後順序決策，在你來我往的過程中持續改變選擇。</p>
                        <p>因此，在分析決策時應該先判斷所身處的情境屬於靜態賽局或動態賽局，如果是後者，則必須推測其他參與者接下來的反應，藉此盤算自己當前的最佳行動。而最常被用來分析動態賽局的莫過於「決策樹」。</p>
                        <h4>靜態賽局舉例：</h4>
                        <p>剪刀 石頭 布</p>
                        <h4>動態賽局舉例：</h4>
                        <p>象棋、圍棋、井字遊戲</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>定和賽局 V.S. 零和賽局</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>定和賽局和零和賽局都是賽局理論中的不同概念，用於描述不同類型的競爭或合作情境。</p>
                        <h4>定和賽局(Cooperative Game)：</h4>
                        <p>在定和賽局中，參與者之間有可能進行合作，通過合作來實現更大的整體效益，而不僅僅是個體利益的競爭。在這種情況下，參與者可以進行協商，形成合作夥伴關係，共同分享成本和收益。定和賽局強調的是合作合理分配的方式，以實現整體最優解，而不是僅關注個體的利益。</p>
                        <h4>零和賽局(Zero-sum Game)：</h4>
                        <p>在零和賽局中，參與者的利益是互相對立的，一方的收益增加必然導致另一方的損失，總收益的增減之和為零。這種情況下，參與者之間的關係是競爭的，一方的成功就意味著其他參與者的失敗，資源的分配是固定的。經典的例子是棋類遊戲，其中一方贏得的分數等於另一方輸得的分數。</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>定和賽局：強調合作和合作夥伴關係，以實現整體效益的最大化，參與者通常可以進行協商，合理分配成本和收益</li>
                            <li><i class="fa-solid fa-check"></i>零和賽局：強調競爭，參與者的利益相互對立，一方的成功導致另一方的失敗，總資源的分配是固定的</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>帕雷托效率</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>帕雷托效率(Pareto efficiency)又稱帕雷托最適，是指資源分配的一種理想狀態。給定固有的一群人和可分配的資源，如果從一種分配狀態到另一種狀態的變化中，在沒有使任何人情況變壞的前提下，使得至少一個人變得更好，這就是帕雷托改善。帕雷托效率的狀態就是不可能再有更多的帕雷托改善的狀態；換句話說，不可能在不使任何其他人受損的情況下再改善某些人的情況。</p>
                        <p>帕雷托效率只是各種理想態標準中的「最低標準」。也就是說，一種狀態如果尚未達到帕雷托效率，那麼它一定是不理想的，因為還存在改進的餘地，可以在不損害任何人的前提下使某一些人的福利得到提高。但是一種達到了帕雷托效率的狀態並不一定真的很「理想」。比如說，假設一個社會裡只有一個百萬富翁和一個快餓死的乞丐，如果這個百萬富翁拿出自己財富的萬分之一，就可以使後者免於死亡。但是因為這樣無償的財富轉移損害了富翁的福利(假設這個乞丐沒有什麼可以用於報酬富翁的資源或服務)，所以進行這種財富轉移並不是帕雷托改善，而這個只有一個百萬富翁和一個餓死乞丐的社會可以被認為是帕雷托效率。</p>
                        <p>※ 這裡可以與古典功利主義(效益主義，是一種倫理學之理論類型，認為最正確的行為是將效益達到最大。)的標準做一比較。按功利主義的標準，理想的狀態是使人們的福利的總和極大化的狀態。如果一個富翁損失很少的福利，卻能夠極大地增加乞丐的福利，使其免於死亡，那麼社會的福利總和就增加了，所以從功利主義的角度看，這樣的財富轉移是一種改善，而最初的極端不平等狀態則是不理想的，因為它的福利總和較低。可以看到，帕雷托改善要求在提高某些人福利的時候不能減少任何一個人的福利，而功利主義則允許為了提高福利總和而減少一些人的福利。</p>
                        <p>經濟學理論認為，如果市場是完備的和充分競爭的，市場交換的結果一定是帕雷托效率的，並且會同時滿足以下 3 個條件：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>交換最優：即使再交易，個人也不能從中得到更大的利益。此時對任意兩個消費者，任意兩種商品的邊際替代率是相同的，且兩個消費者的效用同時得到極大化</li>
                            <li><i class="fa-solid fa-check"></i>生產最優：這個經濟體必須在自己的生產可能性邊界上。此時對任意兩個生產不同產品的生產者，需要投入的兩種生產要素的邊際技術替代率是相同的，且兩個生產者的產量同時得到極大化</li>
                            <li><i class="fa-solid fa-check"></i>產品混合最優：經濟體產出產品的組合必須反映消費者的偏好。此時任意兩種商品之間的邊際替代率必須與任何生產者在這兩種商品之間的邊際產品轉換率(MRT)相同</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如果一個經濟體不是帕雷托效率，則存在一些人可以在不使其他人的境況變壞的情況下使自己的境況變好的情形。普遍認為這樣低效的產出的情況是需要避免的，因此帕雷托效率是評價一個經濟體和政治方針的非常重要的標準。</p>
                        <p>但是，如同上面指出的，一個帕雷托效率的經濟系統只是在「最低」的意義上是「理想」的，並不能保證其中沒有貧困或嚴重的貧富差距。</p>
                        <p>著名的帕雷托法則(80/20法則)，則是由約瑟夫·朱蘭根據維弗雷多·帕雷托本人當年對義大利 20% 的人口擁有 80% 的財產的觀察而得推論出來的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>Nash 均衡</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>Nash均衡(Nash equilibrium)是賽局理論中一個很重要的概念。如果某一組策略是Nash均衡，任何一個參賽者單獨改變自己的策略並不會使自己的報酬提高。也就是說，如果別人都玩Nash均衡策略時，我會發現這個均衡策略會是我的最佳的選擇(也就是最適回應，best response)。當所有人都玩這一個Nash均衡策略時，沒有人會想要悖離(deviate)。</p>
                        <p>換言之，只要有任何參賽者能因為偏離(deviate)目前所採用的策略而獲利(better off)，則此策略組合並非Nash均衡。</p>
                        <p>Nash均衡是基於某些對人的行為的假設。例如，所有參賽人皆清楚的了解對手有哪些行動，並且就所有可能的行動中選出一個最適的反應。而這些都是所有人的共同知識(common knowledge)。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>囚徒困境</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>囚徒困境是賽局理論裡非零和賽局中具代表性的例子，反映個人最佳選擇並非群體的最佳選擇，且在一個群體中，個人做出理性選擇卻往往導致集體的非理性。雖然這是一個理論上的情境，但現實中的價格競爭等也會出現類似情況。</p>
                        <p>單次發生的囚犯困境，和多次重複的囚犯困境結果不會一樣。</p>
                        <p>在重複的囚犯困境中，賽局被反覆地進行。因而參與者都有機會去「懲罰」另一個參與者前一回合的不合作行為。這時，合作可能會作為均衡的結果出現。欺騙行為被受到懲罰的威脅所制止，從而導向一個較好的的結果。當次數接近無限，納許均衡趨向於帕雷托效率。</p>
                        <p>當囚徒們可以互相溝通時，彼此合作可為全體帶來最佳利益(縮短刑期)；但在無法溝通時，出賣同夥可為自己帶來更多的利益(無罪開釋)，同時同夥把自己招出來可為他帶來利益。所以，互相出賣，反而能獲得最大利益。</p>
                        <h4>經典的囚犯困境</h4>
                        <p>警方逮捕甲、乙兩名嫌疑犯，但沒有足夠證據指控二人有罪。於是警方分開囚禁嫌疑犯，分別和二人見面，並向雙方提供以下相同的選擇：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>若一人認罪並作證檢控對方(相關術語稱「背叛」對方)，而對方保持沉默，此人將即時獲釋，沉默者將判監 10 年</li>
                            <li><i class="fa-solid fa-check"></i>若二人都保持沉默(相關術語稱互相「合作」)，則二人同樣判監半年</li>
                            <li><i class="fa-solid fa-check"></i>若二人都互相檢舉(互相「背叛」)，則二人同樣判監 5 年</li>
                        </ul>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>乙沉默(合作)</th>
                                    <th>乙認罪(背叛)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>甲沉默(合作)</td>
                                    <td>二人同服刑半年</td>
                                    <td>甲服刑 10 年；乙即時獲釋</td>
                                </tr>
                                <tr>
                                    <td>甲認罪(背叛)</td>
                                    <td>甲即時獲釋；乙服刑 10 年</td>
                                    <td>二人同服刑 5 年</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>如同賽局理論的其他例證，囚犯困境假定每個參與者(即「囚徒」)都是利己的，即都尋求最大自身利益，而不關心另一參與者的利益。參與者某一策略所得利益，如果在任何情況下都比其他策略要低的話，此策略稱為「嚴格劣勢」，理性的參與者絕不會選擇。另外，沒有任何其他力量干預個人決策，參與者可完全按照自己意願選擇策略。</p>
                        <p>囚徒到底應該選擇哪一項策略，才能將自己個人的刑期縮至最短？兩名囚徒由於隔絕監禁，並不知道對方選擇；而即使他們能交談，還是未必能夠盡信對方不會反口。就個人的理性選擇而言，檢舉背叛對方所得刑期，總比沉默要來得低。試設想困境中兩名理性囚徒會如何作出選擇：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>若對方沉默、我背叛會讓我獲釋，所以會選擇背叛</li>
                            <li><i class="fa-solid fa-check"></i>若對方背叛指控我，我也要指控對方才能得到較低的刑期，所以也是會選擇背叛</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>二人面對的情況一樣，所以二人的理性思考都會得出相同的結論——選擇背叛。背叛是兩種策略之中的支配性策略。因此，這場賽局中唯一可能達到的納許均衡，就是雙方參與者都背叛對方，結果二人同樣服刑5年。</p>
                        <p>這場賽局的納許均衡，顯然不是顧及團體利益的帕雷托效率解決方案。以全體利益而言，如果兩個參與者都合作保持沉默，兩人都只會被判刑半年，總體利益更高，結果也比兩人背叛對方、判刑5年的情況較佳。但根據以上假設，二人均為理性的個人，且只追求自己個人利益。均衡狀況會是兩個囚徒都選擇背叛，結果二人判監均比合作為高，總體利益較合作為低。這就是「困境」所在。例子有效地證明了：非零和賽局中，帕雷托效率和納許均衡是互相衝突的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>固定局數的囚徒困境</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>概括而言囚犯困境進行第一局後會出現以下兩種情況：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>甲在第一局中被乙指控，即會在第二局指控乙，最終導致，甲即時獲釋，乙服刑 10 年或二人同服刑 5 年</li>
                            <li><i class="fa-solid fa-check"></i>雙方均保持沉默，即會建立互信的關係，最終導致，二人同服刑半年</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>但互信的關係並非牢不可破，這一點也可以被利用，即甲，乙在第一局中共同選擇沉默而贏得對方的信任，但甲或乙中的一人在獲得對方的信任後指控對方而獲得自身最大的利益即自身即時獲釋，但對方將服刑 10 年。這是一個以犧牲對方利益而獲得自身最大利益的一種策略。</p>
                        <p>假設兩個囚徒均欲利用此策略，並將局數推演為十局，那麼就會出現如下的情況：在第一局到第九局的過程中雙方均會保持沉默，以期望建立互信關係，並在第十局指控對方。這將最終導致二人同服刑5年。</p>
                        <p>再一次假設，雙方都明確對方會使用與自己同樣的策略，即知道對方會在第十局中指控自己。這樣，在第九局時兩者間的信任關係的建立即是沒有意義的。如此類推，第八局到第一局中信任關係的建立也是沒有意義的，即是十局都會互相背叛，也就是納許均衡。也可推論，在如此的情況下，只有在囚犯困境的局數在不肯定的情況下(即雙方均不知道進行的局數)，才會出現互相保持沉默以獲得信任關係的現象。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>囚徒困境的一般形式</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>整理囚犯困境的基本賽局結構，可更清楚地分析囚犯困境。實驗經濟學常用這種賽局的一般形式分析各種論題。以下是實現一般形式的其中一例：</p>
                        <p>假設有兩個參與者和一個莊家。參與者每人有一式兩張卡片，各印有「合作」和「背叛」。參與者各把一張卡片文字面朝下，放在莊家面前。文字面朝下排除了參與者知道對方選擇的可能性。然後，莊家翻開兩個參與者卡片，根據以下規則支付利益：</p>
                    </div>
                    <div class="article-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <ul>
                            <li><i class="fa-solid fa-check"></i>一人背叛、一人合作：背叛者得 5 分(背叛誘惑)，合作者 0 分(受騙支付)</li>
                            <li><i class="fa-solid fa-check"></i>二人都合作：各得 3 分(合作報酬)</li>
                            <li><i class="fa-solid fa-check"></i>二人都合作：各得 3 分(合作報酬)</li>
                        </ul>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>用支付矩陣表格展示支付如下(以紅色和藍色分別表示二名參與者)</p>
                        <p>一般形式囚犯困境的支付矩陣：</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th style="color: red;">合作</th>
                                    <th style="color: red;">背叛</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="color: blue;">合作</td>
                                    <td><span style="color: blue;">3</span>：<span style="color: red;">3</span></td>
                                    <td><span style="color: blue;">0</span>：<span style="color: red;">5</span></td>
                                </tr>
                                <tr>
                                    <td style="color: blue;">背叛</td>
                                    <td><span style="color: blue;">5</span>：<span style="color: red;">0</span></td>
                                    <td><span style="color: blue;">1</span>：<span style="color: red;">1</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以「T、R、P、S」符號表示：</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th style="color: red;">合作</th>
                                    <th style="color: red;">背叛</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="color: blue;">合作</td>
                                    <td><span style="color: blue;">R</span>：<span style="color: red;">R</span></td>
                                    <td><span style="color: blue;">S</span>：<span style="color: red;">T</span></td>
                                </tr>
                                <tr>
                                    <td style="color: blue;">背叛</td>
                                    <td><span style="color: blue;">T</span>：<span style="color: red;">S</span></td>
                                    <td><span style="color: blue;">P</span>：<span style="color: red;">P</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>以「勝－負」表示</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th style="color: red;">合作</th>
                                    <th style="color: red;">背叛</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="color: blue;">合作</td>
                                    <td><span style="color: blue;">勝</span>：<span style="color: red;">勝</span></td>
                                    <td><span style="color: blue;">大負</span>：<span style="color: red;">大勝</span></td>
                                </tr>
                                <tr>
                                    <td style="color: blue;">背叛</td>
                                    <td><span style="color: blue;">大勝</span>：<span style="color: red;">大負</span></td>
                                    <td><span style="color: blue;">負</span>：<span style="color: red;">負</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>簡單賽局獲得的點數可以得出一些一般化的結論。</p>
                        <p>T、R、P、S符號表：</p>
                    </div>
                    <div class="article-table" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <table>
                            <thead>
                                <tr>
                                    <th>符號</th>
                                    <th>分數</th>
                                    <th>英文</th>
                                    <th>中文(非術語)</th>
                                    <th>解釋</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>T</td>
                                    <td>5</td>
                                    <td>Temptation</td>
                                    <td>背叛誘惑</td>
                                    <td>單獨背叛成功所得</td>
                                </tr>
                                <tr>
                                    <td>R</td>
                                    <td>3</td>
                                    <td>Reward</td>
                                    <td>合作報酬</td>
                                    <td>共同合作所得</td>
                                </tr>
                                <tr>
                                    <td>P</td>
                                    <td>1</td>
                                    <td>Punishment</td>
                                    <td>背叛懲罰</td>
                                    <td>共同背叛所得</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>0</td>
                                    <td>Suckers</td>
                                    <td>受騙支付</td>
                                    <td>被單獨背叛所獲</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <p>若以T(Temptation) = 背叛誘惑，R(Reward) = 合作報酬，P(Punishment) = 背叛懲罰，S(Suckers) = 受騙支付，以個人選擇得分而言，可得出以下不等式：</p>
                        <p>T > R > P > S (5 > 3 > 1 > 0)</p>
                        <p>若以整體獲分而言，將得出以下不等式：</p>
                        <p>2R > T + S or 2R > 2P (2 × 3 > 5 + 0或 2 × 3 > 2 x 1；合作 2 人共得 6 分，比起互相背叛的共得 2 分及單獨背叛的共得 5 分，顯然合作獲分比背叛高。合作在團體而言是支配性策略)</p>
                        <p>而重複賽局或重複的囚犯困境將會使參與者從注重 T > R > P > S 轉變成注重 2R > T + S，就是說將使參與者脫離困境。</p>
                        <p>以上理論是道格拉斯·霍夫施塔特創建的。</p>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-detail" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                    <h3>參考資料</h3>
                    <div class="article-detailLine"></div>
                    <div class="article-txt" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="150" data-aos-duration="1000">
                        <a class="article-reference" href="http://cpanel-199-19.nctu.edu.tw/~jinlihu/gameintro.pdf" target="_blank"><i class="fa-solid fa-pen-to-square"></i>賽局理論初探</a>
                        <a class="article-reference" href="http://210.60.110.11/reading/wp-content/uploads/2013/09/10133007.pdf" target="_blank"><i class="fa-solid fa-pen-to-square"></i>賽局理論</a>
                        <a class="article-reference" href="https://zh.wikipedia.org/zh-tw/%E5%9B%9A%E5%BE%92%E5%9B%B0%E5%A2%83" target="_blank"><i class="fa-solid fa-pen-to-square"></i>維基百科 - 囚犯困境</a>
                        <a class="article-reference" href="https://zh.wikipedia.org/zh-tw/%E5%B8%95%E7%B4%AF%E6%89%98%E6%95%88%E7%8E%87" target="_blank"><i class="fa-solid fa-pen-to-square"></i>維基百科 - 帕雷托效率</a>
                        <a class="article-reference" href="https://zh.wikipedia.org/zh-tw/%E5%8A%9F%E5%88%A9%E4%B8%BB%E7%BE%A9" target="_blank"><i class="fa-solid fa-pen-to-square"></i>維基百科 - 功利主義</a>
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