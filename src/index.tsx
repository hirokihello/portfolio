// import { H2, View, ActionTree } from "../src/dist/index";
import { H2, ActionTree, View } from "@hirokihello/hydrogen";
import "./layout/index.scss";

type State = typeof state;
type Actions = typeof actions;

const state = {};

const actions: ActionTree<State> = {};

const view: View<State, Actions> = () => {
    const a = (
      <main class="main">
        <header class="header"><img class="header-img" src="./static/hiroki.jpg" alt="ひろき" />
            <h1 class="header-name">HirokiHello</h1>
            <p class="header-p">Engineer</p>
        </header>
        <section class="about">
            <h2>About Me</h2>
            <p>hirokihelloです。都内の大学に通いながらインフラからフロントまでやってます。最近はFARGATEやったりcdkやったりとAWS触ってることが多いです。</p>
            <p>このサイト自体はnuxt、インフラはterraform版とCDK版の両方がgithubにあるので興味ある人は見てみてください〜</p>
        </section>
        <section class="portfolio">
            <h2>Portfolio</h2>
            <ul>
                <li><a href="https://github.com/hirokihello/portfolio-infra-terraform">terraformで作ったこのサイトのインフラ基盤。</a>
                    <p>circleciでmasterブランチにpushするだけで簡単にあなたもs3+cloudfrontでhttpsの独自ドメインでサイトが公開できます</p>
                </li>
                <li><a href="https://github.com/hirokihello/portfolio-infra">cdkで作ったこのサイトのインフラ基盤。</a>
                    <p>terraformのバージョンと全く同じことができます</p>
                </li>
                <li><a href="https://github.com/hirokihello/hhsh">ruby製の簡易shell。</a>
                    <p>shellの仕組みを知りたくなって自作した。cdやlsなど簡単なコマンドをsystem callを呼び出して実行できる。パイプも一応実装されている。 shellの簡単な動きを知りたい人にはおすすめかもしれないが、学習のためにrubyの原始的なメソッドをわざわざ使ったので読みにくいコードになっている。 いつかリファクタする(多分)
                    </p>
                </li>
                <li><a href="https://github.com/hirokihello/portfolio">このサイト本体のスクリプト</a>
                    <p>このサイトはnuxtで作られているが1ページしかないのでnuxtを採用している意味は全くない。ドキュメント触るついでにnuxtを採用しただけなのでほとんど手がつけられていない。</p>
                </li>
            </ul>
        </section>
        <section class="profile">
            <h2>Profile</h2>
            <ul>
                <li><span>職業</span>大学生：東京大学3年</li>
                <li><span>実務経験</span>2019/2~ UUUM株式会社 - 社外向けサービスのエンジニアを担当</li>
                <li><span>好きな言語</span>Ruby | javascript | Japanese</li>
                <li><span>好きなフレームワーク</span>Ruby On Rails | Synatra | Vuejs | React</li>
                <li><span>お勉強してるやつ</span>Python | Django | Nuxtjs | Css | SQL | Flux</li>
                <li><span>やったことあるインフラ</span>AWS(ECS, EC2, RDS, ECR, ALB, route53, cloudwatch, s3...) | Terraform | Teleport | Ansible | circleci | gulp | CDK</li>
                <li><span>好きな開発環境</span>Docker</li>
                <li><span>やったことある開発環境</span>Vagrant | Docker | Local</li>
                <li><span>今特に勉強していること</span>Django とか最近やってます</li>
            </ul>
        </section>
        <section class="sns">
            <h2>フォロー</h2><a href="https://twitter.com/maxyasuda/" target="_blank" rel="noopener"><i class="icon ion-logo-twitter"></i></a><a href="https://github.com/hirokihello/" target="_blank" rel="noopener"><i class="icon ion-logo-github"></i></a></section>
        <section
            class="mail">
            <h2>👉 お問い合わせ</h2>
            <p>仕事や取材のご相談はこちらからお気軽に</p>
            <p class="adress">iammyeye1[at]gmail.com</p>
            <p class="at">[at]を@に置換して送信してください</p>
            </section>
            <footer class="footer"><span>© 2019 HIROKIHELLO</span></footer>
      </main>
              );
    return a;
};

new H2<State>({
  el: "#app",
  state,
  view,
  actions
});
