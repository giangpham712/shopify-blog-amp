import Grid from "./styles/Grid";
import Blog from "./styles/Blog";

export default function Layout({ children }) {
  return (
    <>
      <Grid/>
      <Blog/>
      <style jsx global>{`
        .back-cover {
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -ms-background-size: cover;
            -o-background-size: cover;
            background-size: cover
        }
        
        .circle-shadow-xs {
            -webkit-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -ms-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            -o-box-shadow: 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 1px 2px rgba(0, 0, 0, 0.15)
        }
        
        .circle-shadow-sm {
            -webkit-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 2px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 2px 4px rgba(0, 0, 0, 0.5)
        }
        
        .circle-shadow-md {
            -webkit-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 4px 6px rgba(0, 0, 0, 0.5);
            box-shadow: 4px 6px rgba(0, 0, 0, 0.5)
        }
        
        .box-shadow-xs {
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -ms-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            -o-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15)
        }
        
        .box-shadow-sm {
            -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -ms-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            -o-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
        }
        
        .border-rad-sm {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -ms-border-radius: 2px;
            -o-border-radius: 2px;
            border-radius: 2px
        }
        
        .border-rad-md {
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            border-radius: 4px
        }
        
        .border-rad-lg {
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            -ms-border-radius: 6px;
            -o-border-radius: 6px;
            border-radius: 6px
        }
        
        .transition-very-fast {
            -webkit-transition: all 0.15s;
            -moz-transition: all 0.15s;
            -ms-transition: all 0.15s;
            -o-transition: all 0.15s;
            transition: all 0.15s
        }
        
        .transition-fast {
            -webkit-transition: all 0.35s;
            -moz-transition: all 0.35s;
            -ms-transition: all 0.35s;
            -o-transition: all 0.35s;
            transition: all 0.35s
        }
        
        .hed_title_text {
            font: normal 44px/48px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .hed_title_text {
                font: normal 28px/30px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
                letter-spacing: 0px
            }
        }
        
        .dek_title_text {
            font: normal 20px/24px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .dek_title_text {
                font: normal 14px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 0px
            }
        }
        
        .page_title_text {
            font: normal 34px/38px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .page_title_text {
                font: normal 24px/26px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
                letter-spacing: 0px
            }
        }
        
        .section_title_text {
            font: normal 30px/34px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .section_title_text {
                font: normal 20px/22px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
                letter-spacing: 0px
            }
        }
        
        .module_title_text {
            font: normal 22px/26px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .module_title_text {
                font: normal 16px/18px TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
                letter-spacing: 0px
            }
        }
        
        .content_text {
            font: normal 16px/22px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .content_text {
                font: normal 14px/20px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 0px
            }
        }
        
        .caption_text {
            font: normal 14px/18px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .caption_text {
                font: normal 12px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 0px
            }
        }
        
        .caption_s_text {
            font: normal 12px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 0px
        }
        
        @media (max-width: 768px) {
            .caption_s_text {
                font: normal 10px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 0px
            }
        }
        
        .callout_text {
            font: bold 14px/16px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 2px
        }
        
        @media (max-width: 768px) {
            .callout_text {
                font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 2px
            }
        }
        
        .callout_s_text,
        .btn,
        .btn--secondary,
        .rte .btn--secondary,
        .btn-main,
        .rte .btn-main {
            font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            letter-spacing: 2px
        }
        
        @media (max-width: 768px) {
            .callout_s_text,
            .btn,
            .btn--secondary,
            .rte .btn--secondary,
            .btn-main,
            .rte .btn-main {
                font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
                letter-spacing: 2px
            }
        }
        
        .animated {
            -webkit-animation-duration: 0.5s;
            animation-duration: 0.5s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both
        }
        
        .animated.infinite {
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite
        }
        
        .animated.hinge {
            -webkit-animation-duration: 2s;
            animation-duration: 2s
        }
        
        .delay-0s {
            -moz-animation-delay: 0;
            -webkit-animation-delay: 0;
            animation-delay: 0
        }
        
        .delay-025s {
            -moz-animation-delay: .25s;
            -webkit-animation-delay: .25s;
            animation-delay: .25s;
            opacity: 0
        }
        
        .delay-05s {
            -moz-animation-delay: .5s;
            -webkit-animation-delay: .5s;
            animation-delay: .5s;
            opacity: 0
        }
        
        .delay-075s {
            -moz-animation-delay: .75s;
            -webkit-animation-delay: .75s;
            animation-delay: .75s;
            opacity: 0
        }
        
        .delay-1s {
            -moz-animation-delay: 1s;
            -webkit-animation-delay: 1s;
            animation-delay: 1s;
            opacity: 0
        }
        
        .animate_right,
        .animate_left,
        .animate_up,
        .animate_down {
            opacity: 0
        }
        
        .ie .animated,
        .ie .animate_right,
        .ie .animate_left,
        .ie .hsContent,
        .ie #slide-1 .animated {
            opacity: 1 
        }
        
        .ie delay-025s,
        .ie .delay-0s,
        .ie .delay-025s,
        .ie .delay-05s,
        .ie .delay-075s,
        .ie .delay-1s {
            opacity: 1 
        }
        
        .ie select {
            background-image: none 
        }
        
        @media only screen and (max-width: 768px) {
            .delay-0s,
            .delay-025s,
            .delay-05s,
            .delay-075s,
            .delay-1s,
            .animate_right,
            .animate_left,
            .animate_up,
            .animate_down {
                opacity: 1
            }
        }
        
        .nav-bar {
            height: 40px
        }
        
        .nav-bar li {
            padding-left: 13px;
            padding-right: 13px;
            text-transform: uppercase
        }
        
        .nav-bar li .site-nav__link {
            padding: 0 5px
        }
        
        .nav-bar li .site-nav__link:hover {
            border-bottom: 1px solid #fff;
            border-color: inherit;
            cursor: auto
        }
        
        ul.site-nav__dropdown li {
            display: inline
        }
        
        .site-header__search form {
            position: relative;
            height: 60px;
            overflow: hidden;
            -webkit-transition: transform .2s linear;
            -moz-transition: transform .2s linear;
            -o-transition: transform .2s linear;
            transition: transform .2s linear;
            margin: auto;
            -webkit-backface-visibility: hidden;
            background: rgba(0, 0, 0, 0)
        }
        
        .site-header__search form.opened {
            width: 330px;
            border-bottom: 2px solid #c2c2c2
        }
        
        .site-header__search form.opened:before {
            position: fixed;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.8)
        }
        
        .site-header__search input[type="search"] {
            position: absolute;
            top: 0;
            right: 28px;
            height: 60px;
            width: 0;
            float: left;
            font-size: 1.5em;
            background-color: #fff;
            outline: none;
            border: none;
            padding-left: 20px;
            color: #4d4d4d
        }
        
        .site-header__search form.opened input[type="search"] {
            text-align: center;
            width: 100%
        }
        
        .site-header__search button {
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 60px;
            background: #fff;
            border: none;
            border-radius: 30px;
            color: #4d4d4d;
            font-size: 1.3em;
            outline: none;
            cursor: pointer
        }
        
        .site-header__search form.opened button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            .nav-bar .wrapper {
                padding: 0
            }
        }
        
        @font-face {
            font-family: 'Avenir Next Regular';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.eot?v=5819296855032654131");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.eot?v=5819296855032654131#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.woff?v=13873746074351927337") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-Regular.ttf?613130") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap
        }
        
        @font-face {
            font-family: 'Avenir Next Demi';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.eot?v=17062572588302327893");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.eot?v=17062572588302327893#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.woff2?v=12146958317600131592") format("woff2"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.woff?v=7506880630176634936") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.ttf?v=11980951721996759281") format("truetype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/AvenirNext-DemiBold.svg?v=10414489086591773921#AvenirNext-DemiBold") format("svg");
            font-weight: 100;
            font-style: normal;
            font-display: swap
        }
        
        @font-face {
            font-family: 'icons';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.eot?v=17878346325120579912");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.eot?v=17878346325120579912#iefix") format("embedded-opentype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.woff?v=15139035312530068585") format("woff"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.ttf?v=7804150951971959725") format("truetype"), url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/icons.svg?v=11057981606795097262#timber-icons") format("svg");
            font-weight: normal;
            font-style: normal;
            font-display: swap
        }
        
        .clearfix {
            *zoom: 1
        }
        
        .clearfix:after {
            content: '';
            display: table;
            clear: both
        }
        
        *,
        input,
        :before,
        :after {
            box-sizing: border-box
        }
        
        html,
        body {
            padding: 0;
            margin: 0
        }
        
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section,
        summary {
            display: block
        }
        
        audio,
        canvas,
        progress,
        video {
            display: inline-block;
            vertical-align: baseline
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            height: auto
        }
        
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none
        }
        
        .show {
            display: block 
        }
        
        .hide {
            display: none 
        }
        
        .text-left {
            text-align: left 
        }
        
        .text-right {
            text-align: right 
        }
        
        .text-center {
            text-align: center 
        }
        
        .text-justify {
            text-align: justify 
        }
        
        .left {
            float: left 
        }
        
        .right {
            float: right 
        }
        
        .p-xs {
            padding: 4px 
        }
        
        .p-sm {
            padding: 8px 
        }
        
        .p {
            padding: 16px 
        }
        
        .p-md {
            padding: 24px 
        }
        
        .p-lg {
            padding: 32px 
        }
        
        .p-xlg {
            padding: 48px 
        }
        
        .p-t-xs {
            padding-top: 4px 
        }
        
        .p-t-sm {
            padding-top: 8px 
        }
        
        .p-t {
            padding-top: 16px 
        }
        
        .p-t-md {
            padding-top: 24px 
        }
        
        .p-t-lg {
            padding-top: 32px 
        }
        
        .p-t-xlg {
            padding-top: 48px 
        }
        
        .p-b-xs {
            padding-bottom: 4px 
        }
        
        .p-b-sm {
            padding-bottom: 8px 
        }
        
        .p-b {
            padding-bottom: 16px 
        }
        
        .p-b-md {
            padding-bottom: 24px 
        }
        
        .p-b-lg {
            padding-bottom: 32px 
        }
        
        .p-b-xlg {
            padding-bottom: 48px 
        }
        
        .p-l-xs {
            padding-left: 4px 
        }
        
        .p-l-sm {
            padding-left: 8px 
        }
        
        .p-l {
            padding-left: 16px 
        }
        
        .p-l-md {
            padding-left: 24px 
        }
        
        .p-l-lg {
            padding-left: 32px 
        }
        
        .p-l-xlg {
            padding-left: 48px 
        }
        
        .p-r-xs {
            padding-right: 4px 
        }
        
        .p-r-sm {
            padding-right: 8px 
        }
        
        .p-r {
            padding-right: 16px 
        }
        
        .p-r-md {
            padding-right: 24px 
        }
        
        .p-r-lg {
            padding-right: 32px 
        }
        
        .p-r-xlg {
            padding-right: 48px 
        }
        
        .p-v-xs {
            padding-top: 4px ;
            padding-bottom: 4px 
        }
        
        .p-v-sm {
            padding-top: 8px ;
            padding-bottom: 8px 
        }
        
        .p-v {
            padding-top: 16px ;
            padding-bottom: 16px 
        }
        
        .p-v-md {
            padding-top: 24px ;
            padding-bottom: 24px 
        }
        
        .p-v-lg {
            padding-top: 32px ;
            padding-bottom: 32px 
        }
        
        .p-v-xlg {
            padding-top: 48px ;
            padding-bottom: 48px 
        }
        
        .no-padding-h {
            padding-right: 4px ;
            padding-left: 4px 
        }
        
        .p-h-xs {
            padding-right: 4px ;
            padding-left: 4px 
        }
        
        .p-h-sm {
            padding-right: 8px ;
            padding-left: 8px 
        }
        
        .p-h {
            padding-right: 16px ;
            padding-left: 16px 
        }
        
        .p-h-md {
            padding-right: 24px ;
            padding-left: 24px 
        }
        
        .p-h-lg {
            padding-right: 32px ;
            padding-left: 32px 
        }
        
        .p-h-xlg {
            padding-right: 48px ;
            padding-left: 48px 
        }
        
        .no-margin {
            margin: 0px 
        }
        
        .m-xs {
            margin: 4px 
        }
        
        .m-sm {
            margin: 8px 
        }
        
        .m {
            margin: 16px 
        }
        
        .m-md {
            margin: 24px 
        }
        
        .m-lg {
            margin: 32px 
        }
        
        .m-xlg {
            margin: 48px 
        }
        
        .m-t-xs {
            margin-top: 4px 
        }
        
        .m-t-sm {
            margin-top: 8px 
        }
        
        .m-t {
            margin-top: 16px 
        }
        
        .m-t-md {
            margin-top: 24px 
        }
        
        .m-t-lg {
            margin-top: 32px 
        }
        
        .m-t-xlg {
            margin-top: 48px 
        }
        
        .m-t-1x {
            margin-top: 100px 
        }
        
        .m-b-xs {
            margin-bottom: 4px 
        }
        
        .m-b-sm {
            margin-bottom: 8px 
        }
        
        .m-b {
            margin-bottom: 16px 
        }
        
        .m-b-md {
            margin-bottom: 24px 
        }
        
        .m-b-lg {
            margin-bottom: 32px 
        }
        
        .m-b-xlg {
            margin-bottom: 48px 
        }
        
        .m-l-xs {
            margin-left: 4px 
        }
        
        .m-l-sm {
            margin-left: 8px 
        }
        
        .m-l {
            margin-left: 16px 
        }
        
        .m-l-md {
            margin-left: 24px 
        }
        
        .m-l-lg {
            margin-left: 32px 
        }
        
        .m-l-xlg {
            margin-left: 48px 
        }
        
        .m-r-xs {
            margin-right: 4px 
        }
        
        .m-r-sm {
            margin-right: 8px 
        }
        
        .m-r {
            margin-right: 16px 
        }
        
        .m-r-md {
            margin-right: 24px 
        }
        
        .m-r-lg {
            margin-right: 32px 
        }
        
        .m-r-xlg {
            margin-right: 48px 
        }
        
        .no-margin-v {
            margin-top: 0px ;
            margin-bottom: 0px 
        }
        
        .m-v-xs {
            margin-top: 4px ;
            margin-bottom: 4px 
        }
        
        .m-v-sm {
            margin-top: 8px ;
            margin-bottom: 8px 
        }
        
        .m-v {
            margin-top: 16px ;
            margin-bottom: 16px 
        }
        
        .m-v-md {
            margin-top: 24px ;
            margin-bottom: 24px 
        }
        
        .m-v-lg {
            margin-top: 32px ;
            margin-bottom: 32px 
        }
        
        .m-v-xlg {
            margin-top: 48px ;
            margin-bottom: 48px 
        }
        
        .no-margin-h {
            margin-right: 0px ;
            margin-left: 0px 
        }
        
        .m-h-xs {
            margin-right: 4px ;
            margin-left: 4px 
        }
        
        .m-h-sm {
            margin-right: 8px ;
            margin-left: 8px 
        }
        
        .m-h {
            margin-right: 16px ;
            margin-left: 16px 
        }
        
        .m-h-md {
            margin-right: 24px ;
            margin-left: 24px 
        }
        
        .m-h-lg {
            margin-right: 32px ;
            margin-left: 32px 
        }
        
        .m-h-xlg {
            margin-right: 48px ;
            margin-left: 48px 
        }
        
        .b-a {
            border: 1px solid #dddee0
        }
        
        [class*="push--"] {
            position: relative
        }
        
        .push--one-whole {
            left: 100%
        }
        
        .push--one-half {
            left: 50%
        }
        
        .push--one-third {
            left: 33.333%
        }
        
        .push--two-thirds {
            left: 66.666%
        }
        
        .push--one-quarter {
            left: 25%
        }
        
        .push--two-quarters {
            left: 50%
        }
        
        .push--three-quarters {
            left: 75%
        }
        
        .push--one-fifth {
            left: 20%
        }
        
        .push--two-fifths {
            left: 40%
        }
        
        .push--three-fifths {
            left: 60%
        }
        
        .push--four-fifths {
            left: 80%
        }
        
        .push--one-sixth {
            left: 16.666%
        }
        
        .push--two-sixths {
            left: 33.333%
        }
        
        .push--three-sixths {
            left: 50%
        }
        
        .push--four-sixths {
            left: 66.666%
        }
        
        .push--five-sixths {
            left: 83.333%
        }
        
        .push--one-eighth {
            left: 12.5%
        }
        
        .push--two-eighths {
            left: 25%
        }
        
        .push--three-eighths {
            left: 37.5%
        }
        
        .push--four-eighths {
            left: 50%
        }
        
        .push--five-eighths {
            left: 62.5%
        }
        
        .push--six-eighths {
            left: 75%
        }
        
        .push--seven-eighths {
            left: 87.5%
        }
        
        .push--one-tenth {
            left: 10%
        }
        
        .push--two-tenths {
            left: 20%
        }
        
        .push--three-tenths {
            left: 30%
        }
        
        .push--four-tenths {
            left: 40%
        }
        
        .push--five-tenths {
            left: 50%
        }
        
        .push--six-tenths {
            left: 60%
        }
        
        .push--seven-tenths {
            left: 70%
        }
        
        .push--eight-tenths {
            left: 80%
        }
        
        .push--nine-tenths {
            left: 90%
        }
        
        .push--one-twelfth {
            left: 8.333%
        }
        
        .push--two-twelfths {
            left: 16.666%
        }
        
        .push--three-twelfths {
            left: 25%
        }
        
        .push--four-twelfths {
            left: 33.333%
        }
        
        .push--five-twelfths {
            left: 41.666%
        }
        
        .push--six-twelfths {
            left: 50%
        }
        
        .push--seven-twelfths {
            left: 58.333%
        }
        
        .push--eight-twelfths {
            left: 66.666%
        }
        
        .push--nine-twelfths {
            left: 75%
        }
        
        .push--ten-twelfths {
            left: 83.333%
        }
        
        .push--eleven-twelfths {
            left: 91.666%
        }
        
        @media only screen and (min-width: 481px) and (max-width: 768px) {
            .push--medium--one-whole {
                left: 100%
            }
            .push--medium--one-half {
                left: 50%
            }
            .push--medium--one-third {
                left: 33.333%
            }
            .push--medium--two-thirds {
                left: 66.666%
            }
            .push--medium--one-quarter {
                left: 25%
            }
            .push--medium--two-quarters {
                left: 50%
            }
            .push--medium--three-quarters {
                left: 75%
            }
            .push--medium--one-fifth {
                left: 20%
            }
            .push--medium--two-fifths {
                left: 40%
            }
            .push--medium--three-fifths {
                left: 60%
            }
            .push--medium--four-fifths {
                left: 80%
            }
            .push--medium--one-sixth {
                left: 16.666%
            }
            .push--medium--two-sixths {
                left: 33.333%
            }
            .push--medium--three-sixths {
                left: 50%
            }
            .push--medium--four-sixths {
                left: 66.666%
            }
            .push--medium--five-sixths {
                left: 83.333%
            }
            .push--medium--one-eighth {
                left: 12.5%
            }
            .push--medium--two-eighths {
                left: 25%
            }
            .push--medium--three-eighths {
                left: 37.5%
            }
            .push--medium--four-eighths {
                left: 50%
            }
            .push--medium--five-eighths {
                left: 62.5%
            }
            .push--medium--six-eighths {
                left: 75%
            }
            .push--medium--seven-eighths {
                left: 87.5%
            }
            .push--medium--one-tenth {
                left: 10%
            }
            .push--medium--two-tenths {
                left: 20%
            }
            .push--medium--three-tenths {
                left: 30%
            }
            .push--medium--four-tenths {
                left: 40%
            }
            .push--medium--five-tenths {
                left: 50%
            }
            .push--medium--six-tenths {
                left: 60%
            }
            .push--medium--seven-tenths {
                left: 70%
            }
            .push--medium--eight-tenths {
                left: 80%
            }
            .push--medium--nine-tenths {
                left: 90%
            }
            .push--medium--one-twelfth {
                left: 8.333%
            }
            .push--medium--two-twelfths {
                left: 16.666%
            }
            .push--medium--three-twelfths {
                left: 25%
            }
            .push--medium--four-twelfths {
                left: 33.333%
            }
            .push--medium--five-twelfths {
                left: 41.666%
            }
            .push--medium--six-twelfths {
                left: 50%
            }
            .push--medium--seven-twelfths {
                left: 58.333%
            }
            .push--medium--eight-twelfths {
                left: 66.666%
            }
            .push--medium--nine-twelfths {
                left: 75%
            }
            .push--medium--ten-twelfths {
                left: 83.333%
            }
            .push--medium--eleven-twelfths {
                left: 91.666%
            }
        }
        
        @media only screen and (max-width: 768px) {
            .push--medium-down--one-whole {
                left: 100%
            }
            .push--medium-down--one-half {
                left: 50%
            }
            .push--medium-down--one-third {
                left: 33.333%
            }
            .push--medium-down--two-thirds {
                left: 66.666%
            }
            .push--medium-down--one-quarter {
                left: 25%
            }
            .push--medium-down--two-quarters {
                left: 50%
            }
            .push--medium-down--three-quarters {
                left: 75%
            }
            .push--medium-down--one-fifth {
                left: 20%
            }
            .push--medium-down--two-fifths {
                left: 40%
            }
            .push--medium-down--three-fifths {
                left: 60%
            }
            .push--medium-down--four-fifths {
                left: 80%
            }
            .push--medium-down--one-sixth {
                left: 16.666%
            }
            .push--medium-down--two-sixths {
                left: 33.333%
            }
            .push--medium-down--three-sixths {
                left: 50%
            }
            .push--medium-down--four-sixths {
                left: 66.666%
            }
            .push--medium-down--five-sixths {
                left: 83.333%
            }
            .push--medium-down--one-eighth {
                left: 12.5%
            }
            .push--medium-down--two-eighths {
                left: 25%
            }
            .push--medium-down--three-eighths {
                left: 37.5%
            }
            .push--medium-down--four-eighths {
                left: 50%
            }
            .push--medium-down--five-eighths {
                left: 62.5%
            }
            .push--medium-down--six-eighths {
                left: 75%
            }
            .push--medium-down--seven-eighths {
                left: 87.5%
            }
            .push--medium-down--one-tenth {
                left: 10%
            }
            .push--medium-down--two-tenths {
                left: 20%
            }
            .push--medium-down--three-tenths {
                left: 30%
            }
            .push--medium-down--four-tenths {
                left: 40%
            }
            .push--medium-down--five-tenths {
                left: 50%
            }
            .push--medium-down--six-tenths {
                left: 60%
            }
            .push--medium-down--seven-tenths {
                left: 70%
            }
            .push--medium-down--eight-tenths {
                left: 80%
            }
            .push--medium-down--nine-tenths {
                left: 90%
            }
            .push--medium-down--one-twelfth {
                left: 8.333%
            }
            .push--medium-down--two-twelfths {
                left: 16.666%
            }
            .push--medium-down--three-twelfths {
                left: 25%
            }
            .push--medium-down--four-twelfths {
                left: 33.333%
            }
            .push--medium-down--five-twelfths {
                left: 41.666%
            }
            .push--medium-down--six-twelfths {
                left: 50%
            }
            .push--medium-down--seven-twelfths {
                left: 58.333%
            }
            .push--medium-down--eight-twelfths {
                left: 66.666%
            }
            .push--medium-down--nine-twelfths {
                left: 75%
            }
            .push--medium-down--ten-twelfths {
                left: 83.333%
            }
            .push--medium-down--eleven-twelfths {
                left: 91.666%
            }
        }
        
        @media only screen and (min-width: 769px) {
            .push--large--one-whole {
                left: 100%
            }
            .push--large--one-half {
                left: 50%
            }
            .push--large--one-third {
                left: 33.333%
            }
            .push--large--two-thirds {
                left: 66.666%
            }
            .push--large--one-quarter {
                left: 25%
            }
            .push--large--two-quarters {
                left: 50%
            }
            .push--large--three-quarters {
                left: 75%
            }
            .push--large--one-fifth {
                left: 20%
            }
            .push--large--two-fifths {
                left: 40%
            }
            .push--large--three-fifths {
                left: 60%
            }
            .push--large--four-fifths {
                left: 80%
            }
            .push--large--one-sixth {
                left: 16.666%
            }
            .push--large--two-sixths {
                left: 33.333%
            }
            .push--large--three-sixths {
                left: 50%
            }
            .push--large--four-sixths {
                left: 66.666%
            }
            .push--large--five-sixths {
                left: 83.333%
            }
            .push--large--one-eighth {
                left: 12.5%
            }
            .push--large--two-eighths {
                left: 25%
            }
            .push--large--three-eighths {
                left: 37.5%
            }
            .push--large--four-eighths {
                left: 50%
            }
            .push--large--five-eighths {
                left: 62.5%
            }
            .push--large--six-eighths {
                left: 75%
            }
            .push--large--seven-eighths {
                left: 87.5%
            }
            .push--large--one-tenth {
                left: 10%
            }
            .push--large--two-tenths {
                left: 20%
            }
            .push--large--three-tenths {
                left: 30%
            }
            .push--large--four-tenths {
                left: 40%
            }
            .push--large--five-tenths {
                left: 50%
            }
            .push--large--six-tenths {
                left: 60%
            }
            .push--large--seven-tenths {
                left: 70%
            }
            .push--large--eight-tenths {
                left: 80%
            }
            .push--large--nine-tenths {
                left: 90%
            }
            .push--large--one-twelfth {
                left: 8.333%
            }
            .push--large--two-twelfths {
                left: 16.666%
            }
            .push--large--three-twelfths {
                left: 25%
            }
            .push--large--four-twelfths {
                left: 33.333%
            }
            .push--large--five-twelfths {
                left: 41.666%
            }
            .push--large--six-twelfths {
                left: 50%
            }
            .push--large--seven-twelfths {
                left: 58.333%
            }
            .push--large--eight-twelfths {
                left: 66.666%
            }
            .push--large--nine-twelfths {
                left: 75%
            }
            .push--large--ten-twelfths {
                left: 83.333%
            }
            .push--large--eleven-twelfths {
                left: 91.666%
            }
        }
        
        [class*="pull--"] {
            position: relative
        }
        
        .pull--one-whole {
            right: 100%
        }
        
        .pull--one-half {
            right: 50%
        }
        
        .pull--one-third {
            right: 33.333%
        }
        
        .pull--two-thirds {
            right: 66.666%
        }
        
        .pull--one-quarter {
            right: 25%
        }
        
        .pull--two-quarters {
            right: 50%
        }
        
        .pull--three-quarters {
            right: 75%
        }
        
        .pull--one-fifth {
            right: 20%
        }
        
        .pull--two-fifths {
            right: 40%
        }
        
        .pull--three-fifths {
            right: 60%
        }
        
        .pull--four-fifths {
            right: 80%
        }
        
        .pull--one-sixth {
            right: 16.666%
        }
        
        .pull--two-sixths {
            right: 33.333%
        }
        
        .pull--three-sixths {
            right: 50%
        }
        
        .pull--four-sixths {
            right: 66.666%
        }
        
        .pull--five-sixths {
            right: 83.333%
        }
        
        .pull--one-eighth {
            right: 12.5%
        }
        
        .pull--two-eighths {
            right: 25%
        }
        
        .pull--three-eighths {
            right: 37.5%
        }
        
        .pull--four-eighths {
            right: 50%
        }
        
        .pull--five-eighths {
            right: 62.5%
        }
        
        .pull--six-eighths {
            right: 75%
        }
        
        .pull--seven-eighths {
            right: 87.5%
        }
        
        .pull--one-tenth {
            right: 10%
        }
        
        .pull--two-tenths {
            right: 20%
        }
        
        .pull--three-tenths {
            right: 30%
        }
        
        .pull--four-tenths {
            right: 40%
        }
        
        .pull--five-tenths {
            right: 50%
        }
        
        .pull--six-tenths {
            right: 60%
        }
        
        .pull--seven-tenths {
            right: 70%
        }
        
        .pull--eight-tenths {
            right: 80%
        }
        
        .pull--nine-tenths {
            right: 90%
        }
        
        .pull--one-twelfth {
            right: 8.333%
        }
        
        .pull--two-twelfths {
            right: 16.666%
        }
        
        .pull--three-twelfths {
            right: 25%
        }
        
        .pull--four-twelfths {
            right: 33.333%
        }
        
        .pull--five-twelfths {
            right: 41.666%
        }
        
        .pull--six-twelfths {
            right: 50%
        }
        
        .pull--seven-twelfths {
            right: 58.333%
        }
        
        .pull--eight-twelfths {
            right: 66.666%
        }
        
        .pull--nine-twelfths {
            right: 75%
        }
        
        .pull--ten-twelfths {
            right: 83.333%
        }
        
        .pull--eleven-twelfths {
            right: 91.666%
        }
        
        html {
            background-color: #fff
        }
        
        body {
            background-color: #fff
        }
        
        [tabindex='-1']:focus {
            outline: none
        }
        
        .wrapper {
            *zoom: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 16px
        }
        
        .wrapper:after {
            content: '';
            display: table;
            clear: both
        }
        
        @media (max-width: 768px) {
            .wrapper {
                padding-left: 8px;
                padding-right: 8px
            }
        }
        
        .main-content {
            display: block
        }
        
        .is-transitioning {
            display: block ;
            visibility: visible 
        }
        
        #CartDrawer {
            overflow: hidden
        }
        
        #CartDrawer.is-transitioning {
            display: flex 
        }
        
        .is-transitioning__mobilemenu {
            display: block;
            visibility: visible 
        }
        
        .is-moved-by-drawer__mobilemenu {
            -webkit-transform: translateZ(0);
            will-change: transform;
            transition: all 0.4s cubic-bezier(0.46, 0.01, 0.32, 1)
        }
        
        .js-drawer-open-left .is-moved-by-drawer__mobilemenu {
            -ms-transform: translateX(0);
            -webkit-transform: translateX(0);
            transform: translateX(0)
        }
        
        .js-drawer-open-right .is-moved-by-drawer__mobilemenu {
            -ms-transform: translateX(0);
            -webkit-transform: translateX(0);
            transform: translateX(0)
        }
        
        .display-table {
            display: table;
            table-layout: fixed;
            width: 100%
        }
        
        .display-table-cell {
            display: table-cell;
            vertical-align: middle;
            float: none
        }
        
        .cart__remove-btn {
            width: 24px;
            vertical-align: top
        }
        
        .visually-hidden,
        .supports-fontface .icon-fallback-text .fallback-text {
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0
        }
        
        body,
        input,
        textarea,
        button,
        select {
            font-size: 14px;
            line-height: 1.3;
            font-family: "Avenir Next Regular", "Times New Roman", serif;
            color: #333;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%
        }
        
        h1,
        .h1,
        h2,
        .h2,
        h3,
        .h3,
        h4,
        .h4,
        h5,
        .h5 {
            display: block;
            font-family: "Times New Roman", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 100;
            margin: 0 0 0.5em;
            line-height: 1.4
        }
        
        h1 a,
        .h1 a,
        h2 a,
        .h2 a,
        h3 a,
        .h3 a,
        h4 a,
        .h4 a,
        h5 a,
        .h5 a {
            text-decoration: none;
            font-weight: inherit
        }
        
        h6,
        .h6 {
            display: block;
            font-family: "Avenir Next Demi", "Times New Roman", serif;
            font-weight: 100;
            margin: 0 0 0.5em;
            line-height: 1.4
        }
        
        h6 a,
        .h6 a {
            text-decoration: none;
            font-weight: inherit
        }
        
        h1,
        .h1 {
            font-size: 2.5em;
            line-height: 95%;
            letter-spacing: 0px
        }
        
        h2,
        .h2 {
            font-size: 2.2em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h3,
        .h3 {
            font-size: 2em;
            line-height: 90%;
            letter-spacing: 0px
        }
        
        h4,
        .h4 {
            font-size: 1.6em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h5,
        .h5 {
            font-size: 1em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        h6,
        .h6 {
            font-size: 1.78571em;
            line-height: 100%;
            letter-spacing: 0px
        }
        
        .h7 {
            font-size: 35px
        }
        
        .h8 {
            font-size: 15px;
            line-height: 100%;
            text-transform: uppercase
        }
        
        p,
        .p-tag {
            margin: 0 0 8px 0
        }
        
        p img,
        .p-tag img {
            margin: 0
        }
        
        p.alternate,
        .alternate.p-tag {
            font-family: "Times New Roman", "Helvetica Neue", Helvetica, Arial, sans-serif
        }
        
        .p-tag {
            font-size: 14px;
            line-height: 1.3;
            font-family: "Avenir Next Regular", "Times New Roman", serif;
            color: #333;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%
        }
        
        em {
            font-style: italic
        }
        
        b,
        strong {
            font-weight: bold
        }
        
        small {
            font-size: 0.9em
        }
        
        sup,
        sub {
            position: relative;
            font-size: 60%;
            vertical-align: baseline
        }
        
        sup {
            top: -0.5em
        }
        
        sub {
            bottom: -0.5em
        }
        
        ::selection {
            background: #FDE4DF;
            color: #333;
            text-shadow: none
        }
        
        blockquote {
            font-size: 1.125em;
            line-height: 1.45;
            font-style: italic;
            margin: 0 0 16px;
            padding: 8px 16px;
            border-left: 1px solid #e5e5e5
        }
        
        blockquote p,
        blockquote .p-tag {
            margin-bottom: 0
        }
        
        blockquote p+cite,
        blockquote .p-tag+cite {
            margin-top: 8px
        }
        
        blockquote cite {
            display: block;
            font-size: 0.75em
        }
        
        blockquote cite:before {
            content: '\\2014 \\0020'
        }
        
        code,
        pre {
            background-color: #faf7f5;
            font-family: Consolas, monospace;
            font-size: 1em;
            border: 0 none;
            padding: 0 2px;
            color: #51ab62
        }
        
        pre {
            overflow: auto;
            padding: 8px;
            margin: 0 0 16px
        }
        
        hr {
            clear: both;
            border-top: solid #e5e5e5;
            border-width: 1px 0 0;
            margin: 16px 0;
            height: 0
        }
        
        hr.hr--small {
            margin: 8px 0
        }
        
        hr.hr--clear {
            border-top-color: transparent
        }
        
        .section-header {
            margin-bottom: 10.66667px
        }
        
        .section-header__right .form-horizontal,
        .section-header__right .collection-view {
            display: inline-block;
            vertical-align: middle
        }
        
        @media screen and (min-width: 481px) {
            .section-header__right label+select,
            .section-header__right .collection-view {
                margin-left: 8px
            }
        }
        
        .collection-view {
            display: inline-block;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding: 0 5px;
            height: 37px;
            overflow: hidden
        }
        
        @media screen and (min-width: 769px) {
            .collection-view {
                display: inline-block
            }
        }
        
        .change-view {
            display: block;
            background: none;
            border: 0 none;
            float: left;
            padding: 10px 8px;
            color: #e5e5e5;
            line-height: 1
        }
        
        .change-view:hover,
        .change-view:focus {
            color: #333
        }
        
        .change-view--active {
            cursor: default;
            color: #333
        }
        
        .rte {
            margin-bottom: 8px
        }
        
        .rte a {
            text-decoration: underline
        }
        
        .rte h1,
        .rte .h1,
        .rte h2,
        .rte .h2,
        .rte h3,
        .rte .h3,
        .rte h4,
        .rte .h4,
        .rte h5,
        .rte .h5,
        .rte h6,
        .rte .h6 {
            margin-top: 2em
        }
        
        .rte h1:first-child,
        .rte .h1:first-child,
        .rte h2:first-child,
        .rte .h2:first-child,
        .rte h3:first-child,
        .rte .h3:first-child,
        .rte h4:first-child,
        .rte .h4:first-child,
        .rte h5:first-child,
        .rte .h5:first-child,
        .rte h6:first-child,
        .rte .h6:first-child {
            margin-top: 0
        }
        
        .rte h1 a,
        .rte .h1 a,
        .rte h2 a,
        .rte .h2 a,
        .rte h3 a,
        .rte .h3 a,
        .rte h4 a,
        .rte .h4 a,
        .rte h5 a,
        .rte .h5 a,
        .rte h6 a,
        .rte .h6 a {
            text-decoration: none
        }
        
        .rte>div {
            margin-bottom: 8px
        }
        
        .rte li {
            margin-bottom: 0.4em
        }
        
        .rte--header {
            margin-bottom: 0
        }
        
        a {
            color: #333;
            text-decoration: none;
            background: transparent;
            transition: color ease 200ms
        }
        
        .text-link {
            color: #ed3376;
            text-decoration: none;
            background: transparent
        }
        
        .text-link:hover {
            color: #da135b
        }
        
        a:hover,
        a:focus {
            color: #ed3376
        }
        
        a.title {
            color: #333
        }
        
        a.title:hover,
        a.title:focus {
            color: #333
        }
        
        button {
            overflow: visible
        }
        
        button[disabled],
        html input[disabled] {
            cursor: default
        }
        
        .btn,
        .btn--secondary,
        .rte .btn--secondary,
        .btn-main,
        .rte .btn-main {
            display: inline-block;
            padding: 12px 20px;
            width: auto;
            margin: 0;
            line-height: 100%;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            cursor: pointer;
            border: 1px solid transparent;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-color: #333;
            color: #fff
        }
        
        .btn:active,
        .btn--secondary:active,
        .btn:focus,
        .btn--secondary:focus,
        .btn-main:active,
        .btn-main:focus,
        .rte .btn-main:active,
        .rte .btn-main:focus {
            background-color: #ed3376;
            color: #fff
        }
        
        .btn[disabled],
        [disabled].btn--secondary,
        .btn.disabled,
        .disabled.btn--secondary,
        .btn-main[disabled],
        .btn-main.disabled,
        .rte .btn-main[disabled],
        .rte .btn-main.disabled {
            cursor: default;
            color: #b6b6b6;
            background-color: #f6f6f6
        }
        
        .btn--secondary,
        .rte .btn--secondary {
            background-color: #ed3376
        }
        
        .btn--secondary:hover,
        .rte .btn--secondary:hover {
            background-color: #da135b;
            color: #fff
        }
        
        .btn--secondary:active,
        .btn--secondary:focus,
        .rte .btn--secondary:active,
        .rte .btn--secondary:focus {
            background-color: #ab0f47;
            color: #fff
        }
        
        .btn--small {
            padding: 4px 5px;
            font-size: 0.85714em
        }
        
        .btn--large {
            padding: 12px 15px;
            font-size: 1.14286em
        }
        
        .btn--full {
            width: 100%
        }
        
        .text-link {
            display: inline;
            border: 0 none;
            background: none;
            padding: 0;
            margin: 0
        }
        
        ul,
        ol {
            margin: 0 0 8px 20px;
            padding: 0
        }
        
        ol {
            list-style: decimal
        }
        
        ul ul,
        ul ol,
        ol ol,
        ol ul {
            margin: 4px 0 5px 20px
        }
        
        li {
            margin-bottom: 0.25em
        }
        
        ul.square {
            list-style: square outside
        }
        
        ul.disc {
            list-style: disc outside
        }
        
        ol.alpha {
            list-style: lower-alpha outside
        }
        
        .no-bullets {
            list-style: none outside;
            margin-left: 0
        }
        
        .inline-list {
            margin-left: 0
        }
        
        .inline-list li {
            display: inline-block;
            margin-bottom: 0
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0
        }
        
        .table-wrap {
            max-width: 100%;
            overflow: hidden;
            -webkit-overflow-scrolling: touch
        }
        
        th {
            font-weight: bold
        }
        
        th,
        td {
            text-align: left;
            padding: 8px;
            border: 1px solid #e5e5e5
        }
        
        .media,
        .media-flex {
            overflow: hidden;
            _overflow: visible;
            zoom: 1
        }
        
        .media-img {
            float: left;
            margin-right: 16px
        }
        
        .media-img-right {
            float: right;
            margin-left: 16px
        }
        
        .media-img img,
        .media-img-right img {
            display: block
        }
        
        img {
            border: 0 none
        }
        
        svg:not(:root) {
            overflow: hidden
        }
        
        img,
        iframe {
            max-width: 100%
        }
        
        .video-wrapper {
            position: relative;
            overflow: hidden;
            max-width: 100%;
            padding-bottom: 56.25%;
            height: 0;
            height: auto
        }
        
        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
        }
        
        form {
            margin-bottom: 0
        }
        
        .form-vertical {
            margin-bottom: 8px
        }
        
        @media screen and (max-width: 768px) {
            input,
            textarea {
                font-size: 16px
            }
        }
        
        input,
        textarea,
        button,
        select {
            padding: 0;
            margin: 0;
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text
        }
        
        button {
            background: none;
            border: none;
            cursor: pointer
        }
        
        button,
        input,
        textarea {
            -webkit-appearance: none;
            -moz-appearance: none
        }
        
        button {
            background: none;
            border: none;
            display: inline-block;
            cursor: pointer
        }
        
        input[type="image"] {
            padding-left: 0;
            padding-right: 0
        }
        
        fieldset {
            border: 1px solid #e5e5e5;
            padding: 8px
        }
        
        legend {
            border: 0;
            padding: 0
        }
        
        button,
        input[type="submit"] {
            cursor: pointer
        }
        
        input,
        textarea,
        select {
            border: 1px solid #333;
            max-width: 100%;
            padding: 8px 10px;
            border-radius: 0
        }
        
        input:focus,
        textarea:focus,
        select:focus {
            border: 1px solid #ccc
        }
        
        input[disabled],
        input.disabled,
        textarea[disabled],
        textarea.disabled,
        select[disabled],
        select.disabled {
            cursor: default;
            background-color: #f6f6f6;
            border-color: #b6b6b6
        }
        
        input.input-full,
        textarea.input-full,
        select.input-full {
            width: 100%
        }
        
        textarea {
            min-height: 100px
        }
        
        input[type="checkbox"],
        input[type="radio"] {
            display: inline;
            margin: 0 8px 0 0;
            padding: 0;
            width: auto
        }
        
        input[type="checkbox"] {
            -webkit-appearance: checkbox;
            -moz-appearance: checkbox
        }
        
        input[type="radio"] {
            -webkit-appearance: radio;
            -moz-appearance: radio
        }
        
        input[type="image"] {
            padding-left: 0;
            padding-right: 0
        }
        
        select {
            background-position: right center;
            padding-right: 60px;
            text-indent: 0.01px;
            text-overflow: '';
            cursor: pointer
        }
        
        .ie9 select,
        .lt-ie9 select {
            padding-right: 10px;
            background-image: none
        }
        
        .dropdown-arrow {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/down_arrow.svg?v=767845861359929505");
            background-repeat: no-repeat;
            background-color: transparent
        }
        
        optgroup {
            font-weight: bold
        }
        
        option {
            color: #000;
            background-color: #fff
        }
        
        select::-ms-expand {
            display: none
        }
        
        .hidden-label {
            position: absolute;
            height: 0;
            width: 0;
            margin-bottom: 0;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px)
        }
        
        .ie9 .hidden-label,
        .lt-ie9 .hidden-label {
            position: static;
            height: auto;
            width: auto;
            margin-bottom: 2px;
            overflow: visible;
            clip: initial
        }
        
        label[for] {
            cursor: pointer
        }
        
        .form-vertical input,
        .form-vertical select,
        .form-vertical textarea {
            display: block;
            margin-bottom: 10px
        }
        
        .form-vertical input[type="radio"],
        .form-vertical input[type="checkbox"] {
            display: inline-block
        }
        
        input.error,
        select.error,
        textarea.error {
            border-color: #d02e2e;
            background-color: #fff6f6;
            color: #d02e2e
        }
        
        label.error {
            color: #d02e2e
        }
        
        .input-group {
            position: relative;
            display: table;
            border-collapse: separate
        }
        
        .input-group .input-group-field:first-child,
        .input-group .input-group-btn:first-child,
        .input-group .input-group-btn:first-child>.btn,
        .input-group .input-group-btn:first-child>.btn--secondary,
        .input-group input[type="hidden"]:first-child+.input-group-field,
        .input-group input[type="hidden"]:first-child+.input-group-btn>.btn,
        .input-group input[type="hidden"]:first-child+.input-group-btn>.btn--secondary {
            border-radius: 4px 0 0 4px
        }
        
        .input-group .input-group-field:last-child,
        .input-group .input-group-btn:last-child>.btn,
        .input-group .input-group-btn:last-child>.btn--secondary {
            border-radius: 0 4px 4px 0
        }
        
        .input-group input::-moz-focus-inner {
            border: 0;
            padding: 0;
            margin-top: -1px;
            margin-bottom: -1px
        }
        
        .input-group-field,
        .input-group-btn {
            display: table-cell;
            vertical-align: middle;
            margin: 0
        }
        
        .input-group .btn,
        .input-group .btn--secondary,
        .input-group .input-group-field {
            height: 37px
        }
        
        .input-group .input-group-field {
            width: 100%
        }
        
        .input-group-btn {
            position: relative;
            white-space: nowrap;
            width: 1%;
            padding: 0
        }
        
        .icon-fallback-text .icon {
            display: none
        }
        
        .supports-fontface .icon-fallback-text .icon {
            display: inline-block
        }
        
        .icon:before {
            display: none
        }
        
        .supports-fontface .icon:before {
            display: inline;
            font-family: "icons";
            text-decoration: none;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .payment-icons {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: default
        }
        
        .payment-icons li {
            margin: 0 4px 4px;
            color: #bbbbbb;
            cursor: default
        }
        
        .payment-icons .icon {
            font-size: 30px;
            line-height: 30px
        }
        
        .payment-icons .fallback-text {
            text-transform: capitalize
        }
        
        .social-icons li {
            margin: 0 8px 8px;
            vertical-align: middle
        }
        
        @media screen and (min-width: 481px) {
            .social-icons li {
                margin-left: 0
            }
        }
        
        .social-icons li .icon {
            font-size: 30px;
            line-height: 26px
        }
        
        .social-icons li a {
            color: #bbbbbb
        }
        
        .social-icons li a:hover {
            color: #a2a2a2
        }
        
        .pagination {
            margin-bottom: 1em;
            text-align: center
        }
        
        .pagination>span {
            display: inline-block;
            line-height: 1
        }
        
        .pagination a {
            display: block
        }
        
        .pagination a,
        .pagination .page.current {
            padding: 8px
        }
        
        .site-header .grid--table {
            display: table;
            table-layout: fixed;
            width: 100%
        }
        
        .site-header .grid--table>.grid__item {
            float: none;
            display: table-cell;
            vertical-align: middle
        }
        
        .site-header__logo {
            text-align: center;
            margin: 0 auto;
            max-width: 100%
        }
        
        @media screen and (min-width: 769px) {
            .site-header__logo {
                text-align: left
            }
        }
        
        .site-header__logo a,
        .site-header__logo a:hover,
        .site-header__logo a:focus {
            text-decoration: none
        }
        
        .site-header__logo a,
        .site-header__logo img {
            display: block
        }
        
        .site-header__logo img {
            margin: 0 auto
        }
        
        .site-header__cart-toggle {
            display: inline-block
        }
        
        .site-header__cart-toggle .icon-fallback-text .icon-bag {
            font-size: 24px
        }
        
        .site-header__search {
            display: inline-block;
            max-width: 400px;
            margin-top: 8px;
            width: 100%
        }
        
        .search-bar {
            max-width: 100%
        }
        
        @media screen and (max-width: 768px) {
            .search-bar {
                margin-left: auto;
                margin-right: auto
            }
        }
        
        .nav-bar {
            background-color: #fff
        }
        
        .site-nav,
        .site-nav--mobile {
            font-size: 1em;
            cursor: default;
            margin: 0
        }
        
        .site-nav li,
        .site-nav--mobile li {
            margin: 0;
            display: block
        }
        
        .site-nav>li,
        .site-nav--mobile>li {
            position: relative;
            display: inline-block
        }
        
        .text-right .site-nav--mobile {
            margin: 0 -8px 0 0
        }
        
        .site-nav__link {
            display: block;
            text-decoration: none;
            white-space: nowrap;
            color: #4d4d4d
        }
        
        .site-nav__link:hover,
        .site-nav__link:active,
        .site-nav__link:focus {
            color: #272727
        }
        
        .site-nav__link .icon-arrow-down {
            position: relative;
            top: -2px;
            font-size: 10px;
            padding-left: 4px
        }
        
        .site-nav--active>.site-nav__link {
            font-weight: bold
        }
        
        .site-nav--mobile .site-nav__link {
            display: inline-block
        }
        
        .site-nav__dropdown {
            display: none;
            position: absolute;
            left: 0;
            margin: 0;
            z-index: 5
        }
        
        .supports-no-touch .site-nav--has-dropdown:hover .site-nav__dropdown,
        .site-nav--has-dropdown.nav-hover .site-nav__dropdown,
        .nav-focus+.site-nav__dropdown {
            display: block
        }
        
        .site-nav__dropdown a {
            background-color: #fff
        }
        
        .site-nav__dropdown a:hover,
        .site-nav__dropdown a:active,
        .site-nav__dropdown a:focus {
            background-color: #e6e6e6
        }
        
        .nav-search {
            position: relative;
            padding: 10px 0
        }
        
        @media screen and (max-width: 768px) {
            .nav-search {
                padding: 0 0 8px;
                margin: 0 auto;
                text-align: center
            }
        }
        
        .js-drawer-open {
            overflow: hidden;
            height: 100%
        }
        
        .drawer {
            -webkit-transform: translateZ(0);
            will-change: transform;
            display: none;
            position: fixed;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
            top: 0;
            bottom: 0;
            padding: 0 8px;
            max-width: 95%;
            z-index: 9999999999;
            color: #333;
            background-color: #fff;
            transition: all 0.4s cubic-bezier(0.46, 0.01, 0.32, 1)
        }
        
        .drawer input,
        .drawer textarea {
            border-color: #f2f2f2
        }
        
        .drawer--left {
            width: 83.3333vw;
            left: -83.3333vw;
            border-right: 1px solid #f2f2f2
        }
        
        .js-drawer-open-left .drawer--left {
            display: block;
            -ms-transform: translateX(83.3333vw);
            -webkit-transform: translateX(83.3333vw);
            transform: translateX(83.3333vw)
        }
        
        .lt-ie9 .js-drawer-open-left .drawer--left {
            left: 0
        }
        
        .drawer--right {
            width: 360px;
            right: -360px;
            border-left: 1px solid #f2f2f2
        }
        
        .js-drawer-open-right .drawer--right {
            display: flex;
            -ms-transform: translateX(-360px);
            -webkit-transform: translateX(-360px);
            transform: translateX(-360px)
        }
        
        .lt-ie9 .js-drawer-open-right .drawer--right {
            right: 0
        }
        
        #PageContainer {
            overflow: hidden
        }
        
        .is-moved-by-drawer {
            -webkit-transform: translateZ(0);
            will-change: transform;
            transition: all 0.4s cubic-bezier(0.46, 0.01, 0.32, 1)
        }
        
        .js-drawer-open-left .is-moved-by-drawer {
            -ms-transform: translateX(83.3333vw);
            -webkit-transform: translateX(83.3333vw);
            transform: translateX(83.3333vw)
        }
        
        .js-drawer-open-right .is-moved-by-drawer {
            -ms-transform: translateX(-360px);
            -webkit-transform: translateX(-360px);
            transform: translateX(-360px)
        }
        
        .drawer__header {
            display: table;
            height: 46px;
            width: 100%;
            border-bottom: 1px solid #f2f2f2
        }
        
        .drawer__close {
            vertical-align: middle
        }
        
        .drawer__close {
            text-align: center;
            font-size: 1.28571em
        }
        
        .drawer__close button {
            position: relative;
            right: -20px;
            height: 100%;
            padding: 0 20px;
            color: inherit
        }
        
        .drawer__close button:active,
        .drawer__close button:focus {
            background-color: #f2f2f2
        }
        
        .site-footer {
            background-color: #fff;
            padding: 16px 0;
            color: #333
        }
        
        @media screen and (min-width: 769px) {
            .site-footer {
                padding: 32px 0
            }
        }
        
        .grid__image {
            display: block;
            margin: 0 auto 8px
        }
        
        .grid__image img {
            display: block;
            margin: 0 auto
        }
        
        .filter--active {
            font-weight: bold
        }
        
        .breadcrumb a,
        .breadcrumb span {
            display: inline-block;
            padding: 0 7px 0 0;
            margin-right: 7px
        }
        
        .breadcrumb a:first-child,
        .breadcrumb span:first-child {
            padding-left: 0
        }
        
        .product-single__variants {
            display: none
        }
        
        .no-js .product-single__variants {
            display: block
        }
        
        .product-single__photos {
            margin-bottom: 16px
        }
        
        .product-single__photos a,
        .product-single__photos img,
        .product-single__thumbnails a,
        .product-single__thumbnails img {
            display: block;
            margin: 0 auto
        }
        
        .product-single__photos li,
        .product-single__thumbnails li {
            margin-bottom: 16px
        }
        
        .note,
        .errors {
            border-radius: 4px;
            padding: 6px 12px;
            margin-bottom: 8px;
            border: 1px solid transparent;
            font-size: 0.9em;
            text-align: left
        }
        
        .note ul,
        .note ol,
        .errors ul,
        .errors ol {
            margin-top: 0;
            margin-bottom: 0
        }
        
        .note li:last-child,
        .errors li:last-child {
            margin-bottom: 0
        }
        
        .note p,
        .note .p-tag,
        .errors p,
        .errors .p-tag {
            margin-bottom: 0
        }
        
        .note {
            border-color: #e5e5e5
        }
        
        .errors ul {
            list-style: disc outside;
            margin-left: 20px
        }
        
        .form-success {
            color: #56ad6a;
            background-color: #ecfef0;
            border-color: #56ad6a
        }
        
        .form-success a {
            color: #56ad6a;
            text-decoration: underline
        }
        
        .form-success a:hover {
            text-decoration: none
        }
        
        .form-error,
        .errors {
            color: #d02e2e;
            background-color: #fff6f6;
            border-color: #d02e2e
        }
        
        .form-error a,
        .errors a {
            color: #d02e2e;
            text-decoration: underline
        }
        
        .form-error a:hover,
        .errors a:hover {
            text-decoration: none
        }
        
        .cart__row {
            position: relative;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #e5e5e5
        }
        
        .cart__row:first-child {
            margin-top: 0
        }
        
        .cart__row:first-child {
            padding-top: 0
        }
        
        .cart__row .js-qty,
        .cart__row .ajaxcart__qty {
            margin: 0 auto
        }
        
        .cart-table th {
            font-weight: normal
        }
        
        .cart-table td,
        .cart-table th {
            border: none
        }
        
        @media screen and (min-width: 769px) {
            .cart__row--table-large {
                display: table;
                table-layout: fixed;
                width: 100%
            }
            .cart__row--table-large .grid__item {
                display: table-cell;
                vertical-align: middle;
                float: none
            }
        }
        
        .cart__subtotal {
            margin: 0 0 0 5.33333px;
            display: inline
        }
        
        .cart__mini-labels {
            display: block;
            margin: 5.33333px 0;
            font-size: 0.85714em
        }
        
        @media screen and (min-width: 769px) {
            .cart__mini-labels {
                display: none
            }
        }
        
        .ajaxcart__row>.grid,
        .ajaxcart__row>.grid--rev,
        .ajaxcart__row>.grid--full {
            margin-left: -8px
        }
        
        .ajaxcart__row>.grid>.grid__item,
        .ajaxcart__row>.grid--rev>.grid__item,
        .ajaxcart__row>.grid--full>.grid__item {
            padding-left: 8px
        }
        
        .ajaxcart__row {
            padding-bottom: 8px;
            margin-bottom: 8px;
            border-bottom: 1px solid #f2f2f2
        }
        
        .ajaxcart__product-name,
        .ajaxcart__product-meta {
            display: block
        }
        
        .ajaxcart__product-name+.ajaxcart__product-meta {
            padding-top: 3.2px
        }
        
        .js-qty,
        .ajaxcart__qty {
            position: relative;
            margin-bottom: 1em;
            max-width: 100px;
            min-width: 75px;
            overflow: visible
        }
        
        .js-qty input,
        .ajaxcart__qty input {
            display: block;
            background: none;
            text-align: center;
            width: 100%;
            padding: 4px 25px;
            margin: 0
        }
        
        .js-qty__adjust,
        .ajaxcart__qty-adjust {
            cursor: pointer;
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            border: 0 none;
            padding: 0 6px;
            background: none;
            text-align: center;
            overflow: hidden;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none
        }
        
        .js-qty__adjust:hover,
        .ajaxcart__qty-adjust:hover,
        .js-qty__adjust:focus,
        .ajaxcart__qty-adjust:focus {
            color: #333
        }
        
        .js-qty__adjust--plus,
        .ajaxcart__qty--plus {
            right: 0
        }
        
        .js-qty__adjust--minus,
        .ajaxcart__qty--minus {
            left: 0
        }
        
        .ajaxcart__qty {
            margin: 0
        }
        
        .is-loading .ajaxcart__qty {
            opacity: 0.5;
            transition: none
        }
        
        .ajaxcart__qty-num {
            border-color: #f2f2f2;
            color: #333
        }
        
        .ajaxcart__qty-adjust {
            color: #333
        }
        
        .ajaxcart__qty--plus {
            border-color: #f2f2f2
        }
        
        .ajaxcart__qty--minus {
            border-color: #f2f2f2
        }
        
        *,
        *:before,
        *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch
        }
        
        .modal-open {
            overflow: hidden
        }
        
        .width-auto {
            width: auto 
        }
        
        .width-60 {
            width: 60%
        }
        
        .width-70 {
            width: 70%
        }
        
        .width-80 {
            width: 80%
        }
        
        .width-90 {
            width: 90%
        }
        
        .m-width-xlg {
            min-width: 350px
        }
        
        .m-width-lg {
            min-width: 300px
        }
        
        .m-width-md {
            min-width: 250px
        }
        
        .m-width-sm {
            min-width: 200px
        }
        
        .m-width-xs {
            min-width: 150px
        }
        
        .max-width-100 {
            max-width: 100%
        }
        
        .max-width-50 {
            max-width: 50%
        }
        
        .max-width-lg {
            max-width: 300px
        }
        
        .max-width-xlg {
            max-width: 400px
        }
        
        .max-width-lgx5 {
            max-width: 500px
        }
        
        .max-width-lgx6 {
            max-width: 600px
        }
        
        .max-width-lgx7 {
            max-width: 700px
        }
        
        .max-width-lgx8 {
            max-width: 800px
        }
        
        .max-width-lgx9 {
            max-width: 900px
        }
        
        .max-width-md {
            max-width: 250px
        }
        
        .max-width-sm {
            max-width: 200px
        }
        
        .max-width-xs {
            max-width: 150px
        }
        
        .max-width-xxs {
            max-width: 130px
        }
        
        .label {
            display: inline;
            padding: .3em .6em .2em;
            font-size: 75%;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            z-index: 1
        }
        
        a.label:hover,
        a.label:focus {
            color: #fff;
            text-decoration: none;
            cursor: pointer
        }
        
        .label:empty {
            display: none
        }
        
        .btn .label,
        .btn--secondary .label {
            position: relative;
            top: -1px
        }
        
        .label-default {
            background-color: #777777
        }
        
        .label-default[href]:hover,
        .label-default[href]:focus {
            background-color: #5e5e5e
        }
        
        .label-primary {
            background-color: #337ab7
        }
        
        .label-primary[href]:hover,
        .label-primary[href]:focus {
            background-color: #286090
        }
        
        .label-success {
            background-color: #5cb85c
        }
        
        .label-success[href]:hover,
        .label-success[href]:focus {
            background-color: #449d44
        }
        
        .label-info {
            background-color: #5bc0de
        }
        
        .label-info[href]:hover,
        .label-info[href]:focus {
            background-color: #31b0d5
        }
        
        .label-warning {
            background-color: #f0ad4e
        }
        
        .label-warning[href]:hover,
        .label-warning[href]:focus {
            background-color: #ec971f
        }
        
        .label-danger {
            background-color: #d9534f
        }
        
        .label-danger[href]:hover,
        .label-danger[href]:focus {
            background-color: #c9302c
        }
        
        .label-new {
            background-color: #ed3376
        }
        
        .label-new[href]:hover,
        .label-new[href]:focus {
            background-color: #da135b
        }
        
        .thin-u-l {
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.1) 
        }
        
        .thick-u-l {
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.5)
        }
        
        .brand-bg-guava {
            background-color: #fce4de
        }
        
        .brand-bg-hightlight {
            background-color: #f38189
        }
        
        .brand-primary {
            color: #ed3376
        }
        
        .brand-primary-border {
            border: #ed3376 solid 1px
        }
        
        .brand-secondary-border {
            border: #f38189 solid 1px
        }
        
        .brand-primary-hover-border:hover {
            border-color: #ed3376
        }
        
        .brand-deep-guava {
            color: #f38189
        }
        
        .brand-raspberry {
            color: #ea2b63
        }
        
        @media (max-width: 768px) {
            .no-pic-msg {
                top: 10px 
            }
        }
        
        .main-font {
            font-family: "Times New Roman", serif
        }
        
        .alt-font {
            font-family: "Avenir Next Demi", "Times New Roman", serif
        }
        
        .alt-font-regular {
            font-family: 'Avenir Next Regular', 'Times New Roman', serif
        }
        
        .v-m {
            vertical-align: middle 
        }
        
        .v-t {
            vertical-align: top 
        }
        
        .v-b {
            vertical-align: bottom 
        }
        
        .v-text-t {
            vertical-align: text-top
        }
        
        .v-text-b {
            vertical-align: text-bottom
        }
        
        .v-sup {
            vertical-align: super 
        }
        
        .v-c {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center
        }
        
        .i-16 {
            font-size: 16px;
            vertical-align: -15%
        }
        
        .i-20 {
            font-size: 20px;
            vertical-align: -19%
        }
        
        .i-24 {
            font-size: 24px;
            vertical-align: -23%
        }
        
        .i-36 {
            font-size: 36px;
            vertical-align: -27%
        }
        
        .i-42 {
            font-size: 42px;
            vertical-align: -31%
        }
        
        .bg-img {
            background-position: center ;
            background-size: cover 
        }
        
        .bg-white {
            background-color: #fff
        }
        
        .bg-dark {
            background-color: #333 
        }
        
        .bg-light {
            background-color: #eaebec
        }
        
        .bg-light.lt {
            background-color: #f8f8f8 
        }
        
        .bg-light .lt {
            background-color: #f8f8f8
        }
        
        .bg-light.dk {
            background-color: #dbdee2 
        }
        
        .bg-light .dk {
            background-color: #dbdee2
        }
        
        .bg-light.bg {
            background-color: #eaebec 
        }
        
        .bg-light .bg {
            background-color: #eaebec
        }
        
        .bg-primary {
            color: rgba(255, 255, 255, 0.87);
            background-color: #3f51b5
        }
        
        .bg-primary.lt {
            background-color: #5363bb 
        }
        
        .bg-primary .lt {
            background-color: #5363bb
        }
        
        .bg-primary.dk {
            background-color: #3345a8 
        }
        
        .bg-primary .dk {
            background-color: #3345a8
        }
        
        .bg-primary.bg {
            background-color: #3f51b5 
        }
        
        .bg-primary .bg {
            background-color: #3f51b5
        }
        
        .bg-success {
            color: rgba(255, 255, 255, 0.87);
            background-color: #4caf50
        }
        
        .bg-success.lt {
            background-color: #62b265 
        }
        
        .bg-success .lt {
            background-color: #62b265
        }
        
        .bg-success.dk {
            background-color: #3fa343 
        }
        
        .bg-success .dk {
            background-color: #3fa343
        }
        
        .bg-success.bg {
            background-color: #4caf50 
        }
        
        .bg-success .bg {
            background-color: #4caf50
        }
        
        .bg-info {
            color: rgba(255, 255, 255, 0.87);
            background-color: #2196f3
        }
        
        .bg-info.lt {
            background-color: #3ea1ef 
        }
        
        .bg-info .lt {
            background-color: #3ea1ef
        }
        
        .bg-info.dk {
            background-color: #078bf4 
        }
        
        .bg-info .dk {
            background-color: #078bf4
        }
        
        .bg-info.bg {
            background-color: #2196f3 
        }
        
        .bg-info .bg {
            background-color: #2196f3
        }
        
        .bg-warning {
            color: rgba(255, 255, 255, 0.87);
            background-color: #ffc107
        }
        
        .bg-warning.lt {
            background-color: #f9c526 
        }
        
        .bg-warning .lt {
            background-color: #f9c526
        }
        
        .bg-warning.dk {
            background-color: #ecb100 
        }
        
        .bg-warning .dk {
            background-color: #ecb100
        }
        
        .bg-warning.bg {
            background-color: #ffc107 
        }
        
        .bg-warning .bg {
            background-color: #ffc107
        }
        
        .bg-danger {
            color: rgba(255, 255, 255, 0.87);
            background-color: #f44336
        }
        
        .bg-danger.lt {
            background-color: #f15e53 
        }
        
        .bg-danger .lt {
            background-color: #f15e53
        }
        
        .bg-danger.dk {
            background-color: #f92718 
        }
        
        .bg-danger .dk {
            background-color: #f92718
        }
        
        .bg-danger.bg {
            background-color: #f44336 
        }
        
        .bg-danger .bg {
            background-color: #f44336
        }
        
        .bg-accent {
            color: rgba(255, 255, 255, 0.87);
            background-color: #7e57c2
        }
        
        .bg-accent.lt {
            background-color: #8e6fc4 
        }
        
        .bg-accent .lt {
            background-color: #8e6fc4
        }
        
        .bg-accent.dk {
            background-color: #6e3ec2 
        }
        
        .bg-accent .dk {
            background-color: #6e3ec2
        }
        
        .bg-accent.bg {
            background-color: #7e57c2 
        }
        
        .bg-accent .bg {
            background-color: #7e57c2
        }
        
        a.bg-primary:hover {
            background-color: #3849a2
        }
        
        .text-gauva {
            color: #f38189
        }
        
        .text-primary-lt {
            color: #4d5ec1
        }
        
        .text-primary-dk {
            color: #3849a2
        }
        
        .bg-gauva {
            background-color: #f38189
        }
        
        .bg-peach {
            background-color: #fce4de
        }
        
        .bg-respberry {
            background-color: #ed3376
        }
        
        .bg-lt-gauva {
            background-color: rgba(246, 221, 214, 0.5)
        }
        
        a.bg-info:hover {
            background-color: #0d8aee
        }
        
        a.text-info:hover {
            color: #0d8aee
        }
        
        .text-info {
            color: #2196f3
        }
        
        .text-info-lt {
            color: #39a1f4
        }
        
        .text-info-dk {
            color: #0d8aee
        }
        
        a.bg-success:hover {
            background-color: #449d48
        }
        
        a.text-success:hover {
            color: #449d48
        }
        
        .text-success {
            color: #4caf50
        }
        
        .text-success-lt {
            color: #5cb860
        }
        
        .text-success-dk {
            color: #449d48
        }
        
        a.bg-warning:hover {
            background-color: #ecb100
        }
        
        a.text-warning:hover {
            color: #ecb100
        }
        
        .text-warning {
            color: #ffc107
        }
        
        .text-warning-lt {
            color: #ffc721
        }
        
        .text-warning-dk {
            color: #ecb100
        }
        
        a.bg-danger:hover {
            background-color: #f32c1e
        }
        
        a.text-danger:hover {
            color: #f32c1e
        }
        
        .text-danger {
            color: #f44336
        }
        
        .text-danger-lt {
            color: #f55a4e
        }
        
        .text-danger-dk {
            color: #f32c1e
        }
        
        a.bg-accent:hover {
            background-color: #7044bb
        }
        
        a.text-accent:hover {
            color: #7044bb
        }
        
        .text-accent {
            color: #7e57c2
        }
        
        .text-accent-lt {
            color: #8c6ac9
        }
        
        .text-accent-dk {
            color: #7044bb
        }
        
        a.bg-dark:hover {
            background-color: #3d445a
        }
        
        a.text-dark:hover {
            color: #3d445a
        }
        
        .muted {
            opacity: 0.8 
        }
        
        .unmuted {
            opacity: 1 
        }
        
        .text-muted {
            color: inherit;
            opacity: 0.75
        }
        
        .text-muted-dk {
            color: inherit;
            opacity: 0.75
        }
        
        .text-muted-lt {
            color: inherit;
            opacity: 0.25
        }
        
        .text-color {
            color: rgba(0, 0, 0, 0.87)
        }
        
        .text-brand {
            color: #ef469c
        }
        
        .bg-big:before {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: -1;
            width: 100%;
            background-color: inherit;
            border: inherit;
            content: ""
        }
        
        .bg-white-overlay {
            background-color: rgba(255, 255, 255, 0.8)
        }
        
        .bg-black-overlay {
            background-color: rgba(32, 43, 54, 0.8)
        }
        
        .no-bg {
            color: inherit;
            background-color: transparent
        }
        
        .no-bgc {
            background-color: transparent 
        }
        
        .pos-rlt {
            position: relative;
            z-index: 1
        }
        
        .pos-abt {
            position: absolute
        }
        
        .pos-fix {
            position: fixed 
        }
        
        .pos-stc {
            position: static 
        }
        
        .block {
            display: block
        }
        
        .block.hide {
            display: none
        }
        
        .inline-grid {
            display: inline-grid
        }
        
        .pull-none {
            float: none
        }
        
        .inline {
            display: inline-block
        }
        
        .inline-16 {
            width: 16px;
            height: 16px
        }
        
        .inline-24 {
            width: 24px;
            height: 24px
        }
        
        .none {
            display: none
        }
        
        .active>.inline,
        .active>.auto .inline {
            display: none
        }
        
        .active>.none,
        .active>.auto .none {
            display: inline-block
        }
        
        .line {
            height: 1px;
            margin: 10px 0;
            overflow: hidden;
            font-size: 0
        }
        
        .line-dashed {
            background-color: transparent;
            border-style: dashed ;
            border-width: 0
        }
        
        .no-focus {
            outline: none
        }
        
        .rounded,
        .circle {
            border-radius: 500px
        }
        
        .clear {
            display: block;
            overflow: hidden
        }
        
        .clear-both {
            clear: both
        }
        
        .no-width {
            width: 0
        }
        
        .no-border {
            border-color: transparent;
            border-width: 0
        }
        
        .no-borders,
        .btn__no-border--primary,
        .btn__no-border--primary:hover,
        .btn__no-border--secondary,
        .btn__no-border--secondary:hover {
            border-width: 0 
        }
        
        .b {
            border-color: rgba(110, 115, 120, 0.1) 
        }
        
        .b-t {
            border-top: 1px solid #dddee0
        }
        
        .b-r {
            border-right: 1px solid #dddee0
        }
        
        .b-b {
            border-bottom: 1px solid #dddee0
        }
        
        .b-l {
            border-left: 1px solid #dddee0
        }
        
        .b-2x {
            border-width: 2px
        }
        
        .b-3x {
            border-width: 3px
        }
        
        .b-4x {
            border-width: 4px
        }
        
        .b-5x {
            border-width: 5px
        }
        
        .b-t-2x {
            border-top-width: 2px 
        }
        
        .b-t-3x {
            border-top-width: 3px 
        }
        
        .b-t-4x {
            border-top-width: 4px 
        }
        
        .b-t-5x {
            border-top-width: 5px 
        }
        
        .b-r-2x {
            border-right-width: 2px 
        }
        
        .b-r-3x {
            border-right-width: 3px 
        }
        
        .b-r-4x {
            border-right-width: 4px 
        }
        
        .b-r-5x {
            border-right-width: 5px 
        }
        
        .b-b-2x {
            border-bottom-width: 2px 
        }
        
        .b-b-3x {
            border-bottom-width: 3px 
        }
        
        .b-b-4x {
            border-bottom-width: 4px 
        }
        
        .b-b-5x {
            border-bottom-width: 5px 
        }
        
        .b-l-2x {
            border-left-width: 2px 
        }
        
        .b-l-3x {
            border-left-width: 3px 
        }
        
        .b-l-4x {
            border-left-width: 4px 
        }
        
        .b-l-5x {
            border-left-width: 5px 
        }
        
        .b-light {
            border-color: #eaebec
        }
        
        .b-white {
            border-color: #fff
        }
        
        .b-peach {
            border-color: #fce4de
        }
        
        .b-primary {
            border-color: #3f51b5
        }
        
        .b-t-primary {
            border-top-color: #3f51b5
        }
        
        .b-r-primary {
            border-right-color: #3f51b5
        }
        
        .b-b-primary {
            border-bottom-color: #3f51b5
        }
        
        .b-l-primary {
            border-left-color: #3f51b5
        }
        
        .b-info {
            border-color: #2196f3
        }
        
        .b-t-info {
            border-top-color: #2196f3
        }
        
        .b-r-info {
            border-right-color: #2196f3
        }
        
        .b-b-info {
            border-bottom-color: #2196f3
        }
        
        .b-l-info {
            border-left-color: #2196f3
        }
        
        .b-success {
            border-color: #4caf50
        }
        
        .b-t-success {
            border-top-color: #4caf50
        }
        
        .b-r-success {
            border-right-color: #4caf50
        }
        
        .b-b-success {
            border-bottom-color: #4caf50
        }
        
        .b-l-success {
            border-left-color: #4caf50
        }
        
        .b-warning {
            border-color: #ffc107
        }
        
        .b-t-warning {
            border-top-color: #ffc107
        }
        
        .b-r-warning {
            border-right-color: #ffc107
        }
        
        .b-b-warning {
            border-bottom-color: #ffc107
        }
        
        .b-l-warning {
            border-left-color: #ffc107
        }
        
        .b-danger {
            border-color: #f44336
        }
        
        .b-t-danger {
            border-top-color: #f44336
        }
        
        .b-r-danger {
            border-right-color: #f44336
        }
        
        .b-b-danger {
            border-bottom-color: #f44336
        }
        
        .b-l-danger {
            border-left-color: #f44336
        }
        
        .b-accent {
            border-color: #7e57c2
        }
        
        .b-t-accent {
            border-top-color: #7e57c2
        }
        
        .b-r-accent {
            border-right-color: #7e57c2
        }
        
        .b-b-accent {
            border-bottom-color: #7e57c2
        }
        
        .b-l-accent {
            border-left-color: #7e57c2
        }
        
        .b-dark {
            border-color: #475069
        }
        
        .b-t-dark {
            border-top-color: #475069
        }
        
        .b-t-lt-dark {
            border-top-color: rgba(0, 0, 0, 0.1)
        }
        
        .b-r-dark {
            border-right-color: #475069
        }
        
        .b-b-dark {
            border-bottom-color: #475069
        }
        
        .b-l-dark {
            border-left-color: #475069
        }
        
        .no-b-t {
            border-top-width: 0
        }
        
        .no-b-r {
            border-right-width: 0
        }
        
        .no-b-b {
            border-bottom-width: 0
        }
        
        .no-b-l {
            border-left-width: 0
        }
        
        .b-dashed {
            border-style: dashed 
        }
        
        @media (max-width: 991px) {
            .no-border-sm {
                border-width: 0
            }
        }
        
        @media (max-width: 767px) {
            .no-border-xs {
                border-width: 0
            }
        }
        
        .hover-action {
            display: none
        }
        
        .hover-rotate {
            -webkit-transition: all 0.2s ease-in-out 0.1s;
            transition: all 0.2s ease-in-out 0.1s
        }
        
        .hover-anchor:hover .hover-action,
        .hover-anchor:focus .hover-action,
        .hover-anchor:active .hover-action {
            display: inherit
        }
        
        .hover-anchor:hover .hover-rotate,
        .hover-anchor:focus .hover-rotate,
        .hover-anchor:active .hover-rotate {
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg)
        }
        
        .no-margin {
            margin: 0
        }
        
        .no-margin-l {
            margin-left: 0 
        }
        
        .no-margin-r {
            margin-right: 0 
        }
        
        .margin-auto {
            margin: auto
        }
        
        .m-n {
            margin: -16px
        }
        
        .m-h-n {
            margin-right: -16px;
            margin-left: -16px
        }
        
        .m-v-n {
            margin-top: -16px;
            margin-bottom: -16px
        }
        
        .m-l-n {
            margin-left: -16px
        }
        
        .m-r-n {
            margin-right: -16px
        }
        
        .m-t-n {
            margin-top: -16px
        }
        
        .m-b-n {
            margin-bottom: -16px
        }
        
        .no-padding {
            padding: 0 
        }
        
        .no-padding-l {
            padding-left: 0 
        }
        
        .no-padding-r {
            padding-right: 0 
        }
        
        .no-padding-v {
            padding-top: 0 ;
            padding-bottom: 0 
        }
        
        .padding {
            padding: 32px 32px
        }
        
        .padding-out {
            margin: -32px -32px
        }
        
        @media (max-width: 991px) {
            .padding {
                padding: 16px 16px
            }
            .padding-out {
                margin: -16px -16px
            }
        }
        
        @media (max-width: 767px) {
            .padding {
                padding: 8px 8px
            }
            .padding-out {
                margin: -8px -8px
            }
        }
        
        .no-radius {
            border-radius: 0 
        }
        
        .no-r-t {
            border-top-right-radius: 0;
            border-top-left-radius: 0
        }
        
        .no-r-r {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0
        }
        
        .no-r-b {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0
        }
        
        .no-r-l {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0
        }
        
        .r {
            border-radius: 3px
        }
        
        .r-t {
            border-top-right-radius: 3px;
            border-top-left-radius: 3px
        }
        
        .r-r {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px
        }
        
        .r-b {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px
        }
        
        .r-l {
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px
        }
        
        .r-2x {
            border-radius: 6px
        }
        
        .r-3x {
            border-radius: 9px
        }
        
        .scrollable {
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch
        }
        
        .scrollable.hover {
            overflow-y: hidden 
        }
        
        .scrollable.hover>* {
            margin-top: -1px
        }
        
        .scrollable.hover:hover {
            overflow: visible ;
            overflow-y: auto 
        }
        
        .smart .scrollable {
            overflow-y: auto 
        }
        
        .scroll-x {
            overflow: hidden;
            -webkit-overflow-scrolling: touch
        }
        
        .scroll-y {
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto
        }
        
        .scroll-x {
            overflow-x: auto
        }
        
        .no-shadow {
            -webkit-box-shadow: none ;
            box-shadow: none 
        }
        
        .box-shadow {
            -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-md {
            -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-lg {
            -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05)
        }
        
        .box-shadow-inset {
            -webkit-box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15);
            box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15)
        }
        
        .text-shadow {
            text-shadow: 0 4px 0 rgba(0, 0, 0, 0.1)
        }
        
        .no-l-h {
            line-height: 0
        }
        
        .l-h-sm {
            line-height: 0.6
        }
        
        .l-h-md {
            line-height: 1.2
        }
        
        .l-h {
            line-height: 1.42857143
        }
        
        .l-h-1x {
            line-height: 1
        }
        
        .l-h-2x {
            line-height: 2em
        }
        
        .l-s-0x {
            letter-spacing: 0
        }
        
        .l-s-1x {
            letter-spacing: 1px
        }
        
        .l-s-2x {
            letter-spacing: 2px
        }
        
        .l-s-3x {
            letter-spacing: 3px
        }
        
        .l-s {
            letter-spacing: 0.2em
        }
        
        .h-auto {
            height: auto 
        }
        
        .h-4x {
            height: 80px
        }
        
        .font-normal {
            font-weight: normal
        }
        
        .font-thin {
            font-weight: 300
        }
        
        .font-bold {
            font-weight: 700
        }
        
        .text-4x {
            font-size: 4em
        }
        
        .text-3x {
            font-size: 3em
        }
        
        .text-2x {
            font-size: 2em
        }
        
        .text-1-5x {
            font-size: 1.5em
        }
        
        .text-xl {
            font-size: 32px
        }
        
        .text-lg-xl {
            font-size: 28px
        }
        
        .text-lg {
            font-size: 24px
        }
        
        .text-md-lg {
            font-size: 20px
        }
        
        .text-md {
            font-size: 16px
        }
        
        .text-base {
            font-size: 14px
        }
        
        .text-sm {
            font-size: 13px
        }
        
        .text-xs {
            font-size: 12px
        }
        
        .text-xxs {
            font-size: 10px
        }
        
        .text-u-c {
            text-transform: uppercase
        }
        
        .text-l-t {
            text-decoration: line-through
        }
        
        .text-u-l {
            text-decoration: underline
        }
        
        .font-s-i {
            font-style: italic
        }
        
        .text-ellipsis {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }
        
        .w-s-no {
            white-space: nowrap
        }
        
        .text-fade {
            position: relative;
            overflow: hidden
        }
        
        .text-fade:after {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 70%;
            height: 1.2em;
            text-align: right;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 50%);
            content: ""
        }
        
        .w-20 {
            width: 20px;
            height: 20px
        }
        
        .w-32 {
            width: 32px;
            height: 32px
        }
        
        .w-48 {
            width: 48px;
            height: 48px
        }
        
        .w-64 {
            width: 64px;
            height: 64px
        }
        
        .w-xs {
            width: 90px
        }
        
        .w-sm {
            width: 120px
        }
        
        .w {
            width: 180px
        }
        
        .w-md {
            width: 200px
        }
        
        .w-lg {
            width: 240px
        }
        
        .w-4x {
            width: 440px
        }
        
        @media (min-width: 769px) {
            .mobile-show {
                display: none
            }
            .mobile-hide {
                display: block
            }
        }
        
        @media (max-width: 768px) {
            .mobile-show {
                display: block
            }
            .mobile-hide {
                display: none
            }
        }
        
        .i-16 {
            font-size: 16px;
            vertical-align: -15%
        }
        
        .i-20 {
            font-size: 20px;
            vertical-align: -19%
        }
        
        .i-24 {
            font-size: 24px;
            vertical-align: -23%
        }
        
        .text-dark {
            color: #475069
        }
        
        .text-dark-lt {
            color: #515c78
        }
        
        .text-dark-dk {
            color: #333 
        }
        
        .text-white {
            color: #fff
        }
        
        .text-white-lt {
            color: rgba(255, 255, 255, 0.54)
        }
        
        .text-white-dk {
            color: rgba(255, 255, 255, 0.87)
        }
        
        .text-black {
            color: #000
        }
        
        .text-black-lt {
            color: rgba(0, 0, 0, 0.54)
        }
        
        .text-black-dk {
            color: rgba(0, 0, 0, 0.87)
        }
        
        .caret-right {
            border-bottom: 5px solid transparent;
            border-top: 5px solid transparent;
            border-left: 5px dashed;
            -webkit-border-bottom: 5px solid transparent;
            -webkit-border-top: 5px solid transparent;
            -webkit-border-left: 5px dashed;
            display: inline-block;
            height: 0;
            vertical-align: middle;
            width: 0;
            margin-left: 2px;
            position: relative;
            top: -1px
        }
        
        .active-link {
            color: #ed3376;
            font-weight: 700
        }
        
        h2.info-page,
        .info-page.h2 {
            margin-top: 32px
        }
        
        h2.section-header,
        .section-header.h2 {
            margin: 0 auto 50px;
            font-weight: 500
        }
        
        .banner {
            margin: 20px 0 10px 0
        }
        
        .checkbox {
            -webkit-appearance: checkbox 
        }
        
        .disabled:hover {
            border: 0;
            background-color: #f6f6f6;
            color: #b6b6b6
        }
        
        .right-arrow:after {
            font-size: 84%;
            content: "\\25BA"
        }
        
        .no-m-h-gutter {
            margin-top: 0 ;
            margin-bottom: 0 
        }
        
        .no-m-v-gutter {
            margin-right: 0 ;
            margin-left: 0 
        }
        
        .no-p-h-gutter {
            padding-top: 0 ;
            padding-bottom: 0 
        }
        
        .no-p-v-gutter {
            padding-right: 0 ;
            padding-left: 0 
        }
        
        .vertical-divider {
            border-right: 1px solid #333
        }
        
        .subHead {
            font-size: 22px;
            line-height: 22px
        }
        
        .text-container,
        .media-container {
            position: relative
        }
        
        .image-hover-zoom {
            transition: 0.6s all
        }
        
        .image-hover-zoom:hover {
            transform: scale(1.03)
        }
        
        i.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg)
        }
        
        i.left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg)
        }
        
        i.up {
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg)
        }
        
        i.down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg)
        }
        
        .no-l-style {
            list-style: none
        }
        
        .off-screen {
            position: absolute;
            overflow: hidden;
            left: -99999px
        }
        
        .w-full {
            width: 100%
        }
        
        .w-auto {
            width: auto
        }
        
        .h-full {
            height: 100%
        }
        
        .min-h-5x {
            min-height: 500px
        }
        
        .b-shadow {
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08)
        }
        
        .flex {
            display: flex
        }
        
        .f-wrap {
            flex-wrap: wrap
        }
        
        .f-d-column {
            flex-direction: column
        }
        
        .a-i-center {
            align-items: center
        }
        
        .j-c-center {
            justify-content: center
        }
        
        .j-c-end {
            justify-content: flex-end
        }
        
        .a-s-center {
            align-self: center
        }
        
        @media (max-width: 768px) {
            .medium-down--f-d-column {
                flex-direction: column
            }
        }
        
        .o-f-hid {
            overflow: hidden
        }
        
        .o-f-vis {
            overflow: visible
        }
        
        .o-f-scl {
            overflow: scroll
        }
        
        .top-0 {
            top: 0
        }
        
        .top-1 {
            top: 1px
        }
        
        .top-2 {
            top: 2px
        }
        
        .top-3 {
            top: 3px
        }
        
        .top-4 {
            top: 4px
        }
        
        .top-5 {
            top: 5px
        }
        
        .top-6 {
            top: 6px
        }
        
        .top-7 {
            top: 7px
        }
        
        .bottom-0 {
            bottom: 0
        }
        
        .left-0 {
            left: 0
        }
        
        .right-0 {
            right: 0
        }
        
        .v-a-mid {
            vertical-align: middle
        }
        
        .pointer {
            cursor: pointer
        }
        
        .no-pointer {
            cursor: none 
        }
        
        .default-cursor {
            cursor: default
        }
        
        .no-scorll-bar::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background: transparent
        }
        
        img.afterpay-logo {
            width: 72px ;
            height: auto 
        }
        
        .ie {
            display: none
        }
        
        #quantity {
            height: 40px;
            font-size: 14px
        }
        
        .slick-prev {
            left: -10px
        }
        
        .slick-next {
            right: -10px
        }
        
        .slick-prev:before {
            content: "\\2329"
        }
        
        .slick-next:before {
            content: "\\232A"
        }
        
        .btn-primary .caret-right {
            top: 1px
        }
        
        .loaders-container {
            padding: 20px;
            margin: 0 auto;
            width: 700px;
            text-align: center;
            font-size: 0
        }
        
        .loaders-container .container {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            padding: 30px;
            width: 25%;
            height: 140px
        }
        
        .wave {
            margin-top: 15px;
            float: left;
            width: 18px;
            height: 40px;
            box-sizing: border-box;
            border: 2px solid #FFF;
            margin-left: -2px;
            animation: slide 0.6s infinite linear
        }
        
        .wave:first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px
        }
        
        .wave:last-child {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px
        }
        
        .wave:nth-child(2n+1) {
            animation-delay: 0.3s
        }
        
        .bg-tiled,
        .box,
        .lazyloading {
            background-color: rgba(252, 228, 222, 0.1);
            background-image: linear-gradient(45deg, rgba(252, 228, 222, 0.1) 25%, rgba(252, 228, 222, 0.75) 25%, rgba(252, 228, 222, 0.75) 75%, rgba(252, 228, 222, 0.1) 75%, rgba(252, 228, 222, 0.1)), linear-gradient(-45deg, rgba(252, 228, 222, 0.1) 25%, rgba(252, 228, 222, 0.75) 25%, rgba(252, 228, 222, 0.75) 75%, rgba(252, 228, 222, 0.1) 75%, rgba(252, 228, 222, 0.1));
            background-size: 50px 50px
        }
        
        .box {
            background-size: contain
        }
        
        .lazyload {
            opacity: 0
        }
        
        .lazyloading {
            opacity: 1;
            -webkit-transition: 600ms opacity;
            -moz-transition: 600ms opacity;
            -o-transition: 600ms opacity;
            transition: 600ms opacity
        }
        
        .lazyloaded {
            opacity: 1;
            -webkit-transition: 10ms opacity;
            -moz-transition: 10ms opacity;
            -o-transition: 10ms opacity;
            transition: 10ms opacity
        }
        
        .submenu {
            display: none;
            list-style-type: none
        }
        
        .product-img__container {
            position: relative
        }
        
        .productGrid .label {
            right: 40px;
            position: absolute
        }
        
        .productGrid .product-img__container {
            margin: 0 auto
        }
        
        .page-content {
            margin-bottom: 20px
        }
        
        .subtext {
            line-height: 20px
        }
        
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            filter: alpha(opacity=50);
            -moz-opacity: 0.75;
            -khtml-opacity: 0.75;
            opacity: 0.75;
            z-index: 10
        }
        
        .placeholder {
            background-color: #f6f6f6;
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden
        }
        
        .placeholder img {
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            width: 100%;
            transition: opacity 1s linear
        }
        
        .placeholder img.loaded {
            opacity: 1
        }
        
        .img-small {
            filter: blur(25px);
            transform: scale(1)
        }
        
        ::-webkit-scrollbar {
            width: 10px
        }
        
        ::-webkit-scrollbar-track {
            background: transparent
        }
        
        ::-webkit-scrollbar-thumb {
            background: #fce4de;
            border-radius: 5px
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #f8beaf
        }
        
        .stamped-fa-star,
        .stamped-fa-star-o,
        .stamped-fa-star-half-o {
            color: #ed3376 
        }
        
        ul#header-right-menu {
            list-style-type: none
        }
        
        ul#header-right-menu li {
            display: inline;
            padding: 0 0 0 7px
        }
        
        ul#header-right-menu .megamenu p,
        ul#header-right-menu .megamenu .p-tag {
            margin: 6px 0 
        }
        
        ul#header-right-menu .megamenu_container {
            height: inherit;
            vertical-align: middle
        }
        
        ul#header-right-menu .megamenu_container>ul {
            text-align: inherit
        }
        
        ul#header-right-menu .megamenu li:hover .dropdown_fullwidth {
            -webkit-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.24);
            -moz-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.24);
            box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.24);
            top: 74px;
            left: 0;
            text-align: left;
            padding-top: 16px;
            z-index: 100000
        }
        
        ul#header-right-menu .megamenu li ul {
            margin: 0
        }
        
        ul#header-right-menu .megamenu li a:hover {
            border-bottom: none
        }
        
        .header__dropdown_points {
            margin: 8px 0
        }
        
        .header__dropdown-menu--outer {
            text-align: left;
            padding: 12px;
            min-width: 166px
        }
        
        .header__dropdown-menu--outer:hover .icon-arrow-down2 {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg)
        }
        
        .header--dropdown-menu li {
            padding: 0 12px ;
            display: block 
        }
        
        .header--dropdown-menu li:not(:last-child) {
            margin-bottom: 16px 
        }
        
        ul#header-right-menu>li:not(:last-child) {
            position: relative
        }
        
        ul#header-right-menu>li:last-child {
            position: relative
        }
        
        span#CartCount {
            text-align: center;
            left: 12px;
            bottom: 12px;
            border-radius: 50%;
            color: #fff;
            background: #ed3376;
            border: 1px solid #ed3376;
            font-size: 16px;
            position: absolute;
            width: 22px;
            height: 22px;
            font-weight: bold
        }
        
        .nav-bk {
            left: 0;
            top: 32px;
            height: 0px;
            z-index: 100;
            transition: height 0.4s;
            padding: 0 
        }
        
        .nav-bk:after {
            content: "";
            position: absolute;
            width: 100%;
            bottom: 1px;
            z-index: -1;
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08)
        }
        
        .widget-title {
            padding: 35px 0 15px;
            margin-bottom: 5px ;
            font-size: 13px;
            line-height: 13px;
            letter-spacing: 0.2em;
            text-align: center
        }
        
        .sidebar-wrapper {
            display: block;
            width: 40%
        }
        
        .product-eyebrow {
            font-size: 12px;
            line-height: 100%;
            letter-spacing: 0.2em
        }
        
        .page-menu {
            font-size: 16px;
            line-height: 16px;
            list-style-type: none
        }
        
        .page-menu li {
            font-size: 16px;
            line-height: 8px;
            display: inline-block;
            padding: 5px 10px;
            cursor: pointer;
            border-right: 1px solid #333
        }
        
        .name-title {
            font-style: italic;
            font-size: 15px;
            line-height: 22px
        }
        
        .page-content {
            margin: auto;
            float: none
        }
        
        .code {
            font-size: 15px;
            line-height: 15px
        }
        
        .code span {
            color: #ed3376
        }
        
        .our-story-image-1 {
            float: right
        }
        
        .our-story-image-3 {
            float: right
        }
        
        .our-story-image-4 {
            float: right;
            padding: 5px
        }
        
        .our-story-image-5 {
            float: left;
            padding: 5px
        }
        
        .our-story-signature {
            margin: 20px auto 0;
            display: block
        }
        
        .center-image {
            margin: auto;
            display: block
        }
        
        .close {
            background: #606061;
            color: #fff;
            line-height: 25px;
            position: absolute;
            right: -12px;
            text-align: center;
            top: -10px;
            width: 24px;
            text-decoration: none;
            font-weight: bold;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            -moz-box-shadow: 1px 1px 3px #000;
            -webkit-box-shadow: 1px 1px 3px #000;
            box-shadow: 1px 1px 3px #000
        }
        
        .close:hover {
            background: #00d9ff
        }
        
        .collection-swatch {
            margin-top: 10px;
            text-align: center
        }
        
        .collection-swatch .swatch label {
            min-width: 18px;
            height: 18px;
            line-height: 16px
        }
        
        .collection-swatch .swatch input+label {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none
        }
        
        .collection-swatch .swatch .swatch-element {
            display: inline-block;
            margin: 0 4px 4px 0;
            padding: 0;
            float: none
        }
        
        .pagination .current {
            border-bottom: 2px solid #dddee0
        }
        
        .collection-email-signup .email-signup form {
            margin: auto
        }
        
        .read-more {
            text-transform: uppercase;
            text-decoration: underline
        }
        
        .description {
            display: block 
        }
        
        @media (max-width: 480px) {
            .section-header__title {
                font-size: 2em
            }
        }
        
        .product-card {
            transform: scale(0.94)
        }
        
        #CollectionListCheckbox .slick-prev {
            left: 0;
            top: 25%
        }
        
        #CollectionListCheckbox .slick-next {
            right: 0;
            top: 25%
        }
        
        @media (max-width: 768px) {
            .checkbox-collection>.grid__item {
                padding-left: 0;
                padding-right: 0
            }
        }
        
        .bundle-carousel>.grid__item {
            padding-left: 2%;
            padding-right: 2%
        }
        
        .upsell-checkbox {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin: 0 auto;
            border: 2px solid #333;
            background: #fff;
            background: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/white_checkmark.svg?v=15108749163341302806") no-repeat center center;
            background-size: auto;
            -webkit-transition: background-color 0.3s;
            -moz-transition: background-color 0.3s;
            -o-transition: background-color 0.3s;
            transition: background-color 0.3s
        }
        
        .upsell-checkbox.shipping-checkbox {
            width: 14px;
            height: 14px;
            background-color: #5cb85c;
            border-color: #5cb85c;
            border-width: 1px;
            padding: 7px;
            vertical-align: text-top
        }
        
        @media (min-width: 769px) {
            .pick-grid__item {
                min-height: 260px
            }
        }
        
        @media (max-width: 768px) {
            .pick-grid__item {
                min-height: 340px
            }
        }
        
        @media (max-width: 480px) {
            .pick-grid__item {
                min-height: 240px
            }
        }
        
        #pp-social-share-block ul {
            margin: 0;
            list-style-type: none
        }
        
        #pp-social-share-block ul li {
            display: inline-block;
            font-size: 20px;
            padding-right: 16px
        }
        
        #pp-social-share-block ul li a {
            color: #d4d4d4
        }
        
        #pp-social-share-block ul li a:hover {
            text-decoration: none;
            color: #4d4d4d
        }
        
        img[data-sizes="auto"] {
            display: block;
            width: 100%
        }
        
        .shoppable-ig-collage:hover {
            opacity: 0.8
        }
        
        .single-option-selector {
            font-size: 22px
        }
        
        .video-container .bg-img {
            padding-top: 56%;
            background-color: lightgrey
        }
        
        .video-container .bg-img span {
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.3)
        }
        
        .video-container .bg-img span img {
            top: calc(50% - 32px);
            left: calc(50% - 32px)
        }
        
        .upsellPopWindow.btn-secondary {
            right: 8px;
            bottom: 0
        }
        
        @font-face {
            font-family: 'JustLovely';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/JustLovely_Slanted_wide.ttf?v=14518361461016194958");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/JustLovely_Slanted_wide.ttf?v=14518361461016194958") format("truetype")
        }
        
        .swatch-element .label-text {
            content: 'new';
            color: red;
            font-size: 8px;
            position: absolute;
            top: -18px;
            right: -4px
        }
        
        #jumpToShow .swatch-element .label-text {
            top: -12px
        }
        
        .product_section .swatch-element.animated {
            transform: translate(50vw)
        }
        
        .product_section.animated .swatch-element.animated {
            animation: swatch-element-animation 0.6s forwards
        }
        
        .afterpay-paragraph {
            font-size: 12px
        }
        
        .animate {
            transform: translate3d(0, 0, 0);
            perspective: 1000;
            filter: blur(0);
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            transform-origin: center left
        }
        
        .animate--shrink {
            animation-duration: 1s;
            animation-name: shrink;
            animation-timing-function: 'linear'
        }
        
        .animate--grow {
            animation-duration: 1s;
            animation-timing-function: 'linear';
            animation-name: grow
        }
        
        @media (max-width: 480px) {
            .blog__header h1,
            .blog__header .h1 {
                font-size: 1.6em
            }
        }
        
        .closer-line {
            letter-spacing: -4px
        }
        
        
        
        #search-bar form,
        #mobile-search-bar form {
            position: relative;
            height: 60px;
            overflow: hidden;
            margin: auto;
            -webkit-backface-visibility: hidden;
            background: rgba(0, 0, 0, 0)
        }
        
        #search-bar form.opened,
        #mobile-search-bar form.opened {
            width: 330px
        }
        
        #search-bar form.opened:before,
        #mobile-search-bar form.opened:before {
            position: fixed;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.75)
        }
        
        #search-bar input[type="search"],
        #mobile-search-bar input[type="search"] {
            padding-left: 66px;
            text-align: left;
            position: absolute;
            top: 0;
            right: 0;
            height: 60px;
            width: 0;
            float: left;
            font-size: 20px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            outline: none;
            border: none;
            color: #4d4d4d
        }
        
        #search-bar form.opened input[type="search"],
        #mobile-search-bar form.opened input[type="search"] {
            width: 300px
        }
        
        #search-bar button,
        #mobile-search-bar button {
            position: absolute;
            top: 6px;
            left: 0;
            width: 60px;
            height: 60px;
            background: #fff;
            border: none;
            color: #ed3376;
            font-size: 1.3em;
            outline: none;
            cursor: pointer
        }
        
        #search-bar form.opened button,
        #mobile-search-bar form.opened button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0
        }
        
        #search-bar .search-label,
        #mobile-search-bar .search-label {
            color: #ed3376;
            cursor: pointer;
            position: relative;
            bottom: 40px;
            left: 60px;
            width: 150px
        }
        
        .search-bar-line {
            width: 150px;
            margin: -33px 0 0 50px;
            border-top: 1px solid #4d4d4d
        }
        
        .search-bar-wrapper {
            max-width: 100%
        }
        
        .store-service-list {
            margin-left: -8px
        }
        
        @media (max-width: 768px) {
            .store-service-list {
                margin-left: -4px
            }
        }
        
        .store-service-icon-s {
            height: 24px;
            margin: 0 8px
        }
        
        @media (max-width: 768px) {
            .store-service-icon-s {
                height: 20px;
                margin: 0 4px
            }
        }
        
        .store-service-icon {
            height: 48px
        }
        
        .user-list {
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 2rem;
            position: relative
        }
        
        .directory {
            margin: 0;
            height: calc(26 * 60px);
            overflow-y: scroll;
            overflow-x: hidden
        }
        
        .directory>li {
            width: 100%;
            list-style-type: none;
            padding: 5px 5px 5px 15px;
            border-bottom: 1px solid #f7f7f7;
            transition: background 0.2s ease
        }
        
        .directory>li:hover {
            background: #f1f1f1
        }
        
        .section-label {
            font-size: 16px;
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap
        }
        
        .ui-draggable-dragging {
            z-index: 1;
            border-bottom-width: 0 
        }
        
        .ui-draggable-dragging:hover {
            background: transparent 
        }
        
        .ui-draggable-placeholder {
            background: #f1f1f1
        }
        
        #container p,
        #container .p-tag {
            margin: 20px 10px 10px 11px;
            font-size: 20px
        }
        
        #azindex {
            background: #75B9D0;
            float: left;
            margin: 5px 0 20px 10px;
            padding: 0px 5px 15px 5px;
            width: 520px
        }
        
        * html #azindex {
            padding: 5px 5px 10px 5px;
            width: 490px
        }
        
        #index {
            font: bold 100% Verdana, Helvetica, sans-serif;
            margin: 0;
            padding: 0
        }
        
        #index li {
            float: left;
            height: 2em;
            list-style-type: none;
            margin: 0.65em 0.3em;
            padding: 0;
            width: 3em
        }
        
        * html #index li {
            margin: 0.2em 0.2em
        }
        
        #index a:link,
        #index a:visited {
            background: #fff;
            color: navy;
            display: block;
            height: 2em;
            padding: 0.75em 0 0 0;
            text-align: center;
            text-decoration: none;
            width: 3em
        }
        
        #index a:hover {
            background: #93D1E4;
            color: #fff;
            text-decoration: underline
        }
        
        .clear {
            clear: both
        }
        
        #TopBannerMessage {
            z-index: 1000
        }
        
        #TopBannerMessage span.icon-fallback-text {
            bottom: -8px;
            right: 12px
        }
        
        #TopBannerMessage .close-message {
            top: 5px;
            right: 18px
        }
        
        #TopBannerMessage.international-site {
            background-color: #f7f7f7;
            bottom: 0;
            width: 100%;
            z-index: 9999;
            position: fixed
        }
        
        #TopBannerMessage.international-site .close-message {
            top: 2px;
            right: 0
        }
        
        #TopBannerMessage p,
        #TopBannerMessage .p-tag {
            opacity: 0
        }
        
        #TopBannerMessage p.active,
        #TopBannerMessage .active.p-tag {
            -webkit-animation-name: topbanner;
            -webkit-animation-duration: 5s;
            animation-name: topbanner;
            animation-duration: 5s
        }
        
        #PromotionBannerMessage {
            background: linear-gradient(84deg, #732038, #e75666);
            background-size: 200% 200%;
            animation: PromoColorAnimation 6s ease infinite
        }
        
        #PromotionBannerMessage a:hover {
            color: #fff
        }
        
        .desk-top-fix-nav {
            top: -100px;
            position: absolute ;
            transition: top 0.6s
        }
        
        .cart__total-discount {
            color: red
        }
        
        .drawer__header .drawer__close {
            top: 12px;
            right: 15px
        }
        
        #FbLiveWidget {
            position: fixed;
            z-index: 1001;
            top: 5%;
            right: 3%
        }
        
        .scroll-top {
            bottom: 100px;
            right: 60px;
            background: rgba(255, 255, 255, 0.5);
            padding: 4px 6px;
            width: 52px;
            height: 52px;
            box-sizing: border-box;
            font-size: 30px;
            border-radius: 100%;
            color: #fce4de;
            cursor: pointer;
            border: 5px solid #fce4de;
            z-index: 10;
            display: none
        }
        
        @media (max-width: 768px) {
            .scroll-top {
                bottom: 8px;
                right: 18px
            }
        }
        
        .scroll-top:hover {
            color: #f8beaf;
            border: 5px solid #f8beaf
        }
        
        .mobile-pull-img__right .mobile-pull-img__right--content {
            margin-left: 50%;
            text-align: center ;
            padding: 20px 40px
        }
        
        @media (max-width: 480px) {
            .mobile-pull-img__right .mobile-pull-img__right--content {
                margin-left: 0;
                background-color: rgba(255, 255, 255, 0.6)
            }
            .mobile-pull-img__right .mobile-pull-img__right--content .text-md-lg {
                font-size: 16px
            }
        }
        
        @media (min-width: 769px) {
            .description--outer {
                padding: 0 30px
            }
        }
        
        .text-outline {
            -webkit-background-clip: text;
            -webkit-text-stroke: 1px #333;
            -webkit-text-fill-color: #f38189
        }
        
        .black-trace {
            text-shadow: #333 0.02em 0.02em 0, #333 -0.02em -0.02em 0, #333 -0.03em 0.02em 0, #333 0.02em -0.02em 0
        }
        
        .select-hidden {
            display: none;
            visibility: hidden;
            padding-right: 10px
        }
        
        .select {
            display: inline-block;
            position: relative;
            font-size: 16px;
            color: #333;
            width: 100%;
            height: 40px
        }
        
        @media (max-width: 768px) {
            #custmeta input[type="submit"] {
                display: block
            }
        }
        
        .fa-star,
        .fa-star-o,
        .fa-star-half-o {
            color: #ed3376 
        }
        
        .summary-rating-bar>div {
            background: #ed3376 ;
            color: #fff 
        }
        
        h2.stamped-header-title,
        .stamped-header-title.h2 {
            display: none 
        }
        
        .hide-text span.stamped-badge-caption {
            display: none
        }
        
        .fa-star:before,
        .fa-star-o:before,
        .fa-star-half-o:before {
            font-size: 17px 
        }
        
        .selector-wrapper {
            position: absolute;
            left: 9999px
        }
        
        i.right {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg)
        }
        
        i.left {
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg)
        }
        
        i.up {
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg)
        }
        
        i.down {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg)
        }
        
        @media (max-width: 480px) {
            ul.icon-block li {
                margin: 0;
                font-size: 9px
            }
            ul.icon-block li span {
                vertical-align: super
            }
        }
      `}</style>
    </>
  )
}
