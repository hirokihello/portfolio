<template lang="pug">
  main.main
    header.header
      img(src="../static/hiroki.jpg" alt="ひろき" class="header-img")
      h1.header-name HirokiHello
      p.header-p Engineer
    section.about
      h2 About Me
      p hirokihelloです。都内の大学に通いながらインフラからフロントまでやってます。最近はFARGATEやったりcdkやったりとAWS触ってることが多いです。
    section.profile
      h2 Profile
      ul
        li
          span 職業
          | 大学生：東京大学在学
        li
          span 実務経験
          | 2019/2~ UUUM株式会社 - 社外向けサービスのエンジニアを担当
        li
          span 好きな言語
          | Ruby | javascript | Japanese
        li
          span 好きなフレームワーク
          | Ruby On Rails | Synatra | Vuejs
        li
          span
            | お勉強してるやつ
          | Python | Django | Nuxtjs | Css | SQL
        li
          span
            | やったことあるインフラ
          | AWS(ECS, EC2, RDS, ECR, ALB, route53, cloudwatch) | Terraform | Teleport | Ansible | circleci | gulp
        li
          span
            | 好きな開発環境
          | Docker
        li
          span
            | やったことある開発環境
          | Vagrant | Docker | Local
        li
          span
            | 今特に勉強していること
          |  Docker | React | Django | Javascript
    section.sns
      h2 📣 フォロー
      a(href='https://twitter.com/maxyasuda/', target='_blank', rel='noopener')
        i.icon.ion-logo-twitter
      a(href='https://github.com/hirokihello/', target='_blank', rel='noopener')
        i.icon.ion-logo-github
    section.mail
      h2 👉 お問い合わせ
      p 仕事や取材のご相談はこちらからお気軽に
      p.adress iammyeye1[at]gmail.com
      p.at [at]を@に置換して送信してください
    footer.footer
      span © 2019 HIROKIHELLO
</template>

<script>

export default {
}
</script>

<style>
body, html {
  font-family: -apple-system,BlinkMacSystemFont,\.SFNSDisplay-Regular,"Noto Sans JP", sans-serif;
  background-color: #fff;
  color: #333;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
}

a {
  color: #08c;
  text-decoration: underline;
}

.main {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.header-name {
  font-size: 24px;
  font-weight: 900;
}

.header-img {
  width: 160px;
  height: 160px;
  display: block;
  border-radius: 50%;
  margin: 0 auto 20px;
}

.header-p {
  font-size: 16px;
  color: #999;
  line-height: 1;
}

.about {
  margin-bottom: 60px;
}

.about > p {
  font-size: 16px;
  line-height: 1.6;
}

.profile {
  margin-bottom: 50px;
}

.profile ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.profile li {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
}

.profile li > span {
  color: #999;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 6px;
}

.sns {
  margin-bottom: 60px;
}

.sns > a {
  font-size: 32px;
  color: #333;
  text-decoration: none;
  margin-right: 14px;
  line-height: 1;
}

.mail {
  margin-bottom: 60px;
}

.mail > .adress {
  font-size: 24px;
  font-weight: 700;
}

.mail > .at {
  font-size: 12px;
  color: #999;
}

.footer > span {
  font-size: 12px;
  color: #999;
  text-align: right;
  display: block;
}

</style>
