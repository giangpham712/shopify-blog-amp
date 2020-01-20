export default function Layout({ children }) {
  return (
    <>
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
            opacity: 1 !important
        }
        
        .ie delay-025s,
        .ie .delay-0s,
        .ie .delay-025s,
        .ie .delay-05s,
        .ie .delay-075s,
        .ie .delay-1s {
            opacity: 1 !important
        }
        
        .ie select {
            background-image: none !important
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
        
        .grid,
        .grid--rev,
        .grid--full,
        .grid-uniform {
            *zoom: 1
        }
        
        .grid:after,
        .grid--rev:after,
        .grid--full:after,
        .grid-uniform:after {
            content: '';
            display: table;
            clear: both
        }
        
        .grid__item.clear {
            clear: both
        }
        
        .grid,
        .grid--rev,
        .grid--full,
        .grid-uniform {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-left: -16px;
            margin-right: -16px
        }
        
        @media (max-width: 768px) {
            .grid,
            .grid--rev,
            .grid--full,
            .grid-uniform {
                margin-left: -8px;
                margin-right: -8px
            }
        }
        
        .grid__item {
            box-sizing: border-box;
            float: left;
            min-height: 1px;
            padding-left: 16px;
            padding-right: 16px;
            vertical-align: top;
            width: 100%
        }
        
        @media (max-width: 768px) {
            .grid__item {
                padding-left: 8px;
                padding-right: 8px
            }
        }
        
        .grid--rev {
            direction: rtl;
            text-align: left
        }
        
        .grid--rev>.grid__item {
            direction: ltr;
            text-align: left;
            float: right
        }
        
        .grid--full {
            margin-left: 0
        }
        
        .grid--full>.grid__item {
            padding-left: 0
        }
        
        .one-whole {
            width: 100%
        }
        
        .one-half {
            width: 50%
        }
        
        .one-third {
            width: 33.333%
        }
        
        .two-thirds {
            width: 66.666%
        }
        
        .one-quarter {
            width: 25%
        }
        
        .two-quarters {
            width: 50%
        }
        
        .three-quarters {
            width: 75%
        }
        
        .one-fifth {
            width: 20%
        }
        
        .two-fifths {
            width: 40%
        }
        
        .three-fifths {
            width: 60%
        }
        
        .four-fifths {
            width: 80%
        }
        
        .one-sixth {
            width: 16.666%
        }
        
        .two-sixths {
            width: 33.333%
        }
        
        .three-sixths {
            width: 50%
        }
        
        .four-sixths {
            width: 66.666%
        }
        
        .five-sixths {
            width: 83.333%
        }
        
        .one-eighth {
            width: 12.5%
        }
        
        .two-eighths {
            width: 25%
        }
        
        .three-eighths {
            width: 37.5%
        }
        
        .four-eighths {
            width: 50%
        }
        
        .five-eighths {
            width: 62.5%
        }
        
        .six-eighths {
            width: 75%
        }
        
        .seven-eighths {
            width: 87.5%
        }
        
        .one-tenth {
            width: 10%
        }
        
        .two-tenths {
            width: 20%
        }
        
        .three-tenths {
            width: 30%
        }
        
        .four-tenths {
            width: 40%
        }
        
        .five-tenths {
            width: 50%
        }
        
        .six-tenths {
            width: 60%
        }
        
        .seven-tenths {
            width: 70%
        }
        
        .eight-tenths {
            width: 80%
        }
        
        .nine-tenths {
            width: 90%
        }
        
        .one-twelfth {
            width: 8.333%
        }
        
        .two-twelfths {
            width: 16.666%
        }
        
        .three-twelfths {
            width: 25%
        }
        
        .four-twelfths {
            width: 33.333%
        }
        
        .five-twelfths {
            width: 41.666%
        }
        
        .six-twelfths {
            width: 50%
        }
        
        .seven-twelfths {
            width: 58.333%
        }
        
        .eight-twelfths {
            width: 66.666%
        }
        
        .nine-twelfths {
            width: 75%
        }
        
        .ten-twelfths {
            width: 83.333%
        }
        
        .eleven-twelfths {
            width: 91.666%
        }
        
        .show {
            display: block !important
        }
        
        .hide {
            display: none !important
        }
        
        .text-left {
            text-align: left !important
        }
        
        .text-right {
            text-align: right !important
        }
        
        .text-center {
            text-align: center !important
        }
        
        .text-justify {
            text-align: justify !important
        }
        
        .left {
            float: left !important
        }
        
        .right {
            float: right !important
        }
        
        .p-xs {
            padding: 4px !important
        }
        
        .p-sm {
            padding: 8px !important
        }
        
        .p {
            padding: 16px !important
        }
        
        .p-md {
            padding: 24px !important
        }
        
        .p-lg {
            padding: 32px !important
        }
        
        .p-xlg {
            padding: 48px !important
        }
        
        .p-t-xs {
            padding-top: 4px !important
        }
        
        .p-t-sm {
            padding-top: 8px !important
        }
        
        .p-t {
            padding-top: 16px !important
        }
        
        .p-t-md {
            padding-top: 24px !important
        }
        
        .p-t-lg {
            padding-top: 32px !important
        }
        
        .p-t-xlg {
            padding-top: 48px !important
        }
        
        .p-b-xs {
            padding-bottom: 4px !important
        }
        
        .p-b-sm {
            padding-bottom: 8px !important
        }
        
        .p-b {
            padding-bottom: 16px !important
        }
        
        .p-b-md {
            padding-bottom: 24px !important
        }
        
        .p-b-lg {
            padding-bottom: 32px !important
        }
        
        .p-b-xlg {
            padding-bottom: 48px !important
        }
        
        .p-l-xs {
            padding-left: 4px !important
        }
        
        .p-l-sm {
            padding-left: 8px !important
        }
        
        .p-l {
            padding-left: 16px !important
        }
        
        .p-l-md {
            padding-left: 24px !important
        }
        
        .p-l-lg {
            padding-left: 32px !important
        }
        
        .p-l-xlg {
            padding-left: 48px !important
        }
        
        .p-r-xs {
            padding-right: 4px !important
        }
        
        .p-r-sm {
            padding-right: 8px !important
        }
        
        .p-r {
            padding-right: 16px !important
        }
        
        .p-r-md {
            padding-right: 24px !important
        }
        
        .p-r-lg {
            padding-right: 32px !important
        }
        
        .p-r-xlg {
            padding-right: 48px !important
        }
        
        .p-v-xs {
            padding-top: 4px !important;
            padding-bottom: 4px !important
        }
        
        .p-v-sm {
            padding-top: 8px !important;
            padding-bottom: 8px !important
        }
        
        .p-v {
            padding-top: 16px !important;
            padding-bottom: 16px !important
        }
        
        .p-v-md {
            padding-top: 24px !important;
            padding-bottom: 24px !important
        }
        
        .p-v-lg {
            padding-top: 32px !important;
            padding-bottom: 32px !important
        }
        
        .p-v-xlg {
            padding-top: 48px !important;
            padding-bottom: 48px !important
        }
        
        .no-padding-h {
            padding-right: 4px !important;
            padding-left: 4px !important
        }
        
        .p-h-xs {
            padding-right: 4px !important;
            padding-left: 4px !important
        }
        
        .p-h-sm {
            padding-right: 8px !important;
            padding-left: 8px !important
        }
        
        .p-h {
            padding-right: 16px !important;
            padding-left: 16px !important
        }
        
        .p-h-md {
            padding-right: 24px !important;
            padding-left: 24px !important
        }
        
        .p-h-lg {
            padding-right: 32px !important;
            padding-left: 32px !important
        }
        
        .p-h-xlg {
            padding-right: 48px !important;
            padding-left: 48px !important
        }
        
        .no-margin {
            margin: 0px !important
        }
        
        .m-xs {
            margin: 4px !important
        }
        
        .m-sm {
            margin: 8px !important
        }
        
        .m {
            margin: 16px !important
        }
        
        .m-md {
            margin: 24px !important
        }
        
        .m-lg {
            margin: 32px !important
        }
        
        .m-xlg {
            margin: 48px !important
        }
        
        .m-t-xs {
            margin-top: 4px !important
        }
        
        .m-t-sm {
            margin-top: 8px !important
        }
        
        .m-t {
            margin-top: 16px !important
        }
        
        .m-t-md {
            margin-top: 24px !important
        }
        
        .m-t-lg {
            margin-top: 32px !important
        }
        
        .m-t-xlg {
            margin-top: 48px !important
        }
        
        .m-t-1x {
            margin-top: 100px !important
        }
        
        .m-b-xs {
            margin-bottom: 4px !important
        }
        
        .m-b-sm {
            margin-bottom: 8px !important
        }
        
        .m-b {
            margin-bottom: 16px !important
        }
        
        .m-b-md {
            margin-bottom: 24px !important
        }
        
        .m-b-lg {
            margin-bottom: 32px !important
        }
        
        .m-b-xlg {
            margin-bottom: 48px !important
        }
        
        .m-l-xs {
            margin-left: 4px !important
        }
        
        .m-l-sm {
            margin-left: 8px !important
        }
        
        .m-l {
            margin-left: 16px !important
        }
        
        .m-l-md {
            margin-left: 24px !important
        }
        
        .m-l-lg {
            margin-left: 32px !important
        }
        
        .m-l-xlg {
            margin-left: 48px !important
        }
        
        .m-r-xs {
            margin-right: 4px !important
        }
        
        .m-r-sm {
            margin-right: 8px !important
        }
        
        .m-r {
            margin-right: 16px !important
        }
        
        .m-r-md {
            margin-right: 24px !important
        }
        
        .m-r-lg {
            margin-right: 32px !important
        }
        
        .m-r-xlg {
            margin-right: 48px !important
        }
        
        .no-margin-v {
            margin-top: 0px !important;
            margin-bottom: 0px !important
        }
        
        .m-v-xs {
            margin-top: 4px !important;
            margin-bottom: 4px !important
        }
        
        .m-v-sm {
            margin-top: 8px !important;
            margin-bottom: 8px !important
        }
        
        .m-v {
            margin-top: 16px !important;
            margin-bottom: 16px !important
        }
        
        .m-v-md {
            margin-top: 24px !important;
            margin-bottom: 24px !important
        }
        
        .m-v-lg {
            margin-top: 32px !important;
            margin-bottom: 32px !important
        }
        
        .m-v-xlg {
            margin-top: 48px !important;
            margin-bottom: 48px !important
        }
        
        .no-margin-h {
            margin-right: 0px !important;
            margin-left: 0px !important
        }
        
        .m-h-xs {
            margin-right: 4px !important;
            margin-left: 4px !important
        }
        
        .m-h-sm {
            margin-right: 8px !important;
            margin-left: 8px !important
        }
        
        .m-h {
            margin-right: 16px !important;
            margin-left: 16px !important
        }
        
        .m-h-md {
            margin-right: 24px !important;
            margin-left: 24px !important
        }
        
        .m-h-lg {
            margin-right: 32px !important;
            margin-left: 32px !important
        }
        
        .m-h-xlg {
            margin-right: 48px !important;
            margin-left: 48px !important
        }
        
        .b-a {
            border: 1px solid #dddee0
        }
        
        @media only screen and (max-width: 480px) {
            .small--one-whole {
                width: 100%
            }
            .small--one-half {
                width: 50%
            }
            .small--one-third {
                width: 33.333%
            }
            .small--two-thirds {
                width: 66.666%
            }
            .small--one-quarter {
                width: 25%
            }
            .small--two-quarters {
                width: 50%
            }
            .small--three-quarters {
                width: 75%
            }
            .small--one-fifth {
                width: 20%
            }
            .small--two-fifths {
                width: 40%
            }
            .small--three-fifths {
                width: 60%
            }
            .small--four-fifths {
                width: 80%
            }
            .small--one-sixth {
                width: 16.666%
            }
            .small--two-sixths {
                width: 33.333%
            }
            .small--three-sixths {
                width: 50%
            }
            .small--four-sixths {
                width: 66.666%
            }
            .small--five-sixths {
                width: 83.333%
            }
            .small--one-eighth {
                width: 12.5%
            }
            .small--two-eighths {
                width: 25%
            }
            .small--three-eighths {
                width: 37.5%
            }
            .small--four-eighths {
                width: 50%
            }
            .small--five-eighths {
                width: 62.5%
            }
            .small--six-eighths {
                width: 75%
            }
            .small--seven-eighths {
                width: 87.5%
            }
            .small--one-tenth {
                width: 10%
            }
            .small--two-tenths {
                width: 20%
            }
            .small--three-tenths {
                width: 30%
            }
            .small--four-tenths {
                width: 40%
            }
            .small--five-tenths {
                width: 50%
            }
            .small--six-tenths {
                width: 60%
            }
            .small--seven-tenths {
                width: 70%
            }
            .small--eight-tenths {
                width: 80%
            }
            .small--nine-tenths {
                width: 90%
            }
            .small--one-twelfth {
                width: 8.333%
            }
            .small--two-twelfths {
                width: 16.666%
            }
            .small--three-twelfths {
                width: 25%
            }
            .small--four-twelfths {
                width: 33.333%
            }
            .small--five-twelfths {
                width: 41.666%
            }
            .small--six-twelfths {
                width: 50%
            }
            .small--seven-twelfths {
                width: 58.333%
            }
            .small--eight-twelfths {
                width: 66.666%
            }
            .small--nine-twelfths {
                width: 75%
            }
            .small--ten-twelfths {
                width: 83.333%
            }
            .small--eleven-twelfths {
                width: 91.666%
            }
            .small--show {
                display: block !important
            }
            .small--hide {
                display: none !important
            }
            .small--text-left {
                text-align: left !important
            }
            .small--text-right {
                text-align: right !important
            }
            .small--text-center {
                text-align: center !important
            }
            .small--text-justify {
                text-align: justify !important
            }
            .small--left {
                float: left !important
            }
            .small--right {
                float: right !important
            }
            .small--p-xs {
                padding: 4px !important
            }
            .small--p-sm {
                padding: 8px !important
            }
            .small--p {
                padding: 16px !important
            }
            .small--p-md {
                padding: 24px !important
            }
            .small--p-lg {
                padding: 32px !important
            }
            .small--p-xlg {
                padding: 48px !important
            }
            .small--p-t-xs {
                padding-top: 4px !important
            }
            .small--p-t-sm {
                padding-top: 8px !important
            }
            .small--p-t {
                padding-top: 16px !important
            }
            .small--p-t-md {
                padding-top: 24px !important
            }
            .small--p-t-lg {
                padding-top: 32px !important
            }
            .small--p-t-xlg {
                padding-top: 48px !important
            }
            .small--p-b-xs {
                padding-bottom: 4px !important
            }
            .small--p-b-sm {
                padding-bottom: 8px !important
            }
            .small--p-b {
                padding-bottom: 16px !important
            }
            .small--p-b-md {
                padding-bottom: 24px !important
            }
            .small--p-b-lg {
                padding-bottom: 32px !important
            }
            .small--p-b-xlg {
                padding-bottom: 48px !important
            }
            .small--p-l-xs {
                padding-left: 4px !important
            }
            .small--p-l-sm {
                padding-left: 8px !important
            }
            .small--p-l {
                padding-left: 16px !important
            }
            .small--p-l-md {
                padding-left: 24px !important
            }
            .small--p-l-lg {
                padding-left: 32px !important
            }
            .small--p-l-xlg {
                padding-left: 48px !important
            }
            .small--p-r-xs {
                padding-right: 4px !important
            }
            .small--p-r-sm {
                padding-right: 8px !important
            }
            .small--p-r {
                padding-right: 16px !important
            }
            .small--p-r-md {
                padding-right: 24px !important
            }
            .small--p-r-lg {
                padding-right: 32px !important
            }
            .small--p-r-xlg {
                padding-right: 48px !important
            }
            .small--p-v-xs {
                padding-top: 4px !important;
                padding-bottom: 4px !important
            }
            .small--p-v-sm {
                padding-top: 8px !important;
                padding-bottom: 8px !important
            }
            .small--p-v {
                padding-top: 16px !important;
                padding-bottom: 16px !important
            }
            .small--p-v-md {
                padding-top: 24px !important;
                padding-bottom: 24px !important
            }
            .small--p-v-lg {
                padding-top: 32px !important;
                padding-bottom: 32px !important
            }
            .small--p-v-xlg {
                padding-top: 48px !important;
                padding-bottom: 48px !important
            }
            .small--no-padding-h {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .small--p-h-xs {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .small--p-h-sm {
                padding-right: 8px !important;
                padding-left: 8px !important
            }
            .small--p-h {
                padding-right: 16px !important;
                padding-left: 16px !important
            }
            .small--p-h-md {
                padding-right: 24px !important;
                padding-left: 24px !important
            }
            .small--p-h-lg {
                padding-right: 32px !important;
                padding-left: 32px !important
            }
            .small--p-h-xlg {
                padding-right: 48px !important;
                padding-left: 48px !important
            }
            .small--no-margin {
                margin: 0px !important
            }
            .small--m-xs {
                margin: 4px !important
            }
            .small--m-sm {
                margin: 8px !important
            }
            .small--m {
                margin: 16px !important
            }
            .small--m-md {
                margin: 24px !important
            }
            .small--m-lg {
                margin: 32px !important
            }
            .small--m-xlg {
                margin: 48px !important
            }
            .small--m-t-xs {
                margin-top: 4px !important
            }
            .small--m-t-sm {
                margin-top: 8px !important
            }
            .small--m-t {
                margin-top: 16px !important
            }
            .small--m-t-md {
                margin-top: 24px !important
            }
            .small--m-t-lg {
                margin-top: 32px !important
            }
            .small--m-t-xlg {
                margin-top: 48px !important
            }
            .small--m-t-1x {
                margin-top: 100px !important
            }
            .small--m-b-xs {
                margin-bottom: 4px !important
            }
            .small--m-b-sm {
                margin-bottom: 8px !important
            }
            .small--m-b {
                margin-bottom: 16px !important
            }
            .small--m-b-md {
                margin-bottom: 24px !important
            }
            .small--m-b-lg {
                margin-bottom: 32px !important
            }
            .small--m-b-xlg {
                margin-bottom: 48px !important
            }
            .small--m-l-xs {
                margin-left: 4px !important
            }
            .small--m-l-sm {
                margin-left: 8px !important
            }
            .small--m-l {
                margin-left: 16px !important
            }
            .small--m-l-md {
                margin-left: 24px !important
            }
            .small--m-l-lg {
                margin-left: 32px !important
            }
            .small--m-l-xlg {
                margin-left: 48px !important
            }
            .small--m-r-xs {
                margin-right: 4px !important
            }
            .small--m-r-sm {
                margin-right: 8px !important
            }
            .small--m-r {
                margin-right: 16px !important
            }
            .small--m-r-md {
                margin-right: 24px !important
            }
            .small--m-r-lg {
                margin-right: 32px !important
            }
            .small--m-r-xlg {
                margin-right: 48px !important
            }
            .small--no-margin-v {
                margin-top: 0px !important;
                margin-bottom: 0px !important
            }
            .small--m-v-xs {
                margin-top: 4px !important;
                margin-bottom: 4px !important
            }
            .small--m-v-sm {
                margin-top: 8px !important;
                margin-bottom: 8px !important
            }
            .small--m-v {
                margin-top: 16px !important;
                margin-bottom: 16px !important
            }
            .small--m-v-md {
                margin-top: 24px !important;
                margin-bottom: 24px !important
            }
            .small--m-v-lg {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }
            .small--m-v-xlg {
                margin-top: 48px !important;
                margin-bottom: 48px !important
            }
            .small--no-margin-h {
                margin-right: 0px !important;
                margin-left: 0px !important
            }
            .small--m-h-xs {
                margin-right: 4px !important;
                margin-left: 4px !important
            }
            .small--m-h-sm {
                margin-right: 8px !important;
                margin-left: 8px !important
            }
            .small--m-h {
                margin-right: 16px !important;
                margin-left: 16px !important
            }
            .small--m-h-md {
                margin-right: 24px !important;
                margin-left: 24px !important
            }
            .small--m-h-lg {
                margin-right: 32px !important;
                margin-left: 32px !important
            }
            .small--m-h-xlg {
                margin-right: 48px !important;
                margin-left: 48px !important
            }
            .small--b-a {
                border: 1px solid #dddee0
            }
            .grid-uniform .small--one-half:nth-child(2n+1),
            .grid-uniform .small--one-third:nth-child(3n+1),
            .grid-uniform .small--one-quarter:nth-child(4n+1),
            .grid-uniform .small--one-fifth:nth-child(5n+1),
            .grid-uniform .small--one-sixth:nth-child(6n+1),
            .grid-uniform .small--two-sixths:nth-child(3n+1),
            .grid-uniform .small--three-sixths:nth-child(2n+1),
            .grid-uniform .small--two-eighths:nth-child(4n+1),
            .grid-uniform .small--four-eighths:nth-child(2n+1),
            .grid-uniform .small--five-tenths:nth-child(2n+1),
            .grid-uniform .small--one-twelfth:nth-child(12n+1),
            .grid-uniform .small--two-twelfths:nth-child(6n+1),
            .grid-uniform .small--three-twelfths:nth-child(4n+1),
            .grid-uniform .small--four-twelfths:nth-child(3n+1),
            .grid-uniform .small--six-twelfths:nth-child(2n+1) {
                clear: both
            }
        }
        
        @media only screen and (min-width: 481px) and (max-width: 768px) {
            .medium--one-whole {
                width: 100%
            }
            .medium--one-half {
                width: 50%
            }
            .medium--one-third {
                width: 33.333%
            }
            .medium--two-thirds {
                width: 66.666%
            }
            .medium--one-quarter {
                width: 25%
            }
            .medium--two-quarters {
                width: 50%
            }
            .medium--three-quarters {
                width: 75%
            }
            .medium--one-fifth {
                width: 20%
            }
            .medium--two-fifths {
                width: 40%
            }
            .medium--three-fifths {
                width: 60%
            }
            .medium--four-fifths {
                width: 80%
            }
            .medium--one-sixth {
                width: 16.666%
            }
            .medium--two-sixths {
                width: 33.333%
            }
            .medium--three-sixths {
                width: 50%
            }
            .medium--four-sixths {
                width: 66.666%
            }
            .medium--five-sixths {
                width: 83.333%
            }
            .medium--one-eighth {
                width: 12.5%
            }
            .medium--two-eighths {
                width: 25%
            }
            .medium--three-eighths {
                width: 37.5%
            }
            .medium--four-eighths {
                width: 50%
            }
            .medium--five-eighths {
                width: 62.5%
            }
            .medium--six-eighths {
                width: 75%
            }
            .medium--seven-eighths {
                width: 87.5%
            }
            .medium--one-tenth {
                width: 10%
            }
            .medium--two-tenths {
                width: 20%
            }
            .medium--three-tenths {
                width: 30%
            }
            .medium--four-tenths {
                width: 40%
            }
            .medium--five-tenths {
                width: 50%
            }
            .medium--six-tenths {
                width: 60%
            }
            .medium--seven-tenths {
                width: 70%
            }
            .medium--eight-tenths {
                width: 80%
            }
            .medium--nine-tenths {
                width: 90%
            }
            .medium--one-twelfth {
                width: 8.333%
            }
            .medium--two-twelfths {
                width: 16.666%
            }
            .medium--three-twelfths {
                width: 25%
            }
            .medium--four-twelfths {
                width: 33.333%
            }
            .medium--five-twelfths {
                width: 41.666%
            }
            .medium--six-twelfths {
                width: 50%
            }
            .medium--seven-twelfths {
                width: 58.333%
            }
            .medium--eight-twelfths {
                width: 66.666%
            }
            .medium--nine-twelfths {
                width: 75%
            }
            .medium--ten-twelfths {
                width: 83.333%
            }
            .medium--eleven-twelfths {
                width: 91.666%
            }
            .medium--show {
                display: block !important
            }
            .medium--hide {
                display: none !important
            }
            .medium--text-left {
                text-align: left !important
            }
            .medium--text-right {
                text-align: right !important
            }
            .medium--text-center {
                text-align: center !important
            }
            .medium--text-justify {
                text-align: justify !important
            }
            .medium--left {
                float: left !important
            }
            .medium--right {
                float: right !important
            }
            .medium--p-xs {
                padding: 4px !important
            }
            .medium--p-sm {
                padding: 8px !important
            }
            .medium--p {
                padding: 16px !important
            }
            .medium--p-md {
                padding: 24px !important
            }
            .medium--p-lg {
                padding: 32px !important
            }
            .medium--p-xlg {
                padding: 48px !important
            }
            .medium--p-t-xs {
                padding-top: 4px !important
            }
            .medium--p-t-sm {
                padding-top: 8px !important
            }
            .medium--p-t {
                padding-top: 16px !important
            }
            .medium--p-t-md {
                padding-top: 24px !important
            }
            .medium--p-t-lg {
                padding-top: 32px !important
            }
            .medium--p-t-xlg {
                padding-top: 48px !important
            }
            .medium--p-b-xs {
                padding-bottom: 4px !important
            }
            .medium--p-b-sm {
                padding-bottom: 8px !important
            }
            .medium--p-b {
                padding-bottom: 16px !important
            }
            .medium--p-b-md {
                padding-bottom: 24px !important
            }
            .medium--p-b-lg {
                padding-bottom: 32px !important
            }
            .medium--p-b-xlg {
                padding-bottom: 48px !important
            }
            .medium--p-l-xs {
                padding-left: 4px !important
            }
            .medium--p-l-sm {
                padding-left: 8px !important
            }
            .medium--p-l {
                padding-left: 16px !important
            }
            .medium--p-l-md {
                padding-left: 24px !important
            }
            .medium--p-l-lg {
                padding-left: 32px !important
            }
            .medium--p-l-xlg {
                padding-left: 48px !important
            }
            .medium--p-r-xs {
                padding-right: 4px !important
            }
            .medium--p-r-sm {
                padding-right: 8px !important
            }
            .medium--p-r {
                padding-right: 16px !important
            }
            .medium--p-r-md {
                padding-right: 24px !important
            }
            .medium--p-r-lg {
                padding-right: 32px !important
            }
            .medium--p-r-xlg {
                padding-right: 48px !important
            }
            .medium--p-v-xs {
                padding-top: 4px !important;
                padding-bottom: 4px !important
            }
            .medium--p-v-sm {
                padding-top: 8px !important;
                padding-bottom: 8px !important
            }
            .medium--p-v {
                padding-top: 16px !important;
                padding-bottom: 16px !important
            }
            .medium--p-v-md {
                padding-top: 24px !important;
                padding-bottom: 24px !important
            }
            .medium--p-v-lg {
                padding-top: 32px !important;
                padding-bottom: 32px !important
            }
            .medium--p-v-xlg {
                padding-top: 48px !important;
                padding-bottom: 48px !important
            }
            .medium--no-padding-h {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .medium--p-h-xs {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .medium--p-h-sm {
                padding-right: 8px !important;
                padding-left: 8px !important
            }
            .medium--p-h {
                padding-right: 16px !important;
                padding-left: 16px !important
            }
            .medium--p-h-md {
                padding-right: 24px !important;
                padding-left: 24px !important
            }
            .medium--p-h-lg {
                padding-right: 32px !important;
                padding-left: 32px !important
            }
            .medium--p-h-xlg {
                padding-right: 48px !important;
                padding-left: 48px !important
            }
            .medium--no-margin {
                margin: 0px !important
            }
            .medium--m-xs {
                margin: 4px !important
            }
            .medium--m-sm {
                margin: 8px !important
            }
            .medium--m {
                margin: 16px !important
            }
            .medium--m-md {
                margin: 24px !important
            }
            .medium--m-lg {
                margin: 32px !important
            }
            .medium--m-xlg {
                margin: 48px !important
            }
            .medium--m-t-xs {
                margin-top: 4px !important
            }
            .medium--m-t-sm {
                margin-top: 8px !important
            }
            .medium--m-t {
                margin-top: 16px !important
            }
            .medium--m-t-md {
                margin-top: 24px !important
            }
            .medium--m-t-lg {
                margin-top: 32px !important
            }
            .medium--m-t-xlg {
                margin-top: 48px !important
            }
            .medium--m-t-1x {
                margin-top: 100px !important
            }
            .medium--m-b-xs {
                margin-bottom: 4px !important
            }
            .medium--m-b-sm {
                margin-bottom: 8px !important
            }
            .medium--m-b {
                margin-bottom: 16px !important
            }
            .medium--m-b-md {
                margin-bottom: 24px !important
            }
            .medium--m-b-lg {
                margin-bottom: 32px !important
            }
            .medium--m-b-xlg {
                margin-bottom: 48px !important
            }
            .medium--m-l-xs {
                margin-left: 4px !important
            }
            .medium--m-l-sm {
                margin-left: 8px !important
            }
            .medium--m-l {
                margin-left: 16px !important
            }
            .medium--m-l-md {
                margin-left: 24px !important
            }
            .medium--m-l-lg {
                margin-left: 32px !important
            }
            .medium--m-l-xlg {
                margin-left: 48px !important
            }
            .medium--m-r-xs {
                margin-right: 4px !important
            }
            .medium--m-r-sm {
                margin-right: 8px !important
            }
            .medium--m-r {
                margin-right: 16px !important
            }
            .medium--m-r-md {
                margin-right: 24px !important
            }
            .medium--m-r-lg {
                margin-right: 32px !important
            }
            .medium--m-r-xlg {
                margin-right: 48px !important
            }
            .medium--no-margin-v {
                margin-top: 0px !important;
                margin-bottom: 0px !important
            }
            .medium--m-v-xs {
                margin-top: 4px !important;
                margin-bottom: 4px !important
            }
            .medium--m-v-sm {
                margin-top: 8px !important;
                margin-bottom: 8px !important
            }
            .medium--m-v {
                margin-top: 16px !important;
                margin-bottom: 16px !important
            }
            .medium--m-v-md {
                margin-top: 24px !important;
                margin-bottom: 24px !important
            }
            .medium--m-v-lg {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }
            .medium--m-v-xlg {
                margin-top: 48px !important;
                margin-bottom: 48px !important
            }
            .medium--no-margin-h {
                margin-right: 0px !important;
                margin-left: 0px !important
            }
            .medium--m-h-xs {
                margin-right: 4px !important;
                margin-left: 4px !important
            }
            .medium--m-h-sm {
                margin-right: 8px !important;
                margin-left: 8px !important
            }
            .medium--m-h {
                margin-right: 16px !important;
                margin-left: 16px !important
            }
            .medium--m-h-md {
                margin-right: 24px !important;
                margin-left: 24px !important
            }
            .medium--m-h-lg {
                margin-right: 32px !important;
                margin-left: 32px !important
            }
            .medium--m-h-xlg {
                margin-right: 48px !important;
                margin-left: 48px !important
            }
            .medium--b-a {
                border: 1px solid #dddee0
            }
            .grid-uniform .medium--one-half:nth-child(2n+1),
            .grid-uniform .medium--one-third:nth-child(3n+1),
            .grid-uniform .medium--one-quarter:nth-child(4n+1),
            .grid-uniform .medium--one-fifth:nth-child(5n+1),
            .grid-uniform .medium--one-sixth:nth-child(6n+1),
            .grid-uniform .medium--two-sixths:nth-child(3n+1),
            .grid-uniform .medium--three-sixths:nth-child(2n+1),
            .grid-uniform .medium--two-eighths:nth-child(4n+1),
            .grid-uniform .medium--four-eighths:nth-child(2n+1),
            .grid-uniform .medium--five-tenths:nth-child(2n+1),
            .grid-uniform .medium--one-twelfth:nth-child(12n+1),
            .grid-uniform .medium--two-twelfths:nth-child(6n+1),
            .grid-uniform .medium--three-twelfths:nth-child(4n+1),
            .grid-uniform .medium--four-twelfths:nth-child(3n+1),
            .grid-uniform .medium--six-twelfths:nth-child(2n+1) {
                clear: both
            }
        }
        
        @media only screen and (max-width: 768px) {
            .medium-down--one-whole {
                width: 100%
            }
            .medium-down--one-half {
                width: 50%
            }
            .medium-down--one-third {
                width: 33.333%
            }
            .medium-down--two-thirds {
                width: 66.666%
            }
            .medium-down--one-quarter {
                width: 25%
            }
            .medium-down--two-quarters {
                width: 50%
            }
            .medium-down--three-quarters {
                width: 75%
            }
            .medium-down--one-fifth {
                width: 20%
            }
            .medium-down--two-fifths {
                width: 40%
            }
            .medium-down--three-fifths {
                width: 60%
            }
            .medium-down--four-fifths {
                width: 80%
            }
            .medium-down--one-sixth {
                width: 16.666%
            }
            .medium-down--two-sixths {
                width: 33.333%
            }
            .medium-down--three-sixths {
                width: 50%
            }
            .medium-down--four-sixths {
                width: 66.666%
            }
            .medium-down--five-sixths {
                width: 83.333%
            }
            .medium-down--one-eighth {
                width: 12.5%
            }
            .medium-down--two-eighths {
                width: 25%
            }
            .medium-down--three-eighths {
                width: 37.5%
            }
            .medium-down--four-eighths {
                width: 50%
            }
            .medium-down--five-eighths {
                width: 62.5%
            }
            .medium-down--six-eighths {
                width: 75%
            }
            .medium-down--seven-eighths {
                width: 87.5%
            }
            .medium-down--one-tenth {
                width: 10%
            }
            .medium-down--two-tenths {
                width: 20%
            }
            .medium-down--three-tenths {
                width: 30%
            }
            .medium-down--four-tenths {
                width: 40%
            }
            .medium-down--five-tenths {
                width: 50%
            }
            .medium-down--six-tenths {
                width: 60%
            }
            .medium-down--seven-tenths {
                width: 70%
            }
            .medium-down--eight-tenths {
                width: 80%
            }
            .medium-down--nine-tenths {
                width: 90%
            }
            .medium-down--one-twelfth {
                width: 8.333%
            }
            .medium-down--two-twelfths {
                width: 16.666%
            }
            .medium-down--three-twelfths {
                width: 25%
            }
            .medium-down--four-twelfths {
                width: 33.333%
            }
            .medium-down--five-twelfths {
                width: 41.666%
            }
            .medium-down--six-twelfths {
                width: 50%
            }
            .medium-down--seven-twelfths {
                width: 58.333%
            }
            .medium-down--eight-twelfths {
                width: 66.666%
            }
            .medium-down--nine-twelfths {
                width: 75%
            }
            .medium-down--ten-twelfths {
                width: 83.333%
            }
            .medium-down--eleven-twelfths {
                width: 91.666%
            }
            .medium-down--show {
                display: block !important
            }
            .medium-down--hide {
                display: none !important
            }
            .medium-down--text-left {
                text-align: left !important
            }
            .medium-down--text-right {
                text-align: right !important
            }
            .medium-down--text-center {
                text-align: center !important
            }
            .medium-down--text-justify {
                text-align: justify !important
            }
            .medium-down--left {
                float: left !important
            }
            .medium-down--right {
                float: right !important
            }
            .medium-down--p-xs {
                padding: 4px !important
            }
            .medium-down--p-sm {
                padding: 8px !important
            }
            .medium-down--p {
                padding: 16px !important
            }
            .medium-down--p-md {
                padding: 24px !important
            }
            .medium-down--p-lg {
                padding: 32px !important
            }
            .medium-down--p-xlg {
                padding: 48px !important
            }
            .medium-down--p-t-xs {
                padding-top: 4px !important
            }
            .medium-down--p-t-sm {
                padding-top: 8px !important
            }
            .medium-down--p-t {
                padding-top: 16px !important
            }
            .medium-down--p-t-md {
                padding-top: 24px !important
            }
            .medium-down--p-t-lg {
                padding-top: 32px !important
            }
            .medium-down--p-t-xlg {
                padding-top: 48px !important
            }
            .medium-down--p-b-xs {
                padding-bottom: 4px !important
            }
            .medium-down--p-b-sm {
                padding-bottom: 8px !important
            }
            .medium-down--p-b {
                padding-bottom: 16px !important
            }
            .medium-down--p-b-md {
                padding-bottom: 24px !important
            }
            .medium-down--p-b-lg {
                padding-bottom: 32px !important
            }
            .medium-down--p-b-xlg {
                padding-bottom: 48px !important
            }
            .medium-down--p-l-xs {
                padding-left: 4px !important
            }
            .medium-down--p-l-sm {
                padding-left: 8px !important
            }
            .medium-down--p-l {
                padding-left: 16px !important
            }
            .medium-down--p-l-md {
                padding-left: 24px !important
            }
            .medium-down--p-l-lg {
                padding-left: 32px !important
            }
            .medium-down--p-l-xlg {
                padding-left: 48px !important
            }
            .medium-down--p-r-xs {
                padding-right: 4px !important
            }
            .medium-down--p-r-sm {
                padding-right: 8px !important
            }
            .medium-down--p-r {
                padding-right: 16px !important
            }
            .medium-down--p-r-md {
                padding-right: 24px !important
            }
            .medium-down--p-r-lg {
                padding-right: 32px !important
            }
            .medium-down--p-r-xlg {
                padding-right: 48px !important
            }
            .medium-down--p-v-xs {
                padding-top: 4px !important;
                padding-bottom: 4px !important
            }
            .medium-down--p-v-sm {
                padding-top: 8px !important;
                padding-bottom: 8px !important
            }
            .medium-down--p-v {
                padding-top: 16px !important;
                padding-bottom: 16px !important
            }
            .medium-down--p-v-md {
                padding-top: 24px !important;
                padding-bottom: 24px !important
            }
            .medium-down--p-v-lg {
                padding-top: 32px !important;
                padding-bottom: 32px !important
            }
            .medium-down--p-v-xlg {
                padding-top: 48px !important;
                padding-bottom: 48px !important
            }
            .medium-down--no-padding-h {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .medium-down--p-h-xs {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .medium-down--p-h-sm {
                padding-right: 8px !important;
                padding-left: 8px !important
            }
            .medium-down--p-h {
                padding-right: 16px !important;
                padding-left: 16px !important
            }
            .medium-down--p-h-md {
                padding-right: 24px !important;
                padding-left: 24px !important
            }
            .medium-down--p-h-lg {
                padding-right: 32px !important;
                padding-left: 32px !important
            }
            .medium-down--p-h-xlg {
                padding-right: 48px !important;
                padding-left: 48px !important
            }
            .medium-down--no-margin {
                margin: 0px !important
            }
            .medium-down--m-xs {
                margin: 4px !important
            }
            .medium-down--m-sm {
                margin: 8px !important
            }
            .medium-down--m {
                margin: 16px !important
            }
            .medium-down--m-md {
                margin: 24px !important
            }
            .medium-down--m-lg {
                margin: 32px !important
            }
            .medium-down--m-xlg {
                margin: 48px !important
            }
            .medium-down--m-t-xs {
                margin-top: 4px !important
            }
            .medium-down--m-t-sm {
                margin-top: 8px !important
            }
            .medium-down--m-t {
                margin-top: 16px !important
            }
            .medium-down--m-t-md {
                margin-top: 24px !important
            }
            .medium-down--m-t-lg {
                margin-top: 32px !important
            }
            .medium-down--m-t-xlg {
                margin-top: 48px !important
            }
            .medium-down--m-t-1x {
                margin-top: 100px !important
            }
            .medium-down--m-b-xs {
                margin-bottom: 4px !important
            }
            .medium-down--m-b-sm {
                margin-bottom: 8px !important
            }
            .medium-down--m-b {
                margin-bottom: 16px !important
            }
            .medium-down--m-b-md {
                margin-bottom: 24px !important
            }
            .medium-down--m-b-lg {
                margin-bottom: 32px !important
            }
            .medium-down--m-b-xlg {
                margin-bottom: 48px !important
            }
            .medium-down--m-l-xs {
                margin-left: 4px !important
            }
            .medium-down--m-l-sm {
                margin-left: 8px !important
            }
            .medium-down--m-l {
                margin-left: 16px !important
            }
            .medium-down--m-l-md {
                margin-left: 24px !important
            }
            .medium-down--m-l-lg {
                margin-left: 32px !important
            }
            .medium-down--m-l-xlg {
                margin-left: 48px !important
            }
            .medium-down--m-r-xs {
                margin-right: 4px !important
            }
            .medium-down--m-r-sm {
                margin-right: 8px !important
            }
            .medium-down--m-r {
                margin-right: 16px !important
            }
            .medium-down--m-r-md {
                margin-right: 24px !important
            }
            .medium-down--m-r-lg {
                margin-right: 32px !important
            }
            .medium-down--m-r-xlg {
                margin-right: 48px !important
            }
            .medium-down--no-margin-v {
                margin-top: 0px !important;
                margin-bottom: 0px !important
            }
            .medium-down--m-v-xs {
                margin-top: 4px !important;
                margin-bottom: 4px !important
            }
            .medium-down--m-v-sm {
                margin-top: 8px !important;
                margin-bottom: 8px !important
            }
            .medium-down--m-v {
                margin-top: 16px !important;
                margin-bottom: 16px !important
            }
            .medium-down--m-v-md {
                margin-top: 24px !important;
                margin-bottom: 24px !important
            }
            .medium-down--m-v-lg {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }
            .medium-down--m-v-xlg {
                margin-top: 48px !important;
                margin-bottom: 48px !important
            }
            .medium-down--no-margin-h {
                margin-right: 0px !important;
                margin-left: 0px !important
            }
            .medium-down--m-h-xs {
                margin-right: 4px !important;
                margin-left: 4px !important
            }
            .medium-down--m-h-sm {
                margin-right: 8px !important;
                margin-left: 8px !important
            }
            .medium-down--m-h {
                margin-right: 16px !important;
                margin-left: 16px !important
            }
            .medium-down--m-h-md {
                margin-right: 24px !important;
                margin-left: 24px !important
            }
            .medium-down--m-h-lg {
                margin-right: 32px !important;
                margin-left: 32px !important
            }
            .medium-down--m-h-xlg {
                margin-right: 48px !important;
                margin-left: 48px !important
            }
            .medium-down--b-a {
                border: 1px solid #dddee0
            }
            .grid-uniform .medium-down--one-half:nth-child(2n+1),
            .grid-uniform .medium-down--one-third:nth-child(3n+1),
            .grid-uniform .medium-down--one-quarter:nth-child(4n+1),
            .grid-uniform .medium-down--one-fifth:nth-child(5n+1),
            .grid-uniform .medium-down--one-sixth:nth-child(6n+1),
            .grid-uniform .medium-down--two-sixths:nth-child(3n+1),
            .grid-uniform .medium-down--three-sixths:nth-child(2n+1),
            .grid-uniform .medium-down--two-eighths:nth-child(4n+1),
            .grid-uniform .medium-down--four-eighths:nth-child(2n+1),
            .grid-uniform .medium-down--five-tenths:nth-child(2n+1),
            .grid-uniform .medium-down--one-twelfth:nth-child(12n+1),
            .grid-uniform .medium-down--two-twelfths:nth-child(6n+1),
            .grid-uniform .medium-down--three-twelfths:nth-child(4n+1),
            .grid-uniform .medium-down--four-twelfths:nth-child(3n+1),
            .grid-uniform .medium-down--six-twelfths:nth-child(2n+1) {
                clear: both
            }
        }
        
        @media only screen and (min-width: 769px) {
            .large--one-whole {
                width: 100%
            }
            .large--one-half {
                width: 50%
            }
            .large--one-third {
                width: 33.333%
            }
            .large--two-thirds {
                width: 66.666%
            }
            .large--one-quarter {
                width: 25%
            }
            .large--two-quarters {
                width: 50%
            }
            .large--three-quarters {
                width: 75%
            }
            .large--one-fifth {
                width: 20%
            }
            .large--two-fifths {
                width: 40%
            }
            .large--three-fifths {
                width: 60%
            }
            .large--four-fifths {
                width: 80%
            }
            .large--one-sixth {
                width: 16.666%
            }
            .large--two-sixths {
                width: 33.333%
            }
            .large--three-sixths {
                width: 50%
            }
            .large--four-sixths {
                width: 66.666%
            }
            .large--five-sixths {
                width: 83.333%
            }
            .large--one-eighth {
                width: 12.5%
            }
            .large--two-eighths {
                width: 25%
            }
            .large--three-eighths {
                width: 37.5%
            }
            .large--four-eighths {
                width: 50%
            }
            .large--five-eighths {
                width: 62.5%
            }
            .large--six-eighths {
                width: 75%
            }
            .large--seven-eighths {
                width: 87.5%
            }
            .large--one-tenth {
                width: 10%
            }
            .large--two-tenths {
                width: 20%
            }
            .large--three-tenths {
                width: 30%
            }
            .large--four-tenths {
                width: 40%
            }
            .large--five-tenths {
                width: 50%
            }
            .large--six-tenths {
                width: 60%
            }
            .large--seven-tenths {
                width: 70%
            }
            .large--eight-tenths {
                width: 80%
            }
            .large--nine-tenths {
                width: 90%
            }
            .large--one-twelfth {
                width: 8.333%
            }
            .large--two-twelfths {
                width: 16.666%
            }
            .large--three-twelfths {
                width: 25%
            }
            .large--four-twelfths {
                width: 33.333%
            }
            .large--five-twelfths {
                width: 41.666%
            }
            .large--six-twelfths {
                width: 50%
            }
            .large--seven-twelfths {
                width: 58.333%
            }
            .large--eight-twelfths {
                width: 66.666%
            }
            .large--nine-twelfths {
                width: 75%
            }
            .large--ten-twelfths {
                width: 83.333%
            }
            .large--eleven-twelfths {
                width: 91.666%
            }
            .large--show {
                display: block !important
            }
            .large--hide {
                display: none !important
            }
            .large--text-left {
                text-align: left !important
            }
            .large--text-right {
                text-align: right !important
            }
            .large--text-center {
                text-align: center !important
            }
            .large--text-justify {
                text-align: justify !important
            }
            .large--left {
                float: left !important
            }
            .large--right {
                float: right !important
            }
            .large--p-xs {
                padding: 4px !important
            }
            .large--p-sm {
                padding: 8px !important
            }
            .large--p {
                padding: 16px !important
            }
            .large--p-md {
                padding: 24px !important
            }
            .large--p-lg {
                padding: 32px !important
            }
            .large--p-xlg {
                padding: 48px !important
            }
            .large--p-t-xs {
                padding-top: 4px !important
            }
            .large--p-t-sm {
                padding-top: 8px !important
            }
            .large--p-t {
                padding-top: 16px !important
            }
            .large--p-t-md {
                padding-top: 24px !important
            }
            .large--p-t-lg {
                padding-top: 32px !important
            }
            .large--p-t-xlg {
                padding-top: 48px !important
            }
            .large--p-b-xs {
                padding-bottom: 4px !important
            }
            .large--p-b-sm {
                padding-bottom: 8px !important
            }
            .large--p-b {
                padding-bottom: 16px !important
            }
            .large--p-b-md {
                padding-bottom: 24px !important
            }
            .large--p-b-lg {
                padding-bottom: 32px !important
            }
            .large--p-b-xlg {
                padding-bottom: 48px !important
            }
            .large--p-l-xs {
                padding-left: 4px !important
            }
            .large--p-l-sm {
                padding-left: 8px !important
            }
            .large--p-l {
                padding-left: 16px !important
            }
            .large--p-l-md {
                padding-left: 24px !important
            }
            .large--p-l-lg {
                padding-left: 32px !important
            }
            .large--p-l-xlg {
                padding-left: 48px !important
            }
            .large--p-r-xs {
                padding-right: 4px !important
            }
            .large--p-r-sm {
                padding-right: 8px !important
            }
            .large--p-r {
                padding-right: 16px !important
            }
            .large--p-r-md {
                padding-right: 24px !important
            }
            .large--p-r-lg {
                padding-right: 32px !important
            }
            .large--p-r-xlg {
                padding-right: 48px !important
            }
            .large--p-v-xs {
                padding-top: 4px !important;
                padding-bottom: 4px !important
            }
            .large--p-v-sm {
                padding-top: 8px !important;
                padding-bottom: 8px !important
            }
            .large--p-v {
                padding-top: 16px !important;
                padding-bottom: 16px !important
            }
            .large--p-v-md {
                padding-top: 24px !important;
                padding-bottom: 24px !important
            }
            .large--p-v-lg {
                padding-top: 32px !important;
                padding-bottom: 32px !important
            }
            .large--p-v-xlg {
                padding-top: 48px !important;
                padding-bottom: 48px !important
            }
            .large--no-padding-h {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .large--p-h-xs {
                padding-right: 4px !important;
                padding-left: 4px !important
            }
            .large--p-h-sm {
                padding-right: 8px !important;
                padding-left: 8px !important
            }
            .large--p-h {
                padding-right: 16px !important;
                padding-left: 16px !important
            }
            .large--p-h-md {
                padding-right: 24px !important;
                padding-left: 24px !important
            }
            .large--p-h-lg {
                padding-right: 32px !important;
                padding-left: 32px !important
            }
            .large--p-h-xlg {
                padding-right: 48px !important;
                padding-left: 48px !important
            }
            .large--no-margin {
                margin: 0px !important
            }
            .large--m-xs {
                margin: 4px !important
            }
            .large--m-sm {
                margin: 8px !important
            }
            .large--m {
                margin: 16px !important
            }
            .large--m-md {
                margin: 24px !important
            }
            .large--m-lg {
                margin: 32px !important
            }
            .large--m-xlg {
                margin: 48px !important
            }
            .large--m-t-xs {
                margin-top: 4px !important
            }
            .large--m-t-sm {
                margin-top: 8px !important
            }
            .large--m-t {
                margin-top: 16px !important
            }
            .large--m-t-md {
                margin-top: 24px !important
            }
            .large--m-t-lg {
                margin-top: 32px !important
            }
            .large--m-t-xlg {
                margin-top: 48px !important
            }
            .large--m-t-1x {
                margin-top: 100px !important
            }
            .large--m-b-xs {
                margin-bottom: 4px !important
            }
            .large--m-b-sm {
                margin-bottom: 8px !important
            }
            .large--m-b {
                margin-bottom: 16px !important
            }
            .large--m-b-md {
                margin-bottom: 24px !important
            }
            .large--m-b-lg {
                margin-bottom: 32px !important
            }
            .large--m-b-xlg {
                margin-bottom: 48px !important
            }
            .large--m-l-xs {
                margin-left: 4px !important
            }
            .large--m-l-sm {
                margin-left: 8px !important
            }
            .large--m-l {
                margin-left: 16px !important
            }
            .large--m-l-md {
                margin-left: 24px !important
            }
            .large--m-l-lg {
                margin-left: 32px !important
            }
            .large--m-l-xlg {
                margin-left: 48px !important
            }
            .large--m-r-xs {
                margin-right: 4px !important
            }
            .large--m-r-sm {
                margin-right: 8px !important
            }
            .large--m-r {
                margin-right: 16px !important
            }
            .large--m-r-md {
                margin-right: 24px !important
            }
            .large--m-r-lg {
                margin-right: 32px !important
            }
            .large--m-r-xlg {
                margin-right: 48px !important
            }
            .large--no-margin-v {
                margin-top: 0px !important;
                margin-bottom: 0px !important
            }
            .large--m-v-xs {
                margin-top: 4px !important;
                margin-bottom: 4px !important
            }
            .large--m-v-sm {
                margin-top: 8px !important;
                margin-bottom: 8px !important
            }
            .large--m-v {
                margin-top: 16px !important;
                margin-bottom: 16px !important
            }
            .large--m-v-md {
                margin-top: 24px !important;
                margin-bottom: 24px !important
            }
            .large--m-v-lg {
                margin-top: 32px !important;
                margin-bottom: 32px !important
            }
            .large--m-v-xlg {
                margin-top: 48px !important;
                margin-bottom: 48px !important
            }
            .large--no-margin-h {
                margin-right: 0px !important;
                margin-left: 0px !important
            }
            .large--m-h-xs {
                margin-right: 4px !important;
                margin-left: 4px !important
            }
            .large--m-h-sm {
                margin-right: 8px !important;
                margin-left: 8px !important
            }
            .large--m-h {
                margin-right: 16px !important;
                margin-left: 16px !important
            }
            .large--m-h-md {
                margin-right: 24px !important;
                margin-left: 24px !important
            }
            .large--m-h-lg {
                margin-right: 32px !important;
                margin-left: 32px !important
            }
            .large--m-h-xlg {
                margin-right: 48px !important;
                margin-left: 48px !important
            }
            .large--b-a {
                border: 1px solid #dddee0
            }
            .grid-uniform .large--one-half:nth-child(2n+1),
            .grid-uniform .large--one-third:nth-child(3n+1),
            .grid-uniform .large--one-quarter:nth-child(4n+1),
            .grid-uniform .large--one-fifth:nth-child(5n+1),
            .grid-uniform .large--one-sixth:nth-child(6n+1),
            .grid-uniform .large--two-sixths:nth-child(3n+1),
            .grid-uniform .large--three-sixths:nth-child(2n+1),
            .grid-uniform .large--two-eighths:nth-child(4n+1),
            .grid-uniform .large--four-eighths:nth-child(2n+1),
            .grid-uniform .large--five-tenths:nth-child(2n+1),
            .grid-uniform .large--one-twelfth:nth-child(12n+1),
            .grid-uniform .large--two-twelfths:nth-child(6n+1),
            .grid-uniform .large--three-twelfths:nth-child(4n+1),
            .grid-uniform .large--four-twelfths:nth-child(3n+1),
            .grid-uniform .large--six-twelfths:nth-child(2n+1) {
                clear: both
            }
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
        
        @media only screen and (min-width: 481px) and (max-width: 768px) {
            .pull--medium--one-whole {
                right: 100%
            }
            .pull--medium--one-half {
                right: 50%
            }
            .pull--medium--one-third {
                right: 33.333%
            }
            .pull--medium--two-thirds {
                right: 66.666%
            }
            .pull--medium--one-quarter {
                right: 25%
            }
            .pull--medium--two-quarters {
                right: 50%
            }
            .pull--medium--three-quarters {
                right: 75%
            }
            .pull--medium--one-fifth {
                right: 20%
            }
            .pull--medium--two-fifths {
                right: 40%
            }
            .pull--medium--three-fifths {
                right: 60%
            }
            .pull--medium--four-fifths {
                right: 80%
            }
            .pull--medium--one-sixth {
                right: 16.666%
            }
            .pull--medium--two-sixths {
                right: 33.333%
            }
            .pull--medium--three-sixths {
                right: 50%
            }
            .pull--medium--four-sixths {
                right: 66.666%
            }
            .pull--medium--five-sixths {
                right: 83.333%
            }
            .pull--medium--one-eighth {
                right: 12.5%
            }
            .pull--medium--two-eighths {
                right: 25%
            }
            .pull--medium--three-eighths {
                right: 37.5%
            }
            .pull--medium--four-eighths {
                right: 50%
            }
            .pull--medium--five-eighths {
                right: 62.5%
            }
            .pull--medium--six-eighths {
                right: 75%
            }
            .pull--medium--seven-eighths {
                right: 87.5%
            }
            .pull--medium--one-tenth {
                right: 10%
            }
            .pull--medium--two-tenths {
                right: 20%
            }
            .pull--medium--three-tenths {
                right: 30%
            }
            .pull--medium--four-tenths {
                right: 40%
            }
            .pull--medium--five-tenths {
                right: 50%
            }
            .pull--medium--six-tenths {
                right: 60%
            }
            .pull--medium--seven-tenths {
                right: 70%
            }
            .pull--medium--eight-tenths {
                right: 80%
            }
            .pull--medium--nine-tenths {
                right: 90%
            }
            .pull--medium--one-twelfth {
                right: 8.333%
            }
            .pull--medium--two-twelfths {
                right: 16.666%
            }
            .pull--medium--three-twelfths {
                right: 25%
            }
            .pull--medium--four-twelfths {
                right: 33.333%
            }
            .pull--medium--five-twelfths {
                right: 41.666%
            }
            .pull--medium--six-twelfths {
                right: 50%
            }
            .pull--medium--seven-twelfths {
                right: 58.333%
            }
            .pull--medium--eight-twelfths {
                right: 66.666%
            }
            .pull--medium--nine-twelfths {
                right: 75%
            }
            .pull--medium--ten-twelfths {
                right: 83.333%
            }
            .pull--medium--eleven-twelfths {
                right: 91.666%
            }
        }
        
        @media only screen and (max-width: 768px) {
            .pull--medium-down--one-whole {
                right: 100%
            }
            .pull--medium-down--one-half {
                right: 50%
            }
            .pull--medium-down--one-third {
                right: 33.333%
            }
            .pull--medium-down--two-thirds {
                right: 66.666%
            }
            .pull--medium-down--one-quarter {
                right: 25%
            }
            .pull--medium-down--two-quarters {
                right: 50%
            }
            .pull--medium-down--three-quarters {
                right: 75%
            }
            .pull--medium-down--one-fifth {
                right: 20%
            }
            .pull--medium-down--two-fifths {
                right: 40%
            }
            .pull--medium-down--three-fifths {
                right: 60%
            }
            .pull--medium-down--four-fifths {
                right: 80%
            }
            .pull--medium-down--one-sixth {
                right: 16.666%
            }
            .pull--medium-down--two-sixths {
                right: 33.333%
            }
            .pull--medium-down--three-sixths {
                right: 50%
            }
            .pull--medium-down--four-sixths {
                right: 66.666%
            }
            .pull--medium-down--five-sixths {
                right: 83.333%
            }
            .pull--medium-down--one-eighth {
                right: 12.5%
            }
            .pull--medium-down--two-eighths {
                right: 25%
            }
            .pull--medium-down--three-eighths {
                right: 37.5%
            }
            .pull--medium-down--four-eighths {
                right: 50%
            }
            .pull--medium-down--five-eighths {
                right: 62.5%
            }
            .pull--medium-down--six-eighths {
                right: 75%
            }
            .pull--medium-down--seven-eighths {
                right: 87.5%
            }
            .pull--medium-down--one-tenth {
                right: 10%
            }
            .pull--medium-down--two-tenths {
                right: 20%
            }
            .pull--medium-down--three-tenths {
                right: 30%
            }
            .pull--medium-down--four-tenths {
                right: 40%
            }
            .pull--medium-down--five-tenths {
                right: 50%
            }
            .pull--medium-down--six-tenths {
                right: 60%
            }
            .pull--medium-down--seven-tenths {
                right: 70%
            }
            .pull--medium-down--eight-tenths {
                right: 80%
            }
            .pull--medium-down--nine-tenths {
                right: 90%
            }
            .pull--medium-down--one-twelfth {
                right: 8.333%
            }
            .pull--medium-down--two-twelfths {
                right: 16.666%
            }
            .pull--medium-down--three-twelfths {
                right: 25%
            }
            .pull--medium-down--four-twelfths {
                right: 33.333%
            }
            .pull--medium-down--five-twelfths {
                right: 41.666%
            }
            .pull--medium-down--six-twelfths {
                right: 50%
            }
            .pull--medium-down--seven-twelfths {
                right: 58.333%
            }
            .pull--medium-down--eight-twelfths {
                right: 66.666%
            }
            .pull--medium-down--nine-twelfths {
                right: 75%
            }
            .pull--medium-down--ten-twelfths {
                right: 83.333%
            }
            .pull--medium-down--eleven-twelfths {
                right: 91.666%
            }
        }
        
        @media only screen and (min-width: 769px) {
            .pull--large--one-whole {
                right: 100%
            }
            .pull--large--one-half {
                right: 50%
            }
            .pull--large--one-third {
                right: 33.333%
            }
            .pull--large--two-thirds {
                right: 66.666%
            }
            .pull--large--one-quarter {
                right: 25%
            }
            .pull--large--two-quarters {
                right: 50%
            }
            .pull--large--three-quarters {
                right: 75%
            }
            .pull--large--one-fifth {
                right: 20%
            }
            .pull--large--two-fifths {
                right: 40%
            }
            .pull--large--three-fifths {
                right: 60%
            }
            .pull--large--four-fifths {
                right: 80%
            }
            .pull--large--one-sixth {
                right: 16.666%
            }
            .pull--large--two-sixths {
                right: 33.333%
            }
            .pull--large--three-sixths {
                right: 50%
            }
            .pull--large--four-sixths {
                right: 66.666%
            }
            .pull--large--five-sixths {
                right: 83.333%
            }
            .pull--large--one-eighth {
                right: 12.5%
            }
            .pull--large--two-eighths {
                right: 25%
            }
            .pull--large--three-eighths {
                right: 37.5%
            }
            .pull--large--four-eighths {
                right: 50%
            }
            .pull--large--five-eighths {
                right: 62.5%
            }
            .pull--large--six-eighths {
                right: 75%
            }
            .pull--large--seven-eighths {
                right: 87.5%
            }
            .pull--large--one-tenth {
                right: 10%
            }
            .pull--large--two-tenths {
                right: 20%
            }
            .pull--large--three-tenths {
                right: 30%
            }
            .pull--large--four-tenths {
                right: 40%
            }
            .pull--large--five-tenths {
                right: 50%
            }
            .pull--large--six-tenths {
                right: 60%
            }
            .pull--large--seven-tenths {
                right: 70%
            }
            .pull--large--eight-tenths {
                right: 80%
            }
            .pull--large--nine-tenths {
                right: 90%
            }
            .pull--large--one-twelfth {
                right: 8.333%
            }
            .pull--large--two-twelfths {
                right: 16.666%
            }
            .pull--large--three-twelfths {
                right: 25%
            }
            .pull--large--four-twelfths {
                right: 33.333%
            }
            .pull--large--five-twelfths {
                right: 41.666%
            }
            .pull--large--six-twelfths {
                right: 50%
            }
            .pull--large--seven-twelfths {
                right: 58.333%
            }
            .pull--large--eight-twelfths {
                right: 66.666%
            }
            .pull--large--nine-twelfths {
                right: 75%
            }
            .pull--large--ten-twelfths {
                right: 83.333%
            }
            .pull--large--eleven-twelfths {
                right: 91.666%
            }
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
            display: block !important;
            visibility: visible !important
        }
        
        #CartDrawer {
            overflow: hidden
        }
        
        #CartDrawer.is-transitioning {
            display: flex !important
        }
        
        .is-transitioning__mobilemenu {
            display: block;
            visibility: visible !important
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
        
        @media screen and (min-width: 769px) {
            .large--display-table {
                display: table;
                table-layout: fixed;
                width: 100%
            }
            .large--display-table-cell {
                display: table-cell;
                vertical-align: middle;
                float: none
            }
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
        
        @media screen and (min-width: 769px) {
            .section-header {
                display: table;
                width: 100%
            }
            .section-header__title {
                margin-bottom: 6.4px
            }
            .section-header__left {
                display: table-cell;
                vertical-align: middle;
                margin-bottom: 0
            }
            .section-header__left h1,
            .section-header__left .h1,
            .section-header__left h2,
            .section-header__left .h2,
            .section-header__left h3,
            .section-header__left .h3,
            .section-header__left h4,
            .section-header__left .h4,
            .section-header__left .h1,
            .section-header__left .h2,
            .section-header__left .h3,
            .section-header__left .h4 {
                margin-bottom: 0
            }
            .section-header__right {
                display: table-cell;
                vertical-align: middle;
                text-align: right;
                width: 335px
            }
        }
        
        @media screen and (min-width: 769px) and (max-width: 768px) {
            .section-header__right {
                margin-bottom: 16px
            }
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
        
        .icon {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .icon-eye:before {
            content: "\\e000"
        }
        
        .icon-paper-clip:before {
            content: "\\e001"
        }
        
        .icon-mail:before {
            content: "\\e002"
        }
        
        .icon-toggle:before {
            content: "\\e003"
        }
        
        .icon-layout:before {
            content: "\\e004"
        }
        
        .icon-link:before {
            content: "\\e005"
        }
        
        .icon-bell:before {
            content: "\\e006"
        }
        
        .icon-lock:before {
            content: "\\e007"
        }
        
        .icon-unlock:before {
            content: "\\e008"
        }
        
        .icon-ribbon:before {
            content: "\\e009"
        }
        
        .icon-image:before {
            content: "\\e010"
        }
        
        .icon-signal:before {
            content: "\\e011"
        }
        
        .icon-target:before {
            content: "\\e012"
        }
        
        .icon-clipboard:before {
            content: "\\e013"
        }
        
        .icon-clock:before {
            content: "\\e014"
        }
        
        .icon-watch:before {
            content: "\\e015"
        }
        
        .icon-air-play:before {
            content: "\\e016"
        }
        
        .icon-camera:before {
            content: "\\e017"
        }
        
        .icon-video:before {
            content: "\\e018"
        }
        
        .icon-disc:before {
            content: "\\e019"
        }
        
        .icon-printer:before {
            content: "\\e020"
        }
        
        .icon-monitor:before {
            content: "\\e021"
        }
        
        .icon-server:before {
            content: "\\e022"
        }
        
        .icon-cog:before {
            content: "\\e023"
        }
        
        .icon-heart:before {
            content: "\\e024"
        }
        
        .icon-paragraph:before {
            content: "\\e025"
        }
        
        .icon-align-justify:before {
            content: "\\e026"
        }
        
        .icon-align-left:before {
            content: "\\e027"
        }
        
        .icon-align-center:before {
            content: "\\e028"
        }
        
        .icon-align-right:before {
            content: "\\e029"
        }
        
        .icon-book:before {
            content: "\\e030"
        }
        
        .icon-layers:before {
            content: "\\e031"
        }
        
        .icon-stack:before {
            content: "\\e032"
        }
        
        .icon-stack-2:before {
            content: "\\e033"
        }
        
        .icon-paper:before {
            content: "\\e034"
        }
        
        .icon-paper-stack:before {
            content: "\\e035"
        }
        
        .icon-search:before {
            content: "\\e036"
        }
        
        .icon-zoom-in:before {
            content: "\\e037"
        }
        
        .icon-zoom-out:before {
            content: "\\e038"
        }
        
        .icon-reply:before {
            content: "\\e039"
        }
        
        .icon-circle-plus:before {
            content: "\\e040"
        }
        
        .icon-circle-minus:before {
            content: "\\e041"
        }
        
        .icon-circle-check:before {
            content: "\\e042"
        }
        
        .icon-circle-cross:before {
            content: "\\e043"
        }
        
        .icon-square-plus:before {
            content: "\\e044"
        }
        
        .icon-square-minus:before {
            content: "\\e045"
        }
        
        .icon-square-check:before {
            content: "\\e046"
        }
        
        .icon-square-cross:before {
            content: "\\e047"
        }
        
        .icon-microphone:before {
            content: "\\e048"
        }
        
        .icon-record:before {
            content: "\\e049"
        }
        
        .icon-skip-back:before {
            content: "\\e050"
        }
        
        .icon-rewind:before {
            content: "\\e051"
        }
        
        .icon-play:before {
            content: "\\e052"
        }
        
        .icon-pause:before {
            content: "\\e053"
        }
        
        .icon-stop:before {
            content: "\\e054"
        }
        
        .icon-fast-forward:before {
            content: "\\e055"
        }
        
        .icon-skip-forward:before {
            content: "\\e056"
        }
        
        .icon-shuffle:before {
            content: "\\e057"
        }
        
        .icon-repeat:before {
            content: "\\e058"
        }
        
        .icon-folder:before {
            content: "\\e059"
        }
        
        .icon-umbrella:before {
            content: "\\e060"
        }
        
        .icon-moon:before {
            content: "\\e061"
        }
        
        .icon-thermometer:before {
            content: "\\e062"
        }
        
        .icon-drop:before {
            content: "\\e063"
        }
        
        .icon-sun:before {
            content: "\\e064"
        }
        
        .icon-cloud:before {
            content: "\\e065"
        }
        
        .icon-cloud-upload:before {
            content: "\\e066"
        }
        
        .icon-cloud-download:before {
            content: "\\e067"
        }
        
        .icon-upload:before {
            content: "\\e068"
        }
        
        .icon-download:before {
            content: "\\e069"
        }
        
        .icon-location:before {
            content: "\\e070"
        }
        
        .icon-location-2:before {
            content: "\\e071"
        }
        
        .icon-map:before {
            content: "\\e072"
        }
        
        .icon-battery:before {
            content: "\\e073"
        }
        
        .icon-head:before {
            content: "\\e074"
        }
        
        .icon-briefcase:before {
            content: "\\e075"
        }
        
        .icon-speech-bubble:before {
            content: "\\e076"
        }
        
        .icon-anchor:before {
            content: "\\e077"
        }
        
        .icon-globe:before {
            content: "\\e078"
        }
        
        .icon-box:before {
            content: "\\e079"
        }
        
        .icon-reload:before {
            content: "\\e080"
        }
        
        .icon-share:before {
            content: "\\e081"
        }
        
        .icon-marquee:before {
            content: "\\e082"
        }
        
        .icon-marquee-plus:before {
            content: "\\e083"
        }
        
        .icon-marquee-minus:before {
            content: "\\e084"
        }
        
        .icon-tag:before {
            content: "\\e085"
        }
        
        .icon-power:before {
            content: "\\e086"
        }
        
        .icon-command:before {
            content: "\\e087"
        }
        
        .icon-alt:before {
            content: "\\e088"
        }
        
        .icon-esc:before {
            content: "\\e089"
        }
        
        .icon-bar-graph:before {
            content: "\\e090"
        }
        
        .icon-bar-graph-2:before {
            content: "\\e091"
        }
        
        .icon-pie-graph:before {
            content: "\\e092"
        }
        
        .icon-star:before {
            content: "\\e093"
        }
        
        .icon-arrow-left:before {
            content: "\\e094"
        }
        
        .icon-arrow-right:before {
            content: "\\e095"
        }
        
        .icon-arrow-up:before {
            content: "\\e096"
        }
        
        .icon-arrow-down:before {
            content: "\\e097"
        }
        
        .icon-volume:before {
            content: "\\e098"
        }
        
        .icon-mute:before {
            content: "\\e099"
        }
        
        .icon-content-right:before {
            content: "\\e100"
        }
        
        .icon-content-left:before {
            content: "\\e101"
        }
        
        .icon-grid:before {
            content: "\\e102"
        }
        
        .icon-grid-2:before {
            content: "\\e103"
        }
        
        .icon-columns:before {
            content: "\\e104"
        }
        
        .icon-loader:before {
            content: "\\e105"
        }
        
        .icon-bag:before {
            content: "\\e106"
        }
        
        .icon-ban:before {
            content: "\\e107"
        }
        
        .icon-flag:before {
            content: "\\e108"
        }
        
        .icon-trash:before {
            content: "\\e109"
        }
        
        .icon-expand:before {
            content: "\\e110"
        }
        
        .icon-contract:before {
            content: "\\e111"
        }
        
        .icon-maximize:before {
            content: "\\e112"
        }
        
        .icon-minimize:before {
            content: "\\e113"
        }
        
        .icon-plus:before {
            content: "\\e114"
        }
        
        .icon-minus:before {
            content: "\\e115"
        }
        
        .icon-check:before {
            content: "\\e116"
        }
        
        .icon-cross:before {
            content: "\\e117"
        }
        
        .icon-move:before {
            content: "\\e118"
        }
        
        .icon-delete:before {
            content: "\\e119"
        }
        
        .icon-menu:before {
            content: "\\e120"
        }
        
        .icon-archive:before {
            content: "\\e121"
        }
        
        .icon-inbox:before {
            content: "\\e122"
        }
        
        .icon-outbox:before {
            content: "\\e123"
        }
        
        .icon-file:before {
            content: "\\e124"
        }
        
        .icon-file-add:before {
            content: "\\e125"
        }
        
        .icon-file-subtract:before {
            content: "\\e126"
        }
        
        .icon-help:before {
            content: "\\e127"
        }
        
        .icon-open:before {
            content: "\\e128"
        }
        
        .icon-ellipsis:before {
            content: "\\e129"
        }
        
        .icon-amazon_payments:before {
            content: "\\e800"
        }
        
        .icon-arrow-down2:before {
            content: "\\e607"
        }
        
        .icon-cart:before {
            content: "\\e600"
        }
        
        .icon-hamburger:before {
            content: "\\e601"
        }
        
        .icon-minus2:before {
            content: "\\e602"
        }
        
        .icon-plus2:before {
            content: "\\e605"
        }
        
        .icon-x:before {
            content: "\\e606"
        }
        
        .icon-grid-view:before {
            content: "\\e603"
        }
        
        .icon-list-view:before {
            content: "\\e604"
        }
        
        .icon-american_express:before {
            content: "\\41"
        }
        
        .icon-bitcoin:before {
            content: "\\42"
        }
        
        .icon-cirrus:before {
            content: "\\43"
        }
        
        .icon-discover:before {
            content: "\\44"
        }
        
        .icon-fancy:before {
            content: "\\46"
        }
        
        .icon-google_wallet:before {
            content: "\\47"
        }
        
        .icon-interac:before {
            content: "\\49"
        }
        
        .icon-jcb:before {
            content: "\\4a"
        }
        
        .icon-master:before {
            content: "\\4d"
        }
        
        .icon-paypal:before {
            content: "\\50"
        }
        
        .icon-stripe:before {
            content: "\\53"
        }
        
        .icon-twitter:before {
            content: "\\54"
        }
        
        .icon-visa:before {
            content: "\\56"
        }
        
        .icon-diners_club:before {
            content: "\\63"
        }
        
        .icon-dankort:before {
            content: "\\64"
        }
        
        .icon-facebook:before {
            content: "\\66"
        }
        
        .icon-google:before {
            content: "\\67"
        }
        
        .icon-instagram:before {
            content: "\\69"
        }
        
        .icon-maestro:before {
            content: "\\6d"
        }
        
        .icon-pinterest:before {
            content: "\\70"
        }
        
        .icon-search2:before {
            content: "\\73"
        }
        
        .icon-tumblr:before {
            content: "\\74"
        }
        
        .icon-vimeo:before {
            content: "\\76"
        }
        
        .icon-youtube:before {
            content: "\\79"
        }
        
        .icon-rss:before {
            content: "\\72"
        }
        
        .icon-facebook-messenger:before {
            content: "\\e900"
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
        
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent
        }
        
        .slick-list {
            position: relative;
            overflow: hidden;
            display: block;
            margin: 0;
            padding: 0
        }
        
        .slick-list:focus {
            outline: none
        }
        
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand
        }
        
        .slick-slider .slick-track,
        .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
        
        .slick-track {
            position: relative;
            left: 0;
            top: 0;
            display: block
        }
        
        .slick-track:before,
        .slick-track:after {
            content: "";
            display: table
        }
        
        .slick-track:after {
            clear: both
        }
        
        .slick-loading .slick-track {
            visibility: hidden
        }
        
        .slick-slide {
            float: left;
            height: 100%;
            min-height: 1px;
            display: none
        }
        
        [dir="rtl"] .slick-slide {
            float: right
        }
        
        .slick-slide img {
            display: block
        }
        
        .slick-slide.slick-loading img {
            display: none
        }
        
        .slick-slide.dragging img {
            pointer-events: none
        }
        
        .slick-initialized .slick-slide {
            display: block
        }
        
        .slick-loading .slick-slide {
            visibility: hidden
        }
        
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent
        }
        
        .slick-arrow.slick-hidden {
            display: none
        }
        
        .slick-loading .slick-list {
            background: #fff image-url("ajax-loader.gif") center center no-repeat
        }
        
        @font-face {
            font-family: "slick";
            src: font-url("slick.eot");
            src: font-url("slick.eot?#iefix") format("embedded-opentype"), font-url("slick.woff") format("woff"), font-url("slick.ttf") format("truetype"), font-url("slick.svg#slick") format("svg");
            font-weight: normal;
            font-style: normal
        }
        
        .slick-prev,
        .slick-next {
            z-index: 9999;
            position: absolute;
            display: block;
            height: 20px;
            width: 20px;
            line-height: 0px;
            font-size: 0px;
            cursor: pointer;
            background: transparent;
            color: transparent;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            padding: 0;
            border: none;
            outline: none
        }
        
        .slick-prev:hover,
        .slick-prev:focus,
        .slick-next:hover,
        .slick-next:focus {
            outline: none;
            background: transparent;
            color: transparent
        }
        
        .slick-prev:hover:before,
        .slick-prev:focus:before,
        .slick-next:hover:before,
        .slick-next:focus:before {
            opacity: 1
        }
        
        .slick-prev.slick-disabled:before,
        .slick-next.slick-disabled:before {
            opacity: 0.25
        }
        
        .slick-prev:before,
        .slick-next:before {
            font-family: "slick";
            font-size: 20px;
            line-height: 1;
            color: #000;
            opacity: 0.75;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .slick-vertical {
            padding: 0
        }
        
        .slick-vertical .slick-slide {
            margin: 0;
            box-sizing: border-box
        }
        
        .slick-vertical .slick-prev,
        .slick-vertical .slick-next {
            position: initial !important;
            display: inline-block !important;
            transform: rotate(90deg);
            margin: 10px
        }
        
        .slick-prev {
            left: -25px
        }
        
        [dir="rtl"] .slick-prev {
            left: auto;
            right: -25px
        }
        
        .slick-prev:before {
            content: "\\2190"
        }
        
        [dir="rtl"] .slick-prev:before {
            content: "\\2192"
        }
        
        .slick-next {
            right: -25px
        }
        
        [dir="rtl"] .slick-next {
            left: -25px;
            right: auto
        }
        
        .slick-next:before {
            content: "\\2192"
        }
        
        [dir="rtl"] .slick-next:before {
            content: "\\2190"
        }
        
        .slick-dotted.slick-slider {
            margin-bottom: 30px !important
        }
        
        .slick-dots {
            position: absolute;
            bottom: -25px;
            left: 0;
            list-style: none;
            display: block;
            text-align: center;
            padding: 0;
            margin: 0;
            width: 100%
        }
        
        .slick-dots li {
            position: relative;
            display: inline-block;
            height: 20px;
            width: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer
        }
        
        .slick-dots li button {
            border: 0;
            background: transparent;
            display: block;
            height: 20px;
            width: 20px;
            outline: none;
            line-height: 0px;
            font-size: 0px;
            color: transparent;
            padding: 5px;
            cursor: pointer
        }
        
        .slick-dots li button:hover,
        .slick-dots li button:focus {
            outline: none
        }
        
        .slick-dots li button:hover:before,
        .slick-dots li button:focus:before {
            opacity: 1
        }
        
        .slick-dots li button:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "\\2022";
            width: 20px;
            height: 20px;
            font-family: "slick";
            font-size: 30px;
            line-height: 20px;
            text-align: center;
            color: #000;
            opacity: 0.25;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .slick-dots li.slick-active button:before {
            color: #ed3376;
            opacity: 0.75
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
        
        #tml-lightbox,
        #tml-content-wrapper,
        #tml-content {
            position: absolute
        }
        
        .tm-lightbox {
            width: 100%;
            height: 100%;
            background: #000;
            background: rgba(255, 255, 255, 0.9);
            opacity: 0;
            top: 0;
            left: 0;
            position: fixed;
            z-index: 1000000;
            -webkit-backface-visibility: hidden
        }
        
        #tm-lightbox.tml-modal-mode {
            background: rgba(0, 0, 0, 0.2);
            overflow-x: hidden;
            overflow-y: auto
        }
        
        #tml-content {
            width: 100%;
            opacity: 0;
            visibility: hidden;
            -webkit-backface-visibility: hidden
        }
        
        .tml-modal-mode .modal-dialog {
            background: #fff;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5)
        }
        
        .tml-modal-mode .modal-dialog>div {
            padding-left: 0;
            padding-right: 0
        }
        
        #tml-content-wrapper.zoomed {
            top: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            left: 0 !important
        }
        
        #tml-content.scrollable-content:not(.modal-dialog) {
            background: #fff;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch
        }
        
        #tml-content.tml-error {
            width: 100%;
            background: none;
            font-size: 1.4rem;
            font-weight: bold;
            text-align: center;
            top: 50%;
            left: 0;
            box-shadow: none
        }
        
        @media only screen and (max-width: 479px) {
            #tml-content-wrapper {
                left: 10% !important;
                right: 10% !important
            }
            .tml-modal-mode #tml-content-wrapper {
                left: 5% !important;
                right: 5% !important
            }
        }
        
        #tml-content video,
        #tml-content iframe,
        #tml-content object,
        #tml-content embed {
            width: 100% !important;
            height: 100% !important
        }
        
        .tm-loader,
        .tm-loader #circle {
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%
        }
        
        .tm-loader {
            width: 2rem;
            height: 2rem;
            margin: -1rem 0 0 -1rem;
            position: absolute;
            top: 50%;
            left: 50%
        }
        
        .tm-loader #circle {
            width: 2rem;
            height: 2rem;
            background: #666666;
            -webkit-animation: preloader 1s ease infinite;
            -moz-animation: preloader 1s ease infinite;
            -o-animation: preloader 1s ease infinite;
            animation: preloader 1s ease infinite
        }
        
        #tml-caption {
            width: 100%;
            font-size: 1.2rem;
            font-style: italic;
            text-align: center;
            opacity: 0;
            -webkit-backface-visibility: hidden;
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            position: absolute;
            bottom: 0
        }
        
        #tml-caption span {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            display: block;
            padding: 1rem 1.5rem;
            border-top: 0.1rem solid #eeeeee
        }
        
        .tml-nav {
            width: 4.4rem;
            height: 4.4rem;
            font-size: 2rem;
            text-align: center;
            text-transform: capitalize;
            line-height: 4.4rem;
            opacity: 0.4;
            position: absolute;
            z-index: 10
        }
        
        .tml-nav:hover {
            opacity: 1
        }
        
        #tml-next {
            top: 50%;
            right: 3rem;
            margin-top: -2.1rem
        }
        
        #tml-prev {
            top: 50%;
            left: 3rem;
            margin-top: -2.1rem
        }
        
        #tml-exit {
            top: -1rem;
            right: 0rem
        }
        
        .tml-modal-mode #tml-exit {
            right: -1rem
        }
        
        #tml-tool-bar {
            margin: 0;
            display: inline-block;
            position: absolute;
            top: 1.5rem;
            left: 3rem
        }
        
        #tml-tool-bar .tml-nav {
            font-size: 1.5rem
        }
        
        #tml-tool-bar .tml-nav,
        #tml-tool-bar #tml-share-wrapper,
        #tml-tool-bar .tml-social-list {
            float: left;
            position: relative
        }
        
        #tml-tool-bar .tml-social-list.list-vertical,
        #tml-tool-bar .tml-social-list.list-vertical .tml-nav {
            float: none;
            text-align: left
        }
        
        #tml-tool-bar .tml-social-list {
            margin: 0;
            text-align: left;
            opacity: 0;
            visibility: hidden;
            position: relative;
            z-index: 101;
            -webkit-transition-property: -webkit-transform, opacity, visibility;
            -moz-transition-property: -moz-transform, opacity, visibility;
            -o-transition-property: -o-transform, opacity, visibility;
            transition-property: transform, opacity, visibility;
            -webkit-transition-duration: 400ms;
            -moz-transition-duration: 400ms;
            -o-transition-duration: 400ms;
            transition-duration: 400ms
        }
        
        #tml-tool-bar .tml-social-list,
        #tml-tool-bar .tml-social-list li {
            overflow: hidden
        }
        
        #tml-tool-bar .tml-social-list li a {
            margin-right: 1rem
        }
        
        #tml-tool-bar .tml-social-list.active {
            opacity: 1;
            visibility: visible
        }
        
        #tml-tool-bar .tml-social-list .tml-nav {
            width: auto;
            min-width: 4.4rem;
            font-size: 1.1rem
        }
        
        #tml-exit:before {
            content: '\\00d7'
        }
        
        .tml-nav {
            -webkit-transition-property: color, opacity;
            -moz-transition-property: color, opacity;
            -o-transition-property: color, opacity;
            -ms-transition-property: color, opacity;
            transition-property: color, opacity;
            -webkit-transition-duration: 300ms;
            -moz-transition-duration: 300ms;
            -o-transition-duration: 300ms;
            -ms-transition-duration: 300ms;
            transition-duration: 300ms
        }
        
        [class^="tml-nav"]:before,
        [class*="tml-nav"]:before {
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            display: inline-block;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        
        .width-auto {
            width: auto !important
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
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.1) !important
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
                top: 10px !important
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
            vertical-align: middle !important
        }
        
        .v-t {
            vertical-align: top !important
        }
        
        .v-b {
            vertical-align: bottom !important
        }
        
        .v-text-t {
            vertical-align: text-top
        }
        
        .v-text-b {
            vertical-align: text-bottom
        }
        
        .v-sup {
            vertical-align: super !important
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
            background-position: center !important;
            background-size: cover !important
        }
        
        .bg-white {
            background-color: #fff
        }
        
        .bg-dark {
            background-color: #333 !important
        }
        
        .bg-light {
            background-color: #eaebec
        }
        
        .bg-light.lt {
            background-color: #f8f8f8 !important
        }
        
        .bg-light .lt {
            background-color: #f8f8f8
        }
        
        .bg-light.dk {
            background-color: #dbdee2 !important
        }
        
        .bg-light .dk {
            background-color: #dbdee2
        }
        
        .bg-light.bg {
            background-color: #eaebec !important
        }
        
        .bg-light .bg {
            background-color: #eaebec
        }
        
        .bg-primary {
            color: rgba(255, 255, 255, 0.87);
            background-color: #3f51b5
        }
        
        .bg-primary.lt {
            background-color: #5363bb !important
        }
        
        .bg-primary .lt {
            background-color: #5363bb
        }
        
        .bg-primary.dk {
            background-color: #3345a8 !important
        }
        
        .bg-primary .dk {
            background-color: #3345a8
        }
        
        .bg-primary.bg {
            background-color: #3f51b5 !important
        }
        
        .bg-primary .bg {
            background-color: #3f51b5
        }
        
        .bg-success {
            color: rgba(255, 255, 255, 0.87);
            background-color: #4caf50
        }
        
        .bg-success.lt {
            background-color: #62b265 !important
        }
        
        .bg-success .lt {
            background-color: #62b265
        }
        
        .bg-success.dk {
            background-color: #3fa343 !important
        }
        
        .bg-success .dk {
            background-color: #3fa343
        }
        
        .bg-success.bg {
            background-color: #4caf50 !important
        }
        
        .bg-success .bg {
            background-color: #4caf50
        }
        
        .bg-info {
            color: rgba(255, 255, 255, 0.87);
            background-color: #2196f3
        }
        
        .bg-info.lt {
            background-color: #3ea1ef !important
        }
        
        .bg-info .lt {
            background-color: #3ea1ef
        }
        
        .bg-info.dk {
            background-color: #078bf4 !important
        }
        
        .bg-info .dk {
            background-color: #078bf4
        }
        
        .bg-info.bg {
            background-color: #2196f3 !important
        }
        
        .bg-info .bg {
            background-color: #2196f3
        }
        
        .bg-warning {
            color: rgba(255, 255, 255, 0.87);
            background-color: #ffc107
        }
        
        .bg-warning.lt {
            background-color: #f9c526 !important
        }
        
        .bg-warning .lt {
            background-color: #f9c526
        }
        
        .bg-warning.dk {
            background-color: #ecb100 !important
        }
        
        .bg-warning .dk {
            background-color: #ecb100
        }
        
        .bg-warning.bg {
            background-color: #ffc107 !important
        }
        
        .bg-warning .bg {
            background-color: #ffc107
        }
        
        .bg-danger {
            color: rgba(255, 255, 255, 0.87);
            background-color: #f44336
        }
        
        .bg-danger.lt {
            background-color: #f15e53 !important
        }
        
        .bg-danger .lt {
            background-color: #f15e53
        }
        
        .bg-danger.dk {
            background-color: #f92718 !important
        }
        
        .bg-danger .dk {
            background-color: #f92718
        }
        
        .bg-danger.bg {
            background-color: #f44336 !important
        }
        
        .bg-danger .bg {
            background-color: #f44336
        }
        
        .bg-accent {
            color: rgba(255, 255, 255, 0.87);
            background-color: #7e57c2
        }
        
        .bg-accent.lt {
            background-color: #8e6fc4 !important
        }
        
        .bg-accent .lt {
            background-color: #8e6fc4
        }
        
        .bg-accent.dk {
            background-color: #6e3ec2 !important
        }
        
        .bg-accent .dk {
            background-color: #6e3ec2
        }
        
        .bg-accent.bg {
            background-color: #7e57c2 !important
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
            opacity: 0.8 !important
        }
        
        .unmuted {
            opacity: 1 !important
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
            background-color: transparent !important
        }
        
        .pos-rlt {
            position: relative;
            z-index: 1
        }
        
        .pos-abt {
            position: absolute
        }
        
        .pos-fix {
            position: fixed !important
        }
        
        .pos-stc {
            position: static !important
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
            border-style: dashed !important;
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
            border-width: 0 !important
        }
        
        .b {
            border-color: rgba(110, 115, 120, 0.1) !important
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
            border-top-width: 2px !important
        }
        
        .b-t-3x {
            border-top-width: 3px !important
        }
        
        .b-t-4x {
            border-top-width: 4px !important
        }
        
        .b-t-5x {
            border-top-width: 5px !important
        }
        
        .b-r-2x {
            border-right-width: 2px !important
        }
        
        .b-r-3x {
            border-right-width: 3px !important
        }
        
        .b-r-4x {
            border-right-width: 4px !important
        }
        
        .b-r-5x {
            border-right-width: 5px !important
        }
        
        .b-b-2x {
            border-bottom-width: 2px !important
        }
        
        .b-b-3x {
            border-bottom-width: 3px !important
        }
        
        .b-b-4x {
            border-bottom-width: 4px !important
        }
        
        .b-b-5x {
            border-bottom-width: 5px !important
        }
        
        .b-l-2x {
            border-left-width: 2px !important
        }
        
        .b-l-3x {
            border-left-width: 3px !important
        }
        
        .b-l-4x {
            border-left-width: 4px !important
        }
        
        .b-l-5x {
            border-left-width: 5px !important
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
            border-style: dashed !important
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
            margin-left: 0 !important
        }
        
        .no-margin-r {
            margin-right: 0 !important
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
            padding: 0 !important
        }
        
        .no-padding-l {
            padding-left: 0 !important
        }
        
        .no-padding-r {
            padding-right: 0 !important
        }
        
        .no-padding-v {
            padding-top: 0 !important;
            padding-bottom: 0 !important
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
            border-radius: 0 !important
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
            overflow-y: hidden !important
        }
        
        .scrollable.hover>* {
            margin-top: -1px
        }
        
        .scrollable.hover:hover {
            overflow: visible !important;
            overflow-y: auto !important
        }
        
        .smart .scrollable {
            overflow-y: auto !important
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
            -webkit-box-shadow: none !important;
            box-shadow: none !important
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
            height: auto !important
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
        
        @media (min-width: 769px) {
            .line-100 {
                width: 100px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-150 {
                width: 150px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-200 {
                width: 200px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-250 {
                width: 250px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-300 {
                width: 300px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-350 {
                width: 350px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-400 {
                width: 400px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-450 {
                width: 450px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
            .line-500 {
                width: 500px;
                border-bottom: 0.03em solid rgba(0, 0, 0, 0.2) !important;
                border-spacing: 14px
            }
        }
        
        @media (min-width: 769px) and (max-width: 991px) {
            .text-center-sm {
                text-align: center
            }
            .text-left-sm {
                text-align: left
            }
            .text-right-sm {
                text-align: right
            }
            img.logo {
                height: 90px;
                margin-top: -15%
            }
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
        
        @media (max-width: 768px) {
            .medium-down--w-full {
                width: 100%
            }
            .w-auto-xs {
                width: auto
            }
            .w-full-xs {
                width: 100%
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
            color: #333 !important
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
        
        .btn,
        .btn--secondary,
        .rte .btn--secondary {
            color: #333;
            background: #fff;
            border: 1px solid #333
        }
        
        .btn:hover,
        .btn--secondary:hover {
            color: #ed3376;
            background: #fff;
            border: 1px solid #ed3376
        }
        
        .btn-primary {
            color: #fff;
            background: #333;
            border: 1px solid #333
        }
        
        .btn-primary:hover {
            color: #fff;
            background: #ed3376 !important;
            border: 1px solid #ed3376 !important
        }
        
        .btn-default {
            color: #333;
            background: #fff;
            font-weight: 800;
            border: 0
        }
        
        .btn-default:hover {
            color: #ed3376 !important;
            border: 0
        }
        
        .btn-alternate {
            color: #f38189;
            background: #fff;
            border: 1px solid #f38189
        }
        
        .btn-alternate:hover {
            color: #333;
            background: #fff;
            border: 1px solid #333
        }
        
        .btn-secondary {
            color: #fff;
            transition: all .6s;
            background: #f38189;
            border: 1px solid #f38189
        }
        
        .btn-secondary:hover {
            color: #fff;
            background: #ed3376;
            border: 1px solid #ed3376
        }
        
        .btn-tertiary {
            color: #ed3376;
            background: #fff;
            border: 1px solid #ed3376
        }
        
        .btn-tertiary:hover {
            background: #fff;
            color: #333;
            border: 1px solid #333
        }
        
        .btn-quaternary {
            background: #ed3376 !important;
            color: #fff !important;
            border: 1px solid #ed3376 !important
        }
        
        .btn-quaternary:hover {
            background: #da135b !important;
            color: #fff !important;
            border: 1px solid #da135b !important
        }
        
        .btn-quinary {
            background: #ea2b63;
            color: #fff;
            border: 1px solid #ea2b63
        }
        
        .btn-quinary:hover {
            background: #ce144b;
            color: #fff;
            border: 1px solid #ce144b
        }
        
        .btn__main,
        .btn__bg-white--primary,
        .btn__bg-white--secondary,
        .productAddJS,
        .btn__bg-filled--primary,
        .btn__bg-filled--secondary,
        .btn__no-border--primary,
        .btn__no-border--primary:hover,
        .btn__no-border--secondary,
        .btn__no-border--secondary:hover {
            height: 65px;
            font-size: 16px;
            padding: 24px 34px;
            letter-spacing: 0.2em;
            border-radius: 0;
            margin-bottom: 2px
        }
        
        .btn__bg-white--primary {
            background-color: #fff;
            border: 1px solid #333;
            color: #333
        }
        
        .btn__bg-white--primary:hover {
            border: 1px solid #f38189;
            color: #f38189
        }
        
        .btn__bg-white--secondary {
            background-color: #fff;
            border: 1px solid #ed3376;
            color: #ed3376
        }
        
        .btn__bg-white--secondary:hover {
            border: 1px solid #333;
            color: #333
        }
        
        .btn__filled-builder,
        .btn__bg-filled--primary,
        .btn__bg-filled--primary:hover,
        .btn__bg-filled--secondary,
        .btn__bg-filled--secondary:hover {
            border: 0;
            color: #fff
        }
        
        .productAddJS {
            border: 0
        }
        
        .btn__bg-filled--primary {
            background-color: #333
        }
        
        .btn__bg-filled--primary:hover {
            background-color: #f38189
        }
        
        .btn__bg-filled--secondary {
            background-color: #f38189
        }
        
        .btn__bg-filled--secondary:hover {
            background-color: #ed3376
        }
        
        .btn__no-border--primary {
            color: #333
        }
        
        .btn__no-border--primary:hover {
            color: #f38189
        }
        
        .btn__no-border--secondary {
            color: #f38189
        }
        
        .btn__no-border--secondary:hover {
            color: #333
        }
        
        .checkbox {
            -webkit-appearance: checkbox !important
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
            margin-top: 0 !important;
            margin-bottom: 0 !important
        }
        
        .no-m-v-gutter {
            margin-right: 0 !important;
            margin-left: 0 !important
        }
        
        .no-p-h-gutter {
            padding-top: 0 !important;
            padding-bottom: 0 !important
        }
        
        .no-p-v-gutter {
            padding-right: 0 !important;
            padding-left: 0 !important
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
        
        @media \\0screen\\,
        screen\\9 {
            .tabs {
                zoom: 1
            }
            .tabs .tab .tab-radio {
                filter: Alpha(opacity=0);
                position: absolute;
                z-index: -1
            }
            .tabs .tab .tab-panel {
                display: none;
                height: auto;
                overflow: visible;
                position: static;
                width: auto
            }
            .tabs .tab-content {
                float: none;
                padding-bottom: 1px;
                padding-top: 1px;
                width: auto
            }
            .tabs .checked label {
                background: white;
                border-bottom-width: 0;
                padding-bottom: 11px;
                z-index: 1
            }
            .tabs .checked .tab-panel {
                display: inline
            }
            .tabs .checked .tab-panel {
                display: inline;
                float: left;
                width: 100%
            }
        }
        
        .image-hover-zoom {
            transition: 0.6s all
        }
        
        .image-hover-zoom:hover {
            transform: scale(1.03)
        }
        
        .tabs {
            color: #222
        }
        
        .tabs a:link,
        .tabs a:visited,
        .tabs a:hover,
        .tabs a:focus,
        .tabs a:active {
            color: #333;
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.1)
        }
        
        .for {
            display: inline-block;
            position: relative
        }
        
        .for:after {
            background: #DDD;
            bottom: 150%;
            color: #222;
            font-family: sans-serif;
            font-size: 12px;
            opacity: 0;
            padding: .5em;
            pointer-events: none;
            position: absolute;
            right: 0;
            -webkit-transition: opacity .2s ease-in-out;
            transition: opacity .2s ease-in-out;
            white-space: nowrap
        }
        
        .for:hover:after {
            opacity: 1
        }
        
        .for.default-tab {
            color: #8AD
        }
        
        .for.ie8-and-below {
            color: #DA8
        }
        
        .for.default-tab:after {
            content: 'For default tab'
        }
        
        .for.ie8-and-below:after {
            content: 'For IE8 and below'
        }
        
        @media only screen and (max-width: 43em) {
            .tabs .tab>label {
                background: #f3f3f3;
                border-color: #dddddd;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                width: 100%
            }
            .tabs .tab [type="radio"]:checked+.tab-label {
                color: #333
            }
        }
        
        .tab i {
            border: solid #333;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px
        }
        
        .tab i.white-arrow {
            border-color: #fff
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
            cursor: none !important
        }
        
        .default-cursor {
            cursor: default
        }
        
        .no-scorll-bar::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background: transparent
        }
        
        #purity-pop-window-container {
            position: fixed;
            left: 0;
            z-index: 2147483648;
            background-color: rgba(0, 0, 0, 0.2);
            padding: 0 15%
        }
        
        @media (max-width: 480px) {
            #purity-pop-window-container {
                padding: 0 5%
            }
        }
        
        #purity-pop-window-container.animated-show {
            opacity: 0;
            animation-name: animated-show;
            animation-duration: .4s;
            animation-fill-mode: forwards
        }
        
        #purity-pop-window-container.animated-show #purity-pop-window-content {
            opacity: 0;
            animation-name: animated-show;
            animation-duration: .4s;
            animation-fill-mode: forwards;
            animation-delay: .3s
        }
        
        #purity-pop-window-container.animated-hide {
            opacity: 1;
            animation-name: animated-hide;
            animation-duration: .4s;
            animation-fill-mode: forwards
        }
        
        #purity-pop-window-container #purity-pop-window-content {
            background-color: #fff;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5)
        }
        
        #purity-pop-window-container #purity-pop-window-content svg {
            top: 10px;
            right: 10px
        }
        
        #purity-pop-window-container #purity-pop-window-content iframe {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0
        }
        
        img.afterpay-logo {
            width: 72px !important;
            height: auto !important
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
        
        .accordion {
            list-style-type: none;
            width: 100%;
            margin: 0 auto 20px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px
        }
        
        .accordion .link {
            font-family: 'Avenir Next Demi', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            cursor: pointer;
            display: block;
            padding: 15px 0;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            position: relative;
            -webkit-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            transition: all 0.4s ease
        }
        
        .accordion li i {
            position: absolute;
            top: 16px;
            left: 12px;
            font-size: 18px;
            -webkit-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            transition: all 0.4s ease
        }
        
        .accordion li span.icon-arrow-down2 {
            right: 12px;
            left: auto
        }
        
        .accordion li.open span.icon-arrow-down2 {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg)
        }
        
        .accordion li.default .submenu {
            display: block
        }
        
        .submenu {
            display: none;
            list-style-type: none
        }
        
        .slick-slide {
            width: 100%;
            margin-right: 16px;
            margin-left: 16px;
            padding-left: 0;
            padding-right: 0
        }
        
        @media (max-width: 768px) {
            .slick-slide {
                margin-left: 8px;
                margin-right: 8px
            }
        }
        
        .section-header {
            border-bottom: 2px solid #cdcdcd
        }
        
        .product-img__container {
            position: relative
        }
        
        .productGrid .label {
            right: 40px;
            position: absolute
        }
        
        @media (min-width: 769px) {
            .productGrid .label {
                right: 16px
            }
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
        
        @media screen and (max-width: 768px) {
            .product-bottom {
                line-height: 18px;
                margin-top: 10px
            }
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
            color: #ed3376 !important
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
            margin: 6px 0 !important
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
            padding: 0 12px !important;
            display: block !important
        }
        
        .header--dropdown-menu li:not(:last-child) {
            margin-bottom: 16px !important
        }
        
        ul#header-right-menu>li:not(:last-child) {
            position: relative
        }
        
        ul#header-right-menu>li:last-child {
            position: relative
        }
        
        @media (min-width: 1200px) {
            ul#header-right-menu li {
                padding: 0 0 0 28px
            }
        }
        
        @media (min-width: 985px) and (max-width: 1199px) {
            ul#header-right-menu li {
                padding: 0 0 0 18px
            }
        }
        
        @media (min-width: 769px) and (max-width: 984px) {
            ul#header-right-menu li {
                font-size: 13px
            }
        }
        
        .mobile-nav--container {
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            right: 0;
            background: #fff;
            width: 100%;
            transform: translateZ(0);
            -moz-transform: translatez(0);
            -ms-transform: translatez(0);
            -o-transform: translatez(0);
            -webkit-transform: translateZ(0);
            -webkit-font-smoothing: antialiased
        }
        
        .mobile-nav--container #search-bar form.opened {
            position: absolute
        }
        
        @media (max-width: 768px) {
            .main-content {
                margin-top: 87px;
                position: relative
            }
            .main-content.international-site {
                margin-top: 0px
            }
        }
        
        #MobileMenu {
            background: #fff;
            width: 100%
        }
        
        #MobileMenu .site-nav--mobile .icon-fallback-text .icon {
            font-size: 1.7rem;
            position: relative;
            top: 16px;
            color: #4d4d4d
        }
        
        #MobileMenu .grid__item {
            padding-right: 0
        }
        
        #MobileMenu .nav-open {
            width: 32px;
            height: 30px;
            top: 32px;
            right: -22px;
            transform: translate(0, 50%)
        }
        
        #MobileMenu .nav-open .inner,
        #MobileMenu .nav-open .inner::before,
        #MobileMenu .nav-open .inner::after {
            background-color: #4d4d4d;
            content: "";
            display: block;
            height: 2px;
            width: 21px
        }
        
        #MobileMenu .nav-open .inner {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%)
        }
        
        #MobileMenu .nav-open .inner::before {
            margin-top: -7px;
            position: absolute
        }
        
        #MobileMenu .nav-open .inner::after {
            margin-top: 7px;
            position: absolute
        }
        
        #MobileMenu .nav-open.nav-close .inner {
            background-color: transparent;
            left: 54%
        }
        
        #MobileMenu .nav-open.nav-close .inner::before,
        #MobileMenu .nav-open.nav-close .inner::after {
            transform: rotate(45deg);
            transform-origin: 0 50%;
            width: 21px
        }
        
        #MobileMenu .nav-open.nav-close .inner::after {
            transform: rotate(-45deg)
        }
        
        #mobile-nav li {
            list-style: none
        }
        
        #mobile-nav li .mobile-nav-arrow {
            height: 12px;
            position: absolute;
            right: 16px;
            transform: rotate(-90deg);
            transition: all 0.6s
        }
        
        #mobile-nav li .mobile-nav-account-arrow {
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #333;
            transition: all 0.6s
        }
        
        #mobile-nav li.open-drawer .mobile-nav-arrow {
            transform: rotate(90deg)
        }
        
        #mobile-nav li.open-drawer .mobile-nav-account-arrow {
            transform: rotate(180deg)
        }
        
        #mobile-nav>li>ul {
            max-height: 0;
            opacity: 0;
            transition: all 0.6s
        }
        
        #mobile-nav>li>ul>li>ul {
            max-height: 0;
            opacity: 0;
            transition: all 0.6s
        }
        
        #mobile-nav>li>ul>li.open-drawer>ul {
            max-height: 1000px;
            opacity: 1
        }
        
        #mobile-nav>li.open-drawer>ul {
            max-height: 1000px;
            opacity: 1
        }
        
        @media only screen and (max-width: 768px) {
            #MobileMenu {
                border-bottom: 1px solid #d4d4d4;
                -webkit-box-shadow: 5px 4px 6px -10px #444;
                -moz-box-shadow: 5px 4px 6px -10px #444;
                box-shadow: 5px 4px 6px -10px #444
            }
            #MobileMenu #open-mobile-search-btn {
                top: -12px;
                left: -3px
            }
            #MobileMenu #open-mobile-search-btn .icon-search {
                font-size: 26px
            }
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
        
        @media (min-width: 769px) and (max-width: 1199px) {
            .no-p-h-gutter--medium-up {
                padding-right: 0;
                padding-left: 0
            }
            .nav-bar .wrapper {
                padding: 0
            }
        }
        
        @media (min-width: 769px) {
            .site-header__cart-toggle .icon-fallback-text {
                position: relative
            }
            .dropdown_fullwidth .nav__featured-image {
                height: 226px;
                width: 168px
            }
        }
        
        @media (max-width: 768px) {
            .site-nav--mobile .icon-fallback-text {
                position: relative
            }
            .site-nav--mobile .icon-fallback-text span#CartCount {
                left: 12px;
                top: -3px;
                width: 22px;
                height: 22px
            }
        }
        
        .nav-bk {
            left: 0;
            top: 32px;
            height: 0px;
            z-index: 100;
            transition: height 0.4s;
            padding: 0 !important
        }
        
        .nav-bk:after {
            content: "";
            position: absolute;
            width: 100%;
            bottom: 1px;
            z-index: -1;
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08)
        }
        
        .snize-ac-results {
            box-shadow: none !important
        }
        
        .snize-dropdown-arrow {
            display: none
        }
        
        .snize-results-html span.caret-right {
            top: 0px !important
        }
        
        .snize-results-html h3,
        .snize-results-html .h3 {
            text-align: center
        }
        
        .snize-results-html div {
            margin-top: 35px !important
        }
        
        .snize-rewards-link {
            padding: 10px 0 35px;
            font-size: 13px;
            line-height: 13px;
            text-align: center;
            letter-spacing: 0.2em;
            display: block
        }
        
        .snize-suggestion strong {
            font-weight: 100
        }
        
        .snize-view-all-link {
            font-size: 13px;
            line-height: 13px;
            letter-spacing: 0.2em
        }
        
        .snize-view-all-link span {
            width: 230px !important;
            line-height: 26px !important
        }
        
        .widget-title {
            padding: 35px 0 15px;
            margin-bottom: 5px !important;
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
        
        .slick-prev:before,
        .slick-next:before {
            color: black
        }
        
        .featured-carousel .slick-prev,
        .featured-carousel .slick-next {
            top: 30%
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
        
        @media (max-width: 768px) {
            .snize-ac-results {
                margin: 0
            }
            .snize-ac-results-mobile li {
                margin: 0 !important
            }
            .snize-results-html {
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important
            }
            .snize-results-html h3,
            .snize-results-html .h3 {
                text-align: center;
                margin-bottom: 25px;
                line-height: 32px
            }
            .snize-results-html p,
            .snize-results-html .p-tag {
                font-size: 15px
            }
            .snize-rewards-link {
                font-size: 15px;
                letter-spacing: .2em;
                display: block
            }
            .snize-view-all-link {
                padding-bottom: 35px !important
            }
            .widget-title {
                margin: 5px 0
            }
            h2.section-header,
            .section-header.h2 {
                margin-bottom: 25px
            }
            .site-footer {
                padding-top: 0px
            }
            .our-story-image-1 {
                margin: 0 auto 10px;
                float: none;
                display: block
            }
            .our-story-image-3 {
                float: none;
                display: block;
                margin: 0 auto 20px
            }
            .our-story-image-4 {
                margin: 0 auto 10px;
                float: none;
                display: block
            }
            .our-story-image-5 {
                margin: auto;
                float: none;
                display: block
            }
            .page-content {
                padding: 10px 0
            }
            .page-menu {
                line-height: 24px;
                padding: 20px 0;
                margin: 0
            }
            .subtext {
                margin: auto
            }
            .subtext-link {
                margin: 24px 0 24px
            }
            .philanthropy-title {
                text-align: center
            }
            .breadcrump-div {
                float: left
            }
            .breadcrumb-nav {
                margin: 0 0 6px;
                text-align: left
            }
            .sidebar-wrapper {
                display: none
            }
        }
        
        @media (max-width: 550px) {
            #SortBy {
                text-align-last: center
            }
        }
        
        @media (max-width: 414px) {
            .blog-image {
                padding: 0
            }
            .section-header h1,
            .section-header .h1 {
                font-size: 36px;
                line-height: 36px
            }
            .snize-results-html h3,
            .snize-results-html .h3 {
                padding: 0 20px
            }
        }
        
        .modal-dialog {
            height: auto !important
        }
        
        .modal-dialog .modal-price {
            font-size: 30px
        }
        
        .modal-dialog .modal-item-info {
            font-style: italic
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
        
        .modalDialog {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 15px;
            background: rgba(0, 0, 0, 0.8);
            z-index: 99999;
            opacity: 1;
            -webkit-transition: opacity 400ms ease-in;
            -moz-transition: opacity 400ms ease-in;
            transition: opacity 400ms ease-in;
            pointer-events: none
        }
        
        .modalDialog:target {
            opacity: 1;
            pointer-events: auto
        }
        
        .modalDialog>div {
            width: 400px;
            position: relative;
            margin: 10% auto;
            padding: 5px 20px 13px 20px;
            border-radius: 10px;
            background: #fff;
            background: -moz-linear-gradient(#fff, #999);
            background: -webkit-linear-gradient(#fff, #999);
            background: -o-linear-gradient(#fff, #999)
        }
        
        .modalDiv {
            position: relative;
            background: #fff
        }
        
        .modalDiv img {
            display: block;
            margin: auto
        }
        
        .modalTitle {
            margin: 0 0 5px
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
        
        @media (max-width: 768px) {
            .collection-swatch {
                margin-top: 12px
            }
        }
        
        #Footer h1,
        #Footer .h1 {
            font-size: 18px;
            line-height: 25px;
            font-weight: 400;
            width: 70%;
            margin: auto
        }
        
        #Footer h1>a,
        #Footer .h1>a {
            text-decoration: underline
        }
        
        #Footer h3,
        #Footer .h3 {
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-family: "Avenir Next Demi", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 1.5rem
        }
        
        #Footer .site-footer ul {
            list-style-type: none
        }
        
        #Footer .site-footer ul li {
            font-size: 14px;
            margin-bottom: 0.75em
        }
        
        #Footer .site-footer .large--one-quarter ul {
            margin: 0
        }
        
        #Footer .site-footer #social-icon-block .fzSpET.fzSpET {
            flex-direction: column
        }
        
        #Footer .site-footer #social-icon-block .jGdRFY.jGdRFY,
        #Footer .site-footer #social-icon-block .iWqZrV.iWqZrV,
        #Footer .site-footer #social-icon-block .hlBEKn.hlBEKn {
            padding-left: 0;
            padding-top: 0
        }
        
        #Footer .site-footer #social-icon-block input[type=email] {
            border: 0;
            outline: 0;
            border: 1px solid #444;
            border-radius: 0;
            padding: 0 8px
        }
        
        #Footer .site-footer #social-icon-block button {
            width: 100%
        }
        
        #Footer .site-footer #social-icon-block ul li {
            display: inline-block;
            padding: 0 10px 0 0;
            font-size: 20px
        }
        
        #Footer .site-footer #social-icon-block .input-group-btn {
            width: 0
        }
        
        #Footer .site-footer #site-selection ul li {
            display: inline;
            padding: 0 6px;
            border-right: 1px solid #747474
        }
        
        #Footer .site-footer #site-selection ul li:last-child {
            border-right: none
        }
        
        #not-found-page .charming {
            background-image: url(//cdn.shopify.com/s/files/1/0648/1955/files/404_main.jpg?v=1518040337);
            height: calc(500vw / 13) !important
        }
        
        @media (max-width: 768px) {
            #not-found-page .charming {
                height: calc(840vw / 13) !important;
                background-position: right !important
            }
        }
        
        #not-found-page .charming .text-center {
            transform-origin: left
        }
        
        #not-found-page img {
            max-width: 80%
        }
        
        #not-found-page .text-center .btn,
        #not-found-page .text-center .btn--secondary {
            background-color: #bb3960;
            color: white
        }
        
        #not-found-page .text-center .btn:hover,
        #not-found-page .text-center .btn--secondary:hover {
            background-color: #862d4a
        }
        
        #not-found-page .text-center .sameline {
            white-space: nowrap
        }
        
        #not-found-page .text-center .b-b {
            border-color: #333;
            padding-bottom: 2px
        }
        
        #not-found-page .text-center .b-b:hover {
            border-color: #ed3376
        }
        
        @media (max-width: 768px) {
            #not-found-page .text-center {
                transform: scale(1)
            }
        }
        
        @media (min-width: 769px) {
            #not-found-page .text-center {
                transform: scale(0.8)
            }
        }
        
        @media (min-width: 960px) {
            #not-found-page .text-center {
                transform: scale(1)
            }
        }
        
        @media (min-width: 1400px) {
            #not-found-page .text-center {
                transform: scale(1.1)
            }
        }
        
        #not-found-page .italic {
            font-style: italic
        }
        
        #not-found-page .banner404 {
            margin-top: 100px;
            margin-bottom: 100px
        }
        
        #not-found-page .banner404 .image-content-404 {
            background-image: url(//cdn.shopify.com/s/files/1/0648/1955/files/404_banner.jpg?v=1518045183);
            overflow: hidden;
            background-size: cover;
            background-position: center;
            height: calc(165vw / 8)
        }
        
        #not-found-page .banner404 .image-content-404 .one-half {
            height: 100%;
            justify-content: center
        }
        
        #not-found-page .banner404 .image-content-404 .text-center {
            transform-origin: center
        }
        
        @media (max-width: 768px) {
            #not-found-page .banner404 .image-content-404 {
                height: calc(320vw / 8);
                background-position: left !important;
                margin-bottom: 32px
            }
        }
        
        #not-found-page .banner404 .large--hide {
            padding: 0 16px
        }
        
        @media (max-width: 480px) {
            #not-found-page .banner404 {
                width: 90%
            }
        }
        
        @media (max-width: 768px) {
            #not-found-page .banner404 {
                padding-bottom: 32px
            }
        }
        
        @media (min-width: 1400px) {
            #not-found-page .banner404 {
                width: 60%
            }
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
            display: block !important
        }
        
        section#collectionBanner {
            background-size: cover;
            background-position-y: 0px
        }
        
        section#collectionBanner .banner-container img {
            height: 330px;
            width: 598px
        }
        
        section#collectionBanner .content {
            padding: 0 30px 0;
            text-align: center;
            margin: auto;
            border: 0px solid
        }
        
        section#collectionBanner .description {
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            display: none
        }
        
        @media (min-width: 1200px) {
            .product-eyebrow {
                margin-top: 12px
            }
        }
        
        @media (max-width: 768px) {
            section#collectionBanner {
                padding-top: 0px !important;
                background-position-y: 75px !important
            }
            section#collectionBanner h1,
            section#collectionBanner .h1 {
                font-size: 28px;
                margin: 0 auto 0;
                line-height: 1.2
            }
            section#collectionBanner .content {
                float: none;
                margin: 0 auto 0;
                padding: 15px 0 15px;
                border: 0px solid
            }
            section#collectionBanner .description {
                display: none
            }
            section#collectionBanner .right {
                width: 100% !important
            }
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            section#collectionBanner .banner-container img {
                height: 217px;
                width: 394px
            }
        }
        
        @media (min-width: 480px) and (max-width: 768px) {
            section#collectionBanner .banner-container img {
                height: 275px;
                width: 500px
            }
        }
        
        @media (max-width: 479px) {
            section#collectionBanner .banner-container img {
                height: 198px;
                width: 360px
            }
        }
        
        @media (max-width: 550px) {
            section#collectionBanner {
                padding-top: 0px !important;
                background-position-y: 75px !important
            }
            section#collectionBanner h1,
            section#collectionBanner .h1 {
                margin: 0 auto 0;
                text-align: center
            }
            section#collectionBanner .content {
                float: none;
                margin: 0 auto 0;
                padding: 5px 0 5px;
                border: 0px solid;
                text-align: center
            }
            section#collectionBanner .description {
                display: none;
                text-align: justify
            }
            section#collectionBanner .right {
                width: 100% !important;
                padding: 0 5px
            }
        }
        
        @media (max-width: 480px) {
            .section-header__title {
                font-size: 2em
            }
        }
        
        .product-card {
            transform: scale(0.94)
        }
        
        .collection-banner--img__left {
            margin-left: 50%
        }
        
        .collection-banner__inner.banner-img__left {
            background-position: center left
        }
        
        .collection-banner__inner.banner-img__center {
            background-position: center
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
        
        .checkbox-add-to-cart {
            cursor: pointer
        }
        
        .checkbox-add-to-cart .upsell__confirmation {
            display: none
        }
        
        .checkbox-add-to-cart .upsell__title,
        .checkbox-add-to-cart .upsell__price {
            color: #929292
        }
        
        .checkbox-add-to-cart:hover .upsell__title,
        .checkbox-add-to-cart:hover .upsell__price {
            color: #333
        }
        
        .checkbox-add-to-cart.checkbox--active img {
            opacity: 0.75
        }
        
        .checkbox-add-to-cart.checkbox--active .upsell__price {
            display: none
        }
        
        .checkbox-add-to-cart.checkbox--active .upsell__title,
        .checkbox-add-to-cart.checkbox--active .upsell__confirmation {
            display: inline-block;
            color: #5cb85c
        }
        
        .checkbox-add-to-cart.checkbox--active .upsell-checkbox {
            background-color: #5cb85c;
            border-color: #5cb85c
        }
        
        .multiple-add-to-cart,
        .big-add-to-cart {
            height: 65px;
            font-size: 16px;
            padding: 24px 34px;
            letter-spacing: 0.2em;
            border-radius: 0;
            margin-bottom: 2px
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
        
        #AddToCartForm #pp-review-block {
            display: inline-block
        }
        
        #AddToCartForm #pp-review-block .yotpo {
            float: left;
            padding-right: 6px
        }
        
        #AddToCartForm #pp-review-block .icon-fallback-text {
            float: left;
            padding-left: 6px;
            position: relative
        }
        
        @media screen and (max-width: 768px) {
            #AddToCartForm #BIS_trigger {
                display: block
            }
            #AddToCartForm #pp-review-block {
                display: block
            }
            #AddToCartForm #pp-review-block .yotpo,
            #AddToCartForm #pp-review-block .icon-fallback-text {
                display: block;
                margin: 10px 0;
                float: none;
                padding-right: 0
            }
            #AddToCartForm #pp-review-block .icon-fallback-text {
                margin-bottom: 32px
            }
        }
        
        @media screen and (max-width: 768px) {
            #AddToCartForm #pp-review-block .icon-fallback-text {
                padding-left: 0
            }
            #AddToCartForm #review-block .text-black-dk {
                display: none
            }
            #AddToCartForm .vertical-divider {
                border: none
            }
        }
        
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
            #ProductPhoto img {
                height: 320px;
                width: 320px
            }
            .hero-image img {
                height: 180px;
                width: 320px
            }
        }
        
        @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
            #ProductPhoto img {
                height: 320px;
                width: 320px
            }
            .hero-image img {
                height: 180px;
                width: 320px
            }
        }
        
        @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
            #ProductPhoto img {
                height: 375px;
                width: 375px
            }
            .hero-image img {
                height: 210px;
                width: 375px
            }
        }
        
        @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
            #ProductPhoto img {
                height: 414px;
                width: 414px
            }
            .hero-image img {
                height: 232px;
                width: 414px
            }
        }
        
        img[data-sizes="auto"] {
            display: block;
            width: 100%
        }
        
        @media (max-width: 480px) {
            #instaFeed .h4 {
                font-size: 1.1em
            }
        }
        
        .shoppable-ig-collage:hover {
            opacity: 0.8
        }
        
        @media (max-width: 768px) {
            #ReviewSection .h4 {
                margin-bottom: 0
            }
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
        
        @media (max-width: 480px) {
            #talkable-offer iframe {
                bottom: 60px !important
            }
        }
        
        @media (max-width: 480px) {
            .zEWidget-launcher {
                bottom: 57px !important
            }
        }
        
        .mobile-AddToTote-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            z-index: 1000000
        }
        
        .mobile-AddToTote-bar .controller .option .arrow {
            border: solid #333;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            vertical-align: super
        }
        
        .mobile-AddToTote-bar .swatch-container {
            bottom: 60px;
            max-height: 0;
            transition: .5s all linear;
            border-width: 0
        }
        
        .mobile-AddToTote-bar .swatch-container .with-value {
            background-color: #fff;
            border: 2px solid #ddd
        }
        
        .mobile-AddToTote-bar .swatch-container .active label {
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            border: 2px solid #fff
        }
        
        .mobile-AddToTote-bar .swatch-container .active label.with-value {
            background-color: #fff;
            border-color: #f8b4b9
        }
        
        .mobile-AddToTote-bar.show .arrow {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg)
        }
        
        .mobile-AddToTote-bar.show .swatch-container {
            border-width: 1px;
            max-height: 400px
        }
        
        .upsellPopWindow.btn-secondary {
            right: 8px;
            bottom: 0
        }
        
        @media (max-width: 768px) {
            #ProductThumbs .circle {
                border-radius: 0
            }
        }
        
        @font-face {
            font-family: 'JustLovely';
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/JustLovely_Slanted_wide.ttf?v=14518361461016194958");
            src: url("//cdn.shopify.com/s/files/1/0648/1955/t/1046/assets/JustLovely_Slanted_wide.ttf?v=14518361461016194958") format("truetype")
        }
        
        .product-banner-container {
            height: 140px
        }
        
        .product-banner-container .banner-text {
            font-family: 'JustLovely';
            font-size: 52px;
            opacity: 1;
            padding-top: 30px
        }
        
        .product-banner-container .banner-text span {
            opacity: 0
        }
        
        .product-banner-container .shade-image-box {
            width: 90px;
            height: 90px
        }
        
        .product-banner-container .shade-image-box .shade-image {
            opacity: 0
        }
        
        .product-banner-container.active {
            animation: product-banner-container-animation 0.6s forwards
        }
        
        .product-banner-container.active .banner-text {
            animation: banner-text-animation 1.8s forwards
        }
        
        .product-banner-container.active .banner-text span {
            animation: banner-text-span-animation 2.4s forwards
        }
        
        .product-banner-container.active .shade-image-box {
            animation: shade-image-box-animation 0.4s forwards
        }
        
        .product-banner-container.active .shade-image-box .shade-image {
            animation: shade-image-animation 1s forwards
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
        
        @media screen and (max-width: 480px) {
            .product-banner-container.active .shade-image-box {
                animation: shade-image-box-animation 1.2s forwards
            }
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
        
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            touch-callout: none;
            user-select: none;
            touch-action: pan-y;
            tap-highlight-color: transparent;
            padding-top: 40px
        }
        
        .slick-list {
            position: relative;
            overflow: hidden;
            display: block;
            margin: 0;
            padding: 0
        }
        
        .slick-list:focus {
            outline: none
        }
        
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand
        }
        
        .slick-slider .slick-track,
        .slick-slider .slick-list {
            transform: translate3d(0, 0, 0)
        }
        
        .slick-track {
            position: relative;
            left: 0;
            top: 0;
            display: block
        }
        
        .slick-track:before,
        .slick-track:after {
            content: "";
            display: table
        }
        
        .slick-track:after {
            clear: both
        }
        
        .slick-loading .slick-track {
            visibility: hidden
        }
        
        .slick-slide {
            float: left;
            height: 100%;
            min-height: 1px;
            display: none
        }
        
        [dir="rtl"] .slick-slide {
            float: right
        }
        
        .slick-slide img {
            display: block
        }
        
        .slick-slide.slick-loading img {
            display: none
        }
        
        .slick-slide.dragging img {
            pointer-events: none
        }
        
        .slick-initialized .slick-slide {
            display: block
        }
        
        .slick-loading .slick-slide {
            visibility: hidden
        }
        
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 0;
            outline: none
        }
        
        .slick-vertical .slick-slide:focus,
        .slick-vertical .slick-slide:active,
        .slick-vertical .slick-slide::selection {
            outline: none !important;
            border: 0 !important;
            box-shadow: none
        }
        
        .slick-arrow.slick-hidden {
            display: none
        }
        
        .slick-current {
            position: relative
        }
        
        .product__description ul {
            margin-bottom: 24px
        }
        
        @media (min-width: 769px) {
            .product__description ul {
                list-style: none
            }
        }
        
        .consumer-study-chart {
            padding-top: 100%
        }
        
        .consumer-study-chart svg {
            width: 100%;
            height: 100%;
            transform: rotate(-90deg);
            background: #fff;
            border-radius: 50%;
            top: 0
        }
        
        .consumer-study-chart svg circle {
            fill: #eaebec;
            stroke: #f38189;
            stroke-width: 32;
            stroke-dasharray: 0 100
        }
        
        .consumer-study-chart .consumer-study-number-container {
            left: 0;
            top: 0;
            width: calc(100% - 28px);
            height: calc(100% - 28px);
            margin: 14px
        }
        
        @media (max-width: 768px) {
            .consumer-study-chart .consumer-study-number-container {
                width: calc(100% - 24px);
                height: calc(100% - 24px);
                margin: 12px
            }
        }
        
        @media (max-width: 480px) {
            .consumer-study-chart .consumer-study-number-container {
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                margin: 10px
            }
        }
        
        .consumer-study-chart .consumer-study-number-container .consumer-study-number {
            font-size: 40px;
            margin-top: calc(50% - 20px);
            line-height: 40px
        }
        
        @media (max-width: 768px) {
            .consumer-study-chart .consumer-study-number-container .consumer-study-number {
                font-size: 36px;
                margin-top: calc(50% - 18px);
                line-height: 36px
            }
        }
        
        @media (max-width: 480px) {
            .consumer-study-chart .consumer-study-number-container .consumer-study-number {
                font-size: 32px;
                margin-top: calc(50% - 16px);
                line-height: 32px
            }
        }
        
        .consumer-study-chart .consumer-study-number-container .consumer-study-number span {
            font-size: 0.6em
        }
        
        .product__description-tabs ul {
            text-align: left !important;
            margin-bottom: 20px
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
        
        .blog-body a {
            border-bottom: 0.06em solid rgba(0, 0, 0, 0.5)
        }
        
        .blog-body a:hover {
            border-bottom: 0.06em solid rgba(237, 51, 118, 0.6)
        }
        
        .blog-body hr {
            background: #333;
            width: 150px;
            margin: 35px auto 0px;
            height: 2px
        }
        
        .blog-body h2,
        .blog-body .h2 {
            margin-top: 1em
        }
        
        .blog-body h2.subheadline,
        .blog-body .subheadline.h2 {
            margin-top: 10px;
            font-size: 28px;
            line-height: 32px
        }
        
        .blog-body p,
        .blog-body .p-tag,
        ol {
            font-family: 'Avenir Next Regular', 'Times New Roman', serif;
            text-align: left;
            line-height: 162%;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.8)
        }
        
        @media (max-width: 480px) {
            .blog-body p,
            .blog-body .p-tag,
            ol {
                font-size: 17px
            }
        }
        
        .blog-content {
            background: #fff;
            padding: 5px 0;
            border: 0px solid
        }
        
        .blog-header {
            margin-bottom: 0px !important
        }
        
        .blog-header h1,
        .blog-header .h1 {
            margin-bottom: 0px
        }
        
        .read-more {
            cursor: pointer;
            font-size: 12px;
            line-height: 12px;
            letter-spacing: .2em
        }
        
        #blog-all a.btn-default {
            font-weight: 400
        }
        
        #blog-all a.btn-default.active {
            color: #ed3376
        }
        
        #blog-all .grid__item {
            padding-left: 15px;
            padding-right: 15px
        }
        
        #blog-cover .tagged-tittle {
            max-width: calc(100% - 120px)
        }
        
        .blog-feature-image {
            padding-top: 55%;
            background-size: cover
        }
        
        .recent-blog-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3
        }
        
        .recent-read-more {
            bottom: 4px;
            left: calc(33.3333% + 8px)
        }
        
        @media screen and (max-width: 768px) {
            .recent-blog-title {
                padding: 0 8px;
                -webkit-line-clamp: 2
            }
            .recent-read-more {
                left: calc(33.3333% + 16px)
            }
        }
        
        @media screen and (max-width: 480px) {
            .recent-blog-title {
                -webkit-line-clamp: 4
            }
        }
        
        .section-header {
            text-align: center;
            border-bottom: 0px
        }
        
        .blog-image {
            margin: 0 auto 40px;
            display: block;
            cursor: pointer
        }
        
        .blog-header h1,
        .blog-header .h1 {
            font-size: 50px;
            line-height: 50px
        }
        
        .blog-header h2,
        .blog-header .h2 {
            font-size: 35px;
            line-height: 35px
        }
        
        .blog-header time {
            font-size: 19px;
            line-height: 19px
        }
        
        @media (max-width: 768px) {
            .blog-content h2,
            .blog-content .h2 {
                border: 0px solid
            }
        }
        
        @media (max-width: 550px) {
            .blog-body h2.subheadline,
            .blog-body .subheadline.h2 {
                margin: 10px 0 10px;
                padding: 0 10px;
                font-size: 20px;
                line-height: 24px
            }
            .blog-header h1,
            .blog-header .h1 {
                font-size: 36px;
                line-height: 36px;
                margin: 0
            }
        }
        
        @media (max-width: 414px) {
            .blog-image {
                padding: 0
            }
            .section-header h1,
            .section-header .h1 {
                font-size: 36px
            }
        }
        
        header:after,
        header:before {
            content: '';
            display: block;
            width: 100%;
            clear: both
        }
        
        @media screen and (max-width: 768px) {
            #blog-all .b-r,
            #blog-cover .b-r,
            .blog-pictures.b-r {
                border-width: 0
            }
        }
        
        #blogSection .productGrid {
            height: auto
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
        
        .snize-ac-results li {
            background: #fff;
            border: none !important
        }
        
        .snize-ac-results li.snize-label {
            background: #fff !important
        }
        
        .snize-ac-results span.snize-description {
            margin-top: 3px !important
        }
        
        .snize-ac-results span.snize-overhidden {
            margin-top: 20px
        }
        
        .snize-ac-results span.snize-title {
            color: #666666 !important;
            font-weight: normal !important;
            font-size: 16px !important
        }
        
        .snize-results-html div {
            background: #fce4de !important
        }
        
        .snize-results-html p,
        .snize-results-html .p-tag {
            font-family: 'Avenir Next Demi', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
            color: #333 !important;
            font-style: normal !important;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: .2em;
            padding-top: 15px
        }
        
        .snize-view-all-link {
            padding-top: 40px !important;
            background: #fff !important
        }
        
        .snize-view-all-link span {
            border: 1px solid;
            width: 190px;
            padding: 7px 0;
            font-family: 'Avenir Next Demi', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-size: 12px;
            color: #333 !important;
            letter-spacing: .2em
        }
        
        #perk-header .img-section {
            background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/page_purist-perks/loyalty-banner-top");
            z-index: -1;
            background-position: bottom;
            background-size: cover;
            background-repeat: no-repeat
        }
        
        @media (max-width: 768px) {
            #perk-header .img-section {
                background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/page_purist-perks/loyalty-banner-top-mobile")
            }
        }
        
        #perk-header .img-section.login {
            background-position: top;
            background-size: contain
        }
        
        #perk-header .img-section #loyaltylion .lion-loyalty-panel-sidebar__header {
            display: none
        }
        
        #perk-header .img-section #loyaltylion .lion-loyalty-panel-sidebar__menu {
            padding-top: 0
        }
        
        #perk-header .img-section #loyaltylion .lion-loyalty-panel-content--earn,
        #perk-header .img-section #loyaltylion .lion-loyalty-panel-content--rewards {
            background-color: white
        }
        
        .perk-section .perk-special {
            color: #C1365F
        }
        
        .perk-section .perk-special-bg {
            background-color: #C1365F
        }
        
        .perk-section .perk-special-bd {
            border: #C1365F 2px solid
        }
        
        .perk-section .leaf {
            height: 28px
        }
        
        .perk-container {
            background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/page_purist-perks/loyalty-banner-bot");
            z-index: -1;
            background-position: bottom;
            background-size: contain;
            background-repeat: no-repeat
        }
        
        @media (max-width: 768px) {
            .perk-container {
                background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/page_purist-perks/loyalty-banner-bot-mobile")
            }
        }
        
        .featured-link--section {
            width: 100%;
            box-sizing: border-box;
            float: left;
            min-height: 100px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
        }
        
        @media (max-width: 480px) {
            .featured-link--section {
                border-bottom: 1px solid #e5e5e5;
                margin-bottom: 2em
            }
        }
        
        .featured-link--half.featured-link__imageHalf {
            background-color: transparent;
            text-align: center
        }
        
        .featured-link--half.featured-link__imageHalf a {
            width: 100%;
            display: block
        }
        
        .featured-link--half.featured-link__imageHalf a img {
            width: 100%
        }
        
        .featured-link--half {
            box-sizing: border-box;
            float: left;
            width: 50%;
            position: relative;
            text-align: center;
            display: table;
            -webkit-box-flex: 1;
            -webkit-flex: 1 0 auto;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center
        }
        
        @media (max-width: 480px) {
            .featured-link--half {
                width: 100%;
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 100%;
                -ms-flex: 1 0 100%;
                flex: 1 0 100%
            }
        }
        
        @media (max-width: 768px) {
            .featured-link--half {
                width: 100%;
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 100%;
                -ms-flex: 1 0 100%;
                flex: 1 0 100%
            }
        }
        
        .featured-link--half .featured-link--wrap {
            width: 100%;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto
        }
        
        .featured-link--half img {
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 100%
        }
        
        @media (max-width: 480px) {
            .featured-link--half img {
                width: 100%;
                max-width: auto
            }
        }
        
        .featured-link--half .info {
            display: inline-block;
            width: 80%;
            margin: 0 auto;
            padding: 20px
        }
        
        .featured-link--half .info.text-align--right {
            text-align: right
        }
        
        .featured-link--half .info.text-align--right .description:before {
            margin-right: 0
        }
        
        .featured-link--half .info.text-align--left {
            text-align: left
        }
        
        .featured-link--half .info.text-align--left .description:before {
            margin-left: 0
        }
        
        @media (max-width: 480px) {
            .featured-link--half .info {
                width: 100%;
                position: static;
                transform: translateY(0);
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                padding: 2em 0
            }
        }
        
        .featured-link--half .collection_title {
            margin-bottom: 15px;
            display: block
        }
        
        .featured-link--half .description {
            position: relative;
            font-size: 1.3vw;
            line-height: 1.5;
            margin-bottom: 20px
        }
        
        @media (max-width: 768px) {
            .featured-link--half .description {
                font-size: 2vw
            }
        }
        
        @media (max-width: 480px) {
            .featured-link--half .description {
                font-size: inherit
            }
        }
        
        @media (min-width: 1400px) {
            .featured-link--half .description {
                font-size: inherit
            }
        }
        
        .featured-link--half .button {
            height: auto;
            transition: background-color 0.2s cubic-bezier(0.55, 0.09, 0.68, 0.53), color 0.3s linear, border 0.2s cubic-bezier(0.55, 0.09, 0.68, 0.53);
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px
        }
        
        .image-align--right.featured_collections.across-1 .featured-link--section:nth-child(odd) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }
        
        .image-align--right.featured_collections.across-1 .featured-link--section:nth-child(odd) .featured-link--half {
            float: right
        }
        
        .image-align--left.featured_collections.across-1 .featured-link--section:nth-child(even) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }
        
        .image-align--left.featured_collections.across-1 .featured-link--section:nth-child(even) .featured-link--half {
            float: right
        }
        
        .featured_collections.across-2 {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
        }
        
        .image-align--left.featured_collections.across-2 .featured-link--section {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row
        }
        
        @media (max-width: 768px) {
            .image-align--left.featured_collections.across-2 .featured-link--section:nth-of-type(2n) {
                -webkit-box-orient: horizontal;
                -webkit-box-direction: reverse;
                -webkit-flex-direction: row-reverse;
                -ms-flex-direction: row-reverse;
                flex-direction: row-reverse
            }
        }
        
        .image-align--left.featured_collections.across-2 .featured-link--image:nth-of-type(4n+3) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }
        
        @media (max-width: 768px) {
            .image-align--left.featured_collections.across-2 .featured-link--image:nth-of-type(4n+3) {
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row
            }
        }
        
        .image-align--left.featured_collections.across-2 .featured-link--image:nth-of-type(4n+4) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }
        
        .image-align--right.featured_collections.across-2 .featured-link--section {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -webkit-flex-direction: row-reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }
        
        @media (max-width: 768px) {
            .image-align--right.featured_collections.across-2 .featured-link--section:nth-of-type(2n) {
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row
            }
        }
        
        .image-align--right.featured_collections.across-2 .featured-link--image:nth-of-type(4n+3) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row
        }
        
        @media (max-width: 768px) {
            .image-align--right.featured_collections.across-2 .featured-link--image:nth-of-type(4n+3) {
                -webkit-box-orient: horizontal;
                -webkit-box-direction: reverse;
                -webkit-flex-direction: row-reverse;
                -ms-flex-direction: row-reverse;
                flex-direction: row-reverse
            }
        }
        
        .image-align--right.featured_collections.across-2 .featured-link--image:nth-of-type(4n+4) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row
        }
        
        .featured_collections.across-2 .featured-link--section {
            width: 50%
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .featured-link--section {
                width: 100%
            }
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .featured-link--half {
                width: 50%
            }
        }
        
        @media (max-width: 480px) {
            .featured_collections.across-2 .featured-link--half {
                width: 100%
            }
        }
        
        .featured_collections.across-2 .description {
            font-size: 1.2vw
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .description {
                font-size: inherit
            }
        }
        
        .featured_collections.across-2 .button {
            font-size: 1.2vw
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .button {
                font-size: inherit
            }
        }
        
        .featured_collections.across-2 .featured-link--image:nth-of-type(2n+1) {
            clear: both
        }
        
        .featured_collections.across-2 .featured-link--image:nth-of-type(2n+2) .featured-link--half {
            float: left
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .featured-link--image:nth-of-type(2n+2) .featured-link--half {
                float: right
            }
        }
        
        .featured_collections.across-2 .featured-link--image:nth-of-type(3n+3) .featured-link--half {
            float: right
        }
        
        @media (max-width: 768px) {
            .featured_collections.across-2 .featured-link--image:nth-of-type(3n+3) .featured-link--half {
                float: left
            }
        }
        
        .featured_collections.across-2 .featured-link--image:nth-of-type(4n+4) .featured-link--half {
            float: right
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
        
        @media (max-width: 768px) {
            .dorp-down-container {
                position: absolute;
                top: 0;
                width: 200px;
                left: calc(50% - 100px);
                padding: 8px 16px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5)
            }
            .dorp-down-container .store-filter-option {
                display: block;
                border-bottom: 1px solid #6d6e70;
                padding: 4px 0;
                text-align: left
            }
            .dorp-down-container .store-filter-option .store-service-icon-s {
                width: 22px
            }
            .dorp-down-container .store-filter-option .service-label:first-child {
                padding-left: 34px
            }
            .dorp-down-container .store-filter-option:last-child {
                border-bottom: none
            }
        }
        
        .snapAppointments-button {
            background-color: #f38189 !important;
            border: none !important;
            box-shadow: none !important;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif !important;
            font-size: 12px !important;
            font-stretch: 100% !important;
            letter-spacing: 2px !important;
            line-height: 12px !important;
            font-weight: 700 !important;
            padding-bottom: 12px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 12px !important;
            height: 38px !important
        }
        
        .snapAppointments-button span {
            display: none !important
        }
        
        .store-service-list .snapAppointments-button {
            padding-bottom: 6px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-top: 6px !important;
            text-align: center !important;
            height: auto !important;
            font-weight: 500 !important;
            letter-spacing: 1px !important
        }
        
        @media (max-width: 480px) {
            .founders--header h1,
            .founders--header .h1 {
                font-size: 10vw
            }
            .founders--header h2,
            .founders--header .h2 {
                font-size: 6vw
            }
        }
        
        .about-us-header {
            background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/about_us_banner")
        }
        
        @media (max-width: 768px) {
            .about-us-header {
                background-image: url("https://purity-res.cloudinary.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v14/pure_temporary/about_us_banner_mobile")
            }
        }
        
        .about-us-content .special-text {
            font-family: "TimesNewRoman, 'Times New Roman', Times, Georgia, serif";
            font-style: italic;
            font-size: 16px
        }
        
        .about-us-content .about-us-collection {
            background-position: center left;
            background-size: cover;
            min-height: 200px
        }
        
        #EventSignUp .collection-banner__inner {
            background-image: url("//cdn.shopify.com/s/files/1/0648/1955/files/LandingPage_23_1900x.jpg?v=1515797553")
        }
        
        @media (max-width: 768px) {
            #EventSignUp .collection-banner__inner {
                background-image: url("//cdn.shopify.com/s/files/1/0648/1955/files/LandingPage_23_mobile_1900x.jpg?v=1528494446")
            }
        }
        
        @media (max-width: 480px) {
            #EventSignUp .collection-banner__inner {
                background-image: url("//cdn.shopify.com/s/files/1/0648/1955/files/LandingPage_23_mobile_1900x.jpg?v=1528494446")
            }
        }
        
        @media (max-width: 768px) {
            #EventSignUp .content--inner {
                background-color: rgba(255, 255, 255, 0.74)
            }
        }
        
        .user-list {
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 2rem;
            position: relative
        }
        
        .alphabet {
            margin: 1px
        }
        
        .alphabet li {
            width: 60px;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            list-style-type: none;
            border-top: 1px solid #8a9096;
            border-bottom: 1px solid #8a9096;
            text-align: center;
            color: #fff;
            font-size: 22px;
            background: #333
        }
        
        .alphabet li:first-of-type {
            border-top-width: 0;
            border-top-left-radius: 4px
        }
        
        .alphabet li:last-of-type {
            border-bottom-width: 0;
            border-bottom-left-radius: 4px
        }
        
        .alphabet li:hover {
            background: #8a9096;
            color: #333;
            cursor: pointer
        }
        
        .alphabet li.is-active {
            color: #ed3376;
            background: #fff;
            border-top-color: #8a9096
        }
        
        .alphabet li.is-disabled {
            color: #8a9096;
            background: #f3f3f3;
            border-top-color: #fff;
            border-bottom-color: #ccc
        }
        
        .alphabet li.is-disabled:hover {
            cursor: default
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
            border-bottom-width: 0 !important
        }
        
        .ui-draggable-dragging:hover {
            background: transparent !important
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
            position: absolute !important;
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
        
        .collection-banner__inner {
            min-height: 175px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center right
        }
        
        .collection-banner__inner.center {
            background-position: center center
        }
        
        .collection-banner__inner.full-height {
            min-height: 500px
        }
        
        @media (max-width: 480px) {
            .collection-banner__inner {
                background-position: 78% 50%
            }
        }
        
        @media (max-width: 768px) {
            .collection-banner__inner {
                min-height: 210px
            }
        }
        
        @media (min-width: 769px) {
            .collection-banner__inner {
                height: 16vw;
                min-height: 260px
            }
            .collection-banner__inner.full-height {
                height: 25vw;
                min-height: 580px
            }
        }
        
        @media (min-width: 960px) {
            .collection-banner__inner.full-height {
                height: 25vw;
                min-height: 560px
            }
        }
        
        @media (min-width: 1400px) {
            .collection-banner__inner {
                height: 16vw;
                min-height: 300px
            }
            .collection-banner__inner.full-height {
                height: 30vw;
                min-height: 660px
            }
        }
        
        @media (max-width: 480px) {
            .collection-banner__inner.mobile-pull-img__right {
                background-position: 10% 50%
            }
        }
        
        .mobile-pull-img__right .mobile-pull-img__right--content {
            margin-left: 50%;
            text-align: center !important;
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
        
        .collection-banner__inner--content {
            position: absolute
        }
        
        @media (max-width: 480px) {
            .collection-banner__inner--content {
                font-size: 4vw
            }
        }
        
        @media (max-width: 768px) {
            .collection-banner__inner--content {
                margin: 5% 0;
                position: static;
                width: 100%;
                text-align: center
            }
        }
        
        @media (min-width: 769px) {
            .collection-banner__inner--content {
                display: block;
                padding: 0 35px;
                width: 100%
            }
        }
        
        @media (min-width: 960px) {
            .collection-banner__inner--content {
                padding: 0 12%
            }
        }
        
        .collection-banner--title {
            font-size: 34px;
            letter-spacing: 3px;
            margin-bottom: 0
        }
        
        @media (max-width: 768px) {
            .collection-banner--title {
                font-size: 24px;
                max-width: 100%
            }
        }
        
        .collection-banner--description {
            font-size: 16px;
            line-height: 1.4;
            letter-spacing: 1px;
            max-width: 40%
        }
        
        @media (max-width: 768px) {
            .collection-banner--description {
                padding: 0 2%;
                width: 100%;
                transform: none;
                max-width: 100%
            }
        }
        
        .collection-banner--description p,
        .collection-banner--description .p-tag {
            font-size: 15px
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
        
        .currency-selector {
            display: -moz-inline-stack;
            display: inline-block;
            zoom: 1;
            *display: inline;
            color: #bbbbbb;
            font-size: 0;
            line-height: 1.5;
            cursor: pointer
        }
        
        .currency-selector .currency-selector-trigger {
            display: -moz-inline-stack;
            display: inline-block;
            zoom: 1;
            *display: inline;
            padding: 5px 10px;
            border: 1px solid #D6D6D6;
            background: none #fff;
            font-size: 13px
        }
        
        .currency-selector .currency-selector-trigger:hover {
            color: #333;
            transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            -webkit-transition: all 0.2s ease-in-out;
            -o-transition: all 0.2s ease-in-out
        }
        
        .currency-selector span img {
            vertical-align: text-bottom
        }
        
        .currency-selector .selected {
            border: 1px solid #ed3376;
            color: #ed3376
        }
        
        .currencyPopWindow-currency-selectors-img {
            width: 26px;
            vertical-align: middle
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
        
        .select-styled {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #fce4de;
            padding: 8px 15px;
            -webkit-transition: all 0.2s ease-in;
            -moz-transition: all 0.2s ease-in;
            -ms-transition: all 0.2s ease-in;
            -o-transition: all 0.2s ease-in;
            transition: all 0.2s ease-in
        }
        
        .select-styled:after {
            content: "";
            width: 0;
            height: 0;
            border: 7px solid transparent;
            border-color: #333 transparent transparent transparent;
            position: absolute;
            top: 16px;
            right: 10px
        }
        
        .select-styled:hover {
            background-color: #fbdcd5
        }
        
        .select-styled:active,
        .select-styled.active {
            background-color: #fad1c7
        }
        
        .select-styled:active:after,
        .select-styled.active:after {
            top: 9px;
            border-color: transparent transparent #333 transparent
        }
        
        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            z-index: 999;
            margin: 0;
            padding: 0;
            list-style: none;
            background-color: #fad1c7
        }
        
        .select-options li {
            margin: 0;
            padding: 12px 0;
            text-indent: 15px;
            border-top: 1px solid #fff;
            -webkit-transition: all 0.15s ease-in;
            -moz-transition: all 0.15s ease-in;
            -ms-transition: all 0.15s ease-in;
            -o-transition: all 0.15s ease-in;
            transition: all 0.15s ease-in
        }
        
        .select-options li:hover {
            color: #fce4de;
            background: #333
        }
        
        .select-options li[rel="hide"] {
            display: none
        }
        
        @media (max-width: 768px) {
            #custmeta input[type="submit"] {
                display: block
            }
        }
        
        @media (max-width: 480px) {
            .collection-review--container .stamped-product-reviews-badge {
                font-size: 12px
            }
            .collection-review--container .stamped-product-reviews-badge>span {
                display: block
            }
        }
        
        .stamped-container {
            border: none !important;
            padding: 2em 0px !important
        }
        
        .stamped-summary-actions-newquestion,
        .stamped-summary-actions-newreview {
            background: grey !important;
            color: white !important;
            border: none !important;
            padding: 10px 15px !important
        }
        
        .fa-star,
        .fa-star-o,
        .fa-star-half-o {
            color: #ed3376 !important
        }
        
        .summary-rating-bar>div {
            background: #ed3376 !important;
            color: #fff !important
        }
        
        h2.stamped-header-title,
        .stamped-header-title.h2 {
            display: none !important
        }
        
        .hide-text span.stamped-badge-caption {
            display: none
        }
        
        .fa-star:before,
        .fa-star-o:before,
        .fa-star-half-o:before {
            font-size: 17px !important
        }
        
        .stamped-review-content-body {
            font-size: 0.9em !important
        }
        
        .stamped-review-reply {
            background: none !important;
            border-color: pink !important
        }
        
        .stamped-review-reply .stamped-review-footer {
            display: none
        }
        
        .stamped-review-reply h3.stamped-review-header-title,
        .stamped-review-reply .stamped-review-header-title.h3 {
            clear: none;
            float: left;
            margin: 0px
        }
        
        .stamped-review-avatar {
            background: #fce4de !important;
            color: white !important;
            text-shadow: none !important;
            font-size: 21px !important;
            border-radius: 50%
        }
        
        ul.stamped-tabs li.active {
            color: #ed3374 !important;
            border-color: #ed3374 !important
        }
        
        select.stamped-sort-select {
            background-image: none !important;
            -webkit-appearance: menulist !important
        }
        
        .swatch .header {
            margin: 0.5em 0
        }
        
        .swatch input {
            display: none
        }
        
        .swatch label {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            float: left;
            min-width: 35px;
            height: 35px;
            margin: 0;
            background-color: #ddd;
            font-size: 13px;
            text-align: center;
            line-height: 35px;
            white-space: nowrap;
            text-transform: uppercase
        }
        
        .swatch-element label {
            padding: 0 10px;
            border-radius: 50%;
            box-sizing: border-box
        }
        
        .color.swatch-element label {
            padding: 0
        }
        
        .swatch input:checked+label,
        .swatch .active input+label {
            -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);
            border: 2px solid #fff
        }
        
        .swatch input+label.with-value {
            background-color: #fff;
            border: 2px solid #ddd
        }
        
        .swatch input:checked+label.with-value {
            background-color: #fff;
            border-color: #f8b4b9
        }
        
        .swatch .swatch-element {
            float: left;
            -webkit-transform: translateZ(0);
            -webkit-font-smoothing: antialiased;
            padding: 0px 10px 10px 0;
            position: relative
        }
        
        .product-bottom .swatch .swatch-element {
            padding: 0
        }
        
        .crossed-out {
            position: absolute;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            left: 0;
            top: 0
        }
        
        .collection-swatch .crossed-out {
            width: 100%;
            height: 100%
        }
        
        .swatch .swatch-element .crossed-out {
            display: none
        }
        
        .swatch .swatch-element.soldout .crossed-out {
            display: block;
            pointer-events: none
        }
        
        .swatch .tooltip {
            text-align: center;
            background: gray;
            color: #fff;
            bottom: 100%;
            padding: 10px;
            display: block;
            position: absolute;
            width: 100px;
            left: -31px;
            margin-bottom: 15px;
            filter: alpha(opacity=0);
            -khtml-opacity: 0;
            -moz-opacity: 0;
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(10px);
            -moz-transform: translateY(10px);
            -ms-transform: translateY(10px);
            -o-transform: translateY(10px);
            transform: translateY(10px);
            -webkit-transition: all .25s ease-out;
            -moz-transition: all .25s ease-out;
            -ms-transition: all .25s ease-out;
            -o-transition: all .25s ease-out;
            transition: all .25s ease-out;
            -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
            -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
            -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
            -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
            z-index: 10000;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }
        
        .swatch .tooltip:before {
            bottom: -20px;
            content: " ";
            display: block;
            height: 20px;
            left: 0;
            position: absolute;
            width: 100%
        }
        
        .swatch .tooltip:after {
            border-left: solid transparent 10px;
            border-right: solid transparent 10px;
            border-top: solid gray 10px;
            bottom: -10px;
            content: " ";
            height: 0;
            left: 50%;
            margin-left: -13px;
            position: absolute;
            width: 0
        }
        
        .swatch .swatch-element:hover .tooltip {
            filter: alpha(opacity=100);
            -khtml-opacity: 1;
            -moz-opacity: 1;
            opacity: 1;
            visibility: visible;
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -ms-transform: translateY(0px);
            -o-transform: translateY(0px);
            transform: translateY(0px)
        }
        
        .swatch.error {
            background-color: #e8d2d2 !important;
            color: #333 !important;
            padding: 1em;
            border-radius: 5px
        }
        
        .swatch.error p,
        .swatch.error .p-tag {
            margin: 0.7em 0
        }
        
        .swatch.error p:first-child,
        .swatch.error .p-tag:first-child {
            margin-top: 0
        }
        
        .swatch.error p:last-child,
        .swatch.error .p-tag:last-child {
            margin-bottom: 0
        }
        
        .swatch.error code {
            font-family: monospace
        }
        
        .selector-wrapper {
            position: absolute;
            left: 9999px
        }
        
        .tabs {
            font-size: 0;
            margin: 46px 0
        }
        
        .tabs:after {
            clear: both;
            content: '';
            display: table
        }
        
        .tabs .tab {
            display: inline
        }
        
        .tabs .tab-label {
            display: inline-block;
            font-size: 16px;
            font-size: 1rem;
            position: relative;
            vertical-align: bottom;
            font-style: normal;
            font-family: 'Avenir Next Demi', 'Times New Roman', serif
        }
        
        .tabs .tab-label span {
            padding: 0 14px 5px;
            line-height: 2.4em;
            pointer-events: none
        }
        
        .tabs .tab>[type="radio"] {
            clip: rect(0 0 0 0);
            height: 1px;
            opacity: 0;
            position: fixed;
            width: 1px;
            z-index: -1
        }
        
        .tabs .tab-panel {
            display: inline;
            display: inline-block;
            overflow: hidden;
            height: 0;
            width: 0
        }
        
        .tabs .tab-content {
            position: absolute;
            max-height: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            padding: 0;
            float: left;
            font-size: 16px;
            font-size: 1rem;
            margin-top: -1px;
            width: 100%
        }
        
        .tabs .tab-content .product__for-whom>li {
            padding-right: 24px;
            padding-left: 24px
        }
        
        .tabs .tab-content .product__for-whom>li:not(:last-child) {
            border-right: 1px solid #dddee0
        }
        
        @media (max-width: 480px) {
            .tabs .tab-content .product__for-whom>li {
                padding-right: 5px;
                padding-left: 5px
            }
        }
        
        .tabs .tab [type="radio"]:not(:checked)+.tab-label i.arrow.up {
            display: none
        }
        
        .tabs .tab [type="radio"]:checked+.tab-label {
            background: white;
            z-index: 1
        }
        
        @media (max-width: 768px) {
            .tabs .tab [type="radio"]:checked+.tab-label i.arrow.down {
                display: none
            }
            .tabs .tab [type="radio"]:checked+.tab-label i.arrow.up {
                display: block
            }
        }
        
        .tabs .tab [type="radio"]:checked+.tab-label span {
            border-bottom: solid 4px #fcdbe3
        }
        
        .tabs .tab [type="radio"]:checked ~ .tab-panel {
            display: inline
        }
        
        .tabs .tab [type="radio"]:checked ~ .tab-panel .tab-content {
            position: relative;
            max-height: 4000px;
            padding: 20px;
            transition: max-height 4s
        }
        
        .tabs .tab [type="radio"]:checked ~ .tab-panel .consumer-study-chart circle {
            animation: fillup 0.8s ease-out forwards
        }
        
        @media \\0screen\\,
        screen\\9 {
            .tabs {
                zoom: 1
            }
            .tabs .tab .tab-radio {
                filter: Alpha(opacity=0);
                position: absolute;
                z-index: -1
            }
            .tabs .tab .tab-panel {
                display: none;
                height: auto;
                overflow: visible;
                position: static;
                width: auto
            }
            .tabs .tab-content {
                float: none;
                padding-bottom: 1px;
                padding-top: 1px;
                width: auto
            }
            .tabs .checked label {
                background: white;
                border-bottom-width: 0;
                z-index: 1
            }
            .tabs .checked .tab-panel {
                display: inline
            }
            .tabs .checked .tab-panel {
                display: inline;
                float: left;
                width: 100%
            }
        }
        
        .tabs {
            color: #222
        }
        
        .tabs a:link,
        .tabs a:visited,
        .tabs a:hover,
        .tabs a:focus,
        .tabs a:active {
            color: #333;
            border-bottom: 0.08em solid rgba(0, 0, 0, 0.1)
        }
        
        .for {
            display: inline-block;
            position: relative
        }
        
        .for:after {
            background: #DDD;
            bottom: 150%;
            color: #222;
            font-family: sans-serif;
            font-size: 12px;
            opacity: 0;
            padding: .5em;
            pointer-events: none;
            position: absolute;
            right: 0;
            -webkit-transition: opacity .2s ease-in-out;
            transition: opacity .2s ease-in-out;
            white-space: nowrap
        }
        
        .for:hover:after {
            opacity: 1
        }
        
        .for.default-tab {
            color: #8AD
        }
        
        .for.ie8-and-below {
            color: #DA8
        }
        
        .for.default-tab:after {
            content: 'For default tab'
        }
        
        .for.ie8-and-below:after {
            content: 'For IE8 and below'
        }
        
        @media only screen and (max-width: 43em) {
            .tabs .tab>label {
                background: #f3f3f3;
                border-color: #dddddd;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                width: 100%
            }
            .tabs .tab [type="radio"]:checked+.tab-label {
                color: #333
            }
        }
        
        .tab i {
            border: solid #333;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px
        }
        
        .tab i.white-arrow {
            border-color: #fff
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
